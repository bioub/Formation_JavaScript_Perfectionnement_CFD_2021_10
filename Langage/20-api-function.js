'use strict';

globalThis.prenom = 'Romain';

function hello(p1, p2) {
  return `Bonjour ${p1}, ${p2} je m'appelle ${this.prenom}`;
}

// En mode sloppy (non-strict) : Bonjour Jean, Eric je m'appelle Romain
// this === globalThis

// En mode strict : TypeError: Cannot read properties of undefined (reading 'prenom')
// this === undefined

// console.log(hello('Jean', 'Eric'));

const contact = {
  prenom: 'Toto',
};

console.log(hello.call(contact, 'Jean', 'Eric'));
console.log(hello.apply(contact, ['Jean', 'Eric']));
console.log(hello.call(contact, ...['Jean', 'Eric']));

const helloContact = hello.bind(contact);
console.log(helloContact('Jean', 'Eric'));

// Function.prototype.bind = function(thisArgs) {
//    return function(...args) {
//      return this.call(thisArgs, ...args);
//    }
// }
