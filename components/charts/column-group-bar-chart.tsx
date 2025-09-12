"use client";

import dynamic from 'next/dynamic'
import React from "react";
import { ApexOptions } from "apexcharts";
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const chartOptions: ApexOptions = {
    chart: {
        type: 'bar',
        height: 264,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 4,
            columnWidth: 10,
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'last', // 'all', 'last'
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'gradient',
        colors: ['#487FFF'], // Set the starting color (top color) here
        gradient: {
            shade: 'light', // Gradient shading type
            type: 'vertical',  // Gradient direction (vertical)
            shadeIntensity: 0.5, // Intensity of the gradient shading
            gradientToColors: ['#487FFF'], // Bottom gradient color (with transparency)
            inverseColors: false, // Do not invert colors
            opacityFrom: 1, // Starting opacity
            opacityTo: 1,  // Ending opacity
            stops: [0, 100],
        },
    },
    grid: {
        show: true,
        borderColor: '#D1D5DB',
        strokeDashArray: 4, // Use a number for dashed style
        position: 'back',
    },
    xaxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yaxis: {
        labels: {
            formatter: function (value) {
                return (value / 1000).toFixed(0) + 'k';
            }
        }
    },
    tooltip: {
        y: {
            formatter: function (value) {
                return value / 1000 + 'k';
            }
        }
    }
};

const chartSeries = [{
    name: "Sales",
    data: [{
        x: 'Jan',
        y: 85000,
    }, {
        x: 'Feb',
        y: 70000,
    }, {
        x: 'Mar',
        y: 40000,
    }, {
        x: 'Apr',
        y: 50000,
    }, {
        x: 'May',
        y: 60000,
    }, {
        x: 'Jun',
        y: 50000,
    }, {
        x: 'Jul',
        y: 40000,
    }, {
        x: 'Aug',
        y: 50000,
    }, {
        x: 'Sep',
        y: 40000,
    }, {
        x: 'Oct',
        y: 60000,
    }, {
        x: 'Nov',
        y: 30000,
    }, {
        x: 'Dec',
        y: 50000,
    }]
}]

const ColumnGroupBarChart = () => {
    return (
        <Chart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={264}
        />
    );
};

export default ColumnGroupBarChart;