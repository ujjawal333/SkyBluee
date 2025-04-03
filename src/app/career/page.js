import Link from 'next/link';

import Feature from '../components/Feature';
import Footer from '../components/Footer';
import MillionsJob from '../components/Millions-job';
import Navbar from '../components/Navbar';
import Switcher from '../components/Switcher';

export default function Career() {
    return (
        <>
            <Navbar navClass='justify-end nav-light' />
            <section className="relative table w-full py-36 bg-[url('/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-emerald-900/90"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-snug tracking-wide leading-snug font-semibold text-white">Current Openings</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Jobstack</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Career</li>
                    </ul>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative md:pb-24 pb-16">
                <Feature />
                <div className="container md:mt-24 mt-16 md:pb-16">
                    <MillionsJob />
                </div>
                <div className="container md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Job Openings</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions with SkyBlue HR. Get your own personalized salary estimate. Read reviews on over 65+ companies worldwide.</p>
                    </div>

                    <div className="lg:flex justify-center mt-8">
                        <div className="lg:w-3/4">
                            <div className="group md:flex items-center justify-between p-6 rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500">
                                <div>
                                    <Link href="/job-detail-one/1" className="text-lg font-semibold hover:text-emerald-600">Frontend Developer</Link>
                                    <p className="text-slate-400 mt-1">Total Openings: 1</p>
                                </div>

                                <Link href="/job-detail-one/1" className="btn rounded-full bg-transparent group-hover:bg-emerald-600 border border-slate-100 dark:border-slate-800 text-slate-400 group-hover:text-white md:mt-0 mt-4">Apply now</Link>
                            </div>

                            <div className="group md:flex items-center justify-between p-6 rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500 mt-6">
                                <div>
                                    <Link href="/job-detail-one/1" className="text-lg font-semibold hover:text-emerald-600">Business Development Manager</Link>
                                    <p className="text-slate-400 mt-1">Total Openings: 2</p>
                                </div>

                                <Link href="/job-detail-one/1" className="btn rounded-full bg-transparent group-hover:bg-emerald-600 border border-slate-100 dark:border-slate-800 text-slate-400 group-hover:text-white md:mt-0 mt-4">Apply now</Link>
                            </div>

                            <div className="group md:flex items-center justify-between p-6 rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500 mt-6">
                                <div>
                                    <Link href="/job-detail-one/1" className="text-lg font-semibold hover:text-emerald-600">Backend Developer</Link>
                                    <p className="text-slate-400 mt-1">Total Openings: 4</p>
                                </div>

                                <Link href="/job-detail-one/1" className="btn rounded-full bg-transparent group-hover:bg-emerald-600 border border-slate-100 dark:border-slate-800 text-slate-400 group-hover:text-white md:mt-0 mt-4">Apply now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Switcher/>
        </>
    )
}
