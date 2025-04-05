'use client'

import Link from 'next/link';
import { FiArrowRight } from '../assets/icons/vander';
import { featuredata } from './Data';

// Optional BlueCurve component to match the HeroSection design pattern
const BlueCurve = ({ 
  className = '', 
  position = 'top-right' 
}) => {
  return (
    <div 
      className={`absolute bg-blue-600 dark:bg-blue-500 -z-1 ${className}`}
      aria-hidden="true"
    />
  );
};

export default function Feature() {
  return (
    <section className="relative w-full bg-[#fbfdff] dark:bg-slate-900 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-16 py-10 sm:py-16 md:py-20">
      {/* Top-left blue curve - hidden on smallest screens */}
      <BlueCurve 
        className="hidden sm:block w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-br-full top-0 left-0"
        position="top-left"
      />
      
      <div className="max-w-full xl:max-w-[100rem] 2xl:max-w-[120rem] mx-auto relative z-10">
        {/* Section Header with blue accent - Responsive adjustments */}
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="hidden sm:block w-10 md:w-16 lg:w-20 h-1 bg-blue-600 dark:bg-blue-500"></div>
            <h2 className="text-2xl sm:text-3xl font-CanelaDeck md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-center">
              <span className="text-gray-900 dark:text-white">Why you'll trust </span>
              <span className="text-blue-600 dark:text-blue-400">SkyBlue HR Solution</span>
            </h2>
            <div className="hidden sm:block w-10 md:w-16 lg:w-20 h-1 bg-blue-600 dark:bg-blue-500"></div>
          </div>
          {/* Mobile-only divider */}
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 block sm:hidden mt-2"></div>
          
          {/* Section description - updated typography and responsive sizing */}
          <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-600 dark:text-gray-300 font-GTAmerican max-w-2xl mx-auto text-center mt-4 sm:mt-6">
            Find skilled workers for global opportunities. Get reliable recruitment solutions. 
            Connect with trusted employers across various industries.
          </p>
        </div>

        {/* Feature cards grid - updated to match other sections */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-8 sm:mt-10 gap-6 md:gap-8">
          {featuredata.map((item, index) => {
            const Icon = item.Icon
            return (
              <div 
                key={index} 
                className="group p-6 sm:p-8 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-800 shadow-sm dark:shadow-blue-900/10 hover:shadow-md dark:hover:shadow-blue-900/20 text-center transition-all duration-500 hover:translate-y-[-4px]"
              >
                {/* Icon container - rounded and blue accents to match */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 text-blue-600 dark:text-blue-400 group-hover:text-white rounded-full text-2xl flex items-center justify-center shadow-sm dark:shadow-blue-900/10 transition duration-500 mx-auto">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7"/>
                </div>
                
                <div className="mt-4 sm:mt-6">
                  {/* Card title - improved typography and hover effect */}
                  <h3 className="text-lg sm:text-xl font-Urbanist font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-500">
                    <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                      {item.title}
                    </Link>
                  </h3>
                  
                  {/* Card description - improved typography */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-GTAmerican mt-3 mb-3 sm:mb-4">
                    {item.data}
                  </p>
                  
                  {/* Read more link - updated to match other CTAs */}
                  <Link 
                    href="#" 
                    className="text-blue-600 dark:text-blue-400 font-medium transition-all duration-500 inline-flex items-center hover:translate-x-1"
                  >
                    <span className="font-Urbanist">Read More</span> 
                    <FiArrowRight className='ml-1.5 w-4 h-4'/>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      
      {/* Bottom-right blue curve - hidden on smallest screens */}
      <BlueCurve 
        className="hidden sm:block w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-tl-full bottom-0 right-0"
        position="bottom-right"
      />
    </section>
  )
}