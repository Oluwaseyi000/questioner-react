import { Axios } from '../../utils/axios';

import { SIGN_IN, DISPATCH_ERROR } from './actionTypes';

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
