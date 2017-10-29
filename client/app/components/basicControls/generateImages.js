import React, { Component } from 'react';
import * as canvasUtils from 'canvasUtils';

class GenerateImages extends Component {
  handleClick = () => {
    canvasUtils.generateImage();
  }

  render() {
    return (
      <div className="column">
        <button className="button is-primary is-fullwidth" onClick={this.handleClick}> GENERATE </button>
      </div>
    );
  }
}

export default GenerateImages;
