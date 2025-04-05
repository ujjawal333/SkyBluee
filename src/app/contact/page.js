"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Switcher from '../components/Switcher';

import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  
  // State to track if the location is selected/focused
  const [locationFocused, setLocationFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  
  const toggleLocationFocus = () => {
    setLocationFocused(!locationFocused);
  };

  return (
    <>
      <Navbar />
      <div className="relative w-full bg-white dark:bg-slate-900 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-4 2xl:px-16 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-16 2xl:py-20 mt-20">
        <div className="max-w-full lg:max-w-full xl:max-w-7xl 2xl:max-w-[120rem] mx-auto">
          {/* Section Header with consistent styling */}
          <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 md:mb-16">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <div className="hidden sm:block w-10 md:w-16 lg:w-20 h-1 bg-emerald-500 dark:bg-emerald-400"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-center">
                <span className="text-gray-900 dark:text-white">Contact </span>
                <span className="text-emerald-500 dark:text-emerald-400">Us</span>
              </h2>
              <div className="hidden sm:block w-10 md:w-16 lg:w-20 h-1 bg-emerald-500 dark:bg-emerald-400"></div>
            </div>
            {/* Mobile-only divider */}
            <div className="w-20 h-1 bg-emerald-500 dark:bg-emerald-400 block sm:hidden mt-2"></div>
            <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-600 dark:text-gray-300 mt-4 sm:mt-6 text-center max-w-2xl">
              Feel free to reach out to us for any questions or inquiries
            </p>
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-16 lg:mb-16 xl:mb-16">
            {/* Left side - Image with cards */}
            <div className="relative">
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                alt="Customer Service Representative"
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[500px] object-cover rounded-lg shadow-md dark:shadow-emerald-900/10"
              />
              
              {/* Contact Cards - positioned below on mobile, overlapping on desktop */}
              <div className="mt-6 lg:absolute lg:-bottom-24 lg:left-0 lg:right-0 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* For any Query Card */}
                <div className="bg-emerald-600 dark:bg-emerald-700 p-4 sm:p-5 md:p-6 py-6 sm:py-8 md:py-10 lg:p-6 lg:py-10 xl:p-6 xl:py-10 rounded-lg text-white shadow-lg dark:shadow-emerald-900/20">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-8 xl:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-xl xl:text-xl font-semibold mb-2 sm:mb-3 text-center">For any Query?</h3>
                  <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm opacity-90 text-center">Free +68 (025)-9875</p>
                  <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm opacity-90 text-center">Free +68 (026)-9879</p>
                </div>

                {/* Write email Us Card */}
                <div className="bg-emerald-600 dark:bg-emerald-700 p-4 sm:p-5 md:p-6 py-6 sm:py-8 md:py-10 lg:p-6 lg:py-10 xl:p-6 xl:py-10 rounded-lg text-white shadow-lg dark:shadow-emerald-900/20">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-8 xl:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-xl xl:text-xl font-semibold mb-2 sm:mb-3 text-center">Write email Us</h3>
                  <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm opacity-90 text-center">admin@example.com</p>
                  <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm opacity-90 text-center">support@example.com</p>
                </div>

                {/* Visit anytime Card */}
                <div 
                  className={`bg-emerald-600 dark:bg-emerald-700 p-4 sm:p-5 md:p-6 py-6 sm:py-8 md:py-10 lg:p-6 lg:py-10 xl:p-6 xl:py-10 rounded-lg text-white shadow-lg dark:shadow-emerald-900/20 cursor-pointer ${locationFocused ? 'ring-2 ring-emerald-300 dark:ring-emerald-500/50' : ''}`}
                  onClick={toggleLocationFocus}
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-8 xl:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-xl xl:text-xl font-semibold mb-2 sm:mb-3 text-center">Visit anytime</h3>
                  <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm opacity-90 text-center">427 Hall Place</p>
                  <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm opacity-90 text-center">Longview, Texas</p>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="space-y-6 mt-16 lg:mt-0">
              <div className="mb-6">
                <p className="text-emerald-600 dark:text-emerald-400 font-medium text-base sm:text-lg lg:text-base xl:text-base">Send us email</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-3xl font-bold text-gray-900 dark:text-white mt-2">Feel Free to write</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full p-3 sm:p-4 lg:p-4 xl:p-4 rounded-lg bg-gray-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent text-sm sm:text-base dark:text-white dark:placeholder-gray-400"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full p-3 sm:p-4 lg:p-4 xl:p-4 rounded-lg bg-gray-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent text-sm sm:text-base dark:text-white dark:placeholder-gray-400"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Enter Subject"
                    className="w-full p-3 sm:p-4 lg:p-4 xl:p-4 rounded-lg bg-gray-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent text-sm sm:text-base dark:text-white dark:placeholder-gray-400"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                  <input
                    type="tel"
                    placeholder="Enter Phone"
                    className="w-full p-3 sm:p-4 lg:p-4 xl:p-4 rounded-lg bg-gray-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent text-sm sm:text-base dark:text-white dark:placeholder-gray-400"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <textarea
                  placeholder="Enter Message"
                  rows={6}
                  className="w-full p-3 sm:p-4 lg:p-4 xl:p-4 rounded-lg bg-gray-50 dark:bg-slate-800 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent text-sm sm:text-base dark:text-white dark:placeholder-gray-400"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />

                <button
                  type="submit"
                  className="bg-emerald-600 dark:bg-emerald-500 text-white px-8 sm:px-10 lg:px-10 xl:px-10 py-3 sm:py-4 lg:py-4 xl:py-4 rounded-full font-medium hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Map Section Header */}
          <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 mt-16 sm:mt-20 lg:mt-44 xl:mt-44">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <div className="hidden sm:block w-10 md:w-16 lg:w-20 h-1 bg-emerald-500 dark:bg-emerald-400"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-center">
                <span className="text-gray-900 dark:text-white">Our </span>
                <span className="text-emerald-500 dark:text-emerald-400">Locations</span>
              </h2>
              <div className="hidden sm:block w-10 md:w-16 lg:w-20 h-1 bg-emerald-500 dark:bg-emerald-400"></div>
            </div>
            {/* Mobile-only divider */}
            <div className="w-20 h-1 bg-emerald-500 dark:bg-emerald-400 block sm:hidden mt-2"></div>
          </div>
          
          {/* Location Section */}
          <div className="mt-8 sm:mt-12">
            <div className={`rounded-lg overflow-hidden shadow-lg dark:shadow-emerald-900/20 ${locationFocused ? 'ring-2 ring-emerald-500 dark:ring-emerald-400' : ''}`}>
              {/* Google Map embedding */}
              <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[500px] bg-gray-200 dark:bg-gray-700 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106828.50119067764!2d-94.8177796!3d32.5007196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86371d91fb817f2f%3A0x7dab0d4e841f2f01!2sLongview%2C%20TX!5e0!3m2!1sen!2sus!4v1710370857000!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  className="absolute inset-0"
                ></iframe>
                
                {/* Contact information overlayed on the map */}
                <div className="absolute top-4 sm:top-6 md:top-8 lg:top-8 xl:top-8 left-4 sm:left-6 md:left-8 lg:left-8 xl:left-8 bg-white dark:bg-slate-800 p-4 sm:p-5 md:p-6 lg:p-6 xl:p-6 rounded-lg shadow-lg dark:shadow-emerald-900/20 max-w-[220px] sm:max-w-xs">
                  <h3 className="font-semibold text-lg sm:text-xl lg:text-xl xl:text-xl mb-3 sm:mb-4 dark:text-white">EduMon Headquarters</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                      <p className="text-xs sm:text-sm lg:text-base xl:text-base dark:text-gray-300">427 Hall Place, Longview, TX 75601, United States</p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                      <p className="text-xs sm:text-sm lg:text-base xl:text-base dark:text-gray-300">+68 (025)-9875</p>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 text-emerald-600 dark:text-emerald-400 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                      <p className="text-xs sm:text-sm lg:text-base xl:text-base dark:text-gray-300">admin@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional location information with clickable cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-8 mt-8 sm:mt-10 md:mt-12 lg:mt-12 xl:mt-12">
              <div 
                className={`p-4 sm:p-5 md:p-6 lg:p-6 xl:p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-400 transition-colors cursor-pointer ${locationFocused ? 'border-emerald-500 dark:border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20' : ''}`}
                onClick={toggleLocationFocus}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-16 xl:h-16 rounded-full bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-8 xl:h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-xl xl:text-xl font-semibold text-center mb-1 sm:mb-2 dark:text-white">Main Office</h3>
                <p className="text-center text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-base xl:text-base">427 Hall Place, Longview, Texas</p>
              </div>
              
              <div className="p-4 sm:p-5 md:p-6 lg:p-6 xl:p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-400 transition-colors cursor-pointer">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-16 xl:h-16 rounded-full bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-8 xl:h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-xl xl:text-xl font-semibold text-center mb-1 sm:mb-2 dark:text-white">Branch Office</h3>
                <p className="text-center text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-base xl:text-base">1020 Center St, Dallas, Texas</p>
              </div>
              
              <div className="p-4 sm:p-5 md:p-6 lg:p-6 xl:p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-400 transition-colors cursor-pointer">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-16 xl:h-16 rounded-full bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-8 xl:h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-xl xl:text-xl font-semibold text-center mb-1 sm:mb-2 dark:text-white">Support Center</h3>
                <p className="text-center text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-base xl:text-base">508 Pine St, Austin, Texas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Switcher />
    </>
  );
}