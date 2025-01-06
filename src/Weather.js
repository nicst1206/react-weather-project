import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function displayData(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      emoji: response.data.condition.icon_url,
      alternate: response.data.condition.icon,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    let apiKey = "obbt00a19b0447e3fbfabf89040f3c88";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayData);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div>
          <h1>{props.city}</h1>
          <p>
            <span className="currentDate">Saturday 15:32</span>, moderate rain
            <br />
            Humidity: <span className="humidity">{weatherData.humidity}</span>,
            Wind: <span className="wind">{weatherData.wind}km/h</span>
          </p>
        </div>
        <div className="temperature">
          <span className="currentEmoji">
            <img href={weatherData.emoji} />
          </span>
          <span className="currentTemperature">
            {" "}
            {Math.round(weatherData.temperature)}
          </span>
          <span className="celsiusDisplay">°C</span>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
