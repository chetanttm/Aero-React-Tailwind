import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    IconArchive,
    IconCaretDownFilled,
    IconChevronLeft,
    IconChevronRight,
    IconPaperclip,
    IconRefresh,
    IconStarFilled,
    IconTrash,
} from '@tabler/icons-react'
import {
    avatar1,
    avatar10,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
} from '../../../assets/images/index'
import EmailSidebar from './EmailSidebar'
import Breadcrumb from '../../../components/common/Breadcrumb'

export default function Email() {

    const [emailSide, setEmailSide] = useState(false)
    const emailSideToggle = () => {
        setEmailSide(!emailSide)
    }

    const breadcrumbItem = [
        {
            name: "Inbox",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Inbox" />
            <div className='flex'>
                <EmailSidebar emailSide={emailSide} />
                <div className='flex-1 card lg:ms-20 bg-card-color'>
                    <div className='md:p-6 p-4 flex sm:items-center justify-between sm:flex-row flex-col gap-10'>
                        <div className='flex items-center gap-4 sm:justify-normal justify-between'>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    id="emailAll"
                                    className="form-check-input"
                                />
                            </div>
                            <div className='flex items-stretch gap-5'>
                                <div className='btn-group'>
                                    <button title='Refresh' className='btn btn-secondary !p-2'>
                                        <IconRefresh className='w-[16px] h-[16px]' />
                                    </button>
                                    <button title='Archive' className='btn btn-secondary !p-2'>
                                        <IconArchive className='w-[16px] h-[16px]' />
                                    </button>
                                    <button title='Delete' className='btn btn-secondary !p-2'>
                                        <IconTrash className='w-[16px] h-[16px]' />
                                    </button>
                                </div>
                                <button className='btn btn-secondary flex items-center gap-1 text-[14px]/[1] border border-grey rounded-md text-font-color transition-all hover:bg-grey hover:text-white'>
                                    Labels
                                    <IconCaretDownFilled className='w-[16px] h-[16px]' />
                                </button>
                                <button className='btn btn-secondary sm:!flex !hidden items-center gap-1 text-[14px]/[1] border border-grey rounded-md text-font-color transition-all hover:bg-grey hover:text-white'>
                                    More
                                    <IconCaretDownFilled className='w-[16px] h-[16px]' />
                                </button>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 sm:justify-normal justify-between'>
                            <span className='inline-block'>
                                1-50/295
                            </span>
                            <div className='btn-group rtl:flex-row-reverse'>
                                <button className='btn btn-secondary !p-5 flex items-center gap-1 text-[14px]/[1] border border-grey rounded-md text-font-color transition-all hover:bg-grey hover:text-white'>
                                    <IconChevronLeft className='w-[16px] h-[16px]' />
                                </button>
                                <button className='btn btn-secondary !p-5 flex items-center gap-1 text-[14px]/[1] border border-grey rounded-md text-font-color transition-all hover:bg-grey hover:text-white'>
                                    <IconChevronRight className='w-[16px] h-[16px]' />
                                </button>
                            </div>
                            <button onClick={emailSideToggle} className={`hamburger-menu lg:hidden bg-primary p-1 rounded-md text-white ${emailSide ? 'opened' : ''}`}>
                                <svg width="20" height="20" viewBox="0 0 100 100">
                                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                    <path className="line line2" d="M 20,50 H 80" />
                                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <ul>
                        <li className='md:px-6 p-4'>
                            <div className='flex items-start gap-3 sm:flex-row flex-col'>
                                <div className='items-center gap-4 sm:flex hidden'>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                        />
                                    </div>
                                    <button>
                                        <IconStarFilled className='w-[18px] h-[18px] fill-primary' />
                                    </button>
                                </div>
                                <div className='grid items-start xxl:grid-cols-[25%_auto] md:grid-cols-[33.33%_auto] grid-cols-1 md:gap-4 gap-2 flex-1'>
                                    <Link to="/app-email-detail" className='flex items-start gap-2 transition-all'>
                                        <img src={avatar1} alt='avatar' width="32" height="32" className='w-[32px] h-[32px] min-w-[32px] rounded-md' />
                                        <span className='truncate'>
                                            Maryam Amiri
                                        </span>
                                        <span className="px-2 py-[3px] min-w-fit mt-1 rounded bg-blue text-white text-[12px]/[1] font-bold">Work</span>
                                    </Link>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className='min-w-fit flex gap-3 justify-end sm:ms-auto relative'>
                                    <button className='text-font-color-100'>
                                        <IconPaperclip className='w-[18px] h-[18px]' />
                                    </button>
                                    <span className='text-font-color-100 text-[14px]/[20px]'>
                                        9:30 AM
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className='md:px-6 p-4'>
                            <div className='flex items-start gap-3 sm:flex-row flex-col'>
                                <div className='items-center gap-4 sm:flex hidden'>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                        />
                                    </div>
                                    <button>
                                        <IconStarFilled className='w-[18px] h-[18px] fill-font-color-100 transition-all hover:fill-primary' />
                                    </button>
                                </div>
                                <div className='grid items-start xxl:grid-cols-[25%_auto] md:grid-cols-[33.33%_auto] grid-cols-1 md:gap-4 gap-2 flex-1'>
                                    <Link to="/app-email-detail" className='flex items-start gap-2 transition-all'>
                                        <img src={avatar2} alt='avatar' width="32" height="32" className='w-[32px] h-[32px] min-w-[32px] rounded-md' />
                                        <span className='truncate font-bold'>
                                            Marketing
                                        </span>
                                        <span className="px-2 py-[3px] min-w-fit mt-1 rounded bg-info text-white text-[12px]/[1] font-bold">Marketing</span>
                                    </Link>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                                <div className='min-w-fit flex gap-3 justify-end sm:ms-auto relative'>
                                    <button className='text-font-color-100'>
                                        <IconPaperclip className='w-[18px] h-[18px]' />
                                    </button>
                                    <span className='text-font-color-100 text-[14px]/[20px]'>
                                        9:30 AM
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className='md:px-6 p-4'>
                            <div className='flex items-start gap-3 sm:flex-row flex-col'>
                                <div className='items-center gap-4 sm:flex hidden'>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                        />
                                    </div>
                                    <button>
                                        <IconStarFilled className='w-[18px] h-[18px] fill-font-color-100 transition-all hover:fill-primary' />
                                    </button>
                                </div>
                                <div className='grid items-start xxl:grid-cols-[25%_auto] md:grid-cols-[33.33%_auto] grid-cols-1 md:gap-4 gap-2 flex-1'>
                                    <Link to="/app-email-detail" className='flex items-start gap-2 transition-all'>
                                        <img src={avatar3} alt='avatar' width="32" height="32" className='w-[32px] h-[32px] min-w-[32px] rounded-md' />
                                        <span className='truncate'>
                                            Frank Camly
                                        </span>
                                        <span className="px-2 py-[3px] min-w-fit mt-1 rounded bg-danger text-white text-[12px]/[1] font-bold">Ui Project</span>
                                    </Link>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected</p>
                                </div>
                                <div className='min-w-fit flex gap-3 justify-end sm:ms-auto relative'>
                                    <button className='text-font-color-100'>
                                        <IconPaperclip className='w-[18px] h-[18px]' />
                                    </button>
                                    <span className='text-font-color-100 text-[14px]/[20px]'>
                                        9:30 AM
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className='md:px-6 p-4'>
                            <div className='flex items-start gap-3 sm:flex-row flex-col'>
                                <div className='items-center gap-4 sm:flex hidden'>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                        />
                                    </div>
                                    <button>
                                        <IconStarFilled className='w-[18px] h-[18px] fill-font-color-100 transition-all hover:fill-primary' />
                                    </button>
                                </div>
                                <div className='grid items-start xxl:grid-cols-[25%_auto] md:grid-cols-[33.33%_auto] grid-cols-1 md:gap-4 gap-2 flex-1'>
                                    <Link to="/app-email-detail" className='flex items-start gap-2 transition-all'>
                                        <img src={avatar4} alt='avatar' width="32" height="32" className='w-[32px] h-[32px] min-w-[32px] rounded-md' />
                                        <span className='truncate font-bold'>
                                            Tim Hank
                                        </span>
                                        <span className="px-2 py-[3px] min-w-fit mt-1 rounded bg-grey text-white text-[12px]/[1] font-bold">Payout</span>
                                    </Link>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                                </div>
                                <div className='min-w-fit flex gap-3 justify-end sm:ms-auto relative'>
                                    <button className='text-font-color-100'>
                                        <IconPaperclip className='w-[18px] h-[18px]' />
                                    </button>
                                    <span className='text-font-color-100 text-[14px]/[20px]'>
                                        9:30 AM
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className='md:px-6 p-4'>
                            <div className='flex items-start gap-3 sm:flex-row flex-col'>
                                <div className='items-center gap-4 sm:flex hidden'>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                        />
                                    </div>
                                    <button>
                                        <IconStarFilled className='w-[18px] h-[18px] fill-font-color-100 transition-all hover:fill-primary' />
                                    </button>
                                </div>
                                <div className='grid items-start xxl:grid-cols-[25%_auto] md:grid-cols-[33.33%_auto] grid-cols-1 md:gap-4 gap-2 flex-1'>
                                    <Link to="/app-email-detail" className='flex items-start gap-2 transition-all'>
                                        <img src={avatar5} alt='avatar' width="32" height="32" className='w-[32px] h-[32px] min-w-[32px] rounded-md' />
                                        <span className='truncate'>
                                            Maryam Amiri
                                        </span>
                                    </Link>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className='min-w-fit flex gap-3 justify-end sm:ms-auto relative'>
                                    <button className='text-font-color-100'>
                                        <IconPaperclip className='w-[18px] h-[18px]' />
                                    </button>
                                    <span className='text-font-color-100 text-[14px]/[20px]'>
                                        9:30 AM
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className='md:px-6 p-4'>
                            <div className='flex items-start gap-3 sm:flex-row flex-col'>
                                <div className='items-center gap-4 sm:flex hidden'>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                        />
                                    </div>
                                    <button>
                                        <IconStarFilled className='w-[18px] h-[18px] fill-primary' />
                                    </button>
                                </div>
                                <div className='grid items-start xxl:grid-cols-[25%_auto] md:grid-cols-[33.33%_auto] grid-cols-1 md:gap-4 gap-2 flex-1'>
                                    <Link to="/app-email-detail" className='flex items-start gap-2 transition-all'>
                                        <img src={avatar6} alt='avatar' width="32" height="32" className='w-[32px] h-[32px] min-w-[32px] rounded-md' />
                                        <span className='truncate'>
                                            Brielle Williamson
                                        </span>
                                        <span className="px-2 py-[3px] min-w-fit mt-1 rounded bg-info text-white text-[12px]/[1] font-bold">Marketing</span>
                                    </Link>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                                <div className='min-w-fit flex gap-3 justify-end sm:ms-auto relative'>
                                    <button className='text-font-color-100'>
                                        <IconPaperclip className='w-[18px] h-[18px]' />
                                    </button>
                                    <span className='text-font-color-100 text-[14px]/[20px]'>
                                        9:30 AM
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className='md:px-6 p-4'>
                            <div className='flex items-start gap-3 sm:flex-row flex-col'>
                                <div className='items-center gap-4 sm:flex hidden'>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                        />
                                    </div>
                                    <button>
                                        <IconStarFilled className='w-[18px] h-[18px] fill-font-color-100 transition-all hover:fill-primary' />
                                    </button>
                                </div>
                                <div className='grid items-start xxl:grid-cols-[25%_auto] md:grid-cols-[33.33%_auto] grid-cols-1 md:gap-4 gap-2 flex-1'>
                                    <Link to="/app-email-detail" className='flex items-start gap-2 transition-all'>
                                        <img src={avatar7} alt='avatar' width="32" height="32" className='w-[32px] h-[32px] min-w-[32px] rounded-md' />
                                        <span className='truncate'>
                                            Brenden Wagner
                                        </span>
                                        <span className="px-2 py-[3px] min-w-fit mt-1 rounded bg-danger text-white text-[12px]/[1] font-bold">Ui Project</span>
                                    </Link>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected</p>
                                </div>
                                <div className='min-w-fit flex gap-3 justify-end sm:ms-auto relative'>
                                    <button className='text-font-color-100'>
                                        <IconPaperclip className='w-[18px] h-[18px]' />
                                    </button>
                                    <span className='text-font-color-100 text-[14px]/[20px]'>
                                        9:30 AM
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className='md:px-6 p-4'>
                            <div className='flex items-start gap-3 sm:flex-row flex-col'>
                                <div className='items-center gap-4 sm:flex hidden'>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                        />
                                    </div>
                                    <button>
                                        <IconStarFilled className='w-[18px] h-[18px] fill-font-color-100 transition-all hover:fill-primary' />
                                    </button>
                                </div>
                                <div className='grid items-start xxl:grid-cols-[25%_auto] md:grid-cols-[33.33%_auto] grid-cols-1 md:gap-4 gap-2 flex-1'>
                                    <Link to="/app-email-detail" className='flex items-start gap-2 transition-all'>
                                        <img src={avatar8} alt='avatar' width="32" height="32" className='w-[32px] h-[32px] min-w-[32px] rounded-md' />
                                        <span className='truncate'>
                                            Angelica Ramos
                                        </span>
                                    </Link>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                                </div>
                                <div className='min-w-fit flex gap-3 justify-end sm:ms-auto relative'>
                                    <button className='text-font-color-100'>
                                        <IconPaperclip className='w-[18px] h-[18px]' />
                                    </button>
                                    <span className='text-font-color-100 text-[14px]/[20px]'>
                                        9:30 AM
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className='md:px-6 p-4'>
                            <div className='flex items-start gap-3 sm:flex-row flex-col'>
                                <div className='items-center gap-4 sm:flex hidden'>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                        />
                                    </div>
                                    <button>
                                        <IconStarFilled className='w-[18px] h-[18px] fill-font-color-100 transition-all hover:fill-primary' />
                                    </button>
                                </div>
                                <div className='grid items-start xxl:grid-cols-[25%_auto] md:grid-cols-[33.33%_auto] grid-cols-1 md:gap-4 gap-2 flex-1'>
                                    <Link to="/app-email-detail" className='flex items-start gap-2 transition-all'>
                                        <img src={avatar9} alt='avatar' width="32" height="32" className='w-[32px] h-[32px] min-w-[32px] rounded-md' />
                                        <span className='truncate'>
                                            Ashton Cox
                                        </span>
                                    </Link>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className='min-w-fit flex gap-3 justify-end sm:ms-auto relative'>
                                    <button className='text-font-color-100'>
                                        <IconPaperclip className='w-[18px] h-[18px]' />
                                    </button>
                                    <span className='text-font-color-100 text-[14px]/[20px]'>
                                        9:30 AM
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className='md:px-6 p-4'>
                            <div className='flex items-start gap-3 sm:flex-row flex-col'>
                                <div className='items-center gap-4 sm:flex hidden'>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                        />
                                    </div>
                                    <button>
                                        <IconStarFilled className='w-[18px] h-[18px] fill-font-color-100 transition-all hover:fill-primary' />
                                    </button>
                                </div>
                                <div className='grid items-start xxl:grid-cols-[25%_auto] md:grid-cols-[33.33%_auto] grid-cols-1 md:gap-4 gap-2 flex-1'>
                                    <Link to="/app-email-detail" className='flex items-start gap-2 transition-all'>
                                        <img src={avatar10} alt='avatar' width="32" height="32" className='w-[32px] h-[32px] min-w-[32px] rounded-md' />
                                        <span className='truncate'>
                                            Maryam Amiri
                                        </span>
                                    </Link>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className='min-w-fit flex gap-3 justify-end sm:ms-auto relative'>
                                    <button className='text-font-color-100'>
                                        <IconPaperclip className='w-[18px] h-[18px]' />
                                    </button>
                                    <span className='text-font-color-100 text-[14px]/[20px]'>
                                        9:30 AM
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
