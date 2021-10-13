function setTimeout(cb, delayMs) {
  // Bloquer le thread pendant delayMs
  // MAUVAISE PRATIQUE
  const debut = Date.now();
  while (debut + delayMs > Date.now()) ;

  cb();
}


for (var i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

function pause(delayMs) {
  // Bloquer le thread pendant delayMs
  // MAUVAISE PRATIQUE
  const debut = Date.now();
  while (debut + delayMs > Date.now()) ;
}


for (var i=0; i<3; i++) {
  pause(1000);
  console.log(i);
}
