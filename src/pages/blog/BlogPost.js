import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import ReactQuill from 'react-quill'

export default function BlogPost() {

    const breadcrumbItem = [
        {
            name: "Blog",
        },
        {
            name: "New Post",
        },
    ]

    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],

        ['blockquote', 'code-block'],

        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],

        [{ 'align': [] }],

        [{ 'list': 'ordered' }, { 'list': 'bullet' }],

        ['link', 'image'],

        [{ 'script': 'sub' }, { 'script': 'super' }],
    ];

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Blog Post" />
            <div className='card bg-card-color md:p-20 p-15 rounded-md flex flex-col gap-20'>
                <div className='form-control'>
                    <input type='text' id='blogTitle' className='form-input' placeholder="Enter blog title" />
                </div>
                <div className='form-control'>
                    <select className='form-select'>
                        <option defaultValue="">Blog Category</option>
                        <option value="webdesign">Web Design</option>
                        <option value="photography">Photography</option>
                        <option value="technology">Technology</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="sports">Sports</option>
                    </select>
                </div>
                <ReactQuill
                    modules={{ toolbar: toolbarOptions }}
                    className='bg-card-color'
                    defaultValue="
                        <p>
                            Hello There !
                        </p>
                        <p>
                            The toolbar can be customized and it also supports various callbacks such as 
                            <span style='color: red;'>oninit</span>, 
                            <span style='color: red;'>onfocus</span>, 
                            <span style='color: red;'>onpaste</span> 
                            and many more.
                        </p>
                        <br/>
                        <p>
                            Please try 
                            <b>paste some texts</b>
                            here
                        </p>
                    "/>
                <div>
                    <button className='btn btn-primary'>
                        Post
                    </button>
                </div>
            </div>
        </>
    )
}
