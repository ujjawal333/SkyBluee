import Image from 'next/image'
import Link from 'next/link'

import About from './components/about'
import HeroTen from './components/hero-ten'
import Navbar from './components/Navbar'
import Popularjobstwo from './components/Popular-Jobs-two'

import Cta from './components/cta'

import BestCompanies from './components/Best-companies'
import Counter from './components/counter'

import News from './components/News'

import { categoriesData } from './components/Data'
import Footer from './components/Footer'
import Switcher from './components/Switcher'
import SupportBar from './components/SupportBar'; 

export default function Home() {
  return (
    <>
 

{/* <SupportBar /> */}
<div/>
    <Navbar navClass="justify-start" topnavClass="bg-white dark:bg-slate-900" />

    
    <HeroTen/>

    <section className="relative md:py-24 py-16">
        <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Popular Categories</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions with SkyBlue HR. Get your own personalized salary estimate. Read reviews on over 65+ companies worldwide.</p>
            </div>

            <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 mt-8 gap-4">
                {categoriesData.map((item,index)=>{
                    return(
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 transition duration-500" key={index}>
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt=""/>
                            <div className="absolute inset-0 bg-slate-900/50"></div>

                            <div className="absolute bottom-0 p-4">
                                <Link href="" className="text-lg font-semibold text-white hover:text-emerald-600 transition-all duration-500">{item.title}</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

        <div className="container md:mt-24 md:pb-16 mt-16">
            <About/>
        </div>
    </section>

    <section className="relative bg-slate-50 dark:bg-slate-800 ">
     <Popularjobstwo />
    </section>
    <div className="container md:mt-24 mt-16">
                        <div className="grid grid-cols-1">
                            <Cta/>
                        </div>
                    </div>

    <section className="relative md:py-24 py-16">
        <div className="container md:pb-24 pb-16">
            <Counter/>
        </div>
        <BestCompanies />
        <News/>
    </section>
    <Footer/>
    <Switcher/>
    </>
  )
}
