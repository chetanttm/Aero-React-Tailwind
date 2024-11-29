import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EmailSidebar from './EmailSidebar'
import {
    IconArrowBackUp,
    IconArrowForwardUp,
    IconArrowLeft,
    IconCaretDownFilled,
    IconFileTypeDoc,
    IconFileTypePdf,
    IconFileTypeXls,
    IconStar,
    IconTrashFilled,
} from '@tabler/icons-react'
import {
    avatar1,
} from '../../../assets/images'
import Breadcrumb from '../../../components/common/Breadcrumb'

export default function EmailDetail() {

    const [emailSide, setEmailSide] = useState(false)
    const emailSideToggle = () => {
        setEmailSide(!emailSide)
    }

    const breadcrumbItem = [
        {
            link: "Inbox",
            url: "/app-email",
        },
        {
            name: "View Email",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Inbox" />
            <div className='flex'>
                <EmailSidebar emailSide={emailSide} />
                <div className='flex-1 card lg:ms-20 bg-card-color'>
                    <div className='card bg-card-color overflow-hidden'>
                        <div className='md:p-6 p-4 flex lg:items-center gap-4 lg:flex-row flex-col-reverse'>
                            <div className='flex gap-4 items-center flex-1'>
                                <Link to="/app-email" title='Back'>
                                    <IconArrowLeft className='stroke-[3] stroke-primary rtl:rotate-180' />
                                </Link>
                                <p className='md:text-[20px]/[24px] font-semibold'>
                                    Project Outsourcing/Lead Generation/Freelancer Bidder
                                </p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <small className='flex-1'>
                                    Jul 29, 2019, 4:37 PM
                                </small>
                                <button title='Favourite' className='text-blue'>
                                    <IconStar className='w-[20px] h-[20px]' />
                                </button>
                                <button title='Reply' className='text-blue'>
                                    <IconArrowBackUp className='w-[20px] h-[20px]' />
                                </button>
                                <button title='Delete' className='text-danger'>
                                    <IconTrashFilled className='w-[20px] h-[20px]' />
                                </button>
                                <button onClick={emailSideToggle} className={`hamburger-menu lg:hidden bg-primary p-1 rounded-md text-white ${emailSide ? 'opened' : ''}`}>
                                    <svg width="20" height="20" viewBox="0 0 100 100">
                                        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                        <path className="line line2" d="M 20,50 H 80" />
                                        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='py-4 md:px-6 px-4 flex gap-4'>
                            <img src={avatar1} alt='avatar' width="36" height="36" className='w-[36px] h-[36px] min-w-[36px] rounded-md mt-2' />
                            <div className='flex flex-col gap-5'>
                                <p className='flex flex-wrap gap-x-5'>
                                    Marshall Nichols
                                    <Link to="#" className='text-primary transition-all hover:text-secondary'>
                                        info@examples.com
                                    </Link>
                                </p>
                                <div className='flex gap-5'>
                                    <span>
                                        To :
                                    </span>
                                    <div className='relative group'>
                                        <button className='flex items-center gap-1 text-blue underline'>
                                            Me
                                            <IconCaretDownFilled className='w-[14px] h-[14px]' />
                                        </button>
                                        <div className='bg-card-color text-font-color rounded-xl overflow-auto max-h-[300px] no-scrollbar w-[210px] shadow-shadow-lg absolute -left-30 rtl:-right-30 top-full origin-top-left rtl:origin-top-right z-[1] opacity-0 invisible scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:scale-100'>
                                            <div className='p-4 flex flex-col gap-2'>
                                                <div className='flex gap-2 text-[14px]/[20px]'>
                                                    <span className='inline-block min-w-fit'>
                                                        from :
                                                    </span>
                                                    <div>
                                                        <p className='text-font-color-100'>
                                                            Info-TM
                                                        </p>
                                                        <Link to="#" className='text-primary transition-all hover:text-secondary'>
                                                            info@example.com
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className='flex gap-2 text-[14px]/[20px]'>
                                                    <span className='inline-block min-w-fit'>
                                                        to :
                                                    </span>
                                                    <div>
                                                        <p className='text-font-color-100'>
                                                            Chris Fox
                                                        </p>
                                                        <Link to="#" className='text-primary transition-all hover:text-secondary'>
                                                            info@example.com
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className='flex gap-2 text-[14px]/[20px]'>
                                                    <span className='inline-block min-w-fit'>
                                                        cc :
                                                    </span>
                                                    <div>
                                                        <p className='text-font-color-100'>
                                                            Chris Fox
                                                        </p>
                                                        <Link to="#" className='text-primary transition-all hover:text-secondary'>
                                                            info@example.com
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className='flex gap-2 text-[14px]/[20px]'>
                                                    <span className='inline-block min-w-fit'>
                                                        date :
                                                    </span>
                                                    <div>
                                                        <p className='text-font-color-100'>
                                                            Aug 2, 2021, 11:27 AM
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex gap-2 text-[14px]/[20px]'>
                                                    <span className='inline-block min-w-fit'>
                                                        subject :
                                                    </span>
                                                    <div>
                                                        <p className='text-font-color-100'>
                                                            #1706W025010 | Payment Request
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:p-6 p-4'>
                            <div className='mb-6'>
                                <p>Hello,</p>
                                <br />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <br />
                                <p className='mb-4'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                                <ul className='mb-4 list-disc ps-4'>
                                    <li>standard dummy text ever since the 1500s, when an unknown printer</li>
                                    <li>Lorem Ipsum has been the industry's standard dummy</li>
                                </ul>
                                <p className="text-info">Purchase: SWIFT has not yet purchased this item from you.</p>
                            </div>
                            <div className="flex flex-wrap gap-1 mb-6">
                                <Link to="#" className="py-2 px-4 rounded-md flex items-center gap-4 border border-border-color transition-all hover:border-primary">
                                    <div className='w-[36px] h-[36px] min-w-[36px] rounded-full bg-body-color text-success flex items-center justify-center'>
                                        <IconFileTypeXls className='stroke-[1.5]' />
                                    </div>
                                    <div>
                                        <p>Report2017.xls</p>
                                        <div className="text-font-color-100 text-[14px]/[20px]">Size: 68KB</div>
                                    </div>
                                </Link>
                                <Link to="#" className="py-2 px-4 rounded-md flex items-center gap-4 border border-border-color transition-all hover:border-primary">
                                    <div className='w-[36px] h-[36px] min-w-[36px] rounded-full bg-body-color text-info flex items-center justify-center'>
                                        <IconFileTypeDoc className='stroke-[1.5]' />
                                    </div>
                                    <div>
                                        <p>Report2017.doc</p>
                                        <div className="text-font-color-100 text-[14px]/[20px]">Size: 68KB</div>
                                    </div>
                                </Link>
                                <Link to="#" className="py-2 px-4 rounded-md flex items-center gap-4 border border-border-color transition-all hover:border-primary">
                                    <div className='w-[36px] h-[36px] min-w-[36px] rounded-full bg-body-color text-danger flex items-center justify-center'>
                                        <IconFileTypePdf className='stroke-[1.5]' />
                                    </div>
                                    <div>
                                        <p>Report2017.pdf</p>
                                        <div className="text-font-color-100 text-[14px]/[20px]">Size: 168KB</div>
                                    </div>
                                </Link>
                            </div>
                            <div className='flex items-center gap-2'>
                                <button className='flex items-center gap-2 text-info p-2'>
                                    <IconArrowBackUp className='w-[18px] h-[18px]' />
                                    Reply
                                </button>
                                <span>or</span>
                                <button className='flex items-center gap-2 text-info p-2'>
                                    <IconArrowForwardUp className='w-[18px] h-[18px]' />
                                    Forward
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
