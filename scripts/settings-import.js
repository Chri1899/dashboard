const header = document.querySelector("#header");
fetch("/components/header.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML = data;
  });

const navigation = document.querySelector("#navigation");
fetch("/components/navigation.html")
  .then((res) => res.text())
  .then((data) => {
    navigation.innerHTML = data;
  });
