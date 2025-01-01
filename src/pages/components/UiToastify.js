import React from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import { toast, ToastContainer, Bounce, Slide, Zoom, Flip } from 'react-toastify';

export default function UiToastify() {
    const breadcrumbItem = [
        {
            name: "Components",
        },
        {
            name: "Toastify",
        },
    ];

    const notifyWithPosition = (message, position) => {
        toast(message, {
            position: position,
        });
    };

    const notifyWithType = (message, type) => {
        toast(message, {
            type: type,
        });
    };

    const notifyWithTransition = (message, transition) => {
        toast(message, {
            transition: transition,
        });
    };

    const notifyWithOptions = (message, options) => {
        toast(message, options);
    };

    return (
        <>
            <Breadcrumb title="Toastify" breadcrumbItem={breadcrumbItem} />

            {/* Positions Section */}
            <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
                <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>Positions</p>
                <div className='flex flex-wrap gap-10'>
                    <ToastContainer autoClose={3000} />
                    <button
                        onClick={() => notifyWithPosition("This is a TOP RIGHT toast!", "top-right")}
                        className='btn btn-primary'>
                        Top Right
                    </button>
                    <button
                        onClick={() => notifyWithPosition("This is a TOP LEFT toast!", "top-left")}
                        className='btn btn-primary'>
                        Top Left
                    </button>
                    <button
                        onClick={() => notifyWithPosition("This is a TOP CENTER toast!", "top-center")}
                        className='btn btn-primary'>
                        Top Center
                    </button>
                    <button
                        onClick={() => notifyWithPosition("This is a BOTTOM RIGHT toast!", "bottom-right")}
                        className='btn btn-primary'>
                        Bottom Right
                    </button>
                    <button
                        onClick={() => notifyWithPosition("This is a BOTTOM LEFT toast!", "bottom-left")}
                        className='btn btn-primary'>
                        Bottom Left
                    </button>
                    <button
                        onClick={() => notifyWithPosition("This is a BOTTOM CENTER toast!", "bottom-center")}
                        className='btn btn-primary'>
                        Bottom Center
                    </button>
                </div>
            </div>

            {/* Types Section */}
            <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
                <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>Types</p>
                <div className='flex flex-wrap gap-10'>
                    <ToastContainer autoClose={3000} />
                    <button
                        onClick={() => notifyWithType("This is an Info toast!", "info")}
                        className='btn btn-info'>
                        Info
                    </button>
                    <button
                        onClick={() => notifyWithType("This is a Success toast!", "success")}
                        className='btn btn-success'>
                        Success
                    </button>
                    <button
                        onClick={() => notifyWithType("This is a Warning toast!", "warning")}
                        className='btn btn-warning'>
                        Warning
                    </button>
                    <button
                        onClick={() => notifyWithType("This is a Danger toast!", "error")}
                        className='btn btn-danger'>
                        Danger
                    </button>
                    <button
                        onClick={() => notifyWithType("This is a Default toast!", "default")}
                        className='btn btn-secondary'>
                        Default
                    </button>
                </div>
            </div>

            {/* Transitions Section */}
            <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
                <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>Transitions</p>
                <div className='flex flex-wrap gap-10'>
                    <ToastContainer autoClose={3000} />
                    <button
                        onClick={() => notifyWithTransition("This toast uses the Bounce transition!", Bounce)}
                        className='btn btn-primary'>
                        Bounce
                    </button>
                    <button
                        onClick={() => notifyWithTransition("This toast uses the Slide transition!", Slide)}
                        className='btn btn-primary'>
                        Slide
                    </button>
                    <button
                        onClick={() => notifyWithTransition("This toast uses the Zoom transition!", Zoom)}
                        className='btn btn-primary'>
                        Zoom
                    </button>
                    <button
                        onClick={() => notifyWithTransition("This toast uses the Flip transition!", Flip)}
                        className='btn btn-primary'>
                        Flip
                    </button>
                </div>
            </div>

            {/* Other Options Section */}
            <div className='card bg-card-color rounded-md md:p-20 p-15'>
                <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>Other Options</p>
                <div className='flex flex-wrap gap-10'>
                    <ToastContainer autoClose={3000} />
                    <button
                        onClick={() => notifyWithOptions("Progress bar hidden!", { hideProgressBar: true })}
                        className='btn btn-black'>
                        Hide Progress Bar
                    </button>
                    <button
                        onClick={() => notifyWithOptions("Click to close this toast!", { closeOnClick: true })}
                        className='btn btn-sky'>
                        Close On Click
                    </button>
                </div>
            </div>
        </>
    );
}
