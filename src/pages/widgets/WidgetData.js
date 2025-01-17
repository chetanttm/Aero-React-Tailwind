import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import ReactApexChart from 'react-apexcharts';
import {
    IconBugFilled,
    IconCreditCardFilled,
    IconDots,
    IconEyeFilled,
    IconHeadphonesFilled,
    IconMailFilled,
    IconMessageFilled,
    IconServer2,
    IconSettingsFilled,
    IconShoppingCartFilled,
    IconThumbUpFilled,
    IconTicket,
    IconTrafficLightsOff,
    IconTrendingDown,
    IconTrendingUp,
    IconUserFilled,
    IconWorld,
    IconX,
} from '@tabler/icons-react'

export default function WidgetData() {

    const breadcrumbItem = [
        {
            name: "Widgets",
        },
        {
            name: "Data Widgets",
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
        series: [25, 8, 30, 35],
        options: {
            labels: ['', '', '', ''],
            colors: ['var(--white)', 'rgba(255, 255, 255, 0.80)', 'rgba(255, 255, 255, 0.60)', 'rgba(255, 255, 255, 0.40)'],
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
        },
    };

    const chartData6 = {
        options: {
            colors: ['var(--white)'],
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
        },
        series: [
            {
                data: [6, 4, 8, 6, 8, 10, 5, 6, 7, 9, 5]
            }
        ]
    };

    const chartData7 = {
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
            stroke: {
                colors: 'var(--white)',
                width: 1,
            },
        },
        series: [
            {
                data: [9, 4, 6, 5, 6, 4, 7, 3]
            }
        ]
    };

    const chartData8 = {
        options: {
            colors: ['var(--white)'],
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
            yaxis: {
                min: -10,
            },
        },
        series: [
            {
                data: [6, -4, 8, -6, 8, 10, -5, 6, 7, -9, 5],
            }
        ]
    };

    const chartData9 = {
        options: {
            colors: ['var(--chart-color1)'],
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
            stroke: {
                colors: 'var(--white)',
                width: 2,
            },
        },
        series: [
            {
                data: [5, 2, 3, 7, 6, 4, 8, 1]
            }
        ]
    };

    const chartData10 = {
        options: {
            colors: ['var(--chart-color2)'],
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
            stroke: {
                colors: 'var(--white)',
                width: 2,
            },
        },
        series: [
            {
                data: [8, 2, 6, 5, 1, 4, 4, 3]
            }
        ]
    };

    const chartData11 = {
        options: {
            colors: ['var(--chart-color3)'],
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
            stroke: {
                colors: 'var(--white)',
                width: 2,
            },
        },
        series: [
            {
                data: [4, 4, 3, 9, 2, 1, 5, 7]
            }
        ]
    };

    const chartData12 = {
        options: {
            colors: ['var(--chart-color4)'],
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
            stroke: {
                colors: 'var(--white)',
                width: 2,
            },
        },
        series: [
            {
                data: [7, 5, 3, 8, 4, 6, 2, 9]
            }
        ]
    };

    const chartData13 = {
        options: {
            colors: ['var(--sky)'],
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    columnWidth: '30%',
                }
            },
        },
        series: [
            {
                data: [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1]
            }
        ]
    };

    const chartData14 = {
        options: {
            colors: ['var(--purple)'],
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    columnWidth: '30%',
                }
            },
        },
        series: [
            {
                data: [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1]
            }
        ]
    };

    const chartData15 = {
        options: {
            colors: ['var(--warning)'],
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    columnWidth: '30%',
                }
            },
        },
        series: [
            {
                data: [1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4]
            }
        ]
    };

    const chartData16 = {
        options: {
            colors: ['var(--danger)'],
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    columnWidth: '30%',
                }
            },
        },
        series: [
            {
                data: [8, 7, 6, 5, 4, 3, 2, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4]
            }
        ]
    };

    const chartData17 = {
        series: [66],
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

    const chartData18 = {
        options: {
            colors: ['var(--danger)'],
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    columnWidth: '20%',
                }
            },
        },
        series: [
            {
                data: [3, 2, 6, 5, 9, 8, 7, 8, 4, 5, 1, 2, 9, 5, 1, 3, 5, 7, 4, 6]
            }
        ]
    };

    const chartData19 = {
        options: {
            colors: ['var(--chart-color1)'],
            fill: {
                gradient: {
                    inverseColors: true,
                    opacityTo: 0.2,
                    stops: [0, 0],
                }
            },
            stroke: {
                width: 1,
                curve: 'straight',
            },
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
        },
        series: [
            {
                data: [5, 2, 3, 7, 6, 4, 8, 1]
            }
        ]
    };

    const chartData20 = {
        options: {
            colors: ['var(--chart-color2)'],
            fill: {
                gradient: {
                    inverseColors: true,
                    opacityTo: 0.2,
                    stops: [0, 0],
                }
            },
            stroke: {
                width: 1,
                curve: 'straight',
            },
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
        },
        series: [
            {
                data: [5, 2, 3, 7, 6, 4, 8, 1]
            }
        ]
    };

    const chartData21 = {
        options: {
            colors: ['var(--chart-color3)'],
            fill: {
                gradient: {
                    inverseColors: true,
                    opacityTo: 0.2,
                    stops: [0, 0],
                }
            },
            stroke: {
                width: 1,
                curve: 'straight',
            },
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
        },
        series: [
            {
                data: [5, 2, 3, 7, 6, 4, 8, 1]
            }
        ]
    };

    const chartData22 = {
        options: {
            colors: ['var(--chart-color4)'],
            fill: {
                gradient: {
                    inverseColors: true,
                    opacityTo: 0.2,
                    stops: [0, 0],
                }
            },
            stroke: {
                width: 1,
                curve: 'straight',
            },
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
        },
        series: [
            {
                data: [5, 2, 3, 7, 6, 4, 8, 1]
            }
        ]
    };

    return (
        <>
            <Breadcrumb title="Data Widgets" breadcrumbItem={breadcrumbItem} />
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-4'>
                <div className='card flex flex-col items-center bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='relative mb-4 flex items-center justify-center w-[54px] h-[54px] min-w-[54px] rounded-full text-[#6610f2] bg-[rgba(102,16,242,0.3)] after:absolute after:top-[50%] after:start-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:w-[66px] after:h-[66px] after:min-w-[66px] after:rounded-full after:bg-[rgba(102,16,242,0.2)]'>
                        <IconSettingsFilled />
                    </div>
                    <h4 className="text-[26px]/[1.5] font-medium">45.8k</h4>
                    <span className="text-font-color-100 inline-block mb-1">Total Views</span>
                    <div className='text-success flex items-center gap-1'>
                        <IconTrendingUp className='w-[20px] h-[20px] min-w-[20px]' />
                        <span>175.5%</span>
                    </div>
                </div>
                <div className='card flex flex-col items-center bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='relative mb-4 flex items-center justify-center w-[54px] h-[54px] min-w-[54px] rounded-full text-[#d63384] bg-[rgba(214,51,132,0.3)] after:absolute after:top-[50%] after:start-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:w-[66px] after:h-[66px] after:min-w-[66px] after:rounded-full after:bg-[rgba(214,51,132,0.2)]'>
                        <IconBugFilled />
                    </div>
                    <h4 className="text-[26px]/[1.5] font-medium">12.1k</h4>
                    <span className="text-font-color-100 inline-block mb-1">Bugs Fixed</span>
                    <div className='text-success flex items-center gap-1'>
                        <IconTrendingUp className='w-[20px] h-[20px] min-w-[20px]' />
                        <span>15.5%</span>
                    </div>
                </div>
                <div className='card flex flex-col items-center bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='relative mb-4 flex items-center justify-center w-[54px] h-[54px] min-w-[54px] rounded-full text-[#fd7e14] bg-[rgba(253,126,20,0.3)] after:absolute after:top-[50%] after:start-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:w-[66px] after:h-[66px] after:min-w-[66px] after:rounded-full after:bg-[rgba(253,126,20,0.2)]'>
                        <IconShoppingCartFilled />
                    </div>
                    <h4 className="text-[26px]/[1.5] font-medium">53.8k</h4>
                    <span className="text-font-color-100 inline-block mb-1">Total Sales</span>
                    <div className='text-success flex items-center gap-1'>
                        <IconTrendingUp className='w-[20px] h-[20px] min-w-[20px]' />
                        <span>25.5%</span>
                    </div>
                </div>
                <div className='card flex flex-col items-center bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='relative mb-4 flex items-center justify-center w-[54px] h-[54px] min-w-[54px] rounded-full text-[#198754] bg-[rgba(25,135,84,0.3)] after:absolute after:top-[50%] after:start-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:w-[66px] after:h-[66px] after:min-w-[66px] after:rounded-full after:bg-[rgba(25,135,84,0.2)]'>
                        <IconHeadphonesFilled />
                    </div>
                    <h4 className="text-[26px]/[1.5] font-medium">17.2k</h4>
                    <span className="text-font-color-100 inline-block mb-1">Support Cost</span>
                    <div className='text-danger flex items-center gap-1'>
                        <IconTrendingDown className='w-[20px] h-[20px] min-w-[20px]' />
                        <span>25.5%</span>
                    </div>
                </div>
                <div className='card flex flex-col items-center bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='relative mb-4 flex items-center justify-center w-[54px] h-[54px] min-w-[54px] rounded-full text-[#0dcaf0] bg-[rgba(13,202,240,0.3)] after:absolute after:top-[50%] after:start-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:w-[66px] after:h-[66px] after:min-w-[66px] after:rounded-full after:bg-[rgba(13,202,240,0.2)]'>
                        <IconTicket />
                    </div>
                    <h4 className="text-[26px]/[1.5] font-medium">01.8k</h4>
                    <span className="text-font-color-100 inline-block mb-1">Submitted Tickers</span>
                    <div className='text-success flex items-center gap-1'>
                        <IconTrendingUp className='w-[20px] h-[20px] min-w-[20px]' />
                        <span>95.5%</span>
                    </div>
                </div>
                <div className='card flex flex-col items-center bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='relative mb-4 flex items-center justify-center w-[54px] h-[54px] min-w-[54px] rounded-full text-[#212529] bg-[rgba(33,37,41,0.3)] after:absolute after:top-[50%] after:start-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:w-[66px] after:h-[66px] after:min-w-[66px] after:rounded-full after:bg-[rgba(33,37,41,0.2)]'>
                        <IconCreditCardFilled />
                    </div>
                    <h4 className="text-[26px]/[1.5] font-medium">50M</h4>
                    <span className="text-font-color-100 inline-block mb-1">Cash Deposits</span>
                    <div className='text-success flex items-center gap-1'>
                        <IconTrendingUp className='w-[20px] h-[20px] min-w-[20px]' />
                        <span>15.5%</span>
                    </div>
                </div>
                <div className='card flex flex-col items-center bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='relative mb-4 flex items-center justify-center w-[54px] h-[54px] min-w-[54px] rounded-full text-[#0d6efd] bg-[rgba(13,110,253,0.3)] after:absolute after:top-[50%] after:start-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:w-[66px] after:h-[66px] after:min-w-[66px] after:rounded-full after:bg-[rgba(13,110,253,0.2)]'>
                        <IconServer2 />
                    </div>
                    <h4 className="text-[26px]/[1.5] font-medium">89</h4>
                    <span className="text-font-color-100 inline-block mb-1">Server Allocation</span>
                    <div className='text-success flex items-center gap-1'>
                        <IconTrendingDown className='w-[20px] h-[20px] min-w-[20px]' />
                        <span>56.5%</span>
                    </div>
                </div>
                <div className='card flex flex-col items-center bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='relative mb-4 flex items-center justify-center w-[54px] h-[54px] min-w-[54px] rounded-full text-[#d63384] bg-[rgba(214,51,132,0.3)] after:absolute after:top-[50%] after:start-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:w-[66px] after:h-[66px] after:min-w-[66px] after:rounded-full after:bg-[rgba(214,51,132,0.2)]'>
                        <IconHeadphonesFilled />
                    </div>
                    <h4 className="text-[26px]/[1.5] font-medium">17.2k</h4>
                    <span className="text-font-color-100 inline-block mb-1">Support Cost</span>
                    <div className='text-danger flex items-center gap-1'>
                        <IconTrendingDown className='w-[20px] h-[20px] min-w-[20px]' />
                        <span>25.5%</span>
                    </div>
                </div>
            </div>
            <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-4'>
                <div className='card relative overflow-hidden bg-card-color md:p-20 p-15 rounded-md group'>
                    <IconTrafficLightsOff className='w-[84px] h-[84px] opacity-40 text-font-color-200 rotate-[20deg] absolute -top-20 end-40 transition-all duration-500 group-hover:-rotate-[20deg]' />
                    <h6 className='font-bold uppercase text-[14px]/[1.5] mb-2'>Traffic</h6>
                    <h2 className='mb-2'>
                        <span className='text-[32px]/[1] d-inline-block me-5'>20</span>
                        <small>of 1Tb</small>
                    </h2>
                    <small>2% higher than last month</small>
                    <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                        <div className="progress-bar w-[42%] bg-orange-300 h-full"></div>
                    </div>
                </div>
                <div className='card relative overflow-hidden bg-card-color md:p-20 p-15 rounded-md group'>
                    <IconShoppingCartFilled className='w-[84px] h-[84px] opacity-40 text-font-color-200 rotate-[20deg] absolute -top-20 end-40 transition-all duration-500 group-hover:-rotate-[20deg]' />
                    <h6 className='font-bold uppercase text-[14px]/[1.5] mb-2'>Sales</h6>
                    <h2 className='mb-2'>
                        <span className='text-[32px]/[1] d-inline-block me-5'>12</span>
                        <small>of 100</small>
                    </h2>
                    <small>6% higher than last month</small>
                    <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                        <div className="progress-bar w-[25%] bg-blue h-full"></div>
                    </div>
                </div>
                <div className='card relative overflow-hidden bg-card-color md:p-20 p-15 rounded-md group'>
                    <IconMailFilled className='w-[84px] h-[84px] opacity-40 text-font-color-200 rotate-[20deg] absolute -top-20 end-40 transition-all duration-500 group-hover:-rotate-[20deg]' />
                    <h6 className='font-bold uppercase text-[14px]/[1.5] mb-2'>Email</h6>
                    <h2 className='mb-2'>
                        <span className='text-[32px]/[1] d-inline-block me-5'>39</span>
                        <small>of 100</small>
                    </h2>
                    <small>Total Registered email</small>
                    <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                        <div className="progress-bar w-[55%] bg-purple h-full"></div>
                    </div>
                </div>
                <div className='card relative overflow-hidden bg-card-color md:p-20 p-15 rounded-md group'>
                    <IconWorld className='w-[84px] h-[84px] opacity-40 text-font-color-200 rotate-[20deg] absolute -top-20 end-40 transition-all duration-500 group-hover:-rotate-[20deg]' />
                    <h6 className='font-bold uppercase text-[14px]/[1.5] mb-2'>Domains</h6>
                    <h2 className='mb-2'>
                        <span className='text-[32px]/[1] d-inline-block me-5'>8</span>
                        <small>of 10</small>
                    </h2>
                    <small>Total Registered Domain</small>
                    <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                        <div className="progress-bar w-[89%] bg-success h-full"></div>
                    </div>
                </div>
            </div>
            <div className='grid xxl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-4'>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <ReactApexChart options={chartData1.options} series={chartData1.series} type="radialBar" width={130} height={130} />
                        <h5>Page View</h5>
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
                        <h5>Storage</h5>
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
                        <h5>Performance</h5>
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
                        <h5>Last Post</h5>
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
            <div className='grid xxl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-4'>
                <div className='card bg-danger md:p-20 p-15 rounded-md'>
                    <div className='flex flex-col items-center justify-center text-center text-white'>
                        <ReactApexChart options={chartData5.options} series={chartData5.series} type="pie" height="60" className="max-w-[60px] mx-auto" />
                        <h5 className='uppercase'>USAGE</h5>
                        <h4 className='text-[28px]/[42px]'>98%</h4>
                    </div>
                </div>
                <div className='card bg-success md:p-20 p-15 rounded-md'>
                    <div className='flex flex-col items-center justify-center text-center text-white'>
                        <ReactApexChart options={chartData6.options} series={chartData6.series} type="bar" width={60} height={35} />
                        <h5 className='uppercase mt-2'>IMPRESSIONS</h5>
                        <h4 className='text-[28px]/[42px]'>457 512</h4>
                    </div>
                </div>
                <div className='card bg-blue md:p-20 p-15 rounded-md'>
                    <div className='flex flex-col items-center justify-center text-center text-white'>
                        <ReactApexChart options={chartData7.options} series={chartData7.series} type="line" width={60} height={45} />
                        <h5 className='uppercase mt-2'>TOTAL SALES</h5>
                        <h4 className='text-[28px]/[42px]'>$125 543</h4>
                    </div>
                </div>
                <div className='card bg-purple md:p-20 p-15 rounded-md'>
                    <div className='flex flex-col items-center justify-center text-center text-white'>
                        <ReactApexChart options={chartData8.options} series={chartData8.series} type="bar" width={60} height={45} />
                        <h5 className='uppercase mt-2'>CURRENCY</h5>
                        <h4 className='text-[28px]/[42px]'>$1 063</h4>
                    </div>
                </div>
            </div>
            <div className='grid xxl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-4'>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <IconEyeFilled />
                        <h4 className='mt-2 text-[28px]/[42px]'>2,365</h4>
                        <h5>Post View</h5>
                    </div>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <IconThumbUpFilled className='text-blue' />
                        <h4 className='mt-2 text-[28px]/[42px]'>2,365</h4>
                        <h5>Post View</h5>
                    </div>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <IconMessageFilled className='text-danger' />
                        <h4 className='mt-2 text-[28px]/[42px]'>65</h4>
                        <h5>Comments</h5>
                    </div>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <IconUserFilled className='text-success' />
                        <h4 className='mt-2 text-[28px]/[42px]'>2,055</h4>
                        <h5>Profile Views</h5>
                    </div>
                </div>
            </div>
            <div className='grid xxl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-4'>
                <div className='card bg-success-50 md:p-20 p-15 rounded-md'>
                    <h5 className="font-medium text-[24px]/[1.5]">2,048</h5>
                    <span className='flex items-center gap-1'>
                        Total Leads
                    </span>
                    <ReactApexChart options={chartData9.options} series={chartData9.series} type="line" height={55} />
                </div>
                <div className='card bg-danger-50 md:p-20 p-15 rounded-md'>
                    <h5 className="font-medium text-[24px]/[1.5]">365</h5>
                    <span className='flex items-center gap-1'>
                        Returns
                    </span>
                    <ReactApexChart options={chartData10.options} series={chartData10.series} type="line" height={55} />
                </div>
                <div className='card bg-sky-50 md:p-20 p-15 rounded-md'>
                    <h5 className="font-medium text-[24px]/[1.5]">65</h5>
                    <span className='flex items-center gap-1'>
                        Queries
                    </span>
                    <ReactApexChart options={chartData11.options} series={chartData11.series} type="line" height={55} />
                </div>
                <div className='card bg-purple-50 md:p-20 p-15 rounded-md'>
                    <h5 className="font-medium text-[24px]/[1.5]">2,055</h5>
                    <span className='flex items-center gap-1'>
                        Invoices
                    </span>
                    <ReactApexChart options={chartData12.options} series={chartData12.series} type="line" height={55} />
                </div>
            </div>
            <div className='grid xxl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-4'>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <ReactApexChart options={chartData13.options} series={chartData13.series} type="bar" width={155} height={65} />
                        <h4 className='mt-2 text-[28px]/[42px]'>457 512</h4>
                        <h5 className='flex items-center gap-1 text-[14px]/[20px]'>47% Average <IconTrendingUp className='w-[18px] h-[18px] min-w-[18px]' /></h5>
                    </div>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <ReactApexChart options={chartData14.options} series={chartData14.series} type="bar" width={155} height={65} />
                        <h4 className='mt-2 text-[28px]/[42px]'>236 512</h4>
                        <h5 className='flex items-center gap-1 text-[14px]/[20px]'>13% Average <IconTrendingDown className='w-[18px] h-[18px] min-w-[18px]' /></h5>
                    </div>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <ReactApexChart options={chartData15.options} series={chartData15.series} type="bar" width={155} height={65} />
                        <h4 className='mt-2 text-[28px]/[42px]'>236 512</h4>
                        <h5 className='flex items-center gap-1 text-[14px]/[20px]'>47% Average <IconTrendingUp className='w-[18px] h-[18px] min-w-[18px]' /></h5>
                    </div>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <ReactApexChart options={chartData16.options} series={chartData16.series} type="bar" width={155} height={65} />
                        <h4 className='mt-2 text-[28px]/[42px]'>236 512</h4>
                        <h5 className='flex items-center gap-1 text-[14px]/[20px]'>47% Average <IconTrendingUp className='w-[18px] h-[18px] min-w-[18px]' /></h5>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-4'>
                <div className='xl:col-span-4 col-span-12'>
                    <div className='flex items-center justify-between gap-2 mb-10'>
                        <h2 className='flex items-center gap-5 uppercase'>
                            <strong className='text-primary flex items-center'>
                                Total
                            </strong>
                            Revenue
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
                    <div className='card bg-card-color md:p-20 p-15 rounded-md flex flex-col items-center justify-center'>
                        <h4 className='mb-2 text-[28px]/[42px]'>Total Sale</h4>
                        <h6 className="font-bold">2,45,124</h6>
                        <ReactApexChart options={chartData17.options} series={chartData17.series} type="radialBar" width={170} height={170} />
                        <h6 className="font-bold">Satisfaction Rate</h6>
                        <h5 className='flex items-center gap-1 text-[14px]/[42px]'>47% Average <IconTrendingUp className='w-[18px] h-[18px] min-w-[18px]' /></h5>
                        <ReactApexChart options={chartData18.options} series={chartData18.series} type="bar" width={180} height={50} />
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 gap-4 xl:col-span-8 col-span-12'>
                    <div>
                        <div className='flex items-center justify-between gap-2 mb-10'>
                            <h2 className='flex items-center gap-5 uppercase'>
                                <strong className='text-primary flex items-center'>
                                    Total
                                </strong>
                                Income
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
                        <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                            <h4 className='mt-2 text-[28px]/[42px]'>236 512</h4>
                            <h5 className='flex items-center gap-1 text-[14px]/[20px]'>47% Average <IconTrendingUp className='w-[18px] h-[18px] min-w-[18px]' /></h5>
                            <ReactApexChart options={chartData19.options} series={chartData19.series} type="area" height={60} className="w-full" />
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center justify-between gap-2 mb-10'>
                            <h2 className='flex items-center gap-5 uppercase'>
                                <strong className='text-primary flex items-center'>
                                    Total
                                </strong>
                                Visitor
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
                        <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                            <h4 className='mt-2 text-[28px]/[42px]'>1,612</h4>
                            <h5 className='flex items-center gap-1 text-[14px]/[20px]'>13% Average <IconTrendingUp className='w-[18px] h-[18px] min-w-[18px]' /></h5>
                            <ReactApexChart options={chartData20.options} series={chartData20.series} type="area" height={60} className="w-full" />
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center justify-between gap-2 mb-10'>
                            <h2 className='flex items-center gap-5 uppercase'>
                                <strong className='text-primary flex items-center'>
                                    Total
                                </strong>
                                Visitor
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
                        <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                            <h4 className='mt-2 text-[28px]/[42px]'>512</h4>
                            <h5 className='flex items-center gap-1 text-[14px]/[20px]'>18% Average <IconTrendingDown className='w-[18px] h-[18px] min-w-[18px]' /></h5>
                            <ReactApexChart options={chartData21.options} series={chartData21.series} type="area" height={60} className="w-full" />
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center justify-between gap-2 mb-10'>
                            <h2 className='flex items-center gap-5 uppercase'>
                                <strong className='text-primary flex items-center'>
                                    Total
                                </strong>
                                Active Users
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
                        <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                            <h4 className='mt-2 text-[28px]/[42px]'>721</h4>
                            <h5 className='flex items-center gap-1 text-[14px]/[20px]'>17% Average <IconTrendingUp className='w-[18px] h-[18px] min-w-[18px]' /></h5>
                            <ReactApexChart options={chartData22.options} series={chartData22.series} type="area" height={60} className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
