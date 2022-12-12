

let a = 4
let b = 2
// > < >= <= && ||
// ===

let x = 1 // number
let y = '1'
// cau dieu kien
if ( (x === y) || (a>b) ) { 
    // true
    console.log(' a lon hon b');
}else{
    console.log(' b lon hon a');
}
// condition rendering
(x === y) ? console.log(' a lon hon b') : console.log(' b lon hon a')

x && console.log(1); // res of condition : boolean
// 

let z = 0
if (z) { // false
    console.log(true);
}else{
    console.log(false);
}

