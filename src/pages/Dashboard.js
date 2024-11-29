import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import {
    IconBrandBehance,
    IconBrandDribbble,
    IconBrandPinterest,
    IconBugFilled,
    IconBuildingBank,
    IconDots,
    IconFileAnalytics,
    IconInfoCircle,
    IconMailFilled,
    IconMenu2,
    IconPrinter,
    IconReceiptRefund,
    IconShoppingCartFilled,
    IconShieldCheckFilled,
    IconTrafficLightsOff,
    IconTrendingUp,
    IconWorld,
    IconX,
    IconCaretDownFilled,
    IconSend2,
    IconArrowUp,
    IconArrowDown,
} from '@tabler/icons-react'
import ReactApexChart from 'react-apexcharts';
import { avatar11, avatar2, avatar3, avatar5 } from '../assets/images';
import { Link } from 'react-router-dom';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import C3Chart from 'react-c3js';

export default function Dashboard() {

    const breadcrumbItem = [
        {
            name: "Dashboard 1",
        },
    ];

    const chartData1 = {
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
            plotOptions: {
                bar: {
                    columnWidth: '40%',
                }
            },
        },
        series: [
            {
                data: [5, 2, 3, 7, 6, 4, 8, 1]
            }
        ]
    };

    const chartData2 = {
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
            plotOptions: {
                bar: {
                    columnWidth: '40%',
                }
            },
        },
        series: [
            {
                data: [8, 2, 6, 5, 1, 4, 4, 3]
            }
        ]
    };

    const chartData3 = {
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
            plotOptions: {
                bar: {
                    columnWidth: '40%',
                }
            },
        },
        series: [
            {
                data: [4, 4, 3, 9, 2, 1, 5, 7]
            }
        ]
    };

    const chartData4 = {
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
            plotOptions: {
                bar: {
                    columnWidth: '40%',
                }
            },
        },
        series: [
            {
                data: [7, 5, 3, 8, 4, 6, 2, 9]
            }
        ]
    };

    const chartData5 = {
        series: [
            {
                name: 'Returns',
                data: [7, 11, 5, 7, 9, 16, 15, 23, 14, 55],
            },
            {
                name: 'Queries',
                data: [13, 7, 9, 15, 9, 31, 8, 27, 42, 18],
            },
            {
                name: 'Revenue',
                data: [21, 8, 32, 18, 19, 17, 23, 12, 25, 37],
            }
        ],
        options: {
            colors: ['var(--chart-color1)', 'var(--chart-color5)', 'var(--chart-color2)'],
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
                strokeColors: ['var(--chart-color1)', 'var(--chart-color5)', 'var(--chart-color2)'],
                hover: {
                    size: 1,
                }
            },
            legend: {
                markers: {
                    strokeWidth: 0,
                    shape: 'square',
                    offsetX: -3,
                },
            },
            chart: {
                toolbar: {
                    show: false,
                },
                stacked: true,
            },
            grid: {
                borderColor: 'var(--border-color)',
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct'],
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
                max: 120,
                tickAmount: 12,
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

    const chartData6 = {
        series: [55, 25, 20],
        options: {
            labels: ['Arizona', 'Florida', 'Texas'],
            colors: ['var(--chart-color5)', 'var(--chart-color4)', 'var(--chart-color3)'],
            legend: {
                show: true,
                position: 'bottom',
                markers: {
                    strokeWidth: 0,
                    shape: 'square',
                    offsetX: -3,
                },
            },
        },
    };

    const chartData7 = {
        columns: [
            ['data1', 11, 8, 15, 7, 11, 13],
            ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'area-step',
        colors: {
            'data1': 'var(--primary)',
            'data2': 'var(--secondary)'
        },
        names: {
            'data1': 'Today',
            'data2': 'month'
        },
    };

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Dashboard" />
            <div className='mb-20 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
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
                        <div className="progress-bar w-[55%] bg-purple-600 h-full"></div>
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
            <div className='mb-20'>
                <div className='flex items-center justify-between gap-2 mb-10'>
                    <h2 className='flex items-center gap-5 uppercase'>
                        <strong className='text-primary flex items-center'>
                            <IconFileAnalytics className='w-[18px] h-[18px] min-w-[18px]' />
                            Sales
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
                <div className='mb-10 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
                    <div className='card bg-card-color md:p-20 p-15 rounded-md flex items-center justify-between gap-2'>
                        <div>
                            <h5 className="mb-2 font-medium text-[24px]/[1.5]">2,365</h5>
                            <span className='flex items-center gap-1'>
                                <IconBuildingBank className='w-[18px] h-[18px] min-w-[18px]' />
                                Revenue
                            </span>
                        </div>
                        <ReactApexChart options={chartData1.options} series={chartData1.series} type="bar" width={60} height={55} />
                    </div>
                    <div className='card bg-card-color md:p-20 p-15 rounded-md flex items-center justify-between gap-2'>
                        <div>
                            <h5 className="mb-2 font-medium text-[24px]/[1.5]">365</h5>
                            <span className='flex items-center gap-1'>
                                <IconReceiptRefund className='w-[18px] h-[18px] min-w-[18px]' />
                                Returns
                            </span>
                        </div>
                        <ReactApexChart options={chartData2.options} series={chartData2.series} type="bar" width={60} height={55} />
                    </div>
                    <div className='card bg-card-color md:p-20 p-15 rounded-md flex items-center justify-between gap-2'>
                        <div>
                            <h5 className="mb-2 font-medium text-[24px]/[1.5]">65</h5>
                            <span className='flex items-center gap-1'>
                                <IconInfoCircle className='w-[18px] h-[18px] min-w-[18px]' />
                                Queries
                            </span>
                        </div>
                        <ReactApexChart options={chartData3.options} series={chartData3.series} type="bar" width={60} height={55} />
                    </div>
                    <div className='card bg-card-color md:p-20 p-15 rounded-md flex items-center justify-between gap-2'>
                        <div>
                            <h5 className="mb-2 font-medium text-[24px]/[1.5]">2,055</h5>
                            <span className='flex items-center gap-1'>
                                <IconPrinter className='w-[18px] h-[18px] min-w-[18px]' />
                                Invoices
                            </span>
                        </div>
                        <ReactApexChart options={chartData4.options} series={chartData4.series} type="bar" width={60} height={55} />
                    </div>
                </div>
                <div className='card bg-card-color md:p-20 rounded-md'>
                    <ReactApexChart options={chartData5.options} series={chartData5.series} type="area" height={350} />
                </div>
            </div>
            <div className='mb-20 grid grid-cols-12 gap-4'>
                <div className='lg:col-span-3 sm:col-span-6 col-span-12 card overflow-hidden bg-card-color md:p-20 p-15 rounded-md'>
                    <button className='relative'>
                        <IconMenu2 />
                    </button>
                    <div className='mb-6'>
                        <img src={avatar11} alt='user profile' className='ms-auto rounded-full max-w-[250px] max-h-[250px] aspect-square mt-[-90px] me-[-80px]' />
                    </div>
                    <div className='mb-6'>
                        <h5 className="mb-1 text-[22px]/[1.5] font-medium">Eliana Smith</h5>
                        <small className="text-font-color-100">UI/UX Desiger</small>
                    </div>
                    <ul className='flex justify-end'>
                        <li className='flex'>
                            <Link to="#" className='text-primary inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                <IconBrandDribbble />
                            </Link>
                        </li>
                        <li className='flex'>
                            <Link to="#" className='text-primary inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                <IconBrandBehance />
                            </Link>
                        </li>
                        <li className='flex'>
                            <Link to="#" className='text-primary inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                <IconBrandPinterest />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='lg:col-span-3 sm:col-span-6 col-span-12'>
                    <div className='card flex flex-col items-center bg-card-color md:p-20 p-15 rounded-md mb-4'>
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
                        <div className='relative mb-4 flex items-center justify-center w-[54px] h-[54px] min-w-[54px] rounded-full text-[#0dcaf0] bg-[rgba(13,202,240,0.3)] after:absolute after:top-[50%] after:start-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:w-[66px] after:h-[66px] after:min-w-[66px] after:rounded-full after:bg-[rgba(13,202,240,0.2)]'>
                            <IconShieldCheckFilled />
                        </div>
                        <h4 className="text-[26px]/[1.5] font-medium">01.8k</h4>
                        <span className="text-font-color-100 inline-block mb-1">Submitted Tickers</span>
                        <div className='text-success flex items-center gap-1'>
                            <IconTrendingUp className='w-[20px] h-[20px] min-w-[20px]' />
                            <span>95.5%</span>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-6 col-span-12 card bg-card-color md:p-20 p-15 rounded-md'>
                    <ul className='max-h-[calc(418px-50px-40px)] overflow-auto no-scrollbar'>
                        <li className='mb-3 flex gap-3'>
                            <img src={avatar3} alt='user profile' className='w-[40px] h-[40px] min-w-[40px] rounded-full' />
                            <ul className='flex flex-col gap-1'>
                                <li className='flex'>
                                    <small>Frank 11:00AM</small>
                                </li>
                                <li className='flex'>
                                    <span className="px-15 py-5 rounded text-white bg-blue">Hello, Michael</span>
                                </li>
                                <li className='flex'>
                                    <span className="px-15 py-5 rounded text-white bg-blue">How are you!</span>
                                </li>
                            </ul>
                        </li>
                        <li className='mb-3 flex gap-3 justify-end'>
                            <ul className='flex flex-col gap-1 justify-end'>
                                <li className='flex justify-end'>
                                    <small>11:10AM</small>
                                </li>
                                <li className='flex'>
                                    <span className="px-15 py-5 rounded bg-border-color">Hello, Frank</span>
                                </li>
                            </ul>
                        </li>
                        <li className='mb-3 flex gap-3 justify-end'>
                            <ul className='flex flex-col gap-1 justify-end'>
                                <li className='flex justify-end'>
                                    <small>11:11AM</small>
                                </li>
                                <li className='flex'>
                                    <span className="px-15 py-5 rounded bg-border-color">I'm fine what about you?</span>
                                </li>
                            </ul>
                        </li>
                        <li className='mb-3 flex gap-3'>
                            <img src={avatar2} alt='user profile' className='w-[40px] h-[40px] min-w-[40px] rounded-full' />
                            <ul className='flex flex-col gap-1'>
                                <li className='flex'>
                                    <small>Gary 11:13AM</small>
                                </li>
                                <li className='flex'>
                                    <span className="px-15 py-5 rounded text-white bg-info">Hello, Michael and Frank</span>
                                </li>
                            </ul>
                        </li>
                        <li className='mb-3 flex gap-3'>
                            <img src={avatar5} alt='user profile' className='w-[40px] h-[40px] min-w-[40px] rounded-full' />
                            <ul className='flex flex-col gap-1'>
                                <li className='flex'>
                                    <small>Hossein 11:14AM</small>
                                </li>
                                <li className='flex'>
                                    <span className="px-15 py-5 rounded text-white bg-blue">Hello, team</span>
                                </li>
                                <li className='flex'>
                                    <span className="px-15 py-5 rounded text-white bg-blue">Please let me know your requirements.</span>
                                </li>
                                <li className='flex'>
                                    <span className="px-15 py-5 rounded text-white bg-blue">How would like to connect with us?</span>
                                </li>
                            </ul>
                        </li>
                        <li className='mb-3 flex gap-3 justify-end'>
                            <ul className='flex flex-col gap-1 justify-end'>
                                <li className='flex justify-end'>
                                    <small>11:15AM</small>
                                </li>
                                <li className='flex'>
                                    <span className="px-15 py-5 rounded bg-border-color">Hello, Hossein</span>
                                </li>
                                <li className='flex'>
                                    <span className="px-15 py-5 rounded bg-border-color">Meeting on conference room at 12:00PM</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className='form-control flex items-stretch pt-3'>
                        <button className='flex items-center gap-1 px-[18px] py-1 rounded-s-lg bg-grey text-white'>
                            Add
                            <IconCaretDownFilled className='w-[18px] h-[18px] min-w-[18px]' />
                        </button>
                        <input type='text' placeholder='Enter text here...' className='form-input !rounded-none' />
                        <button className='flex items-center gap-1 px-3 py-1 rounded-e-lg border border-border-color'>
                            <IconSend2 />
                        </button>
                    </div>
                </div>
            </div>
            <div className='mb-20 grid lg:grid-cols-[2fr_1fr] grid-cols-1 gap-4'>
                <div>
                    <div className='flex items-center justify-between gap-2 mb-10'>
                        <h2 className='flex items-center gap-5 uppercase'>
                            <strong className='text-primary flex items-center'>
                                Visitors
                            </strong>
                            Statistics
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
                    <div className='card bg-card-color md:p-20 p-15 rounded-md h-[410px]'>
                        <VectorMap
                            map={worldMill}
                            backgroundColor='var(--bg-dark)'
                            regionStyle={{
                                initial: {
                                    fill: "var(--font-color-200)"
                                },
                                hover: {
                                    fill: "var(--primary)"
                                },
                            }}
                            series={{
                                regions: [{
                                    attribute: 'fill',
                                    values: {
                                        'IN': 'var(--danger)',
                                        'AU': 'var(--success)',
                                        'US': 'var(--sky)',
                                        'GB': 'var(--warning)',
                                        'SA': 'var(--info)',
                                    }
                                }]
                            }}
                        />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between gap-2 mb-10'>
                        <h2 className='flex items-center gap-5 uppercase'>
                            <strong className='text-primary flex items-center'>
                                Distribution
                            </strong>
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
                    <div className='card bg-card-color md:p-20 p-15 rounded-md h-full'>
                        <ReactApexChart options={chartData6.options} series={chartData6.series} type="pie" height="300" className="max-w-[300px] mx-auto" />
                        <div className='mt-6 text-center'>
                            <button className='btn btn-primary'>View More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-between gap-2 mb-10'>
                    <h2 className='flex items-center gap-5 uppercase'>
                        <strong className='text-primary flex items-center'>
                            Traffic
                        </strong>
                        Source
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
                <div className='card grid lg:grid-cols-[2fr_1fr] md:grid-cols-2 grid-cols-1 gap-4 bg-card-color md:p-20 p-15 rounded-md'>
                    <C3Chart data={chartData7} size={{ height: 200 }} className="md:-ms-20 -ms-15" />
                    <div>
                        <p className='mb-6'>
                            More than 30% percent of users come from direct links. Check details page for more information.
                        </p>
                        <div className="mb-6 progress overflow-hidden h-[8px] bg-border-color rounded-full">
                            <div className="progress-bar w-[42%] bg-orange-300 h-full"></div>
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <h5 className='text-[22px]/[1.5] font-medium flex items-center gap-1'>
                                    21,521
                                    <IconArrowUp />
                                </h5>
                                <small>Today</small>
                            </div>
                            <div>
                                <h5 className='text-[22px]/[1.5] font-medium flex items-center gap-1'>
                                    %12.35
                                    <IconArrowDown />
                                </h5>
                                <small>Last month %</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
