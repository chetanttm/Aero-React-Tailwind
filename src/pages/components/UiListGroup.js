import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'

export default function UiListGroup() {

  const breadcrumbItem = [
    {
      name: "Components",
    },
    {
      name: "List Group",
    },
  ]

  return (
    <>
      <Breadcrumb title="List Group" breadcrumbItem={breadcrumbItem} />
      <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
        <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
          Basic List Group
        </p>
        <ul className='list-group'>
          <li>
            Cras justo odio
          </li>
          <li>
            Dapibus ac facilisis in
          </li>
          <li>
            Morbi leo risus
          </li>
          <li>
            Porta ac consectetur ac
          </li>
          <li>
            Vestibulum at eros
          </li>
        </ul>
      </div>
      <div className='grid lg:grid-cols-2 lg:gap-30'>
        <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
          <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
            Active List Item
          </p>
          <ul className='list-group'>
            <li className='active'>
              Cras justo odio
            </li>
            <li>
              Dapibus ac facilisis in
            </li>
            <li>
              Morbi leo risus
            </li>
            <li>
              Porta ac consectetur ac
            </li>
            <li>
              Vestibulum at eros
            </li>
          </ul>
        </div>
        <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
          <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
            Disabled List Item
          </p>
          <ul className='list-group'>
            <li className='disabled'>
              Cras justo odio
            </li>
            <li>
              Dapibus ac facilisis in
            </li>
            <li>
              Morbi leo risus
            </li>
            <li>
              Porta ac consectetur ac
            </li>
            <li>
              Vestibulum at eros
            </li>
          </ul>
        </div>
      </div>
      <div className='card bg-card-color rounded-md md:p-20 p-15'>
        <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
          Custom List Group
        </p>
        <ul className='list-group'>
          <li className='active'>
            <div className="flex justify-between gap-10 mb-10 bg-primary text-white">
              <h5 className="text-[20px]/[24px] font-medium">List group item heading</h5>
              <small className='min-w-fit'>3 days ago</small>
            </div>
            <p className='mb-5'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </li>
          <li className='transition-all duration-300 hover:bg-body-color'>
            <div className="flex justify-between gap-10 mb-10">
              <h5 className="text-[20px]/[24px] font-medium">List group item heading</h5>
              <small className='min-w-fit'>3 days ago</small>
            </div>
            <p className='mb-5'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </li>
          <li className='transition-all duration-300 hover:bg-body-color'>
            <div className="flex justify-between gap-10 mb-10">
              <h5 className="text-[20px]/[24px] font-medium">List group item heading</h5>
              <small className='min-w-fit'>3 days ago</small>
            </div>
            <p className='mb-5'>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </li>
        </ul>
      </div>
    </>
  )
}
