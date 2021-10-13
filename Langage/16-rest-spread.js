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

console.log(sum(1, 2, 3, 4, 5))

// SPREAD Operator (ES2015)
// conversion syntaxique
// tableau -> liste de valeurs
// [3, 4, 5] -> 3, 4, 5
//                3, 4, 5
function multiply(a, b, c) {
  return a * b * c;
}

const nbs = [3, 4, 5];

console.log(multiply(...nbs))

// Cloner un tableau
const cloneNbs = [...nbs];

// ajouter en créant un nouveau tablea
const newNbs = [1, 2, ...nbs, 6];
