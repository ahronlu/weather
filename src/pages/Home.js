import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Grid, Segment, Image, GridRow } from "semantic-ui-react";
import { toast } from "react-toastify";
import AddToFavorites from "../components/AddToFavorites";
import Searchbar from "../components/Searchbar";
import Forecast from "../components/Forecast";

const Home = () => {
  const { name, loading, currentCondition, error } = useSelector(
    (state) => state.cityForecast
  );
  const { darkMode, isFar } = useSelector((state) => state.theme);

  useEffect(() => {
    error && toast.error("City Forecast Error: " + error);
  }, [error]);

  return (
    <Container textAlign="center">
      <Searchbar />
      <Segment loading={loading} className={darkMode ? "inverse" : ""}>
        {currentCondition && currentCondition.length && (
          <>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column textAlign="left">
                  <h3>{name}</h3>
                  <h3>
                    {!isFar
                      ? currentCondition[0].Temperature.Metric.Value.toFixed(0)
                      : currentCondition[0].Temperature.Imperial.Value.toFixed(
                          0
                        )}
                    °
                  </h3>
                </Grid.Column>
                <Grid.Column textAlign="right">
                  <AddToFavorites />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <GridRow textAlign="center">
              <Image
                size="small"
                src={`icons/${currentCondition[0].WeatherIcon}.svg`}
              />
              <h2>{currentCondition[0].WeatherText}</h2>
              <h3>
                Wind:{" "}
                {!isFar
                  ? currentCondition[0].Wind.Speed.Metric.Value +
                    currentCondition[0].Wind.Speed.Metric.Unit
                  : currentCondition[0].Wind.Speed.Imperial.Value +
                    currentCondition[0].Wind.Speed.Imperial.Unit}
              </h3>
            </GridRow>
            <Forecast />
          </>
        )}
      </Segment>
    </Container>
  );
};

export default Home;
