import axios from 'axios';
let BASE_URL = process.env.BASE_URL || 'http://localhost:8080';
let BASE_API_URL = process.env.BASE_API_URL || '/api/v1';

const instance = axios.create({
  baseURL: `${BASE_URL}${BASE_API_URL}`,
  headers: {
    'Content-type': 'application/json',
  },
});

export default instance;
