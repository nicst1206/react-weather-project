import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayData(response) {
    setLoaded(true);
    setForecast(response.data);
  }

  function searchForecast() {
    let longitude = props.data.coordinates.longitude;
    let latitude = props.data.coordinates.latitude;
    let apiKey = "obbt00a19b0447e3fbfabf89040f3c88";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    axios.get(apiUrl).then(displayData);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay forecast={forecast} />
          </div>
        </div>
      </div>
    );
  } else {
    searchForecast();
    return null;
  }
}
