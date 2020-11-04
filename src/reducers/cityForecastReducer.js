import {
  CITY_FORECAST_REQUEST,
  CITY_FORECAST_SUCCESS,
  CITY_FORECAST_FAIL,
} from "../constants/cityForecastConstants";

export const cityForecastReducer = (
  state = { loading: false, days: [], name: "", key: "", currentCondition: [] },
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
        currentCondition: action.payload.currentCondition,
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
