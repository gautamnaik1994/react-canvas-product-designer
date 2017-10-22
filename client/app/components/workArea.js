import React from 'react';
import Canvas from './canvas';
import BasicControlsContainer from './basicControls/basicControlsContainer';
import ObjectCanvasControlsContainer from './objectCanvasControls/objectCanvasControlsContainer';
import LayerControlsContainer from './layerControls/layerContainer';

const WorkArea = () => (
  <div className="workarea">
    <Canvas />
    <ObjectCanvasControlsContainer />
    <BasicControlsContainer />
    <LayerControlsContainer />
  </div>
);
export default WorkArea;
