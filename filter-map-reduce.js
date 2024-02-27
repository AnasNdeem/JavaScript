/*
const coding = ['js', 'ruby', 'java', 'python', 'cpp'];
const values = coding.forEach( (item) => {
    console.log(item);
    return item;
})
console.log(values);
*/
//Filter
//const myNums = [1,2,3,4,5,6,7,8,9,10];

/*
const newNums = myNums.filter((num)=> num > 4);
console.log(newNums);
*/
/*
const newNums = myNums.filter( (num) => {
    return num > 4;
});
console.log(newNums);
*/
/*
const newNums = [];
myNums.forEach( (num) =>{
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums);
*/
//BOOKS EXAMPLE
/*
const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1990, edition: 2000},
    {title: 'Book Three', genre: 'History', publish: 1900, edition: 2001},
    {title: 'Book Four', genre: 'Non-Finction', publish: 1999, edition: 2003},
    {title: 'Book Five', genre: 'Science', publish: 2000, edition: 2002},
    {title: 'Book Six', genre: 'MAthematics', publish: 2004, edition: 2005},
    {title: 'Book Seaven', genre: 'History', publish: 2008, edition: 2006},
    {title: 'Book Eight', genre: 'Culture-Study', publish: 1995, edition: 2007},
    {title: 'Book Nine', genre: 'Self-Development', publish: 1997, edition: 2008},
    {title: 'Book Ten', genre: 'Personal-Growth', publish: 1989 , edition: 2009},
    
];
//const userBooks = books.filter( (bk) => bk.genre == 'History')
const userBooks = books.filter( (bk) => {
     return bk.publish >= 2000 || bk.genre === 'History'
     })

console.log(userBooks);
*/
//MAP
/*
const myNums = [1,2,3,4,5,6,7,8,9,10];
//const newNums = myNums.map((num) => num + 10);
const newNums = myNums
    .map((num) => num * 10)
    .map( (num) => num +1)
    .filter( (num) => num >= 40) //We Makethis Chaining
console.log(newNums);
*/
 //Reduce
 const myNums = [1,2,3,4,5,6,7,8,9,10];
 /*
 const myTotal  = myNums.reduce( function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
 }, 0);
 */
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
 console.log(myTotal);

 const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2999,
    },
    {
        itemName: "Python Course",
        price: 2999,
    },
    {
        itemName: "Graphic Desiging Course",
        price: 2999,
    },
    {
        itemName: "App Development Course",
        price: 4999,
    },
    {
        itemName: "Web Development Course",
        price: 3999,
    },
 ]
const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceTopay);



