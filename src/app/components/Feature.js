'use client'
import Link from 'next/link';
import React from 'react';
import { featuredata } from './Data';
import { FiArrowRight } from '../assets/icons/vander';
import { motion } from 'framer-motion';

export default function Feature() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="bg-emerald-600/10 text-emerald-600 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-5">
            Key Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Here's Why You'll Love Jobstack
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
            Search all the open positions on the web. Get your own personalized salary estimate. 
            Read reviews on over 30,000+ companies worldwide.
          </p>
        </div>

        <motion.div 
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredata.map((item, index) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-emerald-600/10 rounded-2xl transform group-hover:scale-[1.03] transition-all duration-500 -z-10"></div>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 h-full border border-slate-100 dark:border-slate-700/30">
                  <div className="flex flex-col h-full">
                    <div className="size-16 mb-6 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white">
                      <Icon className="size-7" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-all duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-500 dark:text-slate-400 mb-6 flex-grow">
                      {item.data}
                    </p>
                    
                    <Link 
                      href="#" 
                      className="inline-flex items-center font-medium text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300 mt-auto"
                    >
                      <span className="mr-2">Read More</span>
                      <span className="relative inline-block overflow-hidden group-hover:translate-x-1 transition-transform duration-300">
                        <FiArrowRight className="size-5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}