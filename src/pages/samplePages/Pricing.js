import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import { pricing } from '../../assets/images'

export default function Pricing() {

    const breadcrumbItem = [
        {
            name: "Pages",
        },
        {
            name: "Pricing",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Pricing" />
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-4'>
                <div className='card bg-card-color rounded-md overflow-hidden'>
                    <div className='pt-50 pb-100 px-15 relative text-center text-white bg-gradient-to-t from-[#464545] to-[rgba(70,69,69,0.7)]'>
                        <div className="text-[17px]/[1] flex justify-center gap-1 mb-4">
                            $<span className='text-[56px]/[46px] font-bold'>19</span><span className="self-end">/ mo</span>
                        </div>
                        <h3 className="text-[20px]/[26px] font-medium mb-4 uppercase tracking-widest">BASIC</h3>
                        <div className='absolute start-0 bottom-0 w-full'>
                            <img src={pricing} alt='pricing background' className='w-full h-100 object-cover' />
                        </div>
                    </div>
                    <div className='md:p-20 p-15 text-center'>
                        <ul className='flex flex-col gap-4'>
                            <li>5GB Disk Space</li>
                            <li>10 Domain Names</li>
                            <li>5 E-Mail Address</li>
                            <li>Fully Support</li>
                            <li><button className='btn btn-secondary'>Choose Plan</button></li>
                        </ul>
                    </div>
                </div>
                <div className='card bg-card-color rounded-md overflow-hidden'>
                    <div className='pt-50 pb-100 px-15 relative text-center text-white bg-gradient-to-t from-[#0d6efd] to-[rgba(13,110,253,0.7)]'>
                        <div className="text-[17px]/[1] flex justify-center gap-1 mb-4">
                            $<span className='text-[56px]/[46px] font-bold'>33</span><span className="self-end">/ mo</span>
                        </div>
                        <h3 className="text-[20px]/[26px] font-medium mb-4 uppercase tracking-widest">PROFESSIONAL</h3>
                        <div className='absolute start-0 bottom-0 w-full'>
                            <img src={pricing} alt='pricing background' className='w-full h-100 object-cover' />
                        </div>
                    </div>
                    <div className='md:p-20 p-15 text-center'>
                        <ul className='flex flex-col gap-4'>
                            <li>10GB Disk Space</li>
                            <li>20 Domain Names</li>
                            <li>10 E-Mail Address</li>
                            <li>Fully Support</li>
                            <li><button className='btn btn-primary'>Choose Plan</button></li>
                        </ul>
                    </div>
                </div>
                <div className='card bg-card-color rounded-md overflow-hidden'>
                    <div className='pt-50 pb-100 px-15 relative text-center text-white bg-gradient-to-t from-[#464545] to-[rgba(70,69,69,0.7)]'>
                        <div className="text-[17px]/[1] flex justify-center gap-1 mb-4">
                            $<span className='text-[56px]/[46px] font-bold'>99</span><span className="self-end">/ mo</span>
                        </div>
                        <h3 className="text-[20px]/[26px] font-medium mb-4 uppercase tracking-widest">ENTERPRISE</h3>
                        <div className='absolute start-0 bottom-0 w-full'>
                            <img src={pricing} alt='pricing background' className='w-full h-100 object-cover' />
                        </div>
                    </div>
                    <div className='md:p-20 p-15 text-center'>
                        <ul className='flex flex-col gap-4'>
                            <li>50GB Disk Space</li>
                            <li>50 Domain Names</li>
                            <li>20 E-Mail Address</li>
                            <li>Fully Support</li>
                            <li><button className='btn btn-secondary'>Choose Plan</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
