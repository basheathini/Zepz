import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.stackexchange.com/2.2/',
  headers: {
    timeout: 1500,
  },
});

export default instance;
