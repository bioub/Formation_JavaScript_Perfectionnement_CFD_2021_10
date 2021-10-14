// function sum(a, b) {
//   // pseudos variables
//   // créées automatiquement au moment de l'appel
//   // console.log(this);
//   // console.log(arguments)
//   let result = a + b;

//   for (let i = 2; i < arguments.length; i++) {
//     const nb = arguments[i];
//     result += nb;
//   }

//   return result;
// }

// REST Params (ES2015)
// conversion syntaxique
// liste de valeurs -> tableau
// 3, 4, 5 -> [3, 4, 5]
//       sum(1, 2, 3, 4, 5)
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4, 5));
