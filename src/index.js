import './style.css';

console.log("jaredgfff");
console.log("spyder");
/*
on page load, get weather info of user IP address.

display it.

search input for city, enter will get that city, and display it.

if no city found, error.
*/

async function getWeather(city) {
  const weather = await fetch(`https://api.weatherapi.com/v1/current.json?key=a3f0ed6f12f14ffcaf5221928232504&q=${city}&aqi=no`);
  const weatherData = await weather.json();
  return console.log(weatherData);
}

getWeather('miami');
