import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComp2 extends Component {
  render() {
    const { objV, requiredStringV } = this.props;
    return (
      <div>
        <div>객체값 : {String(Object.entries(objV))} </div>
        <div>필수값 : {requiredStringV} </div>
      </div>
    );
  }
}

// ChildComp2.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
// };
ChildComp2.propTypes = {
  objV: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  requiredStringV: PropTypes.string.isRequired,
};
export default ChildComp2;
