import React, { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/theme';
import WeatherInfo from '../../components/WeatherInfo';
import Forecast from '../../components/WeatherForeCast';
import TemperatureChart from '../../components/TempChart';
import HumidityChart from '../../components/HudChart';
import { getCurrenttWeather_byCityName, getForeCastWeathe_byCityName } from '../../utils/fetchAPI';
import Header from '../../components/Header';
import "./style.css"

export default function Home() {
  const [city, setCity] = useState('Hanoi');
  const [weatherData, setWeatherData] = useState(null);
  const [weatherForeCastData, setWeatherForeCastData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data1 = await getCurrenttWeather_byCityName(city)
      const data2 = await getForeCastWeathe_byCityName(city) // nếu để dòng này sau cái setWeather thì nó ko nhận nữa

      setWeatherData(data1)
      console.log("Crr Weather:", data1);

      
      setWeatherForeCastData(data2)
      console.log("ForeCast: ", data2);
    };

    fetchWeatherData();
  }, [city]);

  if (!weatherData) return <div>No weather data available</div>;

  return (
    // <div className={`home ${theme}`}>
    <div className={`home`}>
      <div className='ss1'>
        <div className='current'>
          <Header city={city} setCity={setCity}/>
          <WeatherInfo city={city} data={weatherData} />
        </div>
        <div className='chartWeas'>
          <TemperatureChart data={weatherForeCastData} className="chartWea"/>
          <HumidityChart data={weatherForeCastData} className="chartWea"/>
        </div>
      </div>
      <Forecast data={weatherForeCastData}/>
    </div>
  );
}