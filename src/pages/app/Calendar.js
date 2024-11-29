import React from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import Breadcrumb from '../../components/common/Breadcrumb'
import { IconMapPinFilled } from '@tabler/icons-react'

export default function Calendar() {

    const breadcrumbItem = [
        {
            name: "App",
        },
        {
            name: "Calendar",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Calendar" />
            <div className='grid lg:grid-cols-[2fr_1fr] grid-cols-1 gap-4'>
                <div className='card md:p-6 p-4 rounded-md bg-card-color'>
                    <FullCalendar
                        plugins={[interactionPlugin, dayGridPlugin]}
                        initialView="dayGridMonth"
                        editable
                        selectable
                        events="https://fullcalendar.io/demo-events.json"
                    />
                </div>
                <div>
                    <button className='btn btn-info w-full'>Add Events</button>
                    <ul className='mt-20'>
                        <li className='pb-4 mb-4 border-b border-border-color last:pb-0 last:mb-0 last:border-none'>
                            <h5 className='text-[20px]/[1] flex items-center justify-between gap-2 mb-3'>
                                11 September
                                <span className="px-2 py-[3px] min-w-fit rounded bg-blue text-white text-[12px]/[1] font-bold">Conference</span>
                            </h5>
                            <address className='flex items-center text-font-color-100 text-[14px]/[1.5]'>
                                <IconMapPinFilled className='w-[16px] h-[16px] min-w-[16px]' />
                                123 6th St. Melbourne, FL 32904
                            </address>
                            <p className='text-font-color-100 text-[14px]/[1.5]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </li>
                        <li className='pb-4 mb-4 border-b border-border-color last:pb-0 last:mb-0 last:border-none'>
                            <h5 className='text-[20px]/[1] flex items-center justify-between gap-2 mb-3'>
                                12 November
                                <span className="px-2 py-[3px] min-w-fit rounded bg-success text-white text-[12px]/[1] font-bold">Birthday Party</span>
                            </h5>
                            <address className='flex items-center text-font-color-100 text-[14px]/[1.5]'>
                                <IconMapPinFilled className='w-[16px] h-[16px] min-w-[16px]' />
                                123 6th St. Melbourne, FL 32904
                            </address>
                            <p className='text-font-color-100 text-[14px]/[1.5]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </li>
                        <li className='pb-4 mb-4 border-b border-border-color last:pb-0 last:mb-0 last:border-none'>
                            <h5 className='text-[20px]/[1] flex items-center justify-between gap-2 mb-3'>
                                16 December
                                <span className="px-2 py-[3px] min-w-fit rounded bg-danger text-white text-[12px]/[1] font-bold">Repeating</span>
                            </h5>
                            <address className='flex items-center text-font-color-100 text-[14px]/[1.5]'>
                                <IconMapPinFilled className='w-[16px] h-[16px] min-w-[16px]' />
                                123 6th St. Melbourne, FL 32904
                            </address>
                            <p className='text-font-color-100 text-[14px]/[1.5]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
