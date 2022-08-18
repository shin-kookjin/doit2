import React from 'react';

class ListEx extends React.PureComponent {
  render() {
    const priceList = [1000, 2000, 3000, 4000];
    const prices = priceList.map((price) => <div>가격: {price} </div>);
    return (
      <div>
        <label>가격목록</label>
        {prices}
      </div>
    );
  }
}

export default ListEx;
