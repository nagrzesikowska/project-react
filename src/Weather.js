import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter the city"
          className="form"
          autoFocus="on"
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <h1>Lisbon</h1>
      <ul>
        <li>Friday 8:00</li>
        <li>Sunny</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Sunny"
          />
          <span className="temperature">19</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:30%</li>
            <li>Wind:20km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
