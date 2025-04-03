import React from 'react'
import {FiSearch} from '../assets/icons/vander'
export default function JobSidebar() {
  return (
        <div className="lg:col-span-4 md:col-span-6">
            <div className="shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                <form>
                    <div className="grid grid-cols-1 gap-3">
                        <div>
                            <label htmlFor="searchname" className="font-semibold">Search Company</label>
                            <div className="relative mt-2">
                                <FiSearch className=" text-lg absolute top-[10px] start-3"/>
                                <input name="search" id="searchname" type="text" className="form-input border border-slate-100 dark:border-slate-800 ps-10" placeholder="Search" />
                            </div>
                        </div>

                        <div>
                            <label className="font-semibold">Categories</label>
                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                            <option value="construction_worker">Construction Worker</option>
                            <option value="electrician">Electrician</option>
                            <option value="plumber">Plumber</option>
                            <option value="welder">Welder</option>
                            <option value="carpenter">Carpenter</option>
                            <option value="driver">Driver (Truck/Taxi)</option>
                            <option value="security_guard">Security Guard</option>
                            <option value="cleaner">Cleaner</option>
                            <option value="housekeeping">Housekeeping</option>
                            <option value="factory_worker">Factory Worker</option>
                            <option value="mechanic">Auto Mechanic</option>
                            <option value="mason">Mason</option>
                            <option value="gardener">Gardener</option>
                            <option value="painter">Painter</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-semibold">Location</label>
                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                            <option value="AE">United Arab Emirates</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="KW">Kuwait</option>
                            <option value="QA">Qatar</option>
                            <option value="OM">Oman</option>
                            <option value="BH">Bahrain</option>
                            <option value="EG">Egypt</option>
                            <option value="JO">Jordan</option>
                            <option value="LB">Lebanon</option>
                            <option value="IQ">Iraq</option>
                            <option value="MA">Morocco</option>
                            <option value="DZ">Algeria</option>
                            <option value="TN">Tunisia</option>
                            <option value="YE">Yemen</option>
                            <option value="SD">Sudan</option>
                            <option value="SY">Syria</option>
                            <option value="PS">Palestine</option>
                            <option value="LY">Libya</option>
                            </select>

                        </div>

                        <div>
                            <label className="font-semibold">Job Types</label>
                            <div className="block mt-2">
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox border border-slate-100 dark:border-slate-800 text-skyblue rounded size-4" defaultChecked />
                                        <span className="ms-2 text-slate-400">Full Time</span>
                                    </label>

                                    <span className="bg-emerald-600/10 text-skyblue text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">3</span>
                                </div>
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox border border-slate-100 dark:border-slate-800 text-skyblue rounded size-4" />
                                        <span className="ms-2 text-slate-400">Part Time</span>
                                    </label>

                                    <span className="bg-emerald-600/10 text-skyblue text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">7</span>
                                </div>
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox border border-slate-100 dark:border-slate-800 text-skyblue rounded size-4" />
                                        <span className="ms-2 text-slate-400">Freelancing</span>
                                    </label>

                                    <span className="bg-emerald-600/10 text-skyblue text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">4</span>
                                </div>
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox border border-slate-100 dark:border-slate-800 text-skyblue rounded size-4" />
                                        <span className="ms-2 text-slate-400">Fixed Price</span>
                                    </label>

                                    <span className="bg-emerald-600/10 text-skyblue text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">6</span>
                                </div>
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox border border-slate-100 dark:border-slate-800 text-skyblue rounded size-4" />
                                        <span className="ms-2 text-slate-400">Remote</span>
                                    </label>

                                    <span className="bg-emerald-600/10 text-skyblue text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">7</span>
                                </div>
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox border border-slate-100 dark:border-slate-800 text-skyblue rounded size-4" />
                                        <span className="ms-2 text-slate-400">Hourly Basis</span>
                                    </label>

                                    <span className="bg-emerald-600/10 text-skyblue text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">44</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="font-semibold">Salary</label>
                            <div className="block mt-2">
                                <div>
                                    <label className="inline-flex items-center">
                                        <input type="radio"
                                            className="form-radio text-skyblue border border-slate-100 dark:border-slate-800"
                                            name="radio-colors" 
                                        />
                                        <span className="ms-2 text-slate-400">10k - 15k</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input type="radio"
                                            className="form-radio text-skyblue border border-slate-100 dark:border-slate-800"
                                            name="radio-colors"/>
                                        <span className="ms-2 text-slate-400">15k - 25k</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input type="radio"
                                            className="form-radio text-skyblue border border-slate-100 dark:border-slate-800"
                                            name="radio-colors"  defaultChecked/>
                                        <span className="ms-2 text-slate-400">more than 25K</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <input type="submit" className="btn bg-skyblue hover:bg-blue-700 border-skyblue hover:border-blue-700 text-white rounded-md w-full" value="Apply Filter" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}
