import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ObjectControlsContainer from './objectControls/objectControlsContainer';
import CanvasControlsContainer from './canvasControls/canvasControlsContainer';

class ObjectCanvasControlsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'object',
    };
  }
  handleChange = e => {
    const { value } = e.target;
    const { match, history } = this.props;

    if (value === this.state.selected) {
      return;
    }
    this.setState({
      selected: value,
    });
  };
  renderComponent() {
    const selected = this.state.selected;
    if (selected === 'canvas') {
      return <CanvasControlsContainer />;
    }
    return <ObjectControlsContainer />;
  }
  render() {
    let moverClass = '';
    if (this.state.selected === 'canvas') {
      moverClass = 'move-right';
    }

    return (
      <div className="object-canvas-controls-container">
        <div className="custom-tabs">
          <input
            type="radio"
            id="link1"
            name="sidetabs"
            value="object"
            onChange={this.handleChange}
            checked={this.state.selected === 'object'}
          />
          <label className="c-tab" htmlFor="link1">
            OBJECT
          </label>
          <input
            type="radio"
            id="link2"
            name="sidetabs"
            value="canvas"
            onChange={this.handleChange}
            checked={this.state.selected === 'canvas'}
          />
          <label className="c-tab" htmlFor="link2">
            SHIRT
          </label>
          <span className={`mover ${moverClass} `} />
        </div>

        {this.renderComponent()}
      </div>
    );
  }
}

export default withRouter(ObjectCanvasControlsContainer);
