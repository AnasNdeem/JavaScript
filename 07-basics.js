// ******** Date *******
let mydate  = new Date();
 console.log(mydate.toString());
 console.log(mydate.toDateString());
 console.log(mydate.toLocaleString());
 console.log(typeof mydate);

 //let myCreatedDate = new Date(2024, 2, 23);
 //let myCreatedDate = new Date(2024, 2, 23, 5, 3);
 let myCreatedDate = new Date("01-14-2024");
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
console.log(Date.now());
let newDate = new Date();
 console.log(newDate);
 console.log(newDate.getMonth() +1);
 console.log(newDate.getDay());
 newDate.toLocaleString('default', {
    weekday: "long",
 })





