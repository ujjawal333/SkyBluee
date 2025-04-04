'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import {FiDribbble, FaBehance, FaLinkedin, FaFacebookF, FiInstagram, FaTwitter, FiMail} from '../assets/icons/vander'
import { AtSign } from 'lucide-react';

export default function Footer() {

    return (
        <footer className="relative bg-slate-900 dark:bg-slate-800">
            <div className="container">
                <div className="grid grid-cols-1">
                    <div className="relative py-12">

                        <div className="relative w-full">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                                <div className="md:col-span-3">
                                    <Link href="#" className="flex justify-center md:justify-start focus:outline-none">
                                        <Image src="/images/logo-light.png" className="" alt=""  width={141} height={24}/>
                                    </Link>
                                </div>

                                <div className="md:col-span-9">
                                    <ul className="list-disc footer-list ltr:md:text-right rtl:md:text-left text-center">
                                        <li className="inline-block"><Link href="/" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium me-4">Home</Link></li>
                                        <li className="inline-block mt-[10px] md:mt-0"><Link href="/services" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium me-4">How it works</Link></li>
                                        <li className="inline-block mt-[10px] md:mt-0"><Link href="/job-list-six" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium me-4">Job</Link></li>
                                        <li className="inline-block mt-[10px] md:mt-0"><Link href="/aboutus" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium me-4">About us</Link></li>
                                        <li className="inline-block mt-[10px] md:mt-0"><Link href="/contact" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">Contact us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                <div className="container text-center">
                    <div className="grid md:grid-cols-2 items-center gap-6">
                        <div className="ltr:md:text-left rtl:md:text-right text-center">
                            <p className="mb-0 text-gray-300 font-medium">©{(new Date().getFullYear())}{" "}Sky Blue Hr Solutions Pvt.Ltd</p>
                        </div>

                        <ul className="list-none ltr:md:text-right rtl:md:text-left text-center">
                        <li className="inline">
                        <a 
                            href="https://www.threads.net/@sky_blue_1664" 
                            rel="noopener noreferrer"
                            className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white inline-flex items-center justify-center p-2 mx-1"
                        >
                            <AtSign size={16} />
                        </a>
                        </li>
                            <li className="inline"><Link href="https://www.facebook.com/share/1L36TXwmmH/?mibextid=wwXIfr" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"><FaFacebookF/></Link></li>
                            <li className="inline"><Link href="https://www.instagram.com/sky_blue_1664?igsh=bnp2amJlNTljZzBh&utm_source=qr" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"><FiInstagram/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
