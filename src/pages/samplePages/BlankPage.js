import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import { IconDots, IconX } from '@tabler/icons-react'

export default function BlankPage() {

    const breadcrumbItem = [
        {
            name: "Pages",
        },
        {
            name: "Stater Page",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Stater Page" />
            <div>
                <div className='flex items-center justify-between gap-2 mb-10'>
                    <h2 className='flex items-center gap-5 uppercase'>
                        <strong className='text-primary flex items-center'>
                            Stater
                        </strong>
                        page
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
                    <h5 className='text-[20px]/[26px] font-medium mb-4'>Stater page</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </>
    )
}
