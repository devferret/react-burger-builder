import axios from 'axios';

const instance = axios.create({
  baseURL: '<YOUR FIREBASE URI>',
});

export default instance;
