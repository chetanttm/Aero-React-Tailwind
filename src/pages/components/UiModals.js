import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'

export default function UiModals() {

  const breadcrumbItem = [
    {
      name: "Components",
    },
    {
      name: "Modals",
    },
  ]

  const [defaultModal, setDefaultModal] = useState(false)
  const openDefaultModal = () => {
    setDefaultModal(!defaultModal)
  }
  useEffect(() => {
    document.body.classList[defaultModal ? "add" : "remove"]("overflow-hidden")
  }, [defaultModal])

  const [samllModal, setSmallModal] = useState(false)
  const openSmallModal = () => {
    setSmallModal(!samllModal)
  }
  useEffect(() => {
    document.body.classList[samllModal ? "add" : "remove"]("overflow-hidden")
  }, [samllModal])

  const [largeModal, setLargeModal] = useState(false)
  const openLargeModal = () => {
    setLargeModal(!largeModal)
  }
  useEffect(() => {
    document.body.classList[largeModal ? "add" : "remove"]("overflow-hidden")
  }, [largeModal])

  const [fullModal, setFullModal] = useState(false)
  const openFullModal = () => {
    setFullModal(!fullModal)
  }
  useEffect(() => {
    document.body.classList[fullModal ? "add" : "remove"]("overflow-hidden")
  }, [fullModal])

  return (
    <>
      <Breadcrumb title="Modals" breadcrumbItem={breadcrumbItem} />
      <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
        <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>
          Modals
        </p>
        <div className='flex flex-wrap sm:gap-30 gap-15'>
          <div>
            <button onClick={openDefaultModal} className='btn btn-primary'>
              Default Modal
            </button>
            {defaultModal &&
              <>
                <div className={`fixed p-15 w-full max-w-[600px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[6]`}>
                  <div className='py-10 md:px-10 px-[7px] card bg-card-color rounded-md'>
                    <div className='my-10 md:px-10 px-[7px] max-h-[60vh] overflow-auto cus-scrollbar'>
                      <div className='text-center'>
                        <h5 className="text-[20px]/[24px] font-medium mb-20">List group item heading</h5>
                        <p className='mb-20'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan vitae eros sit amet Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus. Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur nunc.
                        </p>
                        <div className='flex gap-10 justify-center'>
                          <button onClick={openDefaultModal} className='btn btn-danger'>
                            Cancel
                          </button>
                          <button className='btn btn-success'>
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div onClick={openDefaultModal} className={`contents-[] fixed z-[5] w-full h-full left-0 top-0 bg-black-50 backdrop-blur-[5px]`}></div>
              </>
            }
          </div>
          <div>
            <button onClick={openSmallModal} className='btn btn-primary'>
              Small Modal
            </button>
            {samllModal &&
              <>
                <div className={`fixed p-15 w-full max-w-[400px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[6]`}>
                  <div className='py-10 md:px-10 px-[7px] card bg-card-color rounded-md'>
                    <div className='my-10 md:px-10 px-[7px] max-h-[60vh] overflow-auto cus-scrollbar'>
                      <div className='text-center'>
                        <h5 className="text-[20px]/[24px] font-medium mb-20">List group item heading</h5>
                        <p className='mb-20'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan vitae eros sit amet Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus. Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur nunc.
                        </p>
                        <div className='flex gap-10 justify-center'>
                          <button onClick={openSmallModal} className='btn btn-danger'>
                            Cancel
                          </button>
                          <button className='btn btn-success'>
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div onClick={openSmallModal} className={`contents-[] fixed z-[5] w-full h-full left-0 top-0 bg-black-50 backdrop-blur-[5px]`}></div>
              </>
            }
          </div>
          <div>
            <button onClick={openLargeModal} className='btn btn-primary'>
              Large Modal
            </button>
            {largeModal &&
              <>
                <div className={`fixed p-15 w-full max-w-[800px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[6]`}>
                  <div className='py-10 md:px-10 px-[7px] card bg-card-color rounded-md'>
                    <div className='my-10 md:px-10 px-[7px] max-h-[60vh] overflow-auto cus-scrollbar'>
                      <div className='text-center'>
                        <h5 className="text-[20px]/[24px] font-medium mb-20">List group item heading</h5>
                        <p className='mb-20'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan vitae eros sit amet Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus. Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur nunc.
                        </p>
                        <div className='flex gap-10 justify-center'>
                          <button onClick={openLargeModal} className='btn btn-danger'>
                            Cancel
                          </button>
                          <button className='btn btn-success'>
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div onClick={openLargeModal} className={`contents-[] fixed z-[5] w-full h-full left-0 top-0 bg-black-50 backdrop-blur-[5px]`}></div>
              </>
            }
          </div>
          <div>
            <button onClick={openFullModal} className='btn btn-primary'>
              Full Modal
            </button>
            {fullModal &&
              <>
                <div className={`fixed p-15 w-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[6]`}>
                  <div className='py-10 md:px-10 px-[7px] card bg-card-color rounded-md'>
                    <div className='my-10 md:px-10 px-[7px] max-h-[60vh] overflow-auto cus-scrollbar'>
                      <div className='text-center'>
                        <h5 className="text-[20px]/[24px] font-medium mb-20">List group item heading</h5>
                        <p className='mb-20'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan vitae eros sit amet Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus. Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur nunc.
                        </p>
                        <div className='flex gap-10 justify-center'>
                          <button onClick={openFullModal} className='btn btn-danger'>
                            Cancel
                          </button>
                          <button className='btn btn-success'>
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div onClick={openFullModal} className={`contents-[] fixed z-[5] w-full h-full left-0 top-0 bg-black-50 backdrop-blur-[5px]`}></div>
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}
