import React, { Component } from 'react';
import * as canvasUtils from 'canvasUtils';

const ObjectManipulation = () => {
  const handleOnClick = () => {
    console.log('dowload');
  };
  return (
    <div className="one-rem-mb">
      <label htmlFor="objectName" className="label is-small">
     OBJECT MANIPULATION
      </label>
      <div className="buttons has-addons">
        <span data-tooltip="Bring Object Forward" onClick={}  className="button is-primary is-outlined tooltip"> <i className="icon-bring-forward" /></span>
        <span data-tooltip="Send Object Backward" className="button is-primary is-outlined tooltip"> <i className="icon-send-backward" /></span>
        <span data-tooltip="Bring Object to Front" className="button is-primary is-outlined tooltip"> <i className="icon-bring-to-front" /></span>
        <span data-tooltip="Send Object to Back" className="button is-primary is-outlined tooltip"> <i className="icon-send-to-back" /></span>
      </div>
    </div>
  );
};

export default ObjectManipulation;
