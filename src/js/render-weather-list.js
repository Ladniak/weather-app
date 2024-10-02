export const renderWeatherList = (weatherDetails, cityName) => {
  const temp = `${Math.round(weatherDetails.main.temp)}°C`;

  return `
    <li class="weather-list-item">
        <h2 class="weather-info-location">${cityName}</h2>
        <p>Day of week</p>
        <p class="list-temperature">${temp}</p>
    </li>
  `;
};
