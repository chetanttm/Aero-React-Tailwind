import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import BlogSidebar from './BlogSidebar'
import { Link } from 'react-router-dom'
import {
    gallery5,
} from '../../assets/images'
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconMessageFilled,
    IconUserFilled,
} from '@tabler/icons-react'

export default function BlogDetail() {

    const breadcrumbItem = [
        {
            name: "Blog",
        },
        {
            name: "Blog Detail",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Blog Detail" />
            <div className='grid grid-cols-12 gap-4'>
                <div className='lg:col-span-8 col-span-12'>
                    <div>
                        <Link to="#" className='relative mb-4 block'>
                            <img src={gallery5} alt="Blog Post" className='w-full h-full object-cover max-h-[400px] rounded-md' />
                            <span className='py-10 px-15 bg-white inline-block absolute bottom-10 end-10'>Monday, December 15, 2018</span>
                        </Link>
                        <div className='flex items-center gap-2 justify-between flex-wrap mb-4'>
                            <div className='flex items-center gap-4 text-grey'>
                                <Link to="#" className='flex items-center gap-1'>
                                    <IconUserFilled className='w-[16px] h-[16px] min-w-[16px]' />
                                    By Michael
                                </Link>
                                <span>|</span>
                                <Link to="#" className='flex items-center gap-1'>
                                    <IconMessageFilled className='w-[16px] h-[16px] min-w-[16px]' />
                                    Comments (3)
                                </Link>
                            </div>
                            <ul className='flex items-center gap-2'>
                                <li>
                                    <Link to="" className='transition-all hover:text-blue'>
                                        <IconBrandFacebook className='w-[20px] h-[20px] min-w-[20px]' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className='transition-all hover:text-blue'>
                                        <IconBrandInstagram className='w-[20px] h-[20px] min-w-[20px]' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className='transition-all hover:text-blue'>
                                        <IconBrandTwitter className='w-[20px] h-[20px] min-w-[20px]' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className='transition-all hover:text-blue'>
                                        <IconBrandLinkedin className='w-[20px] h-[20px] min-w-[20px]' />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <h5 className='text-[20px]/[26px] font-bold text-sky mb-4'>
                            <Link to="/blog-details">The Most Advance Business Plan</Link>
                        </h5>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem of letters, as opposed to using 'Content here, content here', making it look like readable English. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                        </p>
                        <div className='my-30 p-40 border-s-[5px] border-sky bg-card-color shadow-shadow-normal text-[20px]/[32px]'>
                            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam vulputate tortor nec commodo ultricies lectus nisl facilisis enim trpis.</p>
                            <p>by <Link to="#" className='text-sky'>ThemeMakker</Link></p>
                        </div>
                        <p className='mb-4'>The point of using Lorem of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incdidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca cupidatat non proident.</p>
                    </div>
                </div>
                <div className='lg:col-span-4 col-span-12'>
                    <BlogSidebar />
                </div>
            </div>
        </>
    )
}
