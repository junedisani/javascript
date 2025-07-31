const score = 400
console.log(score);

const balance = new Number(200);
console.log(balance);
console.log(balance.toString()); // changes num into string
console.log(balance.toFixed(3)); // to fixed gives number of zero after decimal

const anotherNum = 134.8903
console.log(anotherNum.toPrecision(3)); // gives precision to a number.

const hundreds = 100000000000
console.log(hundreds.toLocaleString(`en-IN`)); // gives comas to numbers.

//************************** MATHS ******************************************** */

console.log(Math);
console.log(Math.abs(-4)) // abs change negative value in positive
console.log(Math.round(4.6)); // round is used to round of the value.
console.log(Math.ceil(4.2)); // ceil is used to round of the value to "top"!
console.log(Math.floor(4.9)); // floor is used to round of the value to "bottom"!
console.log(Math.max(4,6,8,2)); // max gives maximum value
console.log(Math.min(4,6,8,2)); // min gives minimum value

console.log(Math.random()); // gives a random value between 0 and 1

const min = 10
const max = 20

console.log(((Math.random() * (max-min +1))) + min);








