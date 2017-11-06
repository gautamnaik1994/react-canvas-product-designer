import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider';
import * as canvasUtils from 'canvasUtils';

class OpacitySlider extends Component {
  static defaultProps = {
    opacity: 1,
  };

  constructor(props) {
    super(props);
    this.state = {
      opacity: this.props.opacity,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ opacity: (nextProps.opacity * 10) });
  }
  onSliderChange = (value) => {
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
      </div>
    );
  }
}

export default OpacitySlider;

OpacitySlider.propTypes = {
  opacity: PropTypes.number,
};
