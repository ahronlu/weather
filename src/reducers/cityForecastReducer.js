import {
  CITY_FORECAST_REQUEST,
  CITY_FORECAST_SUCCESS,
  CITY_FORECAST_FAIL,
} from "../constants/cityForecastConstants";

export const cityForecastReducer = (
  state = { loading: true, days: [], name: "", key: "" },
  action
) => {
  switch (action.type) {
    case CITY_FORECAST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CITY_FORECAST_SUCCESS:
      return {
        loading: false,
        days: action.payload.days,
        key: action.payload.key,
        name: action.payload.name,
      };
    case CITY_FORECAST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
