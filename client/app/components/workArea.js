import React from 'react';
import Canvas from './canvas';
import BasicControlsContainer from './basicControls/basicControlsContainer';
import ObjectCanvasControlsContainer from './objectCanvasControls/objectCanvasControlsContainer';
import LayerControlsContainer from './layerControls/layerContainer';

const WorkArea = () => (
  <div className="workarea columns">
    <div className="column is-2">
      <LayerControlsContainer />
    </div>
    <div className="column">
      <Canvas />
      <BasicControlsContainer />
    </div>
    <div className="column is-2">
      <ObjectCanvasControlsContainer />
    </div>
  </div>
);
export default WorkArea;
