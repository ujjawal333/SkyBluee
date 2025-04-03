import React from 'react';
import Link from 'next/link';

import {FiMail, LuPencil} from '../assets/icons/vander'

export default function ApplyForJobs() {
    return (
        <div className="container-fluid md:mt-24 mt-16">
            <div className="container">
                <div className="grid grid-cols-1">
                    <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
                        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                            <div className="lg:col-span-8 md:col-span-7">
                                <div className="ltr:md:text-left rtl:md:text-right text-center relative z-1">
                                    <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Contact us now</h3>
                                    <p className="text-slate-400 max-w-xl">Interested in working with clients overseas for staffing opportunities?</p>
                                </div>
                            </div>

                            <div className="lg:col-span-4 md:col-span-5">
                                <div className="ltr:text-right rtl:text-left relative z-1">
                                    <Link href="/job-apply" className="btn bg-skyblue hover:bg-blue-600 border-blue-600 dark:border-blue-600 text-white rounded-md">Contact Us Now</Link>
                                    <Link href="/aboutus" className="btn bg-emerald-600/5 hover:bg-blue-600 border-emerald-600/10 hover:border-blue-600 text-blue-600 hover:text-white rounded-md ms-2">Learn More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-5 -start-5">
                            <FiMail className=" lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"/>
                        </div>

                        <div className="absolute -bottom-5 -end-5">
                            <LuPencil className=" lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
