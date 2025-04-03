import Link from 'next/link';

import { categories } from '../components/Data';

export default function Categories() {
    const data = categories.slice(0, 5)

    return (<>

        <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Popular Categories</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions with SkyBlue HR. Get your own personalized salary estimate. Read reviews on over 65+ companies worldwide.</p>
            </div>

            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {data.map((item,index)=>{
                    const Icon =  item.Icon
                    return(
                        <div className="group px-3 py-10 rounded-md shadow dark:shadow-gray-700 hover:shadow-emerald-600/10 dark:hover:shadow-emerald-600/10 text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500" key={index}>
                            <div className="size-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-md text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
                                <Icon/>
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
