import React from 'react';
import { connect } from 'react-redux';
import { getCurrentOjectInfo } from '../../../actions/index';
import ColorPicker from './colorPicker';
import OpacitySlider from './opacitySlider';
import NameInput from './nameInput';
import TagColor from './tagColor';


const ObjectControlsContainer = (props) => {
  console.log('Fill ', props.currentObject.opacity);
  return (
    <div className="object-controls-container">
      <NameInput name={props.currentObject.name} />
      <TagColor />
      <ColorPicker color={props.currentObject.fill} />
      <OpacitySlider opacity={props.currentObject.opacity} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentObject: state.currentObject,
  };
}

export default connect(mapStateToProps, null)(ObjectControlsContainer);
