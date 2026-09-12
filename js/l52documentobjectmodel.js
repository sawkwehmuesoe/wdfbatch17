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
document.getElementById("tasktitle").style.backgroundColor = "green";
document.getElementById("tasktitle").style.color = "#fff";
document.getElementById("tasktitle").style.padding = "5px";

// => Change Content 
// document.getElementById("tasktitle").textContent = "My Job";
// document.getElementById("tasktitle").innerText = "My Task";
document.getElementById("tasktitle").innerHTML = "<span style='color:yellow'>My To do</span>";


console.log(val);