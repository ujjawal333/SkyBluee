'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Switcher from '../components/Switcher';

export default function Maintenance() {
    const [minutes, setMinutes] = useState(0);
    const [remainingSeconds, setRemainingSeconds] = useState(0);

    useEffect(() => {

        let intervalId = setInterval(() => {
            calculateTimeRemaining()
        }, 1000);

        var seconds = 3599;
        function calculateTimeRemaining() {

            const minutes = Math.round((seconds - 30) / 60);
            const remainingSeconds = seconds % 60;

            setMinutes(minutes);
            setRemainingSeconds(remainingSeconds);

            if (seconds === 0) {
                clearInterval(intervalId);
            } else {
                seconds = seconds - 1;
            }
        }

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
       <>
        <section className="md:h-screen py-36 flex items-center justify-center relative overflow-hidden bg-[url('/images/hero/bg3.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="container relative z-3 text-center">
                <div className="grid grid-cols-1">
                    <Image src="/images/logo-icon-40.png" className="mx-auto h-10" alt="" width={40} height={40}/>
                    <h1 className="text-white mb-6 mt-8 md:text-5xl text-3xl font-bold">We Are Back Soon...</h1>
                    <p className="text-white/70 text-lg max-w-xl mx-auto">Find Jobs, Employment & Career Opportunities. Some of the companies weve helped recruit excellent applicants over the years.</p>
                </div>

                <div className="grid grid-cols-1 mt-10">
                    <div className="text-center">
                        <span id="maintenance" className="timer text-white text-[56px] tracking-[1px]">{minutes}:{remainingSeconds}</span>
                        <span className="block text-base font-semibold uppercase text-white">Minutes</span>

                    </div>
                </div>

                <div className="grid grid-cols-1 mt-8">
                    <div className="text-center subcribe-form">
                        <form className="relative mx-auto max-w-xl">
                            <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border dark:border-gray-700" placeholder="Enter your email id.." />
                            <button type="submit" className="btn absolute top-[2px] end-[3px] h-[46px] bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-full">Subcribe Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <Switcher/>
       </>
    )
}
