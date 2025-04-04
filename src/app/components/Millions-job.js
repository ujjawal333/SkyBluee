'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ModalVideo from 'react-modal-video';
import "../../../node_modules/react-modal-video/css/modal-video.css";


import {MdOutlineCheckCircleOutline, FiMail} from '../assets/icons/vander'

export default function MillionsJob() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="yba7hPeTSjk" onClose={() => setOpen(false)} />
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-5 md:col-span-6">
                    <div className="relative">
                        <div className="relative">
                            <Image src="/images/about/ab01.jpg" width={0} height={0} sizes='100vw' className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700" alt="" />
                            <div className="absolute top-0 translate-y-2/4 end-0 text-center">
                                <Link href="#" scroll={false} onClick={() => setOpen(true)} className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="absolute md:-end-5 end-0 -bottom-16">
                            <Image src="/images/about/ab02.jpg" width={0} height={0} sizes='100vw' className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700" alt="" />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
                    <div className="lg:ms-5">
                        <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">Millions of jobs. <br /> Find the one thats right for you.</h3>

                        <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-1 flex items-center"><MdOutlineCheckCircleOutline className="text-emerald-600 text-xl me-2"/> Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1 flex items-center ms-0"><MdOutlineCheckCircleOutline className="text-emerald-600 text-xl me-2"/> Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-1 flex items-center ms-0"><MdOutlineCheckCircleOutline className="text-emerald-600 text-xl me-2"/> Create your own skin to match your brand</li>
                        </ul>

                        <div className="mt-6">
                            <Link href="/contact" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white mt-2 rounded-md inline-flex items-center gap-1"><FiMail/> Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
