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
  const handleDownloadApp = () => {
    // Open Google Play Store in new tab
    window.open('https://play.google.com/apps/internaltest/4700844382073723217', '_blank');
  };

  const handleHowItWorks = () => {
    // Scroll to the How It Works section
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-pink-200 to-orange-200 rounded-full blur-3xl opacity-20"></div>
      
      <motion.div
        className="container mx-auto px-6 pt-32 relative z-10"
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
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Download Free App Button */}
            <motion.button
              onClick={handleDownloadApp}
              className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download BestAround mobile app"
            >
              <div className="w-5 h-5 bg-white rounded-sm"></div>
              <span>Download Free App</span>
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

        {/* Live Cities Badge */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600">
            {/* <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> */}
            {/* Now live in 15 cities across India */}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FoodSuggestionHero;
