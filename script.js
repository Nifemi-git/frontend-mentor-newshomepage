let shade = document.getElementById("shade-div");
let mobileMenu = document.querySelector("#menu");
let openBtn = document.getElementById("open-menu-btn");
let closeBtn = document.getElementById("close-menu-btn");

const setDisplay = (menuValue, shadeValue) => {
  mobileMenu.style.display = menuValue;
  shade.style.display = shadeValue;
};

openBtn.addEventListener("click", () => setDisplay("flex", "block"));

closeBtn.addEventListener("click", () => setDisplay("none", "none"));
