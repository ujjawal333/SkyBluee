import React from 'react'
import Link from 'next/link'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Switcher from '../components/Switcher';

export default function JobApply() {
    return (
        <>
            <Navbar navClass='justify-end nav-light' />
            <section className="relative table w-full py-36 bg-top bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/hero/bg.jpg')"}}>
                <div className="absolute inset-0 bg-emerald-900/90"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Back-End Developer</h3>

                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Jobstack</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Job apply form</li>
                    </ul>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-slate-50 dark:text-slate-800">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative bg-slate-50 dark:bg-slate-800 lg:py-24 py-16">
                <div className="container">
                    <div className="md:flex justify-center">
                        <div className="lg:w-2/4 md:w-2/3">
                            <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <form className="text-left">
                                    <div className="grid grid-cols-1">
                                        <div className='mb-4 ltr:text-left rtl:text-right'>
                                            <label className="font-semibold">Categories</label>
                                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option>Web Designer</option>
                                                <option>Web Developer</option>
                                                <option>UI / UX Desinger</option>
                                            </select>

                                        </div>

                                        <div className="mb-4 ltr:text-left rtl:text-right">
                                            <label className="font-semibold" htmlFor="RegisterName">Your Name:</label>
                                            <input id="RegisterName" type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="Harry" />
                                        </div>

                                        <div className="mb-4 ltr:text-left rtl:text-right">
                                            <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
                                            <input id="LoginEmail" type="email" className="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="name@example.com" />
                                        </div>

                                        <div className="mb-4 ltr:text-left rtl:text-right">
                                            <label className="font-semibold" htmlFor="PhoneNo">Phone No.:</label>
                                            <input id="PhoneNo" type="number" className="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="+458 854-8965" />
                                        </div>

                                        <div className='mb-4 ltr:text-left rtl:text-right'>
                                            <label className="font-semibold">Location</label>
                                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option value="NY">New York</option>
                                                <option value="MC">North Carolina</option>
                                                <option value="SC">South Carolina</option>
                                            </select>
                                        </div>

                                        <div className="mb-2 ltr:text-left rtl:text-right">
                                            <label htmlFor="comments" className="font-semibold">Coverting Letter:</label>
                                            <textarea name="comments" id="comments" className="form-input border border-slate-100 dark:border-slate-800 mt-1 textarea" placeholder="Message :"></textarea>
                                        </div>

                                        <div className="mb-4 ltr:text-left rtl:text-right">
                                            <label className="font-semibold" htmlFor="multiple_files">Upload Resume:</label>
                                            <input className="relative form-input border border-slate-100 dark:border-slate-800 file:h-10 file:-mx-3 file:-my-2 file:cursor-pointer file:rounded-none file:border-0 file:px-3 file:text-neutral-700 bg-clip-padding px-3 py-1.5 file:me-3 mt-1" id="multiple_files" type="file" multiple />
                                        </div>

                                        <div>
                                            <button type="submit" id="submit" name="send" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Switcher/>
        </>
    )
}
