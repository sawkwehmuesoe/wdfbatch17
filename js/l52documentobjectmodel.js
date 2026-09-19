let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;

val = document.URL; // http://127.0.0.1:5500/l52documentobjectmodel.html

val = document.links; // HTMLCollection
val = document.links[0]; // <a href="#" id="delete-item1" class="delete-item">delete</a>
val = document.links[3];
val = document.links[3].id; // delete-item4
val = document.links[5].id; // clearall

val = document.links[3].className; // 
val = document.links[3].classList; // DOMTokenList
val = document.links[3].classList[0]; // delete-item
val = document.links[3].classList[1]; //  myitem

val = document.forms; // HTMLCollection
val = document.forms[0]; 
val = document.forms[0].id; // form
val = document.forms[0].className;
val = document.forms[0].classList; // DOMTokenList
val = document.forms[0].classList[0];  // form
val = document.forms[0].action; // http://127.0.0.1:5500/l52documentobjectmodel.html
val = document.forms[0].method; // get 

val = document.images; // HTMLCollection
val = document.images[0]; // <img src="./img/gif/loading.gif" id="loading" class="loading" alt="loader">
val = document.images[0].id; // loading
val = document.images[0].className;
val = document.images[0].classList;
val = document.images[0].classList[0];
val = document.images[0].alt;
val = document.images[0].src;

val = document.scripts; // HTMLCollection
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type; // application/javascript 

// => Change Style 
// document.getElementById("tasktitle").style.backgroundColor = "green";
// document.getElementById("tasktitle").style.color = "#fff";
// document.getElementById("tasktitle").style.padding = "5px";

// => Change Content 
// document.getElementById("tasktitle").textContent = "My Job";
// document.getElementById("tasktitle").innerText = "My Task";
// document.getElementById("tasktitle").innerHTML = "<span style='color:yellow'>My To do</span>";

// console.log(val);

// Call by Class Name (class)
// const lis =document.getElementsByClassName("list-group-item");
// console.log(lis);  // HTML Collection
// console.log(lis[2]);

// lis[2].style.color = "blue";
// lis[2].textContent = "Have to visit";
// lis[2].innerText = "Have to cook";
// lis[2].innerHTML = 'Have to cook <a href="#" id="delete-item5" class="delete-item">delete</a>';


// => Call by Tag Name ( Element )

// const litags = document.getElementsByTagName('li');
// console.log(litags); // HTML Collection 
// console.log(litags[1]);

// litags[1].style.color = "red";
// litags[1].innerHTML = 'Have to cook <a href="#" id="delete-item5" class="delete-item">delete</a>';


// => Query Selector 

// console.log(document.querySelector('#tasktitle'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h3'));

// console.log(document.querySelector('li'));
// console.log(document.querySelector('.list-group-item'));

// document.querySelector('.list-group-item').style.color = "blue";
// document.querySelector('ul li').style.color = "violet";
// document.querySelector('ul li:nth-child(odd)').style.color = "violet";
// document.querySelector('ul li:nth-child(even)').style.color = "violet";
// document.querySelector('ul li:last-child').style.color = "violet";
// document.querySelector('ul li:last-of-type').style.color = "orange";
// document.querySelector('ul li:nth-of-type(4)').style.color = "tomato";

// =>  QuerySelectorAll()

// console.log(document.querySelectorAll('#tasktitle')); // NodeList
// console.log(document.querySelectorAll('#tasktitle')[0]);

// console.log(document.querySelectorAll('.card-title'));
// console.log(document.querySelectorAll('.card-title')[0]); 

// console.log(document.querySelectorAll('li'));
// console.log(document.querySelectorAll('li')[2]); 

// console.log(document.querySelectorAll('.list-group-item'));
// console.log(document.querySelectorAll('.list-group .list-group-item')[3]); 


const listitems = document.querySelector("ul").getElementsByClassName("list-group-item");

// console.log(listitems); // HTML Collections
// console.log(typeof listitems);
// console.log(listitems[1]);

const arritems = Array.from(listitems);
// console.log(arritems);

// arritems.forEach(function(arritem){
//     console.log(arritem);
// })

const listitms = document.querySelectorAll(".list-group-item");
// console.log(listitms); //Note List
// console.log(typeof listitms);
// console.log(listitms[1]);

// listitms.forEach(function(listitm,idx){
//     // console.log(listitm);

//     // listitm.innerText = `Hello World`;
//     listitm.innerText = `${++idx} Hello World`;

// })

const lisodds = document.querySelectorAll('li:nth-child(odd)');
// console.log(lisodds);

const lisevens = document.querySelectorAll('li:nth-child(even)');
// console.log(lisevens);

// lisodds.forEach(function(lisodd){
//     lisodd.style.backgroundColor = "gray";
// });

// lisevens.forEach(function(liseven){
//     liseven.style.backgroundColor = "orange";
// });


// for(let i = 0 ; i < lisevens.length ; i++){
//     // console.log(i);
//     lisevens[i].style.backgroundColor = "silver"
// }


// => Parent to Children 

let getli = document.querySelector("ul li");
    getli = document.querySelector("li.list-group-item");
    getli = document.querySelector("li.list-group-item:first-child");
// console.log(getli); 

let chl;
let getul = document.querySelector("ul.list-group");
// console.log(getul);

chl = getul.children; // HTML Collection
// console.log(chl);
// console.log(chl[2]);

// chl[1].textContent = "Have to go";
// getul.children[1].innerText = "Have to cook";
// getul.children[1].innerHTML = `Have to read <a href="#" id="delete-item5" class="delete-item">delete</a>`;

// => Parent to Children to Children  

chl = getul; // ul element 
chl = getul.children;
chl = getul.children[0];
chl = getul.children[0].children;


chl = getul.children[0].children[0];
chl = getul.children[0].children[0].id;
chl = getul.children[0].children[0].className;
chl = getul.children[0].children[0].classList;
chl = getul.children[0].children[0].classList[0];
chl = getul.children[0].children[0].href;

chl = getul.children[0].children[0].children;

chl = getul.children[0].children[0].children[0];

// console.log(chl);

// => Child Elemnent Count 

chl = getul.children.length;
chl = getul.childElementCount;

chl = getul.children[0].children.length;
chl = getul.children[0].childElementCount;

chl = getul.children[0].children[0].childElementCount;

console.warn(chl);


// => Children to Parent 

const getfirstli = document.querySelector('li.list-group-item:first-child');
console.log(getfirstli);

let getparent = getfirstli.parentElement; 
getparent = getfirstli.parentElement.parentElement; 
getparent = getfirstli.parentElement.parentElement.parentElement; 
getparent = getfirstli.parentElement.parentElement.parentElement.parentElement; 
console.log(getparent);


// => Next Element Sibling  

let getsibling = getfirstli;
getsibling = getfirstli.nextElementSibling;
getsibling = getfirstli.nextElementSibling.nextElementSibling;
getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;
getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

console.log(getsibling);

// => Previous Element Sibling  

getsibling = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(getsibling); 

// => Create Element 

const newli = document.createElement('li');

// => Add ID 
newli.id = "new-item";

// => Add Class 
newli.className = "list-group-item";
newli.className = "delete-me";
newli.className = "list-group-item delete-me";

newli.classList.add('delete-i');
newli.classList.add('delete-you');
newli.classList.add('delete-we','delete-us');

// => Add Attribute , setAttribute(attname,value)

newli.setAttribute('title','new-item');

// newli.textContent = "Hey";
// newli.innerText = "Hi";
// newli.innerHTML = `List Item <a href="#" id="delete-item5" class="delete-item">delete</a>`;

// const newtext = document.createTextNode("Hello World"); 
// console.log(newtext);
// newli.appendChild(newtext);

newli.appendChild(document.createTextNode("Have to cook"));

const newlink = document.createElement("a");
// newlink.setAttribute('href','#');
newlink.href = "#" ;
newlink.id = "delete-item6";
newlink.className = "delete-item";
newlink.classList.add("delete-item");

const newitalic = document.createElement("i");
newitalic.classList.add("fas","fa-trash-alt");

console.log(newitalic);

newlink.appendChild(newitalic);
newlink.appendChild(document.createTextNode("delete"));

console.log(newlink);

newli.appendChild(newlink);

console.log(newli);

document.querySelector("ul.list-group").appendChild(newli);

// => Replace Element , replaceChild(new,old)

const oldtitleh4 = document.getElementById('tasktitle');
// console.log(oldtitleh4); 

const newtitleh2 = document.createElement("h2");
newtitleh2.id = "tasktitle";

const newcaption = document.createTextNode('All My List');
newtitleh2.appendChild(newcaption);

// console.log(newtitleh2); 

const getcardfooter = document.querySelector('.card-footer');
// console.log(getcardfooter); 

getcardfooter.replaceChild(newtitleh2,oldtitleh4);

// => Remove Element (self) 

const getlis = document.querySelectorAll("li");

// console.log(getlis);

getlis[0].remove();

console.log(getlis);

getlis[1].remove(); // li  

console.log(getlis.length); // 6









