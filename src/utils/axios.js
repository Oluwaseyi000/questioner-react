import axios from 'axios';

const token = localStorage.getItem('token');

const Axios = axios.create({
  baseURL: 'https://seyiproject.herokuapp.com/api/v1',
});
Axios.defaults.headers.common.Authorization = token;
export default Axios;
