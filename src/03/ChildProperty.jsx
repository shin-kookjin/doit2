import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildProperty extends Component {
  render() {
    return <div>{this.props.childen}</div>;
  }
}

ChildProperty.propTypes = {
  childen: PropTypes.node,
};

export default ChildProperty;
