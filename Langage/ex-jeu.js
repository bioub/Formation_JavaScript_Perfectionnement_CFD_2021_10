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
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);
    jouer();
  });

}

jouer();

// ^
// |                            question                question
// |question                    jouer                   jouer
// |jouer    ..loop..           =>       ..loop..       =>
// +----------------------------ENTREE------------------ENTREE---> temps
//
