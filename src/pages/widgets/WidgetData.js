import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import ReactApexChart from 'react-apexcharts';
import {
    IconBugFilled,
    IconCreditCardFilled,
    IconHeadphonesFilled,
    IconMailFilled,
    IconServer2,
    IconSettingsFilled,
    IconShoppingCartFilled,
    IconTicket,
    IconTrafficLightsOff,
    IconTrendingDown,
    IconTrendingUp,
    IconWorld,
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
        </>
    )
}
