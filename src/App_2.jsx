import React, { Component } from 'react';
// import ChildComp from './03/ChildComp';
import ChildComp2 from './03/ChildComp2';
import DefaultPropsComp from './03/DefaultPropsComp';
// import PropsComp from './03/PropsComp';

// class App extends Component {
//   render() {
//     const array = [1, 2, 3];
//     const obj = { namee: '제목', age: 30 };
//     const node = <h1>node</h1>;
//     const func = () => {
//       console.log('messss');
//     };
//     return (
//       <div>
//         {/* <PropsComp name="dd" /> */}
//         {/* <ChildComp boolV={true} numV={1} arrayV={array} objV={obj} nodeV={node} funcV={func} /> */}
//         {/* 객체는 리액트의 자식으로 유효하지 않음 */}
//         <ChildComp
//           /* boolV={false} */
//           numV={1}
//           arrayV={array}
//           /* objV={obj} */ nodeV={node}
//           funcV={func}
//         />
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ChildComp2 objV={{ age: 20 }} requiredStringV="tp" />
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <DefaultPropsComp />
      </div>
    );
  }
}
export default App;
