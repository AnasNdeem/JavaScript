const myArray = [0, 1, 2, 3, 4, 5, 6];
// myArray.push(7);
// myArray.pop();
// myArray.unshift(7);
//console.log(myArray.includes(8));
//console.log(myArray.indexOf(3));
//const newArray = myArray.join();
//console.log(newArray);
//console.log(myArray);
// slice , splice 
/*
console.log("A", myArray);
const my1 = myArray.slice(1, 3);
console.log(my1);
const my2 = myArray.splice(1, 3);
console.log(my2);
console.log("B", myArray);
*/
// Splice manuplate the originail array
const myHeros = ["Salman", "Adnan", "Usman", "Ali"];
const myFriends = ["Hammad", "Noman", "Asad", "Hamza"]
//myHeros.push(myFriends);
//console.log(myHeros);
//console.log(myHeros[3][1]);
 //let All = myHeros.concat(myFriends)
//console.log(All);
//let All = [...myHeros, ...myFriends];
//console.log(All);
 
const anotherArray = [1,2,3,4,[5,6,7],8,[9,10,11,[12,13]]];
const realArray = anotherArray.flat(Infinity);
console.log(realArray);

console.log(Array.isArray("Anas Nadeem"));
console.log(Array.from("Anas Nadeem"));
console.log(Array.isArray({name : "Anas Nadeem"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

