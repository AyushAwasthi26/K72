import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// ✅ Works perfectly with Tailwind + Vercel + GSAP
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: './',
});
