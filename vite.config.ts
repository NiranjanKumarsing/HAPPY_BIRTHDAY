import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths so assets never 404 on Netlify, Vercel, or GitHub Pages
});
