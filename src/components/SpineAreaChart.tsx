// import React from 'react';
// import Chart from 'react-apexcharts';
// import { ApexOptions } from 'apexcharts';

// const SpineAreaChart: React.FC = () => {
//     const options: ApexOptions = {
//         chart: {
//             type: 'area',
//             height: 350,
//             toolbar:{
//                show: false 
//             },
//         },
//         stroke: {
//             curve: 'smooth'
//         },
//         title: {
//             text: 'Spine Area Chart',  // Set your chart name here
//             align: 'center'
//         },
//         dataLabels: {
//             enabled: false
//         },
//         xaxis: {
//             categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         },
//         yaxis: {
//             title: {
//                 text: 'Values'
//             }
//         }
//     };

//     const series = [{
//         name: 'My First Dataset',
//         data: [65, 59, 80, 81, 56, 55, 40]
//     }];

//     const price = [{
//         name: 'My First Dataset',
//         data: [65, 59, 80, 81, 56, 55, 40]
//     }];

//     return (
//         <Chart options={options} series={series} type="area" height={350} />
//     );
// };

// export default SpineAreaChart;

import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const SpineAreaChart: React.FC = () => {
    const options: ApexOptions = {
        chart: {
            type: 'area',
            height: 350,
            toolbar: {
                show: false
            },
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Price Comparison Chart',
            align: 'center'
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        },
        yaxis: {
            title: {
                text: 'Price'
            }
        },
        legend: {
            position: 'top',
        }
    };

    const series = [
        {
            name: 'Deal Price',
            data: [65, 70, 75, 80, 85, 90, 95]
        },
        {
            name: 'Regular Price',
            data: [75, 80, 85, 90, 95, 100, 105]
        },
        {
            name: 'MRP',
            data: [85, 90, 95, 100, 105, 110, 115]
        }
    ];

    return (
        <Chart options={options} series={series} type="area" height={350} />
    );
};

export default SpineAreaChart;
