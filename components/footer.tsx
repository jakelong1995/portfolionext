import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1D] text-white py-8 px-4 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start mb-6 max-w-screen-xlnpx create-payload-app">
        {/* Left side - Logo and Social Media */}
        <div className="mb-6 md:mb-0">
          {/* Logo */}
          <div className="mb-4">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              LT
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-orange-500">
              <FaFacebook size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-orange-500">
              <FaYoutube size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-orange-500">
              <FaWhatsapp size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-orange-500">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-orange-500">
              <FaTwitter size={20} />
            </Link>
          </div>
        </div>

        {/* Right side - Contact Information */}
        <div>
          <h3 className="text-orange-500 text-xl font-semibold mb-4">
            Contact
          </h3>
          <div className="space-y-2">
            <p>+1 123 456 7890</p>
            <p>longtran@example.com</p>
            <p>longtran.com</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center">
        <p>Copyright© 2024 Long Tran. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
