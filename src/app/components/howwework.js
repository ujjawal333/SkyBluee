"use client"
import { useState, useEffect } from 'react';
import { Users, Target, UserCheck, Users2, Database, Workflow, PcCase, GraduationCap } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Initial Screening',
    color: '#4F46E5',
    icon: Users,
  },
  {
    id: 2,
    title: 'Commitment to TATs',
    color: '#7C3AED',
    icon: Target,
  },
  {
    id: 3,
    title: 'Right Fit Profile',
    color: '#9333EA',
    icon: UserCheck,
  },
  {
    id: 4,
    title: 'Complete Services',
    color: '#C026D3',
    icon: Users2,
  },
  {
    id: 5,
    title: 'Flexibility',
    color: '#DB2777',
    icon: Workflow,
  },
  {
    id: 6,
    title: 'Candidate Pool',
    color: '#E11D48',
    icon: Database,
  },
  {
    id: 7,
    title: 'Tech Expertise',
    color: '#DC2626',
    icon: PcCase,
  },
  {
    id: 8,
    title: 'Trained Team',
    color: '#EA580C',
    icon: GraduationCap,
  },
];

const gulfCountries = [
  { name: 'Saudi Arabia', code: 'sa' },
  { name: 'United Arab Emirates', code: 'ae' },
  { name: 'Qatar', code: 'qa' },
  { name: 'Kuwait', code: 'kw' },
  { name: 'Bahrain', code: 'bh' },
  { name: 'Oman', code: 'om' },
  { name: 'Iraq', code: 'iq' }
];

// Custom hook to safely handle window dimensions
function useWindowSize() {
  // Default values for server-side rendering
  const [windowSize, setWindowSize] = useState({
    width: 1024, // Default to a desktop size
    height: 768
  });
  
  // Only run this effect on the client side
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    
    // Set initial size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return { ...windowSize, isMounted };
}

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(null);
  const { width, isMounted } = useWindowSize();
  
  // Calculate radius based on screen size, but only after component is mounted
  const getRadius = () => {
    if (!isMounted) return 225; // Default for server-side rendering
    if (width < 640) return 125;
    if (width < 768) return 175;
    return 225;
  };
  
  const radius = getRadius();
  const centerPoint = radius + 25; // Add some padding

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900">
        How We Work
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        {/* Process Circle */}
        <div className="w-full lg:w-3/5">
          <div className="relative grid place-items-center">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
              {steps.map((step, index) => {
                const angle = (index * 360) / steps.length;
                const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
                const y = radius * Math.sin((angle - 90) * (Math.PI / 180));

                return (
                  <div
                    key={step.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      zIndex: activeStep === step.id ? 10 : 1,
                    }}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    <div
                      className="relative group"
                      style={{
                        transform: `scale(${activeStep === step.id ? 1.1 : 1})`,
                      }}
                    >
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                        style={{ backgroundColor: step.color }}
                      >
                        <step.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                      </div>
                      
                      <div className="absolute -right-1 -top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white text-[10px] sm:text-xs font-bold shadow flex items-center justify-center">
                        {step.id}
                      </div>
                      
                      <div
                        className={`absolute ${
                          index >= 4 ? 'bottom-full mb-2' : 'top-full mt-2'
                        } left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 bg-white/90 px-2 sm:px-3 py-1 rounded-full shadow-sm`}
                      >
                        {step.title}
                      </div>
                    </div>
                  </div>
                );
              })}

              {isMounted && (
                <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(-22.5deg)' }}>
                  <circle
                    cx={centerPoint}
                    cy={centerPoint}
                    r={radius}
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="opacity-50"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="100%" stopColor="#EA580C" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* Gulf Countries */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <div className="w-full max-w-[400px] px-4">
            <div className="space-y-2 sm:space-y-3">
              {gulfCountries.map((country) => (
                <div
                  key={country.code}
                  className="flex items-center space-x-3 sm:space-x-4 bg-white/80 backdrop-blur-sm p-2 sm:p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <img
                    src={`https://flagcdn.com/w40/${country.code}.png`}
                    alt={`${country.name} flag`}
                    className="w-6 sm:w-8 h-auto rounded shadow-sm group-hover:shadow transition-all duration-300"
                  />
                  <span className="text-sm sm:text-base font-medium text-gray-800">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
