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

  // Block background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
    <header className="sticky top-0 z-[99999] pt-4 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation Bar */}
        <div className="bg-white rounded-full shadow-lg border border-gray-100 px-6 py-2.5 relative z-50">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center">
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

            {/* Right Side Navigation and App Buttons */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Desktop Navigation Links */}
              <nav className="flex items-center space-x-8">
                <Link
                  href="/about"
                  className="text-gray-700 font-medium transition-colors hover:text-orange-500"
                >
                  About Us
                </Link>
                <Link
                  href="/support"
                  className="text-gray-700 font-medium transition-colors hover:text-orange-500"
                >
                  Support
                </Link>
              </nav>

              {/* Get App Buttons */}
              <div className="flex items-center space-x-3">
                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm text-center">
                  Google Play
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm text-center">
                  App Store
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden relative z-[70]">
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
            <>
              {/* Background overlay */}
              <div className="md:hidden fixed inset-0 bg-white z-50 animate-in fade-in duration-300"></div>
              {/* Mobile menu content */}
              <div className="md:hidden mt-4 pt-4 border-t border-gray-200 relative z-[60] bg-white animate-in slide-in-from-top-4 duration-300">
                <nav className="flex flex-col space-y-3">
                  <Link
                    href="/about"
                    className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 animate-in slide-in-from-left-4 duration-300 delay-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/support"
                    className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 animate-in slide-in-from-left-4 duration-300 delay-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Support
                  </Link>
                  <div className="pt-2 space-y-2">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium text-center animate-in slide-in-from-left-4 duration-300 delay-300">
                      Google Play
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium text-center animate-in slide-in-from-left-4 duration-300 delay-400">
                      App Store
                    </a>
                  </div>
                </nav>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
