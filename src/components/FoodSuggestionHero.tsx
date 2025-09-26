'use client';
import { motion } from 'framer-motion';
import { Download, Play, ArrowRight } from 'lucide-react';

const FoodSuggestionHero = ({ foodItems }: { foodItems: any[] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  // Handle button clicks
  const handleDownloadGooglePlay = () => {
    // Open Google Play Store in new tab (placeholder for now)
    window.open('#', '_blank');
  };

  const handleDownloadAppStore = () => {
    // Open App Store in new tab (placeholder for now)
    window.open('#', '_blank');
  };

  const handleHowItWorks = () => {
    // Scroll to the How It Works section
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[75vh] md:min-h-[87vh] bg-white relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-pink-200 to-orange-200 rounded-full blur-3xl opacity-20"></div>
      
      <motion.div
        className="container mx-auto px-6 pt-24 sm:pt-28 relative z-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Content */}
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={itemVariants}
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find the{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              perfect
            </span>{' '}
            dish nearby
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Skip the guesswork. Discover dish-level rankings, authentic reviews, and hidden gems that locals actually love.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Google Play Store Button */}
            <motion.button
              onClick={handleDownloadGooglePlay}
              className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download BestAround from Google Play Store"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <span>Google Play</span>
            </motion.button>

            {/* App Store Button */}
            <motion.button
              onClick={handleDownloadAppStore}
              className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download BestAround from App Store"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
              <span>App Store</span>
            </motion.button>

            {/* See How It Works Button */}
            {/* <motion.button
              onClick={handleHowItWorks}
              className="flex items-center gap-3 bg-white text-gray-800 border-2 border-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Learn how BestAround works"
            >
              <span className="text-orange-500">😊</span>
              <span>See How It Works</span>
            </motion.button> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FoodSuggestionHero;
