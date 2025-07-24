import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['src/styles'],
    additionalData: `@use "mixins/index" as *;`
  },
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
};

export default nextConfig;
