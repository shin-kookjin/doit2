// 스로틀 - 이전 요청 실행 : 첫번째 요청 실행 중 중복된 요청은 무시
function throttle(func, delay) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.call(context, ...args);
      lastRan = Date.now();
    } else {
      if (lastFunc) clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= delay) {
          func.call(context, ...args);
          lastRan = Date.now();
        }
      }, lastRan - Date.now());
    }
  };
}

//
var checkPosition = () => {
  const offset = 500;
  const currentScrollostion = window.pageYOffset;
  const pageBottomPosiotn = document.body.offsetHeight - window.innerHeight - offset;
  if (currentScrollostion >= pageBottomPosiotn) {
    console.log('다음 페이지 로딩');
  }
};

//
var infiniteScroll = throttle(checkPosition, 300);
window.addEventListener('scroll', infiniteScroll);
