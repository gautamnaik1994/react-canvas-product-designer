import React from 'react';
import Canvas from './canvas';
import BasicControlsContainer from './basicControls/basicControlsContainer';
import ObjectCanvasControlsContainer from './objectCanvasControls/objectCanvasControlsContainer';
import LayerControlsContainer from './layerControls/layerContainer';
import ImageModal from '../components/common/imageModal';

const WorkArea = () => (
  <div className="workarea columns">
    <ImageModal />
    <div className="column is-narrow">
      <LayerControlsContainer />
    </div>
    <div className="column">
      <Canvas />
      <BasicControlsContainer />
    </div>
    <div className="column is-narrow">
      <ObjectCanvasControlsContainer />
    </div>
  </div>
);
export default WorkArea;
