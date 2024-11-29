import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTwitter,
    IconEdit,
    IconStarFilled,
    IconStarHalfFilled,
} from '@tabler/icons-react'
import { userProfile } from '../assets/images'
import { Link } from 'react-router-dom'

export default function OurProfile() {

    const breadcrumbItem = [
        {
            name: "Our Profile",
        },
    ]

    const templateList = [
        {
            image: 'http://www.wrraptheme.com//templates/preview/arrowlite.png',
            title: 'Arrowlite - Responsive Admin Dashboard Template',
            content: 'Arrowlite, a next generation modern and clean Bootstrap 4x dashboard and admin template using flat, modern and minimal design.',
            previewUrl: 'https://www.thememakker.com/template/',
            downloadUrl: 'https://www.thememakker.com/template/',
        },
        {
            image: 'http://www.wrraptheme.com//templates/preview/nexa.png',
            title: 'Nexa - Bootstrap4 Material Design Premium Admin Dashboard',
            content: 'Nexa Admin is Material Design premium admin dashboard theme. It’s builded on popular Twitter Bootstrap 4 framework.',
            previewUrl: 'https://www.thememakker.com/template/',
            downloadUrl: 'https://www.thememakker.com/template/',
        },
        {
            image: 'http://www.wrraptheme.com//templates/preview/lucid-angular.png',
            title: 'Lucid - Angular 8 Admin Template',
            content: 'Lucid Angular Admin Template is a popular open source WebApp Angular template for Angular admin dashboards and admin panels.',
            previewUrl: 'https://www.thememakker.com/template/',
            downloadUrl: 'https://www.thememakker.com/template/',
        },
        {
            image: 'http://www.wrraptheme.com//templates/preview/hexabit.png',
            title: 'HexaBit - Bootstrap 4x Admin Template ui kit',
            content: 'Easy and elegant interface which gives you an outstanding experience. Take a stab at HexaBit demos and find it out by yourself.',
            previewUrl: 'https://www.thememakker.com/template/',
            downloadUrl: 'https://www.thememakker.com/template/',
        },
        {
            image: 'http://www.wrraptheme.com//templates/preview/compass.png',
            title: 'Compass Bundle -Bootstrap 4 Admin for Hospital RealEstate eCommerce',
            content: 'Compass Admin is Material Design premium admin dashboard theme. It’s builded on popular Twitter Bootstrap4 framework.',
            previewUrl: 'https://www.thememakker.com/template/',
            downloadUrl: 'https://www.thememakker.com/template/',
        },
        {
            image: 'http://www.wrraptheme.com//templates/preview/lucid-hr.png',
            title: 'Lucid - HR and Project Management Admin Template',
            content: 'It comes with extensive profiles for candidates, agents, teams of agents, jobs, professionals & companies.',
            previewUrl: 'https://www.thememakker.com/template/',
            downloadUrl: 'https://www.thememakker.com/template/',
        },
        {
            image: 'http://www.wrraptheme.com//templates/preview/lucid-hospital.png',
            title: 'Lucid - Hospital Management Admin Dashboard Template',
            content: 'It is really appropriate template for Doctors, Dentists, Hospitals, Health clinics, Surgeons and medical organization.',
            previewUrl: 'https://www.thememakker.com/template/',
            downloadUrl: 'https://www.thememakker.com/template/',
        },
        {
            image: 'http://www.wrraptheme.com//templates/preview/square.png',
            title: 'sQuare - Bootstrap 4 Admin Dashboard Template',
            content: 'sQuare Admin is Material Design premium admin dashboard theme. It’s builded on popular Twitter Bootstrap4 framework.',
            previewUrl: 'https://www.thememakker.com/template/',
            downloadUrl: 'https://www.thememakker.com/template/',
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Our Profile" buttonContent={<IconEdit className='w-[18px] h-[18px] min-w-[18px]' />} buttonUrl="#" />
            <div className='grid lg:grid-cols-[1fr_2fr] grid-cols-1 gap-4 items-start'>
                <div className='flex flex-col gap-4'>
                    <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='flex flex-col gap-2 items-center mb-4'>
                                <Link to="#" className='inline-block'>
                                    <img src={userProfile} alt='user profile' width="140" height="140" className='rounded-full' />
                                </Link>
                                <Link to="#" className='text-[26px]/[1.5] font-medium'>WrapTheme</Link>
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
                            <div className='flex gap-1 mb-6'>
                                <Link to="https://themeforest.net/user/wrraptheme/portfolio" className='btn btn-danger'>
                                    Our Portfolio
                                </Link>
                                <Link to="https://thememakker.com" className='btn btn-success'>
                                    More Template
                                </Link>
                            </div>
                            <div className='grid grid-cols-3 gap-4 w-full'>
                                <div className='text-center'>
                                    <small>Experience</small>
                                    <h5 className='text-[22px]/[1.5] font-medium'>6+ Year</h5>
                                </div>
                                <div className='text-center'>
                                    <small>Hourly Rate</small>
                                    <h5 className='text-[22px]/[1.5] font-medium'>18$</h5>
                                </div>
                                <div className='text-center'>
                                    <small>Team</small>
                                    <h5 className='text-[22px]/[1.5] font-medium'>25+</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                        <div className='pb-4 mb-4 border-b border-border-color'>
                            <small className="text-font-color-100 mb-1 inline-block">Reviews :</small>
                            <div className='flex gap-1'>
                                <IconStarFilled className='text-orange-500 w-[16px] h-[16px] min-w-[16px]' />
                                <IconStarFilled className='text-orange-500 w-[16px] h-[16px] min-w-[16px]' />
                                <IconStarFilled className='text-orange-500 w-[16px] h-[16px] min-w-[16px]' />
                                <IconStarFilled className='text-orange-500 w-[16px] h-[16px] min-w-[16px]' />
                                <IconStarHalfFilled className='text-orange-500 w-[16px] h-[16px] min-w-[16px]' />
                            </div>
                        </div>
                        <div className='pb-4 mb-4 border-b border-border-color'>
                            <small className="text-font-color-100 mb-1 inline-block">Email address :</small>
                            <p>wraptheme@gmail.com</p>
                        </div>
                        <div className='pb-4 mb-4 border-b border-border-color'>
                            <p>We offer development services in Angular, Laravel, WordPress, React and many other platforms.</p>
                        </div>
                        <ul className='flex flex-col gap-2'>
                            <li>
                                <div>Angular</div>
                                <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                                    <div className="progress-bar w-[89%] bg-primary h-full"></div>
                                </div>
                            </li>
                            <li>
                                <div>Laravel</div>
                                <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                                    <div className="progress-bar w-[91%] bg-secondary h-full"></div>
                                </div>
                            </li>
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
                                <div>FrontEnd</div>
                                <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                                    <div className="progress-bar w-[78%] bg-orange-500 h-full"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                    {templateList.map((item, key) => (
                        <div key={key} className='card bg-card-color md:p-20 p-15 rounded-md'>
                            <img src={item.image} alt='template' width={446} height={227} className='p-1 rounded bg-border-color w-full' />
                            <h5 className='my-4 text-[22px]/[1.5] font-medium'>Arrowlite - Responsive Admin Dashboard Template</h5>
                            <p className='mb-4'>{item.content}</p>
                            <div className='flex flex-wrap items-center justify-between gap-2'>
                                <Link to={item.previewUrl} target='_blank' className='btn btn-info'>Preview</Link>
                                <Link to={item.downloadUrl} target='_blank' className='btn btn-danger'>Download Now</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
