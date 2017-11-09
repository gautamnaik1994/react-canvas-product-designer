import React from 'react';
import * as canvasUtils from 'canvasUtils';

const ArrangeObjects = () => (
  <div className="one-rem-mb">
    <label htmlFor="objectName" className="label is-small">
        ARRANGE
    </label>
    <div className="buttons has-addons">
      <span
        data-tooltip="Bring Object Forward"
        onClick={canvasUtils.sendObjectForwards}
        role="button"
        tabIndex="0"
        className="button is-primary is-outlined tooltip"
      >
        {' '}
        <i className="icon-bring-forward" />
      </span>
      <span
        data-tooltip="Send Object Backward"
        onClick={canvasUtils.sendObjectBackwards}
        role="button"
        tabIndex="-1"
        className="button is-primary is-outlined tooltip"
      >
        {' '}
        <i className="icon-send-backward" />
      </span>
      <span
        data-tooltip="Bring Object to Front"
        onClick={canvasUtils.bringObjectFront}
        role="button"
        tabIndex="-2"
        className="button is-primary is-outlined tooltip"
      >
        {' '}
        <i className="icon-bring-to-front" />
      </span>
      <span
        data-tooltip="Send Object to Back"
        onClick={canvasUtils.sendObjectBack}
        role="button"
        tabIndex="-3"
        className="button is-primary is-outlined tooltip"
      >
        {' '}
        <i className="icon-send-to-back" />
      </span>
    </div>
  </div>
);

export default ArrangeObjects;
