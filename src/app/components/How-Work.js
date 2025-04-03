// home three //
import Link from 'next/link';
import { FiAirplay, FiArrowRight, FiChrome, TbCameraPlus } from '../assets/icons/vander';

export default function Works() {
    const home = [
        {
            title: 'Create Account',
            deta: 'The phrasal sequence of the is now so that many campaign and benefit',
            Icon:FiAirplay
        },
        {
            title: 'Complete Your Profile',
            deta: 'The phrasal sequence of the is now so that many campaign and benefit',
            Icon:FiChrome
        },
        {
            title: 'Apply Job or Hire',
            deta: 'The phrasal sequence of the is now so that many campaign and benefit',
            Icon:TbCameraPlus
        }
    ];

    return (

        <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">How its Work?</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions with SkyBlue HR. Get your own personalized salary estimate. Read reviews on over 65+ companies worldwide.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
                {home.map((item, index) => {
                    const Icon = item.Icon
                    return(
                        <div className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6 text-center" key={index}>
                        <div className="size-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                           <Icon width={24} height={24}/>
                        </div>

                        <div className="content mt-7" >
                            <Link href="#" className="title h5 text-lg font-semibold hover:text-emerald-600">{item.title}</Link>
                            <p className="text-slate-400 mt-3">{item.deta}</p>

                            <div className="mt-5">
                                <Link href="#" className="btn btn-link text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out inline-flex items-center">Read More<FiArrowRight/> </Link>
                            </div>
                        </div>

                    </div>
                    )
                })}
            </div>
        </div>

    )
}