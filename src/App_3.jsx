import React, { Component } from 'react';
import ChildProperty from './03/ChildProperty';

class App extends Component {
  render() {
    return (
      <div>
        <ChildProperty
          childen={
            <div>
              <span>childddd</span>
            </div>
          }
        ></ChildProperty>
      </div>
    );
  }
}
export default App;
