'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll to section when navigating from other pages
  useEffect(() => {
    if (pathname === '/') {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Small delay to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, [pathname]);

  const handleNavigation = (href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith('#')) {
      // If we're already on the home page, just scroll to the section
      if (pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page and then scroll to section
        router.push('/' + href);
      }
    } else {
      // Navigate to different page
      router.push(href);
    }
  };

  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600">
            {/* <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> */}
            {/* Now live in 15 cities across India */}
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="bg-white rounded-full shadow-lg border border-gray-100 px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              {/* Logo Icon */}
              <Link href="/" className="cursor-pointer">
                <Image
                  src="/BestAround V2 - Primary Logo.png"
                  alt="BestAround Logo"
                  width={160}
                  height={60}
                  className="w-32 h-14 object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleNavigation('#hero')}
                className="text-orange-500 font-medium transition-colors hover:text-orange-600 cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('#how-it-works')}
                className="text-gray-700 font-medium transition-colors hover:text-orange-500 cursor-pointer"
              >
                How it Works
              </button>
              <button
                onClick={() => handleNavigation('#services')}
                className="text-gray-700 font-medium transition-colors hover:text-orange-500 cursor-pointer"
              >
                Features
              </button>
              <Link
                href="/support"
                className="text-gray-700 font-medium transition-colors hover:text-orange-500"
              >
                Support
              </Link>
            </nav>

            {/* Get App Button */}
            <div className="hidden md:block">
                 <a href="https://play.google.com/apps/internaltest/4700844382073723217" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 min-w-[120px] text-center">
                   Get App
                 </a>
               </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-orange-500 focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                <button
                  onClick={() => handleNavigation('#hero')}
                  className="text-orange-500 font-medium px-4 py-2 rounded-lg text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavigation('#how-it-works')}
                  className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 text-left"
                >
                  How it Works
                </button>
                <button
                  onClick={() => handleNavigation('#services')}
                  className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 text-left"
                >
                  Features
                </button>
                <Link
                  href="/support"
                  className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Support
                </Link>
                                 <div className="pt-2">
                   <a href="https://play.google.com/apps/internaltest/4700844382073723217" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium text-center">
                     Get App
                   </a>
                 </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
