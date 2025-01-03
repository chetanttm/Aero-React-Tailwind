import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Breadcrumb from '../../components/common/Breadcrumb'
import { Link } from 'react-router-dom';
import {
    IconUpload,
    IconTrash,
} from '@tabler/icons-react'
import {
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
} from '../../assets/images';

export default function Images() {

    const breadcrumbItem = [
        {
            name: "File Manager",
        },
        {
            name: "Images",
        },
    ]

    const documentsImages2020 = [
        {
            image: gallery1,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery2,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery3,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery4,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery5,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery6,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery7,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery8,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery9,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
    ]

    const documentsImages2018 = [
        {
            image: gallery10,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery11,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery12,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery13,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery14,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery15,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
    ]

    const documentsImages2016 = [
        {
            image: gallery2,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery3,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery5,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery6,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery9,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery10,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery11,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery13,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            image: gallery15,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Images" buttonContent={<IconUpload className='w-[18px] h-[18px] min-w-[18px]' />} buttonUrl="#" />
            <Tabs>
                <TabList className='flex items-center gap-5 mb-20'>
                    <Tab className="text-font-color-100 py-2 px-6 border border-transparent rounded-full cursor-pointer" selectedClassName='!text-primary !border-font-color-100'>
                        2020
                    </Tab>
                    <Tab className="text-font-color-100 py-2 px-6 border border-transparent rounded-full cursor-pointer" selectedClassName='!text-primary !border-font-color-100'>
                        2018
                    </Tab>
                    <Tab className="text-font-color-100 py-2 px-6 border border-transparent rounded-full cursor-pointer" selectedClassName='!text-primary !border-font-color-100'>
                        2016
                    </Tab>
                </TabList>
                <TabPanel>
                    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-30 gap-15'>
                        {documentsImages2020.map((item, key) => (
                            <Link to="#" key={key} className='bg-card-color shadow-light rounded-lg overflow-hidden relative group hover:shadow-shadow-sm'>
                                <div className='h-[180px] flex items-center justify-center'>
                                    {item.image ? <img src={item.image} alt='File Poster' width="378" height="236" className='aspect-video w-full h-full object-cover' />
                                        : item.icon ? <item.icon className={`w-[40px] h-[40px] min-w-[40px] ${item.iconColor}`} />
                                            : ''}
                                </div>
                                <div className='border-t border-border-color p-10'>
                                    <p className="mb-5 text-font-color-100">{item.name}</p>
                                    <small className='text-sky flex items-center justify-between gap-10'>
                                        Size: {item.size}
                                        <span className="text-font-color-100">{item.date}</span>
                                    </small>
                                </div>
                                <button className='bg-danger rounded-full p-2 absolute right-10 top-10 z-[1] hidden group-hover:block'>
                                    <IconTrash className='text-white w-[18px] h-[18px] stroke-[1.5]' />
                                </button>
                            </Link>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-30 gap-15'>
                        {documentsImages2018.map((item, key) => (
                            <Link to="#" key={key} className='bg-card-color shadow-light rounded-lg overflow-hidden relative group hover:shadow-shadow-sm'>
                                <div className='h-[180px] flex items-center justify-center'>
                                    {item.image ? <img src={item.image} alt='File Poster' width="378" height="236" className='aspect-video w-full h-full object-cover' />
                                        : item.icon ? <item.icon className={`w-[40px] h-[40px] min-w-[40px] ${item.iconColor}`} />
                                            : ''}
                                </div>
                                <div className='border-t border-border-color p-10'>
                                    <p className="mb-5 text-font-color-100">{item.name}</p>
                                    <small className='text-sky flex items-center justify-between gap-10'>
                                        Size: {item.size}
                                        <span className="text-font-color-100">{item.date}</span>
                                    </small>
                                </div>
                                <button className='bg-danger rounded-full p-2 absolute right-10 top-10 z-[1] hidden group-hover:block'>
                                    <IconTrash className='text-white w-[18px] h-[18px] stroke-[1.5]' />
                                </button>
                            </Link>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-30 gap-15'>
                        {documentsImages2016.map((item, key) => (
                            <Link to="#" key={key} className='bg-card-color shadow-light rounded-lg overflow-hidden relative group hover:shadow-shadow-sm'>
                                <div className='h-[180px] flex items-center justify-center'>
                                    {item.image ? <img src={item.image} alt='File Poster' width="378" height="236" className='aspect-video w-full h-full object-cover' />
                                        : item.icon ? <item.icon className={`w-[40px] h-[40px] min-w-[40px] ${item.iconColor}`} />
                                            : ''}
                                </div>
                                <div className='border-t border-border-color p-10'>
                                    <p className="mb-5 text-font-color-100">{item.name}</p>
                                    <small className='text-sky flex items-center justify-between gap-10'>
                                        Size: {item.size}
                                        <span className="text-font-color-100">{item.date}</span>
                                    </small>
                                </div>
                                <button className='bg-danger rounded-full p-2 absolute right-10 top-10 z-[1] hidden group-hover:block'>
                                    <IconTrash className='text-white w-[18px] h-[18px] stroke-[1.5]' />
                                </button>
                            </Link>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </>
    )
}
