import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const LineChart = () => {
    const options: ApexOptions = {
        chart: {
            type: 'line',
            height: 350,
            toolbar: {
                show: false
            },
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['00', '03', '06', '09', '12', '15', '18', '21'],
        }
    };

    const series = [{
        name: 'Avg Temp Changes by Hrs',
        data: [15, 18, 20, 31, 29, 25, 20, 18]
    }];

    return (
        <Chart options={options} series={series} type="line" height={350} />
    );
};

export default LineChart;
