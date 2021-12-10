console.log("Hello World");
const username = document.getElementById("username");
parent = username.parentElement;
small = parent.querySelector("small");
parent.className = "form-control error";
small.innerText = "OOXX";

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submit");
});
