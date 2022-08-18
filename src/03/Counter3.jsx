import React, { Component } from 'react';

class Counter3 extends Component {
  constructor(props) {
    super(props);
    this.state = { cnt: 0 };
    this.increCount = this.increCount.bind(this);
    this.restCount = this.restCount.bind(this);
  }
  increCount() {
    this.setState(({ cnt }) => ({ cnt: cnt + 1 }));
  }
  restCount() {
    this.setState({ cnt: 0 });
  }
  render() {
    return (
      <div>
        <span>현재 카운트 : {this.state.cnt}</span>
        <button onClick={this.increCount} onMouseOut={this.restCount}>
          카운트 증가
        </button>
      </div>
    );
  }
}

export default Counter3;
