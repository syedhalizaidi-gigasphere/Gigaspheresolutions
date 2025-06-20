 
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

// const Footer = () => {
//     return (
//         <footer style={{ backgroundColor: '#D3D3D3' }} className="py-10 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

//                 <div className="col-span-1 md:col-span-1">
//                     <h3 className="text-black text-2xl font-bold mb-4">GigaSphere</h3>
//                 </div>

//                 <div>
//                     <h4 className="text-black text-lg font-semibold mb-4">Quick Links</h4>
//                     <ul className="space-y-2">
                         
//                         <li><Link to="/contact" className="text-black hover:text-gray-700 transition duration-300 text-sm">Contact</Link></li>
//                     </ul>
//                 </div>

//                 <div>
//                     <h4 className="text-black text-lg font-semibold mb-4">Our Services</h4>
//                     <ul className="space-y-2">
//                         <li><a href="#" className="text-black hover:text-gray-700 transition duration-300 text-sm"> Data Management & Governance</a></li>
//                         <li><a href="#" className="text-black hover:text-gray-700 transition duration-300 text-sm"> Data Migration​</a></li>
//                         <li><a href="#" className="text-black hover:text-gray-700 transition duration-300 text-sm"> Unified Analytics with Databricks</a></li>
//                         <li><a href="#" className="text-black hover:text-gray-700 transition duration-300 text-sm"> Data Integration​</a></li>
//                     </ul>
//                 </div>

//                 <div>
//                     <h4 className="text-black text-lg font-semibold mb-4">Connect With Us</h4>
//                     <ul className="space-y-2 mb-4">
//                         <li className="text-black text-sm">Email: <a href="mailto:info@gigaspher.com" className="hover:text-gray-700">contact@gigaspheresolutions.ca</a></li>
//                         <li className="text-black text-sm">Phone: <a href="tel:+1234567890" className="hover:text-gray-700">+1 (234) 567-890</a></li>
//                         <li className="text-black text-sm">Address:  5258 Rue Ferrier, H4P 1L7 Montreal, QC, Canada</li>
//                     </ul>

//                     <div className="flex space-x-6 mt-4">
//                         <div className="group flex flex-col items-center w-6 relative">
//                             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition duration-300">
//                                 <FaLinkedinIn size={24} />
//                             </a>
//                             <span className="mt-0 w-[max-content] text-center px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                 Coming Soon
//                             </span>
//                         </div>

//                         <div className="group flex flex-col items-center relative w-6">
//                             <a href="https://twitter" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition duration-300">
//                                 <FaTwitter size={24} />
//                             </a>
//                             <span className="mt-0 w-[max-content] text-center px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                 Coming Soon
//                             </span>
//                         </div>
//                     </div>
//                 </div>

//             </div>  

//             <div className="border-t border-gray-300 mt-8 pt-6 text-center">
//                 <p className="text-black text-sm">
//                     &copy; {new Date().getFullYear()} GigaSphere Solutions. All rights reserved.
//                 </p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
import React from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#D3D3D3] text-black p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="hover:text-gray-600 transition">Contact  </a></li>
            </ul>
          </div>

          {/* Offices Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">OFFICES</h3>
            <address className="not-italic">
              <p className="mb-2">5258 Rue Ferrier, H4P 1L7 Montreal, QC, Canada</p>
            </address>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@gigaspher.com" className="hover:text-gray-600 transition">
                  info@GigaSphere.com
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="#" className="group relative">
                <FaTwitter className="text-xl text-gray-700 hover:text-gray-900 transition" />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  Coming Soon
                </span>
              </a>
              <a href="#" className="group relative">
                <FaLinkedinIn className="text-xl text-gray-700 hover:text-gray-900 transition" />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  Coming Soon
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm">© All rights reserved. {new Date().getFullYear()}</p>
          <p className="text-sm font-bold">GigaSphere</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;