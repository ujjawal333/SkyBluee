'use client'
import React, { useState, useEffect } from 'react'
import { usePathname } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar(props) {
    const { navClass, topnavClass, isContainerFluid } = props;
    const [isOpen, setMenu] = useState(true);
    const [topNavbar, setTopNavBar] = useState(false);
    const [isLangOpen, setLangOpen] = useState(false);

    let [manu , setManu] = useState('');
    let [subManu , setSubManu] = useState('');
    let [language, setLanguage] = useState('english');

    let current = usePathname();
    
    const handleClickOutside = (event) => {
        if (isLangOpen && !event.target.closest('.lang-dropdown')) {
            setLangOpen(false);
        }
    };

    useEffect(() => {
        setManu(current)
        setSubManu(current)

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", windowScroll);
            document.addEventListener('mousedown', handleClickOutside);
        }
        
        window.scrollTo(0, 0)
          
        return () => {
            if (typeof window !== "undefined") {
                document.removeEventListener('mousedown', handleClickOutside);
                window.removeEventListener("scroll", windowScroll);
            }
        };
    }, [isLangOpen, current])

    function windowScroll() {
        setTopNavBar(window.scrollY >= 50)
        if (isLangOpen) {
            setLangOpen(false);
        }
    }

    const toggleMenu = () => {
        setMenu(!isOpen)
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    }

    const toggleLangDropdown = () => {
        setLangOpen(!isLangOpen);
    };

    const changeLang = (lang) => {
        setLanguage(lang);
        setLangOpen(false);
    };

    const languages = [
        {
            code: 'english',
            name: 'English',
            flag: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png'
        },
        {
            code: 'nepali',
            name: 'नेपाली',
            flag: 'https://cdn.countryflags.com/thumbs/nepal/flag-400.png'
        },
        {
            code: 'arabic',
            name: 'العربية',
            flag: 'https://cdn.countryflags.com/thumbs/saudi-arabia/flag-400.png'
        }
    ];

    const currentLang = languages.find(lang => lang.code === language) || languages[0];

    return (
        <nav id="topnav" className={`${topNavbar ? 'nav-sticky': ''} defaultscroll is-sticky ${topnavClass} h-20 md:h-24 flex items-center`}>
            <div className={`${isContainerFluid === true ? 'container-fluid md:px-8 px-3' : 'container'} flex items-center justify-between w-full`}>
                {/* Logo on left side */}
                <div className="flex-shrink-0">
                    <Link className="logo" href="/">
                        <div className="flex flex-col">
                            <div className="relative">
                                <div className="flex items-center">
                                    {/* Airplane icon */}
                                    <div className="absolute -top-4 left-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="fill-sky-500 dark:fill-sky-400 transform rotate-45 scale-75">
                                            <path d="M22,16.21v-1.895L14,8V4c0-1.103-0.897-2-2-2s-2,0.897-2,2v4L2,14.315v1.895L10,13v2.5L8,17.5v1.395l4-0.875l4,0.875 V17.5l-2-2V13L22,16.21z"/>
                                        </svg>
                                    </div>
                                    {/* Sky Blue text with outline effect */}
                                    <div className="font-bold text-2xl sm:text-3xl tracking-wide ml-4">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-sky-600 
                                                       [text-shadow:_0_0_1px_#0284c7,_0_0_1px_#0284c7] dark:[text-shadow:_0_0_1px_#0ea5e9,_0_0_1px_#0ea5e9]">
                                            SKY BLUE
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm tracking-wider text-blue-800 dark:text-blue-600 font-medium ml-4 -mt-1">
                                H.R. Solution Pvt. Ltd
                            </div>
                        </div>
                    </Link>
                </div>
                
                {/* Navigation menu - centered in the navbar */}
                <div id="navigation" className={`${isOpen === true ? 'hidden lg:flex' : 'block'} flex-grow flex justify-center lg:items-center max-w-3xl mx-auto`}>
                    <ul className={`navigation-menu ${navClass} flex lg:flex-row flex-col lg:space-x-8 text-center`}>
                        <li className={`${manu === "/" ? 'active' : ''} py-3 lg:py-0`}>
                            <Link href="/" className="text-gray-800 dark:text-gray-200 font-medium hover:text-sky-500 hover:-translate-y-0.5 transform transition-all duration-300 relative group">
                                Home
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full ${manu === "/" ? 'w-full' : ''}`}></span>
                            </Link>
                        </li>

                        <li className={`has-submenu parent-parent-menu-item py-3 lg:py-0 ${["/job-categories","/job-grid-one", "/job-grid-two", "/job-grid-three", "/job-grid-four","/grid-item","/job-list-one", "/job-list-two", "/job-list-three", "/job-list-four","/job-list-five","/job-list-six","/list-item","/job-detail-one", "/job-detail-two", "/job-detail-three", "/detail-item","/job-apply","/job-post","/career"].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={(e)=>{setSubManu(subManu === "/job-item" ? "" : "/job-item")}} className="text-gray-800 dark:text-gray-200 font-medium hover:text-sky-500 hover:-translate-y-0.5 transform transition-all duration-300 flex items-center justify-center lg:justify-start relative group">
                                Jobs 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full ${["/job-categories","/job-grid-one", "/job-grid-two", "/job-grid-three", "/job-grid-four","/grid-item","/job-list-one", "/job-list-two", "/job-list-three", "/job-list-four","/job-list-five","/job-list-six","/list-item","/job-detail-one", "/job-detail-two", "/job-detail-three", "/detail-item","/job-apply","/job-post","/career"].includes(manu) ? 'w-full' : ''}`}></span>
                            </Link>  
                            <ul className={`submenu lg:absolute lg:shadow-lg lg:shadow-gray-200 dark:lg:shadow-gray-800 lg:rounded-md lg:bg-white dark:lg:bg-gray-900 lg:p-4 lg:min-w-[200px] ${["/job-categories","/job-grid-one", "/job-grid-two", "/job-grid-three", "/job-grid-four","/grid-item","/job-list-one", "/job-list-two", "/job-list-three", "/job-list-four","/job-list-five","/job-list-six","/list-item","/job-detail-one", "/job-detail-two", "/job-detail-three", "/detail-item","/job-apply","/job-post","/career"].includes(subManu) ? 'lg:block' : 'lg:hidden'}`}>
                                <li className={`${manu ===  "/job-categories" ? 'active' : ''} py-2`}><Link href="/job-categories" className="sub-menu-item block w-full px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300">How to apply?</Link></li>
                                <li className={`${["/job-list-one", "/job-list-two", "/job-list-three", "/job-list-four","/job-list-five","/job-list-six","/list-item"].includes(manu) ? 'active' : ''} py-2`}>
                                <Link href="/job-list-six" className="sub-menu-item block w-full px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300">Job Vacency</Link>
                                </li>
                                <li className={`${manu ===  "/job-apply" ? 'active' : ''} py-2`}><Link href="/job-apply" className="sub-menu-item block w-full px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300">Apply For A Job</Link></li>
                            </ul>
                        </li>

                        <li className={`has-submenu parent-parent-menu-item py-3 lg:py-0 ${["/aboutus","/services","/pricing","/employers-item", "/employer-list", "/employer-profile","/candidates-item", "/candidate-list", "/candidate-profile","/candidate-profile-setting","/help-item", "/helpcenter-overview", "/helpcenter-faqs","/helpcenter-guides","/helpcenter-support","/blog-item", "/blogs", "/blog-detail","/auth-item", "/login", "/signup","/reset-password","/lock-screen","/utility-item", "/terms", "/privacy","/special-item", "/comingsoon", "/maintenance","/error","/thankyou"].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={(e)=>{setSubManu(subManu === "/page-item" ? "" : "/page-item")}} className="text-gray-800 dark:text-gray-200 font-medium hover:text-sky-500 hover:-translate-y-0.5 transform transition-all duration-300 flex items-center justify-center lg:justify-start relative group">
                                Who are we? 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full ${["/aboutus","/services","/pricing","/employers-item", "/employer-list", "/employer-profile","/candidates-item", "/candidate-list", "/candidate-profile","/candidate-profile-setting","/help-item", "/helpcenter-overview", "/helpcenter-faqs","/helpcenter-guides","/helpcenter-support","/blog-item", "/blogs", "/blog-detail","/auth-item", "/login", "/signup","/reset-password","/lock-screen","/utility-item", "/terms", "/privacy","/special-item", "/comingsoon", "/maintenance","/error","/thankyou"].includes(manu) ? 'w-full' : ''}`}></span>
                            </Link>
                            <ul className={`submenu lg:absolute lg:shadow-lg lg:shadow-gray-200 dark:lg:shadow-gray-800 lg:rounded-md lg:bg-white dark:lg:bg-gray-900 lg:p-4 lg:min-w-[200px] ${["/aboutus","/services","/pricing","/employers-item", "/employer-list", "/employer-profile","/candidates-item", "/candidate-list", "/candidate-profile","/candidate-profile-setting","/help-item", "/helpcenter-overview", "/helpcenter-faqs","/helpcenter-guides","/helpcenter-support","/blog-item", "/blogs", "/blog-detail","/auth-item", "/login", "/signup","/reset-password","/lock-screen","/utility-item", "/terms", "/privacy","/special-item", "/comingsoon", "/maintenance","/error","/thankyou"].includes(subManu) ? 'lg:block' : 'lg:hidden'}`}>
                                <li className={`${manu ===  "/aboutus" ? 'active' : ''} py-2`}><Link href="/aboutus" className="sub-menu-item block w-full px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300">About Us</Link></li>
                                <li className={`${manu ===  "/services" ? 'active' : ''} py-2`}><Link href="/services" className="sub-menu-item block w-full px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300">Services</Link></li>
                                
                                {/* Added Employers Section */}
                                <li className={`has-submenu parent-menu-item ${["/employers-item", "/employer-list", "/employer-profile"].includes(manu) ? 'active' : ''} py-2`}>
                                    <Link href="#" onClick={(e)=>{setSubManu(subManu === "/employers-item" ? "" : "/employers-item")}} className="sub-menu-item block w-full px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300 flex items-center justify-between">
                                        Employers
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                    <ul className={`submenu ${["/employers-item", "/employer-list", "/employer-profile"].includes(subManu) ? 'block' : 'hidden'} pl-6`}>
                                        <li className={`${manu ===  "/employer-list" ? 'active' : ''} py-2`}><Link href="/employer-list" className="sub-menu-item block w-full px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300">Employers</Link></li>
                                        <li className={`${manu ===  "/employer-profile" ? 'active' : ''} py-2`}><Link href="/employer-profile" className="sub-menu-item block w-full px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300">Employer Detail</Link></li>
                                    </ul>
                                </li>

                                {/* Added Candidates Section */}
                                <li className={`has-submenu parent-menu-item ${["/candidates-item", "/candidate-list", "/candidate-profile","/candidate-profile-setting"].includes(manu) ? 'active' : ''} py-2`}>
                                    <Link href="#" onClick={(e)=>{setSubManu(subManu === "/candidates-item" ? "" : "/candidates-item")}} className="sub-menu-item block w-full px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300 flex items-center justify-between">
                                        Candidates
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                    <ul className={`submenu ${["/candidates-item", "/candidate-list", "/candidate-profile","/candidate-profile-setting"].includes(subManu) ? 'block' : 'hidden'} pl-6`}>
                                        <li className={`${manu ===  "/candidate-list" ? 'active' : ''} py-2`}><Link href="/candidate-list" className="sub-menu-item block w-full px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300">Candidates</Link></li>
                                        <li className={`${manu ===  "/candidate-profile" ? 'active' : ''} py-2`}><Link href="/candidate-profile" className="sub-menu-item block w-full px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300">Candidate Profile</Link></li>
                                        <li className={`${manu ===  "/candidate-profile-setting" ? 'active' : ''} py-2`}><Link href="/candidate-profile-setting" className="sub-menu-item block w-full px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300">Profile Setting </Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={`${manu ===  "/contact" ? 'active' : ''} py-3 lg:py-0`}>
                            <Link href="/contact" className="text-gray-800 dark:text-gray-200 font-medium hover:text-sky-500 hover:-translate-y-0.5 transform transition-all duration-300 relative group">
                                Contact
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full ${manu === "/contact" ? 'w-full' : ''}`}></span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="lg:hidden flex-shrink-0">
                    <button onClick={toggleMenu} className="text-gray-800 dark:text-gray-200 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                
                {/* Language Dropdown - moved to right side */}
                <div className="hidden lg:block relative z-40">
                    <div className="relative lang-dropdown">
                        <button onClick={toggleLangDropdown} className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none">
                            <img 
                                src={currentLang.flag} 
                                alt={currentLang.name} 
                                className="w-5 h-5 object-cover rounded-full"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isLangOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700 overflow-hidden">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => changeLang(lang.code)}
                                        className={`flex items-center px-4 py-2.5 text-sm w-full text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 ${language === lang.code ? 'bg-gray-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium' : ''}`}
                                    >
                                        <img 
                                            src={lang.flag} 
                                            alt={lang.name} 
                                            className="w-5 h-5 object-cover rounded-full mr-3"
                                        />
                                        <span>{lang.name}</span>
                                        {language === lang.code && (
                                            <svg className="h-4 w-4 text-blue-600 dark:text-blue-400 ml-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}