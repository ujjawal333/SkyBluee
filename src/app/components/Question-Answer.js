import { FiHelpCircle } from '../assets/icons/vander';


export default function QuesAnswer() {
    const QuesAnswerData = [
        {
            question: 'What services does SkyBlue HR provide?',
            answer: 'SkyBlue HR offers a comprehensive recruitment service, helping you find the right candidates from countries like Nepal, India, Bangladesh, Pakistan, Philippines, Indonesia, and Sri Lanka for international placements.'
        },
        {
            question: 'How does SkyBlue HR ensure the quality of candidates?',
            answer: 'We provide end-to-end recruitment services, including candidate screening, interviews, and document verification, ensuring the highest quality workforce for your business needs.'
        },
        {
            question: 'What industries does SkyBlue HR specialize in?',
            answer: 'We excel in sectors such as construction, oil & gas, IT, healthcare, heavy equipment operations, and hospitality, ensuring that we meet diverse staffing needs across industries.'
        },
        {
            question: 'How does the visa and immigration process work?',
            answer: 'SkyBlue HR handles all visa processing and immigration documentation, ensuring a smooth transition for candidates. We also assist with documentation attestation and government approvals.'
        },
        {
            question: 'How can I contact SkyBlue HR for recruitment services?',
            answer: 'You can reach us through our official contact numbers or email: Madan Khadka Chhetri (Chairman) at 00977-9802358960 or madankhadkachhetri@gmail.com.'
        }
    ];
    return (
        <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Questions & Answers</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions with SkyBlue HR. Get your own personalized salary estimate. Read reviews on over 65+ companies worldwide.</p>
            </div>


            <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {QuesAnswerData.map((item, index) => (
                    <div className="flex" key={index}>
                        <FiHelpCircle className="h-8 text-skyblue me-3" ></FiHelpCircle>
                        <div className="flex-1">
                            <h5 className="mb-2 text-lg font-semibold">{item.question}<span className="text-skyblue"></span> </h5>
                            <p className="text-slate-400">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

