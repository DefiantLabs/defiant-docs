window.onload = function() {
  var links = document.querySelectorAll(".menu__link");
  for(var i = 0; i < links.length; i++) {
    if(links[i].innerHTML === "Noble") {
      links[i].classList.add("sidebar-label-Noble");
    }
  }
}
