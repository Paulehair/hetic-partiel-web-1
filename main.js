var scroll = window.scrollY;
var header = document.querySelector("#navbar");

var toggle = function() {
  header.classList.toggle('navbar-scroll', scroll < scrollY);
  scroll = scrollY;
}

window.onscroll = toggle;
window.onload = toggle;
window.onrisize = toggle;