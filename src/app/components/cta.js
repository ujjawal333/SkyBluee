'use client'
import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import {MdOutlineCheckCircleOutline} from '../assets/icons/vander'

export default function Cta() {
    const [isOpen, setOpen] = useState(false)
  return (
    <div className="relative overflow-hidden bg-emerald-600 rounded-md shadow dark:shadow-gray-700">
        <div className="grid md:grid-cols-2 items-center gap-[30px]">
            <div className="relative">
                <Image src="/images/about/ab05.jpg" alt="" width={0} height={0} sizes='100vw' style={{height:"auto", width:"100%"}} />
                <div className="absolute md:bottom-1/2 md:translate-y-1/2 md:-end-10 ltr:md:translate-x-0 rtl:md:translate-x-0 -bottom-10 end-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 text-center">
                    <Link href="#" scroll={false} onClick={() => setOpen(true)}
                        data-type="youtube" data-id="yba7hPeTSjk" className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </Link>
                </div>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="yba7hPeTSjk" onClose={() => setOpen(false)} />
            </div>

            <div>
                <div className="text-white p-4">
                    <h4 className="leading-normal text-4xl mb-3 font-semibold">Get the job of your <br /> dreams quickly.</h4>

                    <p className="text-white/70 text-lg max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                    <ul className="list-none text-white/50 mt-4">
                        <li className="mb-1 flex items-center ms-0"><MdOutlineCheckCircleOutline className="text-white text-xl me-2"/> Digital Marketing Solutions for Tomorrow</li>
                        <li className="mb-1 flex items-center ms-0"><MdOutlineCheckCircleOutline className="text-white text-xl me-2"/>  Our Talented & Experienced Marketing Agency</li>
                        <li className="mb-1 flex items-center ms-0"><MdOutlineCheckCircleOutline className="text-white text-xl me-2"/>  Create your own skin to match your brand</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
