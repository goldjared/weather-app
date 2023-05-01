import "./style.css";
import injectDisplay from "./display";

/*
on page load, get weather info of user IP address.

display it.

search input for city, enter will get that city, and display it.

if no city found, error.
*/
function processData(data) {
  const currentData = {
    location: data.location.name,
    region: data.location.region,
    localTime: data.location.localtime,
    currentIcon: data.current.condition.icon, 
    currentCondition: data.current.condition.text,
    temp: data.current.temp_f,
    feelsLike: data.current.feelslike_f,
    humidity: data.current.humidity,
    updated: data.current.last_updated,
  }
  return currentData;
  // console.log(data);
}

async function getWeather(city) {
  try {
    const response= await fetch(
      `https://api.weatherapi.com/v1/current.json?key=a3f0ed6f12f14ffcaf5221928232504&q=${city}&aqi=no`
    );
    if(!response.ok) {
      throw new Error(response.statusText);
    }
    const weatherData = await response.json();
    injectDisplay(processData(weatherData));
  } catch (e) {
    console.log(e);
  }
}

(function cityRequester() {
  const input = document.getElementById("search");
  const submit = document.getElementById("submit");

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(input.value);
    getWeather(input.value);
  });
})();
