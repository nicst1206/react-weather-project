import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayData(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  function searchForecast() {
    let longitude = props.data.coordinates.longitude;
    let latitude = props.data.coordinates.latitude;
    let apiKey = "obbt00a19b0447e3fbfabf89040f3c88";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    axios.get(apiUrl).then(displayData);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.data.coordinates]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay forecast={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    searchForecast();
    return null;
  }
}
