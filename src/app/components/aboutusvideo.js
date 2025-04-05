"use client";

import { Play, X } from "lucide-react";
import { useState, useEffect } from "react";

const VideoSection = ({ 
  videoUrl = "https://www.youtube.com/watch?v=vjsnZHhI2Z0",
  title = "Watch Our Video",
  subtitle = "See Our Success Story" 
}) => {
  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Only apply sticky behavior if video is playing
      if (isPlaying) {
        const videoSection = document.getElementById("video-section");
        if (videoSection) {
          // Get the section's position relative to the viewport
          const rect = videoSection.getBoundingClientRect();

          // Get viewport height
          const viewportHeight = window.innerHeight;

          // Check if the section is sufficiently out of view
          // We consider it out of view if:
          // 1. The top edge is more than 300px above the viewport OR
          // 2. The bottom edge is more than 300px below the viewport bottom
          const isSectionOutOfView =
            rect.top < -300 || rect.bottom > viewportHeight + 300;

          // Check if a significant portion of the section is visible in viewport
          const isSignificantlyVisible =
            (rect.top >= -100 && rect.top <= viewportHeight) ||
            (rect.bottom >= 0 && rect.bottom <= viewportHeight + 100) ||
            (rect.top <= 0 && rect.bottom >= viewportHeight);

          // Set sticky state based on visibility
          setIsSticky(isSectionOutOfView && !isSignificantlyVisible);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Run once on mount to set initial state
    handleScroll();

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPlaying]);

  return (
    <section 
      id="video-section" 
      className="relative w-full bg-[#fbfdff] dark:bg-slate-900 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-16 py-10 sm:py-16 md:py-20"
    >
      {/* Section title with blue accent - matching the achievements section style */}
      <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 md:mb-16">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <div className="hidden sm:block w-10 md:w-16 lg:w-20 h-1 bg-blue-600 dark:bg-blue-500"></div>
          <h2 className="text-2xl sm:text-3xl font-CanelaDeck md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-center">
            <span className="text-gray-900 dark:text-white">{title} </span>
            <span className="text-blue-600 dark:text-blue-400">{subtitle}</span>
          </h2>
          <div className="hidden sm:block w-10 md:w-16 lg:w-20 h-1 bg-blue-600 dark:bg-blue-500"></div>
        </div>
        {/* Mobile-only divider */}
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 block sm:hidden mt-2"></div>
      </div>

      <div className="max-w-full xl:max-w-[100rem] 2xl:max-w-[120rem] mx-auto flex justify-center">
        {/* Container with relative positioning for proper dotted border placement */}
        <div className="relative w-full max-w-4xl">
          {/* Dotted border container with animation */}
          <div
            className={`absolute -top-8 -left-8 -bottom-8 -right-8 border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-[40px] transition-all duration-700 ${
              isHovering ? "border-blue-600 dark:border-blue-400 scale-[1.02]" : ""
            }`}
          ></div>

          {/* Video container */}
          <div
            className="relative rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-blue-900/20 transition-transform duration-500 ease-in-out"
            style={{
              transform: isHovering ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img
              src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Student studying"
              className="w-full object-cover transition-all duration-700"
              style={{
                height: "450px",
                filter: isHovering ? "brightness(0.85)" : "brightness(1)",
                transform: isHovering ? "scale(1.03)" : "scale(1)",
              }}
            />

            {/* Play button overlay with premium design */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
              aria-label="Play video"
            >
              <div className="relative">
                {/* Subtle glow effect - with dark mode support */}
                <div 
                  className={`absolute inset-0 rounded-full ${
                    isHovering ? "animate-pulse" : ""
                  } bg-white dark:bg-blue-400 opacity-40`} 
                  style={{ 
                    width: "6rem", 
                    height: "6rem", 
                    marginLeft: "-0.75rem", 
                    marginTop: "-0.75rem",
                    filter: "blur(8px)"
                  }}
                ></div>
                
                {/* Outer circle with refined glass morphism effect */}
                <div 
                  className={`w-20 h-20 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
                    isHovering ? "scale-110" : ""
                  }`}
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    boxShadow: isHovering ? "0 10px 25px rgba(0,0,0,0.2)" : "0 5px 15px rgba(0,0,0,0.1)"
                  }}
                >
                  {/* Inner circle with premium dark gradient */}
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isHovering ? "scale-110" : ""
                    }`}
                    style={{
                      background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
                      boxShadow: "0 0 15px rgba(59,130,246,0.5)"
                    }}
                  >
                    {/* Play icon with animation */}
                    <Play 
                      className={`w-8 h-8 ml-1 transition-all duration-500 ${
                        isHovering ? "text-white scale-110" : "text-gray-100"
                      }`} 
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Section description text - matching style from other sections */}
          <div className="mt-8 text-center">
            <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-600 dark:text-gray-300 font-GTAmerican max-w-2xl mx-auto">
              Watch our explainer video to learn more about our educational approach and 
              see how our innovative teaching methods have helped thousands of students achieve their goals.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Video Player with dark mode support */}
      {isPlaying && (
        <div
          className={`${
            isSticky
              ? "fixed bottom-6 right-6 z-50 w-80 h-45 shadow-2xl dark:shadow-blue-900/30 rounded-lg overflow-hidden transition-all duration-500"
              : "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] h-[75%] max-w-3xl bg-black rounded-xl shadow-2xl dark:shadow-blue-900/30 overflow-hidden transition-all duration-500"
          }`}
        >
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${getYouTubeVideoId(
              videoUrl
            )}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button
            className={`absolute top-4 right-4 bg-white/20 hover:bg-white/30 dark:bg-black/40 dark:hover:bg-black/60 rounded-full p-2 transition-all duration-300 hover:scale-110 ${
              isSticky ? "scale-75" : ""
            }`}
            onClick={() => setIsPlaying(false)}
            aria-label="Close video"
          >
            <X className="text-white" />
          </button>

          {/* Add video overlay with gradient when sticky */}
          {isSticky && (
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/80 to-transparent"></div>
          )}
        </div>
      )}

      {/* Add backdrop overlay when video is playing */}
      {isPlaying && !isSticky && (
        <div 
          className="fixed inset-0 bg-black/70 dark:bg-black/80 backdrop-blur-sm z-40"
          onClick={() => setIsPlaying(false)}
        ></div>
      )}
    </section>
  );
};

export default VideoSection;