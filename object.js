// Singleton

//object literals
const mySym = Symbol("key1");
const appUser = {
   name: "Anas",
   "full name" : "Anas Nadeem",
   [mySym]: "mykey1",
   age: 20,
   location: "Kasur",
   email:"anas9deem@gmail.com",
   isLoggedIn: false,
   lastLoggedIn: ["Monday", "Saturday"]
}
console.log(appUser.email);
console.log(appUser["name"]);
console.log(appUser["full name"]);
console.log( appUser[mySym]);
appUser.email = "anasmaher@gmail.com";
//Object.freeze(appUser);
appUser.email = "maheranas@mail.com";
//console.log(appUser);

appUser.greeting = function(){
    console.log("Hello Application User!");
}
appUser.greetingTwo = function(){
    console.log(`Hello Application User ${this["full name"]}!`);
}

console.log(appUser.greetingTwo());


//singletone Method

const pUser = {}

pUser.id = "123abc"
pUser.name = "Saim"
pUser.isLoggedIn = true

//console.log(pUser);


const regularUser = {
    email : "some@gmail.com",
    fullname:{
        uFname:{
            fName:"Anas",
            lName:"Nadeem"
        }
    }
}
//console.log(regularUser.fullname.uFname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}
const obj4 = {7: "g", 8: "h"}


//const obj5 = Object.assign( {}, obj1, obj2, obj3, obj4)
//console.log(obj5);

const obj5 = {...obj1, ...obj2, ...obj3, ...obj4};
console.log(obj5);

console.log(Object.keys(pUser));
console.log(Object.values(pUser));
console.log(Object.entries(pUser));










