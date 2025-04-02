'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Switcher from '../../components/Switcher';
import JobDetailComp from '../../components/Job-detail-comp';
import ExploreJob from '../../components/Explore-job';

import { jobs } from '../../components/Data';

import {FiUserCheck, FiMapPin, FiMonitor, FiBriefcase, FiBook, FiDollarSign, FiClock, FiArrowRight, FaRegBuilding} from '../../assets/icons/vander'

export default function JobDetailThree({params}) {
    const resolvedParams = React.use(params);
    const id = resolvedParams.id;

    const jobsdata = jobs.find((job) => job?.id === parseInt(id));
    return (
        <>

            <Navbar navClass='justify-end' />
            <section className="bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
                <div className="container mt-10">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-6">
                            <div className="p-6 shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                                <Image src={jobsdata?.image} className="rounded-full size-28 p-4 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700" alt="" height={112} width={112}/>

                                <div className="md:ms-4 mt-4">
                                    <h5 className="text-xl font-semibold">Back-End Developer</h5>
                                    <div className="mt-1">
                                        <span className="text-slate-400 font-medium me-2  inline-flex items-center"><FaRegBuilding className="text-[18px] text-emerald-600 me-1"/><span>{jobsdata?.title} pvt.ltd. </span></span>
                                        <span className="text-slate-400 font-medium me-2 inline-flex items-center"><FiMapPin className="text-[18px] text-emerald-600 me-1"/><i className="uil uil-map-marker text-[18px] text-emerald-600 me-1"></i><span>{jobsdata?.Location}</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-6">
                            <h5 className="text-lg font-semibold">Job Information:</h5>
                            <ul className="list-none mt-5">
                                <li className="inline-flex items-center py-2 px-4 bg-white dark:bg-slate-900 me-2 my-1 shadow dark:shadow-gray-700 rounded-md">
                                    <FiUserCheck className="size-5"/>

                                    <div className="ms-4">
                                        <p className="font-medium">Employee Type:</p>
                                        <span className="text-emerald-600 font-medium text-sm">{jobsdata?.jobtype}</span>
                                    </div>
                                </li>

                                <li className="inline-flex items-center py-2 px-4 bg-white dark:bg-slate-900 me-2 my-1 shadow dark:shadow-gray-700 rounded-md">
                                    <FiMapPin className="size-5"/>

                                    <div className="ms-4">
                                        <p className="font-medium">Location:</p>
                                        <span className="text-emerald-600 font-medium text-sm">{jobsdata?.Location}</span>
                                    </div>
                                </li>

                                <li className="inline-flex items-center py-2 px-4 bg-white dark:bg-slate-900 me-2 my-1 shadow dark:shadow-gray-700 rounded-md">
                                    <FiMonitor className="size-5"/>

                                    <div className="ms-4">
                                        <p className="font-medium">Job Type:</p>
                                        <span className="text-emerald-600 font-medium text-sm">{jobsdata?.heading}</span>
                                    </div>
                                </li>

                                <li className="inline-flex items-center py-2 px-4 bg-white dark:bg-slate-900 me-2 my-1 shadow dark:shadow-gray-700 rounded-md">
                                    <FiBriefcase className="size-5"/>

                                    <div className="ms-4">
                                        <p className="font-medium">Experience:</p>
                                        <span className="text-emerald-600 font-medium text-sm">2+ years</span>
                                    </div>
                                </li>

                                <li className="inline-flex items-center py-2 px-4 bg-white dark:bg-slate-900 me-2 my-1 shadow dark:shadow-gray-700 rounded-md">
                                    <FiBook className="size-5"/>

                                    <div className="ms-4">
                                        <p className="font-medium">Qualifications:</p>
                                        <span className="text-emerald-600 font-medium text-sm">MCA</span>
                                    </div>
                                </li>

                                <li className="inline-flex items-center py-2 px-4 bg-white dark:bg-slate-900 me-2 my-1 shadow dark:shadow-gray-700 rounded-md">
                                    <FiDollarSign className="size-5"/>

                                    <div className="ms-4">
                                        <p className="font-medium">Salary:</p>
                                        <span className="text-emerald-600 font-medium text-sm">$4000 - $4500</span>
                                    </div>
                                </li>

                                <li className="inline-flex items-center py-2 px-4 bg-white dark:bg-slate-900 me-2 my-1 shadow dark:shadow-gray-700 rounded-md">
                                    <FiClock className="size-5"/>

                                    <div className="ms-4">
                                        <p className="font-medium">Date posted:</p>
                                        <span className="text-emerald-600 font-medium text-sm">28th Feb, 2023</span>
                                    </div>
                                </li>
                            </ul>

                            <h5 className="text-lg font-semibold mt-6">Job Description:</h5>

                            <p className="text-slate-400 mt-4">One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.</p>
                            <p className="text-slate-400 mt-4">This means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces.</p>
                            <p className="text-slate-400 mt-4">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>

                            <h5 className="text-lg font-semibold mt-6">Responsibilities and Duties: </h5>
                            <p className="text-slate-400 mt-4">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                            <ul className="list-none">
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1"/><span>Participate in requirements analysis</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1"/><span>Write clean, scalable code using C# and .NET frameworks</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1"/><span>Test and deploy applications and systems</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1"/><span>Revise, update, refactor and debug code</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1"/><span>Improve existing software</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1"/><span>Develop documentation throughout the software development life cycle (SDLC)</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1"/><span>Serve as an expert on applications and provide technical support</span></li>
                            </ul>

                            <h5 className="text-lg font-semibold mt-6">Required Experience, Skills and Qualifications: </h5>
                            <p className="text-slate-400 mt-4">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                            <ul className="list-none">
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1"/><span>Proven experience as a .NET Developer or Application Developer</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1"/><span>good understanding of SQL and Relational Databases, specifically Microsoft SQL Server.</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1"/><span>Experience designing, developing and creating RESTful web services and APIs</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1"/><span>Basic know how of Agile process and practices</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1"/><span>Good understanding of object-oriented programming.</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1"/><span>Good understanding of concurrent programming.</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1"/><span>Sound knowledge of application architecture and design.</span></li>
                                <li className="text-slate-400 mt-2 flex items-center ms-0"><FiArrowRight className="text-emerald-600 me-1"/><span>Excellent problem solving and analytical skills</span></li>
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
