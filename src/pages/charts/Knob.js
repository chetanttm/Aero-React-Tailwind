import React, { useState } from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import { Basic, Donut, HighContrast, Silver } from 'react-dial-knob'

export default function Knob() {

    const breadcrumbItem = [
        {
            name: "Charts",
        },
        {
            name: "Knob",
        },
    ]

    const [basicKnob, setBasicKnob] = useState(10)
    const [silverKnob, setSilverKnob] = useState(20)
    const [donutKnob, setDonutKnob] = useState(30)
    const [contrastKnob, setContrastKnob] = useState(40)

    return (
        <>
            <Breadcrumb title="Knob" breadcrumbItem={breadcrumbItem} />
            <div className='grid xxl:grid-cols-4 sm:grid-cols-2 gap-30'>
                <div className='card bg-card-color rounded-md'>
                    <p className='text-[16px]/[19.2px] font-medium md:p-20 p-15 border-b border-border-color'>
                        Basic Knob
                    </p>
                    <div className='md:p-20 p-15 flex justify-center'>
                        <Basic
                            diameter={200}
                            min={0}
                            max={100}
                            step={1}
                            value={basicKnob}
                            theme={{
                                defaultColor: '#333',
                                activeColor: '#f33'
                            }}
                            knobStyle={{ lineHeight: 'normal' }}
                            onValueChange={setBasicKnob}
                        >
                        </Basic>
                    </div>
                </div>
                <div className='card bg-card-color rounded-md'>
                    <p className='text-[16px]/[19.2px] font-medium md:p-20 p-15 border-b border-border-color'>
                        Silver Knob
                    </p>
                    <div className='md:p-20 p-15 flex justify-center'>
                        <Silver
                            diameter={180}
                            min={0}
                            max={100}
                            step={1}
                            value={silverKnob}
                            knobStyle={{ lineHeight: 'normal' }}
                            onValueChange={setSilverKnob}
                        >
                        </Silver>
                    </div>
                </div>
                <div className='card bg-card-color rounded-md'>
                    <p className='text-[16px]/[19.2px] font-medium md:p-20 p-15 border-b border-border-color'>
                        Donut Knob
                    </p>
                    <div className='md:p-20 p-15 flex justify-center'>
                        <Donut
                            diameter={200}
                            min={0}
                            max={100}
                            step={1}
                            value={donutKnob}
                            theme={{
                                donutColor: 'var(--primary)',
                                bgrColor: 'var(--border-color)',
                                centerColor: 'var(--card-color)',
                                centerFocusedColor: 'var(--card-color)',
                            }}
                            knobStyle={{ lineHeight: 'normal' }}
                            onValueChange={setDonutKnob}
                        >
                        </Donut>
                    </div>
                </div>
                <div className='card bg-card-color rounded-md'>
                    <p className='text-[16px]/[19.2px] font-medium md:p-20 p-15 border-b border-border-color'>
                        Contarst Knob
                    </p>
                    <div className='md:p-20 p-15 flex justify-center'>
                        <HighContrast
                            diameter={200}
                            min={0}
                            max={100}
                            step={1}
                            value={contrastKnob}
                            theme={{
                                defaultColor: 'var(--black-200)',
                                activeColor: 'var(--font-color-100)',
                            }}
                            knobStyle={{ lineHeight: 'normal' }}
                            onValueChange={setContrastKnob}
                        >
                        </HighContrast>
                    </div>
                </div>
            </div>
        </>
    )
}
