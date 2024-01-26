"use client"
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ApexOptions {
    annotations?: ApexAnnotations
    chart?: ApexChart
    colors?: any[]
    dataLabels?: ApexDataLabels
    fill?: ApexFill
    forecastDataPoints?: ApexForecastDataPoints
    grid?: ApexGrid
    labels?: string[]
    legend?: ApexLegend
    markers?: ApexMarkers
    noData?: ApexNoData
    plotOptions?: ApexPlotOptions
    responsive?: ApexResponsive[]
    series?: ApexAxisChartSeries | ApexNonAxisChartSeries
    states?: ApexStates
    stroke?: ApexStroke
    subtitle?: ApexTitleSubtitle
    theme?: ApexTheme
    title?: ApexTitleSubtitle
    tooltip?: ApexTooltip
    xaxis?: ApexXAxis
    yaxis?: ApexYAxis | ApexYAxis[]
}

const ApexChart: React.FC = () => {
    const [chartData, setChartData] = useState({
        series: [
            {
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            },
            {
                name: 'Series 2',
                data: [20, 30, 40, 80, 20, 80],
            },
            {
                name: 'Series 3',
                data: [44, 76, 78, 13, 43, 10],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'radar',
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1,
                },
            },
            title: {
                text: 'Plus suivi',
            },
            stroke: {
                width: 2,
            },
            fill: {
                opacity: 0.1,
            },
            markers: {
                size: 0,
            },
            xaxis: {
                categories: ['2011', '2012', '2013', '2014', '2015', '2016'],
            },
        },
    });

    return (
        <div id="chart" className='bg-white dark:bg-slate-700 w-1/4 rounded-sm m-3'>
            {/* <ReactApexChart options={chartData.options} series={chartData.series} type="radar" height={350} /> */}
        </div>
    );
};

export default ApexChart;
