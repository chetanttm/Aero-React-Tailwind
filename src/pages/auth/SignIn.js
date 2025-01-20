import React from 'react'
import { logoIcon, signin } from '../../assets/images'
import { IconBrandFacebookFilled, IconBrandGoogleFilled, IconBrandXFilled, IconLockFilled, IconUserFilled } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export default function SignIn() {
    return (
        <div className='container flex gap-15 w-full relative z-[1]'>
            <div className='flex items-center justify-center w-full flex-col'>
                <div className='card bg-card-color rounded-md sm:p-4 p-2 max-w-[450px] w-full shadow-shadow-sm'>
                    <div className='sm:max-h-[calc(100svh-48px-32px-40px)] max-h-[calc(100svh-48px-16px-40px)] sm:p-4 p-3 overflow-auto cus-scrollbar flex flex-col items-center'>
                        <img src={logoIcon} alt='logo icon' width={100} height={100} />
                        <h5 className='text-[20px]/[26px] font-medium mt-10'>Log in</h5>
                        <form className='my-30 w-full'>
                            <div className='form-control flex items-stretch mb-20'>
                                <input type="text" placeholder="Username" className='form-input !rounded-e-none' />
                                <div className='px-3 py-2 border border-border-color border-s-0 rounded-e-md'>
                                    <IconUserFilled className='w-[18px] h-[18px]' />
                                </div>
                            </div>
                            <div className='form-control flex items-stretch mb-20'>
                                <input type="password" placeholder="Password" className='form-input !rounded-e-none' />
                                <Link to="/forgot-password" className='px-3 py-2 border border-border-color border-s-0 rounded-e-md text-sky'>
                                    <IconLockFilled className='w-[18px] h-[18px]' />
                                </Link>
                            </div>
                            <div className="form-check mb-20">
                                <input type="checkbox" id="rememberMe" className="form-check-input small" />
                                <label htmlFor="rememberMe" className="form-check-label">Remember Me</label>
                            </div>
                            <Link to="/" className='btn btn-primary'>SIGN IN</Link>
                        </form>
                        <p>or Sign Up using</p>
                        <ul className='flex items-center justify-center gap-2 mt-2'>
                            <li>
                                <Link to="#" className='inline-flex items-center justify-center text-white w-[38px] h-[38px] min-w-[38px] rounded-full bg-[#3a579b]'>
                                    <IconBrandFacebookFilled className='w-[18px] h-[18px] min-w-[18px]' />
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className='inline-flex items-center justify-center text-white w-[38px] h-[38px] min-w-[38px] rounded-full bg-black'>
                                    <IconBrandXFilled className='w-[18px] h-[18px] min-w-[18px]' />
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className='inline-flex items-center justify-center text-white w-[38px] h-[38px] min-w-[38px] rounded-full bg-[#d5472f]'>
                                    <IconBrandGoogleFilled className='w-[18px] h-[18px] min-w-[18px]' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <small className="mt-4">
                    © 2025, Designed by <Link to="https://thememakker.com/" target="_blank" className='text-sky'>ThemeMakker</Link>
                </small>
            </div>
            <div className='items-center justify-center w-full lg:flex hidden'>
                <img src={signin} alt='sign in' />
            </div>
        </div>
    )
}
