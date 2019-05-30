import { GET_MEETUPS, GET_MEETUP, ERROR } from '../actions/actionTypes';

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
    case GET_MEETUP:
      return {
        ...state,
        meetup: action.payload,
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
