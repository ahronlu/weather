import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Grid, Segment, Image, GridRow } from "semantic-ui-react";
import { toast } from "react-toastify";
import AddToFavorites from "../components/AddToFavorites";
import Searchbar from "../components/Searchbar";
import Forecast from "../components/Forecast";

const Home = () => {
  const cityForecast = useSelector((state) => state.cityForecast);
  const { darkMode, isCel } = useSelector((state) => state.theme);
  const { name, loading, currentCondition, error } = cityForecast;

  useEffect(() => {
    toast(error);
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
                    {isCel
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
              <h2>{currentCondition[0].WeatherText}</h2>
              <Image
                size="medium"
                src={`icons/${currentCondition[0].WeatherIcon}-s.png`}
              />
            </GridRow>
            <Forecast />
          </>
        )}
      </Segment>
    </Container>
  );
};

export default Home;
