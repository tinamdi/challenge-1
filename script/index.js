//challenge1
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let selecttime = document.querySelector("#nowtime");
let showdate = now.getDate();
let showday = days[now.getDay()];
let showmonth = months[now.getMonth()];
let showhour = now.getHours();
let showminutes = now.getMinutes();

nowtime.innerHTML = `${showday} ${showmonth} ${showdate} ${showhour}:${showminutes}`;
//challenge 2
function showCelsius(response) {
  let city = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  let temperatureform = document.querySelector("#temperature");
  let humidity = response.data.main.humidity;
  let humidityform = document.querySelector("#humidity");
  let wind = Math.round(response.data.wind.speed);
  let windform = document.querySelector("#wind");
  let description = response.data.weather[0].main;
  let descriptionform = document.querySelector("#description");
  city.innerHTML = response.data.name;
  temperatureform.innerHTML = `${temperature}`;
  humidityform.innerHTML = `${humidity}`;
  windform.innerHTML = `${wind}`;
  descriptionform.innerHTML = `${description}`;
}

function searchcity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput.value;
  let units = "metric";
  let apiKey = "2444dd31edc83cebc47fbad7aed5552d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCelsius);
}
let form = document.querySelector("#searchedcity");
form.addEventListener("submit", searchcity);
//challenge 3
function searchLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "2444dd31edc83cebc47fbad7aed5552d";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCelsius);
}
function hereTemp(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", hereTemp);
