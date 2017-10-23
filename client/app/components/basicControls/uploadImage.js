import React, { Component } from 'react';
import * as canvasUtils from 'canvasUtils';

class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '' };
  }
  handleImageChange = e => {
    console.log('Imahe');
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
      console.log(this.state.imagePreviewUrl);
    };
    reader.readAsDataURL(file);
  };

  render() {
    return (
      <div className="column">
        {/* <button className="button is-primary is-fullwidth" onClick={() => { this.handleClick('rectangle'); }} > UPLOAD IMAGES </button> */}
        <div className="file is-primary is-fullwidth">
          <label className="file-label">
            <input
              className="file-input"
              type="file"
              name="resume"
              onChange={this.handleImageChange}
            />
            <span className="file-cta">
              <span className="file-label">UPLOAD IMAGE</span>
            </span>
          </label>
        </div>
      </div>
    );
  }
}

export default UploadImage;
