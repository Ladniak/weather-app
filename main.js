const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const locationHeader = document.querySelector(".weather-info-location");
const locationTemp = document.querySelector(".temperature");
const locationDescription = document.querySelector(".description");
const infoDiv = document.querySelector(".weather-info");
const dataInfo = document.querySelector(".header-data");

import { fetchWeather } from "./src/js/fetch-api";

const today = new Date();

const onBtnClick = async () => {
  try {
    const inputValue = searchInput.value;
    const response = await fetchWeather(inputValue);
    infoDiv.classList.remove("is-hidden");
    locationHeader.innerHTML = response.data.name;

    locationTemp.innerHTML = `${Math.round(response.data.main.temp)}°C`;
    locationDescription.innerHTML = response.data.weather[0].description;
  } catch (error) {
    console.log(error);
  }
};

searchBtn.addEventListener("click", onBtnClick);
