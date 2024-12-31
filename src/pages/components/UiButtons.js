import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import {
  IconSend,
  IconCircleCheckFilled,
  IconAlertTriangleFilled,
  IconTrash,
  IconInfoCircleFilled,
  IconLoader3,
  IconBell,
} from '@tabler/icons-react'

export default function UiButtons() {

  const breadcrumbItem = [
    {
      name: "Components",
    },
    {
      name: "Tabs",
    },
  ]

  return (
    <>
      <Breadcrumb title="Buttons" breadcrumbItem={breadcrumbItem} />
      <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
        <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
          Buttons
        </p>
        <div className='flex flex-wrap gap-10'>
          <button className='btn btn-primary'>
            Primary
          </button>
          <button className='btn btn-secondary'>
            Secondary
          </button>
          <button className='btn btn-blue'>
            Blue
          </button>
          <button className='btn btn-success'>
            Success
          </button>
          <button className='btn btn-danger'>
            Danger
          </button>
          <button className='btn btn-warning'>
            Warning
          </button>
          <button className='btn btn-sky'>
            Sky
          </button>
          <button className='btn btn-white'>
            White
          </button>
          <button className='btn btn-black'>
            Black
          </button>
          <button className='btn btn-black' disabled>
            Disabled
          </button>
        </div>
      </div>
      <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
        <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
          Outline Buttons
        </p>
        <div className='flex flex-wrap gap-10'>
          <button className='btn btn-outline-primary'>
            Primary
          </button>
          <button className='btn btn-outline-secondary'>
            Secondary
          </button>
          <button className='btn btn-outline-blue'>
            Blue
          </button>
          <button className='btn btn-outline-success'>
            Success
          </button>
          <button className='btn btn-outline-danger'>
            Danger
          </button>
          <button className='btn btn-outline-warning'>
            Warning
          </button>
          <button className='btn btn-outline-sky'>
            Sky
          </button>
          <button className='btn btn-outline-white'>
            White
          </button>
          <button className='btn btn-outline-black'>
            Black
          </button>
        </div>
      </div>
      <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
        <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
          Button Group
        </p>
        <div className='pb-20 mb-20 border-b border-border'>
          <div className='btn-group'>
            <button className='btn btn-outline-secondary'>
              Left
            </button>
            <button className='btn btn-outline-secondary'>
              Middle
            </button>
            <button className='btn btn-outline-secondary'>
              Right
            </button>
          </div>
        </div>
        <div className='pb-20 mb-20 border-b border-border flex flex-wrap gap-10'>
          <div className='btn-group'>
            <button className='btn btn-outline-secondary'>
              1
            </button>
            <button className='btn btn-outline-secondary'>
              2
            </button>
            <button className='btn btn-outline-secondary'>
              3
            </button>
            <button className='btn btn-outline-secondary'>
              4
            </button>
          </div>
          <div className='btn-group'>
            <button className='btn btn-outline-secondary'>
              5
            </button>
            <button className='btn btn-outline-secondary'>
              6
            </button>
            <button className='btn btn-outline-secondary'>
              7
            </button>
          </div>
          <div className='btn-group'>
            <button className='btn btn-outline-secondary'>
              8
            </button>
          </div>
        </div>
        <div className='relative w-full overflow-hidden'>
          <button aria-label="search icon" className="absolute top-[50%] translate-y-[-50%] border-r border-r-border left-[1px] py-[6px] px-[12px] min-h-[33px] bg-bg-light rounded-l-[3px]">
            <IconSend className="text-text-primary w-[20px] h-[20px] stroke-[1.5]" />
          </button>
          <input type='text' id='chatInput' name='chatInput' placeholder='Enter text here...' className='bg-bg-dark border border-border w-full py-[6px] pr-[12px] pl-60  min-h-[35px] rounded-[4px] placeholder:text-text-secondary focus:outline-none' />
        </div>
      </div>
      <div className='card bg-card-color rounded-md md:p-20 p-15'>
        <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
          Button With Icon
        </p>
        <div className='flex flex-wrap gap-10 items-center'>
          <button className='btn btn-success'>
            <IconCircleCheckFilled className='w-[20px] h-[20px]' />
            Success
          </button>
          <button className='btn btn-warning'>
            <IconAlertTriangleFilled className='w-[20px] h-[20px]' />
            Warning
          </button>
          <button className='btn btn-danger'>
            <IconTrash className='w-[20px] h-[20px]' />
            Delete
          </button>
          <button className='btn btn-sky'>
            <IconInfoCircleFilled className='w-[20px] h-[20px]' />
            Info
          </button>
          <button className='btn btn-blue' disabled>
            <IconLoader3 className='w-[20px] h-[20px] animate-spin' />
            Loading
          </button>
          <button className='bg-border-color rounded-full w-[36px] h-[36px] flex items-center justify-center relative'>
            <IconBell className="stroke-[1.5] text-text-primary" />
            <span className="flex absolute w-[14px] h-[14px] -top-[2px] -right-[2px] border-2 border-border-color rounded-full">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-font-color opacity-75"></span>
              <span className="relative inline-flex rounded-full w-10 h-10 bg-font-color"></span>
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
