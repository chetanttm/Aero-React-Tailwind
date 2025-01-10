import React, { useState } from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactDataTable from 'react-data-table-component';
import {
    IconBrandBehance,
    IconBrandDribbble,
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandGoogleFilled,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandPinterest,
    IconBrandTwitter,
    IconBrandX,
    IconBrandYoutubeFilled,
    IconCaretDownFilled,
    IconDots,
    IconEyeFilled,
    IconHeartFilled,
    IconMenu2,
    IconMessageFilled,
    IconQuoteFilled,
    IconSearch,
    IconSend2,
    IconThumbUpFilled,
    IconTrash,
    IconUserFilled,
    IconX,
} from '@tabler/icons-react'
import {
    avatar1,
    avatar11,
    avatar12,
    avatar13,
    avatar14,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    gallery1,
    gallery10,
    gallery11,
    gallery12,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
} from '../../assets/images'
import { toast, ToastContainer } from 'react-toastify'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

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

    const [todoList, setTodoList] = useState([
        "Weekly Bigbazar Shopping",
        "Pay the electricity bills",
        "Contrary to popular belief, Lorem Ipsum is not simply random text",
        "Make dinner reservation",
        "All the Lorem Ipsum generators on the Internet",
        "Many desktop publishing packages and web page editors"
    ]);
    const [newTodo, setNewTodo] = useState('');
    const [error, setError] = useState('');

    const notifyWithType = (message, type) => {
        toast(message, {
            type: type,
        });
    };

    const handleAddTodo = () => {
        if (newTodo.trim() === '') {
            setError("Input can't be empty!");
            return;
        }
        setTodoList([...todoList, newTodo]);
        setNewTodo('');
        setError('');
        notifyWithType("Todo added successfully!", "success");
    };

    const handleDeleteTodo = (index) => {
        const newList = [...todoList];
        newList.splice(index, 1);
        setTodoList(newList);
        notifyWithType("Todo deleted successfully!", "error");
    };

    const columnsFilter = [
        {
            name: 'Media',
            selector: row => row.media,
        },
        {
            name: 'Name',
            selector: row => row.name,
            cell: row =>
                <div>
                    <p className="text-[16px]/[19.2px]">{row.name}</p>
                    <p className="text-font-color-100">{row.location}</p>
                </div>,
            sortable: true,
        },
        {
            name: 'Like',
            selector: row => row.like,
            sortable: true,
        },
        {
            name: 'Comment',
            selector: row => row.comment,
            sortable: true,
        },
        {
            name: 'Share',
            selector: row => row.share,
            sortable: true,
        },
        {
            name: 'Member',
            selector: row => row.member,
            cell: row =>
                <span className='px-2 py-[3px] inline-block rounded bg-success text-white text-[12px]/[1] font-bold'>{row.member}</span>,
            sortable: true,
        },
    ];

    const dataFilter = [
        {
            media: <IconBrandLinkedin className="w-[40px] h-[40px] bg-blue rounded-full text-white p-2 stroke-[1.5]" />,
            name: 'LINKED IN',
            location: 'Florida, United States',
            like: '19K',
            comment: '14K',
            share: '10K',
            member: 2341,
        },
        {
            media: <IconBrandTwitter className="w-[40px] h-[40px] bg-sky rounded-full text-white p-2 stroke-[1.5]" />,
            name: 'TWITTER',
            location: 'Arkansas, United States',
            like: '7K',
            comment: '11K',
            share: '21K',
            member: 952,
        },
        {
            media: <IconBrandFacebook className="w-[40px] h-[40px] bg-blue rounded-full text-white p-2 stroke-[1.5]" />,
            name: 'FACEBOOK',
            location: 'Illunois, United States',
            like: '15K',
            comment: '18K',
            share: '8K',
            member: 6127,
        },
        {
            media: <IconBrandGoogleFilled className="w-[40px] h-[40px] bg-red-500 rounded-full text-white p-2 stroke-[1.5]" />,
            name: 'GOOGLE PLUS',
            location: 'Arizona, United States',
            like: '15K',
            comment: '18K',
            share: '154K',
            member: 325,
        },
        {
            media: <IconBrandYoutubeFilled className="w-[40px] h-[40px] bg-red-700 rounded-full text-white p-2 stroke-[1.5]" />,
            name: 'YOUTUBE',
            location: 'Alaska, United States',
            like: '15K',
            comment: '18K',
            share: '200',
            member: 160,
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
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mb-4'>
                <div>
                    <div className='flex items-center justify-between gap-2 mb-10'>
                        <h2 className='flex items-center gap-5 uppercase'>
                            <strong className='text-primary flex items-center'>
                                ToDo
                            </strong>
                            List
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
                        <ToastContainer autoClose={3000} />
                        <div className='flex items-stretch gap-2'>
                            <div className='form-control flex-1'>
                                <input
                                    type='text'
                                    id='TodoInput1'
                                    className='form-input'
                                    placeholder="What you need to do, sir?"
                                    value={newTodo}
                                    onChange={(e) => {
                                        setNewTodo(e.target.value);
                                        setError('');
                                    }}
                                />
                            </div>
                            <button className='btn btn-success' onClick={handleAddTodo}>
                                Add Todo
                            </button>
                        </div>
                        {error && <div className="text-danger text-[14px]/[20px]">{error}</div>}
                        <ul className='mt-6'>
                            {todoList.map((todo, index) => (
                                <li key={index} className='pb-4 mb-4 flex items-center justify-between gap-2 border-b border-border-color last:border-none last:pb-0 last:mb-0'>
                                    <div className="form-check todo">
                                        <input type="checkbox" id={'todoItem' + index} className="form-check-input check-line" />
                                        <label htmlFor={'todoItem' + index} className="form-check-label !text-[16px]/[24px]">{todo}</label>
                                    </div>
                                    <button className='bg-danger rounded-full text-white p-5' onClick={() => handleDeleteTodo(index)}>
                                        <IconTrash className='w-[16px] h-[16px]' />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between gap-2 mb-10'>
                        <h2 className='flex items-center gap-5 uppercase'>
                            <strong className='text-primary flex items-center'>
                                Chat
                            </strong>
                            Box
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
                        <ul className='max-h-[calc(418px-50px-40px)] overflow-auto no-scrollbar'>
                            <li className='mb-3 flex gap-3'>
                                <img src={avatar3} alt='user profile' className='w-[40px] h-[40px] min-w-[40px] rounded-full' />
                                <ul className='flex flex-col gap-1'>
                                    <li className='flex'>
                                        <small>Frank 11:00AM</small>
                                    </li>
                                    <li className='flex'>
                                        <span className="px-15 py-5 rounded text-white bg-blue">Hello, Michael</span>
                                    </li>
                                    <li className='flex'>
                                        <span className="px-15 py-5 rounded text-white bg-blue">How are you!</span>
                                    </li>
                                </ul>
                            </li>
                            <li className='mb-3 flex gap-3 justify-end'>
                                <ul className='flex flex-col gap-1 justify-end'>
                                    <li className='flex justify-end'>
                                        <small>11:10AM</small>
                                    </li>
                                    <li className='flex'>
                                        <span className="px-15 py-5 rounded bg-border-color">Hello, Frank</span>
                                    </li>
                                </ul>
                            </li>
                            <li className='mb-3 flex gap-3 justify-end'>
                                <ul className='flex flex-col gap-1 justify-end'>
                                    <li className='flex justify-end'>
                                        <small>11:11AM</small>
                                    </li>
                                    <li className='flex'>
                                        <span className="px-15 py-5 rounded bg-border-color">I'm fine what about you?</span>
                                    </li>
                                </ul>
                            </li>
                            <li className='mb-3 flex gap-3'>
                                <img src={avatar2} alt='user profile' className='w-[40px] h-[40px] min-w-[40px] rounded-full' />
                                <ul className='flex flex-col gap-1'>
                                    <li className='flex'>
                                        <small>Gary 11:13AM</small>
                                    </li>
                                    <li className='flex'>
                                        <span className="px-15 py-5 rounded text-white bg-info">Hello, Michael and Frank</span>
                                    </li>
                                </ul>
                            </li>
                            <li className='mb-3 flex gap-3'>
                                <img src={avatar5} alt='user profile' className='w-[40px] h-[40px] min-w-[40px] rounded-full' />
                                <ul className='flex flex-col gap-1'>
                                    <li className='flex'>
                                        <small>Hossein 11:14AM</small>
                                    </li>
                                    <li className='flex'>
                                        <span className="px-15 py-5 rounded text-white bg-blue">Hello, team</span>
                                    </li>
                                    <li className='flex'>
                                        <span className="px-15 py-5 rounded text-white bg-blue">Please let me know your requirements.</span>
                                    </li>
                                    <li className='flex'>
                                        <span className="px-15 py-5 rounded text-white bg-blue">How would like to connect with us?</span>
                                    </li>
                                </ul>
                            </li>
                            <li className='mb-3 flex gap-3 justify-end'>
                                <ul className='flex flex-col gap-1 justify-end'>
                                    <li className='flex justify-end'>
                                        <small>11:15AM</small>
                                    </li>
                                    <li className='flex'>
                                        <span className="px-15 py-5 rounded bg-border-color">Hello, Hossein</span>
                                    </li>
                                    <li className='flex'>
                                        <span className="px-15 py-5 rounded bg-border-color">Meeting on conference room at 12:00PM</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className='form-control flex items-stretch pt-3'>
                            <button className='flex items-center gap-1 px-[18px] py-1 rounded-s-lg bg-grey text-white'>
                                Add
                                <IconCaretDownFilled className='w-[18px] h-[18px] min-w-[18px]' />
                            </button>
                            <input type='text' placeholder='Enter text here...' className='form-input !rounded-none' />
                            <button className='flex items-center gap-1 px-3 py-1 rounded-e-lg border border-border-color'>
                                <IconSend2 />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mb-4'>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 1800,
                    }}
                    loop
                    speed={1000}
                    className='w-full'
                >
                    <SwiperSlide>
                        <div className='card bg-card-color md:p-20 p-15 rounded-md flex flex-col items-center justify-center text-center'>
                            <img src={avatar1} alt="avatar" className='w-[45px] h-[45px] min-w-[45px] rounded-full shadow-shadow-sm' />
                            <div className="my-2 font-bold">@Hossein</div>
                            <div className='flex flex-wrap items-center justify-center text-center gap-1'><IconQuoteFilled /> Lorem Ipsum is simply <Link to="#" className='text-sky'>@typesetting</Link> industry. Lorem <Link to="#" className='text-sky'>@Ipsum</Link> has been the industry's standard</div>
                            <div className='flex items-center justify-center w-full mt-6'>
                                <div className='flex-1 text-center flex flex-col items-center justify-center gap-1'>
                                    <IconHeartFilled />
                                    <p className="text-font-color-100">Like (5K)</p>
                                </div>
                                <div className='flex-1 text-center flex flex-col items-center justify-center gap-1'>
                                    <IconMessageFilled />
                                    <p className="text-font-color-100">Twitt (250)</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card bg-card-color md:p-20 p-15 rounded-md flex flex-col items-center justify-center text-center'>
                            <img src={avatar2} alt="avatar" className='w-[45px] h-[45px] min-w-[45px] rounded-full shadow-shadow-sm' />
                            <div className="my-2 font-bold">@Frank</div>
                            <div className='flex flex-wrap items-center justify-center text-center gap-1'><IconQuoteFilled /> Lorem Ipsum is simply <Link to="#" className='text-sky'>@typesetting</Link> industry. Lorem <Link to="#" className='text-sky'>@Ipsum</Link> has been the industry's standard</div>
                            <div className='flex items-center justify-center w-full mt-6'>
                                <div className='flex-1 text-center flex flex-col items-center justify-center gap-1'>
                                    <IconHeartFilled />
                                    <p className="text-font-color-100">Like (10K)</p>
                                </div>
                                <div className='flex-1 text-center flex flex-col items-center justify-center gap-1'>
                                    <IconMessageFilled />
                                    <p className="text-font-color-100">Twitt (250)</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2600,
                    }}
                    loop
                    speed={1000}
                    className='w-full'
                >
                    <SwiperSlide>
                        <div className='card bg-card-color md:p-20 p-15 rounded-md flex flex-col items-center justify-center text-center'>
                            <img src={avatar3} alt="avatar" className='w-[45px] h-[45px] min-w-[45px] rounded-full shadow-shadow-sm' />
                            <div className="my-2 font-bold">@Hossein</div>
                            <div className='flex flex-wrap items-center justify-center text-center gap-1'><IconQuoteFilled /> Lorem Ipsum is simply <Link to="#" className='text-sky'>@typesetting</Link> industry. Lorem <Link to="#" className='text-sky'>@Ipsum</Link> has been the industry's standard</div>
                            <div className='flex items-center justify-center w-full mt-6'>
                                <div className='flex-1 text-center flex flex-col items-center justify-center gap-1'>
                                    <IconHeartFilled />
                                    <p className="text-font-color-100">Like (155K)</p>
                                </div>
                                <div className='flex-1 text-center flex flex-col items-center justify-center gap-1'>
                                    <IconMessageFilled />
                                    <p className="text-font-color-100">Twitt (20)</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card bg-card-color md:p-20 p-15 rounded-md flex flex-col items-center justify-center text-center'>
                            <img src={avatar4} alt="avatar" className='w-[45px] h-[45px] min-w-[45px] rounded-full shadow-shadow-sm' />
                            <div className="my-2 font-bold">@Frank</div>
                            <div className='flex flex-wrap items-center justify-center text-center gap-1'><IconQuoteFilled /> Lorem Ipsum is simply <Link to="#" className='text-sky'>@typesetting</Link> industry. Lorem <Link to="#" className='text-sky'>@Ipsum</Link> has been the industry's standard</div>
                            <div className='flex items-center justify-center w-full mt-6'>
                                <div className='flex-1 text-center flex flex-col items-center justify-center gap-1'>
                                    <IconHeartFilled />
                                    <p className="text-font-color-100">Like (510K)</p>
                                </div>
                                <div className='flex-1 text-center flex flex-col items-center justify-center gap-1'>
                                    <IconMessageFilled />
                                    <p className="text-font-color-100">Twitt (2150)</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 1200,
                    }}
                    loop
                    speed={1000}
                    className='w-full'
                >
                    <SwiperSlide>
                        <div className='card bg-card-color md:p-20 p-15 rounded-md flex flex-col items-center justify-center text-center'>
                            <img src={avatar5} alt="avatar" className='w-[45px] h-[45px] min-w-[45px] rounded-full shadow-shadow-sm' />
                            <div className="my-2 font-bold">@Hossein</div>
                            <div className='flex flex-wrap items-center justify-center text-center gap-1'><IconQuoteFilled /> Lorem Ipsum is simply <Link to="#" className='text-sky'>@typesetting</Link> industry. Lorem <Link to="#" className='text-sky'>@Ipsum</Link> has been the industry's standard</div>
                            <div className='flex items-center justify-center w-full mt-6'>
                                <div className='flex-1 text-center flex flex-col items-center justify-center gap-1'>
                                    <IconHeartFilled />
                                    <p className="text-font-color-100">Like (50K)</p>
                                </div>
                                <div className='flex-1 text-center flex flex-col items-center justify-center gap-1'>
                                    <IconMessageFilled />
                                    <p className="text-font-color-100">Twitt (550)</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card bg-card-color md:p-20 p-15 rounded-md flex flex-col items-center justify-center text-center'>
                            <img src={avatar6} alt="avatar" className='w-[45px] h-[45px] min-w-[45px] rounded-full shadow-shadow-sm' />
                            <div className="my-2 font-bold">@Frank</div>
                            <div className='flex flex-wrap items-center justify-center text-center gap-1'><IconQuoteFilled /> Lorem Ipsum is simply <Link to="#" className='text-sky'>@typesetting</Link> industry. Lorem <Link to="#" className='text-sky'>@Ipsum</Link> has been the industry's standard</div>
                            <div className='flex items-center justify-center w-full mt-6'>
                                <div className='flex-1 text-center flex flex-col items-center justify-center gap-1'>
                                    <IconHeartFilled />
                                    <p className="text-font-color-100">Like (350K)</p>
                                </div>
                                <div className='flex-1 text-center flex flex-col items-center justify-center gap-1'>
                                    <IconMessageFilled />
                                    <p className="text-font-color-100">Twitt (2650)</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='grid lg:grid-cols-6 ssm:grid-cols-3 grid-cols-1 gap-4 mb-4'>
                <div className='card bg-card-color md:p-20 p-15 rounded-md flex flex-col items-center justify-center text-center group'>
                    <IconBrandFacebook className='text-[#3b5998] w-[36px] h-[36px] min-w-[36px] transition-all duration-300 group-hover:opacity-40 group-hover:rotate-[-32deg] group-hover:scale-[1.4]' />
                    <div className='mt-4'>
                        <span>Like</span>
                        <div className="text-[28px]/[1] mt-2">123</div>
                    </div>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md flex flex-col items-center justify-center text-center group'>
                    <IconBrandInstagram className='text-[#fb3958] w-[36px] h-[36px] min-w-[36px] transition-all duration-300 group-hover:opacity-40 group-hover:rotate-[-32deg] group-hover:scale-[1.4]' />
                    <div className='mt-4'>
                        <span>Followers</span>
                        <div className="text-[28px]/[1] mt-2">231</div>
                    </div>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md flex flex-col items-center justify-center text-center group'>
                    <IconBrandX className='text-black w-[36px] h-[36px] min-w-[36px] transition-all duration-300 group-hover:opacity-40 group-hover:rotate-[-32deg] group-hover:scale-[1.4]' />
                    <div className='mt-4'>
                        <span>Followers</span>
                        <div className="text-[28px]/[1] mt-2">31</div>
                    </div>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md flex flex-col items-center justify-center text-center group'>
                    <IconBrandGoogle className='text-[#dd4b39] w-[36px] h-[36px] min-w-[36px] transition-all duration-300 group-hover:opacity-40 group-hover:rotate-[-32deg] group-hover:scale-[1.4]' />
                    <div className='mt-4'>
                        <span>Like</span>
                        <div className="text-[28px]/[1] mt-2">254</div>
                    </div>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md flex flex-col items-center justify-center text-center group'>
                    <IconBrandLinkedin className='text-[#0077B5] w-[36px] h-[36px] min-w-[36px] transition-all duration-300 group-hover:opacity-40 group-hover:rotate-[-32deg] group-hover:scale-[1.4]' />
                    <div className='mt-4'>
                        <span>Followers</span>
                        <div className="text-[28px]/[1] mt-2">2510</div>
                    </div>
                </div>
                <div className='card bg-card-color md:p-20 p-15 rounded-md flex flex-col items-center justify-center text-center group'>
                    <IconBrandBehance className='text-[#053eff] w-[36px] h-[36px] min-w-[36px] transition-all duration-300 group-hover:opacity-40 group-hover:rotate-[-32deg] group-hover:scale-[1.4]' />
                    <div className='mt-4'>
                        <span>Project</span>
                        <div className="text-[28px]/[1] mt-2">121</div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mb-4'>
                <div className='card bg-card-color rounded-md overflow-hidden'>
                    <div className='flex max-h-[170px] relative before:w-full before:h-full before:absolute before:top-0 before:left-0 before:opacity-80 before:bg-gradient-to-r before:from-[#6f42c1] before:to-[#ffc107]'>
                        <img src={gallery2} alt='user cover' className='object-cover' />
                    </div>
                    <div className='md:p-20 p-15 text-center'>
                        <div className='relative mt-[-70px] text-center mb-2'>
                            <img src={avatar1} alt='user' className='w-[80px] h-[80px] min-w-[80px] mx-auto shadow-shadow-sm rounded-full p-[3px] bg-gradient-to-r from-[#6f42c1] to-[#ffc107]' />
                            <h5 className="mt-3 mb-1 text-[22px]/[30px] font-medium">Eliana Smith</h5>
                            <span>Designer, Developer, Traveler</span>
                        </div>
                        <button className="btn btn-primary">FOLLOW</button>
                        <div className='mt-6 flex items-center justify-center gap-2'>
                            <div className='flex-1'>
                                <h5 className="text-[22px]/[30px] font-medium">128</h5>
                                <small>Article</small>
                            </div>
                            <div className='flex-1'>
                                <h5 className="text-[22px]/[30px] font-medium">1,528</h5>
                                <small>Followers</small>
                            </div>
                            <div className='flex-1'>
                                <h5 className="text-[22px]/[30px] font-medium">321</h5>
                                <small>Following</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card bg-card-color rounded-md overflow-hidden'>
                    <div className='flex max-h-[170px] relative before:w-full before:h-full before:absolute before:top-0 before:left-0 before:opacity-80 before:bg-gradient-to-r before:from-[#1cbfd0] before:to-[#6610f2]'>
                        <img src={gallery3} alt='user cover' className='object-cover' />
                    </div>
                    <div className='md:p-20 p-15'>
                        <div className='relative mt-[-70px] mb-3 flex items-end gap-2'>
                            <img src={avatar4} alt='user' className='w-[90px] h-[90px] min-w-[90px] shadow-shadow-sm rounded-full p-[3px] bg-gradient-to-r from-[#6610f2] to-[#1cbfd0]' />
                            <div className='flex flex-col mt-14'>
                                <h5 className="font-bold leading-normal">Eliana Smith</h5>
                                <small className='leading-none'>Designer, Developer, Traveler</small>
                            </div>
                        </div>
                        <div className="text-font-color-100 mb-2">Creative UI/UX designer from USA. Working this field since 2010. Completed 500+ UI projects.</div>
                        <Link to="#" className='uppercase font-bold text-sky'>esmith.com</Link>
                        <div className='mt-6 flex items-center justify-center gap-2'>
                            <div className='flex-1'>
                                <h5 className="text-[22px]/[30px] font-medium">128</h5>
                                <small>Article</small>
                            </div>
                            <div className='flex-1'>
                                <h5 className="text-[22px]/[30px] font-medium">1,528</h5>
                                <small>Followers</small>
                            </div>
                            <div className='flex-1'>
                                <h5 className="text-[22px]/[30px] font-medium">321</h5>
                                <small>Following</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card bg-card-color rounded-md overflow-hidden'>
                    <div className='flex flex-col items-center justify-start pt-6 gap-1 h-[170px] bg-sky'>
                        <h5 className="mt-3 mb-1 text-[22px]/[30px] font-medium">Michael Dorsey</h5>
                        <span>UI/UX designer</span>
                    </div>
                    <div className='md:p-20 p-15 text-center'>
                        <div className='relative mt-[-70px] text-center mb-6'>
                            <img src={avatar3} alt='user' className='w-[80px] h-[80px] min-w-[80px] mx-auto shadow-shadow-sm rounded-full p-[3px] bg-white' />
                        </div>
                        <div className='flex items-center justify-center gap-4 mb-6'>
                            <Link to="#" className='text-sky'><IconBrandFacebook /></Link>
                            <Link to="#" className='text-sky'><IconBrandX /></Link>
                            <Link to="#" className='text-sky'><IconBrandInstagram /></Link>
                        </div>
                        <p className="text-font-color-100 pb-6 mb-6 border-b border-border-color">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                        <div className='mt-6 flex items-center justify-center gap-2'>
                            <div className='flex-1'>
                                <h5 className="text-[22px]/[30px] font-medium">128</h5>
                                <small>Article</small>
                            </div>
                            <div className='flex-1'>
                                <h5 className="text-[22px]/[30px] font-medium">1,528</h5>
                                <small>Followers</small>
                            </div>
                            <div className='flex-1'>
                                <h5 className="text-[22px]/[30px] font-medium">321</h5>
                                <small>Following</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mb-4'>
                <div className='card bg-card-color rounded-md overflow-hidden'>
                    <div className='md:p-6 p-4 flex items-center gap-2'>
                        <img src={avatar1} alt='avatar' />
                        <div className='mt-1'>
                            <h6>Eliana Smith</h6>
                            <p className="mb-1"><small>UI/UX Designer</small></p>
                            <button className="btn btn-primary">FOLLOW</button>
                        </div>
                    </div>
                    <div className='md:p-6 p-4 bg-border-color'>
                        <div className='flex items-center justify-between gap-2 mb-4 leading-none text-orange-500'>
                            <small>Setup your account</small>
                            <small>60%</small>
                        </div>
                        <div className="progress overflow-hidden h-[8px] bg-orange-200 rounded-full">
                            <div className="progress-bar w-[42%] bg-orange-500 h-full"></div>
                        </div>
                    </div>
                </div>
                <div className='card bg-card-color rounded-md overflow-hidden'>
                    <div className='md:p-6 p-4 flex items-center gap-2'>
                        <img src={avatar2} alt='avatar' />
                        <div className='mt-1'>
                            <h6>Eliana Smith</h6>
                            <p className="mb-1"><small>Web Developer</small></p>
                            <button className="btn btn-primary">FOLLOW</button>
                        </div>
                    </div>
                    <div className='md:p-6 p-4 bg-border-color'>
                        <div className='flex items-center justify-between gap-2 mb-4 leading-none text-success'>
                            <small>Setup your account</small>
                            <small>60%</small>
                        </div>
                        <div className="progress overflow-hidden h-[8px] bg-success-50 rounded-full">
                            <div className="progress-bar w-[42%] bg-success h-full"></div>
                        </div>
                    </div>
                </div>
                <div className='card bg-card-color rounded-md overflow-hidden'>
                    <div className='md:p-6 p-4 flex items-center gap-2'>
                        <img src={avatar3} alt='avatar' />
                        <div className='mt-1'>
                            <h6>Eliana Smith</h6>
                            <p className="mb-1"><small>Angular</small></p>
                            <button className="btn btn-primary">FOLLOW</button>
                        </div>
                    </div>
                    <div className='md:p-6 p-4 bg-border-color'>
                        <div className='flex items-center justify-between gap-2 mb-4 leading-none text-danger'>
                            <small>Setup your account</small>
                            <small>60%</small>
                        </div>
                        <div className="progress overflow-hidden h-[8px] bg-danger-50 rounded-full">
                            <div className="progress-bar w-[42%] bg-danger h-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-4'>
                <div className='flex items-center justify-between gap-2 mb-10'>
                    <h2 className='flex items-center gap-5 uppercase'>
                        <strong className='text-primary flex items-center'>
                            Social
                        </strong>
                        Media
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
                <div className='react-data-table'>
                    <ReactDataTable
                        columns={columnsFilter}
                        data={dataFilter}
                    />
                </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mb-4'>
                <div>
                    <div className='flex items-center justify-between gap-2 mb-10'>
                        <h2 className='flex items-center gap-5 uppercase'>
                            <strong className='text-primary flex items-center'>
                                Basic
                            </strong>
                            Slider
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
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            slidesPerView={1}
                            spaceBetween={10}
                            autoplay={{
                                delay: 1500,
                            }}
                            pagination
                            loop
                            speed={1000}
                            className='w-full'
                        >
                            <SwiperSlide>
                                <img src={gallery1} alt='gallery' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={gallery2} alt='gallery' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={gallery3} alt='gallery' />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between gap-2 mb-10'>
                        <h2 className='flex items-center gap-5 uppercase'>
                            <strong className='text-primary flex items-center'>
                                Slider
                            </strong>
                            With Caption
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
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            slidesPerView={1}
                            spaceBetween={10}
                            autoplay={{
                                delay: 2200,
                            }}
                            pagination
                            navigation
                            loop
                            speed={1000}
                            className='w-full'
                        >
                            <SwiperSlide>
                                <div className='relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black-50'>
                                    <img src={gallery4} alt='gallery' />
                                    <div className='p-2 text-white text-center absolute z-[1] left-[50%] translate-x-[-50%] sm:bottom-[10%] bottom-[15%]'>
                                        <h3 className='sm:text-[28px]/[38px] text-[22px]/[32px] font-medium sm:mb-4 mb-2'>New York</h3>
                                        <p>We love the Big Apple!</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black-50'>
                                    <img src={gallery5} alt='gallery' />
                                    <div className='p-2 text-white text-center absolute z-[1] left-[50%] translate-x-[-50%] sm:bottom-[10%] bottom-[15%]'>
                                        <h3 className='sm:text-[28px]/[38px] text-[22px]/[32px] font-medium sm:mb-4 mb-2'>New York</h3>
                                        <p>We love the Big Apple!</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black-50'>
                                    <img src={gallery6} alt='gallery' />
                                    <div className='p-2 text-white text-center absolute z-[1] left-[50%] translate-x-[-50%] sm:bottom-[10%] bottom-[15%]'>
                                        <h3 className='sm:text-[28px]/[38px] text-[22px]/[32px] font-medium sm:mb-4 mb-2'>New York</h3>
                                        <p>We love the Big Apple!</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
