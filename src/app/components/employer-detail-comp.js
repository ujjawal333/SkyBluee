'use client'
import Image from 'next/image';
import Link from 'next/link';

import { companiesData } from "../components/Data";

export default function EmployerDetailComp() {
    let companiesDatas = companiesData.slice(0, 4)
    return (
        <>

            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Related Companies</h3>

                    <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Search all the open positions with SkyBlue HR. Get your own personalized salary estimate. Read reviews on over 65+ companies worldwide.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] mt-8">
                    {companiesDatas.map((item, index) => (
                        <div className="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6" key={index}>
                            <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
                                <Image src={item.image} className="size-8" alt="" height={56} width={56}/>
                            </div>

                            <div className="mt-4">
                                <Link href={`/employer-profile/${item.id}`} className="text-lg hover:text-emerald-600 font-semibold">{item.title}</Link>
                                <p className="text-slate-400 mt-2">{item.headline}</p>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
                                <span className="text-slate-400"><i className="uil uil-map-marker"></i>{item.country}</span>
                                <span className="block font-semibold text-emerald-600">{item.vacancy} Jobs</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

