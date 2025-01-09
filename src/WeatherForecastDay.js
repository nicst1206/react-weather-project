import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.forecast.time * 1000);
    let day = date.getDay();
    return days[day];
  }

  function temperatureMax() {
    let temperature = Math.round(props.forecast.temperature.maximum);
    return `${temperature}°C`;
  }

  function temperatureMin() {
    let temperature = Math.round(props.forecast.temperature.minimum);
    return `${temperature}°C`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-Weekday">{day()}</div>
      <img
        src={props.forecast.condition.icon_url}
        alt={props.forecast.condition.description}
      />
      <div>
        <span className="WeatherForecast-Temp-max">{temperatureMax()}</span>
        <span className="WeatherForecast-Temp-min">{temperatureMin()}</span>
      </div>
    </div>
  );
}
