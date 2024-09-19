// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import fs from 'fs';
// import path from 'path';
// import dotenv from 'dotenv';

// // Đọc biến môi trường từ file .env
// dotenv.config();

// const certPath = process.env.VITE_CERT_LINK;
// const keyPath = process.env.VITE_KEY_LINK;

// // Kiểm tra xem các biến môi trường có được định nghĩa không
// if (!certPath || !keyPath) {
//   throw new Error('CERT_LINK hoặc KEY_LINK không được định nghĩa trong biến môi trường.');
// }

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: process.env.VITE_IP || 'localhost',
//     port: 5173,
//     https: {
//       key: fs.readFileSync(path.resolve(keyPath)),
//       cert: fs.readFileSync(path.resolve(certPath))
//     }
//   }
// });




import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Đọc biến môi trường từ file .env
dotenv.config();


// Cấu hình cho môi trường phát triển
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: process.env.VITE_IP || 'localhost',
  //   port: 5173,
  // }
});
