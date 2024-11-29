import { IconArrowRight, IconHomeFilled, IconMenuDeep } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumb({ breadcrumbItem, title, buttonContent, buttonUrl }) {

    const [mobileNav, setMobileNav] = useState(false);
    const mobileNavToggle = () => {
        setMobileNav(!mobileNav);
        const sidebarElement = document.querySelector('.left-sidebar');
        if (sidebarElement) {
            sidebarElement.classList.toggle('mobile-nav', !mobileNav);
        }
    };

    const [rightSidebar, setRightSidebar] = useState(false);
    const rightSidebarToggle = () => {
        setRightSidebar(!rightSidebar);
        const sidebarElement = document.querySelector('.body-wrapper');
        if (sidebarElement) {
            if (rightSidebar) {
                sidebarElement.classList.remove('right-sidebar-toggle');
            } else {
                sidebarElement.classList.add('right-sidebar-toggle');
            }
        }
    };

    // const breadcrumbItem = [
    //     {
    //       name: "Dashboard",
    //     },
    //     {
    //       link: "Dashboard",
    //       url: "dfsfd",
    //     },
    //   ]

    return (

        // <Breadcrumb breadcrumbItem={breadcrumbItem} title="Dashboard" />

        <div className='md:mb-20 mb-10 flex gap-4 justify-between'>
            <div>
                <h1 className='md:text-[24px]/[28px] text-[20px]/[24px] font-bold mb-1'>{title}</h1>
                <ul className='flex flex-wrap gap-x-2 gap-y-1'>
                    <li>
                        <Link to="/" className='text-primary sm:text-[16px]/[24px] text-[14px]/[20px] flex items-center gap-1'>
                            <IconHomeFilled className='w-[18px] h-[18px] min-w-[18px]' />
                            Aero
                        </Link>
                    </li>
                    {breadcrumbItem?.map((item, key) => (
                        <li key={key} className='before:content-["/"] before:pe-2 text-font-color-100'>
                            {item.link ?
                                <Link to={item.url} className='text-primary sm:text-[16px]/[24px] text-[14px]/[20px]'>
                                    {item.link}
                                </Link>
                                :
                                <span className='inline-block sm:text-[16px]/[24px] text-[14px]/[20px]'>
                                    {item.name}
                                </span>
                            }
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex gap-1'>
                {buttonUrl && <Link to={buttonUrl} className='w-[38px] h-[38px] min-w-[38px] bg-sky flex items-center justify-center text-white rounded transition-all duration-300 hover:shadow-shadow-sm'>
                    {buttonContent}
                </Link>}
                <button onClick={rightSidebarToggle} className='md:flex hidden w-[38px] h-[38px] min-w-[38px] bg-primary items-center justify-center text-white rounded transition-all duration-300 hover:shadow-shadow-sm'>
                    <IconArrowRight className={`w-[18px] h-[18px] min-w-[18px] transition-all duration-300 ${rightSidebar ? '-rotate-180' : 'rotate-0'}`} />
                </button>
                <button onClick={mobileNavToggle} className='md:hidden flex w-[38px] h-[38px] min-w-[38px] bg-primary items-center justify-center text-white rounded transition-all duration-300 hover:shadow-shadow-sm'>
                    <IconMenuDeep className='w-[18px] h-[18px] min-w-[18px]' />
                </button>
            </div>
        </div>
    )
}
