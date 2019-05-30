import { combineReducers } from 'redux';
import authReducer from './authReducer';
import meetupReducer from './meetupReducer';

export default combineReducers({
  auth: authReducer,
  meetup: meetupReducer,
});
