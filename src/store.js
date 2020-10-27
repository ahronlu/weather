import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { favoritesReducer } from "./reducers/favoritesReducer";
import { cityForecastReducer } from "./reducers/cityForecastReducer";
import { themeReducer } from "./reducers/themeReducer";

const reducer = combineReducers({
  favorites: favoritesReducer,
  cityForecast: cityForecastReducer,
  theme: themeReducer,
});

const favoritesFromStorage = localStorage.getItem("favorites")
  ? JSON.parse(localStorage.getItem("favorites"))
  : [];

const themeFromStorage = localStorage.getItem("theme")
  ? JSON.parse(localStorage.getItem("theme"))
  : [];

const initialState = {
  favorites: favoritesFromStorage,
  theme: themeFromStorage,
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
