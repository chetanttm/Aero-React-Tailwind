import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'

export default function UiTypography() {

  const breadcrumbItem = [
    {
      name: "Components",
    },
    {
      name: "Typography",
    },
  ]

  return (
    <>
      <Breadcrumb title="Typography" breadcrumbItem={breadcrumbItem} />
      <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
        <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
          Heading
        </p>
        <h1 className='text-[40px]/[48px] font-medium mb-10'>
          Heading 1
        </h1>
        <h2 className='text-[32px]/[38.4px] font-medium mb-10'>
          Heading 2
        </h2>
        <h3 className='text-[28px]/[33.6px] font-medium mb-10'>
          Heading 3
        </h3>
        <h4 className='text-[24px]/[28.8px] font-medium mb-10'>
          Heading 4
        </h4>
        <h5 className='text-[20px]/[24px] font-medium mb-10'>
          Heading 5
        </h5>
        <h6 className='text-[16px]/[19.2px] font-medium'>
          Heading 6
        </h6>
      </div>

      <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
        <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
          Text Color
        </p>
        <p className='text-font-color mb-10 font-medium'>
          .text-font-color
        </p>
        <p className='text-font-color-100 mb-10 font-medium'>
          .text-font-color-100
        </p>
        <p className='text-primary mb-10 font-medium'>
          .text-primary
        </p>
        <p className='text-blue mb-10 font-medium'>
          .text-blue
        </p>
        <p className='text-success mb-10 font-medium'>
          .text-success
        </p>
        <p className='text-warning mb-10 font-medium'>
          .text-warning
        </p>
        <p className='text-danger font-medium'>
          .text-danger
        </p>
      </div>

      <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
        <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
          Text Alignment
        </p>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-30'>
          <div className='text-left'>
            <p className='font-medium pb-5 mb-5 border-b border-border'>
              .text-left
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='text-center'>
            <p className='font-medium pb-5 mb-5 border-b border-border'>
              .text-center
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='text-right'>
            <p className='font-medium pb-5 mb-5 border-b border-border'>
              .text-right
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='text-justify'>
            <p className='font-medium pb-5 mb-5 border-b border-border'>
              .text-justify
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <div className='card bg-card-color rounded-md md:p-20 p-15'>
        <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
          Other Style
        </p>
        <p className='font-medium line-through mb-10'>
          .line-through
        </p>
        <p className='font-medium capitalize mb-10'>
          .capitalize
        </p>
        <p className='font-medium lowercase mb-10'>
          .lowercase
        </p>
        <p className='font-medium uppercase mb-10'>
          .uppercase
        </p>
      </div>
    </>
  )
}
