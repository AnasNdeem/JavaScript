//IF
/*
if (2 == "2"){
    console.log("Executed");
}
if (2 === "2"){
    console.log("Executed");
}
if (2 != 3){
    console.log("Executed");
}
*/
/*
const  temperature = prompt("Enter the room temperature?");
if (temperature < 50){
    console.log("Less Than 50!");
}else{
    console.log("Temperature is greater than 50!");
}
*/
/*
const score = 200;
if(score > 100){
    let power = "fly";
    console.log (`User power: ${power}`);
}
console.log (`User power: ${power}`);
*/
// <,>,<=, >=,==, !=, ===
/*
const balance = prompt("Enter Your Current Balance?");
 const yourName = prompt("Enter You Name?");
alert(`Hello Dear ${yourName} your balance is ${balance}!`);
*/
//Short Hand Notaion
/*
const balance  =1000;
 if (balance > 500) console.log("test"),console.log("test2")//wor way dot use 
*/
/*
const balance = prompt("Enter Your Current Balance");
if (balance < 500){
    console.log("Less Than 500!");
}else if (balance < 750){
    console.log("Less Than 750!");
}else if (balance < 900){
   console.log("Less Than 900!");
}else{
    console.log("Greater Than 1000!")
}
*/
/*
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("allow to buy course!");
}
if (loggedInFromEmail || loggedInFromGoogle){
    console.log("allow to buy course!");
 
}
*/
//Switch Case
/*
const month = 4;
switch(month){
    case 1:
            alert("January!You are Goat!");
            break;
    case 2:
            alert("February:You are Become Stronglly Stable!");
            break;
    case 3:
            alert("March:You are a Future Billioner!");
            break;
    case 4:
            alert("April:You are HardWorker!");
            break;    
    case 5:
            alert("May:You are Intelligent!");
            break;    
    case 6:
            alert("June:You are Lazzy!");
            break;    
    case 7:
            alert("July:You are Loin!");
            break;    

    case 8:
            alert("August:You are Brave!");
            break;    

    case 9:
            alert("September:You are Gourgeouse!");
            break;    

    case 10:
            alert("October:You are Lovely!");
            break;    

    case 11:
            alert("November:You are Looking Good!");
            break;    
    case 12:
            alert("December:You are Cool!");
            break;
}
*/
//Falsy values
//False, 0, -0, bibInt = 0n, "", null, undefiend, NaN 
//Truthy values
// "0", "false", " ", [], {}, function(){}, 
/* 
const emptyArray = [];
 if(emptyArray.length === 0){
    console.log("Array is empty!");
 }
 */
/*
const emptyObj = {};
 if(Object.keys(emptyObj).length === 0 ){
      console.log("Object is Empty!");
 }
 */
/*
 false === 0;
 true
false === '';
true
0 == '';
true
*/
// Nullish Coalescing Opreator(??) null^^Undefiend

let val1;
//val1 = 5 ?? 10;
 //val1 = null ?? 10;
//val1 = undefined ?? 15;
/*
val1 = null ?? 10 ?? 20;
console.log(val1);
*/
// Terniary Opreator
// conition ? true : false
/*
const iceteaPrice  =100;
iceteaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
*/
