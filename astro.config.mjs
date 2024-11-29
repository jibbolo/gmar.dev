// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    build: {
      rollupOptions: {
        external: ["@rollup/rollup-linux-x64-gnu"],
      },
    },
  },
});
