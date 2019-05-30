import Axios from '../../utils/axios';

import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_UP } from './actionTypes';

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
    localStorage.setItem(
      'token',
      `authorization ${loginData.data.data[0].token}`,
    );

    Axios.defaults.headers.common.Authorization = `authorization ${
      loginData.data.data[0].token
    }`;
    redirect.push('/meetups');
  } catch (error) {
    dispatch(loginFailure(error.response.data.error));
  }
};

export const SignupAction = (formData, redirect) => async (dispatch) => {
  try {
    const signupData = await Axios.post('/auth/signup', formData);
    dispatch(signupSuccess(signupData.data.data[0]));
    localStorage.setItem(
      'token',
      `authorization ${signupData.data.data[0].token}`,
    );
    Axios.defaults.headers.common.Authorization = `authorization ${
      signupData.data.data[0].token
    }`;
    redirect.push('/meetups');
  } catch (error) {
    dispatch(loginFailure(error.response.data.error));
  }
};
