import React, { Component } from 'react';

class LifeCycle extends Component {
  //1
  constructor(props) {
    super(props);
    this.state = {};
    console.log('1 constructor 호출');
  }

  //2  값변경시 5
  static getDerivedStateFromProps() {
    console.log('2 5 getDerivedStateFromProps 호출');
    return {};
  }

  //3
  render() {
    console.log('3 7 render 호출');
    return null;
  }

  //4
  componentDidMount() {
    console.log('4 componentDidMount 호출');
    this.setState({ updated: true });

    //포스업데이트 는 값변경 없어도 라이프사이클 모두 실행
    this.forceUpdate();
  }

  //  값변경시  9
  componentDidUpdate() {
    console.log('9 componentDidUpdate 호출');
  }

  //
  componentWillUnmount() {
    console.log('componentWillUnmount 호출');
  }

  //  값변경시  8
  getSnapshotBeforeUpdate() {
    console.log('8 getSnapshotBeforeUpdate 호출');
    return {};
  }

  //  값변경시  6
  shouldComponentUpdate() {
    console.log('6 shouldComponentUpdate 호출');
    return false;
  }
}

export default LifeCycle;
