import React from 'react'
import Navbar from '../components/Navbar'

import {FiBriefcase} from '../assets/icons/vander'

import Counter from '../components/counter'
import Popularjobstwo from '../components/Popular-Jobs-two'
import BrowseByCategories from '../components/BrowseByCategories'
import FindBestCompanies from '../components/FindBestCompanies'
import News from '../components/News'
import Footer from '../components/Footer'
import Switcher from '../components/Switcher'
import HeroEight from '../components/hero-eight'

export default function IndexEight() {
  return (
    <>
      <Navbar navClass='justify-end nav-light' />
      <section className="py-36 lg:py-72 lg:pb-0 md:pb-8 w-full table relative bg-[url('/images/hero/bg3.jpg')] bg-center bg-cover" id="home">
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid lg:grid-cols-12 mt-10 md:grid-cols-2 gap-[30px]">
                    <div className="lg:col-span-7 lg:me-6">
                        <h4 className="text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Find a new job and <br/> build career</h4>
                        <p className="text-white/70 text-lg max-w-xl">Find Jobs, Employment & Career Opportunities. Some of the companies weve helped recruit excellent applicants over the years.</p>
                    
                        <div className="grid grid-cols-1" id="reserve-form">
                            <div className="mt-8">
                                <div className="bg-white dark:bg-slate-900 border-0 shadow rounded p-3">
                                    <form action="#">
                                        <div className="registration-form text-dark text-start">
                                            <div className="grid md:grid-cols-12 grid-cols-1 md:gap-0 gap-6">
                                                <div className="lg:col-span-8 md:col-span-7">
                                                    <div className="filter-search-form relative filter-border">
                                                        <FiBriefcase className="icons"/>
                                                        <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords"/>
                                                    </div>
                                                </div>

                                                <div className="lg:col-span-4 md:col-span-5">
                                                    <input type="submit" id="search" name="search" style={{height:'60px'}} className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-full" value="Search"/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <span className="text-white/70"><span className="text-white">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                        </div>
                    </div>
                    <HeroEight/>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape overflow-hidden text-white dark:text-slate-900 rtl:-scale-x-[1]">
                <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16">
            <div className="container">
                <Counter/>
            </div>

            <Popularjobstwo/>

            <BrowseByCategories/>
            <div className="md:mt-24 mt-16">
                <FindBestCompanies/>
            </div>
            <News/>
        </section>
        <Footer/>
        <Switcher/>
    </>
  )
}
