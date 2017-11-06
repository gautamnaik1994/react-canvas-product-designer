import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import * as canvasUtils from 'canvasUtils';

class ColorPicker extends Component {
  static defaultProps = {
    color: '#f00',
  };
  // static propTypes = {
  //   color: PropTypes.string,
  // };

  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: this.props.color,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ color: nextProps.color });
  }
  handleChangeComplete = (color) => {
    this.setState({ color: color.hex });
    canvasUtils.changeColor(color.hex);
  };

  handleSwatchClick = () => {
    console.log('dsfjsld');
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  }
  renderColorPicker = () => {
    if (this.state.displayColorPicker) {
      return (
        <div className="popover">
          <div className="cover" onClick={this.handleSwatchClick} />
          <ChromePicker color={this.state.color} onChange={this.handleChangeComplete} />
        </div>
      );
    }
    return null;
  }

  render() {
    const color = this.state.color;
    return (
      <div className="one-rem-mb">
        <label htmlFor="objectName" className="label is-small">
          COLOR
        </label>
        <div className="swatch" title={color} onClick={this.handleSwatchClick} style={{ backgroundColor: `${color}` }} />
        {this.renderColorPicker()}
      </div>
    );
  }
}

export default ColorPicker;
