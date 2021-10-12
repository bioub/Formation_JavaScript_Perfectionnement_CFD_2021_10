setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');


// ^
// |
// |
// |                                lg                   lg    lg                lg
// |st - st - st - st - lg ..loop.. => ..loop..          cbA - cbD ..loop..      cbC
// +-----0--------------------------5ms------------------500ms-------------------1s---> temps
//                      E           B                    A     D                 C

// file d'attente de callbacks (tasks) de timers (0ms) : cbB
// file d'attente de callbacks (tasks) de timers (5ms) :
// file d'attente de callbacks (tasks) de timers (499ms) : cbA - cbD
// file d'attente de callbacks (tasks) de timers (500ms) : cbD
// file d'attente de callbacks (tasks) de timers (501ms) :
