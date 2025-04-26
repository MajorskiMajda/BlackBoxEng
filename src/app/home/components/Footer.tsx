"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="contactSection" className="bg-black text-white py-12 px-8 z-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo and About */}
        <div>
          <Image src="/logo.svg" alt="Kursor Logo" width={180} height={80} />
          <p className="mt-4 text-neutral-400">
            We provide the best services to help you achieve your goals. Join us today!
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#da26ff]">Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="text-neutral-400 text-lg hover:text-[#da26ff]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-neutral-400 text-lg hover:text-[#da26ff]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#contactSection" className="text-neutral-400 text-lg hover:text-[#da26ff]">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/termsandcondition" className="text-neutral-400 text-lg hover:text-[#da26ff]">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacypolicy" className="text-neutral-400 text-lg hover:text-[#da26ff]">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#da26ff]">Contact Us</h3>
          <div className="mt-4 flex space-x-4">
      
            
          </div>

          <p className="mt-4 text-neutral-400">
            Contact Email:{" "}
            <a href="mailto:info@black-box-media.com" className="text-white">
              info@black-box-media.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-neutral-300">
          © {new Date().getFullYear()} Vendora Group LLC. 30 N Gould St Ste R, Sheridan, WY 82801, USA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;