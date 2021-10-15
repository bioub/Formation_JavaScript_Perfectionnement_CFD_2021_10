// Module CommonJS
const fs = require('fs');

// SYNCHRONE
const buffer = fs.readFileSync('.editorconfig');
console.log(buffer.toString());

// ASYNC
fs.readFile('.editorconfig', (err, buffer) => {
  console.log(buffer.toString());
});

// ASYNC PROMISE
fs.promises.readFile('.editorconfig')
  .then((buffer) => console.log(buffer.toString()));
