document.addEventListener("DOMContentLoaded", function () {

  let username = "User";
  document.getElementById("welcome").innerText =
    "Welcome Back, " + username + " 👋";

  let totalBooks = 7;
  let totalPages = 2488;
  let avgRating = 4.7;
  let reading = 3;

  document.getElementById("books").innerText = totalBooks;
  document.getElementById("pages").innerText = totalPages;
  document.getElementById("rating").innerText = avgRating;
  document.getElementById("reading").innerText = reading;

});

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}