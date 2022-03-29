function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  document.querySelector("#temperature").innerHTML = `${temperature}`;
}

let apiKey = "46282d6c2bfaf109c807f0208a634585";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);
