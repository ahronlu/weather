import React from "react";
import { useSelector } from "react-redux";
import { Card, Image } from "semantic-ui-react";

const weekDayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Forecast = () => {
  const weekDayNumber = (date) => {
    const weekDay = new Date(date).getDay();
    return weekDayList[weekDay];
  };

  const { days } = useSelector((state) => state.cityForecast);
  const { darkMode, isFar } = useSelector((state) => state.theme);

  return (
    <Card.Group stackable itemsPerRow={5}>
      {days &&
        days.map((day, i) => (
          <Card md={12} key={i} className={darkMode ? "inverse" : ""}>
            <Card.Content
              textAlign="center"
              className={darkMode ? "inverse" : ""}
            >
              <h3>{weekDayNumber(day.Date)}</h3>
              <h3>{day.Day.IconPhrase}</h3>
              <Image size="tiny" src={`icons/${day.Day.Icon}.svg`} />
              <Image size="tiny" src={`icons/${day.Night.Icon}.svg`} />
              <span>
                {!isFar
                  ? day.Temperature.Maximum.Value.toFixed(0) + "°C"
                  : (day.Temperature.Maximum.Value * 1.8 + 32).toFixed(0) +
                    "°F"}
              </span>
              <span>
                {!isFar
                  ? day.Temperature.Minimum.Value.toFixed(0) + "°C"
                  : (day.Temperature.Minimum.Value * 1.8 + 32).toFixed(0) +
                    "°F"}
              </span>
            </Card.Content>
          </Card>
        ))}
    </Card.Group>
  );
};

export default Forecast;
