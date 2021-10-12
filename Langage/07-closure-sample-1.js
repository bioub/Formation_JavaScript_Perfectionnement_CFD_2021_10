for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// ????
// A - ..1s.. 0 1 2 (AVEC UNE CLOSURE)
// B - ..1s.. 0 ..1s.. 1 ..1s.. 2 (SI SETTIMEOUT ETAIT SYNCHRONE)
// C - 0 ..1s.. 1 ..1s.. 2 ..1s.. (SI SETTIMEOUT ETAIT SYNCHRONE)
// D - ..1s.. 3 3 3 (SANS CLOSURE)

// ^
// |
// |
// |                                                  lg    lg    lg
// |for { st - st - st }  i=3                         fct - fct - fct
// +--------------------1ms---------------------------1s--------------> temps
//                                                    3     3     3
