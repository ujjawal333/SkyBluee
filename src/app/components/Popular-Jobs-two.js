import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {FiStar, FiClock, FiArrowRight, FiMapPin, FiBookmark} from '../assets/icons/vander'

import { jobs } from './Data';

export default function Popularjobstwo() {
   
const data = jobs.slice(0, 6)
    return (
        <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Popular Jobs</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>
            {data.map((item, index) => (
                <div className="grid grid-cols-1 mt-8 gap-[30px]" key={index}>
                    <div className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5">
                        <div className="flex items-center">
                            <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <Image src={item.image} className="size-8" alt="" width={32} height={32} />
                            </div>
                            <Link href={`/job-detail-one/${item.id}`} className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]">{item.heading}</Link>
                        </div>

                        <div className="md:block flex justify-between md:mt-0 mt-4">
                            <span className="block"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">{item.jobtype}</span></span>
                            <span className=" text-slate-400 text-sm md:mt-1 mt-0 flex items-center"><FiClock className="me-1"/><span>{item.date}</span></span>
                        </div>

                        <div className="md:block flex justify-between md:mt-0 mt-2">
                            <span className="text-slate-400 flex items-center"><FiMapPin className="me-1"/><span>{item.Location}</span></span>
                            <span className="block font-semibold md:mt-1 mt-0">{item.price}</span>
                        </div>

                        <div className="md:mt-0 mt-4">
                            <Link href="#" className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 end-0 md:m-0 m-3"><FiBookmark className="size-4"></FiBookmark></Link>
                            <Link href="/job-apply" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</Link>
                        </div>

                        <span className={`w-24 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1 flex justify-center ${item.rating === true ? 'bg-yellow-400' : ''} `}><FiStar/></span>
                    </div>
                </div>
            ))}
            <div className="grid md:grid-cols-1 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center">
                    <Link href="/job-grid-two" className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out inline-flex items-center"><span>See More Jobs</span><FiArrowRight/></Link>
                </div>
            </div>
        </div>
    )
}