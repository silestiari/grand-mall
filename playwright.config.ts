import { defineConfig } from "@playwright/test";

// Regression suite against a production build. Uses the installed Google Chrome,
// so no Playwright browser download is needed.
export default defineConfig({
  testDir: "tests",
  fullyParallel: true,
  reporter: "list",
  use: { baseURL: "http://localhost:3200", channel: "chrome" },
  webServer: {
    command: "npm run build && npm run start -- -p 3200",
    url: "http://localhost:3200/en",
    reuseExistingServer: !process.env.CI,
    timeout: 300_000,
  },
});
