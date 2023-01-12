const hamb = document.querySelector(".hamb");
const menu = document.querySelector(".menu");

hamb.addEventListener('click' , function(){

    console.log("clicked");

    menu.classList.toggle("menu-mobile");


});