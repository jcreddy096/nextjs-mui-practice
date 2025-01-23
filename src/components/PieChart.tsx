import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Pink', 'Blue', 'Orange', 'Green', 'Purple', 'Brown'],
    datasets: [
        {
            label: '# of Votes',
            data: [10, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(31, 28, 227, 0.88)',
                'rgba(243, 110, 9, 0.89)',
                'rgba(11, 241, 130, 0.65)',
                'rgba(207, 20, 195, 0.77)',
                'rgba(210, 157, 103, 0.86)'
            ],
            borderColor: [
                'rgb(230, 87, 118)',
                'rgb(72, 170, 235)',
                'rgb(187, 144, 35)',
                'rgb(77, 245, 245)',
                'rgb(105, 54, 208)',
                'rgb(142, 186, 20)'
            ],
            borderWidth: 1
        }
    ]
};

const PieChart = () => {
    return (
        <Pie data={data} />
    );
};

export default PieChart;
