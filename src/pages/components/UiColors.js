import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'

export default function UiColors() {

  const breadcrumbItem = [
    {
      name: "Components",
    },
    {
      name: "Colors",
    },
  ]

  return (
    <>
      <Breadcrumb title="Colors" breadcrumbItem={breadcrumbItem} />
      <div className='grid md:grid-cols-2 gap-30'>
        <div className='card bg-card-color rounded-md md:p-20 p-15'>
          <p className='text-[16px]/[20px] font-medium md:mb-30 mb-15'>
            Colors
          </p>
          <p className='md:p-10 py-5 px-10 text-font-color mb-10 font-medium'>
            .text-font-color
          </p>
          <p className='md:p-10 py-5 px-10 text-font-color-100 mb-10 font-medium'>
            .text-font-color-100
          </p>
          <p className='md:p-10 py-5 px-10 text-primary mb-10 font-medium'>
            .text-primary
          </p>
          <p className='md:p-10 py-5 px-10 text-blue mb-10 font-medium'>
            .text-blue
          </p>
          <p className='md:p-10 py-5 px-10 text-success mb-10 font-medium'>
            .text-success
          </p>
          <p className='md:p-10 py-5 px-10 text-warning mb-10 font-medium'>
            .text-warning
          </p>
          <p className='md:p-10 py-5 px-10 text-danger mb-10 font-medium'>
            .text-danger
          </p>
          <p className='md:p-10 py-5 px-10 text-info mb-10 font-medium'>
            .text-info
          </p>
          <p className='md:p-10 py-5 px-10 text-yellow mb-10 font-medium'>
            .text-yellow
          </p>
          <p className='md:p-10 py-5 px-10 text-pink mb-10 font-medium'>
            .text-pink
          </p>
          <p className='md:p-10 py-5 px-10 text-sky mb-10 font-medium'>
            .text-sky
          </p>
          <p className='md:p-10 py-5 px-10 text-purple mb-10 font-medium'>
            .text-purple
          </p>
          <p className='md:p-10 py-5 px-10 text-black-100 mb-10 font-medium'>
            .text-black-100
          </p>
          <p className='md:p-10 py-5 px-10 text-black mb-10 font-medium bg-white'>
            .text-black
          </p>
          <p className='md:p-10 py-5 px-10 text-white mb-10 font-medium bg-black'>
            .text-white
          </p>
          <p className='md:p-10 py-5 px-10 border border-border-color text-border-color font-medium'>
            .border-border-color
          </p>
        </div>
        <div className='card bg-card-color rounded-md md:p-20 p-15'>
          <p className='text-[16px]/[20px] font-medium md:mb-30 mb-15'>
            Background Colors
          </p>
          <p className='md:p-10 py-5 px-10 bg-font-color mb-10 font-medium text-font-color-100'>
            .bg-font-color
          </p>
          <p className='md:p-10 py-5 px-10 bg-font-color-100 mb-10 font-medium'>
            .bg-font-color-100
          </p>
          <p className='md:p-10 py-5 px-10 bg-primary mb-10 font-medium'>
            .bg-primary
          </p>
          <p className='md:p-10 py-5 px-10 bg-blue mb-10 font-medium'>
            .bg-blue
          </p>
          <p className='md:p-10 py-5 px-10 bg-success mb-10 font-medium'>
            .bg-success
          </p>
          <p className='md:p-10 py-5 px-10 bg-warning mb-10 font-medium'>
            .bg-warning
          </p>
          <p className='md:p-10 py-5 px-10 bg-danger mb-10 font-medium'>
            .bg-danger
          </p>
          <p className='md:p-10 py-5 px-10 bg-info mb-10 font-medium'>
            .bg-info
          </p>
          <p className='md:p-10 py-5 px-10 bg-yellow mb-10 font-medium'>
            .bg-yellow
          </p>
          <p className='md:p-10 py-5 px-10 bg-pink mb-10 font-medium'>
            .bg-pink
          </p>
          <p className='md:p-10 py-5 px-10 bg-sky mb-10 font-medium'>
            .bg-sky
          </p>
          <p className='md:p-10 py-5 px-10 bg-purple mb-10 font-medium'>
            .bg-purple
          </p>
          <p className='md:p-10 py-5 px-10 bg-black-100 mb-10 font-medium'>
            .bg-black-100
          </p>
          <p className='md:p-10 py-5 px-10 bg-black mb-10 font-medium text-font-color-100'>
            .bg-black
          </p>
          <p className='md:p-10 py-5 px-10 bg-white mb-10 font-medium'>
            .bg-white
          </p>
          <p className='md:p-10 py-5 px-10 bg-border-color font-medium'>
            .bg-border-color
          </p>
        </div>
      </div>
    </>
  )
}
