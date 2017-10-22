import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import * as canvasUtils from 'canvasUtils';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#f00',
    };
  }
  handleChangeComplete = color => {
    this.setState({ color: color.hex });
    canvasUtils.changeColor(color.hex);
  };
  render() {
    return (
      <div className="one-rem-mb">
        <label htmlFor="objectName" className="label is-small">
          COLOR
        </label>
        <ChromePicker
          disableAlpha
          className="is-shadowless is-fullwidth"
          color={this.state.color}
          onChangeComplete={this.handleChangeComplete}
        />
      </div>
    );
  }
}

export default ColorPicker;
