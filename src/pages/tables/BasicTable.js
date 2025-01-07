import React, { useState } from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import {
    IconArrowNarrowUp,
    IconBrandFacebook,
    IconBrandGoogle,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBrandYoutubeFilled,
    IconCaretUpFilled,
    IconEdit,
    IconMessageCircle2,
    IconTrash
} from '@tabler/icons-react'
import {
    avatar1,
    avatar10,
    avatar2,
    avatar3,
    avatar4,
    avatar6,
    avatar7,
    avatar8,
    avatar9
} from '../../assets/images'
import { IconArrowNarrowDown } from '@tabler/icons-react';
import { IconBrandGoogleFilled } from '@tabler/icons-react';
import ReactApexChart from 'react-apexcharts';
import { IconThumbUp } from '@tabler/icons-react';

export default function BasicTable() {

    const breadcrumbItem = [
        {
            name: "Tables",
        },
        {
            name: "Basic Tables",
        },
    ]

    const [isChecked, setIsChecked] = useState(Array(4).fill(false));

    const handleAllCheck = () => {
        const allChecked = isChecked.every(checked => checked);
        setIsChecked(Array(4).fill(!allChecked));
    };

    const handleSingleCheck = (index) => {
        const newCheckboxes = [...isChecked];
        newCheckboxes[index] = !newCheckboxes[index];
        setIsChecked(newCheckboxes);
    };

    const chartData1 = {
        options: {
            stroke: {
                width: 1.5,
                curve: 'straight',
            },
            fill: {
                type: "solid",
            },
            colors: ['var(--chart-color1)'],
            dataLabels: {
                enabled: false
            },
            grid: {
                show: false,
            },
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6, 7, 8],
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: 'var(--danger)',
                        dashArray: 0,
                    },
                }
            },
            yaxis: {
                show: false,
                min: 0,
                max: 8,
                tickAmount: 1,
            },
            tooltip: {
                x: {
                    show: false,
                },
                style: {
                    fontFamily: 'var(--font-family)',
                },
            },
            markers: {
                size: 0.5,
                strokeColors: ['var(--text-primary)'],
                hover: {
                    size: 0.5,
                }
            },
        },
        series: [
            {
                name: "",
                data: [3, 5, 1, 6, 5, 4, 8, 3]
            }
        ]
    };

    const chartData2 = {
        options: {
            stroke: {
                width: 1.5,
                curve: 'straight',
            },
            fill: {
                type: "solid",
            },
            colors: ['var(--chart-color5)'],
            dataLabels: {
                enabled: false
            },
            grid: {
                show: false,
            },
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6, 7, 8],
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: 'var(--danger)',
                        dashArray: 0,
                    },
                }
            },
            yaxis: {
                show: false,
                min: 0,
                max: 6,
                tickAmount: 1,
            },
            tooltip: {
                x: {
                    show: false,
                },
                style: {
                    fontFamily: 'var(--font-family)',
                },
            },
            markers: {
                size: 0.5,
                strokeColors: ['var(--text-primary)'],
                hover: {
                    size: 0.5,
                }
            },
        },
        series: [
            {
                name: "",
                data: [4, 6, 3, 2, 5, 6, 5, 4]
            }
        ]
    };

    const chartData3 = {
        options: {
            stroke: {
                width: 1.5,
                curve: 'straight',
            },
            fill: {
                type: "solid",
            },
            colors: ['var(--chart-color3)'],
            dataLabels: {
                enabled: false
            },
            grid: {
                show: false,
            },
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6, 7, 8],
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: 'var(--danger)',
                        dashArray: 0,
                    },
                }
            },
            yaxis: {
                show: false,
                min: 0,
                max: 8,
                tickAmount: 1,
            },
            tooltip: {
                x: {
                    show: false,
                },
                style: {
                    fontFamily: 'var(--font-family)',
                },
            },
            markers: {
                size: 0.5,
                strokeColors: ['var(--text-primary)'],
                hover: {
                    size: 0.5,
                }
            },
        },
        series: [
            {
                name: "",
                data: [7, 3, 2, 1, 5, 4, 6, 8]
            }
        ]
    };

    const chartData4 = {
        options: {
            stroke: {
                width: 1.5,
                curve: 'straight',
            },
            fill: {
                type: "solid",
            },
            colors: ['var(--chart-color4)'],
            dataLabels: {
                enabled: false
            },
            grid: {
                show: false,
            },
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6, 7, 8],
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: 'var(--danger)',
                        dashArray: 0,
                    },
                }
            },
            yaxis: {
                show: false,
                min: 0,
                max: 6,
                tickAmount: 1,
            },
            tooltip: {
                x: {
                    show: false,
                },
                style: {
                    fontFamily: 'var(--font-family)',
                },
            },
            markers: {
                size: 0.5,
                strokeColors: ['var(--text-primary)'],
                hover: {
                    size: 0.5,
                }
            },
        },
        series: [
            {
                name: "",
                data: [3, 1, 2, 5, 4, 6, 2, 3]
            }
        ]
    };

    const chartData5 = {
        options: {
            stroke: {
                width: 1.5,
                curve: 'straight',
            },
            fill: {
                type: "solid",
            },
            colors: ['var(--chart-color1)'],
            dataLabels: {
                enabled: false
            },
            grid: {
                show: false,
            },
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6],
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: 'var(--danger)',
                        dashArray: 0,
                    },
                }
            },
            yaxis: {
                show: false,
                min: 0,
                max: 8,
                tickAmount: 1,
            },
            tooltip: {
                enabled: false,
            },
            markers: {
                size: 0.5,
                strokeColors: ['var(--text-primary)'],
                hover: {
                    size: 0.5,
                }
            },
        },
        series: [
            {
                name: "",
                data: [3, 5, 1, 4, 8, 3]
            }
        ]
    };

    const chartData6 = {
        options: {
            stroke: {
                width: 1.5,
                curve: 'straight',
            },
            fill: {
                type: "solid",
            },
            colors: ['var(--chart-color2)'],
            dataLabels: {
                enabled: false
            },
            grid: {
                show: false,
            },
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6],
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: 'var(--danger)',
                        dashArray: 0,
                    },
                }
            },
            yaxis: {
                show: false,
                min: -6,
                max: 6,
                tickAmount: 1,
            },
            tooltip: {
                enabled: false,
            },
            markers: {
                size: 0.5,
                strokeColors: ['var(--text-primary)'],
                hover: {
                    size: 0.5,
                }
            },
        },
        series: [
            {
                name: "",
                data: [4, -5, 5, 6, -2, 4]
            }
        ]
    };

    const chartData7 = {
        options: {
            stroke: {
                width: 1.5,
                curve: 'straight',
            },
            fill: {
                type: "solid",
            },
            colors: ['var(--chart-color5)'],
            dataLabels: {
                enabled: false
            },
            grid: {
                show: false,
            },
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6],
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: 'var(--danger)',
                        dashArray: 0,
                    },
                }
            },
            yaxis: {
                show: false,
                min: -6,
                max: 6,
                tickAmount: 1,
            },
            tooltip: {
                enabled: false,
            },
            markers: {
                size: 0.5,
                strokeColors: ['var(--text-primary)'],
                hover: {
                    size: 0.5,
                }
            },
        },
        series: [
            {
                name: "",
                data: [-5, 3, 5, -2, 6, -3]
            }
        ]
    };

    const chartData8 = {
        options: {
            stroke: {
                width: 1.5,
                curve: 'straight',
            },
            fill: {
                type: "solid",
            },
            colors: ['var(--chart-color4)'],
            dataLabels: {
                enabled: false
            },
            grid: {
                show: false,
            },
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6],
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: 'var(--danger)',
                        dashArray: 0,
                    },
                }
            },
            yaxis: {
                show: false,
                min: 0,
                max: 6,
                tickAmount: 1,
            },
            tooltip: {
                enabled: false,
            },
            markers: {
                size: 0.5,
                strokeColors: ['var(--text-primary)'],
                hover: {
                    size: 0.5,
                }
            },
        },
        series: [
            {
                name: "",
                data: [3, 1, 2, 5, 4, 3]
            }
        ]
    };

    const chartData9 = {
        options: {
            stroke: {
                width: 1.5,
                curve: 'straight',
            },
            fill: {
                type: "solid",
            },
            colors: ['var(--chart-color3)'],
            dataLabels: {
                enabled: false
            },
            grid: {
                show: false,
            },
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6],
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: 'var(--danger)',
                        dashArray: 0,
                    },
                }
            },
            yaxis: {
                show: false,
                min: 0,
                max: 6,
                tickAmount: 1,
            },
            tooltip: {
                enabled: false,
            },
            markers: {
                size: 0.5,
                strokeColors: ['var(--text-primary)'],
                hover: {
                    size: 0.5,
                }
            },
        },
        series: [
            {
                name: "",
                data: [2, 1, 2, 6, 4, 2]
            }
        ]
    };

    return (
        <>
            <Breadcrumb title="Basic Tables" breadcrumbItem={breadcrumbItem} />
            <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
                <div className='text-[16px]/[19.2px] font-medium mb-30'>
                    Basic Example 1
                </div>
                <div className='overflow-auto'>
                    <table className='w-full min-w-[767px]'>
                        <thead>
                            <tr>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    #
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Patients
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Adress
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    START Date
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    END Date
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    1
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    John
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <p className='text-sky'>
                                        70 Bowman St. South Windsor, CT 06074
                                    </p>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Sept 13, 2017
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Sept 16, 2017
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <span className='py-1 px-2 uppercase text-[10.5px]/[12px] border border-current text-success rounded'>
                                        Admit
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    2
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Jack Bird
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <p className='text-sky'>
                                        123 6th St. Melbourne, FL 32904
                                    </p>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Sept 13, 2017
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Sept 22, 2017
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <span className='py-1 px-2 uppercase text-[10.5px]/[12px] border border-current text-font-color-100 rounded'>
                                        DISCHARGE
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    3
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Dean Otto
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <p className='text-sky'>
                                        123 6th St. Melbourne, FL 32904
                                    </p>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Sept 13, 2017
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Sept 23, 2017
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <span className='py-1 px-2 uppercase text-[10.5px]/[12px] border border-current text-success rounded'>
                                        Admit
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    4
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Jack Bird
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <p className='text-sky'>
                                        4 Shirley Ave. West Chicago, IL 60185
                                    </p>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Sept 17, 2017
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Sept 20, 2017
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <span className='py-1 px-2 uppercase text-[10.5px]/[12px] border border-current text-font-color-100 rounded'>
                                        DISCHARGE
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    5
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Hughe L.
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <p className='text-sky'>
                                        4 Shirley Ave. West Chicago, IL 60185
                                    </p>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Sept 18, 2017
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Sept 18, 2017
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <span className='py-1 px-2 uppercase text-[10.5px]/[12px] border border-current text-success rounded'>
                                        Admit
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
                <div className='text-[16px]/[19.2px] font-medium mb-30'>
                    Basic Example 2
                </div>
                <div className='overflow-auto'>
                    <table className='w-full min-w-[767px]'>
                        <thead>
                            <tr>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={isChecked.every(checked => checked)}
                                            onChange={handleAllCheck}
                                        />
                                    </div>
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Name
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Phone
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Address
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='hover:bg-body-color'>
                                <td className='p-3 border-t border-border-color'>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={isChecked[0]}
                                            onChange={() => handleSingleCheck(0)}
                                        />
                                    </div>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <div className='flex items-center gap-10'>
                                        <img src={avatar1} alt='profile' width="40" height="40" className='w-[40px] h-[40px] border border-border-color shadow-medium object-cover rounded-full' />
                                        <p className='font-semibold'>
                                            John Smith
                                        </p>
                                        <span className='py-1 px-2 uppercase text-[10.5px]/[12px] border border-current text-font-color-100 rounded'>
                                            Family
                                        </span>
                                    </div>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    264-625-2583
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    123 6th St. Melbourne, FL 32904
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <div className='flex items-stretch gap-10'>
                                        <button className='bg-sky rounded-[4px] px-10 py-[8px]'>
                                            <IconEdit className='text-white w-[18px] h-[18px]' />
                                        </button>
                                        <button className='bg-danger rounded-[4px] px-10 py-[8px]'>
                                            <IconTrash className='text-white w-[18px] h-[18px]' />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className='hover:bg-body-color'>
                                <td className='p-3 border-t border-border-color'>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={isChecked[1]}
                                            onChange={() => handleSingleCheck(1)}
                                        />
                                    </div>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <div className='flex items-center gap-10'>
                                        <img src={avatar2} alt='profile' width="40" height="40" className='w-[40px] h-[40px] border border-border-color shadow-medium object-cover rounded-full' />
                                        <p className='font-semibold'>
                                            Hossein Shams
                                        </p>
                                        <span className='py-1 px-2 uppercase text-[10.5px]/[12px] border border-current text-blue rounded'>
                                            GOOGLE
                                        </span>
                                    </div>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    264-625-5689
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    44 Shirley Ave. West Chicago, IL 60185
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <div className='flex items-stretch gap-10'>
                                        <button className='bg-sky rounded-[4px] px-10 py-[8px]'>
                                            <IconEdit className='text-white w-[18px] h-[18px]' />
                                        </button>
                                        <button className='bg-danger rounded-[4px] px-10 py-[8px]'>
                                            <IconTrash className='text-white w-[18px] h-[18px]' />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className='hover:bg-body-color'>
                                <td className='p-3 border-t border-border-color'>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={isChecked[2]}
                                            onChange={() => handleSingleCheck(2)}
                                        />
                                    </div>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <div className='flex items-center gap-10'>
                                        <img src={avatar3} alt='profile' width="40" height="40" className='w-[40px] h-[40px] border border-border-color shadow-medium object-cover rounded-full' />
                                        <p className='font-semibold'>
                                            Frank Camly
                                        </p>
                                    </div>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    264-625-9999
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    123 6th St. Melbourne, FL 32904
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <div className='flex items-stretch gap-10'>
                                        <button className='bg-sky rounded-[4px] px-10 py-[8px]'>
                                            <IconEdit className='text-white w-[18px] h-[18px]' />
                                        </button>
                                        <button className='bg-danger rounded-[4px] px-10 py-[8px]'>
                                            <IconTrash className='text-white w-[18px] h-[18px]' />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className='hover:bg-body-color'>
                                <td className='p-3 border-t border-border-color'>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={isChecked[3]}
                                            onChange={() => handleSingleCheck(3)}
                                        />
                                    </div>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <div className='flex items-center gap-10'>
                                        <img src={avatar4} alt='profile' width="40" height="40" className='w-[40px] h-[40px] border border-border-color shadow-medium object-cover rounded-full' />
                                        <p className='font-semibold'>
                                            Tim Hank
                                        </p>
                                        <span className='py-1 px-2 uppercase text-[10.5px]/[12px] border border-current text-font-color-100 rounded'>
                                            Family
                                        </span>
                                    </div>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    264-625-1212
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    70 Bowman St. South Windsor, CT 06074
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <div className='flex items-stretch gap-10'>
                                        <button className='bg-sky rounded-[4px] px-10 py-[8px]'>
                                            <IconEdit className='text-white w-[18px] h-[18px]' />
                                        </button>
                                        <button className='bg-danger rounded-[4px] px-10 py-[8px]'>
                                            <IconTrash className='text-white w-[18px] h-[18px]' />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-30 mb-30'>
                <div className='card bg-card-color rounded-md md:p-20 p-15'>
                    <div className='text-[16px]/[19.2px] font-medium mb-30'>
                        Basic Example 3
                    </div>
                    <div className='overflow-auto'>
                        <table className='w-full min-w-[549px]'>
                            <thead>
                                <tr>
                                    <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                        Media
                                    </th>
                                    <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                        Name
                                    </th>
                                    <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                        Spent
                                    </th>
                                    <th align='right' className='border-t border-b-2 border-border-color p-3'>
                                        Change
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='hover:bg-body-color'>
                                    <td className='p-3 border-t border-border-color'>
                                        <IconBrandFacebook className='w-[30px] h-[30px] stroke-[1.5]' />
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-[16px]/[19.2px] font-medium'>
                                            Facebook Ads
                                        </p>
                                        <p>
                                            1.2k Likes, 418 Shares
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-[16px]/[19.2px] font-medium'>
                                            $ 402
                                        </p>
                                        <p className='text-font-color-100'>
                                            Spent
                                        </p>
                                    </td>
                                    <td align='right' className='p-3 border-t border-border-color'>
                                        <p className='text-success inline-flex items-center'>
                                            23
                                            <IconArrowNarrowUp className='w-[20px] h-[20px]' />
                                        </p>
                                        <p className='text-font-color-100'>
                                            up
                                        </p>
                                    </td>
                                </tr>
                                <tr className='hover:bg-body-color'>
                                    <td className='p-3 border-t border-border-color'>
                                        <IconBrandTwitter className='w-[30px] h-[30px] stroke-[1.5]' />
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-[16px]/[19.2px] font-medium'>
                                            Twitter Ads
                                        </p>
                                        <p>
                                            1k Likes, 128 Shares
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-[16px]/[19.2px] font-medium'>
                                            $ 489
                                        </p>
                                        <p className='text-font-color-100'>
                                            Spent
                                        </p>
                                    </td>
                                    <td align='right' className='p-3 border-t border-border-color'>
                                        <p className='text-danger inline-flex items-center'>
                                            -9
                                            <IconArrowNarrowDown className='w-[20px] h-[20px]' />
                                        </p>
                                        <p className='text-font-color-100'>
                                            down
                                        </p>
                                    </td>
                                </tr>
                                <tr className='hover:bg-body-color'>
                                    <td className='p-3 border-t border-border-color'>
                                        <IconBrandInstagram className='w-[30px] h-[30px] stroke-[1.5]' />
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-[16px]/[19.2px] font-medium'>
                                            Instagram Post
                                        </p>
                                        <p>
                                            1k Likes, 228 Shares
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-[16px]/[19.2px] font-medium'>
                                            $ 718
                                        </p>
                                        <p className='text-font-color-100'>
                                            Spent
                                        </p>
                                    </td>
                                    <td align='right' className='p-3 border-t border-border-color'>
                                        <p className='text-success inline-flex items-center'>
                                            16
                                            <IconArrowNarrowUp className='w-[20px] h-[20px]' />
                                        </p>
                                        <p className='text-font-color-100'>
                                            up
                                        </p>
                                    </td>
                                </tr>
                                <tr className='hover:bg-body-color'>
                                    <td className='p-3 border-t border-border-color'>
                                        <IconBrandLinkedin className='w-[30px] h-[30px] stroke-[1.5]' />
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-[16px]/[19.2px] font-medium'>
                                            LinkedIn Post
                                        </p>
                                        <p>
                                            1.2k Likes, 418 Shares
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-[16px]/[19.2px] font-medium'>
                                            $ 768
                                        </p>
                                        <p className='text-font-color-100'>
                                            Spent
                                        </p>
                                    </td>
                                    <td align='right' className='p-3 border-t border-border-color'>
                                        <p className='text-success inline-flex items-center'>
                                            27
                                            <IconArrowNarrowUp className='w-[20px] h-[20px]' />
                                        </p>
                                        <p className='text-font-color-100'>
                                            up
                                        </p>
                                    </td>
                                </tr>
                                <tr className='hover:bg-body-color'>
                                    <td className='p-3 border-t border-border-color'>
                                        <IconBrandGoogle className='w-[30px] h-[30px] stroke-[1.5]' />
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-[16px]/[19.2px] font-medium'>
                                            Google +
                                        </p>
                                        <p>
                                            1.2k Likes, 418 Shares
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-[16px]/[19.2px] font-medium'>
                                            $ 1768
                                        </p>
                                        <p className='text-font-color-100'>
                                            Spent
                                        </p>
                                    </td>
                                    <td align='right' className='p-3 border-t border-border-color'>
                                        <p className='text-success inline-flex items-center'>
                                            27
                                            <IconArrowNarrowUp className='w-[20px] h-[20px]' />
                                        </p>
                                        <p className='text-font-color-100'>
                                            up
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='card bg-card-color rounded-md md:p-20 p-15'>
                    <div className='text-[16px]/[19.2px] font-medium mb-30'>
                        Basic Example 4
                    </div>
                    <div className='overflow-auto'>
                        <table className='w-full min-w-[549px]'>
                            <thead>
                                <tr>
                                    <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                        Media
                                    </th>
                                    <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                        Name
                                    </th>
                                    <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                        Like
                                    </th>
                                    <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                        Comments
                                    </th>
                                    <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                        Share
                                    </th>
                                    <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                        Members
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='hover:bg-body-color'>
                                    <td className='p-3 border-t border-border-color'>
                                        <IconBrandLinkedin className='w-[40px] h-[40px] bg-blue-100 rounded-full text-white p-2 stroke-[1.5]' />
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-[16px]/[19.2px]'>
                                            LINKED IN
                                        </p>
                                        <p className='text-font-color-100'>
                                            Florida, United States
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        19K
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        14K
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        10K
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <span className='py-1 px-2 uppercase text-[10.5px]/[12px] border border-current text-success rounded'>
                                            2341
                                        </span>
                                    </td>
                                </tr>
                                <tr className='hover:bg-body-color'>
                                    <td className='p-3 border-t border-border-color'>
                                        <IconBrandTwitter className='w-[40px] h-[40px] bg-sky rounded-full text-white p-2 stroke-[1.5]' />
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-[16px]/[19.2px]'>
                                            TWITTER
                                        </p>
                                        <p className='text-font-color-100'>
                                            Arkansas, United States
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        7K
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        11K
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        21K
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <span className='py-1 px-2 uppercase text-[10.5px]/[12px] border border-current text-success rounded'>
                                            952
                                        </span>
                                    </td>
                                </tr>
                                <tr className='hover:bg-body-color'>
                                    <td className='p-3 border-t border-border-color'>
                                        <IconBrandFacebook className='w-[40px] h-[40px] bg-blue-100 rounded-full text-white p-2 stroke-[1.5]' />
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-[16px]/[19.2px]'>
                                            FACEBOOK
                                        </p>
                                        <p className='text-font-color-100'>
                                            Illunois, United States
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        15K
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        18K
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        8K
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <span className='py-1 px-2 uppercase text-[10.5px]/[12px] border border-current text-success rounded'>
                                            6127
                                        </span>
                                    </td>
                                </tr>
                                <tr className='hover:bg-body-color'>
                                    <td className='p-3 border-t border-border-color'>
                                        <IconBrandGoogleFilled className='w-[40px] h-[40px] bg-warning rounded-full text-white p-2 stroke-[1.5]' />
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-[16px]/[19.2px]'>
                                            GOOGLE PLUS
                                        </p>
                                        <p className='text-font-color-100'>
                                            Arizona, United States
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        15K
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        18K
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        154K
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <span className='py-1 px-2 uppercase text-[10.5px]/[12px] border border-current text-success rounded'>
                                            325
                                        </span>
                                    </td>
                                </tr>
                                <tr className='hover:bg-body-color'>
                                    <td className='p-3 border-t border-border-color'>
                                        <IconBrandYoutubeFilled className='w-[40px] h-[40px] bg-danger-100 rounded-full text-white p-2 stroke-[1.5]' />
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-[16px]/[19.2px]'>
                                            YOUTUBE
                                        </p>
                                        <p className='text-font-color-100'>
                                            Alaska, United States
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        15K
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        18K
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        200
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <span className='py-1 px-2 uppercase text-[10.5px]/[12px] border border-current text-success rounded'>
                                            160
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
                <div className='text-[16px]/[19.2px] font-medium mb-30'>
                    Basic Example 5
                </div>
                <div className='overflow-auto'>
                    <table className='w-full min-w-[767px]'>
                        <thead>
                            <tr>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Application
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Team
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Change
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Sales
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Price
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    <p className='text-[16px]/[19.2px] font-medium mb-2'>
                                        Alpino 4.1
                                    </p>
                                    <p>
                                        Lucid Theme To By Again
                                    </p>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <ul className="flex items-center">
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar1} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar2} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar3} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                    </ul>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <ReactApexChart options={chartData1.options} series={chartData1.series} type="line" height={30} width={120} />
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    11,200
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    $83
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <strong>
                                        $22,520
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    <p className='text-[16px]/[19.2px] font-medium mb-2'>
                                        Compass 2.0
                                    </p>
                                    <p>
                                        Lucid Theme To By Again
                                    </p>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <ul className="flex items-center">
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar2} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar3} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                    </ul>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <ReactApexChart options={chartData2.options} series={chartData2.series} type="line" height={30} width={120} />
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    11,200
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    $66
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <strong>
                                        $13,205
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    <p className='text-[16px]/[19.2px] font-medium mb-2'>
                                        Nexa 1.1
                                    </p>
                                    <p>
                                        Lucid Theme To By Again
                                    </p>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <ul className="flex items-center">
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar4} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar6} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                    </ul>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <ReactApexChart options={chartData3.options} series={chartData3.series} type="line" height={30} width={120} />
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    12,080
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    $93
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <strong>
                                        $17,700
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    <p className='text-[16px]/[19.2px] font-medium mb-2'>
                                        Oreo 2.2
                                    </p>
                                    <p>
                                        Lucid To By Again
                                    </p>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <ul className="flex items-center">
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar7} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar8} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar9} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar10} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                    </ul>
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <ReactApexChart options={chartData4.options} series={chartData4.series} type="line" height={30} width={120} />
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    18,200
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    $178
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <strong>
                                        $17,700
                                    </strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-30 mb-30'>
                <div className='card bg-card-color rounded-md md:p-20 p-15'>
                    <div className='text-[16px]/[19.2px] font-medium mb-30'>
                        Basic Example 6
                    </div>
                    <div className='overflow-auto'>
                        <table className='w-full min-w-[549px]'>
                            <tbody>
                                <tr className='hover:bg-body-color'>
                                    <td align='left' className='p-3 border-t border-border-color'>
                                        <span className='inline-block w-[12px] h-[12px] rounded-full bg-success'></span>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        Twitter
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        862 Records
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='flex items-center'>
                                            35%
                                            <IconCaretUpFilled className='w-[14px] h-[14px]' />
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <ReactApexChart options={chartData5.options} series={chartData5.series} type="bar" height={20} width={40} />
                                    </td>
                                </tr>
                                <tr className='hover:bg-body-color'>
                                    <td align='left' className='p-3 border-t border-border-color'>
                                        <span className='inline-block w-[12px] h-[12px] rounded-full bg-sky'></span>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        Facebook
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        451 Records
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='flex items-center'>
                                            15%
                                            <IconCaretUpFilled className='w-[14px] h-[14px]' />
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <ReactApexChart options={chartData6.options} series={chartData6.series} type="bar" height={20} width={40} />
                                    </td>
                                </tr>
                                <tr className='hover:bg-body-color'>
                                    <td align='left' className='p-3 border-t border-border-color'>
                                        <span className='inline-block w-[12px] h-[12px] rounded-full bg-yellow'></span>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        Mailchimp
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        502 Records
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='flex items-center'>
                                            20%
                                            <IconCaretUpFilled className='w-[14px] h-[14px]' />
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <ReactApexChart options={chartData7.options} series={chartData7.series} type="bar" height={20} width={40} />
                                    </td>
                                </tr>
                                <tr className='hover:bg-body-color'>
                                    <td align='left' className='p-3 border-t border-border-color'>
                                        <span className='inline-block w-[12px] h-[12px] rounded-full bg-danger'></span>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        Google
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        502 Records
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='flex items-center'>
                                            20%
                                            <IconCaretUpFilled className='w-[14px] h-[14px]' />
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <ReactApexChart options={chartData8.options} series={chartData8.series} type="bar" height={20} width={40} />
                                    </td>
                                </tr>
                                <tr className='hover:bg-body-color'>
                                    <td align='left' className='p-3 border-t border-border-color'>
                                        <span className='inline-block w-[12px] h-[12px] rounded-full bg-black-100'></span>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        Other
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        237 Records
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='flex items-center'>
                                            10%
                                            <IconCaretUpFilled className='w-[14px] h-[14px]' />
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <ReactApexChart options={chartData9.options} series={chartData9.series} type="bar" height={20} width={40} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='card bg-card-color rounded-md md:p-20 p-15'>
                    <div className='text-[16px]/[19.2px] font-medium mb-30'>
                        Basic Example 7
                    </div>
                    <div className='overflow-auto'>
                        <table className='w-full min-w-[549px]'>
                            <tbody>
                                <tr className='hover:bg-body-color'>
                                    <td align='left' className='p-3 border-t border-border-color'>
                                        Twitter
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        862 Records
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-sky flex items-center gap-1'>
                                            <IconMessageCircle2 className='w-[18px] h-[18px] stroke-[1.5]' />
                                            241
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-success flex items-center gap-1'>
                                            <IconThumbUp className='w-[18px] h-[18px] stroke-[1.5]' />
                                            595
                                        </p>
                                    </td>
                                    <td width={150} className='p-3 border-t border-border-color'>
                                        <div className='progress h-5 bg-body-color-100 rounded-sm overflow-hidden'>
                                            <div className="progress-bar w-[40%] h-full bg-warning text-[12px]/[20px] text-black font-medium px-5 text-center"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='hover:bg-body-color'>
                                    <td align='left' className='p-3 border-t border-border-color'>
                                        Facebook
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        451 Records
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-sky flex items-center gap-1'>
                                            <IconMessageCircle2 className='w-[18px] h-[18px] stroke-[1.5]' />
                                            540
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-success flex items-center gap-1'>
                                            <IconThumbUp className='w-[18px] h-[18px] stroke-[1.5]' />
                                            1K
                                        </p>
                                    </td>
                                    <td width={150} className='p-3 border-t border-border-color'>
                                        <div className='progress h-5 bg-body-color-100 rounded-sm overflow-hidden'>
                                            <div className="progress-bar w-[20%] h-full bg-success text-[12px]/[20px] text-black font-medium px-5 text-center"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='hover:bg-body-color'>
                                    <td align='left' className='p-3 border-t border-border-color'>
                                        LinkedIn
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        502 Records
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-sky flex items-center gap-1'>
                                            <IconMessageCircle2 className='w-[18px] h-[18px] stroke-[1.5]' />
                                            102
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-success flex items-center gap-1'>
                                            <IconThumbUp className='w-[18px] h-[18px] stroke-[1.5]' />
                                            201
                                        </p>
                                    </td>
                                    <td width={150} className='p-3 border-t border-border-color'>
                                        <div className='progress h-5 bg-body-color-100 rounded-sm overflow-hidden'>
                                            <div className="progress-bar w-[90%] h-full bg-sky text-[12px]/[20px] text-black font-medium px-5 text-center"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='hover:bg-body-color'>
                                    <td align='left' className='p-3 border-t border-border-color'>
                                        Google
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        502 Records
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-sky flex items-center gap-1'>
                                            <IconMessageCircle2 className='w-[18px] h-[18px] stroke-[1.5]' />
                                            21
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-success flex items-center gap-1'>
                                            <IconThumbUp className='w-[18px] h-[18px] stroke-[1.5]' />
                                            28
                                        </p>
                                    </td>
                                    <td width={150} className='p-3 border-t border-border-color'>
                                        <div className='progress h-5 bg-body-color-100 rounded-sm overflow-hidden'>
                                            <div className="progress-bar w-[50%] h-full bg-danger text-[12px]/[20px] text-black font-medium px-5 text-center"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='hover:bg-body-color'>
                                    <td align='left' className='p-3 border-t border-border-color'>
                                        Other
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        237 Records
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-sky flex items-center gap-1'>
                                            <IconMessageCircle2 className='w-[18px] h-[18px] stroke-[1.5]' />
                                            9
                                        </p>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <p className='text-success flex items-center gap-1'>
                                            <IconThumbUp className='w-[18px] h-[18px] stroke-[1.5]' />
                                            15
                                        </p>
                                    </td>
                                    <td width={150} className='p-3 border-t border-border-color'>
                                        <div className='progress h-5 bg-body-color-100 rounded-sm overflow-hidden'>
                                            <div className="progress-bar w-[20%] h-full bg-black-100 text-[12px]/[20px] text-black font-medium px-5 text-center"></div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='card bg-card-color rounded-md md:p-20 p-15'>
                <div className='text-[16px]/[19.2px] font-medium mb-30'>
                    Basic Example 8
                </div>
                <div className='overflow-auto'>
                    <table className='w-full min-w-[1023px]'>
                        <thead>
                            <tr>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Order No
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Product Name
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Purchased On
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Shipping Status
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Payment Method
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Payment Status
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    Q01
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Iphone 7
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    12 Jan 2018
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Dispatched
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Credit card
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <span className='py-1 px-2 uppercase text-[10.5px]/[12px] text-success border border-current rounded'>
                                        APPROVED
                                    </span>
                                </td>
                                <td align='right' width={200} className='p-3 border-t border-border-color'>
                                    <div className='inline-flex gap-10'>
                                        <button className='btn btn-success'>
                                            View Order
                                        </button>
                                        <button className='bg-danger rounded-[4px] px-10 py-[8px]'>
                                            <IconTrash className='text-white w-[18px] h-[18px]' />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    Q02
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Galaxy S8
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    18 Jan 2018
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Dispatched
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Internet banking
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <span className='py-1 px-2 uppercase text-[10.5px]/[12px] text-warning border border-current rounded'>
                                        PENDING
                                    </span>
                                </td>
                                <td align='right' width={200} className='p-3 border-t border-border-color'>
                                    <div className='inline-flex gap-10'>
                                        <button className='btn btn-success'>
                                            View Order
                                        </button>
                                        <button className='bg-danger rounded-[4px] px-10 py-[8px]'>
                                            <IconTrash className='text-white w-[18px] h-[18px]' />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    Q03
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Amazon Echo
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    22 Feb 2018
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Dispatched
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Credit card
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <span className='py-1 px-2 uppercase text-[10.5px]/[12px] text-success border border-current rounded'>
                                        APPROVED
                                    </span>
                                </td>
                                <td align='right' width={200} className='p-3 border-t border-border-color'>
                                    <div className='inline-flex gap-10'>
                                        <button className='btn btn-success'>
                                            View Order
                                        </button>
                                        <button className='bg-danger rounded-[4px] px-10 py-[8px]'>
                                            <IconTrash className='text-white w-[18px] h-[18px]' />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    Q04
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Google Pixel
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    22 Feb 2018
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Dispatched
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Cash on delivery
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <span className='py-1 px-2 uppercase text-[10.5px]/[12px] text-danger border border-current rounded'>
                                        REJECTED
                                    </span>
                                </td>
                                <td align='right' width={200} className='p-3 border-t border-border-color'>
                                    <div className='inline-flex gap-10'>
                                        <button className='btn btn-success'>
                                            View Order
                                        </button>
                                        <button className='bg-danger rounded-[4px] px-10 py-[8px]'>
                                            <IconTrash className='text-white w-[18px] h-[18px]' />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    Q05
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Mac Mini
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    8 March 2018
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Dispatched
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Debit card
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    <span className='py-1 px-2 uppercase text-[10.5px]/[12px] text-success border border-current rounded'>
                                        APPROVED
                                    </span>
                                </td>
                                <td align='right' width={200} className='p-3 border-t border-border-color'>
                                    <div className='inline-flex gap-10'>
                                        <button className='btn btn-success'>
                                            View Order
                                        </button>
                                        <button className='bg-danger rounded-[4px] px-10 py-[8px]'>
                                            <IconTrash className='text-white w-[18px] h-[18px]' />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
