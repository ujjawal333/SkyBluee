'use client'
import React from 'react';

import {FiBriefcase,FiMapPin,} from '../assets/icons/vander'

import dynamic from "next/dynamic";
const Select = dynamic(()=>import('react-select'),{ssr:false})

export default function FormTwo() {

    const optionsOne = [
        { value: 'AF', label: 'Afghanistan' },
        { value: 'AZ', label: ' Azerbaijan' },
        { value: 'BS', label: 'Bahamas' },
        { value: 'BH', label: 'Bahrain' },
        { value: 'CA', label: 'Canada' },
        { value: 'CV', label: 'Cape Verde' },
        { value: 'DK', label: 'Denmark' },
        { value: 'DJ', label: 'Djibouti' },
        { value: 'ER', label: 'Eritrea' },
        { value: 'EE', label: 'Estonia' },
        { value: 'GM', label: 'Gambia' },
    ]
    
    const optionsTwo = [
        { value: '1', label: 'Full Time' },
        { value: '2', label: 'Part Time' },
        { value: '3', label: 'Freelancer' },
        { value: '4', label: 'Remote Work' },
        { value: '5', label: 'Office Work' },
    
    ]

  return (
        <form className="mt-6">
            <div className="grid grid-cols-1">
                <div className="mb-4">
                    <label className="form-label font-medium">Search :</label>
                    <div className="filter-search-form relative mt-2">
                        <FiBriefcase className="icons"/>
                        <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800" placeholder="Search your Keywords" />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="form-label font-medium">Location :</label>
                    <div className="filter-search-form relative mt-2">
                        <FiMapPin className="icons"/>     
                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" id="long-value-select" options={optionsOne} />

                    </div>
                </div>

                <div className="mb-4">
                    <label className="form-label font-medium">Job Type :</label>
                    <div className="filter-search-form relative mt-2">
                        <FiBriefcase width={18} className="icons"/>
                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" id="long-value-select" options={optionsTwo} />

                    </div>
                </div>

                <div>
                    <input type="submit" id="search" name="search" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn rounded-md" value="Search" />
                </div>
            </div>
        </form>
  )
}
