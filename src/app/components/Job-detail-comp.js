import Image from 'next/image';
import Link from 'next/link';


import { jobs } from './Data';

import { FiMapPin } from '../assets/icons/vander';

export default function JobDetailComp() {
let jobData = jobs.slice(0, 3)
 
    return (
        <>

            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Related Vacancies</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions with SkyBlue HR. Get your own personalized salary estimate. Read reviews on over 65+ companies worldwide.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">

                    {jobData.map((item, index) => (
                        <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900" key={index}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                        <Image src={item.image} className="size-8" alt="" width={32} height={32}/>
                                    </div>

                                    <div className="ms-3">
                                        <Link href={`/employer-profile/${item.id}`} className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">{item.title}</Link>
                                        <span className="block text-sm text-slate-400">{item.day}</span>
                                    </div>
                                </div>

                                <span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">{item.jobtype}</span>
                            </div>

                            <div className="mt-6">
                                <Link href={`/job-detail-two/${item.id}`} className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500">{item.heading}</Link>
                                <h6 className="text-base font-medium flex items-center"><FiMapPin className="me-1"/><span>{item.Location}</span> </h6>
                            </div>

                            <div className="mt-6">
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-emerald-600 h-[6px] rounded-full" style={{ width: '55%' }}></div>
                                </div>
                                <div className="mt-2">
                                    <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}









