/* eslint-disable react/button-has-type */
import React from 'react';
import './Present.css';

function Present(): JSX.Element {
  return (
    <div>
      <div className="popup" />
      <h2>Automatic Pop-Up</h2>
      <button className="butPop" id="close">
        &times;
      </button>
    </div>
  );
}

export default Present;
