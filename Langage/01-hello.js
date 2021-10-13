'use strict';

/** @type {string[]} */
const prenoms = ['Romain', 'Jean', 'Eric'];

/**
 * Ma fonction hello
 * @param {string} name Un prénom
 * @returns {string} Le message
 */
function hello(name) {
  return `Hello ${name.toUpperCase()} !`;
  // return 'Hello ' + name + ' !';
}

for (const p of prenoms) {
  console.log(hello(p));
}
