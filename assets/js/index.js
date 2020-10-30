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
      appearingLinks(true);
      sideBar.className = "sidebar";
      buns.style.position = "fixed"
    } else {
      // links.hidden = true;
      appearingLinks(false);
      hideBar = true;
      sideBar.className = "";
      buns.style.position = "absolute";
      
    }
  });

  function appearingLinks(content) {
    if(content === true) {
      sideBar.innerHTML = 
      `<div>
      <li><a href="#portfolio"> Portfolio</a></li>
      <li><a href="#about"> About Me </a></li>
      <li><a href="#blog"> Blogs/Vlogs </a></li>
      <li><a href="#contact"> Contacts</a></li>
      </div>`
    } else {
      sideBar.innerHTML = ""
    }
  }
}
