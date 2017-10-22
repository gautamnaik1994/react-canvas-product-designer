import React, { Component } from 'react';
import * as canvasUtils from 'canvasUtils';

class UploadImage extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = (shape) => {
    canvasUtils.addShape(shape);
  }

  render() {
    return (
      <div className="column">
        <button className="button is-primary is-fullwidth" onClick={() => { this.handleClick('rectangle'); }} > UPLOAD IMAGES </button>
      </div>
    );
  }
}

export default UploadImage;
