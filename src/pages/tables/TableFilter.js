import React, { useState } from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import {
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar6,
    avatar7,
    avatar8
} from '../../assets/images';

export default function TableFilter() {

    const breadcrumbItem = [
        {
            name: "Tables",
        },
        {
            name: "Table Filter",
        },
    ]

    const tableFilterItem = [
        {
            number: "1",
            image: avatar1,
            name: "Jacob",
            phone: "264-625-2583",
            email: "jacob@gnail.com",
            progress: "80%",
            status: "approved",
            statusColor: "success",
        },
        {
            number: "2",
            image: avatar2,
            name: "charlotte",
            phone: "264-625-2583",
            email: "a.charlotte@gnail.com",
            progress: "40%",
            status: "suspended",
            statusColor: "yellow",
        },
        {
            number: "3",
            image: avatar3,
            name: "grayson",
            phone: "264-625-2583",
            email: "grayson@yahoo.com",
            progress: "20%",
            status: "blocked",
            statusColor: "danger",
        },
        {
            number: "4",
            image: avatar4,
            name: "Jacob",
            phone: "264-625-2583",
            email: "jacob@gnail.com",
            progress: "80%",
            status: "approved",
            statusColor: "success",
        },
        {
            number: "5",
            image: avatar6,
            name: "amelia",
            phone: "264-625-2583",
            email: "amelia@gnail.com",
            progress: "80%",
            status: "approved",
            statusColor: "success",
        },
        {
            number: "6",
            image: avatar7,
            name: "michael",
            phone: "264-625-2583",
            email: "michael@gnail.com",
            progress: "40%",
            status: "pending",
            statusColor: "blue",
        },
        {
            number: "7",
            image: avatar8,
            name: "michael",
            phone: "264-625-2583",
            email: "michael@gnail.com",
            progress: "50%",
            status: "pending",
            statusColor: "blue",
        },
    ]

    const [filter, setFilter] = useState(null);

    const handleFilter = (value) => {
        setFilter(value);
    };

    const filteredData = filter ? tableFilterItem.filter(item => item.status === filter) : tableFilterItem;

    return (
        <>
            <Breadcrumb title="Table Filter" breadcrumbItem={breadcrumbItem} />
            <div className='flex flex-wrap gap-10 mb-30'>
                <button className='btn btn-primary' onClick={() => handleFilter(null)}>All</button>
                <button className='btn btn-success' onClick={() => handleFilter('approved')}>Approved</button>
                <button className='btn btn-yellow' onClick={() => handleFilter('suspended')}>Suspended</button>
                <button className='btn btn-blue' onClick={() => handleFilter('pending')}>Pending</button>
                <button className='btn btn-danger' onClick={() => handleFilter('blocked')}>Blocked</button>
            </div>
            <div className='card bg-card-color rounded-md md:p-20 p-15'>
                <div className='text-[16px]/[19.2px] font-medium mb-30'>
                    Table Filter
                </div>
                <div className='overflow-auto'>
                    <table className='w-full min-w-[767px]'>
                        <thead>
                            <tr>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    #
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Name
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Phone
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Email
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, key) => (
                                <tr key={key} className='hover:bg-body-color'>
                                    <td className='p-3 border-t border-border-color'>
                                        {item.number}
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        <div className='flex items-center gap-10'>
                                            <img src={item.image} alt='profile' width="40" height="40" className='w-[40px] h-[40px] border border-border-color shadow-shadow-normal object-cover rounded-full' />
                                            <p className='font-semibold'>
                                                {item.name}
                                            </p>
                                        </div>
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        {item.phone}
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        {item.email}
                                    </td>
                                    <td width={350} className='p-3 border-t border-border-color'>
                                        <div className={`flex items-center gap-30 text-${item.statusColor}`}>
                                            <div className='progress w-[200px] h-5 bg-border-color rounded-sm overflow-hidden'>
                                                <div className={`progress-bar w-[${item.progress}] h-full bg-current`}></div>
                                            </div>
                                            <span className='py-1 px-2 uppercase text-[10.5px]/[12px] border border-current text-current rounded'>
                                                {item.status}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </ >
    );
};
