// src/index.js

import "./styles.css";


const weatherForm = document.querySelector("#weather-form");
const locationInput = document.querySelector("#location-input");
// const weatherResult = document.querySelector("#weather-result");


async function getWeather(location) {
  const apiKey = "TRSB28M3K6CGPVNY9Z42XGCTP";

  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`
  );

  const weatherData = await response.json();

  console.log(weatherData);

}

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const location = locationInput.value;

  getWeather(location);
});


// async function getWeather(location) {
//   const apiKey = "YOUR_API_KEY_HERE";

//   const response = await fetch(
//     `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`
//   );

//   const weatherData = await response.json();

//   console.log(weatherData);
// }

// weatherForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const location = locationInput.value;

//   getWeather(location);
// });