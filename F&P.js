//Function & Perameter
function sayName(){
    console.log('A');
    console.log('N');
    console.log('A');
    console.log('S');
    console.log('N');
    console.log('A');
    console.log('D');
    console.log('E');
    console.log('E');
    console.log('M');
}
//sayName();
/*
function addTwoNumber(number1, number2){
    console.log(number1 + number2);

}
*/
function addTwoNumber(number1, number2){
  // let result = (number1 + number2);
   // return result;
   return number1 + number2
}
const  result  = addTwoNumber(3, 5);
//console.log("Result:", result)

/*
// Function in details

let username = prompt("Enter YouName!")
function logInUserMessage(username){
    if(!username){
        alert("Please Enter A User Name!");
        return;
    }
    return `${username} Just Logged In ❤️`;
}
alert(logInUserMessage(username));
*/
// Function With Objects
function calculatorCartPrice(...num1){
    return num1;

}
console.log(calculatorCartPrice(20,1000,300,400,600,500));

const user  = {
    userName: "Anas Nadeem",
    price: 200
}

function handleObj(anyObj){
    console.log(`Username is ${anyObj.userName} and price is ${anyObj.price}`)

}
handleObj({
    userName : "Sami",
    price:   "599"
});

const myNewArray = [200, 300, 400, 500.100];

function returnSecondryValue(getArray){
    return getArray[0,1,2,3,4]
}
alert(returnSecondryValue([200, 300, 400, 500, 100]));
