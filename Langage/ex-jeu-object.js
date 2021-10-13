const Random = {
  get: function () {
    return Math.random();
  },

  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },

  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};


// importer l'API readline de Node.js
const readline = require('readline');

function Jeu(options = {}) {
  const min = options.min ?? 0;
  const max = options.max ?? 100;

  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  this.entierAlea = Random.getInt(min, max);
  this.essais = [];
}

Jeu.prototype.jouer = function() {
  if (this.essais.length) {
    console.log('Vous avez déjà joué : ' + this.essais.join(' - '))
  }
  this._rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    const entierSaisi = parseInt(answer, 10);

    if (isNaN(entierSaisi)) {
      console.log('Il faut saisir un entier');
      return this.jouer();
    }

    this.essais.push(entierSaisi);

    if (entierSaisi > this.entierAlea) {
      console.log('Trop grand');
      this.jouer();
    } else if (entierSaisi < this.entierAlea) {
      console.log('Trop petit');
      this.jouer();
    } else {
      console.log('Gagné');
      this._rl.close();
    }

  });
};

const game = new Jeu();
game.jouer();

// const game = new Jeu({min: 10, max: 20})

// ^
// |                            question                question
// |question                    jouer                   jouer
// |jouer    ..loop..           =>       ..loop..       =>
// +----------------------------ENTREE------------------ENTREE---> temps
//
