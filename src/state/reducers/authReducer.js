import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  auth: {},
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        items: action.payload,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        auth: action.payload,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
