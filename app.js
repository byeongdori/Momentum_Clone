const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

const link = document.querySelector("a");

function onLoginSubmit(event) {
  // preventDefault 함수 -> 기본 동작을 막아줌! (submit 해도 새로고침 안되게 막아줌!)
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  // 아래 두 방법 모두 동일한 방법!
  greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
    event.preventDefault();
    alert("clicked");
}
 
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);