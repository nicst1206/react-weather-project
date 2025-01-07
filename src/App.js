import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>

        <Weather city="Frankfurt" />
        <footer>
          This webiste was coded by Nicole Stoewer-Rust and is{" "}
          <a
            href="https://github.com/nicst1206/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://nicolesreactweatherproject.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
