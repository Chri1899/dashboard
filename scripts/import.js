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

const timeline = document.querySelector("#timeline");
fetch("/components/index/timeline.html")
  .then((res) => res.text())
  .then((data) => {
    timeline.innerHTML = data;
  });

const progress = document.querySelector("#progress");
fetch("/components/index/progress.html")
  .then((res) => res.text())
  .then((data) => {
    progress.innerHTML = data;
  });

const graph = document.querySelector("#graph");
fetch("/components/index/graph.html")
  .then((res) => res.text())
  .then((data) => {
    graph.innerHTML = data;
  });
