import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function fahrenheit() {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return fahrenheit;
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="currentTemperature"> {Math.round(props.celsius)}</span>
        <span className="celsiusDisplay">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="currentTemperature"> {Math.round(fahrenheit())}</span>
        <span className="celsiusDisplay">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
