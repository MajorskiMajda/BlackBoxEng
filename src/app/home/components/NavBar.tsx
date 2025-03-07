'use client';

import { useState, useEffect, useRef } from 'react';
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current) {
      setScrollDirection('down');
      setIsOpen(false);
    } else {
      setScrollDirection('up');
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`w-full z-50 bg-black mx-auto drop-shadow-xl p-4 pl-16 pr-16 flex justify-between items-center sticky transition-all duration-300 ease-in-out ${
        scrollDirection === 'down' ? '-top-20 opacity-0' : 'top-0 opacity-100 shadow-md'
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Image
          priority
          src="/logo.svg"
          alt="Kursor Logo"
          width={150}
          height={50}
          className="sm:w-40 md:w-44 lg:w-40 h-auto"
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <button aria-label="drop down nav" onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
        <Bars3Icon className="h-10 w-10" />
      </button>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex md:items-center md:space-x-6">
        <Link href="/" className="text-white text-lg hover:text-[#da26ff]">
          Pocetna
        </Link>

        {/* Dropdown Menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            aria-label="drop down nav"
            onClick={toggleDropdown}
            className="text-white text-lg flex items-center hover:text-[#da26ff]"
          >
            Nase Usluge <ChevronDownIcon className="w-5 h-5 ml-1" />
          </button>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute navbg top-10 border-1 border-[#da26ff] text-white left-0 shadow-lg rounded-lg p-2 w-48"
              >
                <Link href="/seo" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#da26ff]">
                  Seo Optimizacija
                </Link>
                <Link href="/googleads" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#da26ff]">
                  Google Ads
                </Link>
                <Link href="/metaads" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#da26ff]">
                  Meta Ads
                </Link>
                <Link href="/emailmarketing" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#da26ff]">
                  Email Marketing
                </Link>
                <Link href="/smm" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#da26ff]">
                  Instagram
                </Link>
                <Link href="/reels" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#da26ff]">
                  Reels
                </Link>
                <Link href="/sajtovi" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#da26ff]">
                  Websites
                </Link>
                <Link href="/grafickidizajn" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#da26ff]">
                  Graficki Dizajn
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link href="#contactSection" className="text-white text-lg hover:text-[#da26ff]">
          Kontaktirajte nas
        </Link>
        <Link href="/onama" className="text-white text-lg hover:text-[#da26ff]">
          O nama
        </Link>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-black text-white p-4 flex flex-col space-y-4 md:hidden"
          >
            <Link href="/" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }} className="text-white text-xl hover:text-[#da26ff]">
              O nama
            </Link>

            {/* Mobile Dropdown */}
            <div className="relative">
              <div className="mt-2 border-1 border-[#da26ff] shadow-md rounded-lg p-2">
                Nase Usluge:
                <hr className="opacity-20" />
                <Link href="/seo" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }} className="block px-4 py-2 hover:text-[#da26ff]">
                  Seo Optimizacija
                </Link>
                <Link href="/googleads" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }} className="block px-4 py-2 hover:text-[#da26ff]">
                  Google Ads
                </Link>
                <Link href="/metaads" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }} className="block px-4 py-2 hover:text-[#da26ff]">
                  Meta Ads
                </Link>
                <Link href="/emailmarketing" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }} className="block px-4 py-2 hover:text-[#da26ff]">
                  Email Marketing
                </Link>
                <Link href="/smm" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }} className="block px-4 py-2 hover:text-[#da26ff]">
                  Instagram
                </Link>
                <Link href="/reels" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }} className="block px-4 py-2 hover:text-[#da26ff]">
                  Reels
                </Link>
                <Link href="/sajtovi" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }} className="block px-4 py-2 hover:text-[#da26ff]">
                  Websites
                </Link>
                <Link href="/grafickidizajn" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }} className="block px-4 py-2 hover:text-[#da26ff]">
                  Graficki Dizajn
                </Link>
              </div>
            </div>
            <Link href="#contactSection" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }} className="text-xl hover:text-[#da26ff]">
              Kontaktirajte nas
            </Link>
            <Link href="/onama" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }} className="text-white text-lg hover:text-[#da26ff]">
              O nama
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}