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
    const currentScrollY = window.scrollY;
    const scrollDiff = Math.abs(currentScrollY - lastScrollY.current); // Detects small movements

    if (currentScrollY < 35 || (currentScrollY < lastScrollY.current && scrollDiff > 5)) {
      // Show navbar when near the top or when scrolling up
      setScrollDirection('up');
    } else if (currentScrollY > lastScrollY.current && scrollDiff > 5) {
      // Hide navbar when scrolling down
      setScrollDirection('down');
      setIsOpen(false);
    }

    lastScrollY.current = currentScrollY;
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
      className={`w-full z-50 bg-black mx-auto drop-shadow-xl lg:py-7 py-4 lg:px-16 px-6 flex justify-between items-center sticky transition-all duration-300 ease-in-out ${scrollDirection === 'down' ? '-top-20 opacity-0' : 'top-0 opacity-100 shadow-md'
        }`}
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            priority
            src="/logo.svg"
            alt="Kursor Logo"
            width={150}
            height={100}
            className="cursor-pointer sm:w-30 md:w-34 lg:w-50 h-auto"
          />
        </Link>
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
                <Link href="/seo-optimizacija" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#da26ff]">
                  Seo Optimizacija
                </Link>
                <Link href="/google-reklame" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#da26ff]">
                  Google Ads
                </Link>
                <Link href="/meta-reklame" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#da26ff]">
                  Meta Ads
                </Link>
                <Link href="/email-marketing" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#da26ff]">
                  Email Marketing
                </Link>
                <Link href="/smm" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#da26ff]">
                  Instagram
                </Link>
                <Link href="/reels" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#da26ff]">
                  Reels
                </Link>
                <Link href="/izrada-sajtova" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#da26ff]">
                  Websites
                </Link>
                <Link href="/graficki-dizajn" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#da26ff]">
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
            className="absolute top-16 left-0 w-full bg-black text-neutral-300 p-4 flex flex-col space-y-4 md:hidden"
          >
            {[
              { href: "/", text: "Pocetna" },
              { href: "/seo-optimizacija", text: "Seo Optimizacija" },
              { href: "/google-reklame", text: "Google Ads" },
              { href: "/meta-reklame", text: "Meta Ads" },
              { href: "/email-marketing", text: "Email Marketing" },
              { href: "/smm", text: "Instagram" },
              { href: "/reels", text: "Reels" },
              { href: "/izrada-sajtova", text: "Websites" },
              { href: "/graficki-dizajn", text: "Graficki Dizajn" },
              { href: "#contactSection", text: "Kontaktirajte nas" },
              { href: "/onama", text: "O nama" },
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link href={link.href} onClick={() => { toggleMenu(); setIsDropdownOpen(false); }} className="text-neutral-300-300 text-xl hover:text-[#da26ff]">
                  {link.text}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}