import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '../components/Navbar';
import PopularCategories from '../components/Popular-Categories';
import FindBestCompanies from '../components/FindBestCompanies';
import News from '../components/News';
import Footer from '../components/Footer';
import JobCounter from '../components/Job-counter';
import PopularJobssix from '../components/Popular-Jobs-six';
import Switcher from '../components/Switcher';
import FormThree from '../components/form-three';
import MillionsJob from '../components/Millions-job';
import CtaTwo from '../components/cta-two';

import { FiBell, FiPlus } from '../assets/icons/vander'

export default function IndexSix() {
    return (
        <>
            <Navbar navClass='justify-end' />
            <section className="pt-36 md:h-screen h-auto items-center flex relative overflow-hidden" id="home">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
                            <div className="lg:me-8">
                                <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Find the <span className="before:block before:absolute before:-inset-2 before:-skew-y-6 before:bg-emerald-600 relative inline-block"><span className="relative text-white font-bold">Best Job</span></span> <br /> offer for you.</h4>

                                <p className="text-slate-400 text-lg max-w-xl">Find Jobs, Employment & Career Opportunities. Some of the companies weve helped recruit excellent applicants over the years.</p>

                                <div className="bg-white dark:bg-slate-900 border-0 shadow rounded p-3 mt-4">
                                    <FormThree/>
                                </div>

                                <div className="mt-2">
                                    <span className="text-slate-400"><span className="text-dark">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="relative">
                                <div className="relative flex justify-end">
                                    <Image src="/images/about/ab01.jpg" className="lg:w-[400px] w-[280px] rounded-xl shadow dark:shadow-gray-700" alt="" width={0} height={0} sizes='100vw' style={{height:"auto", width:"100%"}} />
                                    <div className="absolute lg:bottom-20 -bottom-24 xl:-end-20 lg:-end-10 end-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 z-2">
                                        <h5 className="text-lg font-semibold mb-3">5k+ candidates get job</h5>

                                        <ul className="list-none relative">
                                            <li className="inline-block relative"><Link href="#"><Image src="/images/team/01.jpg" width={48} height={48} className="size-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                            <li className="inline-block relative -ms-3"><Link href="#"><Image src="/images/team/02.jpg"  width={48} height={48} className="size-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                            <li className="inline-block relative -ms-3"><Link href="#"><Image src="/images/team/03.jpg"  width={48} height={48} className="size-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                            <li className="inline-block relative -ms-3"><Link href="#"><Image src="/images/team/04.jpg"  width={48} height={48} className="size-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                            <li className="inline-block relative -ms-3"><Link href="#"><Image src="/images/team/05.jpg"  width={48} height={48} className="size-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                            <li className="inline-block relative -ms-3"><Link href="#" className="btn btn-icon table-cell rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white hover:z-1 hover:scale-105 "><FiPlus className="inline-block justify-center items-center"/></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="absolute md:-start-5 start-0 -bottom-16">
                                    <Image src="/images/about/ab04.jpg" className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-xl" alt=""  width={0} height={0} sizes='100vw' style={{height:"auto",width:"100%"}}/>

                                    <div className="absolute flex justify-between items-center -top-6 md:-start-10 start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-max">
                                        <FiBell width={24} className="text-amber-500"/>
                                        <p className="text-lg font-semibold mb-0 ms-2">Job Alert Subscribe</p>
                                    </div>
                                </div>

                                <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-emerald-600/5 via-emerald-600/50 from-emerald-600 bottom-1/2 translate-y-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -z-1 rounded-full">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:pb-24 pb-16">
                <PopularCategories />
                <div className="container md:mt-24 md:pb-16 mt-16">
                    <MillionsJob/>
                </div>

            <PopularJobssix />
            </section>
            <CtaTwo/>
            <section className="relative md:py-24 py-16">
                <JobCounter />
            </section>
            <section className="relative md:pb-24 pb-16">
                <FindBestCompanies />
                <News /> 
            </section>
            <Footer />
            <Switcher/>
        </>
    )
}
