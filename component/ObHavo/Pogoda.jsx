import React, { useState } from "react";
import { apiWeather } from "../../api/apiWeather";

function Pogoda(props) {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await apiWeather(query);
      setWeather(data);
      setQuery('');
    }
  };

  return (
    <div className="main-container">
      <div className="search">
        <input
          type="text"
          className="search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
      </div>
      {weather.main && (
          <div className="city">
              <div className="info">
                  <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather-icon" />
              </div>
              <div className="detailes">
                  <h2 className="city-name">
                      <span>{weather.name}</span>
                      <sup>{weather.sys.country}</sup>
                  </h2>
                  <div className="city-temp">
                      {Math.round(weather.main.temp)}
                      <sup>&deg;C</sup>
                      <p>{weather.weather[0].description}</p>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
}

export default Pogoda;
