// 전개 연산자 이전 방식
/* 
var objOne = { one: 1, two: 2, other: 0 };
var objTwo = { three: 3, four: 4, other: -1 };
var combined = {
  one: objOne.one,
  two: objOne.two,
  three: objTwo.three,
  four: objTwo.four,
};
console.log(combined);

var combined = Object.assign({}, objOne, objTwo);
console.log(combined);

var others = Object.assign({}, combined);
delete others.other;
console.log(others); */

// 객체 전개 연산자

var objOne = { one: 1, two: 2, other: 0 };
var objTwo = { three: 3, four: 4, other: -1 };
var combined = {
  ...objTwo,
  ...objOne,
};
console.log(combined);

var { other, ...others } = combined;
console.log(other);
console.log(others);
