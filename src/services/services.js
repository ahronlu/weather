import axios from "axios";
import { toast } from "react-toastify";

const apikey = "fy9gpQ6A2q6F6pAUXLOs6HY6kQaFO6Jn";
const baseUrl = "https://dataservice.accuweather.com/";

export async function autocomplete(locationKey) {
  try {
    const { data } = await axios(
      `${baseUrl}locations/v1/cities/autocomplete?apikey=${apikey}&q=${locationKey}`
    );
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getCurrentCondition(locationKey) {
  try {
    const { data } = await axios(
      `${baseUrl}currentconditions/v1/${locationKey}?apikey=${apikey}&details=true`
    );
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getFiveDayWeather(locationKey) {
  try {
    const { data } = await axios(
      `${baseUrl}forecasts/v1/daily/5day/${locationKey}?apikey=${apikey}&metric=${true}`
    );
    return data.DailyForecasts;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getCurrentLocation() {
  try {
    const location = await getUserLocation();
    const { coords } = location;
    if (!coords) return;
    const { data } = await axios(
      `${baseUrl}locations/v1/cities/geoposition/search?apikey=${apikey}&q=${coords.latitude},${coords.longitude}`
    );

    return data;
  } catch (err) {
    throw new Error(err);
  }
}

const getUserLocation = () =>
  new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (location) => resolve(location),
      (error) => {
        resolve(error);
        toast.error("Geolocation Error: " + error.message);
      }
    );
  });
