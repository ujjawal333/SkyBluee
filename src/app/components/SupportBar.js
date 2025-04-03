// components/SupportBar.jsx
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const SupportBar = () => {
  return (

    <div className=" text-white py-0  w-full relative z-[9999]">
    <div className="bg-gray-800 text-white py-3 w-full relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left side - Contact Info */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <FaPhone className="mr-2 text-gray-400" />
            <span>+92 666 999 0000</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-gray-400" />
            <span>needhelp@company.com</span>
          </div>
        </div>
        
        {/* Right side - Social Links and Become Guide Button */}
        <div className="flex items-center">
          {/* Social Media Icons */}
          <div className="hidden md:flex space-x-4 mr-6">
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <FaFacebook />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <FaPinterest />
            </Link>
          </div>
          
          {/* Become a Local Guide Button */}
          <Link 
            href="/become-guide" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 transition-colors"
          >
            BECOME A LOCAL GUIDE
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SupportBar;