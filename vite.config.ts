// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
// import react from "@vitejs/plugin-react";
import { reactRouter } from "@react-router/dev/vite";
import { vercelPreset } from "@vercel/react-router/vite";

import path from "path";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), vercelPreset()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
