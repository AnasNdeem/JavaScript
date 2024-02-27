// for of 
/*
const arr  =  [1, 2, 3, 4, 5];

for (const num of arr ){
    //console.log(num);
}
const greetings = "Hello World!";
for (const greet of greetings){
    console.log(`Each char is ${greet}`);
}
*/
//Maps
/*
const map = new Map();
map.set('IN', "India");
map.set('PK', "Pakistan");
map.set('USA', "United Sate of America");
map.set('Fr', "France");
*/
//console.log(map);
//for (const [key, value] of map){
    //console.log(key, ':-', value);
// }
/*
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
*/
/*
for (const [key, value] of myObject){
    console.log(key, ':-', value);
}
*/
//Object
/*
const myObject  = {
    js : 'JavaScript',
    cpp : 'C++',
    rb: 'ruby',
    swift: 'Swift By Apple'
}
// for in loop
for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
}
*/
/*
const programing = ["js","rb", "Py", "Sw"];
for (const key in programing){
    console.log(programing[key])
}
*/
/*
const map = new Map();
map.set('IN', "India");
map.set('PK', "Pakistan");
map.set('USA', "United Sate of America");
map.set('Fr', "France");
for (const key in map) {
   console.log(key);
}
//The map is not irettrate in map
*/
//For Each Loop
//const coding = ["Js", "python", "ruby", "java", "cpp"];
/*/
coding.forEach(function (items){
    console.log(items);
});
*/
/*
function printMe(item){
  console.log(item);
}
coding.forEach(printMe);
*/
/*
coding.forEach( (i, index, arr) => {
    console.log(i, index, arr);
})
*/
const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "Java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    },

]
myCoding.forEach( (item) => {
    console.log(item.languageName)
})
