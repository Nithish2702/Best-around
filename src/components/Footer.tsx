'use client';

import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Utensils, Download, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/share/19dEMV4PWh/?mibextid=wwXIfr", label: "Facebook" },
    { icon: <div className="h-5 w-5 flex items-center justify-center text-gray-400 hover:text-white transition-colors"><span className="text-lg font-bold">𝕏</span></div>, href: "https://x.com/getbestaround", label: "X (Twitter)" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/getbestaround/", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/bestaround/", label: "LinkedIn" }
  ];

  const quickLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Support", href: "/support" }
  ];

  // Removed businessLinks array

  const legalLinks = [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms and Conditions", href: "/terms" },
    { title: "Data Deletion", href: "/legal/data-deletion" }
  ];



  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center -mt-14">
              <img 
                src="/BestAround V2 - Light Logo.png" 
                alt="Best Around Logo" 
                className="h-48 w-48 object-contain"
              />
            </div>
            
            <p className="text-gray-300 mb-4 text-sm leading-relaxed max-w-lg -mt-12">
              Find the best dishes around you, rated by real foodies. Discover, review, and share authentic food experiences with BestAround.
            </p>

            {/* App Download */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white mb-2">Get the App</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-sm font-medium"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span className="text-sm font-semibold">Google Play</span>
                </a>
                <a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-sm font-medium"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                  <span className="text-sm font-semibold">App Store</span>
                </a>
              </div>
            </div>


          </div>

          {/* Quick Links */}
          <div className="pt-4 lg:pt-0">
            <h4 className="text-lg font-bold text-white mb-4 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"></div>
            </h4>
            <ul className="space-y-3 -ml-5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center group font-medium"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="bg-gray-800/50 hover:bg-primary-600 text-gray-400 hover:text-white p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-md border border-gray-700/50 hover:border-primary-500"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="pt-4 lg:pt-0">
            <h4 className="text-lg font-bold text-white mb-4 relative">
              Legal
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"></div>
            </h4>
            <ul className="space-y-3 -ml-5">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center group font-medium"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-6 pt-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-center">
            <p className="text-gray-400 text-xs">
              © {currentYear} BestAround. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">♥</span>
              <span>for food lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
