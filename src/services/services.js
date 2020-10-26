const axios = require("axios").default;
const apikey = process.env.REACT_APP_API_KEY;
const baseUrl = "https://dataservice.accuweather.com/";

export async function getLocations(locationString) {
  try {
    const { data } = await axios(
      `${baseUrl}locations/v1/cities/autocomplete?apikey=${apikey}&q=${locationString}`
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
    console.log(location);
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
      (error) => resolve(error)
    );
  });
