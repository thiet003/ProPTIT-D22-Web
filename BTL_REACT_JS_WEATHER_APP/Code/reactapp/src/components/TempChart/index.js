import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function TemperatureChart({ data }) {  
  let dataForeCast = []
  for(let i = 0 ; i <= 5; i++){
    dataForeCast.push(data.list[i * 3])
  }

  const chartData = {
    labels: dataForeCast.map(item => item.dt_txt.split(" ")[1]),
    datasets: [
      {
        label: 'Temperature',
        data: dataForeCast.map(item => item.main.temp),
        borderColor: 'rgb(99, 232, 255)',
        backgroundColor: 'rgb(99, 232, 255)',
      },
    ],
  };

  return (
    <div className="temperature-chart">
      <h2 className='title'>Temperature Chart</h2>
      <Line data={chartData} />
    </div>
  );
}