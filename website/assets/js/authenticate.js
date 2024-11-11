function setupAuth() {
  showSignupForm();
}
function showSignupForm() {
  document.getElementById("loginForm").style.display = "none";
  document
    .getElementById("form-switch-btn-right")
    .classList.remove("btn-highlight");

  document.getElementById("signupForm").style.display = "block";
  document
    .getElementById("form-switch-btn-left")
    .classList.add("btn-highlight");
}
function showLoginForm() {
  document.getElementById("signupForm").style.display = "none";
  document
    .getElementById("form-switch-btn-left")
    .classList.remove("btn-highlight");

  document.getElementById("loginForm").style.display = "block";
  document
    .getElementById("form-switch-btn-right")
    .classList.add("btn-highlight");
}
