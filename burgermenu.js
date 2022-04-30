/* //// Burger menu
let navBtn = document.querySelector(".burgerMenu");
let navLinks = document.querySelector(".burgerMenuItems");
let overlay = document.querySelector(".overlay");

navBtn.addEventListener("click", burgerDrop);

function burgerDrop() {
  console.log("burgerDrop");
  navLinks.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}
if (navBtn.style.display === "block") {
  navLinks.style.display = "block";
  navBtn.style.display = "none";
  console.log("optionA");
} else if (navBtn.style.display === "none") {
  navLinks.style.display = "none";
  navBtn.style.display = "block";
  console.log("optionB");
}
console.log("burgerClick");
 */
let menuIcon = document.querySelector(".menuIcon");
let navLinks = document.querySelector(".burgerListitems");
let overlay = document.querySelector(".overlay");

menuIcon.addEventListener("click", menuDrop);

function menuDrop() {
  console.log("menuDrop");
  navLinks.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}
if (menuIcon.style.display === "block") {
  navLinks.style.display = "block";
  menuIcon.style.display = "none";
} else if (menuIcon.style.display === "none") {
  navLinks.style.display = "none";
  menuIcon.style.display = "block";
}
