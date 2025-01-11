import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

const RainfallChart = ({ data }) => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const lst = [];
    for(let i = 0; i < 5; i++){
      const tmp = {
        time: data.list[i * 3].dt_txt.split[1],
        humidity: data.list[i * 3].main.humidity
      }
      lst.push(tmp)
    }
    setListData(lst)
  }, [data.city.id, data.list])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Humidity Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={listData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="humidity" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default RainfallChart