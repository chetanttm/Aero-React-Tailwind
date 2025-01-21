import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import { Link } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import { SlideshowLightbox } from 'lightbox.js-react'
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTwitter,
    IconDots,
    IconEdit,
    IconX,
} from '@tabler/icons-react'
import {
    userProfile,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
} from '../../assets/images'

export default function Profile() {

    const breadcrumbItem = [
        {
            name: "Pages",
        },
        {
            name: "Profile",
        },
    ]

    const galleryPhotos = [
        {
            image: gallery1,
        },
        {
            image: gallery2,
        },
        {
            image: gallery3,
        },
        {
            image: gallery4,
        },
        {
            image: gallery5,
        },
        {
            image: gallery6,
        },
        {
            image: gallery7,
        },
        {
            image: gallery8,
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Profile" buttonContent={<IconEdit className='w-[18px] h-[18px] min-w-[18px]' />} buttonUrl="#" />
            <div className='grid lg:grid-cols-[1fr_2fr] grid-cols-1 gap-4 items-start'>
                <div className='flex flex-col gap-4'>
                    <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='flex flex-col gap-2 items-center mb-4'>
                                <Link to="#" className='inline-block'>
                                    <img src={userProfile} alt='user profile' width="140" height="140" className='rounded-full' />
                                </Link>
                                <Link to="#" className='text-[26px]/[1.5] font-medium'>Michael Dorsey</Link>
                            </div>
                            <ul className='flex items-center gap-4 mb-6'>
                                <li>
                                    <Link to="#">
                                        <IconBrandFacebook className='text-sky' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <IconBrandTwitter className='text-sky' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <IconBrandInstagram className='text-sky' />
                                    </Link>
                                </li>
                            </ul>
                            <p className='text-font-color-100 mb-3 text-center'>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                            <div className='grid grid-cols-3 gap-4 w-full'>
                                <div className='text-center'>
                                    <small>Following</small>
                                    <h5 className='text-[22px]/[1.5] font-medium'>852</h5>
                                </div>
                                <div className='text-center'>
                                    <small>Followers</small>
                                    <h5 className='text-[22px]/[1.5] font-medium'>13K</h5>
                                </div>
                                <div className='text-center'>
                                    <small>Post</small>
                                    <h5 className='text-[22px]/[1.5] font-medium'>234</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                        <div className='pb-4 mb-4 border-b border-border-color'>
                            <small className="text-font-color-100 inline-block">Email address :</small>
                            <p>wraptheme@gmail.com</p>
                        </div>
                        <div className='pb-4 mb-4 border-b border-border-color'>
                            <small className="text-font-color-100 inline-block">Phone :</small>
                            <p>+ 202-555-0191</p>
                        </div>
                        <ul className='flex flex-col gap-2 mb-4'>
                            <li>
                                <div>Photoshop</div>
                                <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                                    <div className="progress-bar w-[72%] bg-blue h-full"></div>
                                </div>
                            </li>
                            <li>
                                <div>Wordpress</div>
                                <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                                    <div className="progress-bar w-[63%] bg-success h-full"></div>
                                </div>
                            </li>
                            <li>
                                <div>HTML 5</div>
                                <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                                    <div className="progress-bar w-[78%] bg-orange-500 h-full"></div>
                                </div>
                            </li>
                            <li>
                                <div>Angular</div>
                                <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                                    <div className="progress-bar w-[89%] bg-primary h-full"></div>
                                </div>
                            </li>
                        </ul>
                        <p>We offer development services in Angular, Laravel, WordPress, React and many other platforms.</p>
                    </div>
                </div>
                <div>
                    <div className='card md:p-6 p-4 rounded-md bg-card-color mb-4'>
                        <FullCalendar
                            plugins={[interactionPlugin, dayGridPlugin]}
                            initialView="dayGridMonth"
                            editable
                            selectable
                            events="https://fullcalendar.io/demo-events.json"
                        />
                    </div>
                    <div>
                        <div className='flex items-center justify-between gap-2 mb-10'>
                            <h2 className='flex items-center gap-5 uppercase'>
                                <strong className='text-primary flex items-center'>
                                    Media
                                </strong>
                                Gallery
                            </h2>
                            <div className='flex items-center gap-2'>
                                <button>
                                    <IconDots />
                                </button>
                                <button>
                                    <IconX />
                                </button>
                            </div>
                        </div>
                        <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                            <p className='mb-4'>All pictures taken from <Link to="https://www.pexels.com/" target='_blank' className='text-sky'>pexels.com</Link></p>
                            <SlideshowLightbox showThumbnails onOpen={() => { document.body.classList.add("overflow-hidden") }} onClose={() => { document.body.classList.remove("overflow-hidden") }} className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-full">
                                {galleryPhotos.map((item, key) => (
                                    <img key={key} src={item.image} alt='gallery' className="w-full rounded p-1 bg-border-color" />
                                ))}
                            </SlideshowLightbox>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
