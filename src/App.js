import "./App.css";
import Weather from "./Weather.js";
import Form from "./Form.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather App</h1>
        </header>
        <Form />
        <Weather city="Frankfurt" />
        <footer>
          This webiste was coded by Nicole Stoewer-Rust and is{" "}
          <a
            href="https://github.com/nicst1206/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
