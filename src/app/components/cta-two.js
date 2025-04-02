'use client'
import React,{useState} from 'react';
import Link from 'next/link';

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

export default function CtaTwo() {
    const [isOpen, setOpen] = useState(false)
  return (
        <section className="py-20 w-full table relative  bg-top bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/hero/bg2.jpg')"}}>
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-[26px] text-2xl text-white font-medium">Get the job thats right for you</h3>

                    <p className="text-white/80 max-w-xl mx-auto">Search all the open positions on the web. Get your own
                        personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                    <Link href="#" onClick={() => setOpen(true)} scroll={false}
                        className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 mx-auto mt-10">
                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </Link>
                </div>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="yba7hPeTSjk" onClose={() => setOpen(false)} />
            </div>
        </section>
  )
}
