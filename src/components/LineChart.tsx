import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
        {
            label: 'Simple Dataset',
            data: [12, 19, 3, 5, 2, 3, 9],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }
    ]
};

const SimpleLineChart = () => {
    return <Line data={data} />;
};

export default SimpleLineChart;
