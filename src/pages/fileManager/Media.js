import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Breadcrumb from '../../components/common/Breadcrumb'
import { Link } from 'react-router-dom';
import {
    IconUpload,
    IconTrash,
    IconVideo,
    IconMovie,
} from '@tabler/icons-react'

export default function Media() {

    const breadcrumbItem = [
        {
            name: "File Manager",
        },
        {
            name: "Media",
        },
    ]

    const documentsMedia2019 = [
        {
            icon: IconVideo,
            iconColor: 'text-orange-500',
            name: "New.mp4",
            size: "720MB",
            date: "Dec 08, 2019",
        },
        {
            icon: IconMovie,
            iconColor: 'text-sky',
            name: "Sample.mkv",
            size: "32MB",
            date: "Oct 15, 2016",
        },
        {
            icon: IconVideo,
            iconColor: 'text-orange-500',
            name: "New.mp4",
            size: "720MB",
            date: "Dec 08, 2019",
        },
        {
            icon: IconMovie,
            iconColor: 'text-sky',
            name: "Sample.mkv",
            size: "32MB",
            date: "Oct 15, 2016",
        },
        {
            icon: IconVideo,
            iconColor: 'text-orange-500',
            name: "New.mp4",
            size: "720MB",
            date: "Dec 08, 2019",
        },
        {
            icon: IconMovie,
            iconColor: 'text-sky',
            name: "Sample.mkv",
            size: "32MB",
            date: "Oct 15, 2016",
        },
    ]

    const documentsMedia2016 = [
        {
            icon: IconMovie,
            iconColor: 'text-sky',
            name: "Sample.mkv",
            size: "32MB",
            date: "Oct 15, 2016",
        },
        {
            icon: IconVideo,
            iconColor: 'text-orange-500',
            name: "New.mp4",
            size: "720MB",
            date: "Dec 08, 2019",
        },
        {
            icon: IconVideo,
            iconColor: 'text-orange-500',
            name: "New.mp4",
            size: "720MB",
            date: "Dec 08, 2019",
        },
        {
            icon: IconMovie,
            iconColor: 'text-sky',
            name: "Sample.mkv",
            size: "32MB",
            date: "Oct 15, 2016",
        },
        {
            icon: IconVideo,
            iconColor: 'text-orange-500',
            name: "New.mp4",
            size: "720MB",
            date: "Dec 08, 2019",
        },
        {
            icon: IconVideo,
            iconColor: 'text-orange-500',
            name: "New.mp4",
            size: "720MB",
            date: "Dec 08, 2019",
        },
        {
            icon: IconMovie,
            iconColor: 'text-sky',
            name: "Sample.mkv",
            size: "32MB",
            date: "Oct 15, 2016",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Media" buttonContent={<IconUpload className='w-[18px] h-[18px] min-w-[18px]' />} buttonUrl="#" />
            <Tabs>
                <TabList className='flex items-center gap-5 mb-20'>
                    <Tab className="text-font-color-100 py-2 px-6 border border-transparent rounded-full cursor-pointer" selectedClassName='!text-primary !border-font-color-100'>
                        2019
                    </Tab>
                    <Tab className="text-font-color-100 py-2 px-6 border border-transparent rounded-full cursor-pointer" selectedClassName='!text-primary !border-font-color-100'>
                        2016
                    </Tab>
                </TabList>
                <TabPanel>
                    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-30 gap-15'>
                        {documentsMedia2019.map((item, key) => (
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
                        {documentsMedia2016.map((item, key) => (
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
