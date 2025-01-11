import React from 'react';
import "./style.css"
export default function Forecast({ data }) {
  let dataForeCast = []
  for(let i = 0 ; i <= 4; i++){
    dataForeCast.push(data.list[i * 8])
  }

  return (
    <div className="forecast">
      <h2>Forecast</h2>
      {dataForeCast.map((day, index) => (
        <div key={index} className="forecast-day">
          <p>Date: {day.dt_txt}</p>
          <p>Condition: {day.weather[0].main}</p>
          <p>Temperature: {day.main.temp}°C</p>
          <p>Feels Like: {day.feels_like}mm</p>
        </div>
      ))}
    </div>
  );
}