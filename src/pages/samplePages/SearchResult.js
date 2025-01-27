import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import { Link } from 'react-router-dom';
import {
    IconSearch,
} from '@tabler/icons-react';

export default function SearchResult() {

    const breadcrumbItem = [
        {
            name: "Pages",
        },
        {
            name: "Search Result",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Search Result" />
            <div className='bg-card-color rounded-md md:p-20 p-15 mb-4'>
                <div className='relative w-full overflow-hidden'>
                    <button aria-label="search icon" className="absolute top-[50%] translate-y-[-50%] border-e border-border-color start-[1px] py-[6px] px-[12px] min-h-[33px] rounded-s-md">
                        <IconSearch className="text-font-color w-[20px] h-[20px]" />
                    </button>
                    <input type='text' id='search' name='search' placeholder='Search...' className='border border-border-color w-full py-[6px] pe-[12px] ps-60 min-h-[35px] rounded-md focus:outline-none' />
                </div>
            </div>
            <ul className='flex flex-col gap-1 mb-4'>
                <li className='bg-card-color rounded-md md:p-20 p-15'>
                    <Link to="#" className='inline-block mb-2 break-all'>
                        <h5 className='text-sky font-bold'>6 Amazing Reason To Choose Vuejs For Web App Development</h5>
                        <h6 className='text-info'>https://thememakker.com/6-amazing-reason-to-choose-vuejs-for-web-app-development/</h6>
                    </Link>
                    <p>From more than two decades, JavaScript has been encouraging businesses to design interactive web interfaces for their customers.</p>
                </li>
                <li className='bg-card-color rounded-md md:p-20 p-15'>
                    <Link to="#" className='inline-block mb-2 break-all'>
                        <h5 className='text-sky font-bold'>Why Ignoring Website Redesign Will Cost You Sales?</h5>
                        <h6 className='text-info'>https://thememakker.com/why-ignoring-website-redesign-will-cost-you-sales/</h6>
                    </Link>
                    <p>A website, is an impression of your organization. With just a click of a mouse or a tap of a finger, an impression of your organization is instantly framed in a visitor’s mind.</p>
                </li>
                <li className='bg-card-color rounded-md md:p-20 p-15'>
                    <Link to="#" className='inline-block mb-2 break-all'>
                        <h5 className='text-sky font-bold'>How User Experience (UX) is important for eCommerce?</h5>
                        <h6 className='text-info'>https://thememakker.com/how-user-experience-ux-is-important-for-ecommerce/</h6>
                    </Link>
                    <p>When you walk somewhere high street store expecting to find a specific product, but it’s not available in your size or your color, and you can’t find any suitable alternatives.</p>
                </li>
                <li className='bg-card-color rounded-md md:p-20 p-15'>
                    <Link to="#" className='inline-block mb-2 break-all'>
                        <h5 className='text-sky font-bold'>Buzzer – Ultimate Bootstrap 4 Admin and Ui Kit</h5>
                        <h6 className='text-info'>https://thememakker.com/template/buzzer-ultimate-bootstrap-4-admin-and-ui-kit/</h6>
                    </Link>
                    <p>We’ve created this admin panel for everyone who wants to create any templates based on our ready components. Our mission is to deliver a user-friendly.</p>
                </li>
                <li className='bg-card-color rounded-md md:p-20 p-15'>
                    <Link to="#" className='inline-block mb-2 break-all'>
                        <h5 className='text-sky font-bold'>InfiniO – Bootstrap 4 Admin Dashboard</h5>
                        <h6 className='text-info'>https://thememakker.com/template/infinio-bootstrap-4-admin-dashboard/</h6>
                    </Link>
                    <p>10+ Dashboard, 100+ Integrated Plugins, 300+ Pages, Light and Dark Menu, The Multistep Form, Timeline view, Summermnote Editor, Image Cropping Tool, Easy to access Menu Styles.</p>
                </li>
            </ul>
            <ul className='flex items-center gap-2'>
                <li>
                    <button className='py-1 px-3 rounded-full text-[14px]/[1.5] uppercase transition-all duration-300 hover:bg-border-color'>Previous</button>
                </li>
                <li>
                    <button className='p-1 w-[32px] h-[32px] min-w-[32px] rounded-full text-[14px]/[1.5] uppercase bg-primary text-white font-medium active'>1</button>
                </li>
                <li>
                    <button className='p-1 w-[32px] h-[32px] min-w-[32px] rounded-full text-[14px]/[1.5] uppercase transition-all duration-300 hover:bg-border-color'>2</button>
                </li>
                <li>
                    <button className='p-1 w-[32px] h-[32px] min-w-[32px] rounded-full text-[14px]/[1.5] uppercase transition-all duration-300 hover:bg-border-color'>3</button>
                </li>
                <li>
                    <button className='py-1 px-3 rounded-full text-[14px]/[1.5] uppercase transition-all duration-300 hover:bg-border-color'>Next</button>
                </li>
            </ul>
        </>
    )
}
