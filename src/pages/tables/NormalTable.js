import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'

export default function NormalTable() {

    const breadcrumbItem = [
        {
            name: "Tables",
        },
        {
            name: "Normal Tables",
        },
    ]

    return (
        <>
            <Breadcrumb title="Normal Tables" breadcrumbItem={breadcrumbItem} />
            <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
                <div className='mb-30'>
                    <p className='text-[16px]/[19.2px] font-medium'>
                        Basic Table
                    </p>
                    <p className='text-[12px] text-font-color-100'>
                        Basic example without any additional modification classes
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
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    4
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Larry
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Jellybean
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    @lajelly
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    5
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Larry
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Kikat
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    @lakitkat
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
                <div className='mb-30'>
                    <p className='text-[16px]/[19.2px] font-medium'>
                        Striped Rows
                    </p>
                    <p className='text-[12px] text-font-color-100'>
                        Add <span className='text-danger'>.table-striped</span> to add zebra-striping to any table row within the <span className='text-danger'>{'<table>'}</span> tag
                    </p>
                </div>
                <div className='overflow-auto'>
                    <table className='w-full min-w-[767px] table-striped'>
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
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    4
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Larry
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Jellybean
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    @lajelly
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    5
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Larry
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Kikat
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    @lakitkat
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
                <div className='mb-30'>
                    <p className='text-[16px]/[19.2px] font-medium'>
                        Bordered Table
                    </p>
                    <p className='text-[12px] text-font-color-100'>
                        Add <span className='text-danger'>.table-bordered</span> for borders on all sides of the table and cells within the <span className='text-danger'>{'<table>'}</span> tag
                    </p>
                </div>
                <div className='overflow-auto'>
                    <table className='w-full min-w-[767px] table-bordered'>
                        <thead>
                            <tr>
                                <th align='left' className='p-3'>
                                    #
                                </th>
                                <th align='left' className='p-3'>
                                    FIRST NAME
                                </th>
                                <th align='left' className='p-3'>
                                    LAST NAME
                                </th>
                                <th align='left' className='p-3'>
                                    USERNAME
                                </th>
                            </tr>
                        </thead>
                        <tbody className='table-striped'>
                            <tr>
                                <td className='p-3'>
                                    1
                                </td>
                                <td className='p-3'>
                                    Mark
                                </td>
                                <td className='p-3'>
                                    Otto
                                </td>
                                <td className='p-3'>
                                    @mdo
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3'>
                                    2
                                </td>
                                <td className='p-3'>
                                    Jacob
                                </td>
                                <td className='p-3'>
                                    Thornton
                                </td>
                                <td className='p-3'>
                                    @fat
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3'>
                                    3
                                </td>
                                <td className='p-3'>
                                    Larry
                                </td>
                                <td className='p-3'>
                                    The Bird
                                </td>
                                <td className='p-3'>
                                    @twitter
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3'>
                                    4
                                </td>
                                <td className='p-3'>
                                    Larry
                                </td>
                                <td className='p-3'>
                                    Jellybean
                                </td>
                                <td className='p-3'>
                                    @lajelly
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3'>
                                    5
                                </td>
                                <td className='p-3'>
                                    Larry
                                </td>
                                <td className='p-3'>
                                    Kikat
                                </td>
                                <td className='p-3'>
                                    @lakitkat
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
                <div className='mb-30'>
                    <p className='text-[16px]/[19.2px] font-medium'>
                        Hover Rows
                    </p>
                    <p className='text-[12px] text-font-color-100'>
                        Add <span className='text-danger'>.table-hover </span> to enable a hover state on table rows within the <span className='text-danger'>{'<table>'}</span> tag
                    </p>
                </div>
                <div className='overflow-auto'>
                    <table className='w-full min-w-[767px] table-hover'>
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
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    4
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Larry
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Jellybean
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    @lajelly
                                </td>
                            </tr>
                            <tr>
                                <td className='p-3 border-t border-border-color'>
                                    5
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Larry
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    Kikat
                                </td>
                                <td className='p-3 border-t border-border-color'>
                                    @lakitkat
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
