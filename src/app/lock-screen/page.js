import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import Switcher from '../components/Switcher';

export default function LockScreen() {
    return (
        <>
            <section className="h-screen flex items-center justify-center relative overflow-hidden bg-[url('/images/hero/bg3.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        <div className="p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                            <div className="text-center">
                                <Image src="/images/team/05.jpg" className="mx-auto size-20 rounded-full shadow dark:shadow-gray-800" alt="" width={120} height={120}/>
                                <h5 className="mb-6 mt-4 text-xl font-semibold">Jenny Jimenez</h5>
                            </div>
                            <form>
                                <div className="grid grid-cols-1">
                                    <div className="mb-4 ltr:text-left rtl:text-right">
                                        <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
                                        <input id="LoginPassword" type="password" className="form-input mt-3 rounded-md" required placeholder="Password:" />
                                    </div>

                                    <div className="flex justify-between mb-4">
                                        <div className="inline-flex items-center">
                                            <input className="form-checkbox text-emerald-600 rounded size-4 me-2 border border-inherit" type="checkbox" value="" id="Rememberme" />
                                            <label className="form-check-label text-slate-400" htmlFor="Rememberme">Remember me</label>
                                        </div>
                                        <p className="text-slate-400 mb-0"><Link href="/reset-password" className="text-slate-400">Forgot password ?</Link></p>
                                    </div>

                                    <div className="mb-4">
                                        <input type="submit" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full" value="Login / Sign in" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Switcher/>
        </>
    )
}