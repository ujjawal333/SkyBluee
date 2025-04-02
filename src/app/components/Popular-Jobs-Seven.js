import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { jobs } from './Data';

import {FiBookmark, FiArrowUpRight, FiMapPin, FiArrowRight} from '../assets/icons/vander'

export default function PopularJobsSeven() {
   const data = jobs.slice(0, 6)

    return (
        <div>
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Popular Jobs</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">

                    {data.map((item, index) => (

                        <div className="group p-6 rounded-lg border border-emerald-600/20 dark:border-emerald-600/40 bg-white dark:bg-slate-900 hover:bg-emerald-600/[0.02] hover:dark:bg-emerald-600/5 hover:shadow-md hover:shadow-emerald-600/5 transition-all duration-500" key={index} >
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full mb-2">
                                        <Image src={item.image} className="size-8" alt="" width={32} height={32}/>
                                    </div>
                                    <Link href={`/employer-profile/${item.id}`} className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500">{item.title}</Link>
                                </div>

                                <div className="flex items-center">
                                    <Link href="#" className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"><i className="mdi mdi-heart"></i></Link>
                                    <Link href="#" className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white ms-1"><FiBookmark className="size-4"/></Link>
                                    <Link href="/job-apply" className="btn btn-icon rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border-emerald-600/10 text-emerald-600 group-hover:text-white ms-1"><FiArrowUpRight/></Link>
                                </div>
                            </div>

                            <div className="mt-3">
                                <Link href={`/job-detail-one/${item.id}`} className="text-xl hover:text-emerald-600 font-semibold transition-all duration-500">{item.heading}</Link>
                                <p className="text-slate-400 mt-2">{item.headline}</p>

                                <div className="mt-3">
                                    <Link href="#">
                                        <span className="bg-orange-500/5 hover:bg-orange-500/20 dark:bg-orange-500/10 hover:dark:bg-orange-500/30 inline-block text-orange-500 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">{item.jobtype}</span>
                                    </Link>
                                    <Link href="#">
                                        <span className="bg-purple-600/5 hover:bg-purple-600/20 dark:bg-purple-600/10 hover:dark:bg-purple-600/30 inline-block text-purple-600 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">{item.price}</span>
                                    </Link>
                                    <Link href="#">
                                        <span className="bg-emerald-600/5 hover:bg-emerald-600/20 dark:bg-emerald-600/10 hover:dark:bg-emerald-600/30  text-emerald-600 px-4 text-[14px] font-medium rounded-full mt-2 transition-all duration-500 inline-flex items-center"><FiMapPin className="me-1"/>{item.Location}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <Link href="job-grid-four" className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out inline-flex items-center"> <span> See More Jobs </span><FiArrowRight/></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}