// Build by DevMasterMind
const form = document.getElementById("secure-form");
const errorBox = document.getElementById("error-box");
const sound = document.getElementById("fail-sound");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  errorBox.classList.add("show");

  sound.currentTime = 0;
  sound.play().catch((err) => console.log(err));

  document.getElementById("password").value = "";
  document.getElementById("email").value = "";
});

