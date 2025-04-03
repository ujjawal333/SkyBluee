'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import ModalVideo from 'react-modal-video';
import "../../../node_modules/react-modal-video/css/modal-video.css";
import { companiesData } from './Data';

 import { FiArrowRight, FiMapPin } from '../assets/icons/vander';

export default function FindBestCompanies() {
    const [isOpen, setOpen] = useState(false)
    const data = companiesData.slice(0,8)
    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="yba7hPeTSjk" onClose={() => setOpen(false)} />

            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Find Best Companies</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions with SkyBlue HR. Get your own personalized salary estimate. Read reviews on over 65+ companies worldwide.</p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {data.map((item, index) => (
                        <div className="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6" key={index}>
                            <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
                                <Image src={item.image} className="size-8" alt="" width={32} height={32}/>
                            </div>

                            <div className="mt-4">
                                <Link href={`/employer-profile/${item.id}`} className="text-lg hover:text-emerald-600 font-semibold">{item.title}</Link>
                                <p className="text-slate-400 mt-2">{item.headline}</p>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
                                <span className="text-slate-400 flex items-center"><FiMapPin className="me-1"/>{item.country}</span>
                                <span className="block font-semibold text-emerald-600">{item.vacancy} Jobs</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <Link href="#" className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out inline-flex items-center"><span>See More Companies</span><FiArrowRight/></Link>
                    </div>
                </div>
            </div>

        </>
    )
}


