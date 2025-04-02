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
                                <option value="WD">Web Designer</option>
                                <option value="WD">Web Developer</option>
                                <option value="UI">UI / UX Desinger</option>
                            </select>

                        </div>

                        <div>
                            <label className="font-semibold">Location</label>
                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                <option value="NY">New York</option>
                                <option value="MC">North Carolina</option>
                                <option value="SC">South Carolina</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-semibold">Job Types</label>
                            <div className="block mt-2">
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox border border-slate-100 dark:border-slate-800 text-emerald-600 rounded size-4" defaultChecked />
                                        <span className="ms-2 text-slate-400">Full Time</span>
                                    </label>

                                    <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">3</span>
                                </div>
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox border border-slate-100 dark:border-slate-800 text-emerald-600 rounded size-4" />
                                        <span className="ms-2 text-slate-400">Part Time</span>
                                    </label>

                                    <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">7</span>
                                </div>
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox border border-slate-100 dark:border-slate-800 text-emerald-600 rounded size-4" />
                                        <span className="ms-2 text-slate-400">Freelancing</span>
                                    </label>

                                    <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">4</span>
                                </div>
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox border border-slate-100 dark:border-slate-800 text-emerald-600 rounded size-4" />
                                        <span className="ms-2 text-slate-400">Fixed Price</span>
                                    </label>

                                    <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">6</span>
                                </div>
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox border border-slate-100 dark:border-slate-800 text-emerald-600 rounded size-4" />
                                        <span className="ms-2 text-slate-400">Remote</span>
                                    </label>

                                    <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">7</span>
                                </div>
                                <div className="flex justify-between">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox border border-slate-100 dark:border-slate-800 text-emerald-600 rounded size-4" />
                                        <span className="ms-2 text-slate-400">Hourly Basis</span>
                                    </label>

                                    <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">44</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="font-semibold">Salary</label>
                            <div className="block mt-2">
                                <div>
                                    <label className="inline-flex items-center">
                                        <input type="radio"
                                            className="form-radio text-emerald-600 border border-slate-100 dark:border-slate-800"
                                            name="radio-colors" 
                                        />
                                        <span className="ms-2 text-slate-400">10k - 15k</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input type="radio"
                                            className="form-radio text-emerald-600 border border-slate-100 dark:border-slate-800"
                                            name="radio-colors"/>
                                        <span className="ms-2 text-slate-400">15k - 25k</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input type="radio"
                                            className="form-radio text-emerald-600 border border-slate-100 dark:border-slate-800"
                                            name="radio-colors"  defaultChecked/>
                                        <span className="ms-2 text-slate-400">more than 25K</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <input type="submit" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full" value="Apply Filter" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}
