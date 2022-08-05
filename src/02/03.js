// 템플릿 문자열 : 백틱, 달러, 중괄호 로 자바스크립트 변수 또는 식 표현 
var cart = { name: '도서', price: 1500 };
var getTotal = function (cart) {
  return `${cart.price} 원`;
};
var myCart = `장바구니에 ${cart.name}가 있습니다. 총금액은 ${getTotal(cart)}`;
console.log(myCart);
