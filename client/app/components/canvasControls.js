import React, { Component } from 'react';
import * as canvasUtils from '../utils/canvasUtils';

class CanvasControls extends Component {
  handleClick = (shape) => {
    canvasUtils.addShape(shape);
  }
  render() {
    return (
      <div>
        <button onClick={() => { this.handleClick('rectangle'); }} >Add Rec</button>
        <button onClick={() => { this.handleClick('circle'); }} >Add Circle</button>
      </div>
    );
  }
}

export default CanvasControls;
