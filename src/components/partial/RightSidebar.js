import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
    IconAddressBook,
    IconAppsFilled,
    IconBellFilled,
    IconBriefcaseFilled,
    IconCalendar,
    IconCalendarFilled,
    IconCamera,
    IconCheck,
    IconClockHour4,
    IconDiceFilled,
    IconEdit,
    IconFlagFilled,
    IconLanguage,
    IconMap,
    IconMessage,
    IconMessageFilled,
    IconNews,
    IconPower,
    IconRecycle,
    IconSearch,
    IconSettings,
    IconSettingsFilled,
    IconShoppingCart,
    IconTrash,
    IconUser,
    IconX,
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
} from '../../assets/images';

const colorItem = [
    {
        name: "indigo",
        color: "bg-theme-indigo",
    },
    {
        name: "blue",
        color: "bg-theme-blue",
    },
    {
        name: "cyan",
        color: "bg-theme-cyan",
    },
    {
        name: "green",
        color: "bg-theme-green",
    },
    {
        name: "orange",
        color: "bg-theme-orange",
    },
    {
        name: "blush",
        color: "bg-theme-blush",
    },
    {
        name: "red",
        color: "bg-theme-red",
    },
]

export default function RightSidebar() {

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

    const [searchModal, setSearchModal] = useState(false);
    const searchModalToggle = () => {
        setSearchModal(!searchModal);
    }

    const [isAppMenu, setIsAppMenu] = useState(false);
    const appMenuRef = useRef(null);
    const appButtonRef = useRef(null);
    const toggleAppMenu = () => {
        setIsAppMenu(prevState => !prevState);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                appMenuRef.current &&
                !appMenuRef.current.contains(event.target) &&
                appButtonRef.current &&
                !appButtonRef.current.contains(event.target)
            ) {
                setIsAppMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [isNotiMenu, setIsNotiMenu] = useState(false);
    const notiMenuRef = useRef(null);
    const notiButtonRef = useRef(null);
    const toggleNotiMenu = () => {
        setIsNotiMenu(prevState => !prevState);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                notiMenuRef.current &&
                !notiMenuRef.current.contains(event.target) &&
                notiButtonRef.current &&
                !notiButtonRef.current.contains(event.target)
            ) {
                setIsNotiMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [isTaskMenu, setIsTaskMenu] = useState(false);
    const taskMenuRef = useRef(null);
    const taskButtonRef = useRef(null);
    const toggleTaskMenu = () => {
        setIsTaskMenu(prevState => !prevState);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                taskMenuRef.current &&
                !taskMenuRef.current.contains(event.target) &&
                taskButtonRef.current &&
                !taskButtonRef.current.contains(event.target)
            ) {
                setIsTaskMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [settingModal, setSettingModal] = useState(false);
    const settingModalToggle = () => {
        setSettingModal(!settingModal);
    }

    const [selectedTheme, setSelectedTheme] = useState("red");
    const handleThemeChange = (theme) => {
        setSelectedTheme(theme);
        document.body.setAttribute("data-aero-theme", theme);
    };

    const [darkMode, setDarkMode] = useState(false);
    const darkModeToggle = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    }

    const [rtlMode, setRtlMode] = useState(false);
    const rtlModeToggle = () => {
        setRtlMode(!rtlMode);
        if (!rtlMode) {
            document.documentElement.setAttribute("dir", "rtl");
        } else {
            document.documentElement.setAttribute("dir", "ltr");
        }
    }

    const googleFonts = [
        {
            id: 'interFont',
            label: 'Inter'
        },
        {
            id: 'jostFont',
            label: 'Jost'
        },
        {
            id: 'maliFont',
            label: 'Mali'
        },
        {
            id: 'montserratFont',
            label: 'Montserrat'
        },
        {
            id: 'openSansFont',
            label: 'Open Sans'
        },
        {
            id: 'poppinsFont',
            label: 'Poppins'
        },
        {
            id: 'robotoFont',
            label: 'Roboto'
        },
    ];

    const [selectedFont, setSelectedFont] = useState(googleFonts[3].label);
    useEffect(() => {
        document.documentElement.style.setProperty('--font-family', selectedFont);
    }, [selectedFont]);
    const handleFontChange = (item) => {
        setSelectedFont(item.label);
    };

    return (
        <>
            <ul className='flex flex-col gap-2'>
                <li>
                    <button onClick={rightSidebarToggle} className="md:hidden flex items-center justify-center absolute bottom-[90px] end-[40px] px-2 py-3 text-white rounded-s-md bg-primary">
                        <IconSettingsFilled className='w-[16px] h-[16px] min-w-[16px]' />
                    </button>
                </li>
                <li className='relative'>
                    <button onClick={searchModalToggle} title='Search...' className='relative xl:w-[50px] w-[30px] h-[50px] xl:min-w-[50px] min-w-[30px] flex items-center justify-center rounded transition-all duration-300 hover:bg-primary hover:text-white'>
                        <IconSearch className='w-[20px] h-[20px] min-w-[20px]' />
                    </button>
                </li>
                <li className='relative'>
                    <button ref={appButtonRef} onClick={toggleAppMenu} title='App' className={`relative xl:w-[50px] w-[30px] h-[50px] xl:min-w-[50px] min-w-[30px] flex items-center justify-center rounded transition-all duration-300 hover:bg-primary hover:text-white ${isAppMenu ? 'bg-primary text-white' : ''}`}>
                        <IconAppsFilled className='w-[20px] h-[20px] min-w-[20px]' />
                    </button>
                    {isAppMenu && <div ref={appMenuRef} className='absolute top-0 md:end-[calc(100%+10px)] end-[calc(100%+16px)] md:min-w-[280px] min-w-[230px] rounded-md drop-shadow bg-card-color before:absolute before:top-15 before:w-0 before:h-0 before:start-full before:border-s-8 before:border-s-card-color before:border-t-8 before:border-t-transparent before:border-b-8 before:border-b-transparent'>
                        <span className='flex p-15 font-semibold border-b border-border-color text-[14px]/[1.5]'>App Shortcuts</span>
                        <ul className='p-15 text-center grid grid-cols-2 gap-2'>
                            <li>
                                <Link to="#" className='md:p-15 p-10 flex flex-col items-center justify-center rounded-md transition-all hover:bg-content-color'>
                                    <span className='flex items-center justify-center w-[36px] h-[36px] min-w-[36px] rounded bg-blue text-white mb-2'>
                                        <IconCamera />
                                    </span>
                                    <span>Photos</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className='md:p-15 p-10 flex flex-col items-center justify-center rounded-md transition-all hover:bg-content-color'>
                                    <span className='flex items-center justify-center w-[36px] h-[36px] min-w-[36px] rounded bg-info text-white mb-2'>
                                        <IconLanguage />
                                    </span>
                                    <span>Translate</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className='md:p-15 p-10 flex flex-col items-center justify-center rounded-md transition-all hover:bg-content-color'>
                                    <span className='flex items-center justify-center w-[36px] h-[36px] min-w-[36px] rounded bg-success text-white mb-2'>
                                        <IconCalendar />
                                    </span>
                                    <span>Calendar</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className='md:p-15 p-10 flex flex-col items-center justify-center rounded-md transition-all hover:bg-content-color'>
                                    <span className='flex items-center justify-center w-[36px] h-[36px] min-w-[36px] rounded bg-purple-700 text-white mb-2'>
                                        <IconAddressBook />
                                    </span>
                                    <span>Contacts</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className='md:p-15 p-10 flex flex-col items-center justify-center rounded-md transition-all hover:bg-content-color'>
                                    <span className='flex items-center justify-center w-[36px] h-[36px] min-w-[36px] rounded bg-danger text-white mb-2'>
                                        <IconNews />
                                    </span>
                                    <span>News</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className='md:p-15 p-10 flex flex-col items-center justify-center rounded-md transition-all hover:bg-content-color'>
                                    <span className='flex items-center justify-center w-[36px] h-[36px] min-w-[36px] rounded bg-orange-500 text-white mb-2'>
                                        <IconMap />
                                    </span>
                                    <span>Maps</span>
                                </Link>
                            </li>
                        </ul>
                    </div>}
                </li>
                <li className='relative'>
                    <button ref={notiButtonRef} onClick={toggleNotiMenu} title='Notifications' className={`relative xl:w-[50px] w-[30px] h-[50px] xl:min-w-[50px] min-w-[30px] flex items-center justify-center rounded transition-all duration-300 hover:bg-primary hover:text-white ${isNotiMenu ? 'bg-primary text-white' : ''}`}>
                        <span className="flex items-center justify-center absolute top-10 xl:end-10 end-0 h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-secondary"></span>
                        </span>
                        <IconBellFilled className='w-[20px] h-[20px] min-w-[20px]' />
                    </button>
                    {isNotiMenu && <div ref={notiMenuRef} className='absolute top-0 md:end-[calc(100%+10px)] end-[calc(100%+16px)] md:min-w-[280px] min-w-[230px] rounded-md drop-shadow bg-card-color before:absolute before:top-15 before:w-0 before:h-0 before:start-full before:border-s-8 before:border-s-card-color before:border-t-8 before:border-t-transparent before:border-b-8 before:border-b-transparent'>
                        <span className='flex p-15 font-semibold border-b border-border-color text-[14px]/[1.5]'>Notifications</span>
                        <ul className='h-[330px] overflow-auto no-scrollbar'>
                            <li>
                                <Link to="#" className='md:p-15 p-10 flex gap-10 transition-all hover:bg-content-color'>
                                    <span className='flex items-center justify-center w-[36px] h-[36px] min-w-[36px] rounded bg-blue text-white'>
                                        <IconUser />
                                    </span>
                                    <div>
                                        <h4 className='mb-1'>8 New Members joined</h4>
                                        <p className='flex items-center gap-1 text-info text-[13px]/[1]'>
                                            <IconClockHour4 className='w-[16px] h-[16px] min-w-[16px]' />
                                            14 mins ago
                                        </p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className='md:p-15 p-10 flex gap-10 transition-all hover:bg-content-color'>
                                    <span className='flex items-center justify-center w-[36px] h-[36px] min-w-[36px] rounded bg-yellow-500 text-white'>
                                        <IconShoppingCart />
                                    </span>
                                    <div>
                                        <h4 className='mb-1'>4 Sales made</h4>
                                        <p className='flex items-center gap-1 text-info text-[13px]/[1]'>
                                            <IconClockHour4 className='w-[16px] h-[16px] min-w-[16px]' />
                                            22 mins ago
                                        </p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className='md:p-15 p-10 flex gap-10 transition-all hover:bg-content-color'>
                                    <span className='flex items-center justify-center w-[36px] h-[36px] min-w-[36px] rounded bg-danger text-white'>
                                        <IconTrash />
                                    </span>
                                    <div>
                                        <h4 className='mb-1'><b>Nancy Doe</b> Deleted account</h4>
                                        <p className='flex items-center gap-1 text-info text-[13px]/[1]'>
                                            <IconClockHour4 className='w-[16px] h-[16px] min-w-[16px]' />
                                            3 hrs ago
                                        </p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className='md:p-15 p-10 flex gap-10 transition-all hover:bg-content-color'>
                                    <span className='flex items-center justify-center w-[36px] h-[36px] min-w-[36px] rounded bg-success text-white'>
                                        <IconEdit />
                                    </span>
                                    <div>
                                        <h4 className='mb-1'><b>Nancy</b> Changed name</h4>
                                        <p className='flex items-center gap-1 text-info text-[13px]/[1]'>
                                            <IconClockHour4 className='w-[16px] h-[16px] min-w-[16px]' />
                                            2 hrs ago
                                        </p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className='md:p-15 p-10 flex gap-10 transition-all hover:bg-content-color'>
                                    <span className='flex items-center justify-center w-[36px] h-[36px] min-w-[36px] rounded bg-gray-500 text-white'>
                                        <IconMessage />
                                    </span>
                                    <div>
                                        <h4 className='mb-1'><b>John</b> Commented your post</h4>
                                        <p className='flex items-center gap-1 text-info text-[13px]/[1]'>
                                            <IconClockHour4 className='w-[16px] h-[16px] min-w-[16px]' />
                                            4 hrs ago
                                        </p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className='md:p-15 p-10 flex gap-10 transition-all hover:bg-content-color'>
                                    <span className='flex items-center justify-center w-[36px] h-[36px] min-w-[36px] rounded bg-purple-500 text-white'>
                                        <IconRecycle />
                                    </span>
                                    <div>
                                        <h4 className='mb-1'><b>John</b> Updated status</h4>
                                        <p className='flex items-center gap-1 text-info text-[13px]/[1]'>
                                            <IconClockHour4 className='w-[16px] h-[16px] min-w-[16px]' />
                                            3 hrs ago
                                        </p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className='md:p-15 p-10 flex gap-10 transition-all hover:bg-content-color'>
                                    <span className='flex items-center justify-center w-[36px] h-[36px] min-w-[36px] rounded bg-sky text-white'>
                                        <IconSettings />
                                    </span>
                                    <div>
                                        <h4 className='mb-1'>Settings Updated</h4>
                                        <p className='flex items-center gap-1 text-info text-[13px]/[1]'>
                                            <IconClockHour4 className='w-[16px] h-[16px] min-w-[16px]' />
                                            Yesterday
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <Link to="#" className='flex px-15 py-10 font-semibold border-t border-border-color text-[14px]/[1.5] transition-all hover:bg-content-color'>View All Notifications</Link>
                    </div>}
                </li>
                <li className='relative'>
                    <button ref={taskButtonRef} onClick={toggleTaskMenu} title='Task List' className={`relative xl:w-[50px] w-[30px] h-[50px] xl:min-w-[50px] min-w-[30px] flex items-center justify-center rounded transition-all duration-300 hover:bg-primary hover:text-white ${isTaskMenu ? 'bg-primary text-white' : ''}`}>
                        <span className="flex items-center justify-center absolute top-10 xl:end-10 end-0 h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-secondary"></span>
                        </span>
                        <IconFlagFilled className='w-[20px] h-[20px] min-w-[20px]' />
                    </button>
                    {isTaskMenu && <div ref={taskMenuRef} className='absolute top-0 md:end-[calc(100%+10px)] end-[calc(100%+16px)] md:min-w-[280px] min-w-[230px] rounded-md drop-shadow bg-card-color before:absolute before:top-15 before:w-0 before:h-0 before:start-full before:border-s-8 before:border-s-card-color before:border-t-8 before:border-t-transparent before:border-b-8 before:border-b-transparent'>
                        <div className='flex items-center justify-between gap-2 p-15 font-semibold border-b border-border-color text-[14px]/[1.5]'>
                            <span>Tasks List</span>
                            <Link to="#" className='text-sky'><small>View All</small></Link>
                        </div>
                        <ul className='p-20 flex flex-col gap-30'>
                            <li>
                                <div>
                                    <div className='text-[12px]/[18px] text-primary uppercase flex items-center gap-2 justify-between mb-10'>
                                        <span>eCommerce Website</span>
                                        <span>86%</span>
                                    </div>
                                    <div className="progress overflow-hidden h-[1px] bg-border-color rounded-full">
                                        <div className="progress-bar w-[86%] bg-primary h-full"></div>
                                    </div>
                                </div>
                                <ul className="flex items-center mt-2">
                                    <li className='me-4'><small>Team</small></li>
                                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar2} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar3} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar4} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                                </ul>
                            </li>
                            <li>
                                <div>
                                    <div className='text-[12px]/[18px] text-info uppercase flex items-center gap-2 justify-between mb-10'>
                                        <span>iOS Game Dev</span>
                                        <span>45%</span>
                                    </div>
                                    <div className="progress overflow-hidden h-[1px] bg-border-color rounded-full">
                                        <div className="progress-bar w-[45%] bg-info h-full"></div>
                                    </div>
                                </div>
                                <ul className="flex items-center mt-2">
                                    <li className='me-4'><small>Team</small></li>
                                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar10} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar9} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar8} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar7} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar6} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                                </ul>
                            </li>
                            <li>
                                <div>
                                    <div className='text-[12px]/[18px] text-orange-500 uppercase flex items-center gap-2 justify-between mb-10'>
                                        <span>Home Development</span>
                                        <span>29%</span>
                                    </div>
                                    <div className="progress overflow-hidden h-[1px] bg-border-color rounded-full">
                                        <div className="progress-bar w-[29%] bg-orange-500 h-full"></div>
                                    </div>
                                </div>
                                <ul className="flex items-center mt-2">
                                    <li className='me-4'><small>Team</small></li>
                                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar5} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar2} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar7} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                                </ul>
                            </li>
                        </ul>
                    </div>}
                </li>
                <li className='relative'>
                    <button title='Calendar' className='relative xl:w-[50px] w-[30px] h-[50px] xl:min-w-[50px] min-w-[30px] flex items-center justify-center rounded transition-all duration-300 hover:bg-primary hover:text-white'>
                        <IconCalendarFilled className='w-[20px] h-[20px] min-w-[20px]' />
                    </button>
                </li>
                <li className='relative'>
                    <button title='Google Drive' className='relative xl:w-[50px] w-[30px] h-[50px] xl:min-w-[50px] min-w-[30px] flex items-center justify-center rounded transition-all duration-300 hover:bg-primary hover:text-white'>
                        <IconBriefcaseFilled className='w-[20px] h-[20px] min-w-[20px]' />
                    </button>
                </li>
                <li className='relative'>
                    <button title='Group Work' className='relative xl:w-[50px] w-[30px] h-[50px] xl:min-w-[50px] min-w-[30px] flex items-center justify-center rounded transition-all duration-300 hover:bg-primary hover:text-white'>
                        <IconDiceFilled className='w-[20px] h-[20px] min-w-[20px]' />
                    </button>
                </li>
                <li className='relative'>
                    <button onClick={settingModalToggle} title='Setting' className={`relative xl:w-[50px] w-[30px] h-[50px] xl:min-w-[50px] min-w-[30px] flex items-center justify-center rounded transition-all duration-300 hover:bg-primary hover:text-white after:fixed after:z-[4] after:w-full after:h-full after:left-0 after:top-0 after:bg-black-50 after:backdrop-blur-[2px] after:transition-all after:duration-500 after:ease-in-out ${settingModal ? 'after:opacity-1 after:visible after:overflow-auto' : 'after:opacity-0 after:invisible after:overflow-hidden'}`}>
                        <IconSettingsFilled className='w-[20px] h-[20px] min-w-[20px] animate-[spin_3s_linear_infinite]' />
                    </button>
                </li>
                <li className='relative'>
                    <button title='Sign Out' className='relative xl:w-[50px] w-[30px] h-[50px] xl:min-w-[50px] min-w-[30px] flex items-center justify-center rounded transition-all duration-300 hover:bg-primary hover:text-white'>
                        <IconPower className='w-[20px] h-[20px] min-w-[20px]' />
                    </button>
                </li>
            </ul>
            <div className={`search-page transition-all duration-500 fixed top-0 left-0 w-full h-full z-4 ${searchModal ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-full scale-0'}`}>
                <div onClick={searchModalToggle} className='bg-primary-80 w-full h-full'>
                    <button id="close" type="button" className="fixed top-15 end-15 p-10 d-flex items-center justify-center bg-secondary rounded-full text-white transition-all duration-300 hover:shadow-shadow-sm">
                        <IconX />
                    </button>
                </div>
                <div className='absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%] text-center w-full'>
                    <form>
                        <input type="search" placeholder="Search..." className='w-full text-center text-white sm:text-[60px]/[1.5] text-[40px]/[1.5] p-[1px_30px] bg-transparent focus:outline-none' />
                    </form>
                    <button className="btn btn-primary mt-20">Search</button>
                </div>
            </div>
            <div className={`fixed top-20 bg-card-color z-[5] h-[calc(100svh-40px)] w-full max-w-[280px] rounded-[10px] overflow-hidden transition-all duration-500 ${settingModal ? 'end-20' : '-end-full'}`}>
                <Tabs>
                    <TabList className='p-4 flex items-center gap-5 bg-secondary'>
                        <Tab className="text-white p-[6px] cursor-pointer transition-all duration-300 hover:text-secondary hover:bg-white hover:py-[6px] hover:px-[20px] hover:rounded-full" selectedClassName='!text-secondary bg-white py-[6px] px-[20px] rounded-full'>
                            <IconSettingsFilled className='w-[20px] h-[20px] min-w-[20px] animate-[spin_3s_linear_infinite]' />
                        </Tab>
                        <Tab className="text-white p-[6px] cursor-pointer transition-all duration-300 hover:text-secondary hover:bg-white hover:py-[6px] hover:px-[20px] hover:rounded-full" selectedClassName='!text-secondary bg-white py-[6px] px-[20px] rounded-full'>
                            <IconMessageFilled className='w-[20px] h-[20px] min-w-[20px]' />
                        </Tab>
                    </TabList>
                    <div className='p-4 h-[calc(100svh-62px-40px)] overflow-auto no-scrollbar'>
                        <TabPanel>
                            <div className='mb-6'>
                                <h2 className='text-[14px]/[1.5] font-bold uppercase mb-2'>Color Skins</h2>
                                <ul className='flex gap-1'>
                                    {colorItem.map((item, key) => (
                                        <li
                                            key={key}
                                            onClick={() => handleThemeChange(item.name)}
                                            className={`w-[33px] h-[25px] rounded-full flex items-center justify-center relative cursor-pointer ${item.color}`}
                                        >
                                            {selectedTheme === item.name && <IconCheck className='w-[18px] h-[18px] min-w-[18px] text-white' />}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mb-6'>
                                <h2 className='text-[14px]/[1.5] font-bold uppercase mb-2'>Theme Option</h2>
                                <ul>
                                    <li className='p-2 border border-border-color border-t-0 first:border-t'>
                                        <div className="form-check form-switch">
                                            <input
                                                type="checkbox"
                                                id="dark_checkbox"
                                                className="form-check-input"
                                                onChange={darkModeToggle}
                                                checked={darkMode}
                                            />
                                            <label className="form-check-label" htmlFor="dark_checkbox">Enable Dark Mode!</label>
                                        </div>
                                    </li>
                                    <li className='p-2 border border-border-color border-t-0 first:border-t'>
                                        <div className="form-check form-switch">
                                            <input
                                                type="checkbox"
                                                id="rtl_checkbox"
                                                className="form-check-input"
                                                onChange={rtlModeToggle}
                                                checked={rtlMode}
                                            />
                                            <label className="form-check-label" htmlFor="rtl_checkbox">Enable RTL Mode!</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className='text-[14px]/[1.5] font-bold uppercase mb-2'>Google font Settings</h2>
                                <ul>
                                    {googleFonts.map((item, key) => (
                                        <li
                                            key={key}
                                            className='p-2 border border-border-color border-t-0 first:border-t'>
                                            <div className="form-radio">
                                                <input
                                                    type="radio"
                                                    id={item.id}
                                                    name="googleFontRadio"
                                                    className="form-radio-input small"
                                                    checked={selectedFont === item.label}
                                                    onChange={() => handleFontChange(item)}
                                                />
                                                <label className="form-radio-label" htmlFor={item.id}>
                                                    {item.label}
                                                </label>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <ul className='flex flex-col gap-20'>
                                <li>
                                    <Link to="#" className='flex gap-10'>
                                        <div className='relative'>
                                            <img src={avatar4} alt='user avatar' className='w-30 h-30 min-w-30 rounded' />
                                            <span className='absolute top-0 end-0 w-10 h-10 rounded-full border-2 border-white bg-success'></span>
                                        </div>
                                        <div>
                                            <div className='flex items-center justify-between gap-2'>
                                                <span>Sophia</span>
                                                <small className='text-font-color-100'>11:00 AM</small>
                                            </div>
                                            <p className='text-[14px]/[1.5]'>
                                                There are many variations of passages of Lorem Ipsum available
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className='flex gap-10'>
                                        <div className='relative'>
                                            <img src={avatar5} alt='user avatar' className='w-30 h-30 min-w-30 rounded' />
                                            <span className='absolute top-0 end-0 w-10 h-10 rounded-full border-2 border-white bg-success'></span>
                                        </div>
                                        <div>
                                            <div className='flex items-center justify-between gap-2'>
                                                <span>Grayson</span>
                                                <small className='text-font-color-100'>11:30 AM</small>
                                            </div>
                                            <p className='text-[14px]/[1.5]'>
                                                All the Lorem Ipsum generators on the
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className='flex gap-10'>
                                        <div className='relative'>
                                            <img src={avatar2} alt='user avatar' className='w-30 h-30 min-w-30 rounded' />
                                            <span className='absolute top-0 end-0 w-10 h-10 rounded-full border-2 border-white bg-orange-500'></span>
                                        </div>
                                        <div>
                                            <div className='flex items-center justify-between gap-2'>
                                                <span>Isabella</span>
                                                <small className='text-font-color-100'>11:31 AM</small>
                                            </div>
                                            <p className='text-[14px]/[1.5]'>
                                                Contrary to popular belief, Lorem Ipsum
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className='flex gap-10'>
                                        <div className='relative'>
                                            <img src={avatar1} alt='user avatar' className='w-30 h-30 min-w-30 rounded' />
                                            <span className='absolute top-0 end-0 w-10 h-10 rounded-full border-2 border-white bg-blue'></span>
                                        </div>
                                        <div>
                                            <div className='flex items-center justify-between gap-2'>
                                                <span>John</span>
                                                <small className='text-font-color-100'>05:00 PM</small>
                                            </div>
                                            <p className='text-[14px]/[1.5]'>
                                                It is a long established fact that a reader
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className='flex gap-10'>
                                        <div className='relative'>
                                            <img src={avatar3} alt='user avatar' className='w-30 h-30 min-w-30 rounded' />
                                            <span className='absolute top-0 end-0 w-10 h-10 rounded-full border-2 border-white bg-success'></span>
                                        </div>
                                        <div>
                                            <div className='flex items-center justify-between gap-2'>
                                                <span>Alexander</span>
                                                <small className='text-font-color-100'>06:08 PM</small>
                                            </div>
                                            <p className='text-[14px]/[1.5]'>
                                                Richard McClintock, a Latin professor
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </>
    )
}
