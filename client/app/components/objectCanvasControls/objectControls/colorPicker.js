import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import * as canvasUtils from 'canvasUtils';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: '#f00',
    };
  }
  handleChangeComplete = (color) => {
    this.setState({ color: color.hex });
    canvasUtils.changeColor(color.hex);
  };

  handleSwatchClick() {
    console.log('dsfjsld');
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  }
  renderColorPicker() {
    if (this.state.displayColorPicker) {
      return (
        <div className="popover">
          <div className="cover" onClick={this.handleClose} />
          <ChromePicker color={this.state.color} onChange={this.handleChangeComplete} />
        </div>
      );
    }
    return null;
  }
  render() {
    return (
      <div className="one-rem-mb">
        <label htmlFor="objectName" className="label is-small">
          COLOR
        </label>
        <div className="swatch" onClick={this.handleSwatchClick} styles={`background-color:${this.state.color}`} />
        {this.renderColorPicker}
        {/* <ChromePicker
          disableAlpha
          className="is-shadowless is-fullwidth"
          color={this.state.color}
          onChangeComplete={this.handleChangeComplete}
        /> */}
      </div>
    );
  }
}

export default ColorPicker;
