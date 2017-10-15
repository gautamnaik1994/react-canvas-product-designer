import React, { Component } from 'react';
import * as canvasUtils from 'canvasUtils';

class Canvas extends Component {
  componentDidMount() {
    canvasUtils.initializeCanvas();
    canvasUtils.setCanvasSize(500, 500);
  }

  render() {
    return <canvas id="mockup_canvas" />;
  }
}

export default Canvas;
