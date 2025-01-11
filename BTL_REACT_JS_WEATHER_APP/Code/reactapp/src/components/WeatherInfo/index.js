import React from 'react';
import "./style.css"
export default function WeatherInfo({ data, city}) {
  return (
    <>
      <div className="weather-info">
        <p className='city'>{city.toUpperCase()}</p>
        <p className='temp'>Temperature: {data.main.temp}°C</p>
        <p className='description'>Condition: {data.weather[0].description}</p>
      </div>
    </>
    
  );
}