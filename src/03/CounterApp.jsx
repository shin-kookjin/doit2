import React, { Component } from 'react';
import Counter2 from './Counter2';

class CounterApp extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 1 };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    return (
      <div>
        <Counter2 counter={this.state.counter} onAdd={this.increaseCount} />
      </div>
    );
  }
}

export default CounterApp;
