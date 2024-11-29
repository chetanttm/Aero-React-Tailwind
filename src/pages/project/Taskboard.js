import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import {
    IconPlus,
    IconCirclePlus,
    IconEdit,
    IconClockHour4,
    IconMessages,
    IconTrash,
} from '@tabler/icons-react'
import {
    avatar1,
    avatar10,
    avatar2,
    avatar3,
    avatar4,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
} from '../../assets/images'

export default function Taskboard() {

    const breadcrumbItem = [
        {
            name: "Project",
        },
        {
            name: "Taskboard",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Taskboard" buttonContent={<IconPlus />} buttonUrl="#" />
            <div className='grid lg:grid-cols-3 md:gap-30 gap-15'>
                <div className='bg-bg-dark shadow-light rounded-lg md:p-20 p-15'>
                    <div className='text-text-primary flex items-center justify-between gap-15 mb-30'>
                        <p className='text-[16px]/[20px] font-medium'>
                            Planned
                        </p>
                        <button className='min-w-fit'>
                            <IconCirclePlus className='stroke-[1.5] text-text-secondary' />
                        </button>
                    </div>
                    <ul className='w-full flex flex-wrap gap-10'>
                        <li className='flex-[1_1_calc(50%-10px)]'>
                            <div className='bg-border py-10 px-15 cursor-move'>
                                #L1008
                            </div>
                            <div className="p-15 border border-border border-t-0">
                                <p className='text-[20px]/[24px] font-medium mb-2'>Job title</p>
                                <p className='mb-15'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <div className="flex items-center gap-15 mb-20">
                                    <small className='text-text-secondary'>Team</small>
                                    <ul className="flex items-center">
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar1} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar2} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar3} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                    </ul>
                                </div>
                                <hr />
                                <div className="flex items-center gap-10 justify-between mt-20">
                                    <div className='flex items-center gap-10'>
                                        <button>
                                            <IconEdit className='text-text-secondary stroke-[1.5] w-[20px] h-[20px]' />
                                        </button>
                                        <button>
                                            <IconClockHour4 className='text-text-secondary stroke-[1.5] w-[20px] h-[20px]' />
                                        </button>
                                        <button>
                                            <IconMessages className='text-text-secondary stroke-[1.5] w-[20px] h-[20px]' />
                                        </button>
                                    </div>
                                    <button>
                                        <IconTrash className='text-danger stroke-[1.5] w-[20px] h-[20px]' />
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='bg-bg-dark shadow-light rounded-lg md:p-20 p-15'>
                    <div className='text-text-primary flex items-center justify-between gap-15 mb-30'>
                        <p className='text-[16px]/[20px] font-medium'>
                            In Progress
                        </p>
                        <button className='min-w-fit'>
                            <IconCirclePlus className='stroke-[1.5] text-text-secondary' />
                        </button>
                    </div>
                    <ul className='w-full flex flex-wrap gap-10'>
                        <li className='flex-[1_1_calc(50%-10px)]'>
                            <div className='bg-warning text-white py-10 px-15 cursor-move'>
                                #L1008
                            </div>
                            <div className="p-15 border border-border border-t-0">
                                <p className='text-[20px]/[24px] font-medium mb-2'>Job title</p>
                                <p className='mb-15'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <hr />
                                <div className="flex items-center gap-10 justify-between mt-20">
                                    <div className='flex items-center gap-10'>
                                        <button>
                                            <IconEdit className='text-text-secondary stroke-[1.5] w-[20px] h-[20px]' />
                                        </button>
                                        <button>
                                            <IconClockHour4 className='text-text-secondary stroke-[1.5] w-[20px] h-[20px]' />
                                        </button>
                                        <button>
                                            <IconMessages className='text-text-secondary stroke-[1.5] w-[20px] h-[20px]' />
                                        </button>
                                    </div>
                                    <button>
                                        <IconTrash className='text-danger stroke-[1.5] w-[20px] h-[20px]' />
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className='flex-[1_1_calc(50%-10px)]'>
                            <div className='bg-warning text-white py-10 px-15 cursor-move'>
                                #L1008
                            </div>
                            <div className="p-15 border border-border border-t-0">
                                <p className='text-[20px]/[24px] font-medium mb-2'>Job title</p>
                                <p className='mb-15'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <div className="flex items-center gap-15 mb-20">
                                    <small className='text-text-secondary'>Team</small>
                                    <ul className="flex items-center">
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar4} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar6} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                    </ul>
                                </div>
                                <hr />
                                <div className="flex items-center gap-10 justify-between mt-20">
                                    <div className='flex items-center gap-10'>
                                        <button>
                                            <IconEdit className='text-text-secondary stroke-[1.5] w-[20px] h-[20px]' />
                                        </button>
                                        <button>
                                            <IconClockHour4 className='text-text-secondary stroke-[1.5] w-[20px] h-[20px]' />
                                        </button>
                                        <button>
                                            <IconMessages className='text-text-secondary stroke-[1.5] w-[20px] h-[20px]' />
                                        </button>
                                    </div>
                                    <button>
                                        <IconTrash className='text-danger stroke-[1.5] w-[20px] h-[20px]' />
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='bg-bg-dark shadow-light rounded-lg md:p-20 p-15'>
                    <div className='text-text-primary flex items-center justify-between gap-15 mb-30'>
                        <p className='text-[16px]/[20px] font-medium'>
                            Planned
                        </p>
                        <button className='min-w-fit'>
                            <IconCirclePlus className='stroke-[1.5] text-text-secondary' />
                        </button>
                    </div>
                    <ul className='w-full flex flex-wrap gap-10'>
                        <li className='flex-[1_1_calc(50%-10px)]'>
                            <div className='bg-success text-white py-10 px-15 cursor-move'>
                                #L1008
                            </div>
                            <div className="p-15 border border-border border-t-0">
                                <p className='text-[20px]/[24px] font-medium mb-2'>Job title</p>
                                <p className='mb-15'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <div className="flex items-center gap-15 mb-20">
                                    <small className='text-text-secondary'>Team</small>
                                    <ul className="flex items-center">
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar7} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar8} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar9} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                        <li className='-ml-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar10} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium' /></li>
                                    </ul>
                                </div>
                                <hr />
                                <div className="flex items-center gap-10 justify-between mt-20">
                                    <div className='flex items-center gap-10'>
                                        <button>
                                            <IconEdit className='text-text-secondary stroke-[1.5] w-[20px] h-[20px]' />
                                        </button>
                                        <button>
                                            <IconClockHour4 className='text-text-secondary stroke-[1.5] w-[20px] h-[20px]' />
                                        </button>
                                        <button>
                                            <IconMessages className='text-text-secondary stroke-[1.5] w-[20px] h-[20px]' />
                                        </button>
                                    </div>
                                    <button>
                                        <IconTrash className='text-danger stroke-[1.5] w-[20px] h-[20px]' />
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
