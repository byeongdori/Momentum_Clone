// openweathermap.org API 활용
// https://openweathermap.org/
const API_KEY = "1afb65b027e5061da2c2d6443125a2b8";

// position -> 사용자의 위치정보가 담겨있는 매개변수
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const APIurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(APIurl)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.getElementById("weather-first");
      const city = document.getElementById("weather-second");
      city.innerText = " " + data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you");
}

// 사용자의 위치를 받아오는 함수
// 첫번째 매개변수 -> 성공시 실행되는 함수
// 두번째 매개변수 -> 실패시 실행되는 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
