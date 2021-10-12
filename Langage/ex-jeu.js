function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}


// importer l'API readline de Node.js
const readline = require('readline');

// configuration de readline pour lire les lignes
// sur le clavier
// et afficher les questions dans le terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '))
  }
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    const entierSaisi = parseInt(answer, 10);

    if (isNaN(entierSaisi)) {
      console.log('Il faut saisir un entier');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }

  });

}

const entierAlea = getRandomInt(0, 100);
const essais = [];
jouer();

// ^
// |                            question                question
// |question                    jouer                   jouer
// |jouer    ..loop..           =>       ..loop..       =>
// +----------------------------ENTREE------------------ENTREE---> temps
//
