import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { jobs } from './Data';

import {FiMapPin, FiChevronLeft, FiChevronRight} from '../assets/icons/vander'

export default function JobGridsTwoComp() {
   
    return (
        <>
            <div className="lg:col-span-8 md:col-span-6">
                <div className="grid lg:grid-cols-2 gap-[30px]">

                    {jobs.map((item, index) => {
                        return(
                            <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900" key={index}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                        <Image src={item.image} className="size-8" alt=""  width={32} height={32}/>
                                    </div>

                                    <div className="ms-3">
                                        <Link href={`/employer-profile/${item.id}`} className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">{item.title}</Link>
                                        <span className="block text-sm text-slate-400">{item.day}</span>
                                    </div>
                                </div>

                                <span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">{item.jobtype}</span>
                            </div>

                            <div className="mt-6">
                                <Link href={`/job-detail-three/${item.id}`} className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500">{item.heading}</Link>
                                <h6 className="text-base font-medium flex items-center"><FiMapPin className="me-2"/><span>{item.Location}</span></h6>
                            </div>

                            <div className="mt-6">
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-emerald-600 h-[6px] rounded-full" style={{ width: '55%' }}></div>
                                </div>
                                <div className="mt-2">
                                    <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block"><span className='text-slate-900'>21 applied</span></span> of 40 vacancy</span>
                                </div>
                            </div>
                        </div>
                        )
                    }
                     

                        
                    )}
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                                        <FiChevronLeft className=" text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">1</Link>
                                </li>
                                <li>
                                    <Link href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">2</Link>
                                </li>
                                <li>
                                    <Link href="#" aria-current="page" className="z-10 size-[40px] inline-flex justify-center items-center text-white bg-emerald-600 border border-emerald-600">3</Link>
                                </li>
                                <li>
                                    <Link href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">4</Link>
                                </li>
                                <li>
                                    <Link href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">5</Link>
                                </li>
                                <li>
                                    <Link href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                                        <FiChevronRight className=" text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}


























































