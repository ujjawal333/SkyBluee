'use client'

import { FiHelpCircle } from '../assets/icons/vander';
import { useState } from 'react';

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

export default function QuesAnswer() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const QuesAnswerData = [
    {
      question: 'What services does SkyBlue HR provide?',
      answer: 'SkyBlue HR offers a comprehensive recruitment service, helping you find the right candidates from countries like Nepal, India, Bangladesh, Pakistan, Philippines, Indonesia, and Sri Lanka for international placements.'
    },
    {
      question: 'How does SkyBlue HR ensure the quality of candidates?',
      answer: 'We provide end-to-end recruitment services, including candidate screening, interviews, and document verification, ensuring the highest quality workforce for your business needs.'
    },
    {
      question: 'What industries does SkyBlue HR specialize in?',
      answer: 'We excel in sectors such as construction, oil & gas, IT, healthcare, heavy equipment operations, and hospitality, ensuring that we meet diverse staffing needs across industries.'
    },
    {
      question: 'How does the visa and immigration process work?',
      answer: 'SkyBlue HR handles all visa processing and immigration documentation, ensuring a smooth transition for candidates. We also assist with documentation attestation and government approvals.'
    },
    {
      question: 'How can I contact SkyBlue HR for recruitment services?',
      answer: 'You can reach us through our official contact numbers or email: Madan Khadka Chhetri (Chairman) at 00977-9802358960 or madankhadkachhetri@gmail.com.'
    }
  ];

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
              <span className="text-gray-900 dark:text-white">Questions & </span>
              <span className="text-blue-600 dark:text-blue-400">Answers</span>
            </h2>
            <div className="hidden sm:block w-10 md:w-16 lg:w-20 h-1 bg-blue-600 dark:bg-blue-500"></div>
          </div>
          {/* Mobile-only divider */}
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 block sm:hidden mt-2"></div>
          
          {/* Section description - updated typography and responsive sizing */}
          <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-600 dark:text-gray-300 font-GTAmerican max-w-2xl mx-auto text-center mt-4 sm:mt-6">
            Search all the open positions with SkyBlue HR. Get your own personalized salary estimate. 
            Read reviews on over 65+ companies worldwide.
          </p>
        </div>

        {/* Q&A Grid - updated layout and styling */}
        <div className="grid md:grid-cols-2 grid-cols-1 mt-8 sm:mt-10 gap-6 md:gap-8">
          {QuesAnswerData.map((item, index) => (
            <div 
              key={index} 
              className="border border-dashed border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-800 shadow-sm dark:shadow-blue-900/10 hover:shadow-md dark:hover:shadow-blue-900/20 p-6 sm:p-8 transition-all duration-300 hover:translate-y-[-2px]"
              onClick={() => toggleQuestion(index)}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20">
                  <FiHelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                </div>
                
                <div className="flex-1 ml-4">
                  <h5 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white font-Urbanist">
                    {item.question}
                  </h5>
                  
                  <div className={`mt-2 transition-all duration-300 overflow-hidden ${activeIndex === index ? 'max-h-60' : 'max-h-20 sm:max-h-16 md:max-h-20'}`}>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-GTAmerican">
                      {item.answer}
                    </p>
                  </div>
                  
                  <button 
                    className="mt-2 text-blue-600 dark:text-blue-400 font-medium text-sm transition-all duration-300 hover:underline font-Urbanist flex items-center"
                    aria-expanded={activeIndex === index}
                  >
                    {activeIndex === index ? 'Read Less' : 'Read More'}
                    <svg 
                      className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
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