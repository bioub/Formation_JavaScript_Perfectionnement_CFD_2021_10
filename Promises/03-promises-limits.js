// function timeout(delayMs) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs)
//   });
// }

// timeout(500).then(() => console.log('A'));
// timeout(0).then(() => console.log('B'));
// timeout(1000).then(() => console.log('C'));
// timeout(500).then(() => console.log('D'));

// console.log('E')

function interval(delayMs) {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve();
    }, delayMs)
  });
}

interval(1000).then(() => console.log(new Date));

// les promesses ne fonctionnent que si le callback est appelé une fois
// sinon
// - Asynchronous Iterator (exemple Deno)
// - RxJS
// - events / addEventListener
