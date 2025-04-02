import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import Switcher from '../components/Switcher';

export default function ResetPassword() {
    return (
        <>
        <section className="h-screen flex items-center justify-center relative overflow-hidden bg-[url('/images/hero/bg3.jpg')] bg-no-repeat bg-left-bottom bg-cover">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="container">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                        <div className="p-6">
                            <Link href="/">
                                <Image src="/images/logo-dark.png" className="mx-auto h-[24px] block dark:hidden" alt="" width={141} height={24} />
                                <Image src="/images/logo-light.png" className="mx-auto h-[24px] dark:block hidden" alt=""width={141} height={24}/>
                            </Link>
                            <h5 className="my-6 text-xl font-semibold">Reset Your Password</h5>
                            <div className="grid grid-cols-1">
                                <p className="text-slate-400 mb-6">Please enter your email address. You will receive a link to create a new password via email.</p>
                                <form className="text-left">
                                    <div className="grid grid-cols-1">
                                        <div className="mb-4 ltr:text-left rtl:text-right">
                                            <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
                                            <input id="LoginEmail" type="email" className="form-input mt-3 rounded-md" placeholder="name@example.com" />
                                        </div>

                                        <div className="mb-4">
                                            <input type="submit" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full" value="Send" />
                                        </div>

                                        <div className="text-center">
                                            <span className="text-slate-400 me-2">Remember your password ? </span><Link href="/login" className="text-black dark:text-white font-bold">Sign in</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 text-center">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Switcher/>
        </>
    )
}