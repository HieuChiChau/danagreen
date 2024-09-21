// src/api.js
import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://192.168.1.215:5000', // Thay đổi baseURL cho phù hợp với API của bạn
    baseURL: 'https://danagreenai.serveo.net', 
    timeout: 5000, // Thay đổi thời gian chờ (timeout) nếu cần
});

export default api;
