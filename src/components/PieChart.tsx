import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const PieChart = () => {
    const options: ApexOptions = {
        chart: {
            type: 'pie',
            height: 350,
            toolbar: {
                show: false
            },
        },
        labels: ['FootBall', 'BasketBall', 'Badminton', 'Cricket', 'Hockey', 'Tennis', 'Archery'],
    };

    const series = [65, 59, 80, 181, 106, 55, 30];

    return (
        <Chart options={options} series={series} type="pie" height={350} />
    );
};

export default PieChart;
