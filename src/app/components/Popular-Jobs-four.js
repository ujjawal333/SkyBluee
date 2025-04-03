import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiBookmark, FiMapPin } from '../assets/icons/vander';
import { jobs } from './Data';

export default function PopularJobsfour() {
  const data = jobs.slice(0,6)

    return (

        <section className="relative bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Popular Jobs</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions with SkyBlue HR. Get your own personalized salary estimate. Read reviews on over 65+ companies worldwide.</p>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">



                    {data.map((item, index) => (

                        <div className="group relative overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 hover:-mt-2 rounded-md transition-all duration-500 h-fit" key={index}>
                            <div className="p-6">
                                <div className="flex items-center">
                                    <div className="size-14 min-w-[56px] flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                        <Image src={item.image} className="size-8" alt="" width={32} height={32}/>
                                    </div>

                                    <div className="ms-3">
                                        <Link href={`/job-detail-three/${item.id}`} className="inline-block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500 me-1">{item.title}</Link>
                                        <span className="inline-block text-sm text-slate-400">{item.day}</span>
                                        <div>
                                            <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">{item.jobtype}</span>
                                            <span className="text-sm font-medium inline-block me-1">{item.deta} <span className="text-slate-400">{item.deta1}</span></span>
                                            <span className="text-sm font-medium inline-block me-1">{item.deta2} <span className="text-slate-400">{item.deta3}</span></span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-slate-400 py-3">{item.headline}</p>

                                <div>
                                    <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">HTML</span>
                                    <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">CSS</span>
                                    <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SASS</span>
                                    <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SCSS</span>
                                    <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Photoshop</span>
                                    <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Graphics</span>
                                    <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Bootstrap</span>
                                </div>
                            </div>

                            <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 lg:flex justify-between items-center">
                                <div className="lg:inline-block flex justify-between">
                                    <span className="inline-block me-1 font-semibold"><i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1"></i>{item.verify}</span>
                                    <ul className="list-none inline-block me-1 text-yellow-400">
                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                        <li className="inline text-slate-400 font-semibold">{item.rating}</li>
                                    </ul>
                                    <span className="inline-flex items-center me-1 text-slate-400"><FiMapPin/><i className="text-[18px] text-slate-900 dark:text-white me-1"></i>{item.Location}</span>
                                </div>

                                <Link href="/job-apply" className="btn btn-sm rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4">{item.apply}</Link>
                            </div>

                            <Link href="/" className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white absolute top-0 end-0 m-3"><FiBookmark className="size-4"/></Link>
                        </div>
                    ))}

                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <Link href="/job-grid-two" className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out inline-flex items-center"><span>See More Jobs</span> <FiArrowRight/></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
