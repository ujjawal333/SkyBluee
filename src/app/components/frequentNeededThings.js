'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

export default function FrequentlyNeededThings() {
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
            title: 'Demand Letter',
            content: 'Addressed to Sky Blue Hr Solutions Pvt.Ltd, mentioning numbers of workers required in each categories with monthly salaries, period of contract, duty hours, food, accommodation, medical facilities, insurance, air passage and all other benefits to the workers.'
        },
        {
            title: 'Power Of Attorney',
            content: 'Authorizing Sky Blue Hr Solutions Pvt.Ltd, to carry on the recruitment of Nepalese manpower, including meeting up all the necessary formalities as regards to arrange for an interview and trade test sign all necessary documents and employment contacts required by the laws of Nepal, to arrange for passports and for visa endorsement from the respective embassies and to make arrangement for the workers passage to the country of employment.'
        },
        {
            title: 'Inter Party Agreement (Agency Agreement)',
            content: 'Inter party Agreement between Employer and Sky Blue Hr Solutions Pvt.Ltd'
        },
        {
            title:"Employment agreement And Guarantee Letter",
            content:"Address to Sky Blue Hr Solutions Pvt.Ltd, should executive an Employment Agreement between themselves stating fully and precisely the terms and conditions regarding demand and supply of manpower from Nepal. This agreement must be signed by both parties towards acceptance of stated terms to execution of the recruitment procedure.Guarantee on behalf the employer company stating that the worker will be working in the employing country only. This letter must be attested by the Embassy of Nepal."
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
                    <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">NEEDED LEGAL DOCUMENTS</h3>

                    <p className="text-slate-400 max-w-xl">The required documents vary from country to country but all documents are required to meet the approval formality of the Department of labor, Government of Nepal</p>

                    <div id="accordion-collapseone" data-accordion="collapse" className="mt-8">
                        {accordionData.map((item, index) => (
                            <div key={index} className={`relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4`}>
                                <h2 className="text-base font-medium">
                                    <button onClick={() => toggleAccordion(index)} type="button" className={`flex justify-between items-center p-5 w-full font-medium text-left ${activeIndex === index ? 'text-emerald-500 bg-gray-50 dark:bg-slate-800' : ''} `} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
