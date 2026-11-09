const btnNavClose = document.querySelector(".close-menu");
const btnNavOpen = document.querySelector(".open-menu");
const navLinks = document.querySelector(".nav-links")
btnNavOpen.addEventListener("click", function(){
   navLinks.style.visibility = "visible";
   btnNavClose.style.display = "block";
   btnNavOpen.style.display = "none";
});

btnNavClose.addEventListener("click" , function(){
      navLinks.style.visibility = "hidden";
   btnNavClose.style.display = "none";
   btnNavOpen.style.display = "block";

})