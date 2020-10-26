import React from "react";
import { useSelector } from "react-redux";
import { Container, Grid, Segment } from "semantic-ui-react";
import { ToastContainer } from "react-toastify";
import AddToFavorites from "../components/AddToFavorites";
import Searchbar from "../components/Searchbar";
import Forecast from "../components/Forecast";

const Home = () => {
  const cityForecast = useSelector((state) => state.cityForecast);
  const { darkMode } = useSelector((state) => state.theme);
  const { days, name, loading } = cityForecast;

  return (
    <Container textAlign="center">
      <Searchbar />
      <Segment loading={loading} className={darkMode && "inverted"}>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column textAlign="left">
              <h3>{name}</h3>
              <h3>
                {days &&
                  days.length &&
                  Math.floor(days[0].Temperature.Maximum.Value)}
                °c
              </h3>
            </Grid.Column>
            <Grid.Column textAlign="right">
              <AddToFavorites />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {days && days.length && <h2>{days[0].Day.IconPhrase}</h2>}
        <Forecast days={days} />
      </Segment>
      <ToastContainer />
    </Container>
  );
};

export default Home;
