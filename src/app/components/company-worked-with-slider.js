'use client'
import React from 'react'
import dynamic from 'next/dynamic';

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
import 'tiny-slider/dist/tiny-slider.css';

export default function HeroSlider() {
    const settings = {
        container: '.tiny-one-item',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        nav: false,
        speed: 1500,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
    };

    const imageUrls = [
        "/images/skyblue/company1.jpg",
        "/images/skyblue/company2.jpg",
        "/images/skyblue/company3.jpg",
        "/images/skyblue/company4.jpg",
        "/images/skyblue/company5.jpg",
        "/images/skyblue/company6.jpg",
        "/images/skyblue/company7.jpg",
        "/images/skyblue/company8.jpg",
        "/images/skyblue/company9.jpg",
        "/images/skyblue/company10.jpg",
        "/images/skyblue/company11.jpg",
        "/images/skyblue/company12.jpg",
        "/images/skyblue/company13.jpg",
        "/images/skyblue/company14.jpg",
        "/images/skyblue/company15.jpg",
        "/images/skyblue/company16.jpg",
    ];
    
    return (
        <section className="relative flex justify-center items-center py-8 pb-4"> {/* Reduced padding at the bottom */}
            <div className="relative w-[380px] md:w-[580px] lg:w-[680px] h-[280px] md:h-[450px] lg:h-[530px] 
                bg-white dark:bg-gray-900 rounded-[20px] border-[10px] border-black dark:border-white 
                shadow-[0px_10px_30px_rgba(0,0,0,0.2)] flex items-center justify-center">
                
                {/* The fixed frame that does not move */}
                <div className="absolute inset-0 rounded-[15px] border-[5px] border-gray-700 dark:border-gray-400"></div>

                {/* The moving slider inside the frame */}
                <div className="w-[90%] h-[90%] overflow-hidden rounded-[12px] shadow-inner">
                    <TinySlider settings={settings}>
                        {imageUrls.map((url, index) => (
                            <div key={index} className="tiny-slide">
                                <img 
                                    src={url} 
                                    alt={`Slide ${index}`} 
                                    className="w-full h-full object-cover rounded-[12px]" 
                                />
                            </div>
                        ))}
                    </TinySlider>
                </div>
            </div>
        </section>
    );
}
