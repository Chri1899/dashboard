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
