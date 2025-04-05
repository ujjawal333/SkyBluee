// FAQ Section Component with View More functionality
'use client'
import { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

// FAQ Item Component
const FAQItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4 sm:py-5">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={onClick}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick()} // Keyboard accessibility
      >
        <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-medium text-gray-800 dark:text-gray-200 font-Urbanist pr-4">{title}</h3>
        <button 
          className={`min-w-8 min-h-8 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500 flex items-center justify-center text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} flex-shrink-0`}
          type="button"
          aria-label={isOpen ? "Collapse answer" : "Expand answer"}
        >
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
      
      {isOpen && (
        <div className="mt-3 sm:mt-4 text-sm sm:text-base md:text-base lg:text-lg text-gray-600 dark:text-gray-400 pr-2 sm:pr-8 animate-fadeIn font-GTAmerican">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

// Main FAQ Section Component
const FAQSection = () => {
  const [openItem, setOpenItem] = useState(4); // Last item open by default
  const [viewMoreClicked, setViewMoreClicked] = useState(false);
  
  // Set the number of items to show in each state
  const INITIAL_ITEMS = 4; // Number of items to show initially
  
  const faqItems = [
    { 
      id: 1, 
      title: 'Development & Design', 
      content: 'Our development and design process is collaborative and iterative. We work closely with clients to understand their needs, create prototypes, and deliver polished solutions that work across all devices.' 
    },
    { 
      id: 2, 
      title: 'Start With Mentors', 
      content: 'Our mentorship program connects you with experienced professionals in your field. Mentors provide guidance, feedback, and support to help accelerate your learning and career development.' 
    },
    { 
      id: 3, 
      title: 'The Best Way to Boost Your Skills', 
      content: 'Consistent practice, project-based learning, and seeking feedback are the most effective ways to improve your skills. Our platform offers resources, challenges, and community support to help you grow.' 
    },
    { 
      id: 4, 
      title: 'What Can I Do to Help?', 
      content: 'You can contribute by sharing your knowledge, participating in community discussions, providing feedback on our services, or volunteering for mentorship opportunities with newcomers to the field.' 
    },
    { 
      id: 5, 
      title: 'How Do I Get Started?', 
      content: 'Getting started is simple. Sign up for an account, complete your profile, browse available resources, and join a community that matches your interests. Our onboarding guide will walk you through each step.' 
    },
    { 
      id: 6, 
      title: 'Pricing & Membership Options', 
      content: 'We offer flexible membership tiers to suit different needs and budgets. Our basic plan is free with limited features, while premium plans provide access to exclusive content, advanced tools, and personalized coaching.' 
    },
    { 
      id: 7, 
      title: 'Technical Support & Resources', 
      content: 'Our technical support team is available 24/7 to assist with any issues. We also provide comprehensive documentation, tutorials, and a knowledge base to help you make the most of our platform.' 
    },
    { 
      id: 8, 
      title: 'Career Advancement Opportunities', 
      content: 'We provide resources and connections to help you advance in your career. This includes job boards, networking events, resume workshops, and personalized career coaching to help you reach your professional goals.' 
    },
    { 
      id: 9, 
      title: 'Industry Certifications', 
      content: 'Our platform offers preparation courses for industry-recognized certifications. These credentials can significantly enhance your resume and demonstrate your expertise to potential employers.' 
    },
    { 
      id: 10, 
      title: 'Community Events & Workshops', 
      content: 'We regularly host virtual and in-person events, including workshops, webinars, hackathons, and networking sessions. These events provide opportunities to learn new skills, connect with peers, and stay updated on industry trends.' 
    },
    { 
      id: 11, 
      title: 'Research & Innovation Labs', 
      content: 'Our research labs collaborate with industry partners to explore cutting-edge technologies and methodologies. Members can participate in innovative projects that address real-world challenges and contribute to technological advancement.' 
    },
    { 
      id: 12, 
      title: 'Global Learning Opportunities', 
      content: 'We offer international exchange programs and global collaboration initiatives. These opportunities allow you to gain cross-cultural experience, broaden your perspective, and build a global professional network.' 
    }
  ];
  
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const toggleViewMore = () => {
    setViewMoreClicked(!viewMoreClicked);
    // When collapsing, ensure we don't have an open item in the hidden section
    if (viewMoreClicked && openItem && openItem > INITIAL_ITEMS) {
      setOpenItem(null);
    }
  };
  
  return (
    <div className="relative w-full bg-white dark:bg-slate-900 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-16 py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-full xl:max-w-[100rem] 2xl:max-w-[120rem] mx-auto">
        {/* Section Header with consistent styling */}
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="hidden sm:block w-10 md:w-16 lg:w-20 h-1 bg-blue-500"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-CanelaDeck xl:text-5xl 2xl:text-6xl font-bold text-center">
              <span className="text-gray-900 dark:text-white">Frequently Asked </span>
              <span className="text-blue-500">Questions</span>
            </h2>
            <div className="hidden sm:block w-10 md:w-16 lg:w-20 h-1 bg-blue-500"></div>
          </div>
          {/* Mobile-only divider */}
          <div className="w-20 h-1 bg-blue-500 block sm:hidden mt-2"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 relative mb-10 lg:mb-0">
            <div className="relative aspect-[3/4] w-full max-w-lg mx-auto lg:max-w-none">
              {/* Using a placeholder div with the same aspect ratio for mobile */}
              <div className="rounded-lg overflow-hidden w-full h-full shadow-lg dark:shadow-gray-700">
                {/* Using standard img tag to avoid Next.js Image configuration issues */}
                <img 
                  src="https://i.pinimg.com/474x/d9/0e/6c/d90e6cd5570450edb51d67552c8b139f.jpg" 
                  alt="Graduate in green gown" 
                  className="rounded-lg object-cover w-full h-full"
                />
                
                {/* Shape overlay on image */}
                <div className="absolute inset-0 rounded-lg overflow-hidden" style={{ 
                  background: "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1))",
                  mixBlendMode: "overlay" 
                }}></div>
              </div>
              
              {/* Online Support Badge - Responsive positioning */}
              <div className="absolute left-1/2 sm:left-1/3 md:left-36 bottom-8 sm:bottom-24 md:bottom-32 transform -translate-x-1/2 bg-blue-600 text-white shadow-lg rounded-tr-3xl rounded-bl-3xl px-6 py-4 sm:px-8 sm:py-6 md:px-10 md:py-6">
                <div className="font-bold text-xl sm:text-2xl mb-1 sm:mb-2 font-Urbanist">Online Support</div>
                <div className="text-sm sm:text-base font-GTAmerican">+858 75 45 64 24</div>
              </div>
            </div>
          </div>
          
          {/* Right side - FAQ */}
          <div className="w-full lg:w-1/2">
            {/* FAQ Container with scrollable area when needed */}
            <div className={`${viewMoreClicked ? 'max-h-[600px] overflow-y-auto pr-4 custom-scrollbar' : ''} transition-all duration-500`}>
              <div className="space-y-1">
                {/* Initial State: Always show first 4 items */}
                {!viewMoreClicked && faqItems.slice(0, INITIAL_ITEMS).map((item) => (
                  <FAQItem 
                    key={item.id}
                    title={item.title}
                    content={item.content}
                    isOpen={openItem === item.id}
                    onClick={() => toggleItem(item.id)}
                  />
                ))}
                
                {/* View More State: Show all items with scrolling */}
                {viewMoreClicked && faqItems.map((item) => (
                  <FAQItem 
                    key={item.id}
                    title={item.title}
                    content={item.content}
                    isOpen={openItem === item.id}
                    onClick={() => toggleItem(item.id)}
                  />
                ))}
              </div>
            </div>
            
            {/* View More / View Less Button */}
            {faqItems.length > INITIAL_ITEMS && (
              <div className="mt-10 flex justify-center">
                <button 
                  onClick={toggleViewMore}
                  className="group flex items-center justify-center gap-2 py-3 px-6 bg-white dark:bg-slate-900 border-2 border-blue-500 rounded-full hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-gray-700"
                >
                  <span className="text-blue-500 font-medium font-Urbanist">{viewMoreClicked ? 'View Less' : 'View More'}</span>
                  <span className={`w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white transition-transform duration-300 ${viewMoreClicked ? 'rotate-45' : ''}`}>
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;