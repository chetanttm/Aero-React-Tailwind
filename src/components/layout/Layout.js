import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import LeftSidebar from '../partial/LeftSidebar';
import RightSidebar from '../partial/RightSidebar';

export default function Layout() {

    const [miniSidebar, setMiniSidebar] = useState(window.innerWidth < 1200);
    const miniSidebarToggle = () => {
        setMiniSidebar(!miniSidebar);
    }
    useEffect(() => {
        const handleResize = () => {
            setMiniSidebar(window.innerWidth < 1200);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`body-wrapper ${miniSidebar ? 'mini-sidebar' : ''}`}>
            <div className='left-sidebar fixed w-[250px] top-0 start-0 z-[5] h-svh transition-all duration-500'>
                <LeftSidebar miniSidebarToggle={miniSidebarToggle} />
            </div>
            <div className='main relative rounded-xl md:p-6 p-10 bg-content-color border-[5px] border-white shadow-shadow-normal my-20 ms-[260px] me-[70px] transition-all duration-500'>
                <Outlet />
            </div>
            <div className='right-sidebar fixed xl:px-10 px-5 py-15 w-[70px] top-0 end-0 z-[5] h-svh transition-all duration-500'>
                <RightSidebar />
            </div>
        </div>
    )
}
