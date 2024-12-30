import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Breadcrumb from '../../components/common/Breadcrumb'
import {
    avatar2,
    avatar3,
    ecommerce1,
    ecommerce2,
    ecommerce3,
    ecommerce4,
} from '../../assets/images'
import { IconHeartFilled, IconStar, IconStarFilled, IconX } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

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
                <div className='grid grid-cols-[1fr_3fr] gap-4 mb-8'>
                    <Tabs>
                        <TabPanel>
                            <img src={ecommerce1} alt='product' />
                        </TabPanel>
                        <TabPanel>
                            <img src={ecommerce2} alt='product' />
                        </TabPanel>
                        <TabPanel>
                            <img src={ecommerce3} alt='product' />
                        </TabPanel>
                        <TabPanel>
                            <img src={ecommerce4} alt='product' />
                        </TabPanel>
                        <TabList className='flex items-center justify-center gap-10 pt-20'>
                            <Tab className="border border-transparent cursor-pointer" selectedClassName='!border-font-color-100'>
                                <img src={ecommerce1} alt='product thumb' className='w-[78px] h-[78px] min-w-[78px]' />
                            </Tab>
                            <Tab className="border border-transparent cursor-pointer" selectedClassName='!border-font-color-100'>
                                <img src={ecommerce2} alt='product thumb' className='w-[78px] h-[78px] min-w-[78px]' />
                            </Tab>
                            <Tab className="border border-transparent cursor-pointer" selectedClassName='!border-font-color-100'>
                                <img src={ecommerce3} alt='product thumb' className='w-[78px] h-[78px] min-w-[78px]' />
                            </Tab>
                            <Tab className="border border-transparent cursor-pointer" selectedClassName='!border-font-color-100'>
                                <img src={ecommerce4} alt='product thumb' className='w-[78px] h-[78px] min-w-[78px]' />
                            </Tab>
                        </TabList>
                    </Tabs>
                    <div>
                        <h3 className="text-[28px]/[36px] font-medium mb-2">Simple Black Clock</h3>
                        <h5 className="text-[22px]/[30px] font-medium mb-4">Current Price: $180</h5>
                        <div className="flex items-center gap-1 pb-4 mb-4 border-b border-border-color">
                            <div className="flex items-center gap-1">
                                <IconStarFilled className='w-[16px] h-[16px] min-w-[16px]' />
                                <IconStarFilled className='w-[16px] h-[16px] min-w-[16px]' />
                                <IconStarFilled className='w-[16px] h-[16px] min-w-[16px]' />
                                <IconStarFilled className='w-[16px] h-[16px] min-w-[16px]' />
                                <IconStar className='w-[16px] h-[16px] min-w-[16px]' />
                            </div>
                            <span className="ms-2">41 reviews</span>
                        </div>
                        <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className="mb-6"><strong>78%</strong> of buyers enjoyed this product! <strong>(23 votes)</strong></p>
                        <h5 className="text-[22px]/[30px] font-medium mb-8 flex items-center gap-4">
                            Sizes :
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                        </h5>
                        <h5 className="text-[22px]/[30px] font-medium mb-8 flex items-center gap-4">
                            Colors :
                            <span className='w-[32px] h-[32px] min-w-[32px] rounded bg-danger flex items-center justify-center text-white not-available'><IconX /></span>
                            <span className='w-[32px] h-[32px] min-w-[32px] rounded bg-success flex items-center justify-center text-white'></span>
                            <span className='w-[32px] h-[32px] min-w-[32px] rounded bg-blue flex items-center justify-center text-white'></span>
                        </h5>
                        <div className="flex items-stretch gap-2">
                            <button className="btn btn-primary">ADD TO CART</button>
                            <button className="btn btn-info"><IconHeartFilled className='w-[18px] h-[18px] min-w-[18px]' /></button>
                        </div>
                    </div>
                </div>
                <Tabs>
                    <TabList className='flex items-center gap-5 mb-20'>
                        <Tab className="text-font-color-100 py-2 px-6 border border-transparent rounded-full cursor-pointer" selectedClassName='!text-primary !border-font-color-100'>
                            Description
                        </Tab>
                        <Tab className="text-font-color-100 py-2 px-6 border border-transparent rounded-full cursor-pointer" selectedClassName='!text-primary !border-font-color-100'>
                            Review
                        </Tab>
                        <Tab className="text-font-color-100 py-2 px-6 border border-transparent rounded-full cursor-pointer" selectedClassName='!text-primary !border-font-color-100'>
                            About
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </TabPanel>
                    <TabPanel>
                        <p className='mb-4'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied</p>
                        <div className='flex items-start gap-20 pb-15 mb-15 border-b border-border-color last:pb-0 last:mb-0 last:border-0'>
                            <Link to="#">
                                <img src={avatar2} alt='user' className='w-[60px] h-[60px] min-w-[60px] rounded' />
                            </Link>
                            <div className='truncate'>
                                <h6 className="text-[14px]/[18px] font-bold">Hossein Shams</h6>
                                <p className='mb-1 truncate'>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
                                <div className='flex items-center md:gap-3 gap-2 flex-wrap'>
                                    <span className="px-2 py-[3px] inline-block rounded bg-info text-white text-[12px]/[1] font-bold">iPhone 8</span>
                                    <div className='flex items-center gap-1'>
                                        <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                        <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                        <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                        <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                        <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    </div>
                                    <small>Dec 21, 2019</small>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-start gap-20 pb-15 mb-15 border-b border-border-color last:pb-0 last:mb-0 last:border-0'>
                            <Link to="#">
                                <img src={avatar3} alt='user' className='w-[60px] h-[60px] min-w-[60px] rounded' />
                            </Link>
                            <div className='truncate'>
                                <h6 className="text-[14px]/[18px] font-bold">Tim Hank</h6>
                                <p className='mb-1 truncate'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                                <div className='flex items-center md:gap-3 gap-2 flex-wrap'>
                                    <span className="px-2 py-[3px] inline-block rounded bg-info text-white text-[12px]/[1] font-bold">Nokia 8</span>
                                    <div className='flex items-center gap-1'>
                                        <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                        <Link to="#"><IconStarFilled className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                        <Link to="#"><IconStar className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                        <Link to="#"><IconStar className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                        <Link to="#"><IconStar className='w-[18px] h-[18px] min-w-[18px] text-sky' /></Link>
                                    </div>
                                    <small>Dec 18, 2019</small>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h6 className='font-bold mb-2'>Where does it come from?</h6>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}
