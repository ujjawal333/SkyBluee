import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Feature from '../components/Feature';
import ExploreJob from '../components/Explore-job';
import JobListCompFive from '../components/job-list-comp-five';
import Switcher from '../components/Switcher';
import Form from '../components/form';



export default function JobListFive() {
    return (
        <>
            <Navbar navClass='justify-end nav-light' />

            <section className="relative table w-full py-36 bg-[url('/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
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
            <section className="relative -mt-[42px] md:pb-24 pb-16">
                <div className="container z-1">
                    <div className="d-flex" id="reserve-form">
                        <div className="md:w-5/6 mx-auto">
                            <div className="lg:col-span-10">
                                <div className="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3">
                                    <Form/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <JobListCompFive />
                <Feature />
              <ExploreJob />
            </section>
            <Footer />
            <Switcher/>

        </>
    )
}