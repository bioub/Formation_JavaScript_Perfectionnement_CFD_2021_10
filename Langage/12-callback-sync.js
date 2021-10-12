const prenoms = ['Romain', 'Jean', 'Eric'];

// Algo
// Créer un nouveau tableau avec les prénoms de 4 lettres
// en majuscules

// Paradigme impératif (style de code avec des if et des for)

const newPrenoms1 = [];

// Model / Code métier
for (let i = 0; i < prenoms.length; i++) {
  const prenom = prenoms[i];
  if (prenom.length === 4) {
    const prenom4Lettres = prenom;
    newPrenoms1.push(prenom4Lettres.toUpperCase())
  }
}

// UI / View
for (const prenom4LettresMaj of newPrenoms1) {
  console.log(prenom4LettresMaj)
}

// Paradigme functionnel
// const newPrenoms2 = prenoms.filter(function(prenom) { return prenom.length === 4; })
const newPrenoms2 = prenoms.filter((prenom) => prenom.length === 4)
                           .map((prenom4Lettres) => prenom4Lettres.toUpperCase())

// UI / View
newPrenoms2.forEach((prenom4LettresMaj) => console.log(prenom4LettresMaj))

// ^
// |
// |               up   up   lg   lg
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach
// +-----------------------------------> temps
//                           JEAN ERIC
