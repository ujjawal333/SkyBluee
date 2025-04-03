'use client'
import Link from 'next/link';
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const featuredata = [
    {
        image: "/images/skyblue/constructor.jpeg",
        title: 'Construction',
        data: 'Opportunities in building, infrastructure, and engineering projects.'
    },
    {
        image: "/images/skyblue/accountandfinance.jpeg",
        title: 'Account & Finance',
        data: 'Careers in financial planning, accounting, and investment management.'
    },
    {
        image: "/images/skyblue/oilandgas.jpeg",
        title: 'Oil & Gas Sector',
        data: 'Jobs in energy production, refining, and petroleum industries.'
    },
    {
        image: "/images/skyblue/doctorandnurse.jpeg",
        title: 'Doctor & Nurse',
        data: 'Medical and healthcare roles in hospitals, clinics, and research.'
    },
    {
        image: "/images/skyblue/heavyEquipment.jpeg",
        title: 'Heavy Equipment Operator', 
        data: 'Operating machinery for construction, mining, and transportation.'
    },
    {
        image: "/images/skyblue/automobile.webp",
        title: 'Automobile Industries',
        data: 'Careers in vehicle manufacturing, repair, and design.'
    },
    {
        image: "/images/skyblue/aeroplane.jpg",
        title: 'Airline Industries',
        data: 'Roles in aviation, from pilots to ground support and air traffic control.'
    },
    {
        image: "/images/skyblue/transportation.jpeg",
        title: 'Transportation & Logistics',
        data: 'Jobs in supply chain, freight, and transportation management.'
    },
    {
        image: "/images/skyblue/it.jpeg",
        title: 'I.T Industries',
        data: 'Opportunities in software development, cybersecurity, and tech support.'
    },
    {
        image: "/images/skyblue/mailandwarehouse.jpeg",
        title: 'Mail & Warehouse',
        data: 'Logistics, packaging, and distribution center employment.'
    },
    {
        image: "/images/skyblue/argiculture.jpeg",
        title: 'Agriculture Sector',
        data: 'Careers in farming, food production, and sustainable agriculture.'
    },
    {
        image: "/images/skyblue/hopsitality.jpeg",
        title: 'Hospitality',
        data: 'Jobs in hotels, tourism, and customer service industries.'
    }
];

export default function JobCategoryFeature() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container mx-auto px-4 mb-30 md:mb-40 sm:mb-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900">
                SECTOR WE EXCELL IN
            </h1>
            
            <Slider {...settings}>
                {featuredata.map((item, index) => (
                    <div key={index} className="p-4">
                        <div className="group overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-900 transition-transform duration-500 hover:scale-105">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="p-4 text-center">
                                <Link href="#" className="text-lg font-semibold text-gray-800 dark:text-white hover:text-emerald-600">{item.title}</Link>
                                <p className="text-gray-500 mt-2 text-sm">{item.data}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
