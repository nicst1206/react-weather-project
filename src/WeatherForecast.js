import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function displayData(response) {
    console.log(response);
  }
  let longitude = props.data.coordinates.longitude;
  let latitude = props.data.coordinates.latitude;
  let apiKey = "obbt00a19b0447e3fbfabf89040f3c88";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
  axios.get(apiUrl).then(displayData);

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
