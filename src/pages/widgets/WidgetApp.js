import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import {
    IconBrandBehance,
    IconBrandDribbble,
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandPinterest,
    IconBrandX,
    IconDots,
    IconEyeFilled,
    IconMenu2,
    IconMessageFilled,
    IconSearch,
    IconThumbUpFilled,
    IconUserFilled,
    IconX,
} from '@tabler/icons-react'
import {
    avatar11,
    avatar12,
    avatar13,
    avatar14,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    gallery10,
    gallery11,
    gallery12,
} from '../../assets/images'

export default function WidgetApp() {

    const breadcrumbItem = [
        {
            name: "Widgets",
        },
        {
            name: "Apps Widgets",
        },
    ]

    const chartData1 = {
        options: {
            colors: ['var(--warning)'],
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    columnWidth: '40%',
                }
            },
        },
        series: [
            {
                data: [5, 2, 3, 7, 6, 4, 8, 1]
            }
        ]
    };

    const chartData2 = {
        options: {
            colors: ['var(--blue)'],
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    columnWidth: '40%',
                }
            },
        },
        series: [
            {
                data: [8, 2, 6, 5, 1, 4, 4, 3]
            }
        ]
    };

    const chartData3 = {
        options: {
            colors: ['var(--danger)'],
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    columnWidth: '40%',
                }
            },
        },
        series: [
            {
                data: [4, 4, 3, 9, 2, 1, 5, 7]
            }
        ]
    };

    const chartData4 = {
        options: {
            colors: ['var(--success)'],
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
            },
            tooltip: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    columnWidth: '40%',
                }
            },
        },
        series: [
            {
                data: [7, 5, 3, 8, 4, 6, 2, 9]
            }
        ]
    };

    const timlineItem = [
        {
            name: "Admin Birthday",
            comment: "Lorem Ipsum is simply dummy text of the printing",
            date: "1 months ago.",
        },
        {
            name: "Code Change",
            comment: "It is a long established fact that a reader will be distracted",
            date: "1 week ago.",
        },
        {
            name: "Add New Contact",
            comment: "maryamamiri@gmail.com",
            date: "1 week ago.",
        },
        {
            name: "New Email",
            comment: "Contrary to popular belief, Lorem Ipsum is not simply",
            date: "3 months ago.",
        },
        {
            name: "Add New Contact",
            comment: "maryamamiri@gmail.com",
            date: "1 months ago.",
        },
    ]

    return (
        <>
            <Breadcrumb title="Apps Widgets" breadcrumbItem={breadcrumbItem} />
            <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-4'>
                <div className='card bg-card-color md:p-20 p-15 rounded-md flex items-center justify-between gap-2'>
                    <div>
                        <h5 className="mb-2 font-medium text-[24px]/[1.5]">2,365</h5>
                        <span className='flex items-center gap-1'>
                            <IconEyeFilled className='w-[18px] h-[18px] min-w-[18px] text-warning' />
                            Post View
                        </span>
                    </div>
                    <ReactApexChart options={chartData1.options} series={chartData1.series} type="bar" width={60} height={55} />
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md flex items-center justify-between gap-2'>
                    <div>
                        <h5 className="mb-2 font-medium text-[24px]/[1.5]">365</h5>
                        <span className='flex items-center gap-1'>
                            <IconThumbUpFilled className='w-[18px] h-[18px] min-w-[18px] text-blue' />
                            Likes
                        </span>
                    </div>
                    <ReactApexChart options={chartData2.options} series={chartData2.series} type="bar" width={60} height={55} />
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md flex items-center justify-between gap-2'>
                    <div>
                        <h5 className="mb-2 font-medium text-[24px]/[1.5]">65</h5>
                        <span className='flex items-center gap-1'>
                            <IconMessageFilled className='w-[18px] h-[18px] min-w-[18px] text-danger' />
                            Comments
                        </span>
                    </div>
                    <ReactApexChart options={chartData3.options} series={chartData3.series} type="bar" width={60} height={55} />
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md flex items-center justify-between gap-2'>
                    <div>
                        <h5 className="mb-2 font-medium text-[24px]/[1.5]">2,055</h5>
                        <span className='flex items-center gap-1'>
                            <IconUserFilled className='w-[18px] h-[18px] min-w-[18px] text-success' />
                            Profile Views
                        </span>
                    </div>
                    <ReactApexChart options={chartData4.options} series={chartData4.series} type="bar" width={60} height={55} />
                </div>
            </div>
            <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-4'>
                <div className='card overflow-hidden bg-card-color md:p-20 p-15 rounded-md'>
                    <button className='relative'>
                        <IconMenu2 />
                    </button>
                    <div className='mb-6'>
                        <img src={avatar11} alt='user profile' className='ms-auto rounded-full max-w-[250px] max-h-[250px] aspect-square mt-[-90px] me-[-80px]' />
                    </div>
                    <div className='mb-6'>
                        <h5 className="mb-1 text-[22px]/[1.5] font-medium">Eliana Smith</h5>
                        <small className="text-font-color-100">UI/UX Desiger</small>
                    </div>
                    <ul className='flex justify-end'>
                        <li className='flex'>
                            <Link to="#" className='text-primary inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                <IconBrandDribbble />
                            </Link>
                        </li>
                        <li className='flex'>
                            <Link to="#" className='text-primary inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                <IconBrandBehance />
                            </Link>
                        </li>
                        <li className='flex'>
                            <Link to="#" className='text-primary inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                <IconBrandPinterest />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='card overflow-hidden bg-card-color md:p-20 p-15 rounded-md'>
                    <button className='relative'>
                        <IconMenu2 />
                    </button>
                    <div className='mb-6'>
                        <img src={avatar12} alt='user profile' className='ms-auto rounded-full max-w-[250px] max-h-[250px] aspect-square mt-[-90px] me-[-80px]' />
                    </div>
                    <div className='mb-6'>
                        <h5 className="mb-1 text-[22px]/[1.5] font-medium">Fidel Tonn</h5>
                        <small className="text-font-color-100">Angular Lead</small>
                    </div>
                    <ul className='flex justify-end'>
                        <li className='flex'>
                            <Link to="#" className='text-primary inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                <IconBrandInstagram />
                            </Link>
                        </li>
                        <li className='flex'>
                            <Link to="#" className='text-primary inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                <IconBrandX />
                            </Link>
                        </li>
                        <li className='flex'>
                            <Link to="#" className='text-primary inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                <IconBrandGithub />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='card overflow-hidden bg-card-color md:p-20 p-15 rounded-md'>
                    <button className='relative'>
                        <IconMenu2 />
                    </button>
                    <div className='mb-6'>
                        <img src={avatar13} alt='user profile' className='ms-auto rounded-full max-w-[250px] max-h-[250px] aspect-square mt-[-90px] me-[-80px]' />
                    </div>
                    <div className='mb-6'>
                        <h5 className="mb-1 text-[22px]/[1.5] font-medium">Gary Camara</h5>
                        <small className="text-font-color-100">Web Developer</small>
                    </div>
                    <ul className='flex justify-end'>
                        <li className='flex'>
                            <Link to="#" className='text-primary inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                <IconBrandDribbble />
                            </Link>
                        </li>
                        <li className='flex'>
                            <Link to="#" className='text-primary inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                <IconBrandX />
                            </Link>
                        </li>
                        <li className='flex'>
                            <Link to="#" className='text-primary inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                <IconBrandGithub />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='card overflow-hidden bg-card-color md:p-20 p-15 rounded-md'>
                    <button className='relative'>
                        <IconMenu2 />
                    </button>
                    <div className='mb-6'>
                        <img src={avatar14} alt='user profile' className='ms-auto rounded-full max-w-[250px] max-h-[250px] aspect-square mt-[-90px] me-[-80px]' />
                    </div>
                    <div className='mb-6'>
                        <h5 className="mb-1 text-[22px]/[1.5] font-medium">Eliana Smith</h5>
                        <small className="text-font-color-100">UI/UX Desiger</small>
                    </div>
                    <ul className='flex justify-end'>
                        <li className='flex'>
                            <Link to="#" className='text-primary inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                <IconBrandFacebook />
                            </Link>
                        </li>
                        <li className='flex'>
                            <Link to="#" className='text-primary inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                <IconBrandLinkedin />
                            </Link>
                        </li>
                        <li className='flex'>
                            <Link to="#" className='text-primary inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                <IconBrandPinterest />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='mb-20 grid lg:grid-cols-3 grid-cols-1 gap-4'>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <h2 className='mb-2'>
                        <span className='text-[32px]/[1] d-inline-block me-5'>2028</span>
                    </h2>
                    <h6 className='text-font-color-100 uppercase text-[14px]/[1.5] mb-2'>Total Projects</h6>
                    <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                        <div className="progress-bar w-[42%] bg-orange-300 h-full"></div>
                    </div>
                    <small>21% higher than last month</small>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <h2 className='mb-2'>
                        <span className='text-[32px]/[1] d-inline-block me-5'>510</span>
                    </h2>
                    <h6 className='text-font-color-100 uppercase text-[14px]/[1.5] mb-2'>Completed Task</h6>
                    <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                        <div className="progress-bar w-[25%] bg-blue h-full"></div>
                    </div>
                    <small>43% higher than last month</small>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <h2 className='mb-2'>
                        <span className='text-[32px]/[1] d-inline-block me-5'>17</span>
                    </h2>
                    <h6 className='text-font-color-100 uppercase text-[14px]/[1.5] mb-2'>Ongoing Projects</h6>
                    <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                        <div className="progress-bar w-[60%] bg-purple h-full"></div>
                    </div>
                    <small>23% higher than last month</small>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mb-4'>
                <div>
                    <div className='flex items-center justify-between gap-2 mb-10'>
                        <h2 className='flex items-center gap-5 uppercase'>
                            <strong className='text-primary flex items-center'>
                                Activities
                            </strong>
                        </h2>
                        <div className='flex items-center gap-2'>
                            <button>
                                <IconDots />
                            </button>
                            <button>
                                <IconX />
                            </button>
                        </div>
                    </div>
                    <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                        {timlineItem.map((item, key) => (
                            <div key={key} className='timeline-item py-15 ps-15 border-l border-border relative after:absolute after:content-[""] after:top-20 after:-left-5 after:w-[10px] after:h-[10px] after:border-[3px] after:bg-card-color'>
                                <div className='text-[20px]/[24px] font-bold mb-5'>
                                    {item.name}
                                </div>
                                <div className='mb-10'>
                                    {item.comment}
                                </div>
                                <small className='text-font-color-100'>
                                    {item.date}
                                </small>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between gap-2 mb-10'>
                        <h2 className='flex items-center gap-5 uppercase'>
                            <strong className='text-primary flex items-center'>
                                Inbox
                            </strong>
                        </h2>
                        <div className='flex items-center gap-2'>
                            <button>
                                <IconDots />
                            </button>
                            <button>
                                <IconX />
                            </button>
                        </div>
                    </div>
                    <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                        <div className='flex items-stretch mb-6'>
                            <div className='p-4 bg-blue text-white text-center flex flex-col items-center justify-center gap-2 flex-1'>
                                <h3 className="text-[28px]/[40px] font-medium">08</h3>
                                <p>Emails Sent</p>
                            </div>
                            <div className='p-4 bg-success text-white text-center flex flex-col items-center justify-center gap-2 flex-1'>
                                <h3 className="text-[28px]/[40px] font-medium">83%</h3>
                                <p>Were Read</p>
                            </div>
                            <div className='p-4 bg-orange-500 text-white text-center flex flex-col items-center justify-center gap-2 flex-1'>
                                <h3 className="text-[28px]/[40px] font-medium">0%</h3>
                                <p>Were Clicked</p>
                            </div>
                        </div>
                        <div className='relative w-full overflow-hidden mb-6'>
                            <button aria-label="search icon" className="absolute top-[50%] translate-y-[-50%] border-s border-border-color end-[1px] py-[6px] px-[12px] min-h-[33px] rounded-e-md">
                                <IconSearch className="text-font-color w-[20px] h-[20px]" />
                            </button>
                            <input type='text' id='search' name='search' placeholder='Search...' className='bg-transparent border border-border-color w-full py-[6px] ps-[12px] pe-60 min-h-[35px] rounded-md focus:outline-none' />
                        </div>
                        <div className='flex items-start gap-20 pb-15 mb-15 border-b border-border-color last:pb-0 last:mb-0 last:border-0'>
                            <Link to="#">
                                <img src={avatar2} alt='user' className='w-[60px] h-[60px] min-w-[60px] rounded' />
                            </Link>
                            <div>
                                <div className='flex items-center justify-between gap-x-2 flex-wrap'>
                                    <Link to="#">
                                        <h6 className="text-[18px]/[28px] text-sky">Hossein Shams</h6>
                                    </Link>
                                    <small className='text-font-color-100'>13:34 PM</small>
                                </div>
                                <p className='mb-1'>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-20 pb-15 mb-15 border-b border-border-color last:pb-0 last:mb-0 last:border-0'>
                            <Link to="#">
                                <img src={avatar3} alt='user' className='w-[60px] h-[60px] min-w-[60px] rounded' />
                            </Link>
                            <div>
                                <div className='flex items-center justify-between gap-x-2 flex-wrap'>
                                    <Link to="#">
                                        <h6 className="text-[18px]/[28px] text-sky">Tim Hank</h6>
                                    </Link>
                                    <small className='text-font-color-100'>13:34 PM</small>
                                </div>
                                <p className='mb-1'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-20 pb-15 mb-15 border-b border-border-color last:pb-0 last:mb-0 last:border-0'>
                            <Link to="#">
                                <img src={avatar4} alt='user' className='w-[60px] h-[60px] min-w-[60px] rounded' />
                            </Link>
                            <div>
                                <div className='flex items-center justify-between gap-x-2 flex-wrap'>
                                    <Link to="#">
                                        <h6 className="text-[18px]/[28px] text-sky">Maryam Amiri</h6>
                                    </Link>
                                    <small className='text-font-color-100'>13:34 PM</small>
                                </div>
                                <p className='mb-1'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-20 pb-15 mb-15 border-b border-border-color last:pb-0 last:mb-0 last:border-0'>
                            <Link to="#">
                                <img src={avatar5} alt='user' className='w-[60px] h-[60px] min-w-[60px] rounded' />
                            </Link>
                            <div>
                                <div className='flex items-center justify-between gap-x-2 flex-wrap'>
                                    <Link to="#">
                                        <h6 className="text-[18px]/[28px] text-sky">Gary Camara</h6>
                                    </Link>
                                    <small className='text-font-color-100'>13:34 PM</small>
                                </div>
                                <p className='mb-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mb-4'>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <img src={gallery11} alt='gallery' />
                    <div className='mt-4'>
                        <h6 className='font-bold'>Magazine Design</h6>
                        <small className="text-font-color-100">Aero  |  Last Update: 12 Dec 2019</small>
                    </div>
                    <div className='flex items-center gap-x-2 flex-wrap'>
                        <span>4,870 USD</span>
                        <small className="text-font-color-100">Budget / Salary</small>
                        <small className="text-danger">17 Days Remaining</small>
                    </div>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <img src={gallery10} alt='gallery' />
                    <div className='mt-4'>
                        <h6 className='font-bold'>New Dashboard</h6>
                        <small className="text-font-color-100">Aero  |  Last Update: 17 Dec 2019</small>
                    </div>
                    <div className='flex items-center gap-x-2 flex-wrap'>
                        <span>921 USD</span>
                        <small className="text-font-color-100">Budget / Salary</small>
                        <small className="text-success">Early Dec 2019</small>
                    </div>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                    <img src={gallery12} alt='gallery' />
                    <div className='mt-4'>
                        <h6 className='font-bold'>Mobile App</h6>
                        <small className="text-font-color-100">Aero  |  Last Update: 21 Dec 2019</small>
                    </div>
                    <div className='flex items-center gap-x-2 flex-wrap'>
                        <span>1,870 USD</span>
                        <small className="text-font-color-100">Budget / Salary</small>
                        <small className="text-danger">10 Days Remaining</small>
                    </div>
                </div>
            </div>
        </>
    )
}
