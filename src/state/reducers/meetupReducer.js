import { GET_MEETUPS, ERROR } from '../actions/actionTypes';

const initialState = {
  meetups: [],
  meetup: {},
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MEETUPS:
      return {
        ...state,
        meetups: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
