"use client";

import { useState, useEffect, useRef } from "react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Define navigation items once to reuse in both desktop and mobile
const navItems = [
  { href: "/seo-optimizacija", text: "Seo Optimizacija" },
  { href: "/google-reklame", text: "Google Reklame" },
  { href: "/meta-reklame", text: "Meta Reklame" },
  { href: "/email-marketing", text: "Email Marketing" },
  { href: "/smm", text: "Menadžment Društvenih Mreža" },
  { href: "/reels", text: "Izrada Reels Reklama" },
  { href: "/izrada-sajtova", text: "Izrada Veb Sajtova" },
  { href: "/graficki-dizajn", text: "Grafički Dizajn" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = Math.abs(currentScrollY - lastScrollY.current);

      if (currentScrollY < 35 || (currentScrollY < lastScrollY.current && scrollDiff > 5)) {
        setScrollDirection("up");
      } else if (currentScrollY > lastScrollY.current && scrollDiff > 5) {
        setScrollDirection("down");
        setIsOpen(false); // Close mobile menu when scrolling down
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside handler for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`w-full z-50 bg-black mx-auto drop-shadow-xl lg:py-7 py-4 lg:px-16 px-6 flex justify-between items-center sticky transition-all duration-300 ease-in-out ${
        scrollDirection === "down" ? "-top-20 opacity-0" : "top-0 opacity-100 shadow-md"
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
      <button
        aria-label="Toggle mobile menu"
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none"
      >
        <Bars3Icon className="h-10 w-10" />
      </button>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex md:items-center md:space-x-6">
        <Link href="/" className="text-white text-lg hover:text-[#da26ff]">
          Početna
        </Link>

        {/* Dropdown Menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            aria-label="Toggle services dropdown"
            onClick={toggleDropdown}
            className="text-white text-lg flex items-center hover:text-[#da26ff] focus:outline-none"
          >
            Naše Usluge <ChevronDownIcon className="w-5 h-5 ml-1" />
          </button>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute navbg top-10 border border-[#da26ff] text-white left-0 shadow-lg rounded-lg p-2 w-48"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={toggleDropdown}
                    className="block px-4 py-2 hover:text-[#da26ff]"
                  >
                    {item.text}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link href="/onama" className="text-white text-lg hover:text-[#da26ff]">
          O nama
        </Link>
        <Link href="#contactSection" className="text-white text-lg hover:text-[#da26ff]">
          Kontaktirajte nas
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
              { href: "/", text: "Početna" },
              ...navItems,
              { href: "/onama", text: "O nama" },
              { href: "#contactSection", text: "Kontaktirajte nas" },
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => {
                    toggleMenu();
                    setIsDropdownOpen(false);
                  }}
                  className="text-neutral-300 text-xl hover:text-[#da26ff]"
                >
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