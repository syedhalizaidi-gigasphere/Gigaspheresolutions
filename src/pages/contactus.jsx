 

import React from "react";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-28 px-4 sm:px-6 lg:px-8 bg-[#F4F3EB]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            We'd love to hear from you. Whether you have a question about our services, need support,
            or want to explore a potential partnership, our team is here to help.
          </p>

          <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-16">
            <div className="p-8 md:p-12 bg-white">
              <form 
                action="https://formspree.io/f/mjkreowy"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#D3D3D3] focus:border-[#D3D3D3]"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="flex-1 mb-4 md:mb-0">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#D3D3D3] focus:border-[#D3D3D3]"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#D3D3D3] focus:border-[#D3D3D3]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:ring focus:ring-[#D3D3D3] focus:border-[#D3D3D3]"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#D3D3D3] hover:bg-[#D3D3D3] text-black font-semibold py-3 px-6 rounded-md shadow-md transition duration-200 cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
