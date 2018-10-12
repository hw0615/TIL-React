import axios from 'axios'

const API_KEY = 'b99ccb6a4b6d6eaac8bc5716851b28d4';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url)

  // console.log('request :', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}