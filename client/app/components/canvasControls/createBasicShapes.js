import React, { Component } from 'react';
import * as canvasUtils from 'canvasUtils';
import TextInputModal from '../common/textInputModal';

class CreateBasicShapes extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  handleClick = (shape) => {
    canvasUtils.addShape(shape);
  }
  toggleTextInputModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  handleTextInput = (text) => {
    console.log('Text', text);
    canvasUtils.addText(text);
  }
  render() {
    return (
      <div>
        <p className="white-color bold half-rem-mb">BASIC</p>
        <div className="icon-btn-container">
          <button className="button is-primary" onClick={() => { this.handleClick('rectangle'); }} > <i className="fa fa-square-o" /> </button>
          <button className="button is-primary" onClick={() => { this.handleClick('circle'); }} > <i className="fa fa-circle-thin" /></button>
          <button className="button is-primary" onClick={() => { this.toggleTextInputModal(); }} > <i className="fa fa-font" /></button>
        </div>
        <TextInputModal show={this.state.isOpen} onClose={this.toggleTextInputModal} onSaveChanges={this.handleTextInput} />
      </div>
    );
  }
}

export default CreateBasicShapes;
