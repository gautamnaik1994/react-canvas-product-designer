import React, { Component } from 'react';
import * as canvasUtils from 'canvasUtils';
import ImageModal from '../common/imageModal';

class GenerateImages extends Component {
  state = {
    isOpen: false,
    imgSrc: '',
  }
  handleClick = () => {
    const imgSrc = canvasUtils.generateImage();
    this.setState({
      isOpen: !this.state.isOpen,
      imgSrc,
    });
  }
  toggleImageModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="column">
        <button className="button is-primary is-fullwidth" onClick={this.handleClick}> GENERATE </button>
        <ImageModal
          show={this.state.isOpen}
          src={this.state.imgSrc}
          onClose={this.toggleImageModal}
        />
      </div>
    );
  }
}

export default GenerateImages;
