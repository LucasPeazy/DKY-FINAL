var popup = document.querySelector(".popup__overlay");
var btn = document.querySelector(".box-btn");
var btn2 = document.querySelector(".buy");
var close = document.querySelector(".close");
var bodyNode = document.body || document.getElementsByTagName('body')[0];


btn.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("hidden");
  bodyNode.classList.add("for_body")
});

popup.addEventListener("click", function(event) {
  e = event || window.event
  if (e.target == this) {
    popup.classList.add("hidden");
    bodyNode.classList.remove("for_body");
  }
});

close.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("hidden");
    bodyNode.classList.remove("for_body");
});

"use strict"
let cart = {
    "abc": {
    "name": "bob",
    "count" : 1,
},
    "abcd" : {
"name": "kevin",
"count" : 1,
},
"abcdf" : {
  "name": "david",
  "count" : 1,
}

};
document.onclick = event =>{
if(event.target.classList.contains("plus")){

    plusFunction(event.target.dataset.id);
}
if(event.target.classList.contains("minus")){

    minusFunction(event.target.dataset.id);
}
}
const plusFunction = (id) =>{
    cart[id][`count`]++;
    renderCart();
}
const minusFunction = (id) =>{
    if(cart[id][`count`] - 1 == 0){
        deletFunction(id);
        return true;
    }
    cart[id][`count`]--;
    renderCart();
}
const renderCart =() =>{
    console.log(cart);
}
renderCart();
const deletFunction = id =>{
    delete cart[id] ;
    renderCart();
}





function plus() {
  document.getElementById('someInputId').value = cart.abc.count +1
}


function minus() {
  document.getElementById('someInputId').value = cart.abc.count -1
}


function minus1() {
  document.getElementById('someInputId2').value = cart.abcd.count -1
}

function plus1() {
  document.getElementById('someInputId2').value = cart.abcd.count +1
}

function plus2() {
  document.getElementById('someInputId3').value = cart.abcdf.count +1
}

function minus2() {
  document.getElementById('someInputId3').value = cart.abcdf.count -1
}





