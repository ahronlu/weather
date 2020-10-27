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
  const { darkMode, isCel } = useSelector((state) => state.theme);

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
              <Image src={`icons/${day.Day.Icon}-s.png`} />
              <Image src={`icons/${day.Night.Icon}-s.png`} />
              <span>
                {isCel
                  ? day.Temperature.Maximum.Value.toFixed(0)
                  : (day.Temperature.Maximum.Value * 1.8 + 32).toFixed(0)}
                °
              </span>
              <span>
                {isCel
                  ? day.Temperature.Minimum.Value.toFixed(0)
                  : (day.Temperature.Minimum.Value * 1.8 + 32).toFixed(0)}
                °
              </span>
            </Card.Content>
          </Card>
        ))}
    </Card.Group>
  );
};

export default Forecast;
