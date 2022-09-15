// function for showing and hiding the profile dropdown
function showDropdown() {
  document.getElementById("profileDropdown").classList.toggle("show");
}

function change() {
  var input = document.getElementById("input");
  var progress = document.getElementById("test");
  progress.value = input.value;
  console.log(progress.value);
}
