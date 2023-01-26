import React, { useState } from 'react';
import react from '@astrojs/react';

export const JobForm = () => {
    //@ts-ignore
    const [contactWay, setContactWay]: any = useState(null);
    const setContactHandler = () => {
        setContactWay('...')
    }
    console.log(contactWay)
    //@ts-ignore
    return (
        <div className="container mt-4 bg-zinc-200/50 rounded-lg relative ring-2 ring-slate-800 shadow-lg p-7 mb-7 max-w-[380px] sm:max-w-2xl">
            <h1 className="text-center text-lg absolute top-0 left-0 ml-4 mt-2 text-slate-800">Add a Job </h1>
            <div className="m-8 ">
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium  text-zinc-800">Company</label>
                <input type="text" id="company" placeholder="Instabug" className="block w-full p-2 shadow-md text-gray-900 border-gray-500 rounded-lg bg-gray-50 sm:text-xs focus:border-slate-500" />
            </div>
            <div className="m-8 ">
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium  text-zinc-800">Title</label>
                <input type="text" placeholder="Software engineer" id="title" className="block w-full p-2 shadow-md text-gray-900  border-gray-500 rounded-lg bg-gray-50 sm:text-xs focus:border-slate-500" />
            </div>
            <div className="m-8 ">
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium  text-zinc-800">Type</label>
                <select id="Type" className="w-full p-2 shadow-md text-gray-900 border-gray-500 rounded-lg bg-gray-50 sm:text-xs focus:border-slate-500">
                    <option selected>Choose the type</option>
                    <option value="Intern">Internship</option>
                    <option value="entry-level">EntryLevel</option>
                </select>
            </div>
            <div className="m-8 ">
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium  text-zinc-800">Deadline</label>
                <input placeholder='Deadline' className="w-52 p-2 shadow-md text-gray-900 border-gray-500 rounded-lg bg-gray-50 sm:text-xs" type="date" id="deadline" value="2023-01-01" min="2023-01-01" max="2050-12-20" />
            </div>
            <div className="m-8 ">
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium  text-zinc-800">Logo link</label>
                <input type="text" placeholder="img.com/logo.png" id="logo" className="block w-full p-2 shadow-md text-gray-900  border-gray-500 rounded-lg bg-gray-50 sm:text-xs focus:border-slate-500" />
            </div>
            <div className="m-8">
                <div className="flex">
                    <div className="flex items-center h-5">
                        <div className='w-4 h-4 rounded-[50%] border-gray-500 border-[1px] flex items-center justify-center cursor-pointer'
                            onClick={() => setContactWay('link')}
                        >
                            {contactWay === "link" && <span className='block w-2 h-2 rounded-[50%] bg-blue-500'></span>}
                        </div>
                    </div>
                    <div className="ml-2 text-sm">
                        <label htmlFor="helper-radio" className="font-medium text-zinc-800 ">Link</label>
                        <p id="helper-radio-textt" className="text-xs font-normal text-gray-500">Link to the job form or career site</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex items-center h-5">
                        <div className='w-4 h-4 rounded-[50%] border-gray-500 border-[1px] flex items-center justify-center cursor-pointer'
                            onClick={() => setContactWay('email')}
                        >
                            {contactWay === "email" && <span className='block w-2 h-2 rounded-[50%] bg-blue-500'></span>}
                        </div>
                    </div>
                    <div className="ml-2 text-sm">
                        <label htmlFor="helper-radio" className="font-medium text-zinc-800 ">Email</label>
                        <p id="helper-radio-text" className="text-xs font-normal text-gray-500" >Opprtunity via mailing the recuriter</p>
                    </div>
                </div>
            </div>
            <div className="m-8 ">
                <label id="formlink" htmlFor="small-input" className="block mb-2 text-sm font-medium  text-zinc-800">Link</label>
                <input type="text" placeholder="www.instabug.com/career" id="formLink" className="block w-full p-2 shadow-md text-gray-900  border-gray-500 rounded-lg bg-gray-50 sm:text-xs focus:border-slate-500" />
            </div>


        </div>
    )
}

