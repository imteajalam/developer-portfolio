/* ============================== menu icon ===========================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* ============================== scroll ===========================*/
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* ============================== sticky header ===========================*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /* ============================== remove toggle ===========================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* ======================================multiple typing ======================*/
const typed = new Typed(".multiple-text", {
  strings: ["Junior Developer", "Youtuber", "Blogger"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/* ======================================dark white mode ======================*/

const toggleSwitch = document.querySelector(".toggleSwitch");
toggleSwitch.addEventListener("click", function () {
  document.body.classList.toggle("switch");
});

// This JavaScript code is used to show and hide the top up button.

let topUpButton = document.getElementById("topUpButton");

window.onscroll = function () {
  if (window.scrollY > 20) {
    topUpButton.style.display = "block";
  } else {
    topUpButton.style.display = "none";
  }
};

topUpButton.onclick = function () {
  window.scrollTo(0, 0);
};
