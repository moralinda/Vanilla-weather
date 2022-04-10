function formatDate(timestamp) {
  let currentDate = new Date(timestamp);
  let currentHours = currentDate.getHours();
  if (currentHours < 10) {
    let currentHours = `0${currentHours}`;
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
  let currentTemperature = Math.round(response.data.main.temp);
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

let apiKey = "46282d6c2bfaf109c807f0208a634585";
let city = "paris";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
