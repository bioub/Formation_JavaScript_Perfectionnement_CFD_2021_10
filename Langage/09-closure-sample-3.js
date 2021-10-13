for (let i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}


// ????
// A - ..1s.. 0 1 2 (AVEC UNE CLOSURE)
// B - ..1s.. 0 ..1s.. 1 ..1s.. 2
// C - 1 ..1s.. 2 ..1s.. 3 ..1s..

// ^
// |
// |
// |                                                  lg    lg    lg
// |for { st - st - st }  i=undefined                 fct - fct - fct
// +--------------------1ms---------------------------1s--------------> temps
//                                                    0     1     2
