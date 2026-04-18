document.addEventListener("DOMContentLoaded", function () {

  let username = "User";
  document.getElementById("welcome").innerText =
    "Welcome Back, " + username + " 👋";

  let totalBooks = 30;
  let totalPages = 6437;
  let avgRating = 4.7;
  let reading = 0;

  document.getElementById("books").innerText = totalBooks;
  document.getElementById("pages").innerText = totalPages;
  document.getElementById("rating").innerText = avgRating;
  document.getElementById("reading").innerText = reading;

});

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

function goTobooks(){
  window.location.href="mybooks.html"
}