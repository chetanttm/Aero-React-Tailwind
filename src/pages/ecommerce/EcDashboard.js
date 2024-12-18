import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import ReactApexChart from 'react-apexcharts';
import {
    IconChartDonut,
    IconChartHistogram,
    IconCreditCard,
    IconDots,
    IconX,
} from '@tabler/icons-react';

export default function EcDashboard() {

    const breadcrumbItem = [
        {
            name: "eCommerce",
        },
        {
            name: "Dashboard",
        },
    ]

    const chartData1 = {
        series: [42],
        options: {
            colors: ['var(--sky)'],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            offsetY: 6,
                            fontSize: '22px',
                            fontWeight: 700,
                            fontFamily: 'var(--font-family)',
                            color: 'var(--sky)',
                            formatter: function (val) {
                                return val
                            }
                        },
                    },
                },
            },
        },
    };

    const chartData2 = {
        series: [81],
        options: {
            colors: ['var(--primary)'],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            offsetY: 6,
                            fontSize: '22px',
                            fontWeight: 700,
                            fontFamily: 'var(--font-family)',
                            color: 'var(--primary)',
                            formatter: function (val) {
                                return val
                            }
                        },
                    },
                },
            },
        },
    };

    const chartData3 = {
        series: [62],
        options: {
            colors: ['var(--purple)'],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            offsetY: 6,
                            fontSize: '22px',
                            fontWeight: 700,
                            fontFamily: 'var(--font-family)',
                            color: 'var(--purple)',
                            formatter: function (val) {
                                return val
                            }
                        },
                    },
                },
            },
        },
    };

    const chartData4 = {
        series: [38],
        options: {
            colors: ['var(--chart-color1)'],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            offsetY: 6,
                            fontSize: '22px',
                            fontWeight: 700,
                            fontFamily: 'var(--font-family)',
                            color: 'var(--chart-color1)',
                            formatter: function (val) {
                                return val
                            }
                        },
                    },
                },
            },
        },
    };

    const chartData5 = {
        series: [
            {
                name: 'Sales',
                data: [10, 50, 20, 45, 30, 25, 40],
            },
            {
                name: 'Revenue',
                data: [0, 15, 50, 12, 120, 80, 50],
            },
            {
                name: 'Profit',
                data: [0, 5, 65, 7, 89, 40, 26],
            }
        ],
        options: {
            colors: ['var(--danger)', 'var(--sky)', 'var(--purple)'],
            fill: {
                gradient: {
                    inverseColors: true,
                    opacityTo: 0.2,
                    stops: [0, 0],
                }
            },
            stroke: {
                width: 1,
                curve: 'smooth',
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 1,
                strokeColors: ['var(--danger)', 'var(--sky)', 'var(--purple)'],
                hover: {
                    size: 1,
                }
            },
            legend: {
                show: false,
            },
            chart: {
                toolbar: {
                    show: false,
                },
            },
            grid: {
                borderColor: 'var(--border-color)',
            },
            xaxis: {
                categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
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
                max: 200,
                tickAmount: 4,
                labels: {
                    style: {
                        fontFamily: 'var(--font-family)',
                    },
                }
            },
            responsive: [{
                breakpoint: 767,
                options: {
                    chart: {
                        height: 'auto'
                    }
                },
            }]
        },
    };

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="eCommerce Dashboard" />
            <div className='mb-4 grid xxl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <ReactApexChart options={chartData1.options} series={chartData1.series} type="radialBar" width={130} height={130} />
                        <h5>Customers</h5>
                    </div>
                    <div className='flex mt-6'>
                        <div className="flex-1 text-center">
                            <small className="text-font-color-100">Direct</small>
                            <h5 className="font-medium text-[22px]/[30px]">254</h5>
                        </div>
                        <div className="flex-1 text-center">
                            <small className="text-font-color-100">Discovery</small>
                            <h5 className="font-medium text-[22px]/[30px]">254</h5>
                        </div>
                    </div>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <ReactApexChart options={chartData2.options} series={chartData2.series} type="radialBar" width={130} height={130} />
                        <h5>Total Orders</h5>
                    </div>
                    <div className='flex mt-6'>
                        <div className="flex-1 text-center">
                            <small className="text-font-color-100">Internal</small>
                            <h5 className="font-medium text-[22px]/[30px]">34GB</h5>
                        </div>
                        <div className="flex-1 text-center">
                            <small className="text-font-color-100">External</small>
                            <h5 className="font-medium text-[22px]/[30px]">531GB</h5>
                        </div>
                    </div>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <ReactApexChart options={chartData3.options} series={chartData3.series} type="radialBar" width={130} height={130} />
                        <h5>Total Orders</h5>
                    </div>
                    <div className='flex mt-6'>
                        <div className="flex-1 text-center">
                            <small className="text-font-color-100">Internal</small>
                            <h5 className="font-medium text-[22px]/[30px]">25(-23%)</h5>
                        </div>
                        <div className="flex-1 text-center">
                            <small className="text-font-color-100">External</small>
                            <h5 className="font-medium text-[22px]/[30px]">12(+150%)</h5>
                        </div>
                    </div>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <ReactApexChart options={chartData4.options} series={chartData4.series} type="radialBar" width={130} height={130} />
                        <h5>Total Orders</h5>
                    </div>
                    <div className='flex mt-6'>
                        <div className="flex-1 text-center">
                            <small className="text-font-color-100">Inbound</small>
                            <h5 className="font-medium text-[22px]/[30px]">15K</h5>
                        </div>
                        <div className="flex-1 text-center">
                            <small className="text-font-color-100">Outbound</small>
                            <h5 className="font-medium text-[22px]/[30px]">2K</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid xxl:grid-cols-[2fr_1fr] grid-cols-1 gap-4'>
                <div>
                    <div className='flex items-center justify-between gap-2 mb-10'>
                        <h2 className='flex items-center gap-5 uppercase'>
                            <strong className='text-primary flex items-center'>
                                Annual
                            </strong>
                            Report
                        </h2>
                        <div className='flex items-center gap-2'>
                            <button>
                                <IconDots />
                            </button>
                            <button>
                                <IconX />
                            </button>
                        </div>
                    </div>
                    <div className='card bg-card-color rounded-md'>
                        <div className='flex justify-between gap-4 flex-wrap md:p-20 p-15'>
                            <div className='flex items-start gap-3'>
                                <div className='w-[50px] h-[50px] min-w-[50px] rounded flex items-center justify-center bg-danger-50'>
                                    <IconChartDonut />
                                </div>
                                <div className='flex flex-col'>
                                    <small className="text-font-color-100 leading-none">Sales Report</small>
                                    <h4 className="text-[26px]/[36px] font-medium mt-1">$4,516</h4>
                                </div>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='w-[50px] h-[50px] min-w-[50px] rounded flex items-center justify-center bg-sky-50'>
                                    <IconChartHistogram />
                                </div>
                                <div className='flex flex-col'>
                                    <small className="text-font-color-100 leading-none">Annual Revenue</small>
                                    <h4 className="text-[26px]/[36px] font-medium mt-1">$6,481</h4>
                                </div>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='w-[50px] h-[50px] min-w-[50px] rounded flex items-center justify-center bg-purple-50'>
                                    <IconCreditCard />
                                </div>
                                <div className='flex flex-col'>
                                    <small className="text-font-color-100 leading-none">Total Profit</small>
                                    <h4 className="text-[26px]/[36px] font-medium mt-1">$3,915</h4>
                                </div>
                            </div>
                        </div>
                        <div className='md:px-10 px-5'>
                        <ReactApexChart options={chartData5.options} series={chartData5.series} type="area" height={350} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between gap-2 mb-10'>
                        <h2 className='flex items-center gap-5 uppercase'>
                            <strong className='text-primary flex items-center'>
                                Popular
                            </strong>
                            Products
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}
