import React from 'react'
import { VectorMap } from '@react-jvectormap/core'
import { worldMill } from '@react-jvectormap/world'
import { inMill } from '@react-jvectormap/india'
import { usMill } from '@react-jvectormap/unitedstates'
import { ukCountriesMill } from '@react-jvectormap/unitedkingdomcountries'
import { auMill } from '@react-jvectormap/australia'
import Breadcrumb from '../../components/common/Breadcrumb'
import { IconDots, IconX } from '@tabler/icons-react'

export default function JvectorMap() {

    const breadcrumbItem = [
        {
            name: "Maps",
        },
        {
            name: "Jvector Map",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Jvector Map" />
            <div className='mb-4'>
                <div className='flex items-center justify-between gap-2 mb-10'>
                    <h2 className='flex items-center gap-5 uppercase'>
                        <strong className='text-primary flex items-center'>
                            World
                        </strong>
                        Map
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
                <div className='card bg-card-color md:p-20 p-15 rounded-md sm:h-[410px] h-[250px]'>
                    <VectorMap
                        map={worldMill}
                        backgroundColor='var(--card-color)'
                        regionStyle={{
                            initial: {
                                fill: "var(--font-color-200)"
                            },
                            hover: {
                                fill: "var(--primary)"
                            },
                        }}
                        series={{
                            regions: [{
                                attribute: 'fill',
                                values: {
                                    'IN': 'var(--danger)',
                                    'AU': 'var(--success)',
                                    'US': 'var(--sky)',
                                    'GB': 'var(--warning)',
                                    'SA': 'var(--info)',
                                }
                            }]
                        }}
                    />
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-4'>
                <div>
                    <div className='flex items-center justify-between gap-2 mb-10'>
                        <h2 className='flex items-center gap-5 uppercase'>
                            <strong className='text-primary flex items-center'>
                                India
                            </strong>
                            Map
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
                    <div className='card bg-card-color md:p-20 p-15 rounded-md sm:h-[410px] h-[250px]'>
                        <VectorMap
                            map={inMill}
                            backgroundColor='var(--bg-dark)'
                            regionStyle={{
                                initial: {
                                    fill: "var(--danger)"
                                },
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between gap-2 mb-10'>
                        <h2 className='flex items-center gap-5 uppercase'>
                            <strong className='text-primary flex items-center'>
                                India
                            </strong>
                            Map
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
                    <div className='card bg-card-color md:p-20 p-15 rounded-md sm:h-[410px] h-[250px]'>
                        <VectorMap
                            map={usMill}
                            backgroundColor='var(--bg-dark)'
                            regionStyle={{
                                initial: {
                                    fill: "var(--sky)"
                                },
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between gap-2 mb-10'>
                        <h2 className='flex items-center gap-5 uppercase'>
                            <strong className='text-primary flex items-center'>
                                India
                            </strong>
                            Map
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
                    <div className='card bg-card-color md:p-20 p-15 rounded-md sm:h-[410px] h-[250px]'>
                        <VectorMap
                            map={ukCountriesMill}
                            backgroundColor='var(--bg-dark)'
                            regionStyle={{
                                initial: {
                                    fill: "var(--warning)"
                                },
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between gap-2 mb-10'>
                        <h2 className='flex items-center gap-5 uppercase'>
                            <strong className='text-primary flex items-center'>
                                India
                            </strong>
                            Map
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
                    <div className='card bg-card-color md:p-20 p-15 rounded-md sm:h-[410px] h-[250px]'>
                        <VectorMap map={auMill}
                            backgroundColor='var(--bg-dark)'
                            regionStyle={{
                                initial: {
                                    fill: "var(--success)"
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
