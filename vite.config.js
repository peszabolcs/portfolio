import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize build output with esbuild (default, faster than terser)
    minify: 'esbuild',
    // Remove console.logs in production
    esbuild: {
      drop: ['console', 'debugger'],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion-vendor': ['framer-motion'],
          'icons-vendor': ['react-icons'],
        },
      },
    },
    // Set chunk size warning limit
    chunkSizeWarningLimit: 600,
  },
})
