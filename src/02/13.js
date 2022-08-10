// 배열 함수 - map()
/* function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = qs.split('&');
  const result = chunks.map((chunk) => {
    const [key, value] = chunk.split('=');
    return { key, value };
  });

  return result;
}

var re = parse('banana=10&apple=20&orange=30');
console.log(re);
 */

// 배열을 객체로 -  reduce()
function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function parse(qs) {
  const chunks = qs.split('&');
  return chunks
    .map((chunk) => {
      const [key, value] = chunk.split('=');
      return { key, value };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
}
var re = parse('banana=10&apple=20&orange=30');
console.log(re);
