import React, { Component } from 'react';
import { fabric } from 'fabric';
import * as canvasUtils from '../utils/canvasUtils';

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
