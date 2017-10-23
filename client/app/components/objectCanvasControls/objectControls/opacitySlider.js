import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import * as canvasUtils from 'canvasUtils';

class OpacitySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
    };
  }
  onSliderChange = value => {
    this.setState({
      opacity: value,
    });
    canvasUtils.changeOpacity(value / 10);
  };

  render() {
    return (
      <div className="one-rem-mb">
        <label htmlFor="objectName" className="label is-small">
          OPACITY
        </label>
        <Slider
          min={0}
          max={10}
          step={1}
          value={this.state.opacity}
          onChange={this.onSliderChange}
        />
        {/* <input
          className="slider is-fullwidth is-circle"
          step="0.1"
          min="0"
          max="1"
          value={this.state.opacity}
          type="range"
          onChange={this.onSliderChange}
        /> */}
      </div>
    );
  }
}

export default OpacitySlider;
