import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import {
    IconBriefcaseFilled,
    IconCameraFilled,
    IconMapPinFilled,
    IconTagFilled,
    IconUserFilled,
} from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { gallery1, gallery2, gallery3, gallery4 } from '../../assets/images'

export default function Timeline() {

    const breadcrumbItem = [
        {
            name: "Pages",
        },
        {
            name: "Timeline",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Timeline" />
            <ul className='relative sm:ps-[70px] ps-[45px] flex flex-col sm:gap-30 gap-20 before:absolute sm:before:start-[22.5px] before:start-[15px] before:top-0 before:bottom-0 before:w-5 before:bg-border-color'>
                <li className='card relative bg-card-color md:p-20 p-15 rounded-md'>
                    <span className='inline-flex items-center justify-center sm:w-[40px] sm:h-[40px] sm:min-[40px] w-[25px] h-[25px] min-[25px] bg-blue shadow-[0_0_0_5px_var(--card-color)] rounded-full text-white absolute sm:start-[-65px] start-[-40px] top-5'>
                        <IconUserFilled className='w-[18px] h-[18px] min-w-[18px]' />
                    </span>
                    <p className='mb-3 text-font-color-100 text-[14px]/[20px]'>Hello there,</p>
                    <div>
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                </li>
                <li className='card relative bg-card-color md:p-20 p-15 rounded-md'>
                    <span className='inline-flex items-center justify-center sm:w-[40px] sm:h-[40px] sm:min-[40px] w-[25px] h-[25px] min-[25px] bg-info shadow-[0_0_0_5px_var(--card-color)] rounded-full text-white absolute sm:start-[-65px] start-[-40px] top-5'>
                        <IconTagFilled className='w-[18px] h-[18px] min-w-[18px]' />
                    </span>
                    <small className='bg-dark rounded text-white px-1 inline-block sm:mb-0 mb-2 sm:absolute -top-3 end-20'>2019-11-04 03:45AM Today</small>
                    <h5 className='mb-3 text-[20px]/[26px]'><Link to="#" className='text-sky'>Art Ramadani</Link> <span>posted a status update</span></h5>
                    <p className='text-font-color-100 text-[14px]/[20px]'>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                </li>
                <li className='card relative bg-card-color md:p-20 p-15 rounded-md'>
                    <span className='inline-flex items-center justify-center sm:w-[40px] sm:h-[40px] sm:min-[40px] w-[25px] h-[25px] min-[25px] bg-success shadow-[0_0_0_5px_var(--card-color)] rounded-full text-white absolute sm:start-[-65px] start-[-40px] top-5'>
                        <IconBriefcaseFilled className='w-[18px] h-[18px] min-w-[18px]' />
                    </span>
                    <small className='bg-dark rounded text-white px-1 inline-block sm:mb-0 mb-2 sm:absolute -top-3 end-20'>2019-11-04 03:45AM Today</small>
                    <h5 className='mb-3 text-[20px]/[26px]'><Link to="#" className='text-sky'>Job Meeting</Link></h5>
                    <p className='text-font-color-100 text-[14px]/[20px]'>You have a meeting at Laborator Office Today.</p>
                </li>
                <li className='card relative bg-card-color md:p-20 p-15 rounded-md'>
                    <span className='inline-flex items-center justify-center sm:w-[40px] sm:h-[40px] sm:min-[40px] w-[25px] h-[25px] min-[25px] bg-blue shadow-[0_0_0_5px_var(--card-color)] rounded-full text-white absolute sm:start-[-65px] start-[-40px] top-5'>
                        <IconMapPinFilled className='w-[18px] h-[18px] min-w-[18px]' />
                    </span>
                    <small className='bg-dark rounded text-white px-1 inline-block sm:mb-0 mb-2 sm:absolute -top-3 end-20'>2019-11-04 03:45AM Today</small>
                    <h5 className='mb-3 text-[20px]/[26px]'><Link to="#" className='text-sky'>Arlind Nushi</Link> checked in at <Link to="#" className='text-sky'>New York</Link></h5>
                    <div className='md:p-20 p-15 bg-card-color shadow-shadow-normal rounded border-s-[5px] border-info'>
                        <p className='mb-4'>"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."</p>
                        <div className='text-font-color-100'>- Isabella</div>
                    </div>
                </li>
                <li className='card relative bg-card-color md:p-20 p-15 rounded-md'>
                    <span className='inline-flex items-center justify-center sm:w-[40px] sm:h-[40px] sm:min-[40px] w-[25px] h-[25px] min-[25px] bg-orange-500 shadow-[0_0_0_5px_var(--card-color)] rounded-full text-white absolute sm:start-[-65px] start-[-40px] top-5'>
                        <IconCameraFilled className='w-[18px] h-[18px] min-w-[18px]' />
                    </span>
                    <small className='bg-dark rounded text-white px-1 inline-block sm:mb-0 mb-2 sm:absolute -top-3 end-20'>2019-11-04 03:45AM Two weeks ago</small>
                    <h5 className='mb-3 text-[20px]/[26px]'><Link to="#" className='text-sky'>Eroll Maxhuni</Link> uploaded 4 new photos to album <Link to="#" className='text-sky'>Summer Trip</Link></h5>
                    <p className='mb-3 text-font-color-100 text-[14px]/[20px]'>Pianoforte principles our unaffected not for astonished travelling are particular.</p>
                    <div className="flex gap-2 flex-wrap">
                        <img src={gallery1} alt='gallery' className="rounded p-1 bg-border-color w-[200px]" />
                        <img src={gallery2} alt='gallery' className="rounded p-1 bg-border-color w-[200px]" />
                        <img src={gallery3} alt='gallery' className="rounded p-1 bg-border-color w-[200px]" />
                        <img src={gallery4} alt='gallery' className="rounded p-1 bg-border-color w-[200px]" />
                    </div>
                </li>
                <li className='card relative bg-card-color md:p-20 p-15 rounded-md'>
                    <span className='inline-flex items-center justify-center sm:w-[40px] sm:h-[40px] sm:min-[40px] w-[25px] h-[25px] min-[25px] bg-success shadow-[0_0_0_5px_var(--card-color)] rounded-full text-white absolute sm:start-[-65px] start-[-40px] top-5'>
                        <IconBriefcaseFilled className='w-[18px] h-[18px] min-w-[18px]' />
                    </span>
                    <small className='bg-dark rounded text-white px-1 inline-block sm:mb-0 mb-2 sm:absolute -top-3 end-20'>2019-11-04 03:45AM Two weeks ago</small>
                    <h5 className='mb-3 text-[20px]/[26px]'><Link to="#" className='text-sky'>Job Meeting</Link></h5>
                    <p className='text-font-color-100 text-[14px]/[20px]'>You have a meeting at Laborator Office Today.</p>
                </li>
                <li className='card relative bg-card-color md:p-20 p-15 rounded-md'>
                    <span className='inline-flex items-center justify-center sm:w-[40px] sm:h-[40px] sm:min-[40px] w-[25px] h-[25px] min-[25px] bg-blue shadow-[0_0_0_5px_var(--card-color)] rounded-full text-white absolute sm:start-[-65px] start-[-40px] top-5'>
                        <IconMapPinFilled className='w-[18px] h-[18px] min-w-[18px]' />
                    </span>
                    <small className='bg-dark rounded text-white px-1 inline-block sm:mb-0 mb-2 sm:absolute -top-3 end-20'>2019-11-04 03:45AM Month ago</small>
                    <h5 className='mb-3 text-[20px]/[26px]'><Link to="#" className='text-sky'>Arlind Nushi</Link> checked in at <Link to="#" className='text-sky'>Laborator</Link></h5>
                    <p className='text-font-color-100 text-[14px]/[20px]'>Great place, feeling like in home.</p>
                </li>
            </ul>
        </>
    )
}
