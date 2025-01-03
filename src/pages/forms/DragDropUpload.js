import React, { useState } from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import { Link } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'
import { IconCloudUpload } from '@tabler/icons-react';
import { IconFileTypePdf } from '@tabler/icons-react';
import { blogImage1 } from '../../assets/images';

export default function DragDropUpload() {

    const [image, setImage] = useState({ file: '', name: '' });
    const [fileType, setFileType] = useState({ file: '', name: '' });
    const [imageDefault, setImageDefault] = useState({ file: '', name: '' });
    const [largeFile, setLargeFile] = useState({ file: '', name: '' });
    const [fileTypeAlert, setFileTypeAlert] = useState('');
    const [fileSizeAlert, setFileSizeAlert] = useState('');

    const onDrop = acceptedFiles => {
        const file = acceptedFiles[0];
        setImage({ file, name: file.name });
    };

    const onDropFileType = acceptedFiles => {
        const file = acceptedFiles[0];
        const allowedTypes = ['image/png', 'application/pdf'];
        if (file && allowedTypes.includes(file.type)) {
            setFileType({ file, name: file.name });
        } else {
            setFileTypeAlert('Please upload a PNG or PDF file only.');
        }
    };

    const onDropDefault = acceptedFiles => {
        const file = acceptedFiles[0];
        setImageDefault({ file, name: file.name });
    };

    const onDropLargeFiles = acceptedFiles => {
        const file = acceptedFiles[0];
        if (file.size > 100 * 1024) { // 100kb in bytes
            setLargeFile({ file, name: file.name });
        } else {
            setFileSizeAlert('Please upload a file larger than 100kb.');
        }
    };

    const { getRootProps: getRootPropsImage, getInputProps: getInputPropsImage } = useDropzone({ onDrop, accept: { 'image/*': [], 'application/pdf' : [] } });
    const { getRootProps: getRootPropsFileType, getInputProps: getInputPropsFileType } = useDropzone({ onDrop: onDropFileType });
    const { getRootProps: getRootPropsDefault, getInputProps: getInputPropsDefault } = useDropzone({ onDrop: onDropDefault, accept: { 'image/*': [], 'application/pdf' : [] } });
    const { getRootProps: getRootPropsLargeFiles, getInputProps: getInputPropsLargeFiles } = useDropzone({ onDrop: onDropLargeFiles });

    return (
        <>
            <Breadcrumb title="Drag & Drop File Upload" path="Forms / Drag & Drop File Upload" />
            <div className='grid md:grid-cols-2 gap-30'>
                <div className='card bg-card-color rounded-md md:p-20 p-15'>
                    <p className='text-[16px]/[20px] font-medium mb-5'>
                        Default
                    </p>
                    <p className='mb-30 text-font-color-100'>
                        Library installed from &nbsp;
                        <Link to="https://www.npmjs.com/package/react-dropzone" className='text-blue transition-all duration-300 hover:text-sky'>
                            https://www.npmjs.com/package/react-dropzone
                        </Link>
                    </p>
                    <div {...getRootPropsImage()} className='custom-dropzone cursor-pointer border-2 border-border-color p-10 relative h-[200px] text-center flex items-center justify-center bg-content-color'>
                        <input {...getInputPropsImage()} />
                        {image.file ? (
                            <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 text-center p-10 bg-content-color group">
                                {image.file.type === 'application/pdf' ? (
                                    <div className='w-full h-full flex flex-col gap-5 justify-center items-center relative'>
                                        <IconFileTypePdf className='w-[40px] h-[40px] text-font-color-100' />
                                    </div>
                                ) : (
                                    <img src={URL.createObjectURL(image.file)} alt="Uploaded" className='relative top-[50%] translate-y-[-50%] max-w-full max-h-full mx-auto' />
                                )}
                                <div className='absolute left-0 top-0 right-0 bottom-0 bg-slate-950/70 text-font-color-100 flex flex-col gap-15 items-center justify-center opacity-0 transition-opacity duration-150 ease-linear group-hover:opacity-100'>
                                    <p className='text-white font-medium truncate max-w-[200px]'>
                                        {image.name}
                                    </p>
                                    <span className='inline-block w-30 h-[2px] bg-border'></span>
                                    <p>
                                        Drag and drop or click to replace
                                    </p>
                                </div>
                            </div>
                        )
                            :
                            <p className='text-font-color-100 flex flex-col gap-5 justify-center items-center relative'>
                                <IconCloudUpload className='w-[50px] h-[50px] stroke-[1]' />
                                Drag and drop a file here or click
                            </p>
                        }
                    </div>
                </div>
                <div className='card bg-card-color rounded-md md:p-20 p-15'>
                    <p className='text-[16px]/[20px] font-medium mb-5'>
                        Limit file type
                    </p>
                    <p className='mb-30 text-font-color-100'>
                        Try to upload png or pdf only
                    </p>
                    <div {...getRootPropsFileType()} className='custom-dropzone cursor-pointer border-2 border-border-color relative h-[200px] text-center flex items-center justify-center bg-content-color'>
                        <input {...getInputPropsFileType()} />
                        {fileType.file ? (
                            <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 text-center p-10 bg-content-color group">
                                {fileType.file.type === 'application/pdf' ? (
                                    <div className='w-full h-full flex flex-col gap-5 justify-center items-center relative'>
                                        <IconFileTypePdf className='w-[40px] h-[40px] text-font-color-100' />
                                    </div>
                                ) : (
                                    <img src={URL.createObjectURL(fileType.file)} alt="Uploaded" className='relative top-[50%] translate-y-[-50%] max-w-full max-h-full mx-auto' />
                                )}
                                <div className='absolute left-0 top-0 right-0 bottom-0 bg-slate-950/70 text-font-color-100 flex flex-col gap-15 items-center justify-center opacity-0 transition-opacity duration-150 ease-linear group-hover:opacity-100'>
                                    <p className='text-white font-medium truncate max-w-[200px]'>
                                        {fileType.name}
                                    </p>
                                    <span className='inline-block w-30 h-[2px] bg-border'></span>
                                    <p>
                                        Drag and drop or click to replace
                                    </p>
                                </div>
                            </div>
                        )
                            :
                            fileTypeAlert ?
                                <div className='absolute left-0 top-0 right-0 bottom-0 bg-rose-950/70 text-font-color-100 flex flex-col gap-15 items-center justify-center transition-opacity duration-150 ease-linear group-hover:opacity-100'>
                                    {fileTypeAlert}
                                </div>
                                :
                                <p className='text-font-color-100 p-10 w-full h-full flex flex-col gap-5 justify-center items-center relative'>
                                    < IconCloudUpload className='w-[50px] h-[50px] stroke-[1]' />
                                    Drag and drop a file here or click
                                </p>
                        }
                    </div>
                </div>
                <div className='card bg-card-color rounded-md md:p-20 p-15'>
                    <p className='text-[16px]/[20px] font-medium mb-5'>
                        With default file
                    </p>
                    <p className='mb-30 text-font-color-100'>
                        Library installed from &nbsp;
                        <Link to="https://www.npmjs.com/package/react-dropzone" className='text-blue transition-all duration-300 hover:text-sky'>
                            https://www.npmjs.com/package/react-dropzone
                        </Link>
                    </p>
                    <div {...getRootPropsDefault()} className='custom-dropzone cursor-pointer border-2 border-border-color p-10 relative h-[200px] text-center flex items-center justify-center bg-content-color'>
                        <input {...getInputPropsDefault()} />
                        <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 text-center p-10 bg-content-color group">
                            {imageDefault.file.type === 'application/pdf' ? (
                                <div className='w-full h-full flex flex-col gap-5 justify-center items-center relative'>
                                    <IconFileTypePdf className='w-[40px] h-[40px] text-font-color-100' />
                                </div>
                            ) : (
                                <img src={imageDefault.file ? URL.createObjectURL(imageDefault.file) : blogImage1} alt="Uploaded" className='relative top-[50%] translate-y-[-50%] max-w-full max-h-full mx-auto' />
                            )}
                            <div className='absolute left-0 top-0 right-0 bottom-0 bg-slate-950/70 text-font-color-100 flex flex-col gap-15 items-center justify-center opacity-0 transition-opacity duration-150 ease-linear group-hover:opacity-100'>
                                <p className='text-white font-medium truncate max-w-[200px]'>
                                    {imageDefault.name ? imageDefault.name : 'Default Image'}
                                </p>
                                <span className='inline-block w-30 h-[2px] bg-border'></span>
                                <p>
                                    Drag and drop or click to replace
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card bg-card-color rounded-md md:p-20 p-15'>
                    <p className='text-[16px]/[20px] font-medium mb-5'>
                        Limit file size
                    </p>
                    <p className='mb-30 text-font-color-100'>
                        Upload files larger than 100kb
                    </p>
                    <div {...getRootPropsLargeFiles()} className='custom-dropzone cursor-pointer border-2 border-border-color relative h-[200px] text-center flex items-center justify-center bg-content-color'>
                        <input {...getInputPropsLargeFiles()} />
                        {largeFile.file ? (
                            <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 text-center p-10 bg-content-color group">
                                {largeFile.file.type === 'application/pdf' ? (
                                    <div className='w-full h-full flex flex-col gap-5 justify-center items-center relative'>
                                        <IconFileTypePdf className='w-[40px] h-[40px] text-font-color-100' />
                                    </div>
                                ) : (
                                    <img src={URL.createObjectURL(largeFile.file)} alt="Uploaded" className='relative top-[50%] translate-y-[-50%] max-w-full max-h-full mx-auto' />
                                )}
                                <div className='absolute left-0 top-0 right-0 bottom-0 bg-slate-950/70 text-font-color-100 flex flex-col gap-15 items-center justify-center opacity-0 transition-opacity duration-150 ease-linear group-hover:opacity-100'>
                                    <p className='text-white font-medium truncate max-w-[200px]'>
                                        {largeFile.name}
                                    </p>
                                    <span className='inline-block w-30 h-[2px] bg-border'></span>
                                    <p>
                                        Drag and drop or click to replace
                                    </p>
                                </div>
                            </div>
                        )
                            :
                            fileSizeAlert ?
                                <div className='absolute left-0 top-0 right-0 bottom-0 bg-rose-950/70 text-font-color-100 flex flex-col gap-15 items-center justify-center transition-opacity duration-150 ease-linear group-hover:opacity-100'>
                                    {fileSizeAlert}
                                </div>
                                :
                                <p className='text-font-color-100 p-10 w-full h-full flex flex-col gap-5 justify-center items-center relative'>
                                    <IconCloudUpload className='w-[50px] h-[50px] stroke-[1]' />
                                    Drag and drop a file here or click
                                </p>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
