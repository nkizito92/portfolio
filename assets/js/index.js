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
      buns.children[0].style.transform = "translate(-7px, 15px)" + "rotate(55deg)"
      buns.children[2].style.transform = "translate(-7px, -10px)" + "rotate(125deg)"
      buns.children[1].style.opacity = 0;
      buns.style.borderRadius = "80%";
      
    } else {
      // links.hidden = true;
      appearingLinks(false);
      hideBar = true;
      sideBar.className = "";
      buns.style.position = "absolute";
      buns.children[0].style.transform = ""
      buns.children[2].style.transform = ""
      buns.children[1].style.opacity = ""
      buns.style.borderRadius = "";
    }
  });

  function appearingLinks(content) {
    if(content === true) {
      sideBar.innerHTML = 
      `<div>
          <li><a href="#portfolio"> Portfolio</a></li>
          <li><a href="#about"> About Me </a></li>
          <li><a href="#achievements"> Achievements </a></li>
          <li><a href="#blog"> Blogs/Vlogs </a></li>
          <li><a href="#contact"> Contacts</a></li>
      </div>`
    } else {
      sideBar.innerHTML = ""
    }
  }

  // Get the modal
var modal = document.querySelectorAll("#myModal");

// Get the button that opens the modal
var btn = document.querySelectorAll("#myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
for(let i = 0 ; i < modal.length; i++) {

  btn[i].addEventListener("click", function() {
    modal[i].style.display = "block"; 
  })
  
  // When the user clicks on <span> (x), close the modal
  span[i].addEventListener("click", function() {
    modal[i].style.display = "none";
  })
  
  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function(event) {
    if (event.target == modal[i]) {
      modal[i].style.display = "none";
    }
  })
}
}
