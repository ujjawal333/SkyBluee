'use client'
import React from 'react'
import Link from 'next/link';
import { Link as Link2 } from 'react-scroll';

import Accordion from '../components/accordion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExploreJob from '../components/Explore-job';
import Switcher from '../components/Switcher';

export default function Faqs() {
    return (
        <>
            <Navbar navClass='justify-end nav-light' />
            <section className="relative table w-full py-36 bg-[url('/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-emerald-900/90"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Frequently Asked Questions</h3>

                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/index">Jobstack</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/helpcenter-overview">Helpcenter</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">FAQs</li>
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
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-5">
                            <div className="rounded-md shadow dark:shadow-gray-700 p-6 sticky top-20">
                                <ul className="list-unstyled sidebar-nav mb-0 py-0" id="navmenu-nav">
                                    <li className="navbar-item p-0"><Link2 to="tech" spy={true} activeclassname="active"
                                        smooth={true}
                                        duration={500} className="text-base font-medium navbar-link">Buying Questions</Link2></li>
                                    <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeclassname="active" smooth={true} duration={500} to="general" className="text-base font-medium navbar-link">General Questions</Link2></li>
                                    <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeclassname="active" smooth={true} duration={500} to="payment" className="text-base font-medium navbar-link">Payments Questions</Link2></li>
                                    <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeclassname="active" smooth={true} duration={500} to="support" className="text-base font-medium navbar-link">Support Questions</Link2></li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-7">
                            <div id="tech">
                                <h5 className="text-2xl font-semibold">Buying Product</h5>
                                <Accordion/>
                            </div>

                            <div id="general" className="mt-8">
                                <h5 className="text-2xl font-semibold">General Questions</h5>
                                <Accordion/>
                            </div>

                            <div id="payment" className="mt-8">
                                <h5 className="text-2xl font-semibold">Payments Questions</h5>
                                <Accordion/>
                            </div>

                            <div id="support" className="mt-8">
                                <h5 className="text-2xl font-semibold">Support Questions</h5>
                                <Accordion/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Have Question ? Get in touch!</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                        <div className="mt-6">
                            <Link2 to="/contact" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"><i className="uil uil-phone align-middle me-2"></i> Contact us</Link2>
                        </div>
                    </div>
                </div>
            </section>
            <ExploreJob/>
            <Footer />
            <Switcher/>
        </>
    )
}
