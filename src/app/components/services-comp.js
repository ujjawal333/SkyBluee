import Link from 'next/link';
import { servicesdata } from "./Data";
import { FiArrowRight } from '../assets/icons/vander';

export default function ServicesComp() {
  return (
    <div className="relative w-full bg-white dark:bg-slate-900 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-16 ">
      <div className="max-w-full xl:max-w-[100rem] 2xl:max-w-[120rem] mx-auto">
        {/* Section Header with consistent styling - matching FAQ section */}
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="hidden sm:block w-10 md:w-16 lg:w-20 h-1 bg-blue-500"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-CanelaDeck xl:text-5xl 2xl:text-6xl font-bold text-center">
              <span className="text-gray-900 dark:text-white">Our </span>
              <span className="text-blue-500">Services</span>
            </h2>
            <div className="hidden sm:block w-10 md:w-16 lg:w-20 h-1 bg-blue-500"></div>
          </div>
          {/* Mobile-only divider */}
          <div className="w-20 h-1 bg-blue-500 block sm:hidden mt-2"></div>
          
          {/* Optional subtitle */}
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mt-4 text-base sm:text-lg font-GTAmerican">
            Discover our comprehensive suite of professional services designed to elevate your business
          </p>
        </div>

        {/* Services grid with premium styling */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 sm:gap-8">
          {servicesdata.map((item, index) => {
            const Icon = item.Icon;
            return (
              <div 
                className="group p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-900/10 text-center transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/30"
                key={index}
              >
                <div className="size-16 sm:size-20 flex items-center justify-center mx-auto bg-blue-500/10 group-hover:bg-blue-500 dark:bg-blue-500/20 dark:group-hover:bg-blue-500 shadow-lg rounded-lg transition-all duration-500 text-blue-500 group-hover:text-white text-2xl sm:text-3xl mb-6">
                  <Icon className="h-8 w-8" />
                </div>
                
                <div className="mt-2">
                  <Link 
                    href="#" 
                    className="text-lg sm:text-xl font-Urbanist font-semibold text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    {item.title}
                  </Link>
                  
                  <p className="text-gray-600 dark:text-gray-400 mt-4 mb-5 font-GTAmerican">
                    {item.data}
                  </p>
                  
                  <Link 
                    href="#" 
                    className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 inline-flex items-center gap-2 font-Urbanist"
                  >
                    Read More <FiArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}