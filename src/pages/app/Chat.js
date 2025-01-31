import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    avatar1,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    gallery2,
    gallery5,
} from '../../assets/images';
import {
    IconCamera,
    IconNotes,
    IconSearch,
    IconSend,
} from '@tabler/icons-react';
import Breadcrumb from '../../components/common/Breadcrumb';

export default function Chat() {

    const [chatSide, setChatSide] = useState(false)
    const chatSideToggle = () => {
        setChatSide(!chatSide)
    }

    const breadcrumbItem = [
        {
            name: "Chat",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Chat" />
            <div className='flex items-start'>
                <div className={`min-w-[230px] w-[230px] lg:static h-full top-0 lg:bg-transparent bg-card-color lg:p-0 p-10 fixed z-[2] transition-all duration-300 ${chatSide ? 'left-0 rtl:right-0 shadow-shadow-lg' : '-left-full rtl:-right-full'}`}>
                    <div className='py-4 form-control flex items-stretch'>
                        <button className='px-3 py-2 border border-border-color border-e-0 rounded-s-md'>
                            <IconSearch className='w-[18px] h-[18px]' />
                        </button>
                        <input
                            type="text"
                            id="chat_search"
                            className="form-input !py-5 !rounded-s-none"
                            placeholder="Search..."
                        />
                    </div>
                    <ul>
                        <li className='py-10'>
                            <Link to="#" className='flex items-start gap-2 border-e-2 border-transparent transition-all hover:border-font-color'>
                                <img src={avatar1} alt='avatar' width="36" height="36" className='w-[36px] h-[36px] min-w-[36px] rounded-full' />
                                <div className='truncate w-full'>
                                    <p className='truncate'>
                                        Chris Fox
                                    </p>
                                    <p className='text-[14px]/[20px] text-font-color-100 truncate flex items-center gap-5'>
                                        <span className='inline-block w-10 h-10 rounded-full bg-orange-500'></span>
                                        <span>left 7 mins ago</span>
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className='py-10'>
                            <Link to="#" className='flex items-start gap-2 border-e-2 border-transparent transition-all hover:border-font-color'>
                                <span className='w-[36px] h-[36px] min-w-[36px] rounded-full bg-card-color flex items-center justify-center font-semibold text-secondary'>
                                    RH
                                </span>
                                <div className='truncate w-full'>
                                    <p className='truncate'>
                                        Robert Hammer
                                    </p>
                                    <p className='text-[14px]/[20px] text-font-color-100 truncate flex items-center gap-5'>
                                        <span className='inline-block w-10 h-10 rounded-full bg-orange-500'></span>
                                        <span>left 7 mins ago</span>
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className='py-10'>
                            <Link to="#" className='flex items-start gap-2 border-e-2 border-transparent transition-all hover:border-font-color'>
                                <img src={avatar3} alt='avatar' width="36" height="36" className='w-[36px] h-[36px] min-w-[36px] rounded-full' />
                                <div className='truncate w-full'>
                                    <p className='truncate'>
                                        Orlando Lentz
                                    </p>
                                    <p className='text-[14px]/[20px] text-font-color-100 truncate flex items-center gap-5'>
                                        <span className='inline-block w-10 h-10 rounded-full bg-success'></span>
                                        <span>online</span>
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className='py-10'>
                            <Link to="#" className='flex items-start gap-2 border-e-2 border-transparent transition-all hover:border-font-color'>
                                <img src={avatar4} alt='avatar' width="36" height="36" className='w-[36px] h-[36px] min-w-[36px] rounded-full' />
                                <div className='truncate w-full'>
                                    <p className='truncate'>
                                        Barbara Kelly
                                    </p>
                                    <p className='text-[14px]/[20px] text-font-color-100 truncate flex items-center gap-5'>
                                        <span className='inline-block w-10 h-10 rounded-full bg-orange-500'></span>
                                        <span>left 7 mins ago</span>
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className='py-10'>
                            <Link to="#" className='flex items-start gap-2 border-e-2 border-transparent transition-all hover:border-font-color'>
                                <img src={avatar5} alt='avatar' width="36" height="36" className='w-[36px] h-[36px] min-w-[36px] rounded-full' />
                                <div className='truncate w-full'>
                                    <p className='truncate'>
                                        Robert Hammer
                                    </p>
                                    <p className='text-[14px]/[20px] text-font-color-100 truncate flex items-center gap-5'>
                                        <span className='inline-block w-10 h-10 rounded-full bg-success'></span>
                                        <span>online</span>
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className='py-10'>
                            <Link to="#" className='flex items-start gap-2 border-e-2 border-transparent transition-all hover:border-font-color'>
                                <img src={avatar6} alt='avatar' width="36" height="36" className='w-[36px] h-[36px] min-w-[36px] rounded-full' />
                                <div className='truncate w-full'>
                                    <p className='truncate'>
                                        Orlando Lentz
                                    </p>
                                    <p className='text-[14px]/[20px] text-font-color-100 truncate flex items-center gap-5'>
                                        <span className='inline-block w-10 h-10 rounded-full bg-success'></span>
                                        <span>online</span>
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className='py-10'>
                            <Link to="#" className='flex items-start gap-2 border-e-2 border-transparent transition-all hover:border-font-color'>
                                <img src={avatar7} alt='avatar' width="36" height="36" className='w-[36px] h-[36px] min-w-[36px] rounded-full' />
                                <div className='truncate w-full'>
                                    <p className='truncate'>
                                        Rose Rivera
                                    </p>
                                    <p className='text-[14px]/[20px] text-font-color-100 truncate flex items-center gap-5'>
                                        <span className='inline-block w-10 h-10 rounded-full bg-orange-500'></span>
                                        <span>left 7 mins ago</span>
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className='py-10'>
                            <Link to="#" className='flex items-start gap-2 border-e-2 border-transparent transition-all hover:border-font-color'>
                                <img src={avatar1} alt='avatar' width="36" height="36" className='w-[36px] h-[36px] min-w-[36px] rounded-full' />
                                <div className='truncate w-full'>
                                    <p className='truncate'>
                                        Chris Fox
                                    </p>
                                    <p className='text-[14px]/[20px] text-font-color-100 truncate flex items-center gap-5'>
                                        <span className='inline-block w-10 h-10 rounded-full bg-orange-500'></span>
                                        <span>left 7 mins ago</span>
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className='py-10'>
                            <Link to="#" className='flex items-start gap-2 border-e-2 border-transparent transition-all hover:border-font-color'>
                                <span className='w-[36px] h-[36px] min-w-[36px] rounded-full bg-card-color flex items-center justify-center font-semibold text-secondary'>
                                    RH
                                </span>
                                <div className='truncate w-full'>
                                    <p className='truncate'>
                                        Robert Hammer
                                    </p>
                                    <p className='text-[14px]/[20px] text-font-color-100 truncate flex items-center gap-5'>
                                        <span className='inline-block w-10 h-10 rounded-full bg-success'></span>
                                        <span>online</span>
                                    </p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='card p-4 flex-1 bg-card-color lg:ms-20'>
                    <div className='pb-4 mb-4 border-b border-border-color flex items-center gap-2 justify-between'>
                        <Link to="#" className='flex gap-4 group flex-1'>
                            <img src={avatar3} alt='avatar' width="36" height="36" className='w-[36px] h-[36px] min-w-[36px] rounded-full' />
                            <div className='truncate grid'>
                                <p className='truncate font-bold'>
                                    Orlando Lentz
                                </p>
                                <p className='truncate text-[14px]/[20px] text-font-color-100'>
                                    already 8 messages
                                </p>
                            </div>
                        </Link>
                        <div className='flex gap-2 items-center'>
                            <button className='py-1 px-2 bg-orange-400 text-white rounded'>
                                <IconCamera className='w-[18px] h-[18px]' />
                            </button>
                            <button className='sm:block hidden py-1 px-2 bg-info text-white rounded'>
                                <IconNotes className='w-[18px] h-[18px]' />
                            </button>
                            <button onClick={chatSideToggle} className={`hamburger-menu lg:hidden bg-primary p-1 rounded-md text-white ${chatSide ? 'opened' : ''}`}>
                                <svg width="20" height="20" viewBox="0 0 100 100">
                                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                    <path className="line line2" d="M 20,50 H 80" />
                                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <ul className='pb-4 mb-4 border-b border-border-color flex flex-col gap-30'>
                        <li className='flex flex-col items-end'>
                            <div className='flex items-center gap-2 mb-15'>
                                <small className='text-font-color-100'>10:10 AM, Today</small>
                                <span className="fw-bold">Michael</span>
                                <span className='inline-block w-10 h-10 rounded-full bg-orange-500'></span>
                            </div>
                            <div className="relative py-15 px-20 border border-border-color rounded-md before:absolute before:bottom-full before:w-0 before:h-0 before:end-[2rem] before:border-b-[10px] before:border-b-border-color before:border-e-8 before:border-e-transparent before:border-s-8 before:border-s-transparent">
                                <p>Hi Aiden, how are you? How is the project coming along?</p>
                            </div>
                        </li>
                        <li className='flex flex-col'>
                            <div className='flex items-center gap-2 mb-15'>
                                <span className='inline-block w-10 h-10 rounded-full bg-success'></span>
                                <span className="fw-bold">Aiden</span>
                                <small className='text-font-color-100'>10:12 AM, Today</small>
                            </div>
                            <div className="relative py-15 px-20 border border-border-color rounded-md before:absolute before:bottom-full before:w-0 before:h-0 before:start-[2rem] before:border-b-[10px] before:border-b-border-color before:border-e-8 before:border-e-transparent before:border-s-8 before:border-s-transparent">
                                <p>Are we meeting today? Project has been already finished and I have results to show you.</p>
                                <div className='flex flex-wrap gap-5 mt-4'>
                                    <img src={gallery2} width="200" height="128" alt='chat attachment' className='p-1 border border-border-color rounded-md' />
                                    <img src={gallery5} width="200" height="128" alt='chat attachment' className='p-1 border border-border-color rounded-md' />
                                </div>
                            </div>
                        </li>
                        <li className='flex flex-col'>
                            <div className='flex items-center gap-2 mb-15'>
                                <span className='inline-block w-10 h-10 rounded-full bg-success'></span>
                                <span className="fw-bold">Aiden</span>
                                <small className='text-font-color-100'>10:13 AM, Today</small>
                            </div>
                            <div className="typing">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>
                    </ul>
                    <div className='form-control flex items-stretch'>
                        <button className='px-3 py-2 border border-border-color border-e-0 rounded-s-md'>
                            <IconSend className='w-[18px] h-[18px]' />
                        </button>
                        <input type="text" placeholder="Enter text here..." className='form-input !rounded-s-none' />
                    </div>
                </div>
            </div>
        </>
    )
}
