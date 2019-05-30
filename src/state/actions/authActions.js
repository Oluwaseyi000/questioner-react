import { Axios } from '../../utils/axios';

import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP,
  DISPATCH_ERROR,
} from './actionTypes';

export const getPosts = () => async (dispatch) => {
  try {
    const posts = await Axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
      type: SIGN_IN,
      payload: posts.data,
    });
  } catch (error) {
    dispatch({
      type: DISPATCH_ERROR,
      payload: 'error occur',
    });
  }
};

const loginSuccess = (payload) => ({
  type: SIGN_IN_SUCCESS,
  payload,
});

const loginFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  error,
});

const signupSuccess = (payload) => ({
  type: SIGN_UP,
  payload,
});

export const LoginAction = (formData, redirect) => async (dispatch) => {
  try {
    const loginData = await Axios.post('/auth/login', formData);
    dispatch(loginSuccess(loginData.data.data[0]));
    localStorage.setItem('token', loginData.data.data[0].token);
    Axios.defaults.headers.common.Authorization = loginData.data.data[0].token;
    redirect.push('/');
  } catch (error) {
    dispatch(loginFailure(error.response.data.error));
  }
};

export const SignupAction = (formData, redirect) => async (dispatch) => {
  try {
    const signupData = await Axios.post('/auth/signup', formData);
    dispatch(signupSuccess(signupData.data.data[0]));
    localStorage.setItem('token', signupData.data.data[0].token);
    Axios.defaults.headers.common.Authorization = signupData.data.data[0].token;
    redirect.push('/');
  } catch (error) {
    dispatch(loginFailure(error.response.data.error));
  }
};
