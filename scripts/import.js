const header = document.querySelector("#header");
fetch("components/header.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML = data;
  });

const timeline = document.querySelector("#timeline");
fetch("components/timeline.html")
  .then((res) => res.text())
  .then((data) => {
    timeline.innerHTML = data;
  });

const progress = document.querySelector("#progress");
fetch("components/progress.html")
  .then((res) => res.text())
  .then((data) => {
    progress.innerHTML = data;
  });

const andere = document.querySelector("#andere");
fetch("components/andere.html")
  .then((res) => res.text())
  .then((data) => {
    andere.innerHTML = data;
  });
