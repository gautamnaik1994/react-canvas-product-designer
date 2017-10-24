import React, { Component } from 'react';
import * as canvasUtils from 'canvasUtils';

class CreateClippingMask extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = (shape) => {
    canvasUtils.addShape(shape);
  }

  render() {
    return (
      <div className="column">
        <button className="button is-primary is-fullwidth" onClick={() => { this.handleClick('rectangle'); }} > CLIPPING MASK </button>
      </div>
    );
  }
}

export default CreateClippingMask;
