import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative asset paths work both on GitHub project pages and local previews.
  base: "./",
  plugins: [react()],
});
