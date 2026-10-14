import { expect, test } from "@playwright/test";
import en from "../messages/en.json";
import ru from "../messages/ru.json";
import ka from "../messages/ka.json";
import { stores as catalog } from "../data/stores";
import { stores as featured } from "../lib/mall-data";

test("dictionaries share the same keys in EN, RU and KA", () => {
  const keys = (messages: { copy: Record<string, string> }) => Object.keys(messages.copy).sort();
  expect(keys(ru)).toEqual(keys(en));
  expect(keys(ka)).toEqual(keys(en));
});

test("homepage brand categories match the store catalog", () => {
  for (const brand of featured) {
    const store = catalog.find(item => item.slug === brand.slug);
    expect(store, brand.slug).toBeDefined();
    expect(store!.categories, brand.slug).toContain(brand.category);
  }
});

test("language switch keeps the path, query and hash", async ({ page }) => {
  await page.goto("/en/entertainment/cavea?x=1#top");
  await page.locator('.languages a[hreflang="ru"]:visible').click();
  await expect(page).toHaveURL(/\/ru\/entertainment\/cavea\?x=1#top$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");
  await page.locator('.languages a[hreflang="ka"]:visible').click();
  await expect(page).toHaveURL(/\/ka\/entertainment\/cavea\?x=1#top$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "ka");
});

test("store search, combined filters and reset update the count", async ({ page }) => {
  await page.goto("/en/stores");
  const count = page.locator(".directory-count");
  await expect(count).toHaveText(/^80 /);
  await page.locator("#directory-search").fill("ZARA");
  await expect(count).toHaveText(/^1 /);
  await page.locator("#directory-search").fill("");
  await page.locator(".directory-categories button", { hasText: /^Fashion$/ }).click();
  await page.locator("#directory-floor").selectOption("1");
  const combined = Number((await count.textContent())!.split(" ")[0]);
  expect(combined).toBeGreaterThan(0);
  expect(combined).toBeLessThan(80);
  await page.locator(".directory-reset").click();
  await expect(count).toHaveText(/^80 /);
});

test("header search announces results and Escape returns focus", async ({ page }) => {
  await page.goto("/en");
  const trigger = page.locator(".search-trigger");
  await trigger.click();
  await expect(page.locator("#store-search")).toBeFocused();
  await page.locator("#store-search").fill("zara");
  await expect(page.locator(".search-status")).toHaveText(/1/);
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
});

test("map is server-rendered and deep links select a place", async ({ page, request }) => {
  const html = await (await request.get("/en/map")).text();
  expect(html).toContain("<h1");
  // The Suspense fallback is the full directory, so places are in the initial HTML.
  expect(html).toContain('class="map-result-name">ZARA');
  await page.goto("/en/map?type=store&slug=zara");
  await expect(page.locator("#selected-place-title")).toHaveText("ZARA");
});

test("unknown pages return a localized 404 with recovery links", async ({ page }) => {
  const response = await page.goto("/ru/does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.locator("h1")).toContainText("НЕ НАЙДЕНА");
  await expect(page.locator('main a[href="/ru"]')).toBeVisible();
  await expect(page.locator('main a[href="/ru/stores"]')).toBeVisible();
});

test("legacy store slugs redirect to the brand slug", async ({ request }) => {
  const response = await request.get("/ru/stores/giordano", { maxRedirects: 0 });
  expect(response.status()).toBe(308);
  expect(response.headers().location).toBe("/ru/stores/adidas");
});

for (const width of [320, 390, 768]) {
  test(`no horizontal overflow or clipped headings at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ["/ka", "/ru", "/en", "/ka/stores", "/ru/dining", "/ka/map", "/ka/visit", "/ru/offers"]) {
      await page.goto(path);
      const problems = await page.evaluate(() => {
        const root = document.documentElement;
        const clipped = [...document.querySelectorAll("h1, h2, h3")]
          .filter(heading => heading.clientWidth > 2 && heading.scrollWidth > heading.clientWidth + 1)
          .map(heading => heading.textContent?.trim().slice(0, 30));
        return root.scrollWidth > root.clientWidth ? [`page ${root.scrollWidth}/${root.clientWidth}`, ...clipped] : clipped;
      });
      expect(problems, path).toEqual([]);
    }
  });
}
