'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Users, GraduationCap, BookOpen, ThumbsUp } from 'lucide-react';

const AchievementsSection = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [learnerCount, setLearnerCount] = useState(0);
  const [instructorCount, setInstructorCount] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  
  const sectionRef = useRef(null);
  const animationTriggered = useRef(false);

  const animateValue = ({ setter, start, end, duration }) => {
    let startTimestamp = null;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setter(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationTriggered.current) {
          animationTriggered.current = true;
          
          // Animate counters
          animateValue({ setter: setStudentCount, start: 0, end: 20, duration: 2000 });
          animateValue({ setter: setLearnerCount, start: 0, end: 17, duration: 2000 });
          animateValue({ setter: setInstructorCount, start: 0, end: 70, duration: 2000 });
          animateValue({ setter: setSatisfactionRate, start: 0, end: 98, duration: 2000 });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    // Updated background to support dark mode
    <div className="relative w-full bg-[#fbfdff] dark:bg-slate-900 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-16 py-10 sm:py-16 md:py-20 mt-6 sm:mt-8 md:mt-10" ref={sectionRef}>
      {/* Match max-width with hero section */}
      <div className="max-w-full xl:max-w-[100rem] 2xl:max-w-[120rem] mx-auto">
        {/* Section Header with blue accent - Responsive adjustments */}
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="hidden sm:block w-10 md:w-16 lg:w-20 h-1 bg-blue-600 dark:bg-blue-500"></div>
            <h2 className="text-2xl sm:text-3xl font-CanelaDeck md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-center">
              <span className="text-gray-900 dark:text-white">Trusted by </span>
              <span className="text-blue-600 dark:text-blue-400">Companies</span>
              <span className="text-gray-900 dark:text-white"> Achievements</span>
            </h2>
            <div className="hidden sm:block w-10 md:w-16 lg:w-20 h-1 bg-blue-600 dark:bg-blue-500"></div>
          </div>
          {/* Mobile-only divider */}
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 block sm:hidden mt-2"></div>
        </div>
        
        {/* Stats Grid - Improved responsiveness with better breakpoints to match hero section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* Stat Box 1 - Enhanced for all screen sizes and dark mode */}
          <div className="relative border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center shadow-sm dark:shadow-blue-900/10 hover:shadow-md dark:hover:shadow-blue-900/20 transition-shadow duration-300 bg-white dark:bg-slate-800">
            <div className="absolute -top-5 sm:-top-6 md:-top-8 -left-3 sm:-left-4 md:-left-6 bg-blue-50 dark:bg-blue-900/20 p-3 md:p-4 rounded-full shadow-sm dark:shadow-blue-900/10">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-Urbanist font-bold text-gray-800 dark:text-white mt-3 md:mt-4 mb-1 md:mb-2">{studentCount}k+</h3>
            <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-600 dark:text-gray-300 font-GTAmerican text-center">Our Happy Students</p>
          </div>
          
          {/* Stat Box 2 */}
          <div className="relative border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center shadow-sm dark:shadow-blue-900/10 hover:shadow-md dark:hover:shadow-blue-900/20 transition-shadow duration-300 bg-white dark:bg-slate-800">
            <div className="absolute -top-5 sm:-top-6 md:-top-8 -left-3 sm:-left-4 md:-left-6 bg-blue-50 dark:bg-blue-900/20 p-3 md:p-4 rounded-full shadow-sm dark:shadow-blue-900/10">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-Urbanist font-bold text-gray-800 dark:text-white mt-3 md:mt-4 mb-1 md:mb-2">{learnerCount}k+</h3>
            <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-600 dark:text-gray-300 font-GTAmerican text-center">Enrolled Learners</p>
          </div>
          
          {/* Stat Box 3 */}
          <div className="relative border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center shadow-sm dark:shadow-blue-900/10 hover:shadow-md dark:hover:shadow-blue-900/20 transition-shadow duration-300 bg-white dark:bg-slate-800">
            <div className="absolute -top-5 sm:-top-6 md:-top-8 -left-3 sm:-left-4 md:-left-6 bg-blue-50 dark:bg-blue-900/20 p-3 md:p-4 rounded-full shadow-sm dark:shadow-blue-900/10">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-Urbanist font-bold text-gray-800 dark:text-white mt-3 md:mt-4 mb-1 md:mb-2">{instructorCount}k+</h3>
            <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-600 dark:text-gray-300 font-GTAmerican text-center">Expert Instructor</p>
          </div>
          
          {/* Stat Box 4 */}
          <div className="relative border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center shadow-sm dark:shadow-blue-900/10 hover:shadow-md dark:hover:shadow-blue-900/20 transition-shadow duration-300 bg-white dark:bg-slate-800">
            <div className="absolute -top-5 sm:-top-6 md:-top-8 -left-3 sm:-left-4 md:-left-6 bg-blue-50 dark:bg-blue-900/20 p-3 md:p-4 rounded-full shadow-sm dark:shadow-blue-900/10">
              <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-Urbanist font-bold text-gray-800 dark:text-white mt-3 md:mt-4 mb-1 md:mb-2">{satisfactionRate}%</h3>
            <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-600 dark:text-gray-300 font-GTAmerican text-center">Satisfaction Rate</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;