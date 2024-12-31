import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'

export default function UiProgressbars() {

  const breadcrumbItem = [
    {
      name: "Components",
    },
    {
      name: "Progress Bars",
    },
  ]

  return (
    <>
      <Breadcrumb title="Progress Bars" breadcrumbItem={breadcrumbItem} />
      <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
        <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
          Default Progress Bars
        </p>
        <div className='flex flex-col gap-20'>
          <div className='progress h-20 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[80%] h-full bg-primary text-[12px]/[20px] text-black font-medium px-5 text-center"></div>
          </div>
          <div className='progress h-20 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[35%] h-full bg-blue text-[12px]/[20px] text-black font-medium px-5 text-center"></div>
          </div>
          <div className='progress h-20 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[65%] h-full bg-warning text-[12px]/[20px] text-black font-medium px-5 text-center"></div>
          </div>
          <div className='progress h-20 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[20%] h-full bg-danger text-[12px]/[20px] text-black font-medium px-5 text-center"></div>
          </div>
          <hr />
          <p className='text-[16px]/[20px] font-medium'>
            Sizes
          </p>
          <div className='progress h-5 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[80%] h-full bg-primary text-[12px]/[20px] text-black font-medium px-5 text-center"></div>
          </div>
          <div className='progress h-10 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[35%] h-full bg-blue text-[12px]/[20px] text-black font-medium px-5 text-center"></div>
          </div>
          <div className='progress h-20 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[65%] h-full bg-warning text-[12px]/[20px] text-black font-medium px-5 text-center"></div>
          </div>
          <div className='progress h-30 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[20%] h-full bg-danger text-[12px]/[20px] text-black font-medium px-5 text-center"></div>
          </div>
        </div>
      </div>
      <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
        <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
          Other Styles
        </p>
        <div className='flex flex-col gap-20'>
          <div className='progress h-20 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[27%] h-full bg-primary text-[12px]/[20px] text-black font-medium px-5 text-center">27%</div>
          </div>
          <div className='progress h-20 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[41%] h-full bg-blue text-[12px]/[20px] text-white font-medium px-5 text-center">41/100</div>
          </div>
          <div className='progress h-20 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[77%] h-full bg-warning text-[12px]/[20px] text-black font-medium px-5 text-center">77 of 100</div>
          </div>
          <div className='progress-striped h-20 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[40%] h-full bg-danger text-[12px]/[20px] text-black font-medium px-5 text-center"></div>
          </div>
          <div className='progress-striped active h-20 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[55%] h-full bg-success text-[12px]/[20px] text-black font-medium px-5 text-center">55%</div>
          </div>
        </div>
      </div>
      <div className='card bg-card-color rounded-md md:p-20 p-15'>
        <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
          Gredients Progress Bars
        </p>
        <div className='flex flex-col gap-20'>
          <div className='progress h-20 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[20%] h-full bg-gradient-to-r from-black to-black-100 text-[12px]/[20px] text-white font-medium px-5 text-center">20%</div>
          </div>
          <div className='progress h-20 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[40%] h-full bg-gradient-to-r from-purple to-purple-50 text-[12px]/[20px] text-white font-medium px-5 text-center">40%</div>
          </div>
          <div className='progress h-20 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[60%] h-full bg-gradient-to-r from-blue to-sky text-[12px]/[20px] text-white font-medium px-5 text-center">60%</div>
          </div>
          <div className='progress h-20 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[80%] h-full bg-gradient-to-r from-fuchsia-400 to-fuchsia-200 text-[12px]/[20px] text-black font-medium px-5 text-center">80%</div>
          </div>
          <div className='progress h-20 bg-border-color rounded-sm overflow-hidden'>
            <div className="progress-bar w-[100%] h-full bg-gradient-to-r from-amber-400 to-amber-200 text-[12px]/[20px] text-black font-medium px-5 text-center">100%</div>
          </div>
        </div>
      </div>
    </>
  )
}
