import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://seyiproject.herokuapp.com/api/v1',
});

Axios.defaults.headers.common.Authorization =
  'authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGV0YWlsIjp7ImlkIjo4MCwiaXNhZG1pbiI6ZmFsc2V9LCJpYXQiOjE1NTk1ODY3NDN9.TwBdGKue2mQTi5u5NKwgSmqMbxflKcLlPfXLHJoISFA';
export default Axios;
