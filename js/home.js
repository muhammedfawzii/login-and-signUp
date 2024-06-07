var theName = document.getElementById("theName");
var press = document.getElementById("press");
var navItem = document.getElementById("nav-item");
theName.innerHTML = localStorage.getItem("name");

press.addEventListener("click", function () {
  navItem.classList.add("d-block");
  window.location = "./login.html";
});
