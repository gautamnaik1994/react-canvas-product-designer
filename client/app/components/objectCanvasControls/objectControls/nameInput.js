import React, { Component } from 'react';
import * as canvasUtils from 'canvasUtils';

class NameInput extends Component {
  static defaultProps = {
    name: '',
  };
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.name,
    });
  }
  handleOnChange = (e) => {
    this.setState({ name: e.target.value });
  }
  handleClick = () => {
    canvasUtils.changeObjectName(this.state.name);
  }

  render() {
    console.warn(this.props);
    return (
      <div className="one-rem-mb">
        <label htmlFor="objectName" className="label is-small">
          OBJECT NAME
        </label>

        <div className="field has-addons">
          <div className="control is-fullwidth">
            <input className="input is-small" type="text" id="objectName" value={this.state.name} onChange={this.handleOnChange} />
          </div>
          <div className="control">
            <button className="button is-primary  is-small" onClick={this.handleClick}>
              <i className="icon-check" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}


export default NameInput;
