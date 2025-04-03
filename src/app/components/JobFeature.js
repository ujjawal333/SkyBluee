'use client'
import Link from 'next/link';
import React from 'react'
import {featuredata} from './Data';
import {FiArrowRight} from '../assets/icons/vander'
import CompnayWorkedWithSlider from './company-worked-with-slider';

export default function JobFeature() {
   
    return (

        <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Our Clients</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Among 500+ companies , we have worked with these are some of them.</p>
            </div>

            <CompnayWorkedWithSlider/>   
        </div>
    )
}

