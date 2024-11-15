const menuBar = document.getElementById("menubar");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  if (menuBar.getAttribute("src") === "./images/icon-hamburger.svg") {
    menuBar.setAttribute("src", "./images/icon-close.svg");
    header.classList.add("open");
    nav.classList.add("open");
    menu.classList.add("open");
  } else {
    menuBar.setAttribute("src", "./images/icon-hamburger.svg");
    header.classList.remove("open");
    nav.classList.remove("open");
    menu.classList.remove("open");
  }
});
