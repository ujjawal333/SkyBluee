'use client'
import { useState } from 'react';

export default function Accordion() {
    let [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const accordionData = [
        {
            title: 'How does it work ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            title: 'Do I need a designer to use Jobstack ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            title: 'What do I need to do to start selling ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            title: 'What happens when I receive an order ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        }
    ]
  return (
        <div id="accordion-collapseone" data-accordion="collapse" className="mt-6">
            {accordionData.map((item, index) => (
                <div key={index} className={`relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4`}>
                    <h2 className="text-base font-medium">
                        <button onClick={() => toggleAccordion(index)} type="button" className={`flex justify-between items-center p-5 w-full font-medium text-left ${activeIndex === index ? 'text-skyblue bg-gray-50 dark:bg-slate-800' : ''} `} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span>{item.title}</span>
                            <svg data-accordion-icon className={`size-4 shrink-0 ${activeIndex === index ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </h2>
                    {activeIndex === index && (
                        <div aria-labelledby="accordion-collapse-heading-1">
                            <div className="p-5">
                                <p className="text-slate-400 dark:text-gray-400">{item.content}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
  )
}
