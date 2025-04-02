import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Switcher from '../components/Switcher';

export default function Error() {
    return (
       <>
        <section className="relative bg-emerald-600/5">
            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div className="text-center">
                            <Link href="/"><Image src="/images/logo-icon-40.png" className="mx-auto h-10" alt="" width={40} height={40}/></Link>
                        </div>
                        <div className="title-heading text-center my-auto">
                            <Image src="/images/error.png" className="mx-auto" alt="" width={200} height={200}/>
                            <h1 className="mt-3 mb-6 md:text-4xl text-3xl font-bold">Page Not Found?</h1>
                            <p className="text-slate-400">Whoops, this is embarassing. <br /> Looks like the page you were looking for wasnt found.</p>

                            <div className="mt-4">
                                <Link href="/" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md">Back to Home</Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="mb-0 text-slate-400 font-medium">© {(new Date().getFullYear())}{" "} Jobstack. Design with <i className="mdi mdi-heart text-red-600"></i> by <Link href="/httpsreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Switcher/>
       </>
    )
}
