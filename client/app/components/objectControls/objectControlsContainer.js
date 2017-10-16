import React from 'react';
import ColorPicker from './colorPicker';
import OpacitySlider from './opacitySlider';

const ObjectControlsContainer = () => (
  <div className="object-controls-container">
    <ColorPicker />
    <OpacitySlider />
  </div>
);

export default ObjectControlsContainer;
