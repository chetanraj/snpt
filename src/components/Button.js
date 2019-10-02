import React from 'react';

const Button = props => (
  <button
    className="btn-white"
    id={props.label}
    key={Math.random()}
    onClick={props.onClick}>
    {props.label}
  </button>
);

export default Button;
