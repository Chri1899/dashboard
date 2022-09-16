// function for showing and hiding the menu
function openMenu() {
  document.getElementById("navigation").style.display = "block";
}

function closeMenu() {
  document.getElementById("navigation").style.display = "none";
}

/* Menu Handler */

window.addEventListener("click", function (e) {
  const id = "menuScreen";
  if (
    e.target.id === id ||
    e.target.parentElement.id === id ||
    e.target.parentElement.parentElement.id === id
  ) {
    openMenu();
  } else {
    if (!document.getElementById("test-box").contains(e.target)) {
      closeMenu();
    }
  }
});

