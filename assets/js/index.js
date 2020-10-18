function hambugerBar() {
  let buns = document.querySelector(".buns");
  let links = document.getElementById("links");
  let navBar = document.querySelector("nav");
  links.hidden = true;

  buns.addEventListener("click", function () {
    if (links.hidden === true) {
      links.hidden = false;
      navBar.className = "sidebar"
    } else {
      links.hidden = true;
      navBar.className = "";
    }
  });
}
