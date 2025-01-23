import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true, 
            backgroundColor: 'rgba(117, 217, 217, 0.37)',
            borderColor: 'rgba(35, 203, 85, 0.91)',
            tension: 0.1
        }
    ]
};

const AreaChart = () => {
    return (
        <Line data={data} />
    );
};

export default AreaChart;
