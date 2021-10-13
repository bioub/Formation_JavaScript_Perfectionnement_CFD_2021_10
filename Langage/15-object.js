// Les objets JS sont extensibles

// ajouter des clés/valeurs
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2));

// modifier des clés/valeurs
Math.sum = (a, b) => Number(a) + Number(b);

// supprimer des clés/valeurs
delete Math.sum;

// MAUVAISE PRATIQUE D'ETENDRE DES objets
// - du langage
// - de Node ou du Navigateur
// - d'une lib externe

// 2 syntaxes historiques pour créer des objets

// object literal
// à utiliser
// - si l'objet est créé plusieurs fois et n'a pas de méthodes (fonctions)
// - s'il est simple à créer (ne nécessite pas une fonction)

const coordsA = {
  x: 1,
  y: 2,
};

coordsA.z = 10;

const coordsB = {
  x: 3,
  z: 4,
};

coordsB.z = 10;


const MyMaths = {
  sum: (a, b) => a + b,
};

MyMaths.sum(1, 2);

// Pourquoi pas de méthodes avec object literal ?

const coords1 = {
  x: 1,
  y: 2,
  sumXY: function() {
    return this.x + this.y;
  }
};

const coords2 = {
  x: 3,
  y: 4,
  sumXY: function() {
    return this.x + this.y;
  }
};

console.log(coords1 === coords2); // compare les références (est-ce le même objet ?)
console.log(coords1.sumXY === coords2.sumXY); // compare les références (est-ce la même fonction ?)

// constructor
function Coords(x, y, z = 0) {
  this.x = x;
  this.y = y;
  this.z = z;
}

Coords.prototype.sumXY = function() {
  return this.x + this.y;
}

const coordsC = new Coords(1, 2);
const coordsD = new Coords(3, 4);

console.log(typeof coordsC); // object

console.log(coordsC.sumXY === coordsD.sumXY); // compare les références (est-ce la même fonction ?)

console.log(coordsC.x);
console.log(coordsC.sumXY());
