import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const TemperatureChart = ({ data }) => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const lst = [];
    for(let i = 0; i < 5; i++){
      const tmp = {
        time: data.list[i * 3].dt_txt.split[1],
        temp: data.list[i * 3].main.temp
      }
      lst.push(tmp)
    }
    setListData(lst)
  }, [data.city.id, data.list])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Temperature Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={listData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="temp" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default TemperatureChart