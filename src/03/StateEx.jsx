import React, { Component } from 'react';

class StateEx extends Component {
  constructor(props) {
    super(props);

    //state 정의
    this.state = {
      loading: true,
      formData: 'no data',
    };

    //bind(this)
    this.handleData = this.handleData.bind(this);

    //4초 후 handleData 호출
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = 'new data';
    const { formData } = this.state;

    //sate 변경
    this.setState({
      loading: false,
      formData: data + formData,
    });

    //this.state.loading 은 true ,,, 4초 이후  falue
    console.log('loading값 ', this.state.loading);
  }
  render() {
    return (
      <div>
        <span>로딩중 : {String(this.state.loading)}</span>
        <span>결과 : {this.state.formData}</span>
      </div>
    );
  }
}

export default StateEx;
