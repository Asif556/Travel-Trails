import React, { useState } from 'react';
import './Weather.css';
import CloudImage from '/Cloud.jpg'; 
import Navbar from '../Navbar/Navbar';

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState(0);
  const apikey = '596a0633377da5f2b8d401dd150d9ab1';
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${props.state}&appid=${apikey}&units=metric`;

  const getWeather = async () => {
      const response = await fetch(api);
      const data = await response.json();
      setWeatherData({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      });
  };
  return (
    <div className='weather0'>
      <Navbar/>
      <div className="body1">
        <div className="box1">
          <div className="search1">
            <h3>{props.state}</h3>
            <button className="btn2" onClick={getWeather}>&#128269;</button>
          </div>
          <div className="weather1">
            <div className="image1">
              <img src={CloudImage} className="icon1" alt="Cloud" />
            </div>
            <h2 className="city1">Weather in {props.state}</h2>
            <h1 className="temp1">Temperature:{weatherData.temperature}°C</h1>
                <div className="description1">Description:{weatherData.description}</div>
                <div className="humidity1">Humidity: {weatherData.humidity}%</div>
                <div className="wind1">Wind speed: {weatherData.windSpeed} km/hr</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
