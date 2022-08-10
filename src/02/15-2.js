// 비동기

const work1 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업 1 완료'), 100);
  });
const work2 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업 2 완료'), 200);
  });
const work3 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업 3 완료'), 300);
  });

//
function urgentWork() {
  console.log('긴급');
}
const nextWorkDone = (ms1) => {
  console.log('done after 100ms : ' + ms1);
  return work2();
};

work1()
  .then(nextWorkDone)
  .then((ms2) => {
    console.log('done after 300ms : ' + ms2);
    return work3();
  })
  .then((ms3) => {
    console.log('done after 600ms : ' + ms3);
  });
urgentWork();

const work1and2 = () =>
  work1().then((msg1) => {
    console.log('done after 100ms 2: ' + msg1);
    return work2();
  });
work1and2()
  .then((msg2) => {
    console.log('done after 200ms 2: ' + msg2);
    return work3();
  })
  .then((msg3) => {
    console.log('done after 600ms 2: ' + msg3);
  });
