// "use client"
// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const ApexChartSpline: React.FC = () => {
//     const [chartData, setChartData] = useState({
//         series: [
//             {
//                 name: 'Blogs',
//                 data: [31, 40, 28, 51, 42, 109, 100],
//             },
//             {
//                 name: 'Articles',
//                 data: [11, 32, 45, 32, 34, 52, 41],
//             },
//             {
//                 name: 'Products',
//                 data: [11, 32, 45, 32, 34, 52, 41],
//             },
//             {
//                 name: 'Projet',
//                 data: [11, 32, 45, 32, 34, 52, 41],
//             },
//         ],
//         options: {
//             chart: {
//                 height: 350,
//                 type: 'area',
//             },
//             dataLabels: {
//                 enabled: false,
//             },
//             stroke: {
//                 curve: 'smooth',
//             },
//             xaxis: {
//                 type: 'datetime',
//                 categories: [
//                     '2018-09-19T00:00:00.000Z',
//                     '2018-09-19T01:30:00.000Z',
//                     '2018-09-19T02:30:00.000Z',
//                     '2018-09-19T03:30:00.000Z',
//                     '2018-09-19T04:30:00.000Z',
//                     '2018-09-19T05:30:00.000Z',
//                     '2018-09-19T06:30:00.000Z',
//                 ],
//             },
//             tooltip: {
//                 x: {
//                     format: 'dd/MM/yy HH:mm',
//                 },
//             },
//         },
//     });

//     return (
//         <div id="chart" className='bg-white dark:bg-slate-700 m-3 w-full rounded-sm '>
//             {/* <ReactApexChart options={chartData?.options} series={chartData.series} type="area" height={350} /> */}
//         </div>
//     );
// };

// export default ApexChartSpline;
