import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodaysPlan from './03/TodaysPlan';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <h1 className="title">두잇</h1>
      //   <img src={logo} className="App-logo" />
      // </div>
      /* React.createElement(
        'div',
        { className: 'App' },
        React.createElement('h1', { className: 'title' }, '안녕'),
        React.createElement('img', { src: logo, className: 'App-logo' }),
      ) */
      <div className="body">
        {/*  별도의 .jsx 파일을 임포트하여 컴포넌트 추가 */}
        <TodaysPlan />

        {/* 본 파일 안에 클래스 추가작성하여 컴포넌트 추가 */}
        {/* 하위 컴포넌트를 추가할 때 프로퍼티 전달 */}
        <MyComponent name="rnrwls" />
      </div>
    );
  }
}

class MyComponent extends Component {
  render() {
    const name = this.props.name;
    return <div>{name}</div>;
  }
}

export default App;
