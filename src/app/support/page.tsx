'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MessageCircle, Clock, Search, HelpCircle, ChevronDown, ChevronUp, Filter, BookOpen, Users, Settings, CreditCard, MapPin } from 'lucide-react';
import { useState, useMemo } from 'react';

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState('all');

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.message);
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          category: '',
          message: ''
        });
      } else {
        setSubmitMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9 AM - 6 PM EST"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Support",
      description: "Send us a detailed message",
      contact: "support@bestaround.com",
      hours: "Response within 24 hours"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Live Chat",
      description: "Get instant help from our team",
      contact: "Available on website",
      hours: "Mon-Fri: 9 AM - 6 PM EST"
    }
  ];

  const faqCategories = [
    { id: 'all', name: 'All Questions', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'general', name: 'General', icon: <HelpCircle className="h-4 w-4" /> },
    { id: 'app', name: 'App Features', icon: <Users className="h-4 w-4" /> },
    { id: 'reviews', name: 'Reviews & Ratings', icon: <Settings className="h-4 w-4" /> },
    { id: 'technical', name: 'Technical', icon: <MapPin className="h-4 w-4" /> }
  ];

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

  // Filter FAQs based on search query and category
  const filteredFaqs = useMemo(() => {
    let filtered = faqs;
    
    // Filter by category
    if (selectedFaqCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === selectedFaqCategory);
    }
    
    // Filter by search query
    if (faqSearchQuery.trim()) {
      const searchTerm = faqSearchQuery.toLowerCase().trim();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm) ||
        faq.answer.toLowerCase().includes(searchTerm) ||
        faq.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }
    
    return filtered;
  }, [faqSearchQuery, selectedFaqCategory, faqs]);



  return (
    <div className="min-h-screen bg-white">
      <Header />
      


      {/* Contact Methods */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Get in Touch
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Choose the contact method that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-primary-600">
                  <div className="[&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{method.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{method.description}</p>
                <div className="font-semibold text-primary-600 mb-2 text-sm sm:text-base break-all">{method.contact}</div>
                <div className="flex items-center justify-center text-gray-500 text-xs sm:text-sm">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span className="text-center">{method.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we&apos;ll get back to you as soon as possible
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
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
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
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
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <HelpCircle className="h-8 w-8 text-primary-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find comprehensive answers to common questions and get the help you need to make the most of BestAround
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={faqSearchQuery}
                  onChange={(e) => setFaqSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder-gray-500 shadow-sm transition-all duration-200 bg-white/80 backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {faqCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedFaqCategory(category.id)}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedFaqCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-200'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden"
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
                          <div className="flex flex-wrap gap-2 mt-2">
                            {faq.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
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
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn&apos;t find any questions matching your search criteria.
                </p>
                <button
                  onClick={() => {
                    setFaqSearchQuery('');
                    setSelectedFaqCategory('all');
                  }}
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
