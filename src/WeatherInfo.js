import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div>
        <h1>{props.data.city}</h1>
        <p>
          <span className="currentDate">
            <FormattedDate date={props.data.date} />
          </span>
          <span className="currentDescription text-capitalize">
            {props.data.description}
          </span>
          <br />
          Humidity: <span className="humidity">{props.data.humidity}%</span>,
          Wind: <span className="wind">{props.data.wind}km/h</span>
        </p>
      </div>
      <div className="temperature">
        <span className="currentEmoji">
          <img src={props.data.emoji} alt={props.data.alternate} />
        </span>
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
    </div>
  );
}
