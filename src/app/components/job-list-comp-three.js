'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiChevronLeft, FiChevronRight, FiDollarSign, FiCalendar, FiHome, FiBriefcase, FiAward, FiHeart } from 'react-icons/fi';

// Sample job data with enhanced imagery and details
const jobListings = [
    {
        id: 1,
        title: "Construction Worker",
        company: "Al Mansour Construction",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        location: "Riyadh, Saudi Arabia",
        salary: "$450-550/month",
        jobtype: "Full Time",
        contractDuration: "2 Years",
        deadline: "30 May 2025",
        accommodation: "Provided",
        food: "Provided",
        benefits: ["Medical Insurance", "Transportation", "Visa Sponsored"],
        requirements: ["1+ year experience", "No specific qualification needed"],
        verify: "Verified Employer",
        rating: "4.8/5",
        day: "Posted 2 days ago",
        headline: "We are looking for experienced construction workers to join our team in Riyadh. Work on large-scale construction projects with competitive salary and benefits.",
        skills: ["Construction", "Manual Labor", "Carpentry", "Masonry"],
        apply: "Apply Now",
        featured: true,
        countryFlag: "🇸🇦"
    },
    {
        id: 2,
        title: "Hotel Housekeeping Staff",
        company: "Grand Plaza Hotels",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        location: "Dubai, UAE",
        salary: "$400-500/month",
        jobtype: "Full Time",
        contractDuration: "2 Years",
        deadline: "25 May 2025",
        accommodation: "Provided",
        food: "Provided",
        benefits: ["Medical Insurance", "Transportation", "Visa Sponsored"],
        requirements: ["Basic English", "0-1 year experience"],
        verify: "Verified Employer",
        rating: "4.7/5",
        day: "Posted 3 days ago",
        headline: "Join our 5-star hotel as housekeeping staff. Responsibilities include cleaning and maintaining guest rooms and hotel areas. Previous experience preferred but not required.",
        skills: ["Cleaning", "Housekeeping", "Customer Service", "Organization"],
        apply: "Apply Now",
        featured: false,
        countryFlag: "🇦🇪"
    },
    {
        id: 3,
        title: "Factory Worker",
        company: "Al Khaleej Industries",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        location: "Industrial City, Qatar",
        salary: "$420-480/month",
        jobtype: "Full Time",
        contractDuration: "2 Years",
        deadline: "28 May 2025",
        accommodation: "Provided",
        food: "Allowance",
        benefits: ["Medical Insurance", "Transportation", "Visa Sponsored"],
        requirements: ["No experience required", "Good physical health"],
        verify: "Verified Employer",
        rating: "4.5/5",
        day: "Posted 1 day ago",
        headline: "Seeking factory workers for our manufacturing facility. Duties include assembly line work, packaging, and quality control. No prior experience necessary, training provided.",
        skills: ["Manufacturing", "Assembly", "Packaging", "Quality Control"],
        apply: "Apply Now",
        featured: true,
        countryFlag: "🇶🇦"
    },
    {
        id: 4,
        title: "Driver (Light Vehicle)",
        company: "Al Tayer Transport",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        location: "Abu Dhabi, UAE",
        salary: "$500-600/month",
        jobtype: "Full Time",
        contractDuration: "2 Years",
        deadline: "22 May 2025",
        accommodation: "Allowance",
        food: "Allowance",
        benefits: ["Medical Insurance", "Transportation", "Visa Sponsored"],
        requirements: ["Valid Driving License", "2+ years experience"],
        verify: "Verified Employer",
        rating: "4.6/5",
        day: "Posted 5 days ago",
        headline: "Looking for experienced drivers with clean driving records. Must have valid driving license and experience in navigating city traffic. Good communication skills required.",
        skills: ["Driving", "Navigation", "Customer Service", "Time Management"],
        apply: "Apply Now",
        featured: false,
        countryFlag: "🇦🇪"
    }
];

export default function PremiumJobListComp() {
    const [activeTab, setActiveTab] = useState("all");
    const [filteredJobs, setFilteredJobs] = useState(jobListings);
    const [savedJobs, setSavedJobs] = useState([]);
    
    // Toggle job saved status
    const toggleSaveJob = (jobId) => {
        if (savedJobs.includes(jobId)) {
            setSavedJobs(savedJobs.filter(id => id !== jobId));
        } else {
            setSavedJobs([...savedJobs, jobId]);
        }
    };
    
    // Effect to filter jobs when tab changes
    useEffect(() => {
        if (activeTab === "featured") {
            setFilteredJobs(jobListings.filter(job => job.featured));
        } else {
            setFilteredJobs(jobListings);
        }
    }, [activeTab]);

    return (
        <section className="relative bg-slate-50 dark:bg-gray-900 py-12">
            <div className="container max-w-7xl mx-auto px-4">
                {/* Simple Job Tabs */}
                <div className="mb-10 flex justify-center">
                    <div className="inline-flex p-1 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                        <button 
                            onClick={() => setActiveTab("all")}
                            className={`py-2 px-6 rounded-md font-medium transition-all duration-300 ${activeTab === "all" ? 'bg-emerald-600 text-white' : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600'}`}
                        >
                            All Jobs
                        </button>
                        <button 
                            onClick={() => setActiveTab("featured")}
                            className={`py-2 px-6 rounded-md font-medium transition-all duration-300 ${activeTab === "featured" ? 'bg-emerald-600 text-white' : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600'}`}
                        >
                            Featured Jobs
                        </button>
                    </div>
                </div>
                
                {/* Job Listings */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                    {filteredJobs.map((job, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative bg-white dark:bg-gray-800 p-6 border-l-4 border-emerald-500"
                        >
                            {job.featured && (
                                <div className="absolute right-0 top-0">
                                    <div className="bg-amber-500 text-white text-xs font-bold py-1 px-3">
                                        Featured
                                    </div>
                                </div>
                            )}
                            
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-16 h-16 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                                    <img src={job.image} className="w-full h-full object-cover" alt={job.company} />
                                </div>
                                <div className="ml-4">
                                    <Link href={`/job-detail-three/${job.id}`} className="text-xl font-bold text-gray-800 dark:text-white hover:text-emerald-600">
                                        {job.title}
                                    </Link>
                                    <div className="flex items-center mt-1 text-gray-600 dark:text-gray-300">
                                        <span className="font-medium">{job.company}</span>
                                        <span className="mx-2">•</span>
                                        <span className="flex items-center">
                                            <span className="text-lg mr-1">{job.countryFlag}</span>
                                            {job.location.split(',')[0]}
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs px-2 py-0.5 rounded">
                                            {job.jobtype}
                                        </span>
                                        <span className="ml-2 text-amber-500 text-xs bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded">
                                            {job.day}
                                        </span>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => toggleSaveJob(job.id)}
                                    className={`ml-auto w-8 h-8 flex items-center justify-center rounded-full ${
                                        savedJobs.includes(job.id) 
                                        ? 'text-red-500' 
                                        : 'text-gray-400 hover:text-red-500'
                                    }`}
                                >
                                    <FiHeart className={`h-5 w-5 ${savedJobs.includes(job.id) ? 'fill-current' : ''}`} />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-5">
                                <div className="flex items-center">
                                    <FiDollarSign className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Salary</p>
                                        <p className="text-sm font-semibold text-gray-800 dark:text-white">{job.salary}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FiCalendar className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Contract</p>
                                        <p className="text-sm font-semibold text-gray-800 dark:text-white">{job.contractDuration}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <div className="flex items-center text-xs text-emerald-600 dark:text-emerald-400">
                                        <FiHome className="h-3 w-3 mr-1" />
                                        <span>Accommodation: {job.accommodation}</span>
                                    </div>
                                    <div className="flex items-center text-xs text-blue-600 dark:text-blue-400">
                                        <FiBriefcase className="h-3 w-3 mr-1" />
                                        <span>Food: {job.food}</span>
                                    </div>
                                </div>
                                
                                <div className="flex justify-between items-center mt-3">
                                    <div className="flex items-center">
                                        <FiAward className="h-4 w-4 text-amber-500 mr-1" />
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{job.verify}</span>
                                    </div>
                                    <Link href={`/job-apply/${job.id}`} className="py-1.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors duration-300">
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* If there are no jobs */}
                {filteredJobs.length === 0 && (
                    <div className="text-center py-16">
                        <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-6">No jobs matching your criteria are currently available</p>
                        <button 
                            onClick={() => setActiveTab("all")}
                            className="py-2 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md"
                        >
                            View All Jobs
                        </button>
                    </div>
                )}

                {/* Simple Pagination */}
                {filteredJobs.length > 0 && (
                    <div className="mt-10 flex justify-center">
                        <div className="inline-flex">
                            <button className="w-10 h-10 flex justify-center items-center border border-gray-200 dark:border-gray-700 text-gray-500">
                                <FiChevronLeft className="h-5 w-5" />
                            </button>
                            <button className="w-10 h-10 flex justify-center items-center border-t border-b border-gray-200 dark:border-gray-700 text-gray-500">1</button>
                            <button className="w-10 h-10 flex justify-center items-center border-t border-b border-gray-200 dark:border-gray-700 text-gray-500">2</button>
                            <button className="w-10 h-10 flex justify-center items-center bg-emerald-600 text-white border border-emerald-600">3</button>
                            <button className="w-10 h-10 flex justify-center items-center border-t border-b border-gray-200 dark:border-gray-700 text-gray-500">4</button>
                            <button className="w-10 h-10 flex justify-center items-center border border-gray-200 dark:border-gray-700 text-gray-500">
                                <FiChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}