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
    return [{ source: "/entertainment/oktopus", destination: "/en/entertainment/oktopus-fitness", permanent: true }, { source: "/:locale(en|ru|ka)/entertainment/oktopus", destination: "/:locale/entertainment/oktopus-fitness", permanent: true }];
  },
};

export default nextConfig;
