/*
var c = 30;
let a= 300
if(true){
    let a = 10;
    const b = 20;
    console.log("Inner:", a)
}
for (let i=0; i < array.length; i++){ 
    const element = array.length[i];
}
console.log("Outside:", a);
console.log(b);
console.log(c);
*/
// Nested scope
/*
function one(){
    const username = "Anas Nadeem";

    function two(){
        const website = "Youtube";
        console.log(username);
    }
    //console.log(website);
    two();  
}
one();

if(true) {
    const username = "Anas";
    if(username === "Anas"){
        const website = "YouTube";
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);
// +++++ Intresting +++++
function  addone(value){
    return num+1;
}
addone(5);
const addTwo = function(num){
    return num + 2;
}
addTwo(5);
*/
// Arrow And This Function
const user = {
    username: "Anas Nadeem",
    price : 999,

    welcomeMessage: function(){
        //console.log(`${this.username}, welcome to website!`);
       //console.log(this);
     }
}
//user.welcomeMessage();
//user.username = "sam";
//user.welcomeMessage();
//console.log(this);

function coffe(){
    let username = "Anas Nadeem";
    //console.log(username);
}
coffe();

//const addTwo  = (num1, num2) => {
   // return num1 + num2
//}

//const addTwo  = (num1, num2) =>  num1 + num2
//const addTwo  = (num1, num2) =>  (num1 + num2)
//const addTwo  = (num1, num2) =>  ({username: "Anas"})  

//console.log(addTwo(3, 4));
// Imediately Invoked Function Expressions (IIFE)
(function DataBase(){
    console.log('DataBase Connected!');
})();

(function DBname(){
  alert("DataBase No:1 has been Conected!");
})();

((name) => {
    console.log(`DB Connected to ${name}`)
})('Anas Nadeem');



