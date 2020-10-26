import { TOGGLE_DARK_MODE } from "../constants/themeConstants";

export const themeReducer = (state = { darkMode: false }, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};
