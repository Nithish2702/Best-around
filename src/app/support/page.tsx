'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MessageCircle, Clock, HelpCircle, ChevronDown, ChevronUp, Filter, BookOpen, Users, Settings, CreditCard, MapPin } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // For static export, we'll simulate a successful submission
      // In production, you would integrate with a form service like Formspree, Netlify Forms, or similar
      console.log('Contact form submission:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('Your message has been sent successfully! We\'ll get back to you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Support",
      description: "Send us a detailed message and we'll get back to you promptly",
      contact: "support@bestaround.in",
      // hours: "Response within 24 hours"
    }
  ];

  // Removed faqCategories since we're showing all questions without filtering

  const faqs = [
    {
      category: 'general',
      question: "So, what exactly is BestAround?",
      answer: "BestAround is a food discovery app that helps you find the best dishes around you, not just restaurants. Instead of browsing menus, you'll see highly-rated dishes reviewed by real foodies.",
      tags: ['what is', 'food discovery', 'dishes']
    },
    {
      category: 'general',
      question: "Isn't this just like Zomato or Swiggy?",
      answer: "Nope. They'll bring you food. We'll tell you if the food is even worth eating. Discover with us, Delivered by them.",
      tags: ['comparison', 'delivery', 'discovery']
    },
    {
      category: 'app',
      question: "Can I order food here?",
      answer: "Not yet. We're all about taste discovery, not delivery. We help you find the best butter chicken in town you decide whether to dine-in or order it elsewhere.",
      tags: ['ordering', 'delivery', 'dine-in']
    },
    {
      category: 'reviews',
      question: "Are the reviews real?",
      answer: "Yes, 100%! We hate fake reviews as much as you do. That's why users upload bills, photos, and get a 'Verified Foodie' badge.",
      tags: ['reviews', 'authentic', 'verified']
    },
    {
      category: 'app',
      question: "Do we use AI or is this just hype?",
      answer: "Totally real. Our AI learns your taste (spicy, cheesy, vegetarian, etc.) and recommends dishes you'll actually crave.",
      tags: ['AI', 'recommendations', 'personalization']
    },
    {
      category: 'general',
      question: "How much does BestAround cost me?",
      answer: "₹0. Zero. Nada. It's free for foodies forever.",
      tags: ['pricing', 'free', 'cost']
    },
    {
      category: 'general',
      question: "Which cities can I use this in?",
      answer: "We're live in big Indian cities first, and expanding quickly. If we're not in your city yet, hang tight we'll be there soon!",
      tags: ['cities', 'locations', 'expansion']
    },
    {
      category: 'reviews',
      question: "Can I review my food too?",
      answer: "Of course! Snap a pic, add your taste tags, and flex your foodie skills. Your review might help someone else avoid a bad meal.",
      tags: ['reviews', 'photos', 'community']
    }
  ];

  // Show all FAQs without filtering
  const filteredFaqs = faqs;



  return (
    <div className="min-h-screen bg-white">
      <Header />
      


      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <MessageCircle className="h-8 w-8 text-primary-600" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we&apos;ll get back to you as soon as possible
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                  >
                    <option value="">Select a category</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Issue</option>
                    <option value="app">App Feature Request</option>
                    <option value="reviews">Review & Rating Help</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white placeholder-gray-500"
                  placeholder="Please provide as much detail as possible..."
                ></textarea>
              </div>
              
              {/* Submit Message */}
              {submitMessage && (
                <div className={`p-4 rounded-lg text-center ${
                  submitMessage.includes('successfully') 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary text-lg py-4 px-12 ${
                    isSubmitting 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-primary-700'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <HelpCircle className="h-8 w-8 text-primary-600" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find comprehensive answers to common questions and get the help you need to make the most of BestAround
            </p>
          </motion.div>



          {/* FAQ Items */}
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between transition-colors duration-200 group"
                  >
                    <div className="flex items-start flex-1 mr-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors duration-200">
                        <HelpCircle className="h-4 w-4 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg leading-relaxed group-hover:text-primary-700 transition-colors duration-200">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {expandedFaq === index ? (
                        <ChevronUp className="h-6 w-6 text-gray-400 group-hover:text-primary-600 transition-colors duration-200" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-400 group-hover:text-primary-600 transition-colors duration-200" />
                      )}
                    </div>
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="px-6 sm:px-8 pb-6">
                      <div className="pl-12 border-l-4 border-primary-100">
                        <div className="pl-4 text-gray-700 leading-relaxed text-base">
                          {faq.answer}
                        </div>
                        <div className="pl-4 mt-4 pt-4 border-t border-gray-100">
                          <p className="text-sm text-gray-500 italic">
                            Category: <span className="font-medium text-primary-600 capitalize">{faq.category}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Mail className="h-8 w-8 text-primary-600" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Get in Touch
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Reach out to our support team directly via email
            </p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center hover:shadow-2xl transition-shadow max-w-md w-full"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600">
                <Mail className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Support</h3>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">Send us an email and we&apos;ll get back to you promptly</p>
              <div className="font-bold text-primary-600 mb-3 text-lg">{contactMethods[0].contact}</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
