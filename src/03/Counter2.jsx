import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter2 extends Component {
  render() {
    return (
      <div>
        <span>현재 카운트 : {this.props.counter}</span>
        <button onClick={this.props.onAdd}>카운트 증가</button>
      </div>
    );
  }
}

Counter2.propTypes = {
  counter: PropTypes.number,
  onAdd: PropTypes.func,
};

export default Counter2;
