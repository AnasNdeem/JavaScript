// for loop
/*
for (let i = 0; i < 11; i++) {
    const element = i;
    if (element == 5 ){
        console.log("5 is the best number!")
    }
    console.log(element);
}
*/

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer Loop Value: ${i}`);
    for (let j = 1; j <= 10; j++) {
    //console.log(`Inner Loop Value: ${j} and Inner Loop Value: ${i}`);
       //console.log(i + '*' + j + '=' + i*j)
    }
    
}
let myArray = ['Anas', 'Saim', 'Ali', 'Asad', 'Muavia', 'Ahmad'];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(`My name is ${element}`);
}
// break and continue
/*
 for (let index = 1; index <= 20; index++) {
    if(index == 8){
        console.log('Detected 8');
        break;
    }
   
    console.log(`Value of i is ${index}`);
    
 }
 */
/*
 for (let index = 1; index <= 20; index++) {
    if(index == 8){
        //console.log('Detected 8');
       continue;
    }
    //console.log(`Value of i is ${index}`);
 }
 */

 //While Loop
 /*
 let index = 0;
 while (index <= 10){
    console.log(`Value of index is ${index}`);
    
 }
*/
/*
let myArray1 = ['Anas Nadeem', 'Sajid Ali', 'Ahmad ali', 'Hasan Ali'];

let arr = 0 ;
 while(arr < myArray1.length){
    console.log(`Value is ${myArray1[arr]}`);
    arr = arr + 1;
 }
*/
/*
let score = 1;
do{
    console.log(`Score is ${score}!`);
    score++;
}while(score <= 10);
*/

//HTML
//<h1  id="alpha">A</p>
//css
/*
#alpha{
    margin: 0;
    padding: 0;
    text-align: center;
    color: red;
    font-size: 60px;
   } 
*/
//javaScript
/*
const alpha = document.getElementById('alpha');
let latters = 'ABCDEFGHKLMNOPQRSTUVWXYZ';

let i = 0;
function updateAlpha(){
    alpha.textContent = latters[i];
    i++;
}
setInterval(updateAlpha, 100);
*/


