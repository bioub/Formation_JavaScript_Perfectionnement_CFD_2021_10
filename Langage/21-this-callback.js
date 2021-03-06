'use strict';

class Contact {
  constructor() {
    this.prenom = 'Romain';
  }
  hello() {
    console.log('Hello ' + this.prenom);
  }
  // ES3 closure
  // helloAsync() {
  //   var that = this;
  //   setTimeout(function() {
  //     console.log(that);
  //     console.log('Hello ' + that.prenom);
  //   }, 1000);
  // }
  // ES5 .bind
  // helloAsync() {
  //   setTimeout(function() {
  //     console.log(this);
  //     console.log('Hello ' + this.prenom);
  //   }.bind(this), 1000);
  // }
  // ES6 =>
  helloAsync() {
    setTimeout(() => {
      console.log(this);
      console.log('Hello ' + this.prenom);
    }, 1000);
  }
}

const contact = new Contact();
contact.helloAsync();


const coords1 = {
  x: 1,
  y: 2,
  // attention a ne pas flécher les méthodes
  // sinon pas de this (donc this ici === globalThis ou undefined en mode strict)
  sumXY: () => {
    return this.x + this.y;
  }
};


console.log(coords1.sumXY());
