import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // allows LAN access too
    port: 5173,        // ensure it always uses 5173
    strictPort: true,  // fail if 5173 is busy instead of changing port
    hmr: {
      protocol: 'ws',  // or 'wss' if using HTTPS
      host: 'localhost',
      port: 5173
    }
  }
})
