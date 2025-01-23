import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const BarChart = () => {
    const options: ApexOptions = {
        chart: {
            type: 'bar' as const,
            height: 350,
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                horizontal: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Chemistry', 'Physics', 'EC', 'English', 'Maths', 'Drawing', 'Lab'],
        },
        colors: ['rgba(91, 28, 215, 0.2)', 'rgb(245, 9, 9)']
    };

    const series = [{
        name: 'Student Marks',
        data: [65, 59, 80, 81, 56, 55, 40]
    }];

    return (
        <Chart options={options} series={series} type="bar" height={350} />
    );
};

export default BarChart;
