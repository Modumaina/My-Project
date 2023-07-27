const authpopup = document.getElementById("auth-popup");
authpopup.style.display = "none";
const authBtn = document.getElementById("auth-Btn");
authBtn.addEventListener("click", function () {
  authpopup.style.display = "flex";
});
const closebtnsvg = document.getElementById("close-btnsvg");
closebtnsvg.addEventListener("click", function () {
  authpopup.style.display = "none";
});
