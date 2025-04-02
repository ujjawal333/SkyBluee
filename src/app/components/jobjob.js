import React from 'react'
import Link from 'next/link';
import { jobs } from './Data';
import Image from 'next/image';

import {LuCircleDollarSign, FiClock, FiChevronLeft, FiChevronRight} from '../assets/icons/vander'

export default function JobJob() {
  
    return (
        <>
            <div className="container mt-10">

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">

                    {jobs.map((item, index) => (
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800" key={index}>
                            <div className="p-6">
                                <Link href="#" className="title h5 text-lg font-semibold hover:text-emerald-600">{item.heading}</Link>
                                <p className="text-slate-400 mt-2 flex items-center"><FiClock className=" text-emerald-600 me-1"/> Posted {item.day}</p>

                                <div className="flex justify-between items-center mt-4">
                                    <span className="bg-emerald-600/5 text-emerald-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">{item.jobtype}</span>

                                    <p className="text-slate-400 flex items-center"><LuCircleDollarSign className=" text-emerald-600 me-1"/>{item.price}/mo</p>
                                </div>
                            </div>

                            <div className="flex items-center p-6 border-t border-gray-100 dark:border-gray-700">
                                <Image src={item.image} className="size-12 shadow-md dark:shadow-gray-800 rounded-md p-2 bg-white dark:bg-slate-900" alt="" height={32} width={32}/>

                                <div className="ms-3">
                                    <h6 className="mb-0 font-semibold text-base">{item.title} Ltd.</h6>
                                    <span className="text-slate-400 text-sm">{item.Location}</span>
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
