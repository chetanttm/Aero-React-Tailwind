import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import { Link } from 'react-router-dom'
import ReactQuill from 'react-quill';

export default function QuillEditor() {

    const breadcrumbItem = [
        {
            name: "Forms",
        },
        {
            name: "Form Validation",
        },
    ]

    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']
    ];

    return (
        <>
            <Breadcrumb title="Quill Editor" breadcrumbItem={breadcrumbItem} />
            <div className='card bg-card-color rounded-md md:p-20 p-15'>
                <p className='text-[16px]/[20px] font-medium mb-5'>
                    Quill Editor
                </p>
                <p className='mb-30 text-font-color-100'>
                    Quill Editor is a ready-for-use HTML text editor designed to simplify web content creation. Library installed from &nbsp;
                    <Link to="https://www.npmjs.com/package/react-quill" className='text-blue transition-all duration-300 hover:text-sky'>
                        https://www.npmjs.com/package/react-quill
                    </Link>
                </p>
                <ReactQuill
                    modules={{ toolbar: toolbarOptions }}
                    className='bg-card-color'
                    defaultValue='
                        <p>
                            <h3>
                                <b>
                                    Quill Rich Text Editor
                                </b>
                            </h3>
                        </p>
                        <p>
                            <br>
                        </p>
                        <p>Quill is a free,
                            <a href="https://github.com/quilljs/quill/" target="_blank">open source</a> WYSIWYG editor built for the modern web. With its
                            <a href="http://quilljs.com/docs/modules/" target="_blank">extensible architecture</a> and a
                            <a href="http://quilljs.com/docs/api/" target="_blank">expressive API</a> you can completely customize it to fulfill your needs. Some built in features include:</p>
                        <p>
                            <br>
                        </p>
                        <ul>
                            <li>Fast and lightweight</li>
                            <li>Semantic markup</li>
                            <li>Standardized HTML between browsers</li>
                            <li>Cross browser support including Chrome, Firefox, Safari, and IE 9+</li>
                        </ul>
                        <p>
                            <br>
                        </p>
                        <p>
                            <span style="font-size: 18px;">Downloads</span>
                        </p>
                        <p>
                            <br>
                        </p>
                        <ul>
                            <li>
                                <a href="https://quilljs.com" target="_blank">Quill.js</a>, the free, open source WYSIWYG editor</li>
                            <li>
                                <a href="https://zenoamaro.github.io/react-quill" target="_blank">React-quill</a>, a React component that wraps Quill.js</li>
                        </ul>
                        <p>
                            <br>
                        </p>
                        <p>
                            <br>
                        </p>
                    '
                />
            </div>
        </>
    )
}
