// 기본 문법 //
/*
const a = 5;
const b = 2;
let c = 3;

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(c);

c = 30;
console.log(c);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
daysOfWeek.push("sun");
*/
////

// object 생성 방법 //
/*
const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
// 요소 추가도 가능
player.lastName = "potato";
////

// function 생성 방법 //
function sayHello(nameOfPerson) {
  console.log("Hello!" + nameOfPerson);
}
*/

// object 안에 function , 선언 위치가 바뀜 //
/*
const player_insidefunction = {
  name: "nico",
  points: 10,
  fat: true,
  sayHello_insidefunction: function (nameOfPerson) {
    console.log("Hello!" + nameOfPerson);
  },
};
*/
////

// return 값이 있는 함수 //
/*
function calculateAge(age) {
  return age + 2;
}
*/

// Conditional Part //
/*
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please Write a real positive Number");
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}
*/
////

// JS - HTML 상호작용 //

// id가 title인 요소 가져옴, 여러개인 경우 리스트로 받아옴
/* 
const title = document.getElementById("title");
title.innerText = "Got You!";
console.log(title.id);
console.log(title.className); 
*/

// class가 hello인 요소 가져옴, 여러개인 경우 리스트로 받아옴
/*
const hellos = document.getElementsByClassName("hello");
*/

// tag가 h1인 요소 가져옴, 여러개인 경우 리스트로 받아옴
/*
const h1tag = document.getElementsByTagName("h1");
*/

// query이용해 요소 찾기
// 단, 같은 게 있으면 첫번째만 가져옴, 모두 가져오고 싶으면,
// querySelectorAll 사용
/*
const title_searchbyclass_and_tag = document.querySelector(".hello h1");
const title_searchbyId = document.querySelector("#hello");
*/

////

// Event 관리 //

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOOD");
}
// 클릭하면 handleTitleClick 함수 실행!
h1.addEventListener("click", handleTitleClick);

// 또 다른 방법
h1.onclick = handleTitleClick;

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
