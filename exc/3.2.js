
// From function declarations to explicit and implicit
// return functions (one of each).
function welcome() {
let welcome = 'Welcome to Appleseeds Bootcamp!';
return welcome;
}

function power(a) {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
}

// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);
(function (a){Math.sqrt(a);})()

const randomNumbers = (a, b) => Math.random() * (a - b) + b;
((a, b)=> {
    Math.random() * (a - b) + b;
})()