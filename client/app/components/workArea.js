import React from 'react';
import Canvas from './canvas';
import CanvasControlsContainer from './canvasControls/canvasControlsContainer';
import ObjectControlsContainer from './objectControls/objectControlsContainer';

const WorkArea = () => (
  <div className="workarea">
    <Canvas />
    <ObjectControlsContainer />
    <CanvasControlsContainer />
  </div>
);
export default WorkArea;
