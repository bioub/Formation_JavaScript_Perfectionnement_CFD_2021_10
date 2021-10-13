// constructor
class Coords2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  sumXY() {
    return this.x + this.y;
  }
}


const coords2d = new Coords2D(1, 2);

console.log(typeof Coords2D); // function
console.log(typeof Coords2D.prototype.sumXY); // function

// Héritage jusqu'à ES5
class Coords3D extends Coords2D {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }
  sumYZ() {
    return this.y + this.z;
  }
}


const coords3d = new Coords3D(1, 2, 3);

console.log(coords3d);
