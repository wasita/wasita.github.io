import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [sveltekit()],
  define: {
    // baked in at build time, so the footer's "last updated" reflects the latest deploy
    __BUILD_DATE__: JSON.stringify(
      new Date().toISOString().slice(0, 10)
    ),
  },
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
});
