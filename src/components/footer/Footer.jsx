 

 
import React from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#D3D3D3] text-black p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
     
          <div>
            <h3 className="text-lg font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link to="/contact-us" className="hover:text-gray-600 transition">Contact Us</Link></li>
            </ul>
          </div>

 
          <div>
            <h3 className="text-lg font-bold mb-4">OFFICE</h3>
            <address className="not-italic">
              <p className="mb-2">5258 Rue Ferrier, H4P 1L7 Montreal, QC, Canada</p>
            </address>
          </div>
 
<div className="ml-6">
  <h3 className="text-lg font-bold mb-4">CONTACT</h3>
  <ul className="space-y-2">
    <li>
      <a href="mailto:info@gigaspher.com" className="hover:text-gray-600 transition">
        contact@gigaspheresolutions.com
      </a>
    </li>
  </ul>
</div>

          {/* Follow Us Section */}
         <div className="flex flex-col items-center space-y-4">
  <p className="text-sm font-bold">FOLLOW US</p>
  <div className="flex justify-center space-x-6">
    <a href="#" className="group relative flex justify-center items-center">
      <FaTwitter className="text-xl text-gray-700 hover:text-gray-900 transition" />
      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        Coming Soon
      </span>
    </a>
    <a href="#" className="group relative flex justify-center items-center">
      <FaLinkedinIn className="text-xl text-gray-700 hover:text-gray-900 transition" />
      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        Coming Soon
      </span>
    </a>
  </div>
</div>

        </div>

       <div className="relative border-t border-gray-400 pt-6 pb-6">
  <p className="text-black text-sm text-center">© All rights reserved. {new Date().getFullYear()}</p>
  <p className="absolute bottom-2 right-4 text-sm font-bold">GigaSphere</p>
</div>

      </div>
    </footer>
  );
};

export default Footer;