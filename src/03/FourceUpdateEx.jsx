import React, { Component } from 'react';

class FourceUpdateEx extends Component {
  constructor(props) {
    super(props);

    //state 정의
    /* this.state = {
      loading: true,
      formData: 'no data',
    }; */
    this.loading = true;
    this.formData = 'no data ';

    //bind(this)
    this.handleData = this.handleData.bind(this);

    //4초 후 handleData 호출
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    //const { formData } = this.state;

    //sate 변경
    /* this.setState({
      loading: false,
      formData: data + formData,
    }); */
    this.loading = false;
    this.formData = data + this.formData;
    this.forceUpdate(); //비추. 성능문제, 매번 새롭게 화면 출력

    //this.state.loading 은 true ,,, 4초 이후  falue
    console.log('loading값 ', this.loading);
  }
  render() {
    return (
      <div>
        {/* <span>로딩중 : {String(this.state.loading)}</span>
        <span>결과 : {this.state.formData}</span> */}
        <span>로딩중 : {String(this.loading)}</span>
        <span>결과 : {this.formData}</span>
      </div>
    );
  }
}

export default FourceUpdateEx;
