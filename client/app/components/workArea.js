import React from 'react';
import Canvas from './canvas';
import BasicControlsContainer from './basicControls/basicControlsContainer';
import ObjectCanvasControlsContainer from './objectCanvasControls/objectCanvasControlsContainer';
import LayerControlsContainer from './layerControls/layerContainer';


const WorkArea = () => (
  <div className="workarea columns">

    <div className="column is-narrow">
      <LayerControlsContainer />
    </div>
    <div className="column relative">
      <div>
        <Canvas />
      </div>
      <BasicControlsContainer />
    </div>
    <div className="column is-narrow">
      <ObjectCanvasControlsContainer />
    </div>
  </div>
);
export default WorkArea;
