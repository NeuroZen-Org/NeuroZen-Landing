// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      PUBLIC_NEUROZEN_FRONTEND: envField.string({
        context: "client",
        access: "public",
        optional: false,
      }),
    },
  },
});
