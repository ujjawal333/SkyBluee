'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Switcher from '../components/Switcher';

export default function JobApply() {
    // Form state and handlers for Sky Blue H.R. Solution form
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
  
    useEffect(() => {
        // Check if dark mode is enabled on initial load
        if (typeof window !== 'undefined') {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
            
            // Add event listener for dark mode changes
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'class') {
                        setIsDarkMode(document.documentElement.classList.contains('dark'));
                    }
                });
            });
            
            observer.observe(document.documentElement, { attributes: true });
            
            return () => {
                observer.disconnect();
            };
        }
    }, []);

    const [formData, setFormData] = useState({
        companyName: '',
        personalDetails: {
            name: '',
            jobAppliedFor: '',
            age: '',
            country: '',
            dateOfBirth: '',
            salary: '',
            telephone: '',
            address: '',
            email: '',
            alternativeNo: '',
            gender: '',
            maritalStatus: '',
            fatherName: '',
            motherName: '',
            photo: null, // Added photo field
        },
        passportDetails: {
            passportNo: '',
            dateOfIssue: '',
            dateOfExpire: '',
            placeOfIssue: '',
        },
        physicalDescription: {
            height: '',
            weight: '',
            religion: '',
        },
        academicQualification: '',
        training: '',
        workExperiences: '',
        languages: {
            english: { speak: '', read: '', write: '' },
            nepali: { speak: '', read: '', write: '' },
            hindi: { speak: '', read: '', write: '' },
            arabic: { speak: '', read: '', write: '' },
            others: { speak: '', read: '', write: '' },
        },
        interview: false,
        selected: '',
        remarks: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        
        // Handle file upload
        if (type === 'file') {
            if (files && files.length > 0) {
                // Create URL for preview
                const imageUrl = URL.createObjectURL(files[0]);
                setPreviewImage(imageUrl);

                // For nested file inputs (personalDetails.photo)
                if (name.includes('.')) {
                    const [parent, child] = name.split('.');
                    setFormData({
                        ...formData,
                        [parent]: {
                            ...formData[parent],
                            [child]: files[0]
                        }
                    });
                } else {
                    setFormData({
                        ...formData,
                        [name]: files[0]
                    });
                }
            }
            return;
        }
        
        // Handle nested objects
        if (name.includes('.')) {
            const [parent, child, subchild] = name.split('.');
            if (subchild) {
                setFormData({
                    ...formData,
                    [parent]: {
                        ...formData[parent],
                        [child]: {
                            ...formData[parent][child],
                            [subchild]: type === 'checkbox' ? checked : value
                        }
                    }
                });
            } else {
                setFormData({
                    ...formData,
                    [parent]: {
                        ...formData[parent],
                        [child]: type === 'checkbox' ? checked : value
                    }
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    const languageOptions = ['Good', 'Better', 'Best'];
    const languageFields = ['english', 'nepali', 'hindi', 'arabic', 'others'];
    const skillTypes = ['speak', 'read', 'write'];
    const academicOptions = ['Under SLC', 'SLC', '10+2', 'Bachelor', 'Master'];

    return (
        <>
            <Navbar navClass='justify-end nav-light' />
            <section className="relative table w-full py-36 bg-top bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/hero/bg.jpg')"}}>
                <div className="absolute inset-0 bg-emerald-900/90"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Back-End Developer</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Jobstack</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Job apply form</li>
                    </ul>
                </div>
            </section>
            
            <div className="relative">
                <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-slate-50 dark:text-slate-800">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative bg-slate-50 dark:bg-slate-800 lg:py-24 py-16">
                <div className="container">
                    <div className="md:flex justify-center">
                        <div className="lg:w-3/4">
                            {/* Sky Blue H.R. Solution Application Form */}
                            <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <div className="mb-8 flex flex-col items-center border-b border-gray-200 dark:border-gray-700 pb-6">
                                    {/* Photo Upload in Header */}
                                    <div className="mb-4">
                                        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md p-3 w-[180px] h-[220px] flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-800">
                                            <h3 className="text-gray-700 dark:text-gray-200 text-center mb-2 font-medium">Passport Size Photo</h3>
                                            
                                            {previewImage ? (
                                                <div className="relative w-full h-[150px]">
                                                    <Image 
                                                        src={previewImage} 
                                                        alt="Applicant Photo" 
                                                        fill
                                                        className="object-cover rounded"
                                                    />
                                                    <button 
                                                        type="button"
                                                        onClick={() => {
                                                            setPreviewImage(null);
                                                            setFormData({
                                                                ...formData,
                                                                personalDetails: {
                                                                    ...formData.personalDetails,
                                                                    photo: null
                                                                }
                                                            });
                                                        }}
                                                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                                    >
                                                        ×
                                                    </button>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="border-2 border-gray-200 dark:border-gray-700 h-[150px] w-[130px] flex items-center justify-center mb-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                        </svg>
                                                    </div>
                                                </>
                                            )}
                                            
                                            <input
                                                type="file"
                                                name="personalDetails.photo"
                                                accept="image/*"
                                                onChange={handleChange}
                                                className="hidden"
                                                id="photo-upload"
                                            />
                                            
                                            <label htmlFor="photo-upload" className="mt-2 cursor-pointer text-sm px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded w-full text-center">
                                                {previewImage ? "Change Photo" : "Upload Photo"}
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <h1 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">APPLICATION FORM</h1>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                                        {/* Form Fields - Full Width Now */}
                                        <div className="w-full space-y-8">
                                            {/* Applied Company Name */}
                                            <div className="space-y-1">
                                                <label className="block text-red-600 dark:text-red-400 font-semibold">Applied Company Name</label>
                                                <input
                                                    type="text"
                                                    name="companyName"
                                                    value={formData.companyName}
                                                    onChange={handleChange}
                                                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                />
                                            </div>

                                            {/* Personal Details */}
                                            <div className="space-y-4">
                                                <h2 className="text-red-600 dark:text-red-400 font-semibold border-b border-gray-300 dark:border-gray-700 pb-1">Personal Details</h2>
                                                
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Name (In Block Letter)</label>
                                                        <input
                                                            type="text"
                                                            name="personalDetails.name"
                                                            value={formData.personalDetails.name}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                    
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Job Applied for:</label>
                                                        <input
                                                            type="text"
                                                            name="personalDetails.jobAppliedFor"
                                                            value={formData.personalDetails.jobAppliedFor}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Age:</label>
                                                        <input
                                                            type="text"
                                                            name="personalDetails.age"
                                                            value={formData.personalDetails.age}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors duration-150"
                                                        />
                                                    </div>
                                                    
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Country:</label>
                                                        <input
                                                            type="text"
                                                            name="personalDetails.country"
                                                            value={formData.personalDetails.country}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                    
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Salary:</label>
                                                        <input
                                                            type="text"
                                                            name="personalDetails.salary"
                                                            value={formData.personalDetails.salary}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Date of Birth:</label>
                                                        <input
                                                            type="date"
                                                            name="personalDetails.dateOfBirth"
                                                            value={formData.personalDetails.dateOfBirth}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                    
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Address:</label>
                                                        <input
                                                            type="text"
                                                            name="personalDetails.address"
                                                            value={formData.personalDetails.address}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Telephone No:</label>
                                                        <input
                                                            type="text"
                                                            name="personalDetails.telephone"
                                                            value={formData.personalDetails.telephone}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                    
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Email:</label>
                                                        <input
                                                            type="email"
                                                            name="personalDetails.email"
                                                            value={formData.personalDetails.email}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Alternative no:</label>
                                                        <input
                                                            type="text"
                                                            name="personalDetails.alternativeNo"
                                                            value={formData.personalDetails.alternativeNo}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300 mb-2">Gender:</label>
                                                        <div className="flex space-x-4">
                                                            <label className="flex items-center space-x-2">
                                                                <input
                                                                    type="radio"
                                                                    name="personalDetails.gender"
                                                                    value="Male"
                                                                    checked={formData.personalDetails.gender === 'Male'}
                                                                    onChange={handleChange}
                                                                    className="h-4 w-4 text-emerald-600 dark:text-emerald-400 border-gray-300 dark:border-gray-600 ring-offset-white dark:ring-offset-slate-800"
                                                                />
                                                                <span className="text-gray-800 dark:text-gray-200">Male</span>
                                                            </label>
                                                            <label className="flex items-center space-x-2">
                                                                <input
                                                                    type="radio"
                                                                    name="personalDetails.gender"
                                                                    value="Female"
                                                                    checked={formData.personalDetails.gender === 'Female'}
                                                                    onChange={handleChange}
                                                                    className="h-4 w-4 text-emerald-600 dark:text-emerald-400 border-gray-300 dark:border-gray-600 ring-offset-white dark:ring-offset-slate-800"
                                                                />
                                                                <span className="text-gray-800 dark:text-gray-200">Female</span>
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300 mb-2">Marital Status:</label>
                                                        <div className="flex space-x-4">
                                                            <label className="flex items-center space-x-2">
                                                                <input
                                                                    type="radio"
                                                                    name="personalDetails.maritalStatus"
                                                                    value="Married"
                                                                    checked={formData.personalDetails.maritalStatus === 'Married'}
                                                                    onChange={handleChange}
                                                                    className="h-4 w-4 text-emerald-600 dark:text-emerald-400 border-gray-300 dark:border-gray-600 ring-offset-white dark:ring-offset-slate-800"
                                                                />
                                                                <span className="text-gray-800 dark:text-gray-200">Married</span>
                                                            </label>
                                                            <label className="flex items-center space-x-2">
                                                                <input
                                                                    type="radio"
                                                                    name="personalDetails.maritalStatus"
                                                                    value="Single"
                                                                    checked={formData.personalDetails.maritalStatus === 'Single'}
                                                                    onChange={handleChange}
                                                                    className="h-4 w-4 text-emerald-600 dark:text-emerald-400 border-gray-300 dark:border-gray-600 ring-offset-white dark:ring-offset-slate-800"
                                                                />
                                                                <span className="text-gray-800 dark:text-gray-200">Single</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Father Name:</label>
                                                        <input
                                                            type="text"
                                                            name="personalDetails.fatherName"
                                                            value={formData.personalDetails.fatherName}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                    
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Mother Name:</label>
                                                        <input
                                                            type="text"
                                                            name="personalDetails.motherName"
                                                            value={formData.personalDetails.motherName}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Passport Details */}
                                            <div className="space-y-4">
                                                <h2 className="text-red-600 dark:text-red-400 font-semibold border-b border-gray-300 dark:border-gray-700 pb-1">Passport Details</h2>
                                                
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Passport No.:</label>
                                                        <input
                                                            type="text"
                                                            name="passportDetails.passportNo"
                                                            value={formData.passportDetails.passportNo}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                    
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Date of Issue:</label>
                                                        <input
                                                            type="date"
                                                            name="passportDetails.dateOfIssue"
                                                            value={formData.passportDetails.dateOfIssue}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Date of Expire:</label>
                                                        <input
                                                            type="date"
                                                            name="passportDetails.dateOfExpire"
                                                            value={formData.passportDetails.dateOfExpire}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                    
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Place of Issue:</label>
                                                        <input
                                                            type="text"
                                                            name="passportDetails.placeOfIssue"
                                                            value={formData.passportDetails.placeOfIssue}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Physical Description */}
                                            <div className="space-y-4">
                                                <h2 className="text-red-600 dark:text-red-400 font-semibold border-b border-gray-300 dark:border-gray-700 pb-1">Physical Description:</h2>
                                                
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Height:</label>
                                                        <input
                                                            type="text"
                                                            name="physicalDescription.height"
                                                            value={formData.physicalDescription.height}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                    
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Weight:</label>
                                                        <input
                                                            type="text"
                                                            name="physicalDescription.weight"
                                                            value={formData.physicalDescription.weight}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                    
                                                    <div>
                                                        <label className="block text-gray-700 dark:text-gray-300">Religion:</label>
                                                        <input
                                                            type="text"
                                                            name="physicalDescription.religion"
                                                            value={formData.physicalDescription.religion}
                                                            onChange={handleChange}
                                                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Academic Qualification */}
                                            <div className="space-y-4">
                                                <h2 className="text-red-600 dark:text-red-400 font-semibold border-b border-gray-300 dark:border-gray-700 pb-1">Academic Qualification:</h2>
                                                
                                                <div className="flex flex-wrap gap-4">
                                                    {academicOptions.map((option) => (
                                                        <label key={option} className="flex items-center space-x-2">
                                                            <input
                                                                type="radio"
                                                                name="academicQualification"
                                                                value={option}
                                                                checked={formData.academicQualification === option}
                                                                onChange={handleChange}
                                                                className="h-4 w-4 text-emerald-600 dark:text-emerald-400 border-gray-300 dark:border-gray-600 ring-offset-white dark:ring-offset-slate-800"
                                                            />
                                                            <span className="text-gray-800 dark:text-gray-200">{option}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Training */}
                                            <div className="space-y-4">
                                                <h2 className="text-red-600 dark:text-red-400 font-semibold border-b border-gray-300 dark:border-gray-700 pb-1">Training</h2>
                                                
                                                <textarea
                                                    name="training"
                                                    value={formData.training}
                                                    onChange={handleChange}
                                                    rows="3"
                                                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors duration-150"
                                                ></textarea>
                                            </div>

                                            {/* Work Experiences */}
                                            <div className="space-y-4">
                                                <h2 className="text-red-600 dark:text-red-400 font-semibold border-b border-gray-300 dark:border-gray-700 pb-1">Work Experiences</h2>
                                                
                                                <textarea
                                                    name="workExperiences"
                                                    value={formData.workExperiences}
                                                    onChange={handleChange}
                                                    rows="3"
                                                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors duration-150"
                                                ></textarea>
                                            </div>

                                            {/* Language */}
                                            <div className="space-y-4">
                                                <h2 className="text-red-600 dark:text-red-400 font-semibold border-b border-gray-300 dark:border-gray-700 pb-1">Language:</h2>
                                                
                                                <div className="overflow-x-auto">
                                                    <table className="min-w-full border-collapse">
                                                        <thead>
                                                            <tr>
                                                                <th className="border border-gray-300 dark:border-gray-600 p-2 text-left text-gray-800 dark:text-gray-200">Language</th>
                                                                <th className="border border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200" colSpan="3">Speak</th>
                                                                <th className="border border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200" colSpan="3">Read</th>
                                                                <th className="border border-gray-300 dark:border-gray-600 p-2 text-center text-gray-800 dark:text-gray-200" colSpan="3">Write</th>
                                                            </tr>
                                                            <tr>
                                                                <th className="border border-gray-300 dark:border-gray-600 p-2 bg-gray-50 dark:bg-slate-800"></th>
                                                                {skillTypes.map(type => (
                                                                    languageOptions.map(option => (
                                                                        <th key={`${type}-${option}`} className="border border-gray-300 dark:border-gray-600 p-2 text-center text-sm text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-slate-800">{option}</th>
                                                                    ))
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {languageFields.map((language) => (
                                                                <tr key={language}>
                                                                    <td className="border border-gray-300 dark:border-gray-600 p-2 capitalize text-gray-800 dark:text-gray-200">{language}</td>
                                                                    {skillTypes.map(type => (
                                                                        languageOptions.map(option => (
                                                                            <td key={`${language}-${type}-${option}`} className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                                                                                <input
                                                                                    type="radio"
                                                                                    name={`languages.${language}.${type}`}
                                                                                    value={option}
                                                                                    checked={formData.languages[language][type] === option}
                                                                                    onChange={handleChange}
                                                                                    className="h-4 w-4 text-emerald-600 dark:text-emerald-400 ring-offset-white dark:ring-offset-slate-800"
                                                                                />
                                                                            </td>
                                                                        ))
                                                                    ))}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            {/* Interview & Selection */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h2 className="text-red-600 dark:text-red-400 font-semibold mb-2">Interview</h2>
                                                    <label className="flex items-center space-x-2">
                                                        <input
                                                            type="checkbox"
                                                            name="interview"
                                                            checked={formData.interview}
                                                            onChange={handleChange}
                                                            className="h-5 w-5 text-emerald-600 dark:text-emerald-400 rounded border-gray-300 dark:border-gray-600 ring-offset-white dark:ring-offset-slate-800"
                                                        />
                                                        <span className="text-gray-800 dark:text-gray-200">Interviewed</span>
                                                    </label>
                                                </div>
                                                
                                                <div>
                                                    <h2 className="text-red-600 dark:text-red-400 font-semibold mb-2">Selected</h2>
                                                    <div className="flex space-x-4">
                                                        <label className="flex items-center space-x-2">
                                                            <input
                                                                type="radio"
                                                                name="selected"
                                                                value="Yes"
                                                                checked={formData.selected === 'Yes'}
                                                                onChange={handleChange}
                                                                className="h-4 w-4 text-emerald-600 dark:text-emerald-400 border-gray-300 dark:border-gray-600 ring-offset-white dark:ring-offset-slate-800"
                                                            />
                                                            <span className="text-gray-800 dark:text-gray-200">Yes</span>
                                                        </label>
                                                        <label className="flex items-center space-x-2">
                                                            <input
                                                                type="radio"
                                                                name="selected"
                                                                value="No"
                                                                checked={formData.selected === 'No'}
                                                                onChange={handleChange}
                                                                className="h-4 w-4 text-emerald-600 dark:text-emerald-400 border-gray-300 dark:border-gray-600 ring-offset-white dark:ring-offset-slate-800"
                                                            />
                                                            <span className="text-gray-800 dark:text-gray-200">No</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Remarks */}
                                            <div className="space-y-4">
                                                <h2 className="text-red-600 dark:text-red-400 font-semibold border-b border-gray-300 dark:border-gray-700 pb-1">Remarks:</h2>
                                                
                                                <textarea
                                                    name="remarks"
                                                    value={formData.remarks}
                                                    onChange={handleChange}
                                                    rows="3"
                                                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors duration-150"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Submit Button */}
                                    <div className="flex justify-center pt-6">
                                        <button
                                            type="submit"
                                            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-colors duration-300"
                                        >
                                            Submit Application
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Switcher/>
        </>
    )
}