import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 md:space-x-12">

        {/* Left side: Logo & Socials */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            yodora<span className="text-accent500">.</span>
          </h2>
          <div className="flex space-x-4 text-gray-700 text-lg">
            <FaFacebookF className="hover:text-black cursor-pointer" />
            <FaTwitter className="hover:text-black cursor-pointer" />
            <FaInstagram className="hover:text-black cursor-pointer" />
          </div>
        </div>

        {/* Right side: Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm text-gray-700">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li className="hover:text-accent500 hover:underline cursor-pointer">How it works</li>
              <li className="hover:text-accent500 hover:underline cursor-pointer">Company</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Help & Support</h4>
            <ul className="space-y-2">
              <li className="hover:text-accent500 hover:underline cursor-pointer">For creators</li>
              <li className="hover:text-accent500 hover:underline cursor-pointer">Getting paid</li>
              <li className="hover:text-accent500 hover:underline cursor-pointer">Onboarding</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Learn</h4>
            <ul className="space-y-2">
              <li className="hover:text-accent500 hover:underline cursor-pointer">Blog</li>
              <li className="hover:text-accent500 hover:underline cursor-pointer">Career</li>
              <li className="hover:text-accent500 hover:underline cursor-pointer">Affiliates</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li className="hover:text-accent500 hover:underline cursor-pointer">Service status</li>
              <li className="hover:text-accent500 hover:underline cursor-pointer">Cookies policy</li>
              <li className="hover:text-accent500 hover:underline cursor-pointer">Privacy policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-12 px-2 text-center text-xs sm:text-sm text-gray-400">
  © {new Date().getFullYear()} Yodora. All rights reserved.
</div>

    </footer>
  );
}
