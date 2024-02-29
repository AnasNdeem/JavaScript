/* HTML
<div class="main">
<h1 class="heading" id="title">Learning DOM <Span id="sub-title"></Span> </h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, commodi.</p>
</div>
<ul>
<li class="list-item">Item-1</li>
<li class="list-item">Item-2</li>
<li class="list-item">Item-3</li>
</ul>

*/

/*
document.getElementById('title').style.backgroundColor = "red";
document.getElementById('title').style.padding = "15";
document.getElementById('title').style.borderRadius = "15px 15px";
document.getElementById('title').style.textAlign= "center";
document.getElementById('title').textContent ="Hi My Name is Anas Nadeem!"
document.getElementById('sub-title').innerHTML="I am A We App Developer!";
document.getElementById('sub-title').innerHTML="I am A We App Developer!";
*/
//HTML
/*
<div class="parent">
    <div class="day">Monday</div>
    <div class="day">Tuesday</div>
    <div class="day">Wensday</div>
    <div class="day">Thursday</div>
    <div class="day">Friday</div>
   </div>
*/
/*
const temlist = document.querySelectorAll('li');
temlist.forEach(function(i){
    i.style.backgroundColor = "red";
    i.style.color = "white";
    i.style.display = "flex";
    i.style.flexDirection = "column";
})
*/
/*
const list_item = document.getElementsByClassName('list-item');
let li_1 = Array.from(list_item);
li_1.forEach(function(li){
    li.style.color = "red";
    li.style.fontSize = "40px";
})
*/
//SECTION 2
/*
const parent =  document.querySelector('.parent');
console.log(parent);
console.log(parent.children)
console.log(parent.children[1].innerHTML)
for (let i=0; i< parent.children.length; i++){
    console.log(parent.children[i].innerHTML);
}
*/
/*
const div = document.createElement('div');
console.log(div);
div.className = 'main';
div.id = Math.round(Math.random()*10+1);
div.setAttribute("title", "generated-title");
div.style.backgroundColor = "green";
div.style.padding = "12px";

div.innerText =  "Anas Nadeem And Brother!";
const addText = document.createTextNode("Anas Nadeem And Brother!");
div.appendChild(addText);
document.body.appendChild(div);
*/
//const langName = prompt("Write the name of language that you add?");
/*function addlist(list){
    const li = document.createElement('li');
    li.innerHTML = `${list}`;
    document.querySelector('.language').appendChild(li);

}
addlist(`${langName}`);
*/

//const langName = prompt("Write the name of language that you add?");
function addOptLanguage(langsName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langsName));
    document.querySelector('.language').appendChild(li)
}
addOptLanguage(`${langName}`);
/*
const secondLanguage = document.querySelector("li:nth:chlid(2)");
secondLanguage.innerHTML = "MOjo";
*/
/*
const newli = document.createElement('li');
newli.textContent = "mojo";
secondLang.replaceWith(newli);
*/
/*
const fristLang = document.querySelector("li:frist-child")
fristLang.outerHTML = '<li>TypeScript</li>';

const lastLang =  document.querySelector('li:last-child')
lastLang.remove();
*/







