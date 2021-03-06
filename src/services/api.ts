import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: baseUrl
});

export { api };