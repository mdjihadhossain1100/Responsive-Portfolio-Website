// Navigation menu
let menuBtn = document.querySelector(".menu-button");
let canceBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");

menuBtn.onclick = function() {
  menuBtn.style.opacity = '0';
  menuBtn.style.pointerEvents = 'none';
  navBar.classList.add("active");
}
canceBtn.onclick = function() {
  menuBtn.style.opacity = '1';
  menuBtn.style.pointerEvents = 'auto';
  navBar.classList.remove("active");
}

// Sticky navb
let val;
let nav = document.querySelector("nav");
  window.onscroll = function(){
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("sticky");
    }else{
      nav.classList.remove("sticky")
    }
  }