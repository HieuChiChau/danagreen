import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.1.241',
    port: 5173,
    https: {
      key: fs.readFileSync('E:/InTE/danagreen/backend/key.pem'),
      cert: fs.readFileSync('E:/InTE/danagreen/backend/cert.pem')
    }
  },
});