import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import { Link } from 'react-router-dom'
import BlogSidebar from './BlogSidebar'
import {
    gallery14,
    gallery5,
    gallery7,
    gallery8,
} from '../../assets/images'
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconMessageFilled,
    IconUserFilled,
} from '@tabler/icons-react'

export default function BlogList() {

    const breadcrumbItem = [
        {
            name: "Blog",
        },
        {
            name: "Blog List",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Blog List" />
            <div className='grid grid-cols-12 gap-4'>
                <div className='lg:col-span-8 col-span-12'>
                    <div className='flex flex-col gap-12 mb-8'>
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
                                <Link to="/blog-detail">The Most Advance Business Plan</Link>
                            </h5>
                            <p className='mb-6'>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                            <div>
                                <button className='btn btn-info'>Read More</button>
                            </div>
                        </div>
                        <div>
                            <Link to="#" className='relative mb-4 block'>
                                <img src={gallery7} alt="Blog Post" className='w-full h-full object-cover max-h-[400px] rounded-md' />
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
                                <Link to="/blog-detail">WTCR from 2018: new rules, more cars, more races</Link>
                            </h5>
                            <p className='mb-6'>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                            <div>
                                <button className='btn btn-info'>Read More</button>
                            </div>
                        </div>
                        <div>
                            <Link to="#" className='relative mb-4 block'>
                                <img src={gallery8} alt="Blog Post" className='w-full h-full object-cover max-h-[400px] rounded-md' />
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
                                <Link to="/blog-detail">All photographs are accurate. None of them is the truth</Link>
                            </h5>
                            <p className='mb-6'>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                            <div>
                                <button className='btn btn-info'>Read More</button>
                            </div>
                        </div>
                        <div>
                            <Link to="#" className='relative mb-4 block'>
                                <img src={gallery14} alt="Blog Post" className='w-full h-full object-cover max-h-[400px] rounded-md' />
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
                                <Link to="/blog-detail">All photographs are accurate. None of them is the truth</Link>
                            </h5>
                            <p className='mb-6'>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                            <div>
                                <button className='btn btn-info'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <ul className='flex items-center gap-2 flex-wrap'>
                        <li>
                            <Link to="#" className='px-2 py-1 rounded-full inline-block transition-all hover:bg-border-color'>Previous</Link>
                        </li>
                        <li>
                            <Link to="#" className='w-[30px] h-[30px] min-w-[30px] rounded-full inline-flex items-center justify-center shadow-shadow-sm bg-blue text-white'>1</Link>
                        </li>
                        <li>
                            <Link to="#" className='w-[30px] h-[30px] min-w-[30px] rounded-full inline-flex items-center justify-center transition-all hover:bg-border-color'>2</Link>
                        </li>
                        <li>
                            <Link to="#" className='w-[30px] h-[30px] min-w-[30px] rounded-full inline-flex items-center justify-center transition-all hover:bg-border-color'>3</Link>
                        </li>
                        <li>
                            <Link to="#" className='px-2 py-1 rounded-full inline-block transition-all hover:bg-border-color'>Next</Link>
                        </li>
                    </ul>
                </div>
                <div className='lg:col-span-4 col-span-12'>
                    <BlogSidebar />
                </div>
            </div>
        </>
    )
}
