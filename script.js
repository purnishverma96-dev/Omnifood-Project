const BtnNavClose = document.querySelector(".close-menu");
const BtnNavCOpne = document.querySelector(".open-menu");

BtnNavCOpne.addEventListener("click", function(){
    classList.add("nav-links");
});
BtnNavClose.addEventListener("click",function(){
  classList.remove("nav-links");
});