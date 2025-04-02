'use client'
import React, { useState } from "react";
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Switcher from "../components/Switcher";
import Footer from "../components/Footer";

import {FiTwitter, FiFacebook, FiInstagram, FiLinkedin, FiYoutube} from '../assets/icons/vander'

export default function ProfileSetting() {

    const [file, setFile] = useState('/images/hero/bg5.jpg');
    const [file2, setFile2] = useState('/images/team/01.jpg');
    const [file3, setFile3] = useState('');

    function loadFile(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    function loadFile2(e) {
        setFile2(URL.createObjectURL(e.target.files[0]));
    }
    function loadFile3(e) {
        setFile3(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <>
    <Navbar navClass='justify-end'/> 

    <section className="relative lg:mt-24 mt-[74px] pb-16">
        <div className="lg:container container-fluid">
            <div className="profile-banner relative text-transparent">
                <input id="pro-banner" name="profile-banner" type="file" className="hidden" onChange={(e)=>loadFile(e)} />
                <div className="relative shrink-0">
                    <Image src={file} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="h-64 w-full object-cover lg:rounded-xl shadow dark:shadow-gray-700" id="profile-banner" alt=""/>
                    <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
                </div>
            </div>

            <div className="md:flex mx-4 -mt-12">
                <div className="md:w-full">
                    <div className="relative flex items-end">
                        <div className="profile-pic text-center">
                            <input id="pro-img" name="profile-image" type="file" className="hidden" onChange={(e)=>loadFile2(e)} />
                            <div>
                                <div className="relative size-28 max-w-[112px] max-h-[112px] mx-auto">
                                    <Image src={file2} width={110} height={110} className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt=""/>
                                    <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                                </div>
                            </div>
                        </div>
                        <div className="ms-4">
                            <h5 className="text-lg font-semibold">Mr. Calvin carlo</h5>
                            <p className="text-slate-400">Web Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-16">
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-[30px]">
                <div className="lg:col-span-12">
                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
                        <form>
                            <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-4">
                                <div className="lg:col-span-6">
                                    <label className="form-label font-medium">First Name : <span className="text-red-600">*</span></label>
                                    <input type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="First Name:" id="firstname" name="name" required/>
                                </div>

                                <div className="lg:col-span-6">
                                    <label className="form-label font-medium">Last Name : <span className="text-red-600">*</span></label>
                                    <input type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="Last Name:" id="lastname" name="name" required/>
                                </div>

                                <div className="lg:col-span-6">
                                    <label className="form-label font-medium">Your Email : <span className="text-red-600">*</span></label>
                                    <input type="email" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="Email" name="email" required/>
                                </div>

                                <div className="lg:col-span-6">
                                    <label className="form-label font-medium" htmlFor="birthday">Date of Birth :</label>
                                    <input type="date" id="birthday" name="birthday" className="form-input border border-slate-100 dark:border-slate-800 mt-2"/>
                                </div>

                                <div className="lg:col-span-4">
                                    <label className="form-label font-medium">Your Address :</label>
                                    <input type="address" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="Address" name="address" required/>
                                </div>
                                
                                <div className="lg:col-span-3">
                                    <label className="form-label font-medium">State :</label>
                                    <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-2">
                                        <option value="NY">New York</option>
                                        <option value="MC">North Carolina</option>
                                        <option value="SC">South Carolina</option>
                                    </select>
                                </div>
                                
                                <div className="lg:col-span-3">
                                    <label className="form-label font-medium">Country :</label>
                                    <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-2">
                                        <option value="NY">USA</option>
                                        <option value="MC">UK</option>
                                        <option value="SC">India</option>
                                    </select>
                                </div>
                                
                                <div className="lg:col-span-2">
                                    <label className="form-label font-medium">Postal Code :</label>
                                    <input type="number" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="Postal Code" name="number" required/>
                                </div>

                                <div className="lg:col-span-6">
                                    <label className="form-label font-medium">Mobile No. :</label>
                                    <input type="number" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="Mobile No." name="number" required/>
                                </div>

                                <div className="lg:col-span-6">
                                    <label className="form-label font-medium">Occupation :</label>
                                    <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-2">
                                        <option value="WD">Web Designer</option>
                                        <option value="WD">Web Developer</option>
                                        <option value="UI">UI / UX Desinger</option>
                                    </select>
                                </div>

                                <div className="lg:col-span-6">
                                    <label className="form-label font-medium" htmlFor="multiple_files">Upload Resume:</label>
                                    <input className="relative form-input border border-slate-100 dark:border-slate-800 file:h-10 file:-mx-3 file:-my-2 file:cursor-pointer file:rounded-none file:border-0 file:px-3 file:text-neutral-700 bg-clip-padding px-3 py-1.5 file:me-3 mt-2" id="multiple_files" type="file" multiple/>
                                </div>
                            </div>

                            <div className="grid grid-cols-1">
                                <div className="mt-5">
                                    <label className="form-label font-medium">Intro : </label>
                                    <textarea name="comments" id="comments" className="form-input border border-slate-100 dark:border-slate-800 mt-2 textarea" placeholder="Intro :"></textarea>
                                </div>
                            </div>

                            <input type="submit" id="submit" name="send" className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md mt-5" value="Save Changes"/>
                        </form>
                    </div>
                </div>

                <div className="lg:col-span-6">
                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <h5 className="text-lg font-semibold mb-4">Skills :</h5>
                                <form>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="">
                                            <label className="form-label font-medium" htmlFor="WordPress">WordPress</label>
                                            <input type="number" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="First Name:" id="WordPress" name="number" required/>
                                        </div>

                                        <div className="">
                                            <label className="form-label font-medium" htmlFor="JavaScript">JavaScript</label>
                                            <input type="number" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="First Name:" id="JavaScript" name="number" required/>
                                        </div>

                                        <div className="">
                                            <label className="form-label font-medium" htmlFor="HTML">HTML</label>
                                            <input type="number" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="First Name:" id="HTML" name="number" required/>
                                        </div>

                                        <div className="">
                                            <label className="form-label font-medium" htmlFor="Figma">Figma</label>
                                            <input type="number" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="First Name:" id="Figma" name="number" required/>
                                        </div>

                                        <div className="">
                                            <label className="form-label font-medium" htmlFor="Photoshop">Photoshop</label>
                                            <input type="number" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="First Name:" id="Photoshop" name="number" required/>
                                        </div>

                                        <div className="">
                                            <label className="form-label font-medium" htmlFor="Illustration">Illustration</label>
                                            <input type="number" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="First Name:" id="Illustration" name="number" required/>
                                        </div>
                                    </div>

                                    <input type="submit" id="submit" name="send" className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md mt-5" value="Save Changes"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-6">
                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <h5 className="text-lg font-semibold mb-4">Experience :</h5>

                                <div>
                                    <div>
                                        {file3 === '' && 
                                            <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small">Supports JPG, PNG and MP4 videos. Max file size : 10MB.</div>
                                        }
                                        {file3 !== '' && 
                                            <Image src={file3} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt="" className=""/>
                                        }
                                        <input type="file" id="input-file" name="input-file" accept="image/*" onChange={(e)=>loadFile3(e)} hidden/>
                                        <label className="btn-upload btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md mt-5 cursor-pointer" htmlFor="input-file">Upload Image</label>
                                    </div>
                                    <form>
                                        <div className="grid grid-cols-12 mt-6 gap-4">
                                            <div className="col-span-12">
                                                <label className="form-label font-medium">Job Title <span className="text-red-600">*</span></label>
                                                <input name="name" id="JobTitle" type="text" className="form-input border border-slate-100 dark:border-slate-800" placeholder="Title :"/>
                                            </div>

                                            <div className="col-span-12">
                                                <label className="form-label font-medium">Company Name <span className="text-red-600">*</span></label>
                                                <input name="name" id="CompanyName" type="text" className="form-input border border-slate-100 dark:border-slate-800" placeholder="Company :"/>
                                            </div>
                                            
                                            <div className="col-span-12">
                                                <label className="form-label font-medium">Year <span className="text-red-600">*</span></label>
                                                <input name="number" id="Year" type="number" className="form-input border border-slate-100 dark:border-slate-800" placeholder="Year :"/>
                                            </div>
        
                                            <div className="col-span-12">
                                                <label className="form-label font-medium"> Description : </label>
                                                <textarea name="comments" id="Description" className="form-input border border-slate-100 dark:border-slate-800 textarea" placeholder="Description :"></textarea>
                                            </div>
                                        </div>
                                    </form>

                                    <input type="submit" id="submit" name="send" className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md mt-5" value="Save Changes"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-12">
                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                            <div>
                                <h5 className="text-lg font-semibold mb-4">Contact Info :</h5>

                                <form>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div>
                                            <label className="form-label font-medium">Phone No. :</label>
                                            <input name="number" id="number" type="number" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="Phone :"/>
                                        </div>

                                        <div>
                                            <label className="form-label font-medium">Website :</label>
                                            <input name="url" id="url" type="url" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="Url :"/>
                                        </div>
                                    </div>

                                    <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md mt-5">Add</button>
                                </form>
                            </div>
                            
                            <div> 
                                <h5 className="text-lg font-semibold mb-4">Change password :</h5>
                                <form>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div>
                                            <label className="form-label font-medium">Old password :</label>
                                            <input type="password" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="Old password" required/>
                                        </div>

                                        <div>
                                            <label className="form-label font-medium">New password :</label>
                                            <input type="password" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="New password" required/>
                                        </div>

                                        <div>
                                            <label className="form-label font-medium">Re-type New password :</label>
                                            <input type="password" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="Re-type New password" required/>
                                        </div>
                                    </div>

                                    <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md mt-5">Save password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-12">
                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <h5 className="text-lg font-semibold mb-4">Social Media :</h5>

                        <div className="md:flex">
                            <div className="md:w-1/3">
                                <span className="font-medium">Twitter</span>
                            </div>

                            <div className="md:w-2/3 mt-4 md:mt-0">
                                <form>
                                    <div className="form-icon relative">
                                        <FiTwitter className="size-4 absolute top-5 start-4"/>
                                        <input type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-2 ps-12" placeholder="Twitter Profile Name" id="twitter_name" name="name" required/>
                                    </div>
                                </form>

                                <p className="text-slate-400 mt-1">Add your Twitter username (e.g. jennyhot).</p>
                            </div>
                        </div>
                        
                        <div className="md:flex mt-8">
                            <div className="md:w-1/3">
                                <span className="font-medium">Facebook</span>
                            </div>

                            <div className="md:w-2/3 mt-4 md:mt-0">
                                <form>
                                    <div className="form-icon relative">
                                        <FiFacebook className="size-4 absolute top-5 start-4"/>
                                        <input type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-2 ps-12" placeholder="Facebook Profile Name" id="facebook_name" name="name" required/>
                                    </div>
                                </form>

                                <p className="text-slate-400 mt-1">Add your Facebook username (e.g. jennyhot).</p>
                            </div>
                        </div>
                        
                        <div className="md:flex mt-8">
                            <div className="md:w-1/3">
                                <span className="font-medium">Instagram</span>
                            </div>

                            <div className="md:w-2/3 mt-4 md:mt-0">
                                <form>
                                    <div className="form-icon relative">
                                        <FiInstagram className="size-4 absolute top-5 start-4"/>
                                        <input type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-2 ps-12" placeholder="Instagram Profile Name" id="insta_name" name="name" required/>
                                    </div>
                                </form>

                                <p className="text-slate-400 mt-1">Add your Instagram username (e.g. jennyhot).</p>
                            </div>
                        </div>
                        
                        <div className="md:flex mt-8">
                            <div className="md:w-1/3">
                                <span className="font-medium">Linkedin</span>
                            </div>

                            <div className="md:w-2/3 mt-4 md:mt-0">
                                <form>
                                    <div className="form-icon relative">
                                        <FiLinkedin className="size-4 absolute top-5 start-4"/>
                                        <input type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-2 ps-12" placeholder="Linkedin Profile Name" id="linkedin_name" name="name" required/>
                                    </div>
                                </form>

                                <p className="text-slate-400 mt-1">Add your Linkedin username.</p>
                            </div>
                        </div>
                        
                        <div className="md:flex mt-8">
                            <div className="md:w-1/3">
                                <span className="font-medium">Youtube</span>
                            </div>

                            <div className="md:w-2/3 mt-4 md:mt-0">
                                <form>
                                    <div className="form-icon relative">
                                        <FiYoutube className="size-4 absolute top-5 start-4"/>
                                        <input type="url" className="form-input border border-slate-100 dark:border-slate-800 mt-2 ps-12" placeholder="Youtube url" id="you_url" name="url" required/>
                                    </div>
                                </form>

                                <p className="text-slate-400 mt-1">Add your Youtube url.</p>
                            </div>
                        </div>

                        <div className="md:flex">
                            <div className="md:w-1/3">
                                <input type="submit" id="submit" name="send" className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md mt-5" value="Save Changes"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-12">
                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <h5 className="text-lg font-semibold mb-5">Account Notifications :</h5>

                        <div className="flex justify-between pb-4">
                            <h6 className="mb-0 font-medium">When someone mentions me</h6>
                            <div className="">
                                <input className="form-checkbox rounded border border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" type="checkbox" value="" id="noti1"/>
                                <label className="form-check-label" htmlFor="noti1"></label>
                            </div>
                        </div>
                        <div className="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                            <h6 className="mb-0 font-medium">When someone follows me</h6>
                            <div className="">
                                <input className="form-checkbox rounded border border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" type="checkbox" value="" defaultChecked id="noti2"/>
                                <label className="form-check-label" htmlFor="noti2"></label>
                            </div>
                        </div>
                        <div className="flex justify-between py-4 border-t  border-gray-100 dark:border-gray-700">
                            <h6 className="mb-0 font-medium">When shares my activity</h6>
                            <div className="">
                                <input className="form-checkbox rounded border border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" type="checkbox" value="" id="noti3"/>
                                <label className="form-check-label" htmlFor="noti3"></label>
                            </div>
                        </div>
                        <div className="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                            <h6 className="mb-0 font-medium">When someone messages me</h6>
                            <div className="">
                                <input className="form-checkbox rounded border border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" type="checkbox" value="" id="noti4"/>
                                <label className="form-check-label" htmlFor="noti4"></label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-12">
                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <h5 className="text-lg font-semibold mb-5">Marketing Notifications :</h5>

                        <div className="flex justify-between pb-4">
                            <h6 className="mb-0 font-medium">There is a sale or promotion</h6>
                            <div className="">
                                <input className="form-checkbox rounded border border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" type="checkbox" value="" id="noti5"/>
                                <label className="form-check-label" htmlFor="noti5"></label>
                            </div>
                        </div>
                        <div className="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                            <h6 className="mb-0 font-medium">Company news</h6>
                            <div className="">
                                <input className="form-checkbox rounded border border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" type="checkbox" value="" id="noti6"/>
                                <label className="form-check-label" htmlFor="noti6"></label>
                            </div>
                        </div>
                        <div className="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                            <h6 className="mb-0 font-medium">Weekly jobs</h6>
                            <div className="">
                                <input className="form-checkbox rounded border border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" type="checkbox" value="" defaultChecked id="noti7"/>
                                <label className="form-check-label" htmlFor="noti7"></label>
                            </div>
                        </div>
                        <div className="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                            <h6 className="mb-0 font-medium">Unsubscribe News</h6>
                            <div className="">
                                <input className="form-checkbox rounded border border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" type="checkbox" value="" defaultChecked id="noti8"/>
                                <label className="form-check-label" htmlFor="noti8"></label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-12">
                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <h5 className="text-lg font-semibold mb-5 text-red-600">Delete Account :</h5>

                        <p className="text-slate-400 mb-4">Do you want to delete the account? Please press below Delete button</p>

                        <a href="" className="btn bg-red-600 hover:bg-red-700 text-white rounded-md">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Switcher/>
    <Footer/>
    </>
  )
}
