import { CURRENT_OBJECT } from '../actions/types';

const INITIAL_STATE = {
  fill: '',
  name: '',
  opacity: 1,
};

export default function (state = INITIAL_STATE, action) {
  console.log('executed reducer');
  switch (action.type) {
    case CURRENT_OBJECT: {
      console.log('inside current object');
      return {
        ...action.payload,
      };
    }
    default:return state;
  }
}
