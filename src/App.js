import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          Coded by Natalia Grzesikowska and is {""}
          <a
            href="https://github.com/nagrzesikowska/project-react"
            target="_blank"
            rel="noopener noreferrer"
            className="source"
          >
            {" "}
            open-sourced on Github
          </a>{" "}
          and
          <a
            href="https://master--tubular-klepon-521705.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="source"
          >
            {" "}
            hosted on Netify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
