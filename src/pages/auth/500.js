import React from 'react'
import { logoIcon, signin } from '../../assets/images'
import { IconSearch } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export default function PageNotFound500() {
    return (
        <div className='container flex gap-15 w-full relative z-[1]'>
            <div className='flex items-center justify-center w-full flex-col'>
                <div className='card bg-card-color rounded-md sm:p-4 p-2 max-w-[450px] w-full shadow-shadow-sm'>
                    <div className='sm:max-h-[calc(100svh-48px-32px-40px)] max-h-[calc(100svh-48px-16px-40px)] sm:p-4 p-3 overflow-auto cus-scrollbar flex flex-col items-center'>
                        <img src={logoIcon} alt='logo icon' width={100} height={100} />
                        <h5 className='text-[20px]/[26px] font-medium mt-10'>Error 500</h5>
                        <small>{"Something's broken :-("}</small>
                        <form className='my-30 w-full'>
                            <div className='form-control flex items-stretch mb-20'>
                                <input type="text" placeholder="Search..." className='form-input !rounded-e-none' />
                                <div className='px-3 py-2 border border-border-color border-s-0 rounded-e-md'>
                                    <IconSearch className='w-[18px] h-[18px]' />
                                </div>
                            </div>
                            <Link to="/" className='btn btn-primary'>GO TO HOMEPAGE</Link>
                        </form>
                        <Link to="/sign-in" className='text-sky'>Need Help?</Link>
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
