import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import { Link } from 'react-router-dom'
import {
    IconArrowBackUpDouble,
    IconBrandBehance,
    IconBrandDribbble,
    IconBrandPinterest,
    IconMenu2,
    IconPlus,
} from '@tabler/icons-react'
import {
    avatar1,
    avatar12,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
} from '../../assets/images'
import ReactApexChart from 'react-apexcharts'
import ReactQuill from 'react-quill'

export default function TicketDetail() {

    const breadcrumbItem = [
        {
            name: "Project",
        },
        {
            name: "Ticket Detail",
        },
    ]

    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],

        ['blockquote', 'code-block'],

        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],

        [{ 'align': [] }],

        [{ 'list': 'ordered' }, { 'list': 'bullet' }],

        ['link', 'image'],

        [{ 'script': 'sub' }, { 'script': 'super' }],
    ];

    const chartData1 = {
        series: [60, 22.5, 17.5],
        options: {
            labels: ['Closed', 'Opened', 'In Progress'],
            colors: ['var(--chart-color5)', 'var(--chart-color4)', 'var(--chart-color3)'],
            legend: {
                show: true,
                position: 'bottom',
                markers: {
                    strokeWidth: 0,
                    shape: 'square',
                },
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: "60%"
                    }
                }
            }
        },
    };

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Ticket Detail" buttonContent={<IconPlus className='w-[18px] h-[18px] min-w-[18px]' />} buttonUrl="#" />
            <div className='grid lg:grid-cols-[1fr_2fr] grid-cols-1 gap-4'>
                <div className='flex flex-col gap-4'>
                    <div className='card overflow-hidden bg-card-color md:p-20 p-15 rounded-md'>
                        <button className='relative text-sky'>
                            <IconMenu2 />
                        </button>
                        <div className='mb-6'>
                            <img src={avatar12} alt='user profile' className='ms-auto rounded-full max-w-[250px] max-h-[250px] aspect-square mt-[-90px] me-[-80px]' />
                        </div>
                        <div className='mb-6'>
                            <h5 className="mb-1 text-[22px]/[1.5] font-medium">Fidel Tonn</h5>
                            <small className="text-font-color-100">fidel.tonn@gmail.com</small>
                        </div>
                        <ul className='flex justify-end'>
                            <li className='flex'>
                                <Link to="#" className='text-sky inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                    <IconBrandDribbble />
                                </Link>
                            </li>
                            <li className='flex'>
                                <Link to="#" className='text-sky inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                    <IconBrandBehance />
                                </Link>
                            </li>
                            <li className='flex'>
                                <Link to="#" className='text-sky inline-block p-20 transition-all duration-500 hover:bg-border-color'>
                                    <IconBrandPinterest />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='flex items-center gap-5 uppercase mb-2'>
                            <strong className='text-primary flex items-center'>
                                Ticket
                            </strong>
                            Info
                        </h2>
                        <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                            <small className="text-font-color-100">Title : </small>
                            <p>Lucid Admin</p>
                            <hr className='my-4' />
                            <small className="text-font-color-100">Product : </small>
                            <p>Lucid Side Menu Open OnClick</p>
                            <hr className='my-4' />
                            <small className="text-font-color-100">Date : </small>
                            <p>02 Jan 2019</p>
                            <hr className='my-4' />
                            <div>In Progress</div>
                            <div className="progress overflow-hidden h-[8px] bg-border-color rounded-full">
                                <div className="progress-bar w-[42%] bg-orange-300 h-full"></div>
                            </div>
                            <hr className='my-4' />
                            <small className="text-font-color-100">Team : </small>
                            <ul className="flex items-center mt-2">
                                <li className='hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'>
                                    <img src={avatar7} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' />
                                </li>
                                <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'>
                                    <img src={avatar8} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' />
                                </li>
                                <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'>
                                    <img src={avatar9} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' />
                                </li>
                                <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'>
                                    <img src={avatar2} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' />
                                </li>
                                <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'>
                                    <img src={avatar3} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className='flex items-center gap-5 uppercase mb-2'>
                            <strong className='text-primary flex items-center'>
                                Ticket
                            </strong>
                            Statestics
                        </h2>
                        <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                            <ReactApexChart options={chartData1.options} series={chartData1.series} type="donut" height="300" className="max-w-[300px] mx-auto" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                        <h5 className='font-medium text-[22px]/[28px] mb-3'>Ticket</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.</p>
                    </div>
                    <div>
                        <h2 className='flex items-center gap-5 uppercase mb-2'>
                            <strong className='text-primary flex items-center'>
                                Ticket
                            </strong>
                            Info
                        </h2>
                        <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                            <ReactQuill
                                modules={{ toolbar: toolbarOptions }}
                                className='bg-bg-light'
                                defaultValue="
                                <p>
                                    Hello There !
                                </p>
                                <p>
                                    The toolbar can be customized and it also supports various callbacks such as 
                                    <span style='color: red;'>oninit</span>, 
                                    <span style='color: red;'>onfocus</span>, 
                                    <span style='color: red;'>onpaste</span> 
                                    and many more.
                                </p>
                                <br/>
                                <p>
                                    Please try 
                                    <b>paste some texts</b>
                                    here
                                </p>
                            "
                            />
                        </div>
                    </div>
                    <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                        <div className='flex items-start sm:gap-20 sm:flex-row flex-col gap-10'>
                            <img src={avatar2} alt='user' width={100} height={100} className='p-1 rounded bg-content-color border border-content-color' />
                            <div className='flex-1'>
                                <h5 className='font-bold text-[18px]/[24px] mb-1'>Kareem Todd</h5>
                                <div className='flex items-center justify-between gap-1 mb-1'>
                                    <small className="text-font-color-100">Wednesday, October 17, 2018 at 4:00PM.</small>
                                    <Link to="#" className='flex items-center gap-1 text-sky'>
                                        <IconArrowBackUpDouble />
                                        Reply
                                    </Link>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                            </div>
                        </div>
                        <hr className='my-4' />
                        <div className='flex items-start gap-20 sm:flex-row flex-col'>
                            <img src={avatar1} alt='user' width={100} height={100} className='p-1 rounded bg-content-color border border-content-color' />
                            <div className='flex-1'>
                                <h5 className='font-bold text-[18px]/[24px] mb-1'>Stillnot david</h5>
                                <div className='flex items-center justify-between gap-1 mb-1'>
                                    <small className="text-font-color-100">Wednesday, October 17, 2018 at 4:00PM.</small>
                                    <Link to="#" className='flex items-center gap-1 text-sky'>
                                        <IconArrowBackUpDouble />
                                        Reply
                                    </Link>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.</p>
                                <div className="mt-4">
                                    <p className="text-font-color-100 mb-1">Project Screenshot</p>
                                    <div className='flex flex-wrap gap-2'>
                                        <img src={gallery1} alt="Project Screenshot" className="p-1 rounded bg-content-color w-[200px]" />
                                        <img src={gallery2} alt="Project Screenshot" className="p-1 rounded bg-content-color w-[200px]" />
                                        <img src={gallery3} alt="Project Screenshot" className="p-1 rounded bg-content-color w-[200px]" />
                                        <img src={gallery4} alt="Project Screenshot" className="p-1 rounded bg-content-color w-[200px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='my-4' />
                        <div className='flex items-start gap-20 sm:flex-row flex-col'>
                            <img src={avatar3} alt='user' width={100} height={100} className='p-1 rounded bg-content-color border border-content-color' />
                            <div className='flex-1'>
                                <h5 className='font-bold text-[18px]/[24px] mb-1'>Kareem Todd</h5>
                                <div className='flex items-center justify-between gap-1 mb-1'>
                                    <small className="text-font-color-100">Wednesday, October 17, 2018 at 4:00PM.</small>
                                    <Link to="#" className='flex items-center gap-1 text-sky'>
                                        <IconArrowBackUpDouble />
                                        Reply
                                    </Link>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                            </div>
                        </div>
                        <hr className='my-4' />
                        <div className='flex items-start gap-20 sm:flex-row flex-col'>
                            <img src={avatar4} alt='user' width={100} height={100} className='p-1 rounded bg-content-color border border-content-color' />
                            <div className='flex-1'>
                                <h5 className='font-bold text-[18px]/[24px] mb-1'>Kareem Todd</h5>
                                <div className='flex items-center justify-between gap-1 mb-1'>
                                    <small className="text-font-color-100">Wednesday, October 17, 2018 at 4:00PM.</small>
                                    <Link to="#" className='flex items-center gap-1 text-sky'>
                                        <IconArrowBackUpDouble />
                                        Reply
                                    </Link>
                                </div>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years.</p>
                            </div>
                        </div>
                        <hr className='my-4' />
                        <div className='flex items-start gap-20 sm:flex-row flex-col'>
                            <img src={avatar5} alt='user' width={100} height={100} className='p-1 rounded bg-content-color border border-content-color' />
                            <div className='flex-1'>
                                <h5 className='font-bold text-[18px]/[24px] mb-1'>Kareem Todd</h5>
                                <div className='flex items-center justify-between gap-1 mb-1'>
                                    <small className="text-font-color-100">Wednesday, October 17, 2018 at 4:00PM.</small>
                                    <Link to="#" className='flex items-center gap-1 text-sky'>
                                        <IconArrowBackUpDouble />
                                        Reply
                                    </Link>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                            </div>
                        </div>
                        <hr className='my-4' />
                        <div className='flex items-start gap-20 sm:flex-row flex-col'>
                            <img src={avatar6} alt='user' width={100} height={100} className='p-1 rounded bg-content-color border border-content-color' />
                            <div className='flex-1'>
                                <h5 className='font-bold text-[18px]/[24px] mb-1'>Kareem Todd</h5>
                                <div className='flex items-center justify-between gap-1 mb-1'>
                                    <small className="text-font-color-100">Wednesday, October 17, 2018 at 4:00PM.</small>
                                    <Link to="#" className='flex items-center gap-1 text-sky'>
                                        <IconArrowBackUpDouble />
                                        Reply
                                    </Link>
                                </div>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
