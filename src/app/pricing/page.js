import React from 'react'
import Link from 'next/link';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Switcher from '../components/Switcher';
import Feature from '../components/Feature';
import ExploreJob from '../components/Explore-job';

import {MdOutlineCheckCircleOutline} from '../assets/icons/vander'

export default function Pricing() {
   
    return (
        <>
            <Navbar navClass='justify-end nav-light' />

            <section className="relative table w-full py-36 bg-[url('/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-emerald-900/90"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Pricing Plans</h3>

                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Jobstack</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Pricing</li>
                    </ul>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-[30px]">
                        <div className="group border border-transparent relative shadow hover:shadow-md dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 transition-all duration-500">
                            <div className="p-6 py-8">
                                <h6 className="text-lg font-bold uppercase mb-5 text-emerald-600">Free</h6>

                                <div className="flex mb-5">
                                    <span className="text-xl font-semibold">$</span>
                                    <span className="price text-4xl font-semibold mb-0">0</span>
                                    <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                </div>

                                <ul className="list-none text-slate-400 border-t border-gray-100 dark:border-gray-700 pt-5">
                                    <li className="my-2 flex items-center ms-0"><MdOutlineCheckCircleOutline className=" text-emerald-600 text-xl me-2"/> Full Access</li>
                                    <li className="my-2 flex items-center ms-0"><MdOutlineCheckCircleOutline className=" text-emerald-600 text-xl me-2"/> Source Files</li>
                                    <li className="my-2 flex items-center ms-0"><MdOutlineCheckCircleOutline className=" text-emerald-600 text-xl me-2"/> Free Appointments</li>
                                    <li className="my-2 flex items-center ms-0"><MdOutlineCheckCircleOutline className=" text-emerald-600 text-xl me-2"/> Enhanced Security</li>
                                </ul>
                                <Link href="#" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md mt-5">Get Started</Link>
                            </div>
                        </div>

                        <div className="group border border-emerald-600 relative shadow hover:shadow-md dark:shadow-gray-800 rounded-md z-2 bg-gray-50 dark:bg-slate-800 transition-all duration-500">
                            <div className="p-6 py-8">
                                <h6 className="text-lg font-bold uppercase mb-5 text-emerald-600">Business</h6>

                                <div className="flex mb-5">
                                    <span className="text-xl font-semibold">$</span>
                                    <span className="price text-4xl font-semibold mb-0">39</span>
                                    <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                </div>

                                <ul className="list-none text-slate-400 border-t border-gray-100 dark:border-gray-700 pt-5">
                                    <li className="my-2 flex items-center ms-0"><MdOutlineCheckCircleOutline className=" text-emerald-600 text-xl me-2"/> Full Access</li>
                                    <li className="my-2 flex items-center ms-0"><MdOutlineCheckCircleOutline className=" text-emerald-600 text-xl me-2"/> Source Files</li>
                                    <li className="my-2 flex items-center ms-0"><MdOutlineCheckCircleOutline className=" text-emerald-600 text-xl me-2"/> Free Appointments</li>
                                    <li className="my-2 flex items-center ms-0"><MdOutlineCheckCircleOutline className=" text-emerald-600 text-xl me-2"/> Enhanced Security</li>
                                </ul>
                                <Link href="#" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md mt-5">Signup</Link>
                            </div>
                        </div>

                        <div className="group border border-transparent relative shadow hover:shadow-md dark:shadow-gray-800 rounded-md z-2 bg-white dark:bg-slate-900 transition-all duration-500">
                            <div className="p-6 py-8">
                                <h6 className="text-lg font-bold uppercase mb-5 text-emerald-600">Professional</h6>

                                <div className="flex mb-5">
                                    <span className="text-xl font-semibold">$</span>
                                    <span className="price text-4xl font-semibold mb-0">59</span>
                                    <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                </div>

                                <ul className="list-none text-slate-400 border-t border-gray-100 dark:border-gray-700 pt-5">
                                    <li className="my-2 flex items-center ms-0"><MdOutlineCheckCircleOutline className=" text-emerald-600 text-xl me-2"/> Full Access</li>
                                    <li className="my-2 flex items-center ms-0"><MdOutlineCheckCircleOutline className=" text-emerald-600 text-xl me-2"/> Source Files</li>
                                    <li className="my-2 flex items-center ms-0"><MdOutlineCheckCircleOutline className=" text-emerald-600 text-xl me-2"/> Free Appointments</li>
                                    <li className="my-2 flex items-center ms-0"><MdOutlineCheckCircleOutline className=" text-emerald-600 text-xl me-2"/> Enhanced Security</li>
                                </ul>
                                <Link href="#" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md mt-5">Try it Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Feature />
                <ExploreJob />
            </section>
            <Footer />
            <Switcher/>
        </>
    )
}
