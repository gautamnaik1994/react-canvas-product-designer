import { combineReducers } from 'redux';
import currentObjectReducer from './currentObjectReducer';

const rootReducer = combineReducers({
  currentObject: currentObjectReducer,
});

export default rootReducer;
