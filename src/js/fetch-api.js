import axios from "axios";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/";

export const fetchWeatherForecast = async (location) => {
  const axiosOptions = {
    params: {
      appid: "2cc33983d162c4c93e572988a8a1f386",
      q: location,
      units: "metric",
    },
  };
  return await axios.get(`forecast`, axiosOptions);
};

export const fetchWeather = async (location) => {
  const axiosOptions = {
    params: {
      appid: "2cc33983d162c4c93e572988a8a1f386",
      q: location,
      units: "metric",
    },
  };
  return await axios.get(`weather`, axiosOptions);
};
