import { GET_MEETUPS, ERROR, GET_MEETUP } from './actionTypes';
import Axios from '../../utils/axios';

const meetup = (payload) => ({
  type: GET_MEETUPS,
  payload,
});

const singleMeetup = (payload) => ({
  type: GET_MEETUP,
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

export const getMeetup = (id) => async (dispatch) => {
  try {
    const meetupData = await Axios.get(`/meetups/${id}`);
    dispatch(singleMeetup(meetupData.data.data[0]));
  } catch (error) {
    dispatch(Error(error.response.data));
  }
};
