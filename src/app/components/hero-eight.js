'use client'
import React,{useState} from 'react';
import Image from 'next/image'
import Link from 'next/link'

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

export default function HeroEight() {
    let [isOpen, setOpen] = useState(false)
  return (
        <div className="lg:col-span-5 mt-8 md:mt-0">
            <div className="relative z-2">
                <div className="p-3 shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900">
                    <Image src="/images/hero.jpg" width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="shadow-md rounded-md" alt=""/>
                </div>
                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                    <Link href="#" scroll={false} onClick={() => setOpen(true)} className="lightbox size-20 rounded-full shadow-md dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600">
                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </Link>
                </div>

                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="yba7hPeTSjk" onClose={() => setOpen(false)} />
            </div>
        </div>
  )
}
