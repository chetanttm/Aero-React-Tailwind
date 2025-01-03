import React from 'react'
import { Link } from 'react-router-dom'
import {
    IconSearch,
    IconSend,
} from '@tabler/icons-react'
import {
    gallery1,
    gallery2,
    gallery3,
    gallery4,
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

export default function BlogSidebar() {

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
            <div className='bg-card-color rounded-md md:p-20 p-15 mb-4'>
                <div className='relative w-full overflow-hidden'>
                    <button aria-label="search icon" className="absolute top-[50%] translate-y-[-50%] border-s border-border-color end-[1px] py-[6px] px-[12px] min-h-[33px] rounded-e-md">
                        <IconSearch className="text-font-color w-[20px] h-[20px]" />
                    </button>
                    <input type='text' id='search' name='search' placeholder='Search...' className='bg-content-color border border-border-color w-full py-[6px] ps-[12px] pe-60 min-h-[35px] rounded-md focus:outline-none' />
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
                        <Link to="/blog-detail">
                            <img src={gallery1} alt='recent post' className='w-full max-w-[70px]' />
                        </Link>
                        <div className='flex flex-col'>
                            <Link to="/blog-detail" className='text-sky font-medium'>Fundamental analysis services</Link>
                            <small className='text-font-color-100'>August 01, 2018</small>
                        </div>
                    </li>
                    <li className='flex gap-20'>
                        <Link to="/blog-detail">
                            <img src={gallery2} alt='recent post' className='w-full max-w-[70px]' />
                        </Link>
                        <div className='flex flex-col'>
                            <Link to="/blog-detail" className='text-sky font-medium'>Fundamental analysis services</Link>
                            <small className='text-font-color-100'>August 01, 2018</small>
                        </div>
                    </li>
                    <li className='flex gap-20'>
                        <Link to="/blog-detail">
                            <img src={gallery3} alt='recent post' className='w-full max-w-[70px]' />
                        </Link>
                        <div className='flex flex-col'>
                            <Link to="/blog-detail" className='text-sky font-medium'>Fundamental analysis services</Link>
                            <small className='text-font-color-100'>August 01, 2018</small>
                        </div>
                    </li>
                    <li className='flex gap-20'>
                        <Link to="/blog-detail">
                            <img src={gallery4} alt='recent post' className='w-full max-w-[70px]' />
                        </Link>
                        <div className='flex flex-col'>
                            <Link to="/blog-detail" className='text-sky font-medium'>Fundamental analysis services</Link>
                            <small className='text-font-color-100'>August 01, 2018</small>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='mb-4'>
                <div className='flex items-center justify-between gap-2 mb-10'>
                    <h2 className='flex items-center gap-5 uppercase'>
                        <strong className='text-primary flex items-center'>
                            Tag
                        </strong>
                        Clouds
                    </h2>
                </div>
                <ul className='bg-card-color rounded-md md:p-20 p-15 flex flex-wrap gap-10'>
                    <li>
                        <Link to="#" className="px-2 py-[3px] min-w-fit rounded bg-grey text-white text-[12px]/[1] font-bold">
                            Design
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="px-2 py-[3px] min-w-fit rounded bg-success text-white text-[12px]/[1] font-bold">
                            Project
                        </Link>
                    </li><li>
                        <Link to="#" className="px-2 py-[3px] min-w-fit rounded bg-info text-white text-[12px]/[1] font-bold">
                            Creative UX
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="px-2 py-[3px] min-w-fit rounded bg-danger text-white text-[12px]/[1] font-bold">
                            Wordpress
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="px-2 py-[3px] min-w-fit rounded bg-orange-500 text-white text-[12px]/[1] font-bold">
                            HTML5
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="px-2 py-[3px] min-w-fit rounded bg-blue text-white text-[12px]/[1] font-bold">
                            Development
                        </Link>
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
                        <input type='text' id='chatInput' name='chatInput' placeholder='Enter Email...' className='bg-content-color border border-border-color w-full py-[6px] ps-[12px] pe-60  min-h-[35px] rounded-[4px] placeholder:text-font-color-100 focus:outline-none' />
                        <button aria-label="search icon" className="absolute top-[50%] translate-y-[-50%] border-s border-s-border-color end-[1px] py-[6px] px-[12px] min-h-[33px] bg-content-color rounded-e-[3px]">
                            <IconSend className="w-[20px] h-[20px]" />
                        </button>
                    </div>
                    <small>Get our products/news earlier than others, let’s get in touch.</small>
                </div>
            </div>
        </>
    )
}
