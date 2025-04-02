import React from 'react'
import Link from 'next/link';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExploreJob from '../components/Explore-job';
import Switcher from '../components/Switcher';

import { guidesData } from '../components/Data';

export default function Guides() {
    return (
        <>
            <Navbar navClass='justify-end nav-light' />
            <section className="relative table w-full py-36  bg-top bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/hero/bg.jpg')"}}>
                <div className="absolute inset-0 bg-emerald-900/90"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Job Vacancies</h3>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        {guidesData.map((item,index)=>{
                            return(
                                <div className="" key={index}>
                                    <h5 className="font-semibold text-xl">{item.title}</h5>
                                    <ul className="list-none mt-4">
                                        {item.feature.map((el,index)=>{
                                            return(
                                                <li className="mt-2 ms-0" key={index}><Link href="#" className="text-slate-400"><i className="mdi mdi-arrow-right text-emerald-600 me-2"></i>{el}</Link></li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <ExploreJob/>
            </section>
            <Footer />
            <Switcher/>
        </>
    )
}
