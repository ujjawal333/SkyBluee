import React from 'react';

import Navbar from '../components/Navbar';
import Switcher from '../components/Switcher';
import Footer from '../components/Footer';
import TrendingService from '../components/Trending-service';
import Popularjobstwo from '../components/Popular-Jobs-two';
import BestCompanies from '../components/Best-companies';
import QuesAnswer from '../components/Question-Answer';
import ExploreJob from '../components/Explore-job';
import Form from '../components/form';
import Cta from '../components/cta';
import Counter from '../components/counter';

export default function IndexTwo() {
    return (
        <>
            <Navbar navClass='justify-end nav-light' />
            <section className="relative h-screen flex justify-center items-center  bg-cover" style={{backgroundImage:"url('/images/hero/bg.jpg')"}}>
                <div className="absolute inset-0 bg-slate-900/30"></div>
                <div className="container z-1">
                    <div className="grid grid-cols-1 text-center mt-10 relative">
                        <h4 className="lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5 font-bold text-white">Find & Hire Experts <br /> for any Job</h4>
                        <p className="text-white/50 text-lg max-w-xl mx-auto">Find Jobs, Employment & Career Opportunities. Some of the companies weve helped recruit excellent applicants over the years.</p>







                        <div className="d-flex" id="reserve-form">
                            <div className="md:w-5/6 mx-auto">
                                <div className="lg:col-span-10 mt-8">
                                    <div className="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3">
                                        <Form/>
                                    </div>
                                </div>
                            </div>
                        </div>










                        <div className="mt-4">
                            <span className="text-white/60"><span className="text-white">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <TrendingService />
                <Popularjobstwo />
                <div className="container md:mt-24 mt-16">
                    <div className="grid grid-cols-1">
                        <Cta/>
                    </div>
                </div>
                <div className="container md:mt-24 mt-16">
                    <Counter/>
                </div>
                <BestCompanies />
                <QuesAnswer />
                <ExploreJob />
            </section>
            <Footer />
            <Switcher/>
        </>
    )
}
