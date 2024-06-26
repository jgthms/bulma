import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: "../../assets/javascript/bulma-customizer",
    rollupOptions: {
      output: {
        assetFileNames: "[name].css",
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      root: "/src",
      components: "/src/components",
    },
  },
});
