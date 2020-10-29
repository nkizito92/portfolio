function hambugerBar() {
  let buns = document.querySelector(".buns");
  let links = document.getElementById("links");
  let sideBar = document.querySelector("#addSideBar");
  links.hidden= true;
  let hideBar = true;

  buns.addEventListener("click", function () {
    if (hideBar === true) {
      // links.hidden = false;
      hideBar = false;
      appearingLinks();
      sideBar.className = "sidebar";
    } else {
      // links.hidden = true;
      hideBar = true;
      sideBar.className = "";
    }
  });

  function appearingLinks() {
    sideBar.innerHTML = 
   `<div>
    <li><a href="#portfolio"> Portfolio</a></li>
    <li><a href="#about"> About Me </a></li>
    <li><a href="#blog"> Blogs/Vlogs </a></li>
    <li><a href="#contact"> Contacts</a></li>
  </div>`
  }
}
