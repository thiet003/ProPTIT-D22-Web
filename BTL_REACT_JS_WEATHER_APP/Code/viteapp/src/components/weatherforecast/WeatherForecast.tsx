import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const WeatherForecast = ({ data }) => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const lst = [];
    for(let i = 0; i < 3; i++){
      lst.push(data.list[i * 9])
    }
    setListData(lst)
  }, [data.city.id, data.list])
  

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {listData.map((day) => (
            <div key={day.dt_txt.split(" ")[1]} className="text-center">
              <p className="font-bold">{day.dt_txt.split(" ")[1]}</p>
              <p>{day.main.temp}°C</p>
              <p>{day.weather[0].main}</p>
              <p>Humidity: {day.main.humidity}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default WeatherForecast