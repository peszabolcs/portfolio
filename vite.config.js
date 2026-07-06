import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    minify: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 700,
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
  // vite-react-ssg options
  ssgOptions: {
    script: "async",
    formatting: "minify",
    // Discover all routes from the route config automatically.
    crittersOptions: false,
  },
});
