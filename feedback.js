// Toggle menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Star rating
let selectedRating = 0;

function rate(value) {
  selectedRating = value;

  let stars = document.querySelectorAll("#stars span");

  stars.forEach((star, index) => {
    if (index < value) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}

// Submit feedback with validation
function submitFeedback() {
  let feedbackText = document.querySelector("textarea").value.trim();

  // Validation
  if (selectedRating === 0) {
    alert("Please select a rating ⭐");
    return;
  }

  if (feedbackText === "") {
    alert("Please enter your feedback ✍️");
    return;
  }

  // Success
  alert("Thank you for your feedback!");

  // Reset form
  document.querySelector("textarea").value = "";
  selectedRating = 0;

  let stars = document.querySelectorAll("#stars span");
  stars.forEach(star => star.classList.remove("active"));

  // Optional: reload page
  location.reload();
}