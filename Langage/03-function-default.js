//          sum(1, 2)
// function sum(a, b, c) {
//   if (c === undefined) {
//     c = 0;
//   }
//   return a + b + c;
// }

// function sum(a, b, c) {
//   c = c || 0; // le param doit etre falsy pour activer la valeur par défaut (false, 0, '', null, undefined)
//   return a + b + c;
// }

// Nullish Coalescing operator (ES2020)
// function sum(a, b, c) {
//   c = c ?? 0; // le param doit etre nullish pour activer la valeur par défaut (null, undefined)
//   return a + b + c;
// }

// Default Param (ES2015)
function sum(a, b, c = 0) {
  return a + b + c;
}


console.log(sum(1, 2));

