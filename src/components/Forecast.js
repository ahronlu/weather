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
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <Card.Group stackable itemsPerRow={5}>
      {days &&
        days.map((day, i) => (
          <Card md={12} key={i} className={darkMode && "inverted"}>
            <Card.Content textAlign="center" className={darkMode && "inverted"}>
              <Card.Header className={darkMode && "inverted"}>
                {weekDayNumber(day.Date)}
              </Card.Header>
              <Image src={`icons/${day.Day.Icon}-s.png`} wrapped />
              <Card.Description className={darkMode && "inverted"}>
                <h3>{day.Day.IconPhrase}</h3>
                {Math.floor(day.Temperature.Minimum.Value)}°c -
                {Math.floor(day.Temperature.Maximum.Value)}°c
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
    </Card.Group>
  );
};

export default Forecast;
