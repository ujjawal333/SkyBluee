'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import ModalVideo from 'react-modal-video';
import "../../../node_modules/react-modal-video/css/modal-video.css";

export default function CategoriesFaq() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false)

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    }

    const accordionData = [
        {
            title: 'How does your recruitment process work?',
            content: 'We provide a comprehensive recruitment service by first understanding your company and role requirements. We then create a tailored recruitment strategy using direct outreach, job boards, and digital channels to find qualified candidates. Our process covers everything from initial screening and interviewing to final onboarding and training, making your recruitment as smooth and stress-free as possible.'
        },
        {
            title: 'Which countries do you provide recruitment services from?',
            content: 'We have joint ventures with 6 countries: Nepal, India, Bangladesh, Pakistan, Sri Lanka, Indonesia, and Philippines. Through our sister companies located in these countries, we can provide workers of these nationalities through Sky Blue and team.'
        },
        {
            title: 'What is your document attestation service?',
            content: 'We handle document attestation at Nepal Embassy in Riyadh and Jeddah. Our service involves legally verifying the authenticity and accuracy of your documents. You won\'t need to visit the embassy as we have representatives present in both locations. Your company will be responsible for paying the embassy fee and any other outstanding fees.'
        },
            
         
        {
            title: 'Which sectors do you specialize in?',
            content: 'We excel in multiple sectors including Construction, Account & Finance, Oil & Gas, Healthcare (Doctors & Nurses), Heavy Equipment Operations, Automobile Industries, Airline Industries, Transportation, IT Industries, Mall & Warehouse, Agriculture, Hospitality, Telecom, and Operation & Maintenance.'
        },
        {
            title: 'How do you handle visa services for workers?',
            content: 'Our visa service facilitates the application and approval process for travelers. We help complete necessary paperwork, review documents, handle fee payments, and apply for visas. We also provide guidance throughout the visa process and assistance during the duration of stay.'
        }
    ]

  return (
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5 md:col-span-6">
                <div className="relative">
                    <div className="relative">
                        <Image src="/images/about/ab01.jpg" className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700" alt="" height={0} width={0} sizes='100vw' style={{width:"100%", height:"auto" }}/>
                        <div className="absolute top-0 translate-y-2/4 end-0 text-center">
                            <Link href="#" scroll={false} onClick={() => setOpen(true)} className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                            </Link>
                        </div>

                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="yba7hPeTSjk" onClose={() => setOpen(false)} />
                    </div>
                    <div className="absolute md:-end-5 end-0 -bottom-16">
                        <Image src="/images/about/ab02.jpg" className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700" alt=""  height={0} width={0} sizes='100vw' style={{width:"100%", height:"auto" }}/>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
                <div className="lg:ms-5">
                    <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">Frequently Asked Questions</h3>

                    <p className="text-slate-400 max-w-xl">Search all the open positions with SkyBlue HR. Get your own personalized salary estimate. Read reviews on over 65+ companies worldwide.</p>

                    <div id="accordion-collapseone" data-accordion="collapse" className="mt-8">
                        {accordionData.map((item, index) => (
                            <div key={index} className={`relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4`}>
                                <h2 className="text-base font-medium">
                                    <button onClick={() => toggleAccordion(index)} type="button" className={`flex justify-between items-center p-5 w-full font-medium text-left ${activeIndex === index ? 'text-skyblue bg-gray-50 dark:bg-slate-800' : ''} `} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                        <span>{item.title}</span>
                                        <svg data-accordion-icon className={`size-4 shrink-0 ${activeIndex === index ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                {activeIndex === index && (
                                    <div aria-labelledby="accordion-collapse-heading-1">
                                        <div className="p-5">
                                            <p className="text-slate-400 dark:text-gray-400">{item.content}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
  )
}
