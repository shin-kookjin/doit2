// import React from 'react';

// export class ClassTest extends React.Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
//   }
// }

const obj = { name: 'park' };
const mylist = [1, 2, 3, obj];
const list1 = [1, 2, 3, obj];
const list2 = [1, 2, 3, { name: 'park' }];
const re = mylist === list1;
const re2 = shallowEqual(mylist, list1);
const re3 = shallowEqual(list1, list2);
console.log(re);
