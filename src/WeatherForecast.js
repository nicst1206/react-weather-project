import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-Weekday">Thu</div>
          <img src={props.data.emoji} alt={props.data.alternate} />
          <div>
            <span className="WeatherForecast-Temp-max">12°C</span>
            <span className="WeatherForecast-Temp-min">4°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
