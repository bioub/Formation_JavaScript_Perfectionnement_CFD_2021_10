// BESOIN DE CREER INTENTIONNELLEMENT LA CLOSURE SI
// variable qui change de valeur dans le temps
// et que plus tard on veut afficher une valeur précédente
function saveI(iBackup) {
  return () => {
    console.log(iBackup);
  };
}

for (var i=0; i<3; i++) {
  setTimeout(saveI(i), 1000);
}

// ????
// A - ..1s.. 0 1 2 (AVEC UNE CLOSURE)
// B - ..1s.. 0 ..1s.. 1 ..1s.. 2
// C - 1 ..1s.. 2 ..1s.. 3 ..1s..

// ^
// |
// |
// |                                                  lg    lg    lg
// |for { st - st - st }  i=3                         fct - fct - fct
// +--------------------1ms---------------------------1s--------------> temps
//                                                    0     1     2
