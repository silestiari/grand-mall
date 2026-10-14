import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Use the request-config alias directly; message extraction is not needed.
  turbopack: { resolveAlias: { "next-intl/config": "./i18n/request.ts" } },
  webpack(config) {
    config.resolve.alias["next-intl/config"] = require.resolve("./i18n/request.ts");
    return config;
  },
  async redirects() {
    // Legacy upstream slugs named other brands: Adidas was "giordano", Shavdia was "tefal".
    const stores = [["giordano", "adidas"], ["tefal", "shavdia"]].flatMap(([from, to]) => [
      { source: `/stores/${from}`, destination: `/en/stores/${to}`, permanent: true },
      { source: `/:locale(en|ru|ka)/stores/${from}`, destination: `/:locale/stores/${to}`, permanent: true },
    ]);
    return [{ source: "/entertainment/oktopus", destination: "/en/entertainment/oktopus-fitness", permanent: true }, { source: "/:locale(en|ru|ka)/entertainment/oktopus", destination: "/:locale/entertainment/oktopus-fitness", permanent: true }, ...stores];
  },
};

export default nextConfig;
