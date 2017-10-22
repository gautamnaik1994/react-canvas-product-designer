import React from 'react';
import { CirclePicker } from 'react-color';

const TagColor = () => (
  <div className="one-rem-mb">
    <label htmlFor="objectName" className="label is-small">
      TAG COLOR
    </label>
    <CirclePicker
      className="is-fullwidth"
      circleSize={23}
      circleSpacing={10}
      colors={[
        '#f44336',
        '#e91e63',
        '#9c27b0',
        '#673ab7',
        '#3f51b5',
        '#2196f3',
        '#03a9f4',
        '#00bcd4',
      ]}
    />
    {/* <div className="tag-button-parent half-rem-mt">
      <button className="button is-primary " />
      <button className="button is-link " />
      <button className="button is-info " />
      <button className="button is-success " />
      <button className="button is-warning " />
    </div> */}
  </div>
);
export default TagColor;
