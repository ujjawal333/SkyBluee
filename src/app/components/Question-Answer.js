import React from 'react'
import { FiHelpCircle } from '../assets/icons/vander'


export default function QuesAnswer() {
    const QuesAnswerData = [
        {
            question: 'How our Jobstack work ?',
            answer: 'Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.',
        },
        {
            question: 'What is the main process open account ?',
            answer: 'words is random, the reader will not be distracted from making a neutral judgement on the visual impact.',
        },
        {
            question: 'How to make unlimited data entry ?',
            answer: 'Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.',
        },
        {
            question: 'Is Jobstack safer to use with my account ?',
            answer: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.",
        }
    ]
    return (
        <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Questions & Answers</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>


            <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {QuesAnswerData.map((item, index) => (
                    <div className="flex" key={index}>
                        <FiHelpCircle className="h-8 text-emerald-600 me-3" ></FiHelpCircle>
                        <div className="flex-1">
                            <h5 className="mb-2 text-lg font-semibold">{item.question}<span className="text-emerald-600"></span> </h5>
                            <p className="text-slate-400">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

