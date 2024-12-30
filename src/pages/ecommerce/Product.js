import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import {
    ecommerce1,
    ecommerce10,
    ecommerce11,
    ecommerce2,
    ecommerce3,
    ecommerce4,
    ecommerce5,
    ecommerce6,
    ecommerce7,
    ecommerce8,
    ecommerce9,
} from '../../assets/images'
import { Link } from 'react-router-dom'
import { IconEye } from '@tabler/icons-react'

export default function Product() {

    const breadcrumbItem = [
        {
            name: "eCommerce",
        },
        {
            name: "Product",
        },
    ]

    const productItem = [
        {
            label: 'Sale!',
            image: ecommerce1,
            name: 'Simple Black Clock',
            oldPrice: '$52.00',
            newPrice: '$45.00',
        },
        {
            image: ecommerce2,
            name: 'Knit beanie with patch',
            oldPrice: '$16.00',
            newPrice: '$13.00',
        },
        {
            image: ecommerce3,
            name: 'Printed color block T-shirt',
            oldPrice: '$341.00',
            newPrice: '$313.00',
        },
        {
            image: ecommerce4,
            name: 'Simple Black Clock',
            oldPrice: '$16.00',
            newPrice: '$13.00',
        },
        {
            label: 'New!',
            image: ecommerce5,
            name: 'Simple Black Clock',
            oldPrice: '$89.00',
            newPrice: '$66.00',
        },
        {
            label: 'Trending!',
            image: ecommerce6,
            name: 'Simple Black Clock',
            oldPrice: '$16.00',
            newPrice: '$13.00',
        },
        {
            image: ecommerce7,
            name: 'Habitasse dictumst',
            oldPrice: '$206.00',
            newPrice: '$113.00',
        },
        {
            image: ecommerce8,
            name: 'Backpack with tab detail',
            oldPrice: '$189.00',
            newPrice: '$143.00',
        },
        {
            image: ecommerce9,
            name: 'Faux Fur Stole',
            oldPrice: '$504.00',
            newPrice: '$455.00',
        },
        {
            image: ecommerce10,
            name: 'Chest-pocket Printed Shirt',
            oldPrice: '$325.00',
            newPrice: '$289.00',
        },
        {
            image: ecommerce11,
            name: 'Blend Classic Coat',
            oldPrice: '$99.00',
            newPrice: '$79.00',
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Product" />
            <div className='grid xxl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                {productItem.map((item, key) => (
                    <div key={key} className='card bg-card-color md:p-20 p-15 rounded-md relative'>
                        {item.label && <span className={`text-white px-10 absolute top-40 start-0 ${item.label === 'Sale!' ? 'bg-orange-500' : item.label === 'New!' ? 'bg-primary' : item.label === 'Trending!' ? 'bg-purple' : ''}`}>{item.label}</span>}
                        <img src={item.image} alt='product' />
                        <div className='my-4'>
                            <Link to="#">{item.name}</Link>
                            <div className='mt-2 flex items-center justify-between gap-2'>
                                <span className='line-through text-font-color-100'>{item.oldPrice}</span>
                                <span className='font-bold text-danger'>{item.newPrice}</span>
                            </div>
                        </div>
                        <div className='flex items-stretch gap-2'>
                            <Link to="#" className='btn btn-info'><IconEye className='w-[20px] h-[20px] min-w-[20px]' /></Link>
                            <Link to="#" className='btn btn-primary'>ADD TO CART</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
