import React, { PureComponent } from 'react';

class ScrollSpy extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPos = this.checkPos.bind(this);
  }

  setRef(ref) {
    this.ref = ref;
  }

  checkPos() {
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      console.log('enter');
    } else {
      console.log('exit');
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkPos);
    this.checkPos();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPos);
  }

  render() {
    return <div ref={this.setRef} className="dd"></div>;
  }
}

export default ScrollSpy;
