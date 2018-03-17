import React, {Component} from 'react';
import PT from 'prop-types';
import './index.scss';
import classnames from "classnames";

const Button  = ({value, size, type, onClick, disabled}) => {
  const className = classnames('button', `is-${size}`);

  return (
    <input type={type} className={className} onClick={onClick} value={value} disabled={disabled} />
  )
};

Button.propTypes = {
  value: PT.string.isRequired,
  type: PT.string,
  size: PT.string,
  onClick: PT.func,
  disabled: PT.bool,
};

Button.defaultProps = {
  size: 'medium',
  type: 'button',
};

export default Button;