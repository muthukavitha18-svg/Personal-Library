
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let errorMsg = document.getElementById("errorMsg");

  // Email regex check
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (emailPattern.test(email) && password.length >= 6) {

    // ✅ correct input
    errorMsg.classList.add("hidden");

    window.location.href = "home.html";
    //alert("REGISTRATION SUCCESSFULLY ✅");

    // redirect
   // window.location.href = "index.html";

  } else {

    // ❌ wrong input
    errorMsg.classList.remove("hidden");

  }
});
