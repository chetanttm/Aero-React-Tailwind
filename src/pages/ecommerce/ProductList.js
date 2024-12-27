import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import ReactDataTable from 'react-data-table-component';
import {
    ecommerce1,
    ecommerce10,
    ecommerce11,
    ecommerce2,
    ecommerce3,
    ecommerce5,
    ecommerce6,
} from '../../assets/images'
import {
    IconPencil,
    IconTrash,
} from '@tabler/icons-react';

export default function ProductList() {

    const breadcrumbItem = [
        {
            name: "eCommerce",
        },
        {
            name: "Product List",
        },
    ]

    const columnsProductList = [
        {
            name: 'Image',
            selector: row => <img src={row.image} alt="ecommerce product" className='w-[50px] h-[50px] min-w-[50px]' />,
            width: '100px'
        },
        {
            name: 'Product Name',
            selector: row => row.name,
            cell: row => <b>{row.name}</b>,
            sortable: true,
        },
        {
            name: 'Detail',
            selector: row => row.detail,
            cell: row => <div className='text-font-color-100'>{row.detail}</div>,
            sortable: true,
        },
        {
            name: 'Amount',
            selector: row => row.amount,
            sortable: true,
            width: '180px'
        },
        {
            name: 'Stock',
            selector: row => row.stock,
            sortable: true,
            width: '180px'
        },
        {
            name: 'Action',
            selector: row =>
                <div className='flex items-stretch justify-center gap-2 p-2'>
                    <button className='rounded bg-white shadow border border-border-color p-1'><IconPencil className='w-[18px] h-[18px] min-w-[18px]' /></button>
                    <button className='rounded bg-white shadow border border-border-color p-1'><IconTrash className='w-[18px] h-[18px] min-w-[18px]' /></button>
                </div>,
            width: '140px'
        },
    ];

    const dataProductList = [
        {
            image: ecommerce1,
            name: 'Simple Black Clock',
            detail: 'randomised words even slightly believable',
            amount: '$16.00',
            stock: <div className='text-success'>In Stock</div>,
        },
        {
            image: ecommerce10,
            name: 'Brone Candle',
            detail: 'It is a long established will be distracted',
            amount: '$15.00',
            stock: <div>Low Stock</div>,
        },
        {
            image: ecommerce11,
            name: 'Wood Simple Clock',
            detail: 'There passages of Lorem Ipsum available',
            amount: '$16.00',
            stock: <div>Low Stock</div>,
        },
        {
            image: ecommerce5,
            name: 'Unero Small Bag',
            detail: 'It is a long established fact that a distracted',
            amount: '$23.00',
            stock: <div className='text-danger'>Out Of Stock</div>,
        },
        {
            image: ecommerce6,
            name: 'Simple Black Clock',
            detail: 'Contrary to popular belief, simply random text',
            amount: '$16.00',
            stock: <div className='text-success'>In Stock</div>,
        },
        {
            image: ecommerce2,
            name: 'Brone Lamp Glasses',
            detail: 'All the Lorem Ipsum generators on predefined chunks',
            amount: '$12.00',
            stock: <div className='text-success'>In Stock</div>,
        },
        {
            image: ecommerce3,
            name: 'Simple Black Clock',
            detail: 'established fact that a be distracted',
            amount: '$22.00',
            stock: <div className='text-danger'>Out Of Stock</div>,
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Product List" />
            <div className='react-data-table header-primary'>
                <ReactDataTable
                    columns={columnsProductList}
                    data={dataProductList}
                    pagination
                />
            </div>
        </>
    )
}
