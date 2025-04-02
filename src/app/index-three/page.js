import React from 'react';
import Image from 'next/image';


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Switcher from '../components/Switcher';
import Works from '../components/How-Work';
import BrowseByCategories from '../components/BrowseByCategories';
import FindBestCompanies from '../components/FindBestCompanies';
import Popularjobstwo from '../components/Popular-Jobs-two';
import News from '../components/News';
import About from '../components/about';
import CtaTwo from '../components/cta-two';
import FormTwo from '../components/form-two';

export default function IndexThree() {
    return (
        <>
            <Navbar />
            <section className="relative py-36 table w-full bg-gradient-to-b from-emerald-600/20 dark:from-emerald-600/40 via-emerald-600/10 dark:via-emerald-600/20 to-transparent">
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="md:order-1 order-2">
                            <div className="bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-800 md:p-8 p-6 lg:me-10 relative">
                                <h4 className="mb-3 text-3xl font-semibold">Find Your Expected Job</h4>
                                <p className="text-slate-400">Find Jobs, Employment & Career Opportunities. Some of the companies weve helped recruit excellent applicants over the years.</p>

                                <FormTwo/>

                            </div>
                        </div>

                        <div className="md:order-2 order-1">
                            <Image src="/images/svg/woman_working_2.svg" alt="" width={0} height={0} sizes='100vw' style={{width:"100%" , height:"auto"}}/>
                        </div>
                    </div>
                </div>

                <div className="container mt-16">
                    <div className="grid md:grid-cols-10 sm:grid-cols-5 grid-cols-4 justify-center gap-[30px]">
                        <div className="size-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <Image src="/images/company/circle-logo.png" className="h-7" alt="" width={28} height={28}/>
                        </div>

                        <div className="size-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <Image src="/images/company/android.png" className="h-7" alt="" width={28} height={28}/>
                        </div>

                        <div className="size-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <Image src="/images/company/google-logo.png" className="h-7" alt="" width={28} height={28}/>
                        </div>

                        <div className="size-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <Image src="/images/company/facebook-logo.png" className="h-7" alt="" width={28} height={28}/>
                        </div>

                        <div className="size-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <Image src="/images/company/lenovo-logo.png" className="h-7" alt="" width={28} height={28}/>
                        </div>

                        <div className="size-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <Image src="/images/company/linkedin.png" className="h-7" alt="" width={28} height={28}/>
                        </div>

                        <div className="size-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <Image src="/images/company/skype.png" className="h-7" alt="" width={28} height={28}/>
                        </div>

                        <div className="size-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <Image src="/images/company/spotify.png" className="h-7" alt="" width={28} height={28}/>
                        </div>

                        <div className="size-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <Image src="/images/company/telegram.png" className="h-7" alt="" width={28} height={28}/>
                        </div>

                        <div className="size-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <Image src="/images/company/whatsapp.png" className="h-7" alt="" width={28} height={28}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <Works />
                <div className="container md:mt-24 mt-16">
                   <About/>
                </div>

                <BrowseByCategories />
                <Popularjobstwo />
            </section >
           <CtaTwo/>
            <section className="relative md:py-24 py-16">
                <FindBestCompanies />
                <News />
            </section>
            <Footer />
            <Switcher/>

        </>

    )
}