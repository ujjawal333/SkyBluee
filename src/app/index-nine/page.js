import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {FiBriefcase, FiPlus, FiBell} from '../assets/icons/vander'

import Navbar from '../components/Navbar'
import Counter from '../components/counter'
import MillionsJob from '../components/Millions-job'
import PopularJobssix from '../components/Popular-Jobs-six'
import CtaTwo from '../components/cta-two'
import FindBestCompanies from '../components/FindBestCompanies'
import News from '../components/News'
import Footer from '../components/Footer'
import Switcher from '../components/Switcher'
 
export default function IndexNine() {
  return (
    <>
    <Navbar/>
    <section className="relative table w-full py-36 pb-0 lg:py-44 lg:pb-0 bg-orange-600/5 dark:bg-orange-600/10">
        <div className="container relative">
            <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-7">
                    <div className="md:me-6 md:mb-20">
                        <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Start Building <br/> Your <span className="text-emerald-600">Dream Career</span><br/> with Jobstack</h4>
                        <p className="text-lg max-w-xl">Find Jobs, Employment & Career Opportunities. Some of the companies weve helped recruit excellent applicants over the years.</p>
                    
                        <div className="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
                            <div className="lg:col-span-10 mt-8">
                                <div className="bg-white dark:bg-slate-900 border-0 shadow rounded p-3">
                                    <form action="#">
                                        <div className="registration-form text-dark text-start">
                                            <div className="grid md:grid-cols-12 grid-cols-1 md:gap-0 gap-6">
                                                <div className="lg:col-span-8 md:col-span-7">
                                                    <div className="filter-search-form relative filter-border">
                                                        <FiBriefcase className="icons"/>
                                                        <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords"/>
                                                    </div>
                                                </div>

                                                <div className="lg:col-span-4 md:col-span-5">
                                                    <input type="submit" id="search" name="search" style={{height:'60px'}} className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-full" value="Search"/>
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

                <div className="lg:col-span-5">
                    <div className="relative">
                        <Image src="/images/hero.png" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt=""/>

                        <div className="absolute lg:top-48 top-56 xl:-start-20 lg:-start-10 md:-start-4 start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 z-2">
                            <h5 className="text-lg font-semibold mb-3">5k+ candidates get job</h5>
                            
                            <ul className="list-none relative">
                                <li className="inline-block relative"><Link href=""><Image src="/images/team/01.jpg" width={40} height={40} className="size-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                                <li className="inline-block relative -ms-3"><Link href=""><Image src="/images/team/02.jpg" width={40} height={40} className="size-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                                <li className="inline-block relative -ms-3"><Link href=""><Image src="/images/team/03.jpg" width={40} height={40} className="size-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                                <li className="inline-block relative -ms-3"><Link href=""><Image src="/images/team/04.jpg" width={40} height={40} className="size-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                                <li className="inline-block relative -ms-3"><Link href=""><Image src="/images/team/05.jpg" width={40} height={40} className="size-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                                <li className="inline-block relative -ms-3"><Link href="" className="btn btn-icon table-cell rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white hover:z-1 hover:scale-105"><FiPlus className='ms-2'/></Link></li>
                            </ul>
                        </div>

                        <div className="absolute flex justify-between items-center bottom-6 lg:-end-10 end-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-max">
                            <FiBell className="text-[24px] text-amber-500"/>
                            <p className="text-lg font-semibold mb-0 ms-2">Job Alert Subscribe</p>
                        </div>

                        <div className="overflow-hidden after:content-[''] after:absolute after:size-16 after:bg-emerald-600/30 after:top-20 after:start-20 after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>
                    </div>
                </div>
            </div>
        </div>
    </section> 

    <section className="relative md:py-24 py-16">
        <div className="container md:pb-16">
            <MillionsJob/>
        </div>

        <PopularJobssix/>
        <div className="container md:pt-24 pt-16">
            <Counter/>
        </div>
    </section>

    <CtaTwo/>

    <section className="relative md:py-24 py-16">
        <FindBestCompanies/>

        <News/>
    </section>
    <Footer/>
    <Switcher/>
    </>
  )
}
