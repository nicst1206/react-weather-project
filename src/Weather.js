import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.city);

  function displayData(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      emoji: response.data.condition.icon_url,
      alternate: response.data.condition.icon,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "obbt00a19b0447e3fbfabf89040f3c88";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayData);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                required
                className="searchInput"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="searchButton" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <h6>Forecast for 5 Days (in °C only)</h6>
        <WeatherForecast data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
