import React from 'react'
import Link from 'next/link';

import Navbar from '../components/Navbar';
import Works from '../components/How-Work';
import BrowseByCategories from '../components/BrowseByCategories';
import PopularJobsSeven from '../components/Popular-Jobs-Seven';
import QuesAnswer from '../components/Question-Answer';
import Footer from '../components/Footer';
import JobCounter from '../components/Job-counter';
import Switcher from '../components/Switcher';
import ExploreJob from '../components/Explore-job'
import Form from '../components/form';
import MillionsJob from '../components/Millions-job';

import {MdOutlineCheckCircleOutline} from '../assets/icons/vander'

export default function IndexSeven() {

    return (
        <>
            <Navbar navClass='justify-end nav-light' />
            <section className="relative flex py-36 md:h-screen h-auto items-center bg-[url('/images/hero/bg6.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                    <iframe title="iframe-1" src="https://player.vimeo.com/video/354421650?background=1&autoplay=1&loop=1&byline=0&title=0" className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2  -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"></iframe>


                    <iframe title="iframe-2" src="https://www.youtube.com/embed/JsNvHJsufhI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2  -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"></iframe>

                </div>
                <div className="absolute inset-0 bg-emerald-900/80"></div>
                <div className="container z-1">
                    <div className="grid grid-cols-1 text-center mt-10 relative">
                        <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold text-white">Got Talent ? <br /> Meet Opportunity</h4>
                        <p className="text-white/50 text-lg max-w-xl mx-auto">Find Jobs, Employment & Career Opportunities. Some of the companies weve helped recruit excellent applicants over the years.</p>

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
                            <span className="text-white/60"><span className="text-white">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <Works />
                <BrowseByCategories />
            </section>
            <section className="py-24 w-full table relative bg-[url('/images/hero/bg3.jpg')] bg-center bg-no-repeat bg-cover jarallax" data-jarallax data-speed="0.5">
                <div className="absolute inset-0 bg-slate-900/40"></div>
                <div className="container relative">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
                        <div>
                            <h5 className="text-xl font-semibold text-white">Register for Candidate or User</h5>

                            <ul className="list-none text-white/50 mt-4">
                                <li className="mb-1 flex items-center ms-0"><MdOutlineCheckCircleOutline className=" text-white text-xl me-2" />  It has survived not only five centuries</li>
                                <li className="mb-1 flex items-center ms-0"><MdOutlineCheckCircleOutline className=" text-white text-xl me-2" />  There are many variations of passages</li>
                            </ul>

                            <div className="mt-4">
                                <Link href="/candidate-profile" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-full">Apply Now</Link>
                            </div>
                        </div>

                        <div>
                            <h5 className="text-xl font-semibold text-white">Register for Companies</h5>

                            <ul className="list-none text-white/50 mt-4">
                                <li className="mb-1 flex items-center ms-0"><MdOutlineCheckCircleOutline className=" text-white text-xl me-2" /> Many desktop publishing packages</li>
                                <li className="mb-1 flex items-center ms-0"><MdOutlineCheckCircleOutline className=" text-white text-xl me-2" /> Contrary to popular belief</li>
                                <li className="mb-1 flex items-center ms-0"><MdOutlineCheckCircleOutline className=" text-white text-xl me-2" /> It is a long established fact that a reader</li>
                            </ul>

                            <div className="mt-4">
                                <Link href="/job-post" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-full">Post Jobs</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="relative md:py-24 py-16">
                <PopularJobsSeven />
                <div className="container md:mt-24 md:pb-24 pb-16 mt-16">
                    <MillionsJob/>
                </div>
                <JobCounter />
                <QuesAnswer />
                <ExploreJob/>
            </section>
            <Footer />
            <Switcher/>
        </>
    )
}
