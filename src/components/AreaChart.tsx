import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const AreaChart = () => {
    const options: ApexOptions = {
        chart: {
            type: 'area',
            height: 350,
            toolbar:{
                show:false
            },
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        }
    };

    const series = [{
        name: 'Movie Tickets',
        data: [365, 259, 140, 181, 456, 585, 690]
    }];

    return (
        <Chart options={options} series={series} type="area" height={350} />
    );
};

export default AreaChart;
