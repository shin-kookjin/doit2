// 전개 연산자 이전 방식

/* var arr1 = ['one', 'two'];
var arr2 = ['three', 'four'];
var combined1 = [arr1[0], arr1[2], arr2[0], arr2[1]];
var combined2 = arr1.concat(arr2);
var combined3 = [].concat(arr1, arr2);

console.log(arr1);
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[1] || 'empty'); */

/* function func() {
  var args = Array.prototype.slice.call(arguments);
  var first = args[0];
  var others = args.slice(1, args.length);
  return `
    ${args} , 
    ${first} ,
    ${others}
  `;
}
console.log(func(1, 2, 3)); */

// 배열 전개 연산자

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
const combined = [...array1, ...array2];
const [first, second, three = 'empty', ...others] = array1;
// const wrongArr = ...array1;    //오류
// const wrongArr = [...array1];  //정상
function func(...args) {
  var [first, ...others] = args;
  return `${first} 
  ${others}`;
}

console.log(combined);
console.log(first, second, three, others);
console.log(func(1, 2, 3, 4, 5, 6));
