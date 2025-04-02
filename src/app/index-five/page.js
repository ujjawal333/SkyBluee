import React from 'react'
import Image from 'next/image';

import Navbar from '../components/Navbar';
import PopularCategories from '../components/Popular-Categories';
import PopularJobsfour from '../components/Popular-Jobs-four';
import BestCompanies from '../components/Best-companies';
import Feature from '../components/Feature';
import News from '../components/News';
import Footer from '../components/Footer';
import JobCounter from '../components/Job-counter';
import Switcher from '../components/Switcher';
import ExploreJob from '../components/Explore-job';
import Form from '../components/form';
import MillionsJob from '../components/Millions-job';


export default function IndexFive() {
    return (
        <>
            <Navbar navClass='justify-end' isContainerFluid={true} />
            <section className="relative table md:pt-60 pt-36 w-full bg-gradient-to-b from-emerald-600/20 dark:from-emerald-600/40 via-emerald-600/10 dark:via-emerald-600/20 to-transparent">
                <div className="container z-1">
                    <div className="grid grid-cols-1 text-center relative">
                        <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Join our world-class team <br /> of creators & dreamers</h4>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto">Find Jobs, Employment & Career Opportunities. Some of the companies weve helped recruit excellent applicants over the years.</p>

                        <div className="d-flex" id="reserve-form">
                            <div className="md:w-5/6 mx-auto">
                                <div className="lg:col-span-10 mt-8">
                                    <div className="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3">
                                        <Form/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <span className="text-slate-400"><span className="text-slate-900 dark:text-white">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                        </div>

                        <div className="absolute -top-20 start-1/2 -translate-x-1/2">
                            <div className="size-10 animate-[bounce_2s_infinite] bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
                                <Image src="/images/company/facebook-logo.png" className="size-6" alt="" width={24} height={24}/>
                            </div>
                        </div>

                        <div className="absolute top-[40%] start-10">
                            <div className="size-10 animate-[spin_5s_linear_infinite] bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
                                <Image src="/images/company/google-logo.png" className="size-6" alt="" width={24} height={24}/>
                            </div>
                        </div>

                        <div className="absolute top-[40%] end-1">
                            <div className="size-10 bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
                                <Image src="/images/company/android.png" className="size-6" alt="" width={24} height={24}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="grid grid-cols-1">
                        <Image src="/images/hero/bg6.png" alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}}/>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <JobCounter />
                <PopularCategories />
                <div className="container md:mt-24 md:pb-16 mt-16">
                    <MillionsJob/>
                </div>
            </section>

            <section className="relative md:pb-24 pb-16 overflow-hidden">
                <PopularJobsfour />
                <BestCompanies />
                <Feature />
                <News />
                <ExploreJob/>
            </section >
            <Footer />
            <Switcher/>
        </>
    )
}