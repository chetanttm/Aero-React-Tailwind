import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Breadcrumb from '../../components/common/Breadcrumb'
import { Link } from 'react-router-dom';
import {
    IconFileTypeXls,
    IconFileTypePdf,
    IconUpload,
    IconTrash,
    IconFileTypeDoc,
} from '@tabler/icons-react'

export default function Documents() {

    const breadcrumbItem = [
        {
            name: "File Manager",
        },
        {
            name: "Documents",
        },
    ]

    const documentsDoc = [
        {
            icon: IconFileTypeDoc,
            iconColor: 'text-orange-500',
            name: "Document_2018.doc",
            size: "42KB",
            date: "Nov 02, 2018",
        },
        {
            icon: IconFileTypeDoc,
            iconColor: 'text-orange-500',
            name: "Document_2019.doc",
            size: "89KB",
            date: "Dec 15, 2019",
        },
        {
            icon: IconFileTypeDoc,
            iconColor: 'text-orange-500',
            name: "Document_2018.doc",
            size: "42KB",
            date: "Nov 02, 2018",
        },
        {
            icon: IconFileTypeDoc,
            iconColor: 'text-orange-500',
            name: "Document_2019.doc",
            size: "89KB",
            date: "Dec 15, 2019",
        },
        {
            icon: IconFileTypeDoc,
            iconColor: 'text-orange-500',
            name: "Document_2018.doc",
            size: "42KB",
            date: "Nov 02, 2018",
        },
        {
            icon: IconFileTypeDoc,
            iconColor: 'text-orange-500',
            name: "Document_2019.doc",
            size: "89KB",
            date: "Dec 15, 2019",
        },
    ]

    const documentsPdf = [
        {
            icon: IconFileTypePdf,
            iconColor: 'text-danger',
            name: "Sample.pdf",
            size: "3MB",
            date: "Nov 02, 2018",
        },
        {
            icon: IconFileTypePdf,
            iconColor: 'text-danger',
            name: "Sample.pdf",
            size: "89KB",
            date: "Dec 15, 2019",
        },
        {
            icon: IconFileTypePdf,
            iconColor: 'text-danger',
            name: "Sample.pdf",
            size: "3MB",
            date: "Nov 02, 2018",
        },
        {
            icon: IconFileTypePdf,
            iconColor: 'text-danger',
            name: "Sample.pdf",
            size: "89KB",
            date: "Dec 15, 2019",
        },
    ]

    const documentsXls = [
        {
            icon: IconFileTypeXls,
            iconColor: 'text-sky',
            name: "Report2016.xls",
            size: "89KB",
            date: "Dec 12, 2016",
        },
        {
            icon: IconFileTypeXls,
            iconColor: 'text-sky',
            name: "Report2019.xls",
            size: "103KB",
            date: "Jan 24, 2016",
        },
        {
            icon: IconFileTypeXls,
            iconColor: 'text-sky',
            name: "Report2016.xls",
            size: "89KB",
            date: "Dec 12, 2016",
        },
        {
            icon: IconFileTypeXls,
            iconColor: 'text-sky',
            name: "Report2019.xls",
            size: "103KB",
            date: "Jan 24, 2016",
        },
        {
            icon: IconFileTypeXls,
            iconColor: 'text-sky',
            name: "Report2016.xls",
            size: "89KB",
            date: "Dec 12, 2016",
        },
        {
            icon: IconFileTypeXls,
            iconColor: 'text-sky',
            name: "Report2019.xls",
            size: "103KB",
            date: "Jan 24, 2016",
        },
        {
            icon: IconFileTypeXls,
            iconColor: 'text-sky',
            name: "Report2016.xls",
            size: "89KB",
            date: "Dec 12, 2016",
        },
        {
            icon: IconFileTypeXls,
            iconColor: 'text-sky',
            name: "Report2019.xls",
            size: "103KB",
            date: "Jan 24, 2016",
        },
        {
            icon: IconFileTypeXls,
            iconColor: 'text-sky',
            name: "Report2016.xls",
            size: "89KB",
            date: "Dec 12, 2016",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Documents" buttonContent={<IconUpload className='w-[18px] h-[18px] min-w-[18px]' />} buttonUrl="#" />
            <Tabs>
                <TabList className='flex items-center gap-5 mb-20'>
                    <Tab className="text-font-color-100 py-2 px-6 border border-transparent rounded-full cursor-pointer" selectedClassName='!text-primary !border-font-color-100'>
                        Doc
                    </Tab>
                    <Tab className="text-font-color-100 py-2 px-6 border border-transparent rounded-full cursor-pointer" selectedClassName='!text-primary !border-font-color-100'>
                        PDF
                    </Tab>
                    <Tab className="text-font-color-100 py-2 px-6 border border-transparent rounded-full cursor-pointer" selectedClassName='!text-primary !border-font-color-100'>
                        XLS
                    </Tab>
                </TabList>
                <TabPanel>
                    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-30 gap-15'>
                        {documentsDoc.map((item, key) => (
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
                        {documentsPdf.map((item, key) => (
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
                        {documentsXls.map((item, key) => (
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
