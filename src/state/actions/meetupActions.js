import { GET_MEETUPS, ERROR } from './actionTypes';
import Axios from '../../utils/axios';

const meetup = (payload) => ({
  type: GET_MEETUPS,
  payload,
});

const Error = (error) => ({
  type: ERROR,
  error,
});

export const getMeetups = () => async (dispatch) => {
  try {
    const meetups = await Axios.get('/meetups');
    dispatch(meetup(meetups.data.data));
  } catch (error) {
    dispatch(Error(error.response.data));
  }
};
