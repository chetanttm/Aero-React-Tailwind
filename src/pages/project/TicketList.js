import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import ReactApexChart from 'react-apexcharts';
import ReactDataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import {
    IconPlus,
} from '@tabler/icons-react'

export default function TicketList() {

    const breadcrumbItem = [
        {
            name: "Project",
        },
        {
            name: "Ticket List",
        },
    ]

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

    const columnsInvoice = [
        {
            name: '#',
            selector: row => row.number,
            cell: row =>
                <b>{row.number}</b>,
            sortable: true,
            width: '100px',
        },
        {
            name: 'PRODUCT',
            selector: row => row.productName,
            cell: row =>
                <Link to="/project-ticket-detail" className='text-sky font-bold'>{row.productName}</Link>,
            sortable: true,
            width: '400px',
        },
        {
            name: 'TITLE',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'CREATED BY',
            selector: row => row.createdBy,
            sortable: true,
        },
        {
            name: 'Date',
            selector: row => row.date,
            sortable: true,
        },
        {
            name: 'AGENT',
            selector: row => row.agent,
            sortable: true,
        },
        {
            name: 'STATUS',
            selector: row => row.status,
            cell: row =>
                <span className={`px-2 py-[3px] inline-block rounded text-white text-[12px]/[1] font-bold ${row.status === 'Opened' ? 'bg-sky' : row.status === 'In Progress' ? 'bg-orange-500' : row.status === 'Closed' ? 'bg-danger' : ''}`}>
                    {row.status}
                </span >,
            sortable: true,
        },
    ];

    const dataInvoice = [
        {
            number: 'A2586',
            productName: 'Lucid Side Menu Open OnClick',
            title: 'Lucid Admin',
            createdBy: 'Tim Hank',
            date: '02 Jan 2019',
            agent: 'Maryam',
            status: 'In Progress',
        },
        {
            number: 'A4578',
            productName: 'Update chart library',
            title: 'Alpino Bootstrap',
            createdBy: 'Tim Hank',
            date: '04 Jan 2019',
            agent: 'Hossein',
            status: 'In Progress',
        },
        {
            number: 'A6523',
            productName: 'Mega Menu Open OnClick',
            title: 'Hexabit Admin',
            createdBy: 'Gary Camara',
            date: '09 Jan 2019',
            agent: 'Maryam',
            status: 'Opened',
        },
        {
            number: 'A9514',
            productName: 'Nexa Theme Side Menu Open OnClick',
            title: 'Nexa Template',
            createdBy: 'Tim Hank',
            date: '12 Jan 2019',
            agent: 'Hossein',
            status: 'Opened',
        },
        {
            number: 'A2548',
            productName: 'Update Angular version',
            title: 'Lucid Admin',
            createdBy: 'Fidel Tonn',
            date: '22 Jan 2019',
            agent: 'Frank',
            status: 'Closed',
        },
        {
            number: 'A1346',
            productName: 'Add new hospital',
            title: 'Lucid Hospital',
            createdBy: 'Tim Hank',
            date: '13 Jan 2019',
            agent: 'Hossein',
            status: 'Closed',
        },
        {
            number: 'A7845',
            productName: 'Update latest bootstrap version',
            title: 'Compass Dashboard',
            createdBy: 'Tim Hank',
            date: '07 Jan 2019',
            agent: 'Frank',
            status: 'In Progress',
        },
        {
            number: 'A2586',
            productName: 'Add new extra page',
            title: 'Lucid Admin',
            createdBy: 'Tim Hank',
            date: '02 Jan 2019',
            agent: 'Maryam',
            status: 'In Progress',
        },
        {
            number: 'A4578',
            productName: 'Update chart library',
            title: 'Alpino Bootstrap',
            createdBy: 'Tim Hank',
            date: '04 Jan 2019',
            agent: 'Hossein',
            status: 'In Progress',
        },
        {
            number: 'A6523',
            productName: 'Mega Menu Open OnClick',
            title: 'Hexabit Admin',
            createdBy: 'Gary Camara',
            date: '09 Jan 2019',
            agent: 'Maryam',
            status: 'Opened',
        },
        {
            number: 'A4578',
            productName: 'Update chart library',
            title: 'Alpino Bootstrap',
            createdBy: 'Tim Hank',
            date: '04 Jan 2019',
            agent: 'Hossein',
            status: 'In Progress',
        },
        {
            number: 'A6523',
            productName: 'Mega Menu Open OnClick',
            title: 'Hexabit Admin',
            createdBy: 'Gary Camara',
            date: '09 Jan 2019',
            agent: 'Maryam',
            status: 'Opened',
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Ticket List" buttonContent={<IconPlus className='w-[18px] h-[18px] min-w-[18px]' />} buttonUrl="#" />
            <div className='mb-4 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
                <div className='card bg-card-color md:p-20 p-15 rounded-md flex items-center justify-between gap-2'>
                    <div>
                        <h5 className="mb-2 font-medium text-[24px]/[1.5]">2,365</h5>
                        <span className='flex items-center gap-1'>
                            Total Tickets
                        </span>
                    </div>
                    <ReactApexChart options={chartData1.options} series={chartData1.series} type="bar" width={60} height={55} />
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md flex items-center justify-between gap-2'>
                    <div>
                        <h5 className="mb-2 font-medium text-[24px]/[1.5]">365</h5>
                        <span className='flex items-center gap-1'>
                            Pending
                        </span>
                    </div>
                    <ReactApexChart options={chartData2.options} series={chartData2.series} type="bar" width={60} height={55} />
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md flex items-center justify-between gap-2'>
                    <div>
                        <h5 className="mb-2 font-medium text-[24px]/[1.5]">65</h5>
                        <span className='flex items-center gap-1'>
                            Responded
                        </span>
                    </div>
                    <ReactApexChart options={chartData3.options} series={chartData3.series} type="bar" width={60} height={55} />
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md flex items-center justify-between gap-2'>
                    <div>
                        <h5 className="mb-2 font-medium text-[24px]/[1.5]">2,055</h5>
                        <span className='flex items-center gap-1'>
                            Resolve
                        </span>
                    </div>
                    <ReactApexChart options={chartData4.options} series={chartData4.series} type="bar" width={60} height={55} />
                </div>
            </div>
            <div className='react-data-table overflow-auto'>
                <ReactDataTable
                    columns={columnsInvoice}
                    data={dataInvoice}
                    pagination
                    className='min-w-[1000px]'
                />
            </div>
        </>
    )
}
