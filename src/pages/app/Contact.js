import React from 'react'
import ReactDataTable from 'react-data-table-component';
import Breadcrumb from '../../components/common/Breadcrumb';
import { Link } from 'react-router-dom';
import {
    IconBrandWhatsapp,
    IconMapPinFilled,
    IconPencil,
    IconPlus,
    IconTrash,
} from '@tabler/icons-react'
import {
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar8,
    avatar9,
} from '../../assets/images'

export default function Contact() {

    const breadcrumbItem = [
        {
            name: "App",
        },
        {
            name: "Contact",
        },
    ]

    const columnsInvoice = [
        {
            name: '#',
            selector: row => <div className="form-check">
                <input type="checkbox" id='allInvoiceSelecr' className="form-check-input" />
            </div>,
            width: '64px',
        },
        {
            name: 'NAME',
            selector: row => row.name,
            cell: row => <div className='flex items-center gap-2'>
                <img src={row.userImage} alt='profile' width="36" height="36" className='w-[36px] h-[36px] min-w-[36px] rounded-md' />
                <div>
                    {row.name}
                </div>
            </div>,
            sortable: true,
        },
        {
            name: 'PHONE',
            selector: row => row.phone,
            cell: row => <div className='flex items-center gap-1'>
                <IconBrandWhatsapp className='w-[18px] h-[18px] min-w-[18px]' />
                <div>
                    {row.phone}
                </div>
            </div>,
            sortable: true,
        },
        {
            name: 'EMAIL',
            selector: row => row.email,
            cell: row => <Link to="#" className='text-sky'>{row.email}</Link>,
            sortable: true,
        },
        {
            name: 'ADDRESS',
            selector: row => row.address,
            cell: row => <div className='flex items-center gap-1'>
                <IconMapPinFilled className='w-[14px] h-[14px] min-w-[14px]' />
                <div>
                    {row.address}
                </div>
            </div>,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row =>
                <div className='flex gap-2'>
                    <button title='Edit' className='text-white bg-sky rounded-md p-5'>
                        <IconPencil className='w-[18px] h-[18px]' />
                    </button>
                    <button title='Delete' className='text-white bg-danger rounded-md p-5'>
                        <IconTrash className='w-[18px] h-[18px]' />
                    </button>
                </div>,
            width: '180px',
        },
    ];

    const dataInvoice = [
        {
            name: 'Andew Jon',
            userImage: avatar1,
            phone: '264-625-2583',
            email: 'johnsmith@gmail.com',
            address: '123 6th St. Melbourne, FL 32904',
        },
        {
            name: 'Orlando Lentz',
            userImage: avatar2,
            phone: '264-625-5689',
            email: 'hosseinshams@gmail.com',
            address: '44 Shirley Ave. West Chicago, IL 60185',
        },
        {
            name: 'Marshall Nichols',
            userImage: avatar3,
            phone: '264-625-9513',
            email: 'maryamamiri@gmail.com',
            address: '123 6th St. Melbourne, FL 32904',
        },
        {
            name: 'Nellie Maxwell',
            userImage: avatar4,
            phone: '264-625-1212',
            email: 'timhank@gmail.com',
            address: '70 Bowman St. South Windsor, CT 06074',
        },
        {
            name: 'Marshall Nichols',
            userImage: avatar5,
            phone: '264-625-2323',
            email: 'fideltonn@gmail.com',
            address: '514 S. Magnolia St. Orlando, FL 32806',
        },
        {
            name: 'Issa Bell',
            userImage: avatar6,
            phone: '264-625-1005',
            email: 'garycamara@gmail.com',
            address: '44 Shirley Ave. West Chicago, IL 60185',
        },
        {
            name: 'Dean Otto',
            userImage: avatar8,
            phone: '264-625-9999',
            email: 'frankcamly@gmail.com',
            address: '123 6th St. Melbourne, FL 32904',
        },
        {
            name: 'Comeren Diaz',
            userImage: avatar9,
            phone: '264-625-1212',
            email: 'timhank@gmail.com',
            address: '70 Bowman St. South Windsor, CT 06074',
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Contact" buttonContent={<IconPlus className='w-[18px] h-[18px] min-w-[18px]' />} buttonUrl="#" />
            <div className='react-data-table overflow-auto'>
                <ReactDataTable
                    columns={columnsInvoice}
                    data={dataInvoice}
                    className='min-w-[1000px]'
                />
            </div>
        </>
    )
}
