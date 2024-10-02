const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const locationHeader = document.querySelector(".weather-info-location");
const locationTemp = document.querySelector(".temperature");
const infoDiv = document.querySelector(".weather-info");
const weatherDayList = document.querySelector(".few-day-list");
const dayOfWeek = document.querySelector(".day-of-week");
const powerOfWind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");
const dailyRain = document.querySelector(".rain");

import { fetchWeather, fetchWeatherForecast } from "./src/js/fetch-api";
import { renderWeatherList } from "./src/js/render-weather-list";

// const time = new Date();
// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

//Add day of week
const valentines = new Date();
const dayOptions = { weekday: "long" };
const days = new Intl.DateTimeFormat("en-US", dayOptions).format(valentines);

const onBtnClick = async () => {
  try {
    const inputValue = searchInput.value;
    const response = await fetchWeather(inputValue);
    const responseFiveDays = await fetchWeatherForecast(inputValue);

    infoDiv.classList.remove("is-hidden");
    weatherDayList.innerHTML = "";

    const cityName = responseFiveDays.data.city.name;

    responseFiveDays.data.list.forEach((weatherDetails) => {
      const weatherHTML = renderWeatherList(weatherDetails, cityName);
      weatherDayList.innerHTML += weatherHTML;
    });

    //console.log(responseFiveDays.data);

    // Add icons to img element
    switch (response.data.weather[0].main) {
      case "Clear":
        weatherIcon.setAttribute("src", `./src/img/sun.png`);
        break;
      case "Clouds":
        weatherIcon.setAttribute("src", `./src/img/cloudy.png`);
        break;
      case "Rain":
        weatherIcon.setAttribute("src", `./src/img/raining.png`);
        break;
      case "Thunderstorm":
        weatherIcon.setAttribute("src", `./src/img/storm.png`);
        break;
      case "Drizzle":
        weatherIcon.setAttribute("src", `./src/img/weather.png`);
        break;
      case "Snow":
        weatherIcon.setAttribute("src", `./src/img/snow.png`);
        break;
      default:
        weatherIcon.setAttribute("src", `./src/img/sun.png`);
        break;
    }

    // Add to hmtl file
    locationHeader.innerHTML = response.data.name;
    dayOfWeek.innerHTML = days;
    dailyRain.innerHTML = `${response.data.main.humidity}%`;
    locationTemp.innerHTML = `${Math.round(response.data.main.temp)}°C`;
    powerOfWind.innerHTML = `${response.data.wind.speed}Km/h`;
  } catch (error) {
    console.log(error);
  }
};

searchBtn.addEventListener("click", onBtnClick);
