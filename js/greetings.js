const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 반복해서 사용하는 문자열이 있을 경우에는 대문자 변수로 저장해서 사용!
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

loginForm.addEventListener("submit", onLoginSubmit);
if (savedUsername === null) {
  console.log(loginInput.value);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings();
}

function onLoginSubmit(event) {
  // preventDefault 함수 -> 기본 동작을 막아줌! (submit 해도 새로고침 안되게 막아줌!)
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  if (loginInput.value) {
    // local 저장소 사용
    localStorage.setItem(USERNAME_KEY, loginInput.value);
  }
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  // 아래 두 방법 모두 동일한 방법!
  /*
  greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  */
  greeting.innerText = `반가워요 ${username}님!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
