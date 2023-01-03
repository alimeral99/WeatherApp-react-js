import React from "react";
import "./Wether.css";
function Weather({ weatherData }) {
  const { name } = weatherData;
  const { icon, description } = weatherData.weather[0];
  const { temp, humidity } = weatherData.main;
  const { country } = weatherData.sys;

  const cityName = name.replace(/Province/i, "");
  return (
    <div className="weather">
      <div className="weather__content">
        <h1>
          {cityName} <small>{country}</small>
        </h1>

        <img
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt="wetaher__icon"
        />
        <p>{description}</p>
      </div>
      <div className="weather__info">
        <p>
          Temprature: <span>{Math.floor(temp - 273)} &deg;C</span>
        </p>
        <p>
          Humidity: <span>{humidity} %</span>
        </p>
      </div>
    </div>
  );
}

export default Weather;
