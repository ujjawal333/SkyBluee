
"use client"

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquarePlus, X, Send, Upload, Camera, Trash2 } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Web Developer",
    content: "The courses here have transformed my career. The instructors are knowledgeable and supportive, and the content is top-notch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    content: "I've taken multiple courses on this platform, and each one has exceeded my expectations. The practical approach to learning is invaluable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
  },
  {
    name: "Emily Davis",
    role: "UX Designer",
    content: "The UI/UX design course helped me land my dream job. The curriculum is well-structured and the mentorship is exceptional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
  },
  {
    name: "David Wilson",
    role: "Full Stack Developer",
    content: "The hands-on projects and code reviews have been instrumental in building my confidence as a developer. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
  },
  {
    name: "Jessica Martinez",
    role: "Product Manager",
    content: "The product management certification gave me all the tools I needed to transition into a leadership role. Worth every penny.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
  },
  {
    name: "Robert Taylor",
    role: "AI Engineer",
    content: "The machine learning curriculum is comprehensive and up-to-date. I appreciate how the instructors explain complex concepts in accessible ways.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
  },
];

const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const TestimonialCarousel = () => {
  const sliderRef = useRef(null);
  const fileInputRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const removeImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFeedbackOpen(false);
    setRating(0);
    setSelectedImage(null);
    setPreviewUrl(null);
    // Handle form submission here
  };

  return (
    <section className="relative w-full px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-16 py-6 sm:py-8 lg:py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-full xl:max-w-[100rem] 2xl:max-w-[120rem] mx-auto relative z-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <h3 className="text-emerald-600 font-medium text-base sm:text-lg font-Urbanist mb-2">
            candidates Testimonials
          </h3>
          
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-5 font-CanelaDeck leading-tight">
            What Our candidates Say
          </h2>
          
          <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-600 max-w-2xl mx-auto font-GTAmerican mb-6">
            Join thousands of successful students who have transformed their
            careers through our platform
          </p>

          <button
            onClick={() => setIsFeedbackOpen(true)}
            className="inline-flex items-center gap-2  bg-emerald-600  text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageSquarePlus className="w-5 h-5" />
            <span>Share Your Feedback</span>
          </button>
        </motion.div>

        <div
          className="relative px-4 sm:px-6 md:px-8 lg:px-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence>
            {isHovered && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onClick={handlePrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-100 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </motion.button>
              </>
            )}
          </AnimatePresence>

          <Slider ref={sliderRef} {...settings}>
            {extendedTestimonials.map((testimonial, index) => (
              <div key={index} className="px-2 sm:px-3 py-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2">
                    <div className="p-4 sm:p-5 md:p-6 lg:p-7 relative">
                      <Quote className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 text-emerald-200 opacity-50" />

                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover ring-4 ring-emerald-100"
                          />
                          <div className="absolute -bottom-2 -right-2  bg-emerald-600  text-white p-1 rounded-full">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg sm:text-xl font-semibold font-Urbanist text-gray-900">
                            {testimonial.name}
                          </h3>
                          <p className="text-emerald-600 text-sm sm:text-base font-Urbanist font-medium">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 font-GTAmerican">
                        "{testimonial.content}"
                      </p>

                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Improved Feedback Form Modal */}
      <AnimatePresence>
        {isFeedbackOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-500"
              onClick={() => setIsFeedbackOpen(false)}
            />
            <motion.div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-lg max-h-[90vh] overflow-y-auto z-500"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="relative bg-emerald-600 px-6 py-4">
                  <button
                    onClick={() => setIsFeedbackOpen(false)}
                    className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <h3 className="text-xl font-semibold text-white">Share Your Feedback</h3>
                  <p className="text-emerald-100 mt-1">Help us improve your learning experience</p>
                </div>

                <form onSubmit={handleSubmit} className="p-5">
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How would you rate your experience?
                    </label>
                    <div className="flex justify-center sm:justify-start gap-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="transition-transform hover:scale-110"
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(0)}
                          onClick={() => setRating(star)}
                        >
                          <Star
                            className={`w-7 h-7 sm:w-8 sm:h-8 ${
                              star <= (hoveredStar || rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-shadow"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-shadow"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Improved Image Upload Section */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Image
                    </label>
                    <input
                      type="file"
                      accept="image/jpeg, image/png, image/gif"
                      className="hidden"
                      ref={fileInputRef}
                      onChange={handleImageChange}
                    />
                    
                    {!previewUrl ? (
                      <div 
                        onClick={triggerFileInput}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-emerald-500 transition-colors"
                      >
                        <div className="bg-emerald-100 p-3 rounded-full">
                          <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                        </div>
                        <p className="text-sm text-gray-700 font-medium text-center">Click to upload an image</p>
                        <p className="text-xs text-gray-500 text-center">JPG, PNG, GIF up to 10MB</p>
                      </div>
                    ) : (
                      <div className="relative rounded-lg overflow-hidden">
                        <img 
                          src={previewUrl} 
                          alt="Preview" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={triggerFileInput}
                              className="bg-white p-2 rounded-full shadow-md hover:bg-emerald-50 transition-colors"
                            >
                              <Camera className="w-5 h-5 text-emerald-600" />
                            </button>
                            <button
                              type="button"
                              onClick={removeImage}
                              className="bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors"
                            >
                              <Trash2 className="w-5 h-5 text-red-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <p className="mt-2 text-xs text-gray-500 text-center sm:text-left">
                      Add an image to provide visual context to your feedback
                    </p>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Feedback
                    </label>
                    <textarea
                      id="feedback"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-shadow resize-none"
                      placeholder="Share your thoughts and suggestions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    Submit Feedback
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        .slick-track {
          display: flex !important;
          align-items: stretch;
          gap: 0.5rem;
          margin-left: -0.5rem;
          padding: 1rem 0;
        }
        .slick-slide {
          height: inherit;
          > div {
            height: 100%;
          }
        }
        @media (min-width: 640px) {
          .slick-track {
            gap: 1rem;
            margin-left: -0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialCarousel;