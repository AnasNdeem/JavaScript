const  score = 400;
console.log(score);

const balance  = new Number(100);

console.log(balance)
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.8956;
console.log(otherNumber.toPrecision(3));
const hundreds = 100000;
console.log(hundreds.toLocaleString('en-PK'));
// ********** Maths *********************
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));
console.log(Math.min(4.5, 4.8, 3.7, 8.7, 3.5, 9.7));
console.log(Math.max(4.5, 4.8, 3.7, 8.7, 3.5, 9.7));
console.log((Math.random()*10)+1);

const min = 10;
const max = 80;

console.log(Math.floor(Math.random() * (max - min + 1)));
