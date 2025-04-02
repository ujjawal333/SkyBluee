'use client'
import React from 'react'
import Link from 'next/link';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Switcher from '../components/Switcher';

import { FiDollarSign } from '../assets/icons/vander';

export default function JobPost() {
    return (
        <>
            <Navbar navClass='justify-end nav-light' />
            <section className="relative table w-full py-36 bg-[url('/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-emerald-900/90"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Job Post</h3>

                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Jobstack</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Job Post</li>
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
                    <div className="lg:flex justify-center">
                        <div className="lg:w-2/3">
                            <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <form className="text-left">
                                    <div className="grid grid-cols-1">
                                        <h5 className="text-lg font-semibold">Job Details:</h5>
                                    </div>

                                    <div className="grid grid-cols-12 gap-4 mt-4">
                                        <div className="col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold" htmlFor="RegisterName">Job Title:</label>
                                            <input id="RegisterName" type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="Web Developer" />
                                        </div>

                                        <div className="col-span-12 ltr:text-left rtl:text-right">
                                            <label htmlFor="comments" className="font-semibold">Job Description:</label>
                                            <textarea name="comments" id="comments" className="form-input border border-slate-100 dark:border-slate-800 mt-1 textarea" placeholder="Write Job Description :"></textarea>
                                        </div>

                                        <div className="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold">Categories:</label>
                                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option>Web Designer</option>
                                                <option>Web Developer</option>
                                                <option>UI / UX Desinger</option>
                                            </select>

                                        </div>

                                        <div className="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold">Job Type:</label>
                                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option >Full Time</option>
                                                <option >Part Time</option>
                                                <option >Freelancer</option>
                                                <option >Remote Work</option>
                                                <option >Office Work</option>
                                            </select>

                                        </div>

                                        <div className="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold">Salary:</label>
                                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option >Hourly</option>
                                                <option >Monthly</option>
                                            </select>

                                        </div>

                                        <div className="md:col-span-3 col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold md:invisible md:block hidden">Min:</label>
                                            <div className="relative mt-1">
                                                <span className="size-10 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 absolute top-0 start-0 overflow-hidden rounded">
                                                    <FiDollarSign className="size-4 absolute top-3 start-3"></FiDollarSign>
                                                </span>
                                                <input type="number" className="form-input border border-slate-100 dark:border-slate-800 ps-12" placeholder="min" name="minsalary" />
                                            </div>
                                        </div>

                                        <div className="md:col-span-3 col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold md:invisible md:block hidden">Max:</label>
                                            <div className="relative mt-1">
                                                <span className="size-10 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 absolute top-0 start-0 overflow-hidden rounded">
                                                    <FiDollarSign className="size-4 absolute top-3 start-3"></FiDollarSign>
                                                </span>
                                                <input type="number" className="form-input border border-slate-100 dark:border-slate-800 ps-12" placeholder="max" name="maxsalary" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 mt-8">
                                        <h5 className="text-lg font-semibold">Skill & Experience:</h5>
                                    </div>

                                    <div className="grid grid-cols-12 gap-4 mt-4">
                                        <div className="col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold" htmlFor="Skillname">Skills:</label>
                                            <input id="Skillname" type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="Web Developer" />
                                        </div>

                                        <div className="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold" htmlFor="Qualificationname">Qualifications:</label>
                                            <input id="Qualificationname" type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="Qualifications" />
                                        </div>

                                        <div className="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold" htmlFor="Experiencename">Experience:</label>
                                            <input id="Experiencename" type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="Experience" />
                                        </div>

                                        <div className="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold">Industry:</label>
                                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option>Banking</option>
                                                <option>Biotechnology</option>
                                                <option>Aviation</option>
                                            </select>

                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 mt-8">
                                        <h5 className="text-lg font-semibold">Address:</h5>
                                    </div>

                                    <div className="grid grid-cols-12 gap-4 mt-4">
                                        <div className="col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold" htmlFor="Address">Address:</label>
                                            <input id="Address" type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="Address" />
                                        </div>

                                        <div className="md:col-span-4 col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold">Country:</label>
                                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option>New York</option>
                                                <option>North Carolina</option>
                                                <option>South Carolina</option>
                                            </select>

                                        </div>

                                        <div className="md:col-span-4 col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold">State:</label>
                                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option>California</option>
                                                <option>Texas</option>
                                                <option>Florida</option>
                                            </select>

                                        </div>

                                        <div className="col-span-12 ltr:text-left rtl:text-right">
                                            <div className="w-full leading-[0] border-0">
                                                <iframe title="job-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: 0 }} className="w-full h-[200px] rounded shadow" allowFullScreen></iframe>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 mt-4">
                                        <div>
                                            <button type="submit" id="submit" name="send" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white">Post Now</button>
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