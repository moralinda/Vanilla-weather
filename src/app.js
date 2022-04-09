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
}

let apiKey = "46282d6c2bfaf109c807f0208a634585";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);
