import axios from 'axios';

const quieroLoteApi = axios.create({
  baseURL: '/api',
});

export default quieroLoteApi;
