import React, { Component } from 'react';
import PropTypes from 'prop-types';

function SFC(props, context) {
  const { somePropV } = props;
  const { someContextV } = context;
  return (
    <h1>
      Hello, {somePropV} / {someContextV}
    </h1>
  );
}

SFC.propTypes = { somePropV: PropTypes.any };
SFC.defaultProps = { somePropV: 'default Valueeee' };

export default SFC;
