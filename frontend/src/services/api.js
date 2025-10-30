import axios from 'axios';

// configuraração da isntalação do axios om a url base da api. 
const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 500, 
});

export default api;
