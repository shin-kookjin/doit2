// 배열 함수 - forEach()
function parse(qs) {
  var queryString = qs.substr(1);
  var chunks = qs.split('&');
  var result = {};

  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0];
    // var value = parts[1];
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  }

  return result;
}

var re = parse('banana=10&apple=20&orange=30');
console.log(re);

function parse2(qs) {
  const queryString = qs.substr(1);
  const chunks = qs.split('&');
  let result = {};

  chunks.forEach((chunk) => {
    const parts = chunk.split('=');
    const key = parts[0];
    const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  });

  return result;
}

var re = parse2('banana=10&apple=20&orange=30');
console.log(re);

function parse3(qs) {
  const queryString = qs.substr(1);
  const chunks = qs.split('&');
  let result = {};

  chunks.forEach((chunk) => {
    const [key, value] = chunk.split('=');
    result[key] = value;
  });
  return result;
}

var re = parse3('banana=10&apple=20&orange=30');
console.log(re);
