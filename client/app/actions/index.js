import { CURRENT_OBJECT } from './types';
import { reduxStore } from '../index';

export function getCurrentOjectInfo(selectedObject) {
  console.log(selectedObject.target);
  console.log('inside dispatch');
  reduxStore.dispatch({
    type: CURRENT_OBJECT,
    payload: {
      opacity: selectedObject.target.opacity,
      name: selectedObject.target.name,
      fill: selectedObject.target.fill,
      id: selectedObject.target.id,
      tagColor: selectedObject.target.tagColor,
    },
  });
  console.log('payload', selectedObject.target.opacity);
}

export function testFuntion() {
  return null;
}
