import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'

export default function BasicElements() {

    const breadcrumbItem = [
        {
            name: "Forms",
        },
        {
            name: "Basic Elements",
        },
    ]

    return (
        <>
            <Breadcrumb title="Basic Elements" breadcrumbItem={breadcrumbItem} />
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-30'>
                <div className='flex flex-col gap-30'>
                    <div className='card bg-card-color rounded-md md:p-20 p-15'>
                        <p className='text-[16px]/[19.2px] font-medium mb-30'>
                            Basic example
                        </p>
                        <div className='flex flex-col gap-20'>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <span className="flex items-center justify-center border border-border-color rounded-l-[4px] mr-[-1px] py-[6px] px-[12px] bg-body-color">
                                    @
                                </span>
                                <input type='text' placeholder="Username" className='flex-[1_1_auto] rounded-r-[4px] rounded-l-none border border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                            </div>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <input type='text' placeholder="Username" className='flex-[1_1_auto] rounded-l-[4px] rounded-r-none border border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                                <span className="flex items-center justify-center border border-border-color rounded-r-[4px] ml-[-1px] py-[6px] px-[12px] bg-body-color">
                                    @example.com
                                </span>
                            </div>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <span className="flex items-center justify-center border border-border-color rounded-l-[4px] mr-[-1px] py-[6px] px-[12px] bg-body-color">
                                    https://example.com/users/
                                </span>
                                <input type='text' placeholder="Recipient's username" className='flex-[1_1_auto] rounded-r-[4px] rounded-l-none border border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                            </div>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <span className="flex items-center justify-center border border-border-color rounded-l-[4px] mr-[-1px] py-[6px] px-[12px] bg-body-color">
                                    $
                                </span>
                                <input type='text' placeholder="Recipient's username" className='flex-[1_1_auto] border rounded-none border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                                <span className="flex items-center justify-center border border-border-color rounded-r-[4px] ml-[-1px] py-[6px] px-[12px] bg-body-color">
                                    .00
                                </span>
                            </div>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <span className="flex items-center justify-center border border-border-color rounded-l-[4px] mr-[-1px] py-[6px] px-[12px] bg-body-color">
                                    With Textarea
                                </span>
                                <textarea rows={3} className='flex-[1_1_auto] min-h-[35px] rounded-r-[4px] rounded-l-none border border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                            </div>
                        </div>
                    </div>
                    <div className='card bg-card-color rounded-md md:p-20 p-15'>
                        <p className='text-[16px]/[19.2px] font-medium mb-30'>
                            Horizontal Form
                        </p>
                        <div className='flex flex-col gap-20'>
                            <div className='form-control flex items-center gap-5'>
                                <label className='form-label font-medium inline-block w-full max-w-[100px]'>First Name</label>
                                <input className='form-input' type='text' placeholder='First Name' />
                            </div>
                            <div className='form-control flex items-center gap-5'>
                                <label className='form-label font-medium inline-block w-full max-w-[100px]'>Last Name</label>
                                <input className='form-input' type='text' placeholder='Last Name' />
                            </div>
                            <div className='form-control flex items-center gap-5'>
                                <label className='form-label font-medium inline-block w-full max-w-[100px]'>Email</label>
                                <input className='form-input' type='email' placeholder='Your Email' />
                            </div>
                            <div className='form-control flex items-center gap-5'>
                                <label className='form-label font-medium inline-block w-full max-w-[100px]'>Password</label>
                                <input className='form-input' type='password' placeholder='Your Password' />
                            </div>
                            <div className='form-control flex items-center gap-5'>
                                <label className='form-label font-medium inline-block w-full max-w-[100px]'></label>
                                <button className='btn btn-primary'>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='card bg-card-color rounded-md md:p-20 p-15'>
                        <p className='text-[16px]/[19.2px] font-medium mb-30'>
                            Different Sizing
                        </p>
                        <div className='flex flex-col gap-20'>
                            <div className='relative w-full flex flex-wrap min-h-[30px] '>
                                <span className="text-[12px]/[1] flex items-center justify-center border border-border-color rounded-l-[4px] mr-[-1px] py-[6px] px-[12px] bg-body-color">
                                    Small
                                </span>
                                <input type='text' className='text-[12px]/[1] flex-[1_1_auto] rounded-r-[4px] rounded-l-none border border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                            </div>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <span className="flex items-center justify-center border border-border-color rounded-l-[4px] mr-[-1px] py-[6px] px-[12px] bg-body-color">
                                    Default
                                </span>
                                <input type='text' className='flex-[1_1_auto] rounded-r-[4px] rounded-l-none border border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                            </div>
                            <div className='relative w-full flex flex-wrap min-h-[40px]'>
                                <span className="text-[20px]/[1] flex items-center justify-center border border-border-color rounded-l-[4px] mr-[-1px] py-[6px] px-[12px] bg-body-color">
                                    Large
                                </span>
                                <input type='text' className='text-[20px]/[1] flex-[1_1_auto] rounded-r-[4px] rounded-l-none border border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                            </div>
                        </div>
                    </div>
                    <div className='card bg-card-color rounded-md md:p-20 p-15'>
                        <p className='text-[16px]/[19.2px] font-medium mb-30'>
                            Input With Checkbox And Radio
                        </p>
                        <div className='flex flex-col gap-20'>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <span className="flex items-center justify-center border border-border-color rounded-l-[4px] mr-[-1px] py-[6px] px-[12px] bg-body-color">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input small" />
                                    </div>
                                </span>
                                <input type='text' className='flex-[1_1_auto] rounded-r-[4px] rounded-l-none border border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                            </div>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <span className="flex items-center justify-center border border-border-color rounded-l-[4px] mr-[-1px] py-[6px] px-[12px] bg-body-color">
                                    <div className="form-radio">
                                        <input type="checkbox" className="form-radio-input small" />
                                    </div>
                                </span>
                                <input type='text' className='flex-[1_1_auto] rounded-r-[4px] rounded-l-none border border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                            </div>
                        </div>
                    </div>
                    <div className='card bg-card-color rounded-md md:p-20 p-15'>
                        <p className='text-[16px]/[19.2px] font-medium mb-30'>
                            Custom Checkbox And Radio Button
                        </p>
                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-30'>
                            <div className='flex flex-col gap-10'>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input small" />
                                    <label className="form-checkbox-label">Fancy Checkbox 1</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input small" defaultChecked />
                                    <label className="form-checkbox-label">Fancy Checkbox 2</label>
                                </div><div className="form-check">
                                    <input type="checkbox" className="form-check-input small" />
                                    <label className="form-checkbox-label">Fancy Checkbox 3</label>
                                </div>
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className="form-radio">
                                    <input type="radio" id="male" name="gender" className="form-radio-input small" defaultChecked />
                                    <label className="form-radio-label" htmlFor="male">Male</label>
                                </div>
                                <div className="form-radio">
                                    <input type="radio" id="female" name="gender" className="form-radio-input small" />
                                    <label className="form-radio-label" htmlFor="female">Female</label>
                                </div>
                                <div className="form-radio">
                                    <input type="radio" id="other" name="gender" className="form-radio-input small" />
                                    <label className="form-radio-label" htmlFor="other">Other</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-30'>
                    <div className='card bg-card-color rounded-md md:p-20 p-15'>
                        <p className='text-[16px]/[19.2px] font-medium mb-30'>
                            Multiple Addons
                        </p>
                        <div className='flex flex-col gap-20'>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <span className="flex items-center justify-center border border-border-color rounded-l-[4px] mr-[-1px] py-[6px] px-[12px] bg-body-color">
                                    $
                                </span>
                                <span className="flex items-center justify-center border border-border-color mr-[-1px] py-[6px] px-[12px] bg-body-color">
                                    0.00
                                </span>
                                <input type='text' className='flex-[1_1_auto] rounded-r-[4px] rounded-l-none border border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                            </div>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <input type='text' className='flex-[1_1_auto] rounded-l-[4px] rounded-r-none border border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                                <span className="flex items-center justify-center border border-border-color ml-[-1px] py-[6px] px-[12px] bg-body-color">
                                    0.00
                                </span>
                                <span className="flex items-center justify-center border border-border-color rounded-r-[4px] ml-[-1px] py-[6px] px-[12px] bg-body-color">
                                    $
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='card bg-card-color rounded-md md:p-20 p-15'>
                        <p className='text-[16px]/[19.2px] font-medium mb-30'>
                            Input Button addons
                        </p>
                        <div className='flex flex-col gap-20'>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <button className="btn btn-outline-secondary !rounded-r-none mr-[-1px] relative">
                                    Button
                                </button>
                                <input type='text' className='flex-[1_1_auto] rounded-r-[4px] rounded-l-none border border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                            </div>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <input type='text' placeholder="Recipient's username" className='flex-[1_1_auto] rounded-l-[4px] rounded-r-none border border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                                <button className="btn btn-outline-secondary !rounded-l-none ml-[-1px] relative">
                                    Button
                                </button>
                            </div>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <button className="btn btn-outline-secondary !rounded-r-none mr-[-1px] relative">
                                    Button
                                </button>
                                <button className="btn btn-outline-secondary !rounded-none mr-[-1px] relative">
                                    Button
                                </button>
                                <input type='text' className='flex-[1_1_auto] rounded-r-[4px] rounded-l-none border border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                            </div>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <input type='text' placeholder="Recipient's username" className='flex-[1_1_auto] rounded-l-[4px] rounded-r-none border border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                                <button className="btn btn-outline-secondary !rounded-none ml-[-1px] relative">
                                    Button
                                </button>
                                <button className="btn btn-outline-secondary !rounded-l-none ml-[-1px] relative">
                                    Button
                                </button>
                            </div>
                        </div>
                        <p className='text-[16px]/[19.2px] font-medium mt-30 mb-10'>
                            Input Button dropdowns
                        </p>
                        <div className='flex flex-col gap-20'>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <select className="flex items-center justify-center border border-border-color rounded-l-[4px] mr-[-1px] py-[6px] px-[12px] bg-body-color cursor-pointer focus:outline-none">
                                    <option>Action 1</option>
                                    <option>Action 2</option>
                                    <option>Action 3</option>
                                </select>
                                <input type='text' className='flex-[1_1_auto] rounded-r-[4px] rounded-l-none border border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                            </div>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <input type='text' className='flex-[1_1_auto] rounded-l-[4px] rounded-r-none border border-border-color bg-bg-dark py-[6px] px-[12px] placeholder:text-text-secondary focus:outline-none' />
                                <select className="flex items-center justify-center border border-border-color rounded-r-[4px] ml-[-1px] py-[6px] px-[12px] bg-body-color cursor-pointer focus:outline-none">
                                    <option>Action 1</option>
                                    <option>Action 2</option>
                                    <option>Action 3</option>
                                </select>
                            </div>
                        </div>
                        <p className='text-[16px]/[19.2px] font-medium mt-30 mb-10'>
                            Custom File Input
                        </p>
                        <div className='flex flex-col gap-20'>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <button className="btn btn-outline-secondary !leading-[1] !rounded-r-none mr-[-1px] relative z-[1]">
                                    Upload
                                </button>
                                <div className='relative flex-[1_1_auto] rounded-r-[4px] rounded-l-none border border-border-color bg-bg-dark py-[6px] px-[12px]'>
                                    <input type='file' className='opacity-0 absolute w-full h-full left-0 top-0 z-[1] cursor-pointer focus:outline-none' />
                                    <label className='flex h-full items-center'>Choose File</label>
                                    <span className="flex items-center justify-center absolute right-0 top-0 bottom-0 border-l border-border-color py-[6px] px-[12px] bg-body-color">
                                        Browse
                                    </span>
                                </div>
                            </div>
                            <div className='relative w-full flex flex-wrap min-h-[35px] '>
                                <div className='relative flex-[1_1_auto] rounded-l-[4px] rounded-r-none border border-border-color bg-bg-dark py-[6px] px-[12px]'>
                                    <input type='file' className='opacity-0 absolute w-full h-full left-0 top-0 z-[1] cursor-pointer focus:outline-none' />
                                    <label className='flex h-full items-center'>Choose File</label>
                                    <span className="flex items-center justify-center absolute right-0 top-0 bottom-0 border-l border-border-color py-[6px] px-[12px] bg-body-color">
                                        Browse
                                    </span>
                                </div>
                                <button className="btn btn-outline-secondary !leading-[1] !rounded-l-none ml-[-1px] relative z-[1]">
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='card bg-card-color rounded-md md:p-20 p-15'>
                        <p className='text-[16px]/[19.2px] font-medium mb-30'>
                            Custom select
                        </p>
                        <div className='flex flex-col gap-20'>
                            <div className='relative w-full flex flex-wrap min-h-[40px]'>
                                <span className="flex items-center justify-center border border-border-color rounded-l-[4px] mr-[-1px] py-[6px] px-[12px] bg-body-color">
                                    Options
                                </span>
                                <select className="flex items-center justify-center flex-[1_1_auto] border border-border-color rounded-r-[4px] py-[6px] px-[12px] bg-body-color cursor-pointer focus:outline-none">
                                    <option>Choose...</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                            </div>
                            <div className='relative w-full flex flex-wrap min-h-[40px]'>
                                <button className="btn btn-outline-secondary !rounded-r-none mr-[-1px] relative">
                                    Button
                                </button>
                                <select className="flex items-center justify-center flex-[1_1_auto] border border-border-color rounded-r-[4px] py-[6px] px-[12px] bg-body-color cursor-pointer focus:outline-none">
                                    <option>Choose...</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
