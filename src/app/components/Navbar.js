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
        <nav id="topnav" className={`${topNavbar ? 'nav-sticky': ''} defaultscroll is-sticky ${topnavClass}`}>
            <div className={`${isContainerFluid === true ? 'container-fluid md:px-8 px-3' : 'container'}`}>
                <Link className="logo" href="/">
                    <div className="block sm:hidden">
                        <Image src="/images/logo-icon-40.png"className="h-10 inline-block dark:hidden" alt="" width={40} height={40}/>
                        <Image src="/images/logo-icon-40-white.png" className="h-10 hidden dark:inline-block" alt="" width={40} height={40}/>
                    </div>

                    {navClass && navClass.includes('nav-light') ?
                        <div className="sm:block hidden">
                            <span className="inline-block dark:hidden">
                                <Image src="/images/logo-dark.png" className="h-[24px] l-dark" alt="" height={24} width={141}/>
                                <Image src="/images/logo-light.png" className="h-[24px] l-light" alt="" height={24} width={141}/>
                            </span>
                            <Image src="/images/logo-white.png" className="h-[24px] hidden dark:inline-block" alt="" height={24} width={141}/>
                        </div> :
                        <div className="sm:block hidden">
                            <Image src="/images/logo-dark.png" className="h-[24px] inline-block dark:hidden" alt="" height={24} width={141}/>
                            <Image src="/images/logo-white.png" className="h-[24px] hidden dark:inline-block" alt="" height={24} width={141}/>
                        </div>
                    }
                </Link>

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

                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40">
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

                                {/* <li className={`has-submenu parent-menu-item ${["/help-item", "/helpcenter-overview", "/helpcenter-faqs","/helpcenter-guides","/helpcenter-support"].includes(manu) ? 'active' : ''}`}>
                                    <Link href="#" onClick={(e)=>{setSubManu(subManu === "/help-item" ? "" : "/help-item")}}> Helpcenter </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${["/help-item", "/helpcenter-overview", "/helpcenter-faqs","/helpcenter-guides","/helpcenter-support"].includes(subManu) ? 'open' : ''}`}>
                                        <li className={manu ===  "/helpcenter-overview" ? 'active' : '' }><Link href="/helpcenter-overview" className="sub-menu-item">Overview</Link></li>
                                        <li className={manu ===  "/helpcenter-faqs" ? 'active' : '' }><Link href="/helpcenter-faqs" className="sub-menu-item">FAQs</Link></li>
                                        <li className={manu ===  "/helpcenter-guides" ? 'active' : '' }><Link href="/helpcenter-guides" className="sub-menu-item">Guides</Link></li>
                                        <li className={manu ===  "/helpcenter-support" ? 'active' : '' }><Link href="/helpcenter-support" className="sub-menu-item">Support</Link></li>
                                    </ul>
                                </li> */}

                                {/* <li className={`has-submenu parent-menu-item ${["/blog-item", "/blogs", "/blog-detail"].includes(manu) ? 'active' : ''}`}><Link href="#" onClick={(e)=>{setSubManu(subManu === "/blog-item" ? "" : "/blog-item")}}> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${["/blog-item", "/blogs", "/blog-detail"].includes(subManu) ? 'open' : ''}`}>
                                        <li className={manu ===  "/blogs" ? 'active' : '' }><Link href="/blogs" className="sub-menu-item"> Blogs</Link></li>
                                        <li className={manu ===  "/blog-detail" ? 'active' : '' }><Link href="/blog-detail" className="sub-menu-item"> Blog Detail</Link></li>
                                    </ul>
                                </li> */}

                                {/* <li className={`has-submenu parent-menu-item ${["/auth-item", "/login", "/signup","/reset-password","/lock-screen"].includes(manu) ? 'active' : ''}`}><Link href="#" onClick={(e)=>{setSubManu(subManu === "/auth-item" ? "" : "/auth-item")}}> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${["/auth-item", "/login", "/signup","/reset-password","/lock-screen"].includes(subManu) ? 'open' : ''}`}>
                                        <li className={manu ===  "/login" ? 'active' : '' }><Link href="/login" className="sub-menu-item"> Login</Link></li>
                                        <li className={manu ===  "/signup" ? 'active' : '' }><Link href="/signup" className="sub-menu-item"> Signup</Link></li>
                                        <li className={manu ===  "/reset-password" ? 'active' : '' }><Link href="/reset-password" className="sub-menu-item"> Forgot Password</Link></li>
                                        <li className={manu ===  "/lock-screen" ? 'active' : '' }><Link href="/lock-screen" className="sub-menu-item"> Lock Screen</Link></li>
                                    </ul>
                                </li> */}

                                {/* <li className={`has-submenu parent-menu-item ${["/utility-item", "/terms", "/privacy"].includes(manu) ? 'active' : ''}`}><Link href="#" onClick={(e)=>{setSubManu(subManu === "/utility-item" ? "" : "/utility-item")}}> Utility </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${["/utility-item", "/terms", "/privacy"].includes(subManu) ? 'open' : ''}`}>
                                        <li className={manu ===  "/terms" ? 'active' : '' }><Link href="/terms" className="sub-menu-item">Terms of Services</Link></li>
                                        <li className={manu ===  "/privacy" ? 'active' : '' }><Link href="/privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                    </ul>
                                </li>

                                <li className={`has-submenu parent-menu-item ${["/special-item", "/comingsoon", "/maintenance","/error","/thankyou"].includes(manu) ? 'active' : ''}`}><Link href="#" onClick={(e)=>{setSubManu(subManu === "/special-item" ? "" : "/special-item")}}> Special </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${["/special-item", "/comingsoon", "/maintenance","/error","/thankyou"].includes(subManu) ? 'open' : ''}`}>
                                        <li className={manu ===  "/comingsoon" ? 'active' : '' }><Link href="/comingsoon" className="sub-menu-item"> Coming Soon</Link></li>
                                        <li className={manu ===  "/maintenance" ? 'active' : '' }><Link href="/maintenance" className="sub-menu-item"> Maintenance</Link></li>
                                        <li className={manu ===  "/error" ? 'active' : '' }><Link href="/error" className="sub-menu-item"> 404!</Link></li>
                                        <li className={manu ===  "/thankyou" ? 'active' : '' }><Link href="/thankyou" className="sub-menu-item"> Thank you</Link></li>
                                    </ul>
                                </li> */}
                            </ul>
                        </li>

                        <li className={manu ===  "/contact" ? 'active' : '' }><Link href="/contact" className="sub-menu-item">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}