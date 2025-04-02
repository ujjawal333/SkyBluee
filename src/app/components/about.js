'use client'
import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import { MdOutlineCheckCircleOutline, FiMail} from '../assets/icons/vander'

export default function About() {
    const [isOpen, setOpen] = useState(false)
  return (
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5 md:col-span-6">
                <div className="relative">
                    <div className="grid grid-cols-12 gap-6 items-center">
                        <div className="col-span-6">
                            <div className="grid grid-cols-1 gap-6">
                                <Image src="/images/about/ab03.jpg" className="shadow rounded-md" alt="" width={0} height={0} sizes='100vw' style={{width:"100%" , height:"auto"}} />
                                <Image src="/images/about/ab02.jpg" className="shadow rounded-md" alt="" width={0} height={0} sizes='100vw' style={{width:"100%" , height:"auto"}}/>
                            </div>
                        </div>

                        <div className="col-span-6">
                            <div className="grid grid-cols-1 gap-6">
                                <Image src="/images/about/ab01.jpg" className="shadow rounded-md" alt="" width={0} height={0} sizes='100vw' style={{width:"100%" , height:"auto"}}/>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                        <Link href="#" scroll={false} onClick={() => setOpen(true)} data-type="youtube" data-id="yba7hPeTSjk" className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </Link>
                    </div>
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="yba7hPeTSjk" onClose={() => setOpen(false)} />
                </div>
            </div>

            <div className="lg:col-span-7 md:col-span-6">
                <div className="lg:ms-8">
                    <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-bold">Get the job of you dreams <br /> quick & easy.</h3>

                    <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                    <ul className="list-none text-slate-400 mt-4">
                        <li className="mb-1 flex items-center ms-0"><MdOutlineCheckCircleOutline className="text-emerald-600 text-xl me-2"/> Digital Marketing Solutions for Tomorrow</li>
                        <li className="mb-1 flex items-center ms-0"><MdOutlineCheckCircleOutline className="text-emerald-600 text-xl me-2"/> Our Talented & Experienced Marketing Agency</li>
                        <li className="mb-1 flex items-center ms-0"><MdOutlineCheckCircleOutline className="text-emerald-600 text-xl me-2"/> Create your own skin to match your brand</li>
                    </ul>

                    <div className="mt-6">
                        <Link href="/contact" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white mt-2 rounded-md items-center inline-flex gap-1"><FiMail/> Contact us</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}
