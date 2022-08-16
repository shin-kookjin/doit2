import React, { Component } from 'react';
import Counter from './03/Counter';
import NewCounter from './03/NewCounter';
import LifeCycle from './03/LifeCycle';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <StateEx /> */}
//         {/* <FourceUpdateEx /> */}
//         {/* <Counter /> */}
//         <LifeCycle />
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasDestroyed: false };
//     console.log('constructor', this.state.hasDestroyed);
//   }
//   componentDidMount() {
//     this.setState({ hasDestroyed: true });
//     console.log('componentDidMount', this.state.hasDestroyed);
//   }
//   render() {
//     console.log('render', this.state.hasDestroyed);
//     return <div>{this.state.hasDestroyed ? null : <LifeCycle />}</div>;
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
    this.resetCount = this.resetCount.bind(this);
  }
  resetCount() {
    this.setState(({ count }) => ({ count: count + 10 }));
  }
  render() {
    return (
      <div>
        <div>
          <Counter count={this.state.count} />
        </div>
        <div>
          <NewCounter count={this.state.count} />
        </div>
        <div>
          <button onClick={this.resetCount}>{this.state.count + 10} 으로 초기화 </button>
        </div>
      </div>
    );
  }
}
export default App;
