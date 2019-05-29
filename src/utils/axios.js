import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'https://seyiproject.herokuapp.com/api/v1',
});
