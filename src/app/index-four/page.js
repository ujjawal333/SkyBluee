import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Switcher from '../components/Switcher';
import BestCompanies from '../components/Best-companies';
import Feature from '../components/Feature';
import News from '../components/News'
import PopularJobsThree from '../components/Popular-Jobs-three'
import MillionsJob from '../components/Millions-job';

import {FiBriefcase} from '../assets/icons/vander'

export default function IndexFour() {
    return (
        <>
            <Navbar navClass="justify-start" topnavClass="bg-white dark:bg-slate-900" />

            <section className="lg:h-screen py-36 h-auto relative flex items-center background-effect overflow-hidden  bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/hero/bg2.jpg')"}}>
            <div className="container-fluid">
                    <div className="absolute inset-0 z-0 bg-[url('/images/hero/curve-shape.png')] dark:bg-[url('/images/hero/curve-shape-dark.png')] bg-top bg-cover"></div>
                </div>

                <div className="container z-1">
                    <div className="grid grid-cols-1 mt-10">
                        <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Make The Best Move to <br /> Choose Your <span className="text-emerald-600">New Job</span></h4>
                        <p className="text-slate-400 text-lg max-w-xl">Find Jobs, Employment & Career Opportunities. Some of the companies weve helped recruit excellent applicants over the years.</p>

                        <div className="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
                            <div className="lg:col-span-7 mt-8">
                                <div className="bg-white dark:bg-slate-900 border-0 shadow rounded p-3">
                                    <form action="#">
                                        <div className="registration-form text-dark text-start">
                                            <div className="grid md:grid-cols-12 grid-cols-1 md:gap-0 gap-6">
                                                <div className="lg:col-span-8 md:col-span-7">
                                                    <div className="filter-search-form relative filter-border">
                                                        <FiBriefcase className="icons"/>
                                                        <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords" />
                                                    </div>
                                                </div>

                                                <div className="lg:col-span-4 md:col-span-5">
                                                    <input type="submit" id="search" name="search" style={{ height: '60px' }} className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-full" value="Search" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <span className="text-slate-400"><span className="text-dark">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 bg-emerald-600/5"></div>
                <ul className="circles p-0 mb-0">
                    <li className="brand-img"><Image src="/images/company/shree-logo.png" className="size-9" alt="" width={34} height={32} /></li>
                    <li className="brand-img"><Image src="/images/company/skype.png" className="size-9" alt="" width={34} height={32}/></li>
                    <li className="brand-img"><Image src="/images/company/snapchat.png" className="size-9" alt="" width={34} height={32}/></li>
                    <li className="brand-img"><Image src="/images/company/spotify.png" className="size-9" alt="" width={34} height={32}/></li>
                    <li className="brand-img"><Image src="/images/company/telegram.png" className="size-9" alt="" width={34} height={32}/></li>
                    <li className="brand-img"><Image src="/images/company/whatsapp.png" className="size-9" alt="" width={34} height={32}/></li>
                    <li className="brand-img"><Image src="/images/company/android.png" className="size-9" alt="" width={34} height={32}/></li>
                    <li className="brand-img"><Image src="/images/company/facebook-logo.png" className="size-9" alt="" width={34} height={32}/></li>
                    <li className="brand-img"><Image src="/images/company/linkedin.png" className="size-9" alt="" width={34} height={32}/></li>
                    <li className="brand-img"><Image src="/images/company/google-logo.png" className="size-9" alt="" width={34} height={32}/></li>
                </ul>
            </section>
            <div className="relative">
                <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
                    <Link href=""><i className="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 size-12 mx-auto shadow-md dark:shadow-gray-800"></i></Link>
                </div>

                <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <section className="relative md:py-24 py-16">
                <div className="container md:pb-16">
                    <MillionsJob/>
                </div>

                <PopularJobsThree />
                <BestCompanies />
                <Feature />
                <News />
            </section>
            <Footer />
            <Switcher/>
        </>
    )
}
