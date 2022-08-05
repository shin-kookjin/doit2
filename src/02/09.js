// 객체 확장 표현식
/* var x = 0;
var y = 0;
var obj = { x: x, y: y };
var randomKeyString = 'other';
var combined = {};

combined['one' + randomKeyString] = 'some value';
console.log(combined);

var obj2 = {
  x: x,
  methodA: function () {
    console.log('methodA');
  },
  methodB: function () {
    return 0;
  },
};
console.log(obj2);
console.log(obj2.x);
console.log(obj2.methodB());
obj2.methodA();
 */

var x = 0;
var y = 0;
var obj = { x, y };
var randomKeyString = 'other';
var combined = {
  ['one' + randomKeyString]: 'some value',
};
console.log(combined);

var obj2 = {
  x,
  methodA() {
    console.log('methodA');
  },
  methodB() {
    return 0;
  },
};
console.log(obj2);
console.log(obj2.x);
console.log(obj2.methodB());
obj2.methodA();
