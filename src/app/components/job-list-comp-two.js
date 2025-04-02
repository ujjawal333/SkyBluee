import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { jobs } from './Data';
import {FiBookmark, FiClock, FiMapPin, FiChevronLeft, FiChevronRight, FiStar} from '../assets/icons/vander'

export default function JobListCompTwo() {
   
    return (
        <div className="lg:col-span-8 md:col-span-6">
            <div className="grid grid-cols-1 gap-[30px]">

                {jobs.map((item, index) => (
                    <div className="group relative overflow-hidden lg:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5" key={index}>
                        <div className="flex items-center">
                            <div
                                className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <Image src={item.image} className="size-8" alt="" height={32} width={32} />
                            </div>
                            <Link href={`/job-detail-three/${item.id}`}
                                className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[150px]">{item.title}</Link>
                        </div>

                        <div className="lg:block flex justify-between lg:mt-0 mt-4">
                            <span className="block"><span
                                className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">{item.jobtype}</span></span>
                            <span className=" text-slate-400 text-sm md:mt-1 mt-0 flex items-center gap-1"><FiClock/>{item.date}</span>
                        </div>

                        <div className="lg:block flex justify-between lg:mt-0 mt-2">
                            <span className="text-slate-400 flex gap-1 items-center"><FiMapPin/> {item.Location}</span>
                            <span className="block font-semibold lg:mt-1 mt-0">{item.price}</span>
                        </div>

                        <div className="lg:mt-0 mt-4">
                            <Link href="#"
                                className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white lg:relative absolute top-0 end-0 lg:m-0 m-3">
                                <FiBookmark className="size-4"/></Link>
                            <Link href="/job-apply"
                                className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">{item.apply}</Link>
                        </div>

                        <span
                            className="w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1 flex justify-center"><FiStar width={14}/></span>
                    </div>
                ))}

            </div>

            <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center">
                    <nav aria-label="Page navigation example">
                        <ul className="inline-flex items-center -space-x-px">
                            <li>
                                <Link href="#"
                                    className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                                    <FiChevronLeft className=" text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                </Link>
                            </li>
                            <li>
                                <Link href="#"
                                    className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">1</Link>
                            </li>
                            <li>
                                <Link href="#"
                                    className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">2</Link>
                            </li>
                            <li>
                                <Link href="#" aria-current="page"
                                    className="z-10 size-[40px] inline-flex justify-center items-center text-white bg-emerald-600 border border-emerald-600">3</Link>
                            </li>
                            <li>
                                <Link href="#"
                                    className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">4</Link>
                            </li>
                            <li>
                                <Link href="#"
                                    className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">5</Link>
                            </li>
                            <li>
                                <Link href="#"
                                    className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                                    <FiChevronRight className=" text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
