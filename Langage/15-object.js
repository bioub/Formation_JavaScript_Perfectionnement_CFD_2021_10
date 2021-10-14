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
function Coords2D(x, y) {
  this.x = x;
  this.y = y;
}

Coords2D.prototype.sumXY = function() {
  return this.x + this.y;
}

const coordsC = new Coords2D(1, 2);
const coordsD = new Coords2D(3, 4);

console.log(typeof coordsC); // object

console.log(coordsC.sumXY === coordsD.sumXY); // compare les références (est-ce la même fonction ?)

console.log(coordsC.x);
console.log(coordsC.sumXY());

// Syntaxe alternative au point . pour accéder aux clés/valeurs d'un objet
console['log'](coordsC['x']);
console['log'](coordsC['sumXY']());

// la syntaxe est plus dynamique
const methodConsole = 'log';
const coordsKey = 'x';
console[methodConsole](coordsC[coordsKey]);

// Boucler sur les propriétés
for (const key in coordsC) {
  if (coordsC.hasOwnProperty(key)) {
    const value = coordsC[key];
    console.log(key, value);
  }
}

// version moderne
for (const [key, value] of Object.entries(coordsC)) {
  console.log('loop', key, value);
}

// Héritage jusqu'à ES5
function Coords3D(x, y, z) {
  Coords2D.call(this, x, y);
  this.z = z;
}

Coords3D.prototype = Object.create(Coords2D.prototype);

Coords3D.prototype.sumYZ = function() {
  return this.y + this.z;
};


const coords3d = new Coords3D(1, 2, 3);

// . recherche et trouve dans l'objet
console.log(coords3d.x);
console.log(coords3d.y);
console.log(coords3d.z);

// . recherche et trouve dans le proto de la fonction constructeur
console.log(coords3d.sumYZ());

// . recherche et trouve dans le proto de la fonction constructeur parent
console.log(coords3d.sumXY());

// . recherche et trouve dans le proto de la fonction constructeur Object
console.log(coords3d.hasOwnProperty('x')); // true
console.log(coords3d.hasOwnProperty('sumXY')); // false
