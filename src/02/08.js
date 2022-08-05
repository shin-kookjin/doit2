// ES6 화살표 함수

var add = (first, second) => {
  return first + second;
};
var add2 = (first, second) => first + second;
var add3 = (first, second) => ({ add: first + second, multi: first * second });

// console.log(add(2, 3));
// console.log(add2(2, 3));
// console.log(add3(2, 3));

// 계단형 함수 선언
function addNum(num) {
  return function (value) {
    return num + value;
  };
}
// console.log(addNum(1));

var addNum2 = (num) => (value) => num + value;
console.log(addNum2(1)(2));

//
class MyClass {
  value = 10;
  constructor() {
    var addThis2 = function (first, second) {
      return this.value + first + second;
    }.bind(this);
    var addThis3 = (first, second) => this.value + first + second;
  }
}
var mc = new MyClass();
console.log();
