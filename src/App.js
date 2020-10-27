import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import URLS from "./routes";
import { getCityForecast } from "./actions/cityForecastActions";
import { getCurrentLocation } from "./services/services";

const App = () => {
  const dispatch = useDispatch();

  const { darkMode } = useSelector((state) => state.theme);

  useEffect(() => {
    const getUserForecast = async () => {
      const data = await getCurrentLocation();
      if (data) {
        dispatch(getCityForecast(data.Key, data.LocalizedName));
      } else {
        dispatch(getCityForecast(215854, "Tel Aviv"));
      }
    };
    getUserForecast();
  }, [dispatch]);

  return (
    <Router>
      <div className={darkMode ? "app-inverse" : ""}>
        <Header />
        <Switch>
          <Route path={URLS.favorites} component={Favorites} />
          <Route exact path={URLS.home} component={Home} />
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
