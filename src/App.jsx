import React, { Component } from 'react';
// import reactDom from 'react-dom';
class MyComponent extends Component {
  componentDidUpdate() {
    console.log('Mycomponent 새로고치');
  }
  render() {
    return <div>d</div>;
  }
}
class MyPureComponent extends Component {
  componentDidUpdate() {
    console.log('MyPure 새로고침');
  }
  render() {
    return <div>d</div>;
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.listV = [{ name: 'pakr' }, { name: 'Lee' }];
    this.state = { verstion: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    setTimeout(() => {
      this.listV[0].name = 'Justin';
      this.setState({ verstion: 1 });
    }, 100);
    setTimeout(() => {
      this.listV = [{ name: 'Justin' }, { name: 'Lee' }];
      this.setState({ verstion: 2 });
    }, 200);
  }
  render() {
    return (
      <div className="body">
        <MyComponent value={this.listV} />
        <MyPureComponent value={this.listV} />
        <button onClick={this.handleClick}>butttt</button>
      </div>
    );
  }
}
export default App;
