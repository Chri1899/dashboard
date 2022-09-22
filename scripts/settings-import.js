let current;

const header = document.querySelector("#header");
fetch("/components/globals/header.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML = data;
  });

const navigation = document.querySelector("#navigation");
fetch("/components/globals/navigation.html")
  .then((res) => res.text())
  .then((data) => {
    navigation.innerHTML = data;
  });

const slider = document.querySelector("#pageSlider");
fetch("/components/settings/pageslider.html")
  .then((res) => res.text())
  .then((data) => {
    slider.innerHTML = data;
  });

const settingsPage = document.querySelector("#settingsPage");
fetch("/components/settings/accountsettings.html")
  .then((res) => res.text())
  .then((data) => {
    settingsPage.innerHTML = data;
  });

/* Change Settings Content onclick */

function changeSite(changeTo, buttonID) {
  if (changeTo === current) {
    return;
  }

  const oldElement = document.getElementsByClassName("active")[0];
  oldElement.classList.remove("active");

  fetch(`/components/settings/${changeTo}`)
    .then((res) => res.text())
    .then((data) => {
      settingsPage.innerHTML = data;
    });

  document.getElementById(buttonID).parentElement.classList.add("active");
  current = changeTo;
}
