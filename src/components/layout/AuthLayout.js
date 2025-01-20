import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {

    return (
        <div className='auth-layout min-h-svh py-6 px-4 flex items-center justify-center bg-body-color'>
            <Outlet />
        </div>
    )
}
