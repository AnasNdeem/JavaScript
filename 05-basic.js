// primitive
// 7 types : string, number, boolean, null, undefined, symbol, bigInt
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;


 const id= Symbol(123);
 const anotherId  = Symbol(123);
 console.log(id === anotherId);

 const bigNumber = 342567n;

// Refrence Type (Non primitive)
// Array, Objects, Functions
//Array
const friends = ["Usman", "Muneeb", "Ali", "Sajid", "Waseem", "Istikhar","Huzefa", "Abubakar"];
//Objects
let myObject = {
    name: "anas",
    age: 20,
    height: 6.5,
    color: "brown",
}
//Function 
 const myFunction = function(){
    console.log("Hello Dear How are you?");
     }
 //Stack (primitive type), Heap(Non-Primitive)

 let myName = "Anas Nadeem";
 let anothername = "2k Wala";

 console.log(myName);
 console.log(anothername);

 let userOne = {
    email: "user@gmail.com",
    password: '123%',
 }
 let userTwo = userOne
 userTwo.email = "anasmaher09@gmail.com";

 console.log(userOne.email);
 console.log(userTwo.email);

 const name = "Anas";
 const repoCount = 50;
console.log(`Hello my Name is ${name} and my Repo Number is ${repoCount}`);

const givenName = new String('Anas Nadeem');
console.log(givenName);
console.log(givenName.length);
console.log(givenName.toUpperCase());
console.log(givenName.charAt(2));
console.log(givenName.indexOf('t'));

const newString = givenName.substring(0, 4);
 console.log(newString);
 const anotherString = givenName.slice(-8, 4);
 console.log(anotherString);

 const newString1 = " Hello World ";
 console.log(newString1);
 console.log(newString1.trim());

const url= "https://google.com/20";
console.log(url.replace('20', '-'));
console.log(url.includes('anas'));


let text = "How are you doing today?";
const myArray = text.split(" ");

console.log(myArray)






