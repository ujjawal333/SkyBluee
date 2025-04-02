'use client'
import React from 'react'
import dynamic from "next/dynamic";
const Select = dynamic(()=>import('react-select'),{ssr:false})

import {FiBriefcase, FiMapPin} from '../assets/icons/vander'

export default function Form() {
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
    <form action="#">
        <div className="registration-form text-dark text-start">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                <div className="filter-search-form relative filter-border">
                    <FiBriefcase className="icons"/>
                    <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords" />
                </div>

                <div className="filter-search-form relative filter-border">
                    <FiMapPin className="icons"/>
                    <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" id="long-value-select" options={optionsOne} />

                </div>

                <div className="filter-search-form relative filter-border">
                    <FiBriefcase className="icons"/>
                    <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" id="long-value-select" options={optionsTwo} />

                </div>

                <input type="submit" id="search" name="search" style={{height:'60px'}} className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-100" value="Search" />
            </div>
        </div>
    </form>
  )
}

