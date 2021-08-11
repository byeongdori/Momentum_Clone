const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  // preventDefault 함수 -> submit 해도 새로고침 안되게 막아줌!
  event.preventDefault();
  console.log(username);
}

function handleLinkClick(event) {
    event.preventDefault();
    alert("clicked");
}
 
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);