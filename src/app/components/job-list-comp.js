import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { jobs } from './Data';

import {FiBookmark, FiClock, FiMapPin, FiStar} from '../assets/icons/vander'

export default function JobListComp() {
   
    return (
        <>

            <div className="container mt-10">
                <div className="grid grid-cols-1 gap-[30px]">


                    {jobs.map((item, index) => (
                        <div className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5" key={index}>
                            <div className="flex items-center">
                                <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                    <Image src={item.image} className="size-8" alt="" width={32} height={32}/>
                                </div>
                                <Link href={`/job-detail-two/${item.id}`} className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]">{item.title}</Link>
                            </div>

                            <div className="md:block flex justify-between md:mt-0 mt-4">
                                <span className="block"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">{item.jobtype}</span></span>
                                <span className=" text-slate-400 text-sm md:mt-1 mt-0 flex items-center gap-1"><FiClock/>{item.date}</span>
                            </div>

                            <div className="md:block flex justify-between md:mt-0 mt-2">
                                <span className="text-slate-400 flex items-center gap-1"><FiMapPin/>{item.Location}</span>
                                <span className="block font-semibold md:mt-1 mt-0">{item.price}</span>
                            </div>

                            <div className="md:mt-0 mt-4">
                                <Link href="#" className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 end-0 md:m-0 m-3"><FiBookmark className="size-4"></FiBookmark></Link>
                                <Link href="/job-apply" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">{item.apply}</Link>
                            </div>

                            <span className="w-24 py-1 bg-yellow-400  text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1 flex ps-9"><FiStar className="text-white"/></span>
                        </div>
                    ))}



                </div>
            </div>
        </>
    )
}
