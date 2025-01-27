import React from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import { IconDots, IconX } from '@tabler/icons-react';

export default function YandexMap() {

    const breadcrumbItem = [
        {
            name: "Maps",
        },
        {
            name: "Yandex Map",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Yandex Map" />
            <div className='mb-4'>
                <div className='flex items-center justify-between gap-2 mb-10'>
                    <h2 className='flex items-center gap-5 uppercase'>
                        <strong className='text-primary flex items-center'>
                            Basic
                        </strong>
                        Example
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
                    <YMaps query={{ lang: 'en_US' }}>
                        <Map
                            className="w-full sm:h-[500px] h-[250px]"
                            defaultState={{ center: [55.75, 37.57], zoom: 2 }}
                        />
                    </YMaps>
                </div>
            </div>
            {/* <div className='bg-bg-dark rounded-lg shadow-light md:p-20 p-15 mb-30'>
                <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
                    Markers
                </p>
                <YMaps query={{ lang: 'en_US' }}>
                    <Map
                        className="w-full sm:h-[500px] h-[250px]"
                        defaultState={{ center: [55.75, 37.57], zoom: 5 }}
                    >
                        <Placemark geometry={[55.751574, 37.573856]} />
                        <Placemark geometry={[58, 37.573856]} />
                        <Placemark geometry={[52.751574, 40]} />
                        <Placemark geometry={[53, 35]} />
                        <Placemark geometry={[51, 30]} />
                        <Placemark geometry={[55, 45]} />
                        <Placemark geometry={[55, 35]} />
                    </Map>
                </YMaps>
            </div> */}
            {/* <div className='bg-bg-dark rounded-lg shadow-light md:p-20 p-15 mb-30'>
                <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
                    Polygon
                </p>
                <YMaps query={{ lang: 'en_US' }}>
                    <Map
                        className="w-full sm:h-[500px] h-[250px]"
                        defaultState={{ center: [55.75, 37.57], zoom: 5 }}
                    >
                        <Polyline
                            geometry={[
                                [58, 37.573856],
                                [55, 45],
                                [52.751574, 40],
                                [53, 35],
                                [55, 35],
                                [58, 37.573856],
                            ]}
                            options={{
                                strokeColor: "#000",
                                strokeWidth: 4,
                                strokeOpacity: 0.5,
                            }}
                        />
                    </Map>
                </YMaps>
            </div> */}
        </>
    );
}
