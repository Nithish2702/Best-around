'use client';

import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Utensils, Download, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Support", href: "/support" },
    { title: "Contact", href: "/support" },
    { title: "Blog", href: "#blog" },
    { title: "Careers", href: "#careers" }
  ];

  const businessLinks = [
    { title: "For Restaurants", href: "#business" },
    { title: "Partner with Us", href: "#partner" },
    { title: "Business Solutions", href: "#solutions" },
    { title: "Advertise", href: "#advertise" },
    { title: "Analytics", href: "#analytics" },
    { title: "API Access", href: "#api" }
  ];

  const legalLinks = [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms and Conditions", href: "/terms" },
    { title: "Cookie Policy", href: "#cookies" },
    { title: "Data Protection", href: "#data" },
    { title: "Accessibility", href: "#accessibility" }
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        


        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-3 rounded-xl shadow-lg">
                <Utensils className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Best Around
                </h3>
                <p className="text-primary-400 text-sm font-medium">find the best around you</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 text-base leading-relaxed max-w-md">
              Discover exceptional dining experiences in your neighborhood. We connect food lovers with the finest restaurants, 
              cafes, and local eateries through personalized recommendations and authentic reviews.
            </p>

            {/* App Download */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white mb-3">Get the App</h4>
              <a 
                href="https://play.google.com/apps/internaltest/4700844382073723217"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="h-4 w-4" />
                <span className="text-sm font-medium">Download Now</span>
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-gray-800/50 hover:bg-primary-600 text-gray-400 hover:text-white p-2.5 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700/50 hover:border-primary-500"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              For Business
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700"></div>
            </h4>
            <ul className="space-y-3">
              {businessLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary-600/20 p-2 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                  <Phone className="h-4 w-4 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Phone</div>
                  <a href="tel:+15551234567" className="text-white hover:text-primary-400 transition-colors text-sm font-medium">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary-600/20 p-2 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                  <Mail className="h-4 w-4 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Email</div>
                  <a href="mailto:hello@bestaround.com" className="text-white hover:text-primary-400 transition-colors text-sm font-medium break-all">
                    hello@bestaround.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary-600/20 p-2 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                  <MapPin className="h-4 w-4 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Address</div>
                  <div className="text-white text-sm leading-relaxed">
                    123 Main Street<br />
                    Suite 100<br />
                    New York, NY 10001
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Best Around. All rights reserved.
              </p>
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <span>Made with</span>
                <span className="text-red-500 animate-pulse">♥</span>
                <span>for food lovers</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-xs transition-colors hover:underline"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
