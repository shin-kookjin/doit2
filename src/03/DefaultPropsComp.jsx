import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultPropsComp extends Component {
  render() {
    let message1 = '';
    if (this.props.boolV === false) {
      message1 = 'boolV 기본값이 false 임';
    }
    let message2 = '';
    if (this.props.boolVWithoutDefault === false) {
      message2 = 'boolVWidthoutDefault 기본값이 false 임';
    }
    return (
      <div className="message-container">
        {message1}
        {message2}
      </div>
    );
  }
}

DefaultPropsComp.propTypes = {
  boolV: PropTypes.bool,
  boolVWithoutDefault: PropTypes.bool,
};
DefaultPropsComp.defaultProps = {
  boolV: false,
};
export default DefaultPropsComp;
