import React, { Component } from 'react';
import * as canvasUtils from 'canvasUtils';

class OpacitySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
    };
  }
  onSliderChange = (e) => {
    this.setState({
      opacity: e.target.value,
    });
    canvasUtils.changeOpacity(e.target.value);
  }

  render() {
    return (
      <div className="">
        <p className="half-rem-mb">OPACITY</p>
        <input className="slider is-fullwidth" step="0.1" min="0" max="1" value={this.state.opacity} type="range" onChange={this.onSliderChange} />

      </div>
    );
  }
}

export default OpacitySlider;
