import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'

export default function TableColor() {

    const breadcrumbItem = [
        {
            name: "Tables",
        },
        {
            name: "Table Color",
        },
    ]

    return (
        <>
            <Breadcrumb title="Table Color" breadcrumbItem={breadcrumbItem} />
            <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
                <div className='mb-30'>
                    <p className='text-[16px]/[19.2px] font-medium'>
                        Table Dark
                    </p>
                </div>
                <div className='overflow-auto'>
                    <table className='w-full min-w-[767px] bg-black-200 text-white'>
                        <thead>
                            <tr>
                                <th align='left' className='border-t border-b-2 border-white-10 p-3'>
                                    #
                                </th>
                                <th align='left' className='border-t border-b-2 border-white-10 p-3'>
                                    FIRST NAME
                                </th>
                                <th align='left' className='border-t border-b-2 border-white-10 p-3'>
                                    LAST NAME
                                </th>
                                <th align='left' className='border-t border-b-2 border-white-10 p-3'>
                                    USERNAME
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='odd:bg-white-10'>
                                <td className='p-3 border-t border-white-10'>
                                    1
                                </td>
                                <td className='p-3 border-t border-white-10'>
                                    Mark
                                </td>
                                <td className='p-3 border-t border-white-10'>
                                    Otto
                                </td>
                                <td className='p-3 border-t border-white-10'>
                                    @mdo
                                </td>
                            </tr>
                            <tr className='odd:bg-white-10'>
                                <td className='p-3 border-t border-white-10'>
                                    2
                                </td>
                                <td className='p-3 border-t border-white-10'>
                                    Jacob
                                </td>
                                <td className='p-3 border-t border-white-10'>
                                    Thornton
                                </td>
                                <td className='p-3 border-t border-white-10'>
                                    @fat
                                </td>
                            </tr>
                            <tr className='odd:bg-white-10'>
                                <td className='p-3 border-t border-white-10'>
                                    3
                                </td>
                                <td className='p-3 border-t border-white-10'>
                                    Larry
                                </td>
                                <td className='p-3 border-t border-white-10'>
                                    The Bird
                                </td>
                                <td className='p-3 border-t border-white-10'>
                                    @twitter
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-30 mb-30'>
                <div className='card bg-card-color rounded-md md:p-20 p-15'>
                    <div className='mb-30'>
                        <p className='text-[16px]/[19.2px] font-medium'>
                            Table Head Dark
                        </p>
                    </div>
                    <div className='overflow-auto'>
                        <table className='w-full min-w-[549px]'>
                            <thead className='bg-black-200 text-white'>
                                <tr>
                                    <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                        #
                                    </th>
                                    <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                        FIRST NAME
                                    </th>
                                    <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                        LAST NAME
                                    </th>
                                    <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                        USERNAME
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='p-3 border-t border-border-color'>
                                        1
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        Mark
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        Otto
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        @mdo
                                    </td>
                                </tr>
                                <tr>
                                    <td className='p-3 border-t border-border-color'>
                                        2
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        Jacob
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        Thornton
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        @fat
                                    </td>
                                </tr>
                                <tr>
                                    <td className='p-3 border-t border-border-color'>
                                        3
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        Larry
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        The Bird
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        @twitter
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='card bg-card-color rounded-md md:p-20 p-15'>
                    <div className='mb-30'>
                        <p className='text-[16px]/[19.2px] font-medium'>
                            Table Head Dark
                        </p>
                    </div>
                    <div className='overflow-auto'>
                        <table className='w-full min-w-[549px]'>
                            <thead className='bg-bg-light-100'>
                                <tr>
                                    <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                        #
                                    </th>
                                    <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                        FIRST NAME
                                    </th>
                                    <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                        LAST NAME
                                    </th>
                                    <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                        USERNAME
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='p-3 border-t border-border-color'>
                                        1
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        Mark
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        Otto
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        @mdo
                                    </td>
                                </tr>
                                <tr>
                                    <td className='p-3 border-t border-border-color'>
                                        2
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        Jacob
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        Thornton
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        @fat
                                    </td>
                                </tr>
                                <tr>
                                    <td className='p-3 border-t border-border-color'>
                                        3
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        Larry
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        The Bird
                                    </td>
                                    <td className='p-3 border-t border-border-color'>
                                        @twitter
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
                <div className='mb-30'>
                    <p className='text-[16px]/[19.2px] font-medium'>
                        Gradient Color Background
                    </p>
                </div>
                <div className='overflow-auto'>
                    <table className='w-full min-w-[767px]'>
                        <thead>
                            <tr>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    #
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    FIRST NAME
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    LAST NAME
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    USERNAME
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-gradient-to-r from-rose-400 to-rose-300'>
                                <td className='p-3 border-t border-border-color'>
                                    1
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Mark
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Otto
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    @mdo
                                </td>
                            </tr>
                            <tr className='bg-gradient-to-r from-amber-400 to-amber-300'>
                                <td className='p-3 border-t border-border-color'>
                                    2
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Jacob
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Thornton
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    @fat
                                </td>
                            </tr>
                            <tr className='bg-gradient-to-r from-emerald-400 to-emerald-300'>
                                <td className='p-3 border-t border-border-color'>
                                    3
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Larry
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    The Bird
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    @twitter
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
