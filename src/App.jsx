import React, { Component } from 'react';
import Counter3 from './03/Counter3';
import CounterApp from './03/CounterApp';
import Input from './03/Input';
import ScrollSpy from './03/ScrollSpy';
// import ListEx from './03/ListEx';
// import SFC from './03/SFC';
// import TodaysPlanApp from './03/TodaysPlanApp';
import Todolist from './03/Todolist';
class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="body">
        {/* <SFC somePropV={123} /> */}
        {/* <TodaysPlanApp hasPlan={true} /> */}
        {/* <ListEx /> */}
        {/* <Todolist /> */}
        {/* <CounterApp /> */}
        {/* <ScrollSpy /> */}
        {/* <Counter3 /> */}
        <Input name="a" autoFocus={true} />
        <Input name="myii" label="gggg" />
        <Input name="myii2" value="dpd" />
        <Input name="myii3" value="dpd" type="number" errorMessage={'숫자만 입력'} />
      </div>
    );
  }
}
export default App;
