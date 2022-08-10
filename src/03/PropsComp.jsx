import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsComp extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

PropsComp.propTypes = {
  name: PropTypes.string,
};

export default PropsComp;
