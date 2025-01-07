import React, { useState } from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'

export default function EditableTable() {

    const breadcrumbItem = [
        {
            name: "Tables",
        },
        {
            name: "Editable Tables",
        },
    ]

    const TableRowItem = [
        {
            children: [
                {
                    value: "Car",
                },
                {
                    value: "100",
                },
                {
                    value: "200",
                },
                {
                    value: "0",
                },
            ],
        },
        {
            children: [
                {
                    value: "Bike",
                },
                {
                    value: "330",
                },
                {
                    value: "240",
                },
                {
                    value: "1",
                },
            ],
        },
        {
            children: [
                {
                    value: "Plane",
                },
                {
                    value: "430",
                },
                {
                    value: "540",
                },
                {
                    value: "3",
                },
            ],
        },
        {
            children: [
                {
                    value: "Yacht",
                },
                {
                    value: "100",
                },
                {
                    value: "200",
                },
                {
                    value: "0",
                },
            ],
        },
        {
            children: [
                {
                    value: "Segway",
                },
                {
                    value: "330",
                },
                {
                    value: "240",
                },
                {
                    value: "1",
                },
            ],
        },
    ]

    const [editableTableRow, setEditableTableRow] = useState(TableRowItem);

    return (
        <>
            <Breadcrumb title="Editable Tables" breadcrumbItem={breadcrumbItem} />
            <div className='card bg-card-color rounded-md md:p-20 p-15'>
                <div className='mb-30'>
                    <p className='text-[16px]/[19.2px] font-medium'>
                        Editable Table
                    </p>
                    <p className='text-[12px] text-font-color-100'>
                        You can edit any columns except header/footer
                    </p>
                </div>
                <div className='overflow-auto'>
                    <table className='w-full min-w-[767px]'>
                        <thead>
                            <tr>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Name
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Cost
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Profit
                                </th>
                                <th align='left' className='border-t border-b-2 border-border-color p-3'>
                                    Fun
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {editableTableRow.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.children.map((cell, colIndex) => (
                                        <td key={colIndex} className='border-t border-border-color'>
                                            <input
                                                className='p-3 w-full bg-card-color focus:outline-none focus:bg-body-color'
                                                type="text"
                                                value={cell.value}
                                                onChange={(event) => {
                                                    const newValue = event.target.value;
                                                    const newRows = [...editableTableRow];
                                                    newRows[rowIndex].children[colIndex].value = newValue;
                                                    setEditableTableRow(newRows);
                                                }}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
