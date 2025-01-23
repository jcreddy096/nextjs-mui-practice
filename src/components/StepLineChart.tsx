import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const StepLineChart = () => {
    const options: ApexOptions = {
        chart: {
            type: 'line',
            height: 350,
            toolbar: {
                show: false
            },
        },
        stroke: {
            curve: 'stepline'
        },
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        }
    };

    const series = [{
        name: 'Revenue',
        data: [65, 59, 80, 51, 66, 55, 40]
    }];

    return (
        <Chart options={options} series={series} type="line" height={350} />
    );
};

export default StepLineChart;
