const a = 5;
const b = 2;
let c = 3

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(c);

c = 30;
console.log(c);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
daysOfWeek.push("sun");

// object 생성 방법
const player = {
    name : "nico",
    points: 10,
    fat : true,
};
console.log(player);
console.log(player.name);
// 요소 추가도 가능
player.lastName = "potato";

// function 생성 방법
function sayHello(nameOfPerson) {
    console.log("Hello!" + nameOfPerson);
};

// object 안에 function , 선언 위치가 바뀜
const player_insidefunction = {
    name : "nico",
    points: 10,
    fat : true,
    sayHello_insidefunction: function(nameOfPerson) {
        console.log("Hello!" + nameOfPerson);
    }
};

// return 값이 있는 함수
function calculateAge(age) {
    return age + 2;
}

// 
const age = parseInt(prompt("How old are you?"));
console.log(age);