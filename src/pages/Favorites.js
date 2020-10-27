import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Card, Segment } from "semantic-ui-react";
import { getCityForecast } from "../actions/cityForecastActions";
import FavoriteCityItem from "../components/FavoriteCityItem";

const Favorites = ({ history }) => {
  const dispatch = useDispatch();

  const { favorites } = useSelector((state) => state.favorites);
  const { darkMode } = useSelector((state) => state.theme);

  const loadCity = (city) => {
    dispatch(getCityForecast(city.key, city.name));
    history.push("/");
  };

  return (
    <Container textAlign="center">
      {favorites.length ? (
        <Card.Group stackable itemsPerRow={5}>
          {favorites.map((city, i) => (
            <FavoriteCityItem
              loadCity={loadCity}
              cityKey={city.key}
              name={city.name}
              key={i}
            />
          ))}
        </Card.Group>
      ) : (
        <Segment inverted={darkMode}>
          <h1>You have no favorite cities, go back home to add some.</h1>
        </Segment>
      )}
    </Container>
  );
};

export default Favorites;
