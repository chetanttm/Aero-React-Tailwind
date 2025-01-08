import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import ReactDataTable from 'react-data-table-component';
import Breadcrumb from '../../components/common/Breadcrumb'
import { Link } from 'react-router-dom';
import {
    IconPhoto,
    IconFile,
    IconDeviceFloppy,
    IconMusic,
    IconFolderFilled,
    IconFileTypeXls,
    IconFileTypePdf,
    IconUpload,
    IconTrash,
    IconVideo,
    IconFileTypeDoc,
    IconFileMusic,
} from '@tabler/icons-react'
import {
    gallery1,
    gallery2,
    gallery3,
    gallery8,
} from '../../assets/images';

export default function AllFiles() {

    const breadcrumbItem = [
        {
            name: "File Manager",
        },
        {
            name: "Dashboard",
        },
    ]

    const columnsInvoice = [
        {
            name: 'NAME',
            selector: row => row.name,
            cell: row =>
                <div className='flex items-center gap-2'>
                    <row.icon className={`w-[18px] h-[18px] min-w-[18px] ${row.iconColor}`} />
                    {row.name}
                </div>,
            sortable: true,
            width: '400px',
        },
        {
            name: 'OWNER',
            selector: row => row.owner,
            sortable: true,
        },
        {
            name: 'Last Modified',
            selector: row => row.lastModified,
            sortable: true,
        },
        {
            name: 'FILE SIZE',
            selector: row => row.fileSize,
            sortable: true,
        },
    ];

    const dataInvoice = [
        {
            name: 'My Projects',
            icon: IconFolderFilled,
            owner: 'Me',
            lastModified: 'Mar 26, 2019',
            fileSize: '-',
        },
        {
            name: 'Sample Website proposals',
            icon: IconFolderFilled,
            owner: 'Me',
            lastModified: 'Apr 09, 2019',
            fileSize: '-',
        },
        {
            name: 'WordPress | Codester',
            icon: IconFolderFilled,
            owner: 'Me',
            lastModified: 'Dec 19, 2016',
            fileSize: '-',
        },
        {
            name: 'VueJs Projects for client',
            icon: IconFolderFilled,
            owner: 'Me',
            lastModified: 'Apr 22, 2018',
            fileSize: '-',
        },
        {
            name: 'Angular Website proposals',
            icon: IconFolderFilled,
            owner: 'Me',
            lastModified: 'Feb 11, 2018',
            fileSize: '-',
        },
        {
            name: 'Dribbble | Website',
            icon: IconFolderFilled,
            owner: 'Me',
            lastModified: '	Aug 13, 2018',
            fileSize: '-',
        },
        {
            name: 'Document of Understanding',
            icon: IconFileTypeDoc,
            iconColor: 'text-orange-500',
            owner: 'Me',
            lastModified: 'Apr 26, 2018',
            fileSize: '67KB',
        },
        {
            name: 'Report2016.xls',
            icon: IconFileTypeXls,
            iconColor: 'text-sky',
            owner: 'Me',
            lastModified: 'Apr 26, 2018',
            fileSize: '25KB',
        },
        {
            name: 'Sample.pdf',
            icon: IconFileTypePdf,
            iconColor: 'text-danger',
            owner: 'Me',
            lastModified: 'Apr 26, 2018',
            fileSize: '1MB',
        },
        {
            name: 'Sample.pdf',
            icon: IconFileTypePdf,
            iconColor: 'text-danger',
            owner: 'Me',
            lastModified: 'Sept 14, 2018',
            fileSize: '1MB',
        },
        {
            name: 'Document of Understanding',
            icon: IconFileTypeDoc,
            iconColor: 'text-orange-500',
            owner: 'Me',
            lastModified: 'Apr 26, 2018',
            fileSize: '15KB',
        },
        {
            name: 'Report2016.xls',
            icon: IconFileTypeXls,
            iconColor: 'text-sky',
            owner: 'Me',
            lastModified: 'Oct 17, 2018',
            fileSize: '08KB',
        },
    ]

    const allFilesGrid = [
        {
            icon: IconVideo,
            iconColor: 'text-success',
            name: "Video Song.mp4",
            size: "32MB",
            date: "Oct 11, 2016",
        },
        {
            image: gallery3,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Nov 11, 2018",
        },
        {
            icon: IconVideo,
            iconColor: 'text-success',
            name: "new.mkv",
            size: "720MB",
            date: "Feb 16, 2016",
        },
        {
            icon: IconFileTypeXls,
            iconColor: 'text-sky',
            name: "Report2018.xls",
            size: "103KB",
            date: "Jan 24, 2016",
        },
        {
            image: gallery2,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Dev 11, 2018",
        },
        {
            icon: IconFileTypeDoc,
            iconColor: 'text-orange-500',
            name: "Document_2018.doc",
            size: "42KB",
            date: "Nov 02, 2018",
        },
        {
            image: gallery1,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Dev 11, 2018",
        },
        {
            icon: IconFileMusic,
            iconColor: 'text-info',
            name: "new_song.mp3",
            size: "8MB",
            date: "Dec 11, 2018",
        },
        {
            icon: IconFileTypePdf,
            iconColor: 'text-danger',
            name: "sample.pdf",
            size: "2.53MB",
            date: "Aug 18, 2018",
        },
        {
            icon: IconFileTypeXls,
            iconColor: 'text-sky',
            name: "Report2018.xls",
            size: "103KB",
            date: "Jan 24, 2016",
        },
        {
            image: gallery8,
            name: "img21545ds.jpg",
            size: "2MB",
            date: "Dev 11, 2018",
        },
        {
            icon: IconFileTypeDoc,
            iconColor: 'text-orange-500',
            name: "Document_2018.doc",
            size: "42KB",
            date: "Nov 02, 2018",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="File Manager" buttonContent={<IconUpload className='w-[18px] h-[18px] min-w-[18px]' />} buttonUrl="#" />
            <div className='mb-20 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
                <div className='card relative overflow-hidden bg-card-color md:p-20 p-15 rounded-md group'>
                    <IconDeviceFloppy className='w-[84px] h-[84px] opacity-40 text-font-color-200 rotate-[20deg] absolute -top-20 end-40 transition-all duration-500 group-hover:-rotate-[20deg]' />
                    <h6 className='font-bold uppercase text-[14px]/[1.5] mb-2'>Storage</h6>
                    <h2 className='mb-2'>
                        <span className='text-[32px]/[1] d-inline-block me-5'>32GB</span>
                        <small>of 1Tb</small>
                    </h2>
                    <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                        <div className="progress-bar w-[42%] bg-orange-300 h-full"></div>
                    </div>
                </div>
                <div className='card relative overflow-hidden bg-card-color md:p-20 p-15 rounded-md group'>
                    <IconFile className='w-[84px] h-[84px] opacity-40 text-font-color-200 rotate-[20deg] absolute -top-20 end-40 transition-all duration-500 group-hover:-rotate-[20deg]' />
                    <h6 className='font-bold uppercase text-[14px]/[1.5] mb-2'>Documents</h6>
                    <h2 className='mb-2'>
                        <span className='text-[32px]/[1] d-inline-block me-5'>2GB</span>
                        <small>of 1Tb</small>
                    </h2>
                    <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                        <div className="progress-bar w-[25%] bg-blue h-full"></div>
                    </div>
                </div>
                <div className='card relative overflow-hidden bg-card-color md:p-20 p-15 rounded-md group'>
                    <IconPhoto className='w-[84px] h-[84px] opacity-40 text-font-color-200 rotate-[20deg] absolute -top-20 end-40 transition-all duration-500 group-hover:-rotate-[20deg]' />
                    <h6 className='font-bold uppercase text-[14px]/[1.5] mb-2'>Images</h6>
                    <h2 className='mb-2'>
                        <span className='text-[32px]/[1] d-inline-block me-5'>20GB</span>
                        <small>of 1Tb</small>
                    </h2>
                    <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                        <div className="progress-bar w-[55%] bg-purple h-full"></div>
                    </div>
                </div>
                <div className='card relative overflow-hidden bg-card-color md:p-20 p-15 rounded-md group'>
                    <IconMusic className='w-[84px] h-[84px] opacity-40 text-font-color-200 rotate-[20deg] absolute -top-20 end-40 transition-all duration-500 group-hover:-rotate-[20deg]' />
                    <h6 className='font-bold uppercase text-[14px]/[1.5] mb-2'>Media</h6>
                    <h2 className='mb-2'>
                        <span className='text-[32px]/[1] d-inline-block me-5'>10GB</span>
                        <small>of 1Tb</small>
                    </h2>
                    <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                        <div className="progress-bar w-[89%] bg-success h-full"></div>
                    </div>
                </div>
            </div>
            <Tabs>
                <TabList className='flex items-center gap-5 mb-20'>
                    <Tab className="text-font-color-100 py-2 px-6 border border-transparent rounded-full cursor-pointer" selectedClassName='!text-primary !border-font-color-100'>
                        List View
                    </Tab>
                    <Tab className="text-font-color-100 py-2 px-6 border border-transparent rounded-full cursor-pointer" selectedClassName='!text-primary !border-font-color-100'>
                        Grid View
                    </Tab>
                </TabList>
                <TabPanel>
                    <div className='react-data-table overflow-auto'>
                        <ReactDataTable
                            columns={columnsInvoice}
                            data={dataInvoice}
                            pagination
                            className='min-w-[1000px]'
                        />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-30 gap-15'>
                        {allFilesGrid.map((item, key) => (
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
