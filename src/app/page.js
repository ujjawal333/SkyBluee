import React from 'react';
import Image from 'next/image';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Switcher from './components/Switcher';
import Categories from './components/Categories';
import MillionsJob from './components/Millions-job';
import Jobs from './components/Jobs';
import BestCompanies from './components/Best-companies';
import Feature from './components/Feature';
import News from './components/News';
import ExploreJob from './components/Explore-job';
import Form from './components/form';


export default function Home() {
  return (
     <>
       <Navbar navClass='justify-end'/>
       <section className="relative md:py-56 py-36 w-full">
            <div className="absolute inset-0 bg-emerald-600/5 dark:bg-emerald-600/20"></div>
            <div className="container z-1">
                <div className="grid grid-cols-1 text-center mt-10 relative">
                    <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Join us & <span className="text-emerald-600 font-bold">Explore</span> <br /> <span className="text-emerald-600 font-bold">Thousands</span> of Jobs</h4>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">Find Jobs, Employment & Career Opportunities. Some of the companies we ve helped recruit excellent applicants over the years.</p>

                    <div className="d-flex" id="reserve-form">
                        <div className="md:w-5/6 mx-auto">
                            <div className="lg:col-span-10 mt-8">
                                <div className="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3">
                                    <Form/>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <span className="text-slate-400"><span className="text-dark">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                        </div>

                        <div className="absolute -top-20 start-1/2 -translate-x-1/2">
                            <div className="size-10 animate-[bounce_2s_infinite] bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
                                <Image src="/images/company/facebook-logo.png" className="size-6" alt=""  width={40} height={40}/>
                            </div>
                        </div>

                        <div className="absolute top-[20%] start-10">
                            <div className="size-10 animate-[spin_5s_linear_infinite] bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
                                <Image src="/images/company/google-logo.png" className="size-6" alt=""  width={40} height={40}/>
                            </div>
                        </div>

                        <div className="absolute top-[20%] end-1">
                            <div className="size-10 bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
                                <Image src="/images/company/android.png" className="size-6" alt=""  width={40} height={40}/>
                            </div>
                        </div>

                        <div className="absolute top-3/4 start-1">
                            <div className="size-10 bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
                                <Image src="/images/company/lenovo-logo.png" className="size-6" alt=""  width={40} height={40}/>
                            </div>
                        </div>

                        <div className="absolute top-3/4 end-10">
                            <div className="size-10 animate-[spin_5s_linear_infinite] bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
                                <Image src="/images/company/skype.png" className="size-6" alt=""  width={40} height={40}/>
                            </div>
                        </div>

                        <div className="absolute -bottom-32 start-1/2 -translate-x-1/2">
                            <div className="size-10 animate-pulse bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
                                <Image src="/images/company/snapchat.png" className="size-6" alt=""  width={40} height={40}/>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
       </section>
       <section className="relative md:py-24 py-16">
           <Categories />
           <div className="container md:mt-24 md:pb-16 mt-16">
               <MillionsJob />
           </div>
       </section>
       <Jobs />
       <section className="relative md:pb-24 pb-16 overflow-hidden">
           <BestCompanies />
           <Feature />
           <News />
           <ExploreJob />
       </section>
       <Footer/>
       <Switcher/>
     </>
  )
}
