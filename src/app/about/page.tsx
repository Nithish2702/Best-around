'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Users, Target, Award, Heart, Star, Globe, Zap, Shield, Lightbulb, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

export default function About() {
  // Scroll animation hooks
  const heroRef = useScrollAnimation();
  const storyRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const promiseRef = useScrollAnimation();

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Taste-First',
      description: 'Every card on BestAround is a dish, not a menu. We celebrate the diversity of flavors and textures that make each plate special.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Authenticity and Trust',
      description: 'Reviews come from real people who verify their experiences with photos and bills. No anonymous ratings, just honest feedback from fellow foodies.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Personalization',
      description: 'Our AI learns what you like and suggests dishes based on your taste profile, dietary needs and mood.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Community',
      description: 'Follow trusted reviewers and chefs, share your own tastes, and help others discover exceptional dining experiences.'
    }
  ];



  return (
    <div className="min-h-screen bg-white">
      <Header />
      
             {/* Hero Section */}
               <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 overflow-hidden">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-5">
           <div className="absolute top-20 left-10 w-32 h-32 bg-primary-400 rounded-full blur-3xl"></div>
           <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-400 rounded-full blur-3xl"></div>
         </div>
         
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <motion.div 
             ref={heroRef.elementRef}
             className={`text-center ${heroRef.isVisible ? 'animate' : ''}`}
             initial={{ opacity: 0, y: 30 }}
             animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8 }}
           >
                           <motion.div 
                className="bg-white w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
                initial={{ scale: 0, rotate: -180 }}
                animate={heroRef.isVisible ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img 
                  src="/BestAround - Primary Icon.png" 
                  alt="BestAround Icon" 
                  className="h-16 w-16 object-contain"
                />
              </motion.div>
             
             <motion.h1 
               className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent"
               initial={{ opacity: 0, y: 30 }}
               animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.4 }}
             >
               About BestAround
             </motion.h1>
             
             <motion.p 
               className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-5xl mx-auto"
               initial={{ opacity: 0, y: 30 }}
               animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.6 }}
             >
               BestAround is a food discovery platform built for people who love great dishes and authentic 
               dining experiences. Founded in 2025, we felt that most review apps simply rate restaurants as a 
               whole and miss what really matters: the dishes themselves and your personal taste. Whether 
               you&apos;re craving a classic butter chicken or looking for a new fusion dish, BestAround helps you 
               discover and enjoy the best dishes nearby.
             </motion.p>
           </motion.div>
         </div>
       </section>



             {/* Our Story Section */}
       <section className="py-24 bg-white">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
             ref={storyRef.elementRef}
                           className={`text-center mb-12 ${storyRef.isVisible ? 'animate' : ''}`}
             initial={{ opacity: 0, y: 30 }}
             animate={storyRef.isVisible ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8 }}
           >
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
               Our Story
             </h2>
           </motion.div>
           
           <motion.div 
             className="prose prose-lg max-w-none"
             initial={{ opacity: 0, y: 50 }}
             animate={storyRef.isVisible ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.3 }}
           >
             <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-primary-50 rounded-3xl p-10 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-500">
               <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                   <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                     The idea for BestAround was born when our founders realized that existing restaurant apps 
                     didn&apos;t answer a simple question: &quot;What&apos;s the best dish to order here for my taste?&quot; After 
                     countless disappointing meals based on generic restaurant ratings, we knew there had to be a 
                     better way.
                   </p>
                   <p className="text-gray-700 text-lg leading-relaxed">
                     We set out to build a platform where dishes are the focus, reviews are verified, and 
                     recommendations are tailored to your unique preferences.
                   </p>
                 </div>
                 <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 text-center">
                   <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                     <Heart className="h-10 w-10 text-primary-600" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">Food First</h3>
                   <p className="text-gray-600">Where every dish tells a story</p>
                 </div>
               </div>
               
               <div className="mt-8 pt-8 border-t border-gray-200">
                 <p className="text-gray-700 text-lg leading-relaxed">
                   Today, BestAround is a growing community of food lovers who share honest reviews, photos, 
                   and receipts of their favorite dishes. We use taste tags and AI matching to understand your 
                   cravings from crispy textures to creamy curries so you can confidently explore new cuisines and 
                   hidden gems.
                 </p>
               </div>
             </div>
           </motion.div>
         </div>
       </section>

             {/* Values Section */}
               <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
             ref={valuesRef.elementRef}
                           className={`text-center mb-12 ${valuesRef.isVisible ? 'animate' : ''}`}
             initial={{ opacity: 0, y: 30 }}
             animate={valuesRef.isVisible ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8 }}
           >
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
               Our Values
             </h2>
             <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
               These core principles guide everything we do and every decision we make as we work to build 
               the best platform for connecting communities with local businesses.
             </p>
           </motion.div>
           
           <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 scroll-animate-stagger ${valuesRef.isVisible ? 'animate' : ''}`}>
             {values.map((value, index) => (
               <motion.div 
                 key={index} 
                 className="bg-white rounded-2xl shadow-lg border border-gray-200 p-10 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
                 initial={{ opacity: 0, y: 50 }}
                 animate={valuesRef.isVisible ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.6, delay: index * 0.1 }}
                 whileHover={{ scale: 1.02 }}
               >
                 <div className="bg-gradient-to-br from-primary-100 to-primary-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 text-primary-600 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                   {value.icon}
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-primary-600 transition-colors duration-300">{value.title}</h3>
                 <p className="text-gray-700 leading-relaxed text-lg">{value.description}</p>
                 
                 {/* Hover effect border */}
                 <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-200 transition-all duration-300 pointer-events-none"></div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

               {/* Our Promise Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              ref={promiseRef.elementRef}
              className={`text-center mb-12 ${promiseRef.isVisible ? 'animate' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={promiseRef.isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                Our Promise
              </h2>
            </motion.div>
            
            <motion.div 
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 50 }}
              animate={promiseRef.isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 rounded-3xl p-12 border border-primary-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="text-center">
                  <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <Star className="h-12 w-12 text-primary-600" />
                  </div>
                  <p className="text-gray-700 text-xl leading-relaxed max-w-4xl mx-auto">
                    BestAround connects you with the finest restaurants, cafés and street-food stalls through verified 
                    reviews and personalized dish recommendations. We make it simple to find food you&apos;ll love 
                    from comfort classics to spicy new thrills one tap away. Join us and discover your next favorite 
                    dish today!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

       <Footer />
    </div>
  );
}
