import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { jobs } from './Data';

import {FiArrowRight, LuCircleDollarSign, FiMapPin, FiChevronLeft, FiChevronRight, FiArrowUpRight} from '../assets/icons/vander'

export default function JobListCompSix() {
    
    return (
        <>
            <div className="lg:col-span-8 md:col-span-6">
                <div className="grid grid-cols-1 gap-[30px]">
                    {jobs.map((item, index) => (
                        <div className="group rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500" key={index}>
                            <div className="flex items-center justify-between p-6">
                                <div className="flex items-center">
                                    <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                        <Image src={item.image} className="size-8" alt="" width={32} height={32}/>
                                    </div>

                                    <div className="ms-3">
                                        <Link href={`/employer-profile/${item.id}`} className="block text-[16px] font-semibold hover:text-skyblue transition-all duration-500">{item.title}</Link>
                                        <span className="block text-sm text-slate-400">{item.day}</span>
                                    </div>
                                </div>

                                <Link href="/job-apply" className="btn btn-icon btn-lg rounded-full bg-emerald-600/5 group-hover:bg-skyblue border border-slate-100 dark:border-slate-800 text-skydarkgrey group-hover:text-white"><FiArrowUpRight/></Link>
                            </div>

                            <div className="lg:flex items-center justify-between border-t border-gray-100 dark:border-gray-800 p-6">
                                <div>
                                    <Link href={`/job-detail-one/${item.id}`} className="text-lg font-semibold hover:text-blue">{item.heading}</Link>
                                    <p className="text-slate-400 mt-1">{item.opening}</p>
                                </div>

                                <p className="text-slate-400 lg:mt-0 mt-4 flex items-center gap-1"><LuCircleDollarSign className="text-[20px] text-black dark:text-white"/>{item.price}</p>
                            </div>

                            <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 flex justify-between items-center">
                                <div>
                                    <span className="inline-block font-semibold"><i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1"></i>{item.verify}</span>
                                    <ul className="list-none inline-block ms-1 text-yellow-400">
                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                        <li className="inline text-slate-400 font-semibold ms-1">{item.rating}</li>
                                    </ul>
                                </div>
                                <span className="inline-flex me-1 text-slate-400  items-center"><FiMapPin className="text-slate-900 dark:text-white me-1"/>{item.Location}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link href="#" className="size-[40px] inline-flex justify-center items-center text-skyblue hover:text-white bg-white dark:bg-skyblue dark:text-white border border-skyblue dark:border-skyblue hover:border-skydarkgrey dark:hover:border-skydarkgrey hover:bg-skydarkgrey dark:hover:bg-skydarkgrey rounded-s-3xl">
                                        <FiChevronLeft width={16} className=" text-[20px] rtl:rotate-180 rtl:-mt-1" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="size-[40px] inline-flex justify-center items-center text-skyblue hover:text-white bg-white dark:bg-skyblue border dark:text-white border-skyblue dark:border-skyblue hover:border-skydarkgrey dark:hover:border-skydarkgrey hover:bg-skydarkgrey dark:hover:bg-skydarkgrey">1</Link>
                                </li>
                                <li>
                                    <Link href="#" className="size-[40px] inline-flex justify-center items-center text-skyblue hover:text-white bg-white dark:bg-skyblue border dark:text-white border-skyblue dark:border-skyblue hover:border-skydarkgrey dark:hover:border-skydarkgrey hover:bg-skydarkgrey dark:hover:bg-skydarkgrey">2</Link>
                                </li>
                                <li>
                                    <Link href="#" aria-current="page" className="z-10 size-[40px] inline-flex justify-center items-center text-white bg-skydarkgrey border border-skydarkgrey">3</Link>
                                </li>
                                <li>
                                    <Link href="#" className="size-[40px] inline-flex justify-center items-center text-skyblue hover:text-white bg-white dark:bg-skyblue border dark:text-white border-skyblue dark:border-skyblue hover:border-skydarkgrey dark:hover:border-skydarkgrey hover:bg-skydarkgrey dark:hover:bg-skydarkgrey">4</Link>
                                </li>
                                <li>
                                    <Link href="#" className="size-[40px] inline-flex justify-center items-center text-skyblue hover:text-white bg-white dark:bg-skyblue border dark:text-white border-skyblue dark:border-skyblue hover:border-skydarkgrey dark:hover:border-skydarkgrey hover:bg-skydarkgrey dark:hover:bg-skydarkgrey">5</Link>
                                </li>
                                <li>
                                    <Link href="#" className="size-[40px] inline-flex justify-center items-center text-skyblue bg-white dark:bg-skyblue dark:text-white rounded-e-3xl hover:text-white border border-skyblue dark:border-skyblue hover:border-skydarkgrey dark:hover:border-skydarkgrey hover:bg-skydarkgrey dark:hover:bg-skydarkgrey">
                                        <FiChevronRight className="text-[20px] rtl:rotate-180 rtl:-mt-1" />
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
