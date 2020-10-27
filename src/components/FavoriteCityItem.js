import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Image } from "semantic-ui-react";
import { toast } from "react-toastify";
import { getCurrentCondition } from "../services/services";

const FavoriteCityItem = ({ cityKey, cityName, loadCity }) => {
  const { darkMode, isCel } = useSelector((state) => state.theme);
  const [city, setCity] = useState([]);

  useEffect(() => {
    const getCityDetails = async () => {
      try {
        const data = await getCurrentCondition(cityKey);
        setCity(data);
      } catch (error) {
        toast(error.message);
      }
    };
    getCityDetails();
  }, [cityKey]);

  return (
    <Card md={12} onClick={() => loadCity(cityKey, cityName)}>
      {city.length && (
        <Card.Content textAlign="center" className={darkMode ? "inverse" : ""}>
          <Card.Header className={darkMode ? "inverse" : ""}>
            {cityName}
          </Card.Header>
          <Image src={`icons/${city[0].WeatherIcon}-s.png`} wrapped />
          <Card.Description className={darkMode ? "inverse" : ""}>
            <h3>{city[0].WeatherText}</h3>
            {isCel
              ? city[0].Temperature.Metric.Value.toFixed(0)
              : city[0].Temperature.Imperial.Value.toFixed(0)}
            °
          </Card.Description>
        </Card.Content>
      )}
    </Card>
  );
};

export default FavoriteCityItem;
