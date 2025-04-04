import Image from 'next/image';
import Link from 'next/link';
import { newsData } from './Data';

import { FiArrowRight, FiClock, LuCalendarDays } from '../assets/icons/vander';

export default function BlogComp() {
    const data = newsData.slice(0, 3)
    
    return (
        <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Related Blogs</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions with SkyBlue HR. Get your own personalized salary estimate. Read reviews on over 65+ companies worldwide.</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {data.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
                        <div className="relative overflow-hidden">
                            <Image src={item.image} className="scale-110 group-hover:scale-100 transition-all duration-500" alt="" width={0} height={0} sizes='100vw' style={{width:"100%" , height:"auto"}}/>
                        </div>

                        <div className="relative p-6">
                            <div className="absolute start-6 -top-4">
                                <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">{item.title}</span>
                            </div>

                            <div className="">
                                <div className="flex mb-4">
                                    <span className="text-slate-400 text-sm flex items-center"><LuCalendarDays className=" text-slate-900 dark:text-white me-2"/><span>{item.date}</span></span>
                                    <span className="text-slate-400 text-sm ms-3 flex items-center"><FiClock className="text-slate-900 dark:text-white me-2"/><span>{item.time}</span></span>
                                </div>

                                <Link href={`/blog-detail/${item.id}`} className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out">{item.headline}</Link>

                                <div className="flex justify-between items-center mt-3">
                                    <Link href={`/blog-detail/${item.id}`} className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out inline-flex items-center gap-1">Read More <FiArrowRight/></Link>
                                    <span className="text-slate-400 text-sm">by <Link href="#" className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium">{item.powerdby}</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
}
