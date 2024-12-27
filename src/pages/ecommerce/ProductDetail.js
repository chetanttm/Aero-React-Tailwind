import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import { ecommerce1 } from '../../assets/images'

export default function ProductDetail() {

    const breadcrumbItem = [
        {
            name: "eCommerce",
        },
        {
            name: "Product Detail",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Product Detail" />
            <div className='card rounded-md bg-card-color md:p-20 p-15'>
                <div className='grid grid-cols-[1fr_3fr] gap-4'>
                    <div>
                        <img src={ecommerce1} alt='product' />
                    </div>
                </div>
            </div>
        </>
    )
}
