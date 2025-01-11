import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const WeatherInfo = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.name} - Current Weather</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">{data.main.temp}°C</p>
        <p className="text-xl">{data.weather[0].main}</p>
      </CardContent>
    </Card>
  )
}

export default WeatherInfo