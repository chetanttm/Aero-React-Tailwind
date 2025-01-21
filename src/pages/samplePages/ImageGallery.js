import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import { Link } from 'react-router-dom'
import { SlideshowLightbox } from 'lightbox.js-react'
import {
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
} from '../../assets/images'

export default function ImageGallery() {

    const breadcrumbItem = [
        {
            name: "Pages",
        },
        {
            name: "Image Gallery",
        },
    ]

    const galleryPhotos = [
        {
            image: gallery1,
        },
        {
            image: gallery2,
        },
        {
            image: gallery3,
        },
        {
            image: gallery4,
        },
        {
            image: gallery5,
        },
        {
            image: gallery6,
        },
        {
            image: gallery7,
        },
        {
            image: gallery8,
        },
        {
            image: gallery9,
        },
        {
            image: gallery10,
        },
        {
            image: gallery11,
        },
        {
            image: gallery12,
        },
        {
            image: gallery13,
        },
        {
            image: gallery14,
        },
        {
            image: gallery15,
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Image Gallery" />
            <div className='card bg-card-color md:p-20 p-15 rounded-md'>
                <p className='mb-4'>All pictures taken from <Link to="https://www.pexels.com/" target='_blank' className='text-sky'>pexels.com</Link></p>
                <SlideshowLightbox showThumbnails onOpen={() => { document.body.classList.add("overflow-hidden") }} onClose={() => { document.body.classList.remove("overflow-hidden") }} className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 w-full">
                    {galleryPhotos.map((item, key) => (
                        <img key={key} src={item.image} alt='gallery' className="w-full rounded p-1 bg-border-color" />
                    ))}
                </SlideshowLightbox>
            </div>
        </>
    )
}
