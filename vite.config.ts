import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   server: {
    host: "0.0.0.0", // or "0.0.0.0"
    port: 3000,
    strictPort: true,
    cors: true
  }, plugins: [react()],
})
