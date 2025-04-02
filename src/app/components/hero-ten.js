'use client'
import React from 'react'
import dynamic from 'next/dynamic';

const TinySlider = dynamic(() => import("tiny-slider-react"),{ssr:false});
import '../../../node_modules/tiny-slider/dist/tiny-slider.css';

import {FiBriefcase} from '../assets/icons/vander'
import Form from '../components/form';


export default function HeroTen() {
    const settings = {
        container: '.tiny-one-item',
        items: 1,
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 2000,
        gutter: 0,
    }
  return (
        <section className="relative mt-20">
            <div className="container-fluid relative xl:px-24">
                <div className="grid grid-cols-1 relative">
                    <div className="tiny-one-item">
                        <TinySlider settings={settings}>
                            <div className="tiny-slide">
                                <div className="relative overflow-hidden md:py-28 py-16 rounded-3xl shadow dark:shadow-gray-700 m-3 bg-[url('/images/hero/bg3.jpg')] bg-center bg-no-repeat bg-cover">
                                    <div className="absolute inset-0 bg-slate-950/70"></div>
                                    <div className="container relative">
                                        <div className="md:flex">
                                            <div className="lg:w-2/3 md:w-1/2">
                                                <h4 className="text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Find a new job and <br/> build career</h4>
                                                <p className="text-white/70 text-lg max-w-xl">Find Jobs, Employment & Career Opportunities. Some of the companies weve helped recruit excellent applicants over the years.</p>
                                            
                                                <div className="grid grid-cols-1" id="reserve-form">
                                                    <div className="mt-8">
                                                        <div className="bg-white dark:bg-slate-900 border-0 shadow rounded p-3">



                                                             <Form/>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-4">
                                                    <span className="text-white/70"><span className="text-white">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tiny-slide">
                                <div className="relative overflow-hidden md:py-28 py-16 rounded-3xl shadow dark:shadow-gray-700 m-3 bg-[url('/images/hero/bg.jpg')] bg-center bg-no-repeat bg-cover">
                                    <div className="absolute inset-0 bg-slate-950/70"></div>
                                    <div className="container relative">
                                        <div className="md:flex">
                                            <div className="lg:w-2/3 md:w-1/2">
                                                <h4 className="text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Join us & Explore <br/> Thousands of Jobs</h4>
                                                <p className="text-white/70 text-lg max-w-xl">Find Jobs, Employment & Career Opportunities. Some of the companies weve helped recruit excellent applicants over the years.</p>
                                            
                                                <div className="grid grid-cols-1" id="reserve-form">
                                                    <div className="mt-8">
                                                        <div className="bg-white dark:bg-slate-900 border-0 shadow rounded p-3">




                       
                                        <Form/>
                                   



                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-4">
                                                    <span className="text-white/70"><span className="text-white">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tiny-slide">
                                <div className="relative overflow-hidden md:py-28 py-16 rounded-3xl shadow dark:shadow-gray-700 m-3 bg-[url('/images/hero/bg2.jpg')] bg-top bg-no-repeat bg-cover">
                                    <div className="absolute inset-0 bg-slate-950/70"></div>
                                    <div className="container relative">
                                        <div className="md:flex">
                                            <div className="lg:w-2/3 md:w-1/2">
                                                <h4 className="text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Find & Hire Experts <br/> for any Job</h4>
                                                <p className="text-white/70 text-lg max-w-xl">Find Jobs, Employment & Career Opportunities. Some of the companies weve helped recruit excellent applicants over the years.</p>
                                            
                                                <div className="grid grid-cols-1" id="reserve-form">
                                                    <div className="mt-8">
                                                        <div className="bg-white dark:bg-slate-900 border-0 shadow rounded p-3">


                                                             <Form/>


                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-4">
                                                    <span className="text-white/70"><span className="text-white">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TinySlider>
                    </div>
                </div>
            </div>
        </section>
  )
}
