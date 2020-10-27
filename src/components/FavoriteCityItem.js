import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Icon, Image } from "semantic-ui-react";
import { toast } from "react-toastify";
import { getCurrentCondition } from "../services/services";
import { removeFromFavorites } from "../actions/favoritesActions";

const FavoriteCityItem = ({ favCity, loadCity }) => {
  const dispatch = useDispatch();
  const { darkMode, isCel } = useSelector((state) => state.theme);
  const [city, setCity] = useState([]);

  useEffect(() => {
    const getCityDetails = async () => {
      try {
        const data = await getCurrentCondition(favCity.key);
        setCity(data);
      } catch (error) {
        toast("City Current Conditions Error: " + error.message);
      }
    };
    getCityDetails();
  }, [favCity]);

  const removeFavorite = (e) => {
    e.stopPropagation();
    dispatch(removeFromFavorites(favCity));
  };

  return (
    <Card
      md={12}
      onClick={() => loadCity(favCity)}
      className={darkMode ? "inverse" : ""}
    >
      {city.length && (
        <Card.Content textAlign="center" className={darkMode ? "inverse" : ""}>
          <Card.Header className={darkMode ? "inverse" : ""}>
            {favCity.name}{" "}
            <Icon color="red" name="trash" onClick={removeFavorite} />
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
