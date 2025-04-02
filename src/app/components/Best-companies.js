'use client';
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import ModalVideo from 'react-modal-video';
import "../../../node_modules/react-modal-video/css/modal-video.css";

import {companiesData} from "../components/Data"

import {FiArrowRight} from '../assets/icons/vander'

export default function BestCompanies() {
    const [isOpen, setOpen] = useState(false)

   
    return (

        <div className="container md:mt-24 md:pb-16 mt-16">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
                    <div className="relative">
                        <div className="relative flex justify-end">
                            <Image src='/images/about/ab03.jpg' width={0} height={0} sizes='100vw' className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700" alt="" />
                            <div className="absolute top-0 translate-y-2/4 start-0 text-center">
                                <Link href="#" scroll={false} onClick={() => setOpen(true)} data-id="yba7hPeTSjk" className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="absolute md:-start-5 start-0 -bottom-16">
                            <Image src='/images/about/ab04.jpg' width={0} height={0} sizes='100vw' className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700" alt="" />
                        </div>
                    </div>
                </div>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="yba7hPeTSjk" onClose={() => setOpen(false)} />


                <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0 md:order-1 order-2">
                    <div className="lg:me-5">
                        <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">Find Best Companies.</h3>

                        <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">
                            {companiesData.slice(0,6).map((item, index) => (
                                <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800" key={index}>
                                    <div className="flex items-center">
                                        <div className="size-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                            <Image src={item.image} className="size-8" alt="" width={32} height={32}/>
                                        </div>
                                        <div className="ms-3">
                                            <Link href={`/employer-profile/${item.id}`} className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">{item.title}</Link>
                                            <span className="block text-sm text-emerald-600">{item.vacancy} Vacancy</span>
                                            {/* <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                            <div className="md:col-span-12">
                                <Link href="#" className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out inline-flex items-center"> <span>See More Companies</span> <FiArrowRight/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
