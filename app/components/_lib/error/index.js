import React, {Component} from 'react';
import PT from 'prop-types';

const Error = ({message}) => (
  <div className="error">
    {message}
  </div>
);

Error.propTypes = {
  message: PT.string.isRequired,
}

export default Error