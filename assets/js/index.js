function hambugerBar() {
  let buns = document.querySelector(".buns");
  let links = document.getElementById("links");
  buns.addEventListener("click", function () {
    links.hidden === true ? links.hidden = false : links.hidden = true;
  });
}
