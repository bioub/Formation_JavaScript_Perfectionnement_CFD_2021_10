const nbs = [3, 4, 5];

// const trois = nbs[0];
// const quatre = nbs[1];
// const cinq = nbs[2];

//    [3    , 4     , 5   ]
const [trois, quatre, cinq] = nbs;

const fullName = 'Romain Bohdanowicz';

// const tmp = fullName.split(' ');
// const prenom = tmp[0];
// const nom = tmp[1];

//    ['Rom' , 'B']
const [prenom, nom] = fullName.split(' ');

// combiné avec default param
// const [trois, quatre, cinq, six = 6] = nbs;

// combiné avec REST Params
// const [trois, ...others] = nbs;

const coords = {x: 1, y: 2};

//    {x: 1     , y: 2     }
const {x: maVarX, y: maVarY} = coords;

// const {x: x, y: y} = coords;

// combiné avec shorthand property
// const {x, y} = coords;

// combiné avec default param
// const {x, y, z = 0} = coords;
