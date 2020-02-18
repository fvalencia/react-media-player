import React from 'react';

import './Control.scss';

export const Control = props => {
  return (
    <div className="control">
      <button className="button" onClick={props.onClick} disabled={props.disabled}>
        <i className={`fas fa-${props.type}`}></i>
      </button>
    </div>
  );
};

export default Control;
