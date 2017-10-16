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
    handleChangeComplete = (color) => {
      this.setState({ color: color.hex });
      canvasUtils.changeColor(color.hex);
    };
    render() {
      return (
        <div className="">
          <p className="bold half-rem-mb">COLOR</p>
          <ChromePicker className="is-shadowless" color={this.state.color} onChangeComplete={this.handleChangeComplete} />
        </div>
      );
    }
}


export default ColorPicker;
