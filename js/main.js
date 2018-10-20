var hamburger = document.getElementsByClassName('hamburger');
var menu = document.getElementsByClassName('menu');


hamburger[0].addEventListener('click', function() {
  if(menu[0].hasAttribute('style')) {
    menu[0].removeAttribute("style");
  } else {
    menu[0].style.display = "block";
  }
});
