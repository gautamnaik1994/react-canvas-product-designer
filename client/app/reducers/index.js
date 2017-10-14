import { combineReducers } from 'redux';
import authReducer from './authReducers';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
