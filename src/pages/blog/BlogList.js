import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import { Link } from 'react-router-dom'
import {
    gallery1,
    gallery14,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery7,
    gallery8,
    instaImage1,
    instaImage2,
    instaImage3,
    instaImage4,
    instaImage5,
    instaImage6,
    instaImage7,
    instaImage8,
    instaImage9,
} from '../../assets/images'
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconMessageFilled,
    IconSearch,
    IconSend,
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

    const instaPost = [
        {
            image: instaImage1,
        },
        {
            image: instaImage2,
        },
        {
            image: instaImage3,
        },
        {
            image: instaImage4,
        },
        {
            image: instaImage5,
        },
        {
            image: instaImage6,
        },
        {
            image: instaImage7,
        },
        {
            image: instaImage8,
        },
        {
            image: instaImage9,
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Blog List" />
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-8'>
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
                                <Link to="/blog-details">The Most Advance Business Plan</Link>
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
                                <Link to="/blog-details">WTCR from 2018: new rules, more cars, more races</Link>
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
                                <Link to="/blog-details">All photographs are accurate. None of them is the truth</Link>
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
                                <Link to="/blog-details">All photographs are accurate. None of them is the truth</Link>
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
                <div className='col-span-4'>
                    <div className='bg-card-color rounded-md md:p-20 p-15 mb-4'>
                        <div className='relative w-full overflow-hidden'>
                            <button aria-label="search icon" className="absolute top-[50%] translate-y-[-50%] h-full border-s border-border-color end-[1px] py-[6px] px-[12px] min-h-[33px] rounded-e-md">
                                <IconSearch className="text-text-primary w-[20px] h-[20px]" />
                            </button>
                            <input type='text' id='search' name='search' placeholder='Search...' className='border border-border-color w-full py-[6px] ps-[12px] pe-60 min-h-[35px] rounded-md focus:outline-none' />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <div className='flex items-center justify-between gap-2 mb-10'>
                            <h2 className='flex items-center gap-5 uppercase'>
                                <strong className='text-primary flex items-center'>
                                    Categories
                                </strong>
                            </h2>
                        </div>
                        <ul className='bg-card-color rounded-md md:p-20 p-15'>
                            <li>
                                <Link to="#" className='px-10 pb-10 mb-10 border-b border-border-color block transition-all duration-300 hover:font-bold hover:text-blue hover:ms-10'>- Business Report</Link>
                            </li>
                            <li>
                                <Link to="#" className='px-10 pb-10 mb-10 border-b border-border-color block transition-all duration-300 hover:font-bold hover:text-blue hover:ms-10'>- Business Growth</Link>
                            </li>
                            <li>
                                <Link to="#" className='px-10 pb-10 mb-10 border-b border-border-color block transition-all duration-300 hover:font-bold hover:text-blue hover:ms-10'>- Business Strategy</Link>
                            </li>
                            <li>
                                <Link to="#" className='px-10 pb-10 mb-10 border-b border-border-color block transition-all duration-300 hover:font-bold hover:text-blue hover:ms-10'>- Financial Advise</Link>
                            </li>
                            <li>
                                <Link to="#" className='px-10 pb-10 mb-10 border-b border-border-color block transition-all duration-300 hover:font-bold hover:text-blue hover:ms-10'>- Creative Idea</Link>
                            </li>
                            <li>
                                <Link to="#" className='px-10 block transition-all duration-300 hover:font-bold hover:text-blue hover:ms-10'>- Marketing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='mb-4'>
                        <div className='flex items-center justify-between gap-2 mb-10'>
                            <h2 className='flex items-center gap-5 uppercase'>
                                <strong className='text-primary flex items-center'>
                                    Recent
                                </strong>
                                Posts
                            </h2>
                        </div>
                        <ul className='bg-card-color rounded-md md:p-20 p-15 flex flex-col gap-10'>
                            <li className='flex gap-20'>
                                <Link to="/blog-details">
                                    <img src={gallery1} alt='recent post' className='w-full max-w-[70px]' />
                                </Link>
                                <div className='flex flex-col'>
                                    <Link to="/blog-details" className='text-sky font-medium'>Fundamental analysis services</Link>
                                    <small className='text-font-color-100'>August 01, 2018</small>
                                </div>
                            </li>
                            <li className='flex gap-20'>
                                <Link to="/blog-details">
                                    <img src={gallery2} alt='recent post' className='w-full max-w-[70px]' />
                                </Link>
                                <div className='flex flex-col'>
                                    <Link to="/blog-details" className='text-sky font-medium'>Fundamental analysis services</Link>
                                    <small className='text-font-color-100'>August 01, 2018</small>
                                </div>
                            </li>
                            <li className='flex gap-20'>
                                <Link to="/blog-details">
                                    <img src={gallery3} alt='recent post' className='w-full max-w-[70px]' />
                                </Link>
                                <div className='flex flex-col'>
                                    <Link to="/blog-details" className='text-sky font-medium'>Fundamental analysis services</Link>
                                    <small className='text-font-color-100'>August 01, 2018</small>
                                </div>
                            </li>
                            <li className='flex gap-20'>
                                <Link to="/blog-details">
                                    <img src={gallery4} alt='recent post' className='w-full max-w-[70px]' />
                                </Link>
                                <div className='flex flex-col'>
                                    <Link to="/blog-details" className='text-sky font-medium'>Fundamental analysis services</Link>
                                    <small className='text-font-color-100'>August 01, 2018</small>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='mb-4'>
                        <div className='flex items-center justify-between gap-2 mb-10'>
                            <h2 className='flex items-center gap-5 uppercase'>
                                <strong className='text-primary flex items-center'>
                                    Instagram
                                </strong>
                                Posts
                            </h2>
                        </div>
                        <div className='bg-card-color rounded-md md:p-20 p-15'>
                            <div className='flex flex-wrap gap-5'>
                                {instaPost.map((item, key) => (
                                    <Link key={key} to={item.url} className='flex'>
                                        <img src={item.image} width="90" height="90" alt='insta post' className='w-[109px] h-[109px] object-cover' />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center justify-between gap-2 mb-10'>
                            <h2 className='flex items-center gap-5 uppercase'>
                                <strong className='text-primary flex items-center'>
                                    Email
                                </strong>
                                Newsletter
                            </h2>
                        </div>
                        <div className='bg-card-color rounded-md md:p-20 p-15'>
                            <div className='relative w-full overflow-hidden mb-1'>
                                <input type='text' id='chatInput' name='chatInput' placeholder='Enter Email...' className='bg-bg-dark border border-border w-full py-[6px] pl-[12px] pr-60  min-h-[35px] rounded-[4px] placeholder:text-text-secondary focus:outline-none' />
                                <button aria-label="search icon" className="absolute top-[50%] translate-y-[-50%] border-l border-l-border right-[1px] py-[6px] px-[12px] min-h-[33px] bg-bg-light rounded-r-[3px]">
                                    <IconSend className="w-[20px] h-[20px]" />
                                </button>
                            </div>
                            <small>Get our products/news earlier than others, let’s get in touch.</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
