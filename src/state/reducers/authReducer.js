import { SIGN_IN, SIGN_UP } from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        items: action.payload,
      };
    case SIGN_UP:
    default:
      return state;
  }
};
