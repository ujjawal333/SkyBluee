'use client'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { newsData } from './Data';

import {LuCalendarDays, FiClock, FiArrowRight, FiChevronLeft, FiChevronRight} from '../assets/icons/vander'

export default function BlogDetailComp() {
    return (
        <>
            <section className="relative">
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">

                    {newsData.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
                        <div className="relative overflow-hidden">
                            <Image src={item.image} className="scale-110 group-hover:scale-100 transition-all duration-500" alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}}/>
                        </div>

                        <div className="relative p-6">
                            <div className="absolute start-6 -top-4">
                                <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">{item.title}</span>
                            </div>

                            <div className="">
                                <div className="flex mb-4">
                                    <span className="text-slate-400 text-sm flex items-center"><LuCalendarDays className="text-slate-900 dark:text-white me-2"/><span>{item.date}</span></span>
                                    <span className="text-slate-400 text-sm ms-3 flex items-center"><FiClock className="text-slate-900 dark:text-white me-2"/><span>{item.time}</span></span>
                                </div>

                                <Link href={`/blog-detail/${item.id}`} className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out">{item.headline}</Link>

                                <div className="flex justify-between items-center mt-3">
                                    <Link href="/blog-detail" className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out inline-flex items-center"><span>Read More</span> <FiArrowRight/></Link>
                                    <span className="text-slate-400 text-sm">by <Link href="#" className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium">{item.powerdby}</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                        <div className="md:col-span-12 text-center">
                            <nav aria-label="Page navigation example">
                                <ul className="inline-flex items-center -space-x-px">
                                    <li>
                                        <Link href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                                            <FiChevronLeft className="rtl:rotate-180 rtl:-mt-1"/>
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
                                             <FiChevronRight className="rtl:rotate-180 rtl:-mt-1"/>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
