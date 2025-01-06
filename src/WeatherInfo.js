import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div>
        <h1>{props.data.city}</h1>
        <p>
          <span className="currentDate">
            <FormattedDate date={props.data.date} />
          </span>
          , moderate rain
          <br />
          Humidity: <span className="humidity">{props.data.humidity}</span>,
          Wind: <span className="wind">{props.data.wind}km/h</span>
        </p>
      </div>
      <div className="temperature">
        <span className="currentEmoji">
          <img href={props.data.emoji} alt={props.data.alternate} />
        </span>
        <span className="currentTemperature">
          {" "}
          {Math.round(props.data.temperature)}
        </span>
        <span className="celsiusDisplay">°C</span>
      </div>
    </div>
  );
}
