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

  interne()
}

externe()

// pile d'appels
// ^
// |
// |
// |interne
// |externe
// +----------------------------------------------------> temps
