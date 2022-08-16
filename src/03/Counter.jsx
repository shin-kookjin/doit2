import React, { Component } from 'react';

// class Counter extends Component {
//   constructor(props) {
//     super(props);

//     //state 정의
//     this.state = { counter: 0 };
//     this.increaseCount = this.increaseCount.bind(this);
//   }

//   increaseCount() {
//     //state 변경
//     // this.setState({ counter: ++this.state.counter });
//     this.setState(({ counter }) => ({
//       counter: counter + 1,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <span>카운트 : {this.state.counter}</span>
//         <button onClick={this.increaseCount}>카운트 증가</button>
//       </div>
//     );
//   }
// }

class Counter extends Component {
  constructor(props) {
    super(props);

    //state 정의
    this.state = { counter: props.count };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    //state 변경
    // this.setState({ counter: ++this.state.counter });
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    return (
      <div>
        <span>카운트 : {this.state.counter}</span>
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}
export default Counter;
