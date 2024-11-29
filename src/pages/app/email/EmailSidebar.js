import React from 'react'
import { Link } from 'react-router-dom'
import {
    IconAlertTriangle,
    IconInbox,
    IconMail,
    IconNote,
    IconSend,
    IconShieldHeart,
    IconTagFilled,
    IconTrash,
} from '@tabler/icons-react'

export default function Sidebar({ emailSide }) {
    return (
        <div className={`min-w-[230px] w-[230px] lg:static h-full top-0 lg:bg-transparent bg-card-color lg:p-0 p-10 fixed z-[2] transition-all duration-300 ${emailSide ? 'left-0 rtl:right-0 shadow-shadow-lg' : '-left-full rtl:-right-full'}`}>
            <Link to="/app-email-compose" className='btn bg-secondary large text-white w-full'>
                Compose
            </Link>
            <ul className='py-6 flex flex-col gap-1'>
                <li>
                    <Link to="/app-email" className='active flex items-center gap-10 p-10 bg-card-color'>
                        <IconInbox className='w-[18px] h-[18px]' />
                        <span className='flex-1 inline-block'>
                            Inbox
                        </span>
                        <span className='inline-block bg-blue rounded-md px-2 py-[3px] text-[12px]/[1] text-white font-semibold'>
                            6
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='flex items-center gap-10 p-10 transition-all hover:bg-card-color'>
                        <IconSend className='w-[18px] h-[18px]' />
                        <span className='flex-1 inline-block'>
                            Sent
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='flex items-center gap-10 p-10 transition-all hover:bg-card-color'>
                        <IconShieldHeart className='w-[18px] h-[18px]' />
                        <span className='flex-1 inline-block'>
                            Important
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='flex items-center gap-10 p-10 transition-all hover:bg-card-color'>
                        <IconNote className='w-[18px] h-[18px]' />
                        <span className='flex-1 inline-block'>
                            Drafts
                        </span>
                        <span className='inline-block bg-info rounded-md px-2 py-[3px] text-[12px]/[1] text-white font-semibold'>
                            3
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='flex items-center gap-10 p-10 transition-all hover:bg-card-color'>
                        <IconMail className='w-[18px] h-[18px]' />
                        <span className='flex-1 inline-block'>
                            All Mail
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='flex items-center gap-10 p-10 transition-all hover:bg-card-color'>
                        <IconAlertTriangle className='w-[18px] h-[18px]' />
                        <span className='flex-1 inline-block'>
                            Spam
                        </span>
                        <span className='inline-block bg-orange-500 rounded-md px-2 py-[3px] text-[12px]/[1] text-white font-semibold'>
                            6
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='flex items-center gap-10 p-10 transition-all hover:bg-card-color'>
                        <IconTrash className='w-[18px] h-[18px]' />
                        <span className='flex-1 inline-block'>
                            Trash
                        </span>
                        <span className='inline-block bg-danger rounded-md px-2 py-[3px] text-[12px]/[1] text-white font-semibold'>
                            9
                        </span>
                    </Link>
                </li>
            </ul>
            <p className='pb-3'>
                Labels
            </p>
            <ul className='flex flex-col gap-1'>
                <li>
                    <Link to="#" className='flex items-center gap-10 p-10 transition-all hover:bg-card-color'>
                        <IconTagFilled className='w-[18px] h-[18px] text-danger' />
                        <span className='flex-1 inline-block'>
                            UI Project
                        </span>
                        <span className='inline-block bg-blue rounded-md px-2 py-[3px] text-[12px]/[1] text-white font-semibold'>
                            5
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='flex items-center gap-10 p-10 transition-all hover:bg-card-color'>
                        <IconTagFilled className='w-[18px] h-[18px] text-info' />
                        <span className='flex-1 inline-block'>
                            Marketing
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='flex items-center gap-10 p-10 transition-all hover:bg-card-color'>
                        <IconTagFilled className='w-[18px] h-[18px] text-font-color' />
                        <span className='flex-1 inline-block'>
                            Payout
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='flex items-center gap-10 p-10 transition-all hover:bg-card-color'>
                        <IconTagFilled className='w-[18px] h-[18px] text-primary' />
                        <span className='flex-1 inline-block'>
                            Meeting
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
