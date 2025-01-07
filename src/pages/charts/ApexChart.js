import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import ReactApexChart from 'react-apexcharts'

export default function ApexChart() {

    const breadcrumbItem = [
        {
            name: "Charts",
        },
        {
            name: "Apex Chart",
        },
    ]

    const chartData1 = {
        series: [
            {
                name: "",
                data: [100, 380, 200, 320, 450, 450, 570, 400, 555, 620, 750, 1000]
            },
        ],
        options: {
            stroke: {
                width: 2,
                curve: 'straight',
            },
            markers: {
                size: 5,
                hover: {
                    size: 5,
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['var(--chart-color1)'],
            fill: {
                gradient: {
                    inverseColors: true,
                    opacityTo: 0.2,
                    stops: [0, 0],
                }
            },
            chart: {
                toolbar: {
                    show: false,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                style: {
                    fontFamily: 'var(--font-family)',
                },
            },
            grid: {
                borderColor: 'var(--border-color)',
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                labels: {
                    style: {
                        fontFamily: 'var(--font-family)',
                    },
                },
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                min: 0,
                max: 1000,
                tickAmount: 5,
                labels: {
                    style: {
                        fontFamily: 'var(--font-family)',
                    },
                }
            },
        },
    };

    const chartData2 = {
        series: [
            {
                data: [100, 600, 200, 900, 300]
            },
            {
                data: [700, 300, 1000, 100, 800]
            },
        ],
        options: {
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            markers: {
                size: 5,
                hover: {
                    size: 5,
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['var(--chart-color5)', 'var(--chart-color3)'],
            fill: {
                gradient: {
                    inverseColors: true,
                    opacityTo: 0.2,
                    stops: [0, 0],
                }
            },
            chart: {
                toolbar: {
                    show: false,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                style: {
                    fontFamily: 'var(--font-family)',
                },
            },
            grid: {
                borderColor: 'var(--border-color)',
            },
            xaxis: {
                categories: ["2011", "2012", "2013", "2014", "2015"],
                labels: {
                    style: {
                        fontFamily: 'var(--font-family)',
                    },
                },
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                min: 0,
                max: 1000,
                tickAmount: 5,
                labels: {
                    style: {
                        fontFamily: 'var(--font-family)',
                    },
                }
            },
        },
    };

    const chartData3 = {
        series: [
            {
                data: [200, 100, 500, 300, 400, 300, 500, 600, 50, 200, 300, 200]
            },
            {
                data: [400, 200, 300, 500, 200, 200, 200, 50, 150, 400, 400, 500]
            },
            {
                data: [400, 500, 100, 200, 200, 500, 100, 200, 600, 50, 200, 300]
            },
        ],
        options: {
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            markers: {
                size: 5,
                hover: {
                    size: 5,
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['var(--chart-color1)', 'var(--chart-color3)', 'var(--chart-color2)',],
            chart: {
                stacked: true,
                toolbar: {
                    show: false,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                style: {
                    fontFamily: 'var(--font-family)',
                },
            },
            grid: {
                borderColor: 'var(--border-color)',
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                labels: {
                    style: {
                        fontFamily: 'var(--font-family)',
                    },
                },
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                min: 0,
                max: 1000,
                tickAmount: 5,
                labels: {
                    style: {
                        fontFamily: 'var(--font-family)',
                    },
                }
            },
        },
    };

    const chartData4 = {
        series: [
            {
                data: [200, 100, 500, 300, 400, 300, 500, 600, 50, 200, 300, 200]
            },
            {
                data: [100, 380, 200, 320, 450, 450, 570, 400, 555, 620, 750, 1000]
            },
        ],
        options: {
            stroke: {
                width: 2,
                curve: 'straight',
            },
            markers: {
                size: 5,
                hover: {
                    size: 5,
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['var(--chart-color4)', 'var(--chart-color5)'],
            fill: {
                gradient: {
                    inverseColors: true,
                    opacityTo: 0.2,
                    stops: [0, 0],
                }
            },
            chart: {
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            tooltip: {
                x: {
                    show: false,
                },
                style: {
                    fontFamily: 'var(--font-family)',
                },
            },
            grid: {
                borderColor: 'var(--border-color)',
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                labels: {
                    style: {
                        fontFamily: 'var(--font-family)',
                    },
                },
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                min: 0,
                max: 1000,
                tickAmount: 5,
                labels: {
                    style: {
                        fontFamily: 'var(--font-family)',
                    },
                }
            },
        },
    };

    const chartData5 = {
        series: [65, 25, 10],
        options: {
            labels: ['Team A', 'Team B', 'Team C'],
            colors: ['var(--chart-color5)', 'var(--chart-color2)', 'var(--chart-color3)'],
            legend: {
                show: false,
            },
        },
    };

    const chartData6 = {
        series: [20, 10, 30, 40],
        options: {
            colors: ['var(--chart-color1)', 'var(--chart-color5)', 'var(--chart-color3)', 'var(--chart-color4)'],
            legend: {
                show: false,
            },
            plotOptions: {
                pie: {
                    expandOnClick: true
                }
            }
        },
    };

    const chartData7 = {
        series: [
            {
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            },
            {
                name: 'Series 2',
                data: [20, 30, 40, 80, 20, 80],
            },
        ],
        options: {
            chart: {
                type: 'radar',
                toolbar: {
                    show: false,
                },
            },
            legend: {
                show: false,
            },
            stroke: {
                width: 2,
            },
            tooltip: {
                x: {
                    show: false,
                },
            },
            colors: ['var(--chart-color1)', 'var(--chart-color2)'],
            fill: {
                type: 'gradient',
                gradient: {
                    inverseColors: true,
                    opacityTo: 0.2,
                    stops: [0, 0],
                }
            },
            grid: {
                borderColor: 'var(--border-color)',
            },
            xaxis: {
                categories: ['2011', '2012', '2013', '2014', '2015', '2016'],
            }
        },
    };

    const chartData8 = {
        series: [20, 35, 25, 15, 5],
        options: {
            colors: ['var(--chart-color1)', 'var(--chart-color2)', 'var(--chart-color3)', 'var(--chart-color4)', 'var(--chart-color5)'],
            fill: {
                opacity: 0.7
            },
            stroke: {
                width: 0
            },
            legend: {
                position: 'bottom'
            },
        },
    };

    const chartData9 = {
        series: [70],
        options: {
            colors: ['var(--chart-color5)'],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    }
                },
            },
            stroke: {
                lineCap: "round",
            },
            labels: ['Cricket'],
        },
    };

    const chartData10 = {
        series: [44, 55, 67, 83],
        options: {
            colors: ['var(--chart-color1)', 'var(--chart-color2)', 'var(--chart-color4)', 'var(--chart-color5)'],
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                return 249
                            }
                        }
                    }
                }
            },
            labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        },
    };

    return (
        <>
            <Breadcrumb title="Apex Chart" breadcrumbItem={breadcrumbItem} />
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-30'>
                <div className='card bg-card-color rounded-md'>
                    <p className='text-[16px]/[19.2px] font-medium md:p-20 p-15'>
                        Line Chart
                    </p>
                    <ReactApexChart options={chartData1.options} series={chartData1.series} type="line" />
                </div>
                <div className='card bg-card-color rounded-md'>
                    <p className='text-[16px]/[19.2px] font-medium md:p-20 p-15'>
                        Area Chart
                    </p>
                    <ReactApexChart options={chartData1.options} series={chartData1.series} type="area" />
                </div>
                <div className='card bg-card-color rounded-md'>
                    <p className='text-[16px]/[19.2px] font-medium md:p-20 p-15'>
                        Multiple Chart
                    </p>
                    <ReactApexChart options={chartData2.options} series={chartData2.series} type="area" />
                </div>
                <div className='card bg-card-color rounded-md'>
                    <p className='text-[16px]/[19.2px] font-medium md:p-20 p-15'>
                        Bar Chart
                    </p>
                    <ReactApexChart options={chartData1.options} series={chartData1.series} type="bar" />
                </div>
                <div className='card bg-card-color rounded-md'>
                    <p className='text-[16px]/[19.2px] font-medium md:p-20 p-15'>
                        Stacked Bar Chart
                    </p>
                    <ReactApexChart options={chartData3.options} series={chartData3.series} type="bar" />
                </div>
                <div className='card bg-card-color rounded-md'>
                    <p className='text-[16px]/[19.2px] font-medium md:p-20 p-15'>
                        Horizontal Bar Chart
                    </p>
                    <ReactApexChart options={chartData4.options} series={chartData4.series} type="bar" />
                </div>
                <div className='card bg-card-color rounded-md'>
                    <p className='text-[16px]/[19.2px] font-medium md:p-20 p-15'>
                        Pie Chart
                    </p>
                    <ReactApexChart options={chartData5.options} series={chartData5.series} type="pie" className="max-w-[500px] pb-10 mx-auto" />
                </div>
                <div className='card bg-card-color rounded-md'>
                    <p className='text-[16px]/[19.2px] font-medium md:p-20 p-15'>
                        Donut Chart
                    </p>
                    <ReactApexChart options={chartData6.options} series={chartData6.series} type="donut" className="max-w-[500px] pb-10 mx-auto" />
                </div>
                <div className='card bg-card-color rounded-md'>
                    <p className='text-[16px]/[19.2px] font-medium md:p-20 p-15'>
                        Radar Chart
                    </p>
                    <ReactApexChart options={chartData7.options} series={chartData7.series} type="radar" />
                </div>
                <div className='card bg-card-color rounded-md'>
                    <p className='text-[16px]/[19.2px] font-medium md:p-20 p-15'>
                        Polar Chart
                    </p>
                    <ReactApexChart options={chartData8.options} series={chartData8.series} type="polarArea" className="max-w-[600px] pb-10 mx-auto" />
                </div>
                <div className='card bg-card-color rounded-md'>
                    <p className='text-[16px]/[19.2px] font-medium md:p-20 p-15'>
                        Radialbars/Circle Chart
                    </p>
                    <ReactApexChart options={chartData9.options} series={chartData9.series} type="radialBar" className="max-w-[500px] pb-10 mx-auto" />
                </div>
                <div className='card bg-card-color rounded-md'>
                    <p className='text-[16px]/[19.2px] font-medium md:p-20 p-15'>
                        Multiple Radialbars/Circle Chart
                    </p>
                    <ReactApexChart options={chartData10.options} series={chartData10.series} type="radialBar" className="max-w-[500px] pb-10 mx-auto" />
                </div>
            </div>
        </>
    )
}
