import React, { Component } from 'react';
import TodaysPlan from './TodaysPlan';
// class TodaysPlanApp extends Component {
//   render() {
//     const { onButtonClick, hasPlan } = this.props;
//     return (
//       <div className="body">
//         {hasPlan ? <TodaysPlan /> : null}
//         <button onClick={onButtonClick}>계획없음11</button>
//       </div>
//     );
//   }
// }

function TodaysPlanApp(props) {
  const { onButtonClick, hasPlan } = props;
  return (
    <div>
      {hasPlan ? <TodaysPlan /> : null}
      <button onClick={onButtonClick}>계획없음22</button>
    </div>
  );
}
export default TodaysPlanApp;
