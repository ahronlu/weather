import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Card, Image, Segment } from "semantic-ui-react";
import { getCityForecast } from "../actions/cityForecastActions";

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
            <Card
              onClick={() => loadCity(city)}
              md={12}
              key={i}
              textAlign="center"
            >
              <Card.Content
                textAlign="center"
                className={darkMode && "inverted"}
              >
                <Card.Header className={darkMode && "inverted"}>
                  {city.name}
                </Card.Header>
                <Image src={`icons/${city.days[0].Day.Icon}-s.png`} wrapped />
                <Card.Description className={darkMode && "inverted"}>
                  <h3>{city.days[0].Day.IconPhrase}</h3>
                  {city.days[0].Temperature.Minimum.Value}° -
                  {city.days[0].Temperature.Maximum.Value}°
                </Card.Description>
              </Card.Content>
            </Card>
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
