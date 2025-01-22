import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',],
    datasets: [
        {
            label: 'My First Dataset',
            data: [15, 29, 81, 51, 66, 25, 20, 71, 33, 49, 11, 80],
            fill: false,
            borderColor: 'rgb(187, 52, 205)',
            stepped: true
        }
    ]
};

const StepLineChart = () => {
    return <Line data={data} />;
};

export default StepLineChart;
