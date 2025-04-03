'use client'
import dynamic from "next/dynamic";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import '../../../node_modules/tiny-slider/dist/tiny-slider.css';
const TinySlider = dynamic(() => import("tiny-slider-react"));

import { services } from './Data';


const settings = {
    lazyload: true,
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
        1025: {
            items: 5
        },
        992: {
            items: 4
        },
        767: {
            items: 3
        },
        425: {
            items: 1
        },
    },
}
export default function TrendingService() {
    const [mount, setMount] = useState(false);
    useEffect(() => {
        setMount(true);
      }, []);
    
    return (
        <div className="container">
            <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                <div className="lg:col-span-8 md:col-span-6">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Trending Services</h3>
                    <p className="text-slate-400 max-w-xl">Search all the open positions with SkyBlue HR. Get your own personalized salary estimate. Read reviews on over 65+ companies worldwide.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 mt-7 relative">
                <div className="tiny-five-item">
                    { mount ?

                    <TinySlider settings={settings}>
                        {services.map((item, index) => (
                            <div className="tiny-slide" key={index}>
                                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 transition duration-500 m-1">
                                    <Image src={item.image} alt="" height={0} width={0} sizes='100vw' style={{width:"100%", height:"auto"}}/>
                                    <div className="absolute inset-0 bg-slate-900/50"></div>

                                    <div className="absolute bottom-0 p-4">
                                        <Link href="#" className="text-lg font-semibold text-white hover:text-emerald-600 transition-all duration-500">{item.title}</Link>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </TinySlider> : ""
                    }
               


                </div>
            </div>
        </div>
    )
}
