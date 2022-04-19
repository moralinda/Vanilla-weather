function formatDate(timestamp) {
  let currentDate = new Date(timestamp);
  let currentHours = currentDate.getHours();
  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }
  let currentMinutes = currentDate.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes} `;
  }
  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let currentDay = days[currentDate.getDay()];
  return `${currentDay} ${currentHours}:${currentMinutes}`;
}

function showTemperature(response) {
  celsiusTemperature = response.data.main.temp;
  let currentTemperature = Math.round(celsiusTemperature);
  document.querySelector("#temperature").innerHTML = `${currentTemperature}`;
  let currentCity = response.data.name;
  document.querySelector("#city").innerHTML = `${currentCity}`;
  let currentDescription = response.data.weather[0].description;
  document.querySelector("#description").innerHTML = `${currentDescription}`;
  let currentHumidity = response.data.main.humidity;
  document.querySelector("#humidity").innerHTML = `${currentHumidity}`;
  let currentWind = Math.round(response.data.wind.speed);
  document.querySelector("#wind").innerHTML = `${currentWind}`;
  document.querySelector("#date").innerHTML = formatDate(
    response.data.dt * 1000
  );
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  document
    .querySelector("#icon")
    .setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
  let apiKey = "46282d6c2bfaf109c807f0208a634585";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-text-input");
  search(cityInput.value);
}

function showFahrenheitTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  document.querySelector("#temperature").innerHTML = Math.round(
    fahrenheitTemperature
  );
}

function showCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  document.querySelector("#temperature").innerHTML =
    Math.round(celsiusTemperature);
}
let celsiusTemperature = null;
let form = document.querySelector("#weather-search");
form.addEventListener("submit", handleSubmit);
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemperature);
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusTemperature);
search("paris");
