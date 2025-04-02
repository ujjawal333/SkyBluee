import React from 'react';
import Link from 'next/link';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Switcher from '../components/Switcher';
import JobDetailComp from '../components/Job-detail-comp';
import ExploreJob from '../components/Explore-job';

import {FiUserCheck, FiMapPin, FiMonitor, FiBriefcase, FiBook, FiDollarSign, FiClock, FiArrowRight} from '../assets/icons/vander'

export default function JobDetailOne(props) {
    return (
        <>
            <Navbar navClass='justify-end nav-light' />
            <section className="relative table w-full py-36 bg-top bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/hero/bg.jpg')"}}>
                <div className="absolute inset-0 bg-emerald-900/90"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Back-End Developer</h3>

                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Jobstack</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/job-grid-two">Jobs</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Job Detail</li>
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
            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-6">
                            <div className="shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                                <div className="p-6">
                                    <h5 className="text-lg font-semibold">Job Information</h5>
                                </div>
                                <div className="p-6 border-t border-slate-100 dark:border-t-gray-700">
                                    <ul className="list-none">
                                        <li className="flex items-center ms-0">
                                            <FiUserCheck className="size-5"/>

                                            <div className="ms-4">
                                                <p className="font-medium">Employee Type:</p>
                                                <span className="text-emerald-600 font-medium text-sm">Full Time</span>
                                            </div>
                                        </li>

                                        <li className="flex items-center ms-0 mt-3">
                                            <FiMapPin className="size-5"/>

                                            <div className="ms-4">
                                                <p className="font-medium">Location:</p>
                                                <span className="text-emerald-600 font-medium text-sm">Beijing, China</span>
                                            </div>
                                        </li>

                                        <li className="flex items-center ms-0 mt-3">
                                            <FiMonitor className="size-5"/>

                                            <div className="ms-4">
                                                <p className="font-medium">Job Type:</p>
                                                <span className="text-emerald-600 font-medium text-sm">Back-end Developer</span>
                                            </div>
                                        </li>

                                        <li className="flex items-center ms-0 mt-3">
                                            <FiBriefcase className="size-5"/>

                                            <div className="ms-4">
                                                <p className="font-medium">Experience:</p>
                                                <span className="text-emerald-600 font-medium text-sm">2+ years</span>
                                            </div>
                                        </li>

                                        <li className="flex items-center ms-0 mt-3">
                                            <FiBook className="size-5"/>

                                            <div className="ms-4">
                                                <p className="font-medium">Qualifications:</p>
                                                <span className="text-emerald-600 font-medium text-sm">MCA</span>
                                            </div>
                                        </li>

                                        <li className="flex items-center ms-0 mt-3">
                                            <FiDollarSign className="size-5"/>

                                            <div className="ms-4">
                                                <p className="font-medium">Salary:</p>
                                                <span className="text-emerald-600 font-medium text-sm">$4000 - $4500</span>
                                            </div>
                                        </li>

                                        <li className="flex items-center ms-0 mt-3">
                                            <FiClock className="size-5"/>

                                            <div className="ms-4">
                                                <p className="font-medium">Date posted:</p>
                                                <span className="text-emerald-600 font-medium text-sm">28th Feb, 2023</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-6">
                            <h5 className="text-lg font-semibold">Job Description:</h5>

                            <p className="text-slate-400 mt-4">One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.</p>
                            <p className="text-slate-400 mt-4">This means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces.</p>
                            <p className="text-slate-400 mt-4">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>

                            <h5 className="text-lg font-semibold mt-6">Responsibilities and Duties: </h5>
                            <p className="text-slate-400 mt-4">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                            <ul className="list-none">
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1" /><span>Participate in requirements analysis</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1" /><span>Write clean, scalable code using C# and .NET frameworks</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1" /><span>Test and deploy applications and systems</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1" /><span>Revise, update, refactor and debug code</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1" /><span>Improve existing software</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1" /><span>Develop documentation throughout the software development life cycle (SDLC)</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1" /><span>Serve as an expert on applications and provide technical support</span></li>
                            </ul>

                            <h5 className="text-lg font-semibold mt-6">Required Experience, Skills and Qualifications: </h5>
                            <p className="text-slate-400 mt-4">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                            <ul className="list-none">
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1" /><span>Proven experience as a .NET Developer or Application Developer</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1" /><span>good understanding of SQL and Relational Databases, specifically Microsoft SQL Server.</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1" /><span>Experience designing, developing and creating RESTful web services and APIs</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1" /><span>Basic know how of Agile process and practices</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1" /><span>Good understanding of object-oriented programming.</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1" /><span>Good understanding of concurrent programming.</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1" /><span>Sound knowledge of application architecture and design.</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1" /><span>Excellent problem solving and analytical skills</span></li>
                            </ul>

                            <div className="mt-5">
                                <Link href="/job-apply" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <JobDetailComp />
                 <ExploreJob/>
            </section>
            <Footer />
            <Switcher/>
        </>
    )
}