globalThis.globalScope = 'globalScope';
const globalOrModuleScope = 'globalOrModuleScope';

function externe() {
  const closureScope = 'closureScope';

  function interne() {
    const localScope = 'localScope';

    console.log(localScope);
    console.log(closureScope);
    console.log(globalOrModuleScope);
    console.log(globalScope);
  }

  return interne;
}

const interneFromExterne = externe();
interneFromExterne();

// pile d'appels
// ^
// |
// |
// |
// |externe - interne
// +----------------------------------------------------> temps
