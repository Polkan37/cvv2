import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['src/styles'],
    additionalData: `@use "mixins/index" as *;`
  },
};

export default nextConfig;
