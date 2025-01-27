import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    companyLogo,
    userProfile,
} from '../../assets/images';
import {
    IconAppsFilled,
    IconArrowNarrowRight,
    IconArticleFilled,
    IconChartCandleFilled,
    IconChevronRight,
    IconClipboardFilled,
    IconDiamondFilled,
    IconFileFilled,
    IconFolderFilled,
    IconHomeFilled,
    IconMapPinFilled,
    IconMenu2,
    IconPuzzleFilled,
    IconShieldLockFilled,
    IconShoppingCartFilled,
    IconSquaresFilled,
    IconTableFilled,
    IconUserFilled,
} from '@tabler/icons-react';

export default function LeftSidebar({ miniSidebarToggle }) {

    const leftNavMenu = [
        {
            icon: IconHomeFilled,
            link: "Dashboard",
            url: "/",
        },
        {
            icon: IconUserFilled,
            link: "Our Profile",
            url: "/our-profile",
        },
        {
            icon: IconAppsFilled,
            link: "App",
            children: [
                {
                    link: "Email",
                    url: "/app-email"
                },
                {
                    link: "Chat App",
                    url: "/app-chat"
                },
                {
                    link: "Calendar",
                    url: "/app-calendar"
                },
                {
                    link: "Contact",
                    url: "/app-contact"
                },
            ],
        },
        {
            icon: IconFileFilled,
            link: "Projects",
            children: [
                {
                    link: "Project List",
                    url: "/project-list"
                },
                {
                    link: "Task Board",
                    url: "/project-taskboard"
                },
                {
                    link: "Ticket List",
                    url: "/project-ticket-list"
                },
                {
                    link: "Ticket Detail",
                    url: "/project-ticket-detail"
                },
            ],
        },
        {
            icon: IconFolderFilled,
            link: "File Manager",
            children: [
                {
                    link: "All Files",
                    url: "/all-files"
                },
                {
                    link: "Documents",
                    url: "/file-documents"
                },
                {
                    link: "Images",
                    url: "/file-images"
                },
                {
                    link: "Media",
                    url: "/file-media"
                },
            ],
        },
        {
            icon: IconArticleFilled,
            link: "Blog",
            children: [
                {
                    link: "Dashboard",
                    url: "/blog-dashboard"
                },
                {
                    link: "Blog Post",
                    url: "/blog-post"
                },
                {
                    link: "List View",
                    url: "/blog-list"
                },
                {
                    link: "Grid View",
                    url: "/blog-grid"
                },
                {
                    link: "Blog Detail",
                    url: "/blog-detail"
                },
            ],
        },
        {
            icon: IconShoppingCartFilled,
            link: "Ecommerce",
            children: [
                {
                    link: "Dashboard",
                    url: "/ec-dashboard"
                },
                {
                    link: "Product",
                    url: "/ec-product"
                },
                {
                    link: "Product List",
                    url: "/ec-product-list"
                },
                {
                    link: "Product Detail",
                    url: "/ec-product-detail"
                },
            ],
        },
        {
            icon: IconDiamondFilled,
            link: "Components",
            children: [
                {
                    link: "Typography",
                    url: "/ui-typography",
                },
                {
                    link: "Tabs",
                    url: "/ui-tabs",
                },
                {
                    link: "Buttons",
                    url: "/ui-buttons",
                },
                {
                    link: "Icons",
                    url: "/ui-icons",
                },
                {
                    link: "Colors",
                    url: "/ui-colors",
                },
                {
                    link: "List Group",
                    url: "/ui-list-group",
                },
                {
                    link: "Modals",
                    url: "/ui-modals",
                },
                {
                    link: "Progress Bars",
                    url: "/ui-progressbars",
                },
                {
                    link: "Toastify",
                    url: "/ui-toastify",
                },
                {
                    link: "Collapse",
                    url: "/ui-collapse",
                },
            ],
        },
        {
            icon: IconClipboardFilled,
            link: "Forms",
            children: [
                {
                    link: "Basic Elements",
                    url: "/basic-elements",
                },
                {
                    link: "Form Validation",
                    url: "/form-validation",
                },
                {
                    link: "Drag & Drop Upload",
                    url: "/drag-drop-upload",
                },
                {
                    link: "Quill Editor",
                    url: "/quill-editor",
                },
            ],
        },
        {
            icon: IconTableFilled,
            link: "Tables",
            children: [
                {
                    link: "Basic Table",
                    url: "/basic-tabel",
                },
                {
                    link: "Normal Table",
                    url: "/normal-tabel",
                },
                {
                    link: "Editable Table",
                    url: "/editable-tabel",
                },
                {
                    link: "Table Color",
                    url: "/tabel-color",
                },
                {
                    link: "Table Filter",
                    url: "/tabel-filter",
                },
                {
                    link: "Data Table",
                    url: "/data-table",
                },
            ],
        },
        {
            icon: IconChartCandleFilled,
            link: "Charts",
            children: [
                {
                    link: "Apex Chart",
                    url: "/apex-chart",
                },
                {
                    link: "Knob",
                    url: "/knob",
                },
            ],
        },
        {
            icon: IconPuzzleFilled,
            link: "Widgets",
            children: [
                {
                    link: "Apps Widgets",
                    url: "/widget-app",
                },
                {
                    link: "Data Widgets",
                    url: "/widget-data",
                },
            ],
        },
        {
            icon: IconShieldLockFilled,
            link: "Authentication",
            children: [
                {
                    link: "Sign In",
                    url: "/sign-in",
                },
                {
                    link: "Sign Up",
                    url: "/sign-up",
                },
                {
                    link: "Forgot Password",
                    url: "/forgot-password",
                },
                {
                    link: "404",
                    url: "/404",
                },
                {
                    link: "500",
                    url: "/500",
                },
                {
                    link: "Page Offline",
                    url: "/page-offline",
                },
                {
                    link: "Locked Screen",
                    url: "/locked",
                },
            ],
        },
        {
            icon: IconSquaresFilled,
            link: "Sample Pages",
            children: [
                {
                    link: "Blank Page",
                    url: "/blank-page",
                },
                {
                    link: "Image Gallery",
                    url: "/image-gallery",
                },
                {
                    link: "Profile",
                    url: "/profile",
                },
                {
                    link: "Timeline",
                    url: "/timeline",
                },
                {
                    link: "Pricing",
                    url: "/pricing",
                },
                {
                    link: "Invoice",
                    url: "/invoice",
                },
                {
                    link: "Invoice List",
                    url: "/invoice-list",
                },
                {
                    link: "Search Result",
                    url: "/search-result",
                },
            ],
        },
        {
            icon: IconMapPinFilled,
            link: "Maps",
            children: [
                {
                    link: "JVector Map",
                    url: "/jvector-map",
                },
                {
                    link: "Yandex Map",
                    url: "/yandex-map",
                },
            ],
        },
    ];

    const pageUrl = useLocation().pathname;
    const [openMenu, setOpenMenu] = useState(() => {
        const activeParent = leftNavMenu.find(item =>
            item.children && item.children.some(sub => sub.url === pageUrl)
        );
        return activeParent ? activeParent.link : null;
    });
    const handleMenuClick = (menuName) => {
        setOpenMenu(prevMenu => prevMenu === menuName ? null : menuName);
    };
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const topLevelItem = leftNavMenu.find(item => item.url === pageUrl);
        if (topLevelItem) {
            setOpenMenu(null);
        } else {
            const activeParent = leftNavMenu.find(item =>
                item.children && item.children.some(sub => sub.url === pageUrl)
            );
            if (activeParent) setOpenMenu(activeParent.link);
        }
    }, [pageUrl]);
    /* eslint-disable react-hooks/exhaustive-deps */

    return (
        <div className='left-sidebar-wrapper mx-15'>
            <div className='navbar-brand py-15 border-b border-border-color flex items-center gap-10'>
                <button onClick={miniSidebarToggle}><IconMenu2 /></button>
                <Link to="/" className='company-logo flex items-center gap-2 text-[18px]/[28px]'>
                    <img src={companyLogo} alt='Company Logo' width={25} height={25} />
                    <span>Aero</span>
                </Link>
            </div>
            <div className='user-info py-15 border-b border-border-color flex gap-10'>
                <Link to="#" className='user-icon'>
                    <img src={userProfile} alt='user profile' width={50} height={50} className='rounded-lg xl:w-50 xl:h-50 xl:min-w-50 w-40 h-40 min-w-40 border-[3px] border-white shadow-shadow-sm' />
                </Link>
                <div className='user-content'>
                    <h4>
                        <Link to="#" className='text-[20px]/[26px] font-medium'>Michael</Link>
                    </h4>
                    <small>Super Admin</small>
                </div>
            </div>
            <div className='sidebar-list-wrapper h-[calc(100svh-59px-82px)] overflow-auto no-scrollbar'>
                <ul className='sidebar-list py-15'>
                    {leftNavMenu.map((item, key) => (
                        item.url ? (
                            <li key={key} className='sidebar-listitem'>
                                <Link to={item.url} className={`sidebar-link py-15 flex items-center gap-3 text-[14px]/[21px] group w-full ${pageUrl === item.url ? 'font-bold' : ''}`}>
                                    <item.icon className='w-[18px] h-[18px] min-w-[18px] rotate-[20deg] transition-all duration-500 group-hover:rotate-[-20deg]' />
                                    <span className='link-text'>{item.link}</span>
                                </Link>
                            </li>
                        ) : item.children ? (
                            <li key={key} className='sidebar-listitem'>
                                <button onClick={() => handleMenuClick(item.link)} className='sidebar-button py-15 flex items-center gap-3 text-[14px]/[21px] group w-full'>
                                    <item.icon className='w-[18px] h-[18px] min-w-[18px] rotate-[20deg] transition-all duration-500 group-hover:rotate-[-20deg]' />
                                    <span className='link-text'>{item.link}</span>
                                    <IconChevronRight className={`arrow-icon w-[18px] h-[18px] min-w-[18px] ms-auto transition-all duration-300 ${openMenu === item.link ? 'rotate-90' : ''}`} />
                                </button>
                                <ul
                                    className={`dropdown-menu ${openMenu === item.link ? 'block' : 'hidden'}`}
                                >
                                    {item.children.map((sub, subKey) => (
                                        <li key={subKey}>
                                            <Link to={sub.url} className={`py-5 flex items-center gap-3 text-[14px]/[21px] w-full ${pageUrl === sub.url ? 'font-bold' : ''}`}>
                                                <IconArrowNarrowRight className='w-[18px] h-[18px] min-w-[18px]' />
                                                <span>{sub.link}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ) : (
                            <li key={key} className='sidebar-listitem py-15 flex items-center gap-3 text-[14px]/[21px] group w-full'>
                                <item.icon className='w-[18px] h-[18px] min-w-[18px] rotate-[20deg] transition-all duration-500 group-hover:rotate-[-20deg]' />
                                <span className='link-text'>{item.link}</span>
                            </li>
                        )
                    ))}
                </ul>
                <div className='sidebar-bottom-info mb-4'>
                    <div className='text-[12px]/[18px] text-primary uppercase flex items-center gap-2 justify-between mb-10'>
                        <span>Traffic this Month</span>
                        <span>67%</span>
                    </div>
                    <div className="progress overflow-hidden h-[1px] bg-border-color rounded-full">
                        <div className="progress-bar w-[67%] bg-primary h-full"></div>
                    </div>
                </div>
                <div className='sidebar-bottom-info'>
                    <div className='text-[12px]/[18px] text-secondary uppercase flex items-center gap-2 justify-between mb-10'>
                        <span>Server Load</span>
                        <span>86%</span>
                    </div>
                    <div className="progress overflow-hidden h-[1px] bg-border-color rounded-full">
                        <div className="progress-bar w-[86%] bg-secondary h-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
