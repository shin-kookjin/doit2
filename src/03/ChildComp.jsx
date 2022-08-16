import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComp extends Component {
  render() {
    const { boolV, numV, arrayV, objV, nodeV, funcV } = this.props;
    const boolV2 = boolV ? 'true' : 'false';
    return (
      <div>
        <span>불값:{boolV}</span>
        <span>불값2:{boolV2}</span>
        <span>넘버값:{numV}</span>
        <span>어레이값:{arrayV}</span>
        <span>오브젝트값:{objV}</span>
        <span>노드값:{nodeV}</span>
        <span>펑션값:{funcV}</span>
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
