function timeout(delayMs, val) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val);
    }, delayMs);
  });
}

function fakeFetch(url) {
  const fakeData = {
    '/todos': [{ id: 1, title: 'A', userId: 1 }],
    '/users': [{ id: 1, username: 'B' }],
  };

  return timeout(Math.random() * 2000, fakeData[url]);
}

// Promise.all([
//   fakeFetch('/todos'),
//   fakeFetch('/users'),
// ]).then(([todos, users]) => {
//   console.log(todos, users)
// })

const [todos, users] = await Promise.all([
  fakeFetch('/todos'),
  fakeFetch('/users'),
]);
console.log(todos, users);
