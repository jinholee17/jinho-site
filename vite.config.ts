import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/guess-the-wiki/",
  plugins: [react()],
});
