import { TOGGLE_DARK_MODE } from "../constants/themeConstants";
import { TOGGLE_TEMP_VALUE } from "../constants/themeConstants";

export const toggleDarkMode = () => (dispatch, getState) => {
  dispatch({ type: TOGGLE_DARK_MODE });
  localStorage.setItem("theme", JSON.stringify(getState().theme));
};

export const toggleTempValue = () => (dispatch, getState) => {
  dispatch({ type: TOGGLE_TEMP_VALUE });
  localStorage.setItem("theme", JSON.stringify(getState().theme));
};
