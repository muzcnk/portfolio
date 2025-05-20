import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true, // Tarayıcıyı otomatik aç
    host: true // Network üzerinden erişime izin ver
  }
})
