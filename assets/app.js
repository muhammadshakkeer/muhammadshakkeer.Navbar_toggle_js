const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // if(links.classList.contains('show-links')){
  //   links.classList.remove('show-links')
  //   console.log("removed")
  // }else{
  //   links.classList.add("show-links")
  //   console.log('added')
  // }
  // better code for above commented code
  links.classList.toggle("show-links");
});
