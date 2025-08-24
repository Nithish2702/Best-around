'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Users, Target, Award, Heart, Star, Globe, Zap, Shield, Lightbulb } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '10,000+', label: 'Local Businesses', icon: <MapPin className="h-6 w-6" /> },
    { number: '50,000+', label: 'Happy Users', icon: <Users className="h-6 w-6" /> },
    { number: '100+', label: 'Cities Covered', icon: <Globe className="h-6 w-6" /> },
    { number: '4.9/5', label: 'User Rating', icon: <Star className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Community First',
      description: 'We believe in supporting local businesses and building stronger communities by connecting people with the best services around them.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Trust & Transparency',
      description: 'Every review is verified, every business is vetted, and every recommendation is based on real user experiences and data.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We continuously improve our platform with cutting-edge technology to make finding the best services faster and more accurate.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Simplicity',
      description: 'Complex problems deserve simple solutions. We make it easy to find exactly what you need without the hassle.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '/api/placeholder/300/300',
      bio: 'Former tech executive with 15+ years of experience in building consumer platforms.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '/api/placeholder/300/300',
      bio: 'Full-stack developer and AI specialist focused on creating intelligent recommendation systems.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Community',
      image: '/api/placeholder/300/300',
      bio: 'Community building expert passionate about connecting businesses with their ideal customers.'
    },
    {
      name: 'David Kim',
      role: 'Head of Product',
      image: '/api/placeholder/300/300',
      bio: 'Product strategist with a background in UX design and data-driven decision making.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-primary-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Target className="h-12 w-12 text-primary-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              About Best Around
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
              We&apos;re on a mission to help you discover the best local businesses and services in your area, 
              making it easier than ever to find exactly what you need, when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Join Our Community
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Best Around was born from a simple frustration: finding reliable local services shouldn&apos;t be so difficult.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 mb-8">
              <p className="text-gray-700 mb-6">
                In 2023, our founders were struggling to find a trustworthy plumber after a weekend emergency. 
                Hours of searching through outdated directories, questionable reviews, and endless phone calls 
                led to the realization that there had to be a better way.
              </p>
              <p className="text-gray-700 mb-6">
                We envisioned a platform that would not only connect people with local businesses but would 
                also ensure quality, reliability, and transparency at every step. A place where business owners 
                could showcase their expertise and customers could make informed decisions with confidence.
              </p>
              <p className="text-gray-700">
                Today, Best Around has grown into a comprehensive platform that serves thousands of users 
                and businesses across the country, but our core mission remains the same: making it simple 
                to find the best services around you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These core principles guide everything we do and every decision we make as we work to build 
              the best platform for connecting communities with local businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-primary-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We&apos;re a passionate team of entrepreneurs, engineers, and community builders working together 
              to revolutionize how people discover local services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-24 w-24 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Award className="h-10 w-10" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed mb-8">
            To empower communities by connecting people with exceptional local businesses, 
            fostering economic growth, and building lasting relationships based on trust and quality service.
          </p>
          <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
            Join Our Mission
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking for services or want to grow your business, 
            Best Around is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Find Services Near You
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              List Your Business
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
