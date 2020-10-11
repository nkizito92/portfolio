function hambugerBar() {
  let buns = document.querySelector(".buns");
  let links = document.getElementById("links");
  let navBar = document.querySelector("nav");
  links.hidden = true;

  buns.addEventListener("click", function () {
    if (links.hidden === true) {
      links.hidden = false;
      navBar.style.height = "100%";
    } else {
      links.hidden = true;
      navBar.style.height = "70px";
    }
  });
}
