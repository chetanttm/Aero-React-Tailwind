import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import ReactDataTable from 'react-data-table-component';
import {
    ecommerce1,
    ecommerce2,
    ecommerce3,
    ecommerce4,
} from '../../assets/images'
import { IconPrinter } from '@tabler/icons-react';

export default function Invoice() {

    const breadcrumbItem = [
        {
            name: "Pages",
        },
        {
            name: "Invoice",
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
            cell: row => <div className='flex items-center gap-3'>
                <img src={row.image} alt="ecommerce product" className='w-[50px] h-[50px] min-w-[50px]' />
                <b>{row.name}</b>
            </div>,
            sortable: true,
        },
        {
            name: 'Description',
            selector: row => row.description,
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: row => row.quantity,
            sortable: true,
            width: '130px'
        },
        {
            name: 'Unit Cost',
            selector: row => row.unitCost,
            cell: row => <>${row.unitCost}</>,
            sortable: true,
            width: '130px'
        },
        {
            name: 'Total',
            selector: row => row.total,
            cell: row => <>${row.total}</>,
            sortable: true,
            width: '130px'
        },
    ];

    const dataProductList = [
        {
            id: 1,
            name: 'Simple Black Clock',
            image: ecommerce1,
            description: 'Lorem ipsum dolor sit amet.',
            quantity: '1',
            unitCost: 380,
            total: 380,
        },
        {
            id: 2,
            name: 'Brone Candle',
            image: ecommerce2,
            description: 'There are many variations of passages of Lorem Ipsum',
            quantity: '5',
            unitCost: 50,
            total: 250,
        },
        {
            id: 3,
            name: 'Wood Simple Clock',
            image: ecommerce3,
            description: 'Lorem ipsum dolor sit amet.',
            quantity: '2',
            unitCost: 500,
            total: 1000,
        },
        {
            id: 4,
            name: 'Unero Small Bag',
            image: ecommerce4,
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
            quantity: '3',
            unitCost: 300,
            total: 900,
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Invoice" />
            <div className='card bg-card-color md:p-20 p-15 rounded-md mb-4'>
                <h5 className='text-[22px]/[28px] mb-4'><strong>Order ID: </strong> #123456</h5>
                <div className='flex items-start justify-between gap-3 md:flex-row flex-col'>
                    <address>
                        <strong>ThemeMakker Inc.</strong><br />
                        795 Folsom Ave, Suite 546 San Francisco, CA 54656<br />
                        P : (123) 456-34636
                    </address>
                    <div className='md:text-end'>
                        <p><strong>Order Date : </strong> Dec 02, 2019</p>
                        <p><strong>Order Status : </strong><span className="px-2 py-[1px] min-w-fit rounded bg-success text-white text-[12px]/[1] font-bold">Success</span></p>
                    </div>
                </div>
            </div>
            <div className='react-data-table header-primary mb-4'>
                <ReactDataTable
                    columns={columnsProductList}
                    data={dataProductList}
                />
            </div>
            <div className='card bg-card-color md:p-20 p-15 rounded-md grid md:grid-cols-2 grid-cols-1 gap-3'>
                <div>
                    <h5 className='text-[22px]/[28px] font-medium mb-2'>Note</h5>
                    <p>Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.</p>
                </div>
                <div className='md:text-end'>
                    <ul className="mb-2">
                        <li><strong>Sub-Total:-</strong> 2930.00</li>
                        <li className="text-danger"><strong>Discout:-</strong> 12.9%</li>
                        <li><strong>VAT:-</strong> 12.9%</li>
                    </ul>
                    <h3 className="text-success text-[28px]/[40px] font-medium mb-2">USD 2930.00</h3>
                    <div className='flex items-stretch md:justify-end gap-2'>
                        <button className='btn btn-info'><IconPrinter /></button>
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
