import React, { Component } from 'react';

class NameInput extends Component {
  static defaultProps = {
    name: `Object ${(Math.random() * 100) + 1}`,
  };
  render() {
    return (
      <div className="one-rem-mb">
        <label htmlFor="objectName" className="label is-small">
          OBJECT NAME
        </label>

        <div className="field has-addons">
          <div className="control is-fullwidth">
            <input className="input is-small" type="text" id="objectName" value={this.props.name} />
          </div>
          <div className="control">
            <button className="button is-primary  is-small">
              <i className="icon-check" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}


export default NameInput;
