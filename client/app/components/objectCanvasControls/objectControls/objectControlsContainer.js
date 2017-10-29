import React from 'react';
import ColorPicker from './colorPicker';
import OpacitySlider from './opacitySlider';
import NameInput from './nameInput';
import TagColor from './tagColor';

const ObjectControlsContainer = () => (
  <div className="object-controls-container">
    <NameInput />
    <TagColor />
    <ColorPicker />
    <OpacitySlider opacity={1} />
  </div>
);

export default ObjectControlsContainer;
