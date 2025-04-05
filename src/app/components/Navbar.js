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
    }, [isLangOpen])

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
        <nav id="topnav" className={`${topNavbar ? 'nav-sticky': ''} defaultscroll is-sticky ${topnavClass} py-4`}>
            <div className={`${isContainerFluid === true ? 'container-fluid md:px-8 px-3' : 'container'} flex items-center justify-between relative`}>
                {/* Logo on left side */}
                <div className="flex items-center">
                    <Link className="logo" href="/">
                        <div className="flex flex-col">
                            <div className="relative">
                                <div className="flex items-center py-2">
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
                
                {/* Menu toggle button */}
                <div className="menu-extras">
                    <div className="menu-item">
                        <Link href="#" className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>
                
                {/* Language Dropdown */}
                <div className="relative z-40">
                    <div className="relative lang-dropdown">
                        <button onClick={toggleLangDropdown} className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-all duration-300 focus:outline-none">
                            <img 
                                src={currentLang.flag} 
                                alt={currentLang.name} 
                                className="w-5 h-5 object-cover rounded-full"
                            />
                            <span className="text-sm font-medium hidden md:inline-block">{currentLang.name}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isLangOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-200 overflow-hidden">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => changeLang(lang.code)}
                                        className={`flex items-center px-4 py-2.5 text-sm w-full text-left hover:bg-gray-50 transition-colors duration-150 ${language === lang.code ? 'bg-gray-50 text-blue-600 font-medium' : ''}`}
                                    >
                                        <img 
                                            src={lang.flag} 
                                            alt={lang.name} 
                                            className="w-5 h-5 object-cover rounded-full mr-3"
                                        />
                                        <span>{lang.name}</span>
                                        {language === lang.code && (
                                            <svg className="h-4 w-4 text-blue-600 ml-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                
                <div id="navigation" className={`${isOpen === true ? 'hidden' : 'block'}`}>
                    <ul className={`navigation-menu ${navClass}`}>
                        <li className={manu === "/" ? 'active' : ''}>
                            <Link href="/">Home</Link>
                        </li>

                        <li className={`has-submenu parent-parent-menu-item ${["/job-categories","/job-grid-one", "/job-grid-two", "/job-grid-three", "/job-grid-four","/grid-item","/job-list-one", "/job-list-two", "/job-list-three", "/job-list-four","/job-list-five","/job-list-six","/list-item","/job-detail-one", "/job-detail-two", "/job-detail-three", "/detail-item","/job-apply","/job-post","/career"].includes(manu) ? 'active' : ''}`}><Link href="#" onClick={(e)=>{setSubManu(subManu === "/job-item" ? "" : "/job-item")}}> Jobs </Link><span className="menu-arrow"></span>  
                            <ul className={`submenu ${["/job-categories","/job-grid-one", "/job-grid-two", "/job-grid-three", "/job-grid-four","/grid-item","/job-list-one", "/job-list-two", "/job-list-three", "/job-list-four","/job-list-five","/job-list-six","/list-item","/job-detail-one", "/job-detail-two", "/job-detail-three", "/detail-item","/job-apply","/job-post","/career"].includes(subManu) ? 'open' : ''}`}>
                                <li className={manu ===  "/job-categories" ? 'active' : '' }><Link href="/job-categories" className="sub-menu-item">How to apply?</Link></li>
                                <li className={`has-submenu parent-menu-item ${["/job-list-one", "/job-list-two", "/job-list-three", "/job-list-four","/job-list-five","/job-list-six","/list-item"].includes(manu) ? 'active' : ''}`}>
                                <Link href="/job-list-six" className="sub-menu-item">Job Vacency</Link>
                                </li>
                                <li className={manu ===  "/job-apply" ? 'active' : '' }><Link href="/job-apply" className="sub-menu-item">Apply For A Job</Link></li>
                            </ul>
                        </li>

                        <li className={`has-submenu parent-parent-menu-item ${["/aboutus","/services","/pricing","/employers-item", "/employer-list", "/employer-profile","/candidates-item", "/candidate-list", "/candidate-profile","/candidate-profile-setting","/help-item", "/helpcenter-overview", "/helpcenter-faqs","/helpcenter-guides","/helpcenter-support","/blog-item", "/blogs", "/blog-detail","/auth-item", "/login", "/signup","/reset-password","/lock-screen","/utility-item", "/terms", "/privacy","/special-item", "/comingsoon", "/maintenance","/error","/thankyou"].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={(e)=>{setSubManu(subManu === "/page-item" ? "" : "/page-item")}}>Who are we? </Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${["/aboutus","/services","/pricing","/employers-item", "/employer-list", "/employer-profile","/candidates-item", "/candidate-list", "/candidate-profile","/candidate-profile-setting","/help-item", "/helpcenter-overview", "/helpcenter-faqs","/helpcenter-guides","/helpcenter-support","/blog-item", "/blogs", "/blog-detail","/auth-item", "/login", "/signup","/reset-password","/lock-screen","/utility-item", "/terms", "/privacy","/special-item", "/comingsoon", "/maintenance","/error","/thankyou"].includes(subManu) ? 'open' : ''}`}>
                                <li className={manu ===  "/aboutus" ? 'active' : '' }><Link href="/aboutus" className="sub-menu-item">About Us</Link></li>
                                <li className={manu ===  "/services" ? 'active' : '' }><Link href="/services" className="sub-menu-item">Services</Link></li>
                                
                                {/* Added Employers Section */}
                                <li className={`has-submenu parent-menu-item ${["/employers-item", "/employer-list", "/employer-profile"].includes(manu) ? 'active' : ''}`}>
                                    <Link href="#" onClick={(e)=>{setSubManu(subManu === "/employers-item" ? "" : "/employers-item")}}>Employers</Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${["/employers-item", "/employer-list", "/employer-profile"].includes(subManu) ? 'open' : ''}`}>
                                        <li className={manu ===  "/employer-list" ? 'active' : '' }><Link href="/employer-list" className="sub-menu-item">Employers</Link></li>
                                        <li className={manu ===  "/employer-profile" ? 'active' : '' }><Link href="/employer-profile" className="sub-menu-item">Employer Detail</Link></li>
                                    </ul>
                                </li>

                                {/* Added Candidates Section */}
                                <li className={`has-submenu parent-menu-item ${["/candidates-item", "/candidate-list", "/candidate-profile","/candidate-profile-setting"].includes(manu) ? 'active' : ''}`}>
                                    <Link href="#" onClick={(e)=>{setSubManu(subManu === "/candidates-item" ? "" : "/candidates-item")}}>Candidates </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${["/candidates-item", "/candidate-list", "/candidate-profile","/candidate-profile-setting"].includes(subManu) ? 'open' : ''}`}>
                                        <li className={manu ===  "/candidate-list" ? 'active' : '' }><Link href="/candidate-list" className="sub-menu-item">Candidates</Link></li>
                                        <li className={manu ===  "/candidate-profile" ? 'active' : '' }><Link href="/candidate-profile" className="sub-menu-item">Candidate Profile</Link></li>
                                        <li className={manu ===  "/candidate-profile-setting" ? 'active' : '' }><Link href="/candidate-profile-setting" className="sub-menu-item">Profile Setting </Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={manu ===  "/contact" ? 'active' : '' }><Link href="/contact" className="sub-menu-item">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}