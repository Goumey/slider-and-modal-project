let toggle=document.getElementById("toggle");
let nav=document.getElementById("nav");
let header=document.getElementById("header");
let signup=document.getElementById("signup");
let modal=document.getElementById("modal");
let body=document.getElementById("body");
let close=document.getElementById("close");
console.log(toggle)
console.log(nav)
toggle.addEventListener("click",function slide(event){
event.preventDefault();


body.classList.toggle("visible");

console.log(nav)
})
signup.addEventListener("click",function modale(){

    modal.classList.add("apparait");
  
 modal.style.display="block";
 modal.classList.remove("close")
console.log(modal)
} )
console.log(body)
close.addEventListener("click",function modale(){
    modal.classList.add("close");
    modal.classList.remove("apparait")
    modal.style.display="none";
    console.log(modal)
    } )
    modal.addEventListener("click",function modale(){
        modal.style.display="none";
        modal.classList.add("close");
        modal.classList.remove("apparait")
       
        console.log(modal)
        } )