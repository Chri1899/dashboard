function setTheme(theme) {
  setCookie("theme", theme, 10); // max 7days (?)
  document.documentElement.setAttribute("data-theme", theme);
}
