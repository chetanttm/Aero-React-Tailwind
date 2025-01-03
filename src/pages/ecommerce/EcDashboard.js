import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import ReactApexChart from 'react-apexcharts';
import ReactDataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import {
    IconChartDonut,
    IconChartHistogram,
    IconCreditCard,
    IconDots,
    IconStar,
    IconStarFilled,
    IconTrendingDown,
    IconTrendingUp,
    IconX,
} from '@tabler/icons-react';
import {
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    ecommerce1,
    ecommerce2,
    ecommerce3,
    ecommerce4,
    ecommerce5,
    gallery2,
    placeholder,
} from '../../assets/images';

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

    const columnsPopularProduct = [
        {
            name: 'Item',
            selector: row => row.item,
        },
        {
            name: 'Views',
            selector: row => row.views,
            width: '90px'
        },
    ];

    const dataPopularProduct = [
        {
            item: <div className='flex items-center gap-4'>
                <img src={ecommerce1} alt="ecommerce product" className='w-[50px] h-[50px] min-w-[50px]' />
                <Link to="#" className='font-medium text-font-color-100'>PlayStation 4 1TB (Jet Black)</Link>
            </div>,
            views: '3,432',
        },
        {
            item: <div className='flex items-center gap-4'>
                <img src={ecommerce2} alt="ecommerce product" className='w-[50px] h-[50px] min-w-[50px]' />
                <Link to="#" className='font-medium text-font-color-100'>	Printed color block T-shirt</Link>
            </div>,
            views: '852',
        },
        {
            item: <div className='flex items-center gap-4'>
                <img src={ecommerce3} alt="ecommerce product" className='w-[50px] h-[50px] min-w-[50px]' />
                <Link to="#" className='font-medium text-font-color-100'>Wireless headphones</Link>
            </div>,
            views: '1321',
        },
        {
            item: <div className='flex items-center gap-4'>
                <img src={ecommerce4} alt="ecommerce product" className='w-[50px] h-[50px] min-w-[50px]' />
                <Link to="#" className='font-medium text-font-color-100'>	PlayStation 4 1TB (Jet Black)</Link>
            </div>,
            views: '980',
        },
        {
            item: <div className='flex items-center gap-4'>
                <img src={ecommerce5} alt="ecommerce product" className='w-[50px] h-[50px] min-w-[50px]' />
                <Link to="#" className='font-medium text-font-color-100'>Knit beanie with patch</Link>
            </div>,
            views: '2518',
        },
    ]

    const columnsVisitors = [
        {
            name: 'Contrary',
            selector: row => row.contrary,
            sortable: true,
        },
        {
            name: '2016',
            selector: row => row.year2016,
            sortable: true,
        },
        {
            name: '2019',
            selector: row => row.year2019,
            sortable: true,
        },
        {
            name: 'Change',
            selector: row => row.change,
            sortable: true,
        },
    ];

    const dataVisitors = [
        {
            contrary: 'USA',
            year2016: '2,009',
            year2019: '3,591',
            change: <div className='flex items-center gap-1'>7.01% <IconTrendingUp className='w-[16px] h-[16px] min-w-[16px] text-success' /></div>,
        },
        {
            contrary: 'India',
            year2016: '1,129',
            year2019: '1,361',
            change: <div className='flex items-center gap-1'>3.01% <IconTrendingUp className='w-[16px] h-[16px] min-w-[16px] text-success' /></div>,
        },
        {
            contrary: 'Canada',
            year2016: '2,009',
            year2019: '2,901',
            change: <div className='flex items-center gap-1'>9.01% <IconTrendingUp className='w-[16px] h-[16px] min-w-[16px] text-success' /></div>,
        },
        {
            contrary: 'Australia',
            year2016: '954',
            year2019: '901',
            change: <div className='flex items-center gap-1'>5.71% <IconTrendingDown className='w-[16px] h-[16px] min-w-[16px] text-danger' /></div>,
        },
        {
            contrary: 'Germany',
            year2016: '594',
            year2019: '500',
            change: <div className='flex items-center gap-1'>6.11% <IconTrendingDown className='w-[16px] h-[16px] min-w-[16px] text-danger' /></div>,
        },
        {
            contrary: 'Other',
            year2016: '4,236',
            year2019: '4,591',
            change: <div className='flex items-center gap-1'>9.15% <IconTrendingUp className='w-[16px] h-[16px] min-w-[16px] text-success' /></div>,
        },
    ]

    const columnsFilter = [
        {
            name: '#',
            selector: row => row.media,
            width: '80px'
        },
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Item',
            selector: row => row.item,
        },
        {
            name: 'Address',
            selector: row => row.address,
        },
        {
            name: 'Quantity',
            selector: row => row.quantity,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
    ];

    const dataFilter = [
        {
            media: <img src={placeholder} alt="Product img" className='w-40' />,
            name: 'Hossein',
            item: 'IPONE-7',
            address: 'Porterfield 508 Virginia Street Chicago, IL 60653',
            quantity: '3',
            status: <span className='px-2 py-[3px] inline-block rounded bg-success text-white text-[12px]/[1] font-bold'>DONE</span>,
        },
        {
            media: <img src={placeholder} alt="Product img" className='w-40' />,
            name: 'Camara',
            item: 'NOKIA-8',
            address: '2595 Pearlman Avenue Sudbury, MA 01776',
            quantity: '3',
            status: <span className='px-2 py-[3px] inline-block rounded bg-success text-white text-[12px]/[1] font-bold'>DONE</span>,
        },
        {
            media: <img src={placeholder} alt="Product img" className='w-40' />,
            name: 'Maryam',
            item: 'NOKIA-456',
            address: 'Porterfield 508 Virginia Street Chicago, IL 60653',
            quantity: '4',
            status: <span className='px-2 py-[3px] inline-block rounded bg-success text-white text-[12px]/[1] font-bold'>DONE</span>,
        },
        {
            media: <img src={placeholder} alt="Product img" className='w-40' />,
            name: 'Micheal',
            item: 'SAMSANG PRO',
            address: '508 Virginia Street Chicago, IL 60653',
            quantity: '1',
            status: <span className='px-2 py-[3px] inline-block rounded bg-success text-white text-[12px]/[1] font-bold'>DONE</span>,
        },
        {
            media: <img src={placeholder} alt="Product img" className='w-40' />,
            name: 'Frank',
            item: 'NOKIA-456',
            address: '1516 Holt Street West Palm Beach, FL 33401',
            quantity: '13',
            status: <span className='px-2 py-[3px] inline-block rounded bg-orange-500 text-white text-[12px]/[1] font-bold'>PENDING</span>,
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="eCommerce Dashboard" />
            <div className='grid xxl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-4'>
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
            <div className='grid xxl:grid-cols-[2fr_1fr] grid-cols-1 gap-4 mb-4'>
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
                        <div className='md:px-10 px-5 xxl:pb-4'>
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
                    <div className='react-data-table header-primary'>
                        <ReactDataTable
                            columns={columnsPopularProduct}
                            data={dataPopularProduct}
                        />
                    </div>
                </div>
            </div>
            <div className='grid xxl:grid-cols-[2fr_1fr] grid-cols-1 gap-4 mb-4'>
                <div className='card bg-card-color md:p-20 p-15 rounded-md truncate'>
                    <div className='flex items-start gap-20 pb-15 mb-15 border-b border-border-color last:pb-0 last:mb-0 last:border-0'>
                        <Link to="#">
                            <img src={avatar2} alt='user' className='w-[60px] h-[60px] min-w-[60px] rounded' />
                        </Link>
                        <div className='truncate'>
                            <h6 className="text-[14px]/[18px] font-bold">Hossein Shams</h6>
                            <p className='mb-1 truncate'>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
                            <div className='flex items-center md:gap-3 gap-2 flex-wrap'>
                                <span className="px-2 py-[3px] inline-block rounded bg-info text-white text-[12px]/[1] font-bold">iPhone 8</span>
                                <div className='flex items-center gap-1'>
                                    <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                </div>
                                <small>Dec 21, 2019</small>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start gap-20 pb-15 mb-15 border-b border-border-color last:pb-0 last:mb-0 last:border-0'>
                        <Link to="#">
                            <img src={avatar3} alt='user' className='w-[60px] h-[60px] min-w-[60px] rounded' />
                        </Link>
                        <div className='truncate'>
                            <h6 className="text-[14px]/[18px] font-bold">Tim Hank</h6>
                            <p className='mb-1 truncate'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                            <div className='flex items-center md:gap-3 gap-2 flex-wrap'>
                                <span className="px-2 py-[3px] inline-block rounded bg-info text-white text-[12px]/[1] font-bold">Nokia 8</span>
                                <div className='flex items-center gap-1'>
                                    <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    <Link to="#"><IconStar className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    <Link to="#"><IconStar className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    <Link to="#"><IconStar className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                </div>
                                <small>Dec 18, 2019</small>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start gap-20 pb-15 mb-15 border-b border-border-color last:pb-0 last:mb-0 last:border-0'>
                        <Link to="#">
                            <img src={avatar4} alt='user' className='w-[60px] h-[60px] min-w-[60px] rounded' />
                        </Link>
                        <div className='truncate'>
                            <h6 className="text-[14px]/[18px] font-bold">Maryam Amiri</h6>
                            <p className='mb-1 truncate'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                            <div className='flex items-center md:gap-3 gap-2 flex-wrap'>
                                <span className="px-2 py-[3px] inline-block rounded bg-info text-white text-[12px]/[1] font-bold">Samsung Galaxy S8</span>
                                <div className='flex items-center gap-1'>
                                    <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    <Link to="#"><IconStar className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    <Link to="#"><IconStar className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                </div>
                                <small>Dec 18, 2019</small>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start gap-20 pb-15 mb-15 border-b border-border-color last:pb-0 last:mb-0 last:border-0'>
                        <Link to="#">
                            <img src={avatar5} alt='user' className='w-[60px] h-[60px] min-w-[60px] rounded' />
                        </Link>
                        <div className='truncate'>
                            <h6 className="text-[14px]/[18px] font-bold">Gary Camara</h6>
                            <p className='mb-1 truncate'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            <div className='flex items-center md:gap-3 gap-2 flex-wrap'>
                                <span className="px-2 py-[3px] inline-block rounded bg-info text-white text-[12px]/[1] font-bold">HTC U11</span>
                                <div className='flex items-center gap-1'>
                                    <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    <Link to="#"><IconStar className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                </div>
                                <small>Dec 13, 2019</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card bg-card-color rounded-md overflow-hidden'>
                    <div className='flex max-h-[170px] relative before:w-full before:h-full before:absolute before:top-0 before:left-0 before:opacity-80 before:bg-gradient-to-r before:from-[#6f42c1] before:to-[#ffc107]'>
                        <img src={gallery2} alt='user cover' className='object-cover' />
                    </div>
                    <div className='md:p-20 p-15 text-center'>
                        <div className='relative mt-[-70px] text-center mb-2'>
                            <img src={avatar1} alt='user' className='w-[80px] h-[80px] min-w-[80px] mx-auto shadow-shadow-sm rounded-full p-[3px] bg-gradient-to-r from-[#6f42c1] to-[#ffc107]' />
                            <h5 className="mt-3 mb-1 text-[22px]/[30px] font-medium">Eliana Smith</h5>
                            <span>Designer, Developer, Traveler</span>
                        </div>
                        <button className="btn btn-primary">FOLLOW</button>
                        <div className='mt-6 flex items-center justify-center gap-2'>
                            <div className='flex-1'>
                                <h5 className="text-[22px]/[30px] font-medium">128</h5>
                                <small>Article</small>
                            </div>
                            <div className='flex-1'>
                                <h5 className="text-[22px]/[30px] font-medium">1,528</h5>
                                <small>Followers</small>
                            </div>
                            <div className='flex-1'>
                                <h5 className="text-[22px]/[30px] font-medium">321</h5>
                                <small>Following</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid xxl:grid-cols-[2fr_1fr] grid-cols-1 gap-4 mb-4'>
                <div>
                    <div className='flex items-center justify-between gap-2 mb-10'>
                        <h2 className='flex items-center gap-5 uppercase'>
                            <strong className='text-primary flex items-center'>
                                Top
                            </strong>
                            Selling Country
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
                    <div className='card bg-card-color md:p-20 p-15 rounded-md sm:h-[410px] h-[250px]'>
                        <VectorMap
                            map={worldMill}
                            backgroundColor='var(--card-color)'
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
                <div className='react-data-table header-primary xxl:mt-[34px]'>
                    <ReactDataTable
                        columns={columnsVisitors}
                        data={dataVisitors}
                    />
                </div>
            </div>
            <div>
                <div className='flex items-center justify-between gap-2 mb-10'>
                    <h2 className='flex items-center gap-5 uppercase'>
                        <strong className='text-primary flex items-center'>
                            Recent
                        </strong>
                        Orders
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
                <div className='react-data-table'>
                    <ReactDataTable
                        columns={columnsFilter}
                        data={dataFilter}
                    />
                </div>
            </div>
        </>
    )
}
