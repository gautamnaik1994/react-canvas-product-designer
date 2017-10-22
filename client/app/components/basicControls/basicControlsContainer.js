import React from 'react';
import CreateBasicShapes from './createBasicShapes';
import CreateClippingMask from './createClippingMask';
import DisplayPreview from './displayPreview';
import GenerateImages from './generateImages';
import UploadImage from './uploadImage';

const BasicControlsContainer = () => (
  <div className="basic-controls-container columns">
    <CreateBasicShapes />
    <CreateClippingMask />
    <DisplayPreview />
    <GenerateImages />
    <UploadImage />
  </div>
);

export default BasicControlsContainer;
