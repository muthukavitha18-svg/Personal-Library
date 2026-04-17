// STATE DATA
let booksCompleted = 2; // Initial completed count
let yearlyGoal = 5; // Initial goal count

// INITIALIZE AND UPDATE DISPLAY
function updateDisplay() {
  // 1. Update Text Labels
  document.getElementById("completedCount").innerText =
    `${booksCompleted} completed`;
  document.getElementById("doneCount").innerText = booksCompleted;
  document.getElementById("goalTargetDisplay").innerText =
    `Goal: ${yearlyGoal} books`;

  // 2. Calculate Progress Bar Percentage
  let ratio = (booksCompleted / yearlyGoal) * 100;
  if (ratio > 100) ratio = 100; // Cap visual bar at 100%

  document.getElementById("progressBar").style.width = ratio + "%";
  document.getElementById("percentText").innerText = Math.floor(ratio) + "%";

  // 3. ACHIEVEMENT LOGIC (The Fix)
  // We use .classList.toggle('active', condition) to add/remove the 'active' class

  // Sprout: Unlocks at 1 book
  document
    .getElementById("badge-1")
    .classList.toggle("active", booksCompleted >= 1);

  // Bloom: Unlocks at 5 books
  document
    .getElementById("badge-5")
    .classList.toggle("active", booksCompleted >= 5);

  // Blossom: Unlocks at 10 books
  document
    .getElementById("badge-10")
    .classList.toggle("active", booksCompleted >= 10);

  // Scholar: Unlocks at 20 books
  document
    .getElementById("badge-20")
    .classList.toggle("active", booksCompleted >= 20);

  // Spirit: Unlocks at 50 books
  document
    .getElementById("badge-50")
    .classList.toggle("active", booksCompleted >= 50);

  // Goal!: Unlocks when you hit or exceed your specific yearly target
  document
    .getElementById("badge-goal")
    .classList.toggle("active", booksCompleted >= yearlyGoal);
}

// SAVE GOAL ACTION (Triggered by Save Button)
function saveGoal() {
  const inputVal = document.getElementById("goalInput").value;
  yearlyGoal = parseInt(inputVal) || 1; // Fallback to 1 if input is empty

  // Show Toast Notification (Image 2 effect)
  const toast = document.getElementById("toast");
  toast.style.display = "block";

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);

  updateDisplay(); // Refresh UI with new goal
}

// COMPLETE BOOK ACTION (Triggered by + Mark Button)
function markCompleted() {
  booksCompleted++; // Increment count
  updateDisplay(); // Refresh UI instantly
}

// Ensure UI renders correctly when the window finishes loading
window.onload = updateDisplay;
