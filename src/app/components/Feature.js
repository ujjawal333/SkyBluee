'use client'
import Link from 'next/link';
import React from 'react'
import {featuredata} from './Data';
import {FiArrowRight} from '../assets/icons/vander'

export default function Feature() {
   
    return (

        <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Here s why youll love it Jobstack</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]" >
                {featuredata.map((item, index) =>{ 
                    const Icon = item.Icon
                return(
                    <div key={index} className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500" >
                        <div className="size-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-md text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
                            <Icon className=""/>
                        </div>

                        <div className="mt-4">
                            <Link href="#" className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500" >{item.title}</Link>

                            <p className="text-slate-400 mt-3 mb-2">{item.data}</p>

                            <Link href="#" className="hover:text-emerald-600 font-medium transition-all duration-500 inline-flex items-center"><span>Read More </span> <FiArrowRight className='ms-1'/></Link>
                        </div>
                    </div>

                )})}
            </div>     
        </div>
    )
}

