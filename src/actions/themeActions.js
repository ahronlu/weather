import { TOGGLE_DARK_MODE } from "../constants/themeConstants";
import { TOGGLE_TEMP_VALUE } from "../constants/themeConstants";

export const toggleDarkMode = () => (dispatch) => {
  dispatch({ type: TOGGLE_DARK_MODE });
};

export const toggleTempValue = () => (dispatch) => {
  dispatch({ type: TOGGLE_TEMP_VALUE });
};
