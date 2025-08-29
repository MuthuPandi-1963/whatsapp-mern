import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwind_scrollbar from 'tailwind-scrollbar'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),tailwind_scrollbar],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
