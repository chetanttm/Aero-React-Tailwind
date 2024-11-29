import React from 'react'
import ReactDataTable from 'react-data-table-component';
import Breadcrumb from '../../components/common/Breadcrumb';
import { Link } from 'react-router-dom';
import {
    IconPlus,
} from '@tabler/icons-react'
import {
    avatar1,
    avatar10,
    avatar11,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
} from '../../assets/images'

export default function ProjectList() {

    const breadcrumbItem = [
        {
            name: "Project",
        },
        {
            name: "List",
        },
    ]

    const columnsInvoice = [
        {
            name: 'ASSIGNED',
            selector: row => row.userName,
            cell: row => <div className='flex items-center gap-4'>
                <img src={row.userImage} alt='profile' width="36" height="36" className='w-[36px] h-[36px] min-w-[36px] rounded-md' />
                <div>
                    <Link to={row.userUrl} className='text-sky font-bold'>{row.userName}</Link>
                    <p>{row.userRole}</p>
                </div>
            </div>,
            sortable: true,
        },
        {
            name: 'NAME',
            selector: row => row.projectName,
            cell: row => <div>
                <p className='font-bold'>{row.projectName}</p>
                <p>Cost: {row.projectCost}</p>
            </div>,
            sortable: true,
        },
        {
            name: 'TEAM',
            selector: row => row.projectTeam,
        },
        {
            name: 'STATUS',
            selector: row => row.projectStatus,
        },
        {
            name: 'PRIORITY',
            selector: row => row.projectPriority,
            cell: row =>
                <span className={`px-2 py-[3px] inline-block rounded text-white text-[12px]/[1] font-bold ${row.projectPriority === 'High' ? 'bg-danger' : row.projectPriority === 'Medium' ? 'bg-blue' : row.projectPriority === 'Low' ? 'bg-success' : row.projectPriority === 'Pending' ? 'bg-orange-500' : ''}`}>
                    {row.projectPriority}
                </span >,
            sortable: true,
        },
        {
            name: 'Due Date',
            selector: row => row.dueDate,
            sortable: true,
        },
    ];

    const dataInvoice = [
        {
            userImage: avatar1,
            userName: 'Andew Jon',
            userRole: 'Project Lead',
            userUrl: '#',
            projectName: 'eCommerce Website',
            projectCost: '$215',
            projectTeam:
                <ul className="flex items-center ps-10 py-5">
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar2} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar3} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar4} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar5} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                </ul>,
            projectStatus:
                <div className="progress overflow-hidden h-[8px] w-[130px] bg-border-color rounded-full">
                    <div className="progress-bar w-[45%] bg-blue h-full"></div>
                </div>,
            projectPriority: 'Medium',
            dueDate: '25 Dec 2019',
        },
        {
            userImage: avatar2,
            userName: 'Jannie Dvis',
            userRole: 'Design Lead',
            userUrl: '#',
            projectName: 'One Page Landing',
            projectCost: '$100',
            projectTeam:
                <ul className="flex items-center ps-10 py-5">
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar6} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar7} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                </ul>,
            projectStatus:
                <div className="progress overflow-hidden h-[8px] w-[130px] bg-border-color rounded-full">
                    <div className="progress-bar w-[85%] bg-danger h-full"></div>
                </div>,
            projectPriority: 'High',
            dueDate: '21 Dec 2019',
        },
        {
            userImage: avatar3,
            userName: 'Petere Husen',
            userRole: 'Swift Developer',
            userUrl: '#',
            projectName: 'iOS Game',
            projectCost: '$890',
            projectTeam:
                <ul className="flex items-center ps-10 py-5">
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar8} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar9} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar10} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar11} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar1} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                </ul>,
            projectStatus:
                <div className="progress overflow-hidden h-[8px] w-[130px] bg-border-color rounded-full">
                    <div className="progress-bar w-[20%] bg-blue h-full"></div>
                </div>,
            projectPriority: 'Medium',
            dueDate: '26 Dec 2019',
        },
        {
            userImage: avatar4,
            userName: 'John Deo',
            userRole: 'UI/UX Lead',
            userUrl: '#',
            projectName: 'Digital Marketing',
            projectCost: '$350',
            projectTeam:
                <ul className="flex items-center ps-10 py-5">
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar6} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar9} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar3} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                </ul>,
            projectStatus:
                <div className="progress overflow-hidden h-[8px] w-[130px] bg-border-color rounded-full">
                    <div className="progress-bar w-[33%] bg-orange-500 h-full"></div>
                </div>,
            projectPriority: 'Pending',
            dueDate: '12 Jan 2019',
        },
        {
            userImage: avatar5,
            userName: 'Emma Welson',
            userRole: 'Angular Developer',
            userUrl: '#',
            projectName: 'Hospital Admin',
            projectCost: '$45 Per Hour',
            projectTeam:
                <ul className="flex items-center ps-10 py-5">
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar10} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar4} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                </ul>,
            projectStatus:
                <div className="progress overflow-hidden h-[8px] w-[130px] bg-border-color rounded-full">
                    <div className="progress-bar w-[64%] bg-success h-full"></div>
                </div>,
            projectPriority: 'Low',
            dueDate: '20 Jan 2019',
        },
        {
            userImage: avatar6,
            userName: 'Jannie Dvis',
            userRole: 'Design Lead',
            userUrl: '#',
            projectName: 'One Page Landing',
            projectCost: '$100',
            projectTeam:
                <ul className="flex items-center ps-10 py-5">
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar2} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar3} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                </ul>,
            projectStatus:
                <div className="progress overflow-hidden h-[8px] w-[130px] bg-border-color rounded-full">
                    <div className="progress-bar w-[88%] bg-danger h-full"></div>
                </div>,
            projectPriority: 'High',
            dueDate: '26 Dec 2019',
        },
        {
            userImage: avatar7,
            userName: 'Petere Husen',
            userRole: 'Swift Developer',
            userUrl: '#',
            projectName: 'iOS Game',
            projectCost: '$890',
            projectTeam:
                <ul className="flex items-center ps-10 py-5">
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar2} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar3} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar4} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                </ul>,
            projectStatus:
                <div className="progress overflow-hidden h-[8px] w-[130px] bg-border-color rounded-full">
                    <div className="progress-bar w-[35%] bg-orange-500 h-full"></div>
                </div>,
            projectPriority: 'Pending',
            dueDate: '12 Jan 2019',
        },
        {
            userImage: avatar8,
            userName: 'John Deo',
            userRole: 'UI/UX Lead',
            userUrl: '#',
            projectName: 'Digital Marketing',
            projectCost: '$350',
            projectTeam:
                <ul className="flex items-center ps-10 py-5">
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar8} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar11} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                </ul>,
            projectStatus:
                <div className="progress overflow-hidden h-[8px] w-[130px] bg-border-color rounded-full">
                    <div className="progress-bar w-[28%] bg-orange-500 h-full"></div>
                </div>,
            projectPriority: 'Pending',
            dueDate: '12 Jan 2019',
        },
        {
            userImage: avatar9,
            userName: 'Emma Welson',
            userRole: 'Angular Developer',
            userUrl: '#',
            projectName: 'Hospital Admin',
            projectCost: '$45 Per Hour',
            projectTeam:
                <ul className="flex items-center ps-10 py-5">
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar4} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar8} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar11} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar1} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                </ul>,
            projectStatus:
                <div className="progress overflow-hidden h-[8px] w-[130px] bg-border-color rounded-full">
                    <div className="progress-bar w-[49%] bg-success h-full"></div>
                </div>,
            projectPriority: 'Low',
            dueDate: '20 Jan 2019',
        },
        {
            userImage: avatar5,
            userName: 'Emma Welson',
            userRole: 'Angular Developer',
            userUrl: '#',
            projectName: 'Hospital Admin',
            projectCost: '$45 Per Hour',
            projectTeam:
                <ul className="flex items-center ps-10 py-5">
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar10} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar4} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                </ul>,
            projectStatus:
                <div className="progress overflow-hidden h-[8px] w-[130px] bg-border-color rounded-full">
                    <div className="progress-bar w-[64%] bg-success h-full"></div>
                </div>,
            projectPriority: 'Low',
            dueDate: '20 Jan 2019',
        },
        {
            userImage: avatar6,
            userName: 'Jannie Dvis',
            userRole: 'Design Lead',
            userUrl: '#',
            projectName: 'One Page Landing',
            projectCost: '$100',
            projectTeam:
                <ul className="flex items-center ps-10 py-5">
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar2} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar3} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                </ul>,
            projectStatus:
                <div className="progress overflow-hidden h-[8px] w-[130px] bg-border-color rounded-full">
                    <div className="progress-bar w-[88%] bg-danger h-full"></div>
                </div>,
            projectPriority: 'High',
            dueDate: '26 Dec 2019',
        },
        {
            userImage: avatar7,
            userName: 'Petere Husen',
            userRole: 'Swift Developer',
            userUrl: '#',
            projectName: 'iOS Game',
            projectCost: '$890',
            projectTeam:
                <ul className="flex items-center ps-10 py-5">
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar2} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar3} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar4} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                </ul>,
            projectStatus:
                <div className="progress overflow-hidden h-[8px] w-[130px] bg-border-color rounded-full">
                    <div className="progress-bar w-[35%] bg-orange-500 h-full"></div>
                </div>,
            projectPriority: 'Pending',
            dueDate: '12 Jan 2019',
        },
        {
            userImage: avatar8,
            userName: 'John Deo',
            userRole: 'UI/UX Lead',
            userUrl: '#',
            projectName: 'Digital Marketing',
            projectCost: '$350',
            projectTeam:
                <ul className="flex items-center ps-10 py-5">
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar8} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar11} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                </ul>,
            projectStatus:
                <div className="progress overflow-hidden h-[8px] w-[130px] bg-border-color rounded-full">
                    <div className="progress-bar w-[28%] bg-orange-500 h-full"></div>
                </div>,
            projectPriority: 'Pending',
            dueDate: '12 Jan 2019',
        },
        {
            userImage: avatar9,
            userName: 'Emma Welson',
            userRole: 'Angular Developer',
            userUrl: '#',
            projectName: 'Hospital Admin',
            projectCost: '$45 Per Hour',
            projectTeam:
                <ul className="flex items-center ps-10 py-5">
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar4} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar8} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar11} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                    <li className='-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out'><img src={avatar1} alt="Avatar" className='w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-shadow-normal' /></li>
                </ul>,
            projectStatus:
                <div className="progress overflow-hidden h-[8px] w-[130px] bg-border-color rounded-full">
                    <div className="progress-bar w-[49%] bg-success h-full"></div>
                </div>,
            projectPriority: 'Low',
            dueDate: '20 Jan 2019',
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Project list" buttonContent={<IconPlus className='w-[18px] h-[18px] min-w-[18px]' />} buttonUrl="#" />
            <div className='react-data-table header-primary overflow-auto'>
                <ReactDataTable
                    columns={columnsInvoice}
                    data={dataInvoice}
                    pagination
                    className='min-w-[1000px]'
                />
            </div>
        </>
    )
}
