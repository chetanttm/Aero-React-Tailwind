import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import ReactDataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import {
    IconEye,
    IconMail,
    IconPrinter,
} from '@tabler/icons-react';

export default function InvoiceList() {

    const breadcrumbItem = [
        {
            name: "Pages",
        },
        {
            name: "Invoice List",
        },
    ]

    const columnsProductList = [
        {
            name: '#',
            selector: row => row.id,
            sortable: true,
            width: '80px'
        },
        {
            name: 'Item',
            selector: row => row.name,
            cell: row => <Link to="#" className='font-bold text-sky'>{row.name}</Link>,
            sortable: true,
            width: '150px'
        },
        {
            name: 'Description',
            selector: row => row.description,
            sortable: true,
        },
        {
            name: 'Functional Area',
            selector: row => row.area,
            cell: row => <Link to="#" className='text-sky'>{row.area}</Link>,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row =>
                <div className='flex items-stretch justify-center gap-2 p-2'>
                    <button className='rounded bg-grey py-1 px-2 text-white'><IconEye className='w-[18px] h-[18px] min-w-[18px]' /></button>
                    <button className='rounded bg-grey py-1 px-2 text-white'><IconPrinter className='w-[18px] h-[18px] min-w-[18px]' /></button>
                    <button className='rounded bg-grey py-1 px-2 text-white'><IconMail className='w-[18px] h-[18px] min-w-[18px]' /></button>
                </div>,
            width: '200px'
        },
    ];

    const dataProductList = [
        {
            id: '01',
            name: 'VBRK',
            description: 'Billing Document: Header Data',
            area: 'SD - Billing',
        },
        {
            id: '02',
            name: 'BBAS',
            description: 'Document Flow',
            area: 'SD - Basic Functions',
        },
        {
            id: '03',
            name: 'AKSS',
            description: 'Document: Item Status',
            area: 'Logistics Execution - Transportation',
        },
        {
            id: '04',
            name: 'BKRT',
            description: 'Customer Master sales Data',
            area: 'Logistics - Customer Master',
        },
        {
            id: '05',
            name: 'VBRK',
            description: 'sales Order to BOM Link',
            area: 'SD - Material Maintenance',
        },

        {
            id: '06',
            name: 'BBAS',
            description: 'Organization Unit: Business Area Determination',
            area: 'SD - Basic Functions',
        },
        {
            id: '07',
            name: 'AKSS',
            description: 'Customer master credit management: Control area data',
            area: 'Logistics - Bills of Material',
        },
        {
            id: '08',
            name: 'BKRT',
            description: 'Packing: Handling Unit Item (Contents)',
            area: 'PP - Master Data',
        },
        {
            id: '09',
            name: 'BKRT',
            description: 'Customer Master sales Data',
            area: 'Logistics - Customer Master',
        },
        {
            id: '10',
            name: 'VBRK',
            description: 'sales Order to BOM Link',
            area: 'SD - Material Maintenance',
        },
        {
            id: '11',
            name: 'VBRK',
            description: 'sales Order to BOM Link',
            area: 'SD - Material Maintenance',
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Invoice List" />
            <div className='react-data-table header-primary'>
                <ReactDataTable
                    columns={columnsProductList}
                    data={dataProductList}
                />
            </div>
        </>
    )
}
