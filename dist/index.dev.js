"use strict";

var navAnim = function navAnim() {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".navbar-nav");
  var navlinks = document.querySelectorAll(".navbar-nav a");
  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
    navlinks.forEach(function (link, index) {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = "navlinksMove 0.5s ease forwards ".concat(index / 7 + 0.4, "s");
      }
    });
  });
  navlinks.forEach(function (navItem) {
    navItem.addEventListener('click', function () {
      nav.classList.remove('nav-active');
    });
  });
};

navAnim();