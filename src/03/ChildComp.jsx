import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComp extends Component {
  render() {
    const { boolV, numV, arrayV, objV, nodeV, funcV } = this.props;

    return (
      <div>
        <span>{boolV}</span>
        <span>{numV}</span>
        <span>{arrayV}</span>
        <span>{objV}</span>
        <span>{nodeV}</span>
        <span>{funcV}</span>
      </div>
    );
  }
}

ChildComp.propTypes = {
  boolV: PropTypes.bool,
  numV: PropTypes.number,
  arrayV: PropTypes.arrayOf(PropTypes.number),
  objV: PropTypes.object,
  nodeV: PropTypes.node,
  funcV: PropTypes.func,
};

export default ChildComp;
