import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  safelist: "p-1 p-2 p-3 p-4",
  preflight: false,
  attributify: true,
  extract: {
    include: ["src/**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git", "dist"],
  },
});
