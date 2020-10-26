import { TOGGLE_DARK_MODE } from "../constants/themeConstants";

export const toggleDarkMode = () => (dispatch) => {
  dispatch({ type: TOGGLE_DARK_MODE });
};
