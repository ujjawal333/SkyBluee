import React from 'react'
import Link from 'next/link'
import {categories} from "./Data"

export default function JobCategoriesComp() {
  

    return (
        <>

            <div className="container">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
                    {categories.map((item, index) => {
                        const Icon = item.Icon
                        return (
                            <div key={index} className="group px-3 py-10 rounded-md shadow dark:shadow-gray-700 hover:shadow-emerald-600/10 dark:hover:shadow-emerald-600/10 text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
                                <div className="size-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-md text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
                                    <Icon width={20} height={20}/>
                                </div>
    
                                <div className="content mt-6">
                                    <Link href="#" className="title text-lg font-semibold hover:text-emerald-600">{item.title} <br/> {item.title2}</Link>
                                    <p className="text-slate-400 mt-3">{item.job}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}
