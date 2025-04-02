import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CandidateDetailComp from '../components/candidate-detail-comp';
import ExploreJob from '../components/Explore-job';
import Switcher from '../components/Switcher';


import {FiMail, FiGift, FiHome, FiMapPin, FiGlobe, FiServer, FiPhone, FiFileText, FiDribbble, FaBehance, FaLinkedin, FaFacebookF, FiInstagram, FiTwitter,LuFileDown} from '../assets/icons/vander'


export default function CandidateDetail() {

    return (
        <>
            <Navbar />
            <section className="relative lg:mt-24 mt-[74px]">
                <div className="lg:container container-fluid">
                    <div className="relative shrink-0">
                        <Image src="/images/hero/bg5.jpg" className="h-64 w-full object-cover lg:rounded-xl shadow dark:shadow-gray-700" alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} />
                    </div>

                    <div className="md:flex ms-4 -mt-12">
                        <div className="md:w-full">
                            <div className="relative flex items-end">
                                <Image src="/images/team/01.jpg" width={112} height={112} className="size-28 rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" alt="" />
                                <div className="ms-4">
                                    <h5 className="text-lg font-semibold">Mr. Calvin carlo</h5>
                                    <p className="text-slate-400">Web Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           <section className="relative mt-12 md:pb-24 pb-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-7">
                            <h5 className="text-xl font-semibold">Calvin Carlo</h5>
                            <p className="text-slate-400 mt-4">Obviously IM Web Developer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using Content here, content here, making it look like readable English.</p>
                            <p className="text-slate-400 mt-4">Data Structures and Algorithms are the heart of programming. Initially most of the developers do not realize its importance but when you will start your career in software development, you will find your code is either taking too much time or taking too much space.</p>

                            <h4 className="mt-6 text-xl font-semibold">Skills :</h4>
                            <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-400">WordPress</span>
                                        <span className="text-slate-400">84%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                        <div className="bg-emerald-600 h-[6px] rounded-full" style={{ width: '84%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-400">JavaScript</span>
                                        <span className="text-slate-400">79%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                        <div className="bg-emerald-600 h-[6px] rounded-full" style={{ width: '79%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-400">HTML</span>
                                        <span className="text-slate-400">95%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                        <div className="bg-emerald-600 h-[6px] rounded-full" style={{ width: '95%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-400">Figma</span>
                                        <span className="text-slate-400">85%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                        <div className="bg-emerald-600 h-[6px] rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-400">Photoshop</span>
                                        <span className="text-slate-400">70%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                        <div className="bg-emerald-600 h-[6px] rounded-full" style={{ width: '70%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-400">Illustration</span>
                                        <span className="text-slate-400">65%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                        <div className="bg-emerald-600 h-[6px] rounded-full" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <h4 className="mt-6 text-xl font-semibold">Experience :</h4>

                            <div className="flex mt-6">
                                <div className="text-slate-400 font-semibold min-w-[80px] text-center">
                                    <Image src="/images/company/shree-logo.png" className="size-16 mx-auto mb-2 block" alt=""  width={64} height={64}/> 2019-22
                                </div>

                                <div className="ms-4">
                                    <h5 className="text-lg font-medium mb-0">Full Stack Developer</h5>
                                    <span className="text-slate-400 company-university">Shreethemes - India</span>
                                    <p className="text-slate-400 mt-2 mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. </p>
                                </div>
                            </div>

                            <div className="flex mt-6">
                                <div className="text-slate-400 font-semibold min-w-[80px] text-center">
                                    <Image src="/images/company/circle-logo.png" className="size-16 mx-auto mb-2 block" alt=""  width={64} height={64}/> 2017-19
                                </div>

                                <div className="ms-4">
                                    <h5 className="text-lg font-medium mb-0">Back-end Developer</h5>
                                    <span className="text-slate-400 company-university">CircleCI - U.S.A.</span>
                                    <p className="text-slate-400 mt-2 mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. </p>
                                </div>
                            </div>

                            <div className="rounded-md shadow dark:shadow-gray-700 p-6 mt-6">
                                <h5 className="text-xl font-semibold">Contact Me:</h5>

                                <form>
                                    <div className="grid grid-cols-12 gap-2">
                                        <div className="md:col-span-6 col-span-12">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <input name="name" id="name" type="text" className="form-input mt-2" placeholder="Name :" />
                                        </div>

                                        <div className="md:col-span-6 col-span-12">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <input name="email" id="email" type="email" className="form-input mt-2" placeholder="Email :" />
                                        </div>

                                        <div className="col-span-12">
                                            <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                            <input name="subject" id="subject" className="form-input mt-2" placeholder="Subject :" />
                                        </div>

                                        <div className="col-span-12">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <textarea name="comments" id="comments" className="form-input mt-2 textarea" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md">Send Message</button>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-5">
                            <div className="bg-slate-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 p-6 sticky top-20">
                                <h5 className="text-lg font-semibold">Personal Detail:</h5>
                                <ul className="list-none mt-4">
                                    <li className="flex justify-between mt-3 items-center font-medium ms-0">
                                        <span><FiMail className="size-4 text-slate-400 me-3 inline"/><span className="text-slate-400 me-3">Email  :</span></span>

                                        <span>thomas@mail.com</span>
                                    </li>
                                    <li className="flex justify-between mt-3 items-center font-medium ms-0">
                                        <span><FiGift  className="size-4 text-slate-400 me-3 inline"/><span className="text-slate-400 me-3">D.O.B. :</span></span>

                                        <span>31st Dec, 1996</span>
                                    </li>
                                    <li className="flex justify-between mt-3 items-center font-medium ms-0">
                                        <span><FiHome className="size-4 text-slate-400 me-3 inline"/><span className="text-slate-400 me-3">Address :</span></span>

                                        <span>15 Razy street</span>
                                    </li>
                                    <li className="flex justify-between mt-3 items-center font-medium ms-0">
                                        <span><FiMapPin className="size-4 text-slate-400 me-3 inline"/><span className="text-slate-400 me-3">City :</span></span>

                                        <span>London</span>
                                    </li>
                                    <li className="flex justify-between mt-3 items-center font-medium ms-0">
                                        <span><FiGlobe className="size-4 text-slate-400 me-3 inline"/><span className="text-slate-400 me-3">Country :</span></span>

                                        <span>UK</span>
                                    </li>
                                    <li className="flex justify-between mt-3 items-center font-medium ms-0">
                                        <span><FiServer className="size-4 text-slate-400 me-3 inline"/><span className="text-slate-400 me-3">Postal Code :</span></span>

                                        <span>521452</span>
                                    </li>
                                    <li className="flex justify-between mt-3 items-center font-medium ms-0">
                                        <span><FiPhone className="size-4 text-slate-400 me-3 inline"/><span className="text-slate-400 me-3">Mobile :</span></span>

                                        <span>(+125) 1542-8452</span>
                                    </li>

                                    <li className="flex justify-between mt-3">
                                        <span className="text-slate-400 font-medium">Social:</span>

                                        <ul className="list-none ltr:text-right rtl:text-left">
                                            <li className="inline"><Link href="https://dribbble.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><FiDribbble/></Link></li>
                                            <li className="inline"><Link href="https://www.behance.net/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><FaBehance width={15}/></Link></li>
                                            <li className="inline"><Link href="http://linkedin.com/company/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><FaLinkedin/></Link></li>
                                            <li className="inline"><Link href="https://www.facebook.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><FaFacebookF/></Link></li>
                                            <li className="inline"><Link href="https://www.instagram.com/shreethemes/" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><FiInstagram/></Link></li>
                                            <li className="inline"><Link href="https://twitter.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><FiTwitter/></Link></li>
                                            <li className="inline"><Link href="mailto:support@shreethemes.in" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><FiMail/></Link></li>
                                        </ul>
                                    </li>

                                    <li className="mt-3 w-full bg-white dark:bg-slate-900 p-3 rounded-md shadow dark:shadow-gray-700">
                                        <div className="flex items-center mb-3">
                                            <FiFileText className="size-8 text-slate-400"/>
                                            <span className="font-medium ms-2">calvin-carlo-resume.pdf</span>
                                        </div>

                                        <Link target='_blank' href="/images/calvin-carlo-resume.pdf" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md w-full inline-flex items-center gap-1" download><LuFileDown/> Download CV</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <CandidateDetailComp />
                <ExploreJob/>
            </section>
            <Footer />
            <Switcher/>
        </>
    )
}
