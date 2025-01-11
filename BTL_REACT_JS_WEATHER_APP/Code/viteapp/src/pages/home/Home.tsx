import  { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import WeatherInfo from '@/components/weatherinfo/WeatherInfo'
import WeatherForecast from '@/components/weatherforecast/WeatherForecast'
import TemperatureChart from '@/components/temperaturechar/TemperatureChart'
import RainfallChart from '@/components/rainfallchart/RainFallChart'
import { getCurrenttWeather_byCityName, getForeCastWeathe_byCityName } from '@/utils/fetchAPI'

const Home = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [error, setError] = useState('')

  const handleSearch = async () => {
    const data1 = await getForeCastWeathe_byCityName(city)
    setForecastData(data1)
    
    const data2 = await getCurrenttWeather_byCityName(city)
    setWeatherData(data2)
    console.log(data1, data2);

    //setWeatherData(null)
    //setError('City not found')
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-2 mb-4">
        <Input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && (
        <div className="space-y-6">
          <WeatherInfo data={weatherData} />
          <WeatherForecast data={forecastData} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TemperatureChart data={forecastData} />
            <RainfallChart data={forecastData} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Home