import React from 'react'
import Link from 'next/link'

import {FaRegQuestionCircle, FiFileText, FiSettings,FiArrowRight} from '../assets/icons/vander'

export default function HelpAbout() {
  return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
            <div className="text-center px-6 mt-6">
                <div className="size-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                    <FaRegQuestionCircle/>
                </div>

                <div className="content mt-7">
                    <Link href="/helpcenter-faqs" className="title h5 text-lg font-semibold hover:text-emerald-600">FAQs</Link>
                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                    <div className="mt-5">
                        <Link href="/helpcenter-faqs" className="btn btn-link text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out inline-flex items-center">Read More <FiArrowRight/></Link>
                    </div>
                </div>
            </div>

            <div className="text-center px-6 mt-6">
                <div className="size-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                    <FiFileText/>
                </div>

                <div className="content mt-7">
                    <Link href="/helpcenter-guides" className="title h5 text-lg font-semibold hover:text-emerald-600">Guides / Support</Link>
                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                    <div className="mt-5">
                        <Link href="/helpcenter-guides" className="btn btn-link text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out inline-flex items-center">Read More <FiArrowRight/></Link>
                    </div>
                </div>
            </div>

            <div className="text-center px-6 mt-6">
                <div className="size-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                        <FiSettings/>
                </div>

                <div className="content mt-7">
                    <Link href="/helpcenter-support" className="title h5 text-lg font-semibold hover:text-emerald-600">Support Request</Link>
                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                    <div className="mt-5">
                        <Link href="/helpcenter-support" className="btn btn-link text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out inline-flex items-center">Read More<FiArrowRight/></Link>
                    </div>
                </div>
            </div>
        </div>
  )
}
