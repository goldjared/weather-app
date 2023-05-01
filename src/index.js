import "./style.css";

console.log("jaredgfff");
console.log("spyder");
/*
on page load, get weather info of user IP address.

display it.

search input for city, enter will get that city, and display it.

if no city found, error.
*/

async function getWeather(city) {
  try {
    const weather = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=a3f0ed6f12f14ffcaf5221928232504&q=${city}&aqi=no`
    );
    if(!weather.ok) {
      throw new Error(weather.statusText);
    }
    const weatherData = await weather.json();
    console.log(weatherData);
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
