// function for showing and hiding the menu
function showMenu() {
  if (document.getElementById("navigation").style.visibility === "visible") {
    document.getElementById("navigation").style.visibility = "hidden";
    document.querySelector("body").style.overflowY = "auto";
  } else {
    document.getElementById("navigation").style.visibility = "visible";
    document.querySelector("body").style.overflowY = "hidden";
  }
}
