import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ Works perfectly with Tailwind + Vercel + GSAP
export default defineConfig({
  plugins: [react()],
  base: './',
});
