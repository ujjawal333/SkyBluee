import Link from 'next/link';
import { servicesdata } from "./Data";

import { FiArrowRight } from '../assets/icons/vander';

export default function ServicesComp() {
   
    return (
        <>
            <div className="container">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">

                    {servicesdata.map((item, index) => {
                        const Icon = item.Icon
                        return(
                            <div className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500" key={index}>
                                <div className="size-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-skyblue dark:bg-emerald-600/10 dark:group-hover:bg-skyblue shadow dark:shadow-gray-700 rounded-lg transition-all duration-500 text-skyblue group-hover:text-white text-2xl">
                                    <Icon className=" "/>
                                </div>
    
                                <div className="mt-4">
                                    <Link href="#" className="text-lg font-semibold hover:text-skyblue dtransition-all duration-500">{item.title}</Link>
    
                                    <p className="text-slate-400 mt-3 mb-2">{item.data}</p>
    
                                    <Link href="#" className="hover:text-skyblue font-medium transition-all duration-500 inline-flex items-center">Read More<FiArrowRight/></Link>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

        </>
    )
}
