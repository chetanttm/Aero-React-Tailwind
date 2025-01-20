import React from 'react'
import { logoIcon, signup } from '../../assets/images'
import { IconLockFilled, IconMailFilled, IconUserFilled } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <div className='container flex gap-15 w-full relative z-[1]'>
            <div className='flex items-center justify-center w-full flex-col'>
                <div className='card bg-card-color rounded-md sm:p-4 p-2 max-w-[450px] w-full shadow-shadow-sm'>
                    <div className='sm:max-h-[calc(100svh-48px-32px-40px)] max-h-[calc(100svh-48px-16px-40px)] sm:p-4 p-3 overflow-auto cus-scrollbar flex flex-col items-center'>
                        <img src={logoIcon} alt='logo icon' width={100} height={100} />
                        <h5 className='text-[20px]/[26px] font-medium mt-10'>Sign Up</h5>
                        <small>Register a new membership</small>
                        <form className='my-30 w-full'>
                            <div className='form-control flex items-stretch mb-20'>
                                <input type="text" placeholder="Username" className='form-input !rounded-e-none' />
                                <div className='px-3 py-2 border border-border-color border-s-0 rounded-e-md'>
                                    <IconUserFilled className='w-[18px] h-[18px]' />
                                </div>
                            </div>
                            <div className='form-control flex items-stretch mb-20'>
                                <input type="email" placeholder="Enter Email" className='form-input !rounded-e-none' />
                                <div className='px-3 py-2 border border-border-color border-s-0 rounded-e-md'>
                                    <IconMailFilled className='w-[18px] h-[18px]' />
                                </div>
                            </div>
                            <div className='form-control flex items-stretch mb-20'>
                                <input type="password" placeholder="Password" className='form-input !rounded-e-none' />
                                <div className='px-3 py-2 border border-border-color border-s-0 rounded-e-md'>
                                    <IconLockFilled className='w-[18px] h-[18px]' />
                                </div>
                            </div>
                            <div className="form-check mb-20">
                                <input type="checkbox" id="rememberMe" className="form-check-input small" />
                                <label htmlFor="rememberMe" className="form-check-label">I read and agree to the </label>
                                <Link to="#" className='text-sky'>terms of usage</Link>
                            </div>
                            <Link to="/" className='btn btn-primary'>SIGN UP</Link>
                        </form>
                        <Link to="/sign-in" className='text-sky'>You already have a membership?</Link>
                    </div>
                </div>
                <small className="mt-4">
                    © 2025, Designed by <Link to="https://thememakker.com/" target="_blank" className='text-sky'>ThemeMakker</Link>
                </small>
            </div>
            <div className='items-center justify-center w-full lg:flex hidden'>
                <img src={signup} alt='sign in' />
            </div>
        </div>
    )
}
