import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          Coded by Natalia Grzesikowska and {""}
          <a
            href="https://github.com/nagrzesikowska/project-react"
            target="_blank"
            rel="noopener noreferrer"
            className="source"
          >
            {" "}
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
