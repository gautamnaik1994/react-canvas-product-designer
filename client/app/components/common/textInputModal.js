import React, { Component } from 'react';

class TextInputModal extends Component {
    handleOnClick = () => {
      this.props.onSaveChanges(this.textString.value);
    }
    render() {
      let activeClass = '';
      if (this.props.show) {
        activeClass = 'is-active';
      }

      return (
        <div className={`modal  ${activeClass}`}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Add Text</p>
              <button className="delete" aria-label="close" onClick={this.props.onClose} />
            </header>
            <section className="modal-card-body">
              <textarea className="textarea" type="text" ref={input => this.textString = input} />
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" onClick={this.handleOnClick}>Save changes</button>
              <button className="button">Cancel</button>
            </footer>
          </div>
        </div>
      );
    }
}


export default TextInputModal;

