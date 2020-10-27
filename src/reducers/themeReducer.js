import {
  TOGGLE_DARK_MODE,
  TOGGLE_TEMP_VALUE,
} from "../constants/themeConstants";

export const themeReducer = (
  state = { darkMode: false, isFar: false },
  action
) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case TOGGLE_TEMP_VALUE:
      return {
        ...state,
        isFar: !state.isFar,
      };
    default:
      return state;
  }
};
