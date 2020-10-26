import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../constants/favoritesConstants";

export const addToFavorites = (city) => async (dispatch, getState) => {
  dispatch({
    type: ADD_TO_FAVORITES,
    payload: city,
  });

  localStorage.setItem("favorites", JSON.stringify(getState().favorites));
};

export const removeFromFavorites = (city) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_FAVORITES,
    payload: city.key,
  });

  localStorage.setItem("favorites", JSON.stringify(getState().favorites));
};
