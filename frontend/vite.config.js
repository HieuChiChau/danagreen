import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '172.26.137.248', // Thay bằng địa chỉ IP cục bộ của bạn
    port: 5173, // Hoặc bất kỳ cổng nào bạn muốn sử dụng
  },
});
