'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FoodSuggestionHero from '@/components/FoodSuggestionHero';
import { Search, MapPin, Star, Users, Clock, Award, ArrowRight, CheckCircle, Utensils, Coffee, Pizza, IceCream, ChevronLeft, ChevronRight, Heart, Shield, Zap, Download, Smartphone, Settings, Compass, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Scroll animation hooks
  const howItWorksRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery, 'in', location);
  };

  // Sample food items for the hero section
  const foodItems = [
    {
      id: 1,
      name: "Truffle Pasta",
      description: "Handmade pasta with fresh truffle shavings and parmesan cheese",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      cookTime: "25 min",
      price: 28
    },
    {
      id: 2,
      name: "Salmon Teriyaki",
      description: "Grilled salmon glazed with homemade teriyaki sauce and sesame seeds",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      cookTime: "20 min",
      price: 32
    },
    {
      id: 3,
      name: "Chocolate Soufflé",
      description: "Rich dark chocolate soufflé served with vanilla ice cream",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      cookTime: "30 min",
      price: 16
    },
    {
      id: 4,
      name: "Mediterranean Bowl",
      description: "Fresh quinoa bowl with grilled vegetables, feta, and tahini dressing",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      cookTime: "15 min",
      price: 18
    },
    {
      id: 5,
      name: "Wagyu Burger",
      description: "Premium wagyu beef burger with caramelized onions and truffle aioli",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      cookTime: "18 min",
      price: 35
    },
    {
      id: 6,
      name: "Thai Green Curry",
      description: "Authentic Thai green curry with coconut milk, basil, and jasmine rice",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      cookTime: "22 min",
      price: 24
    }
  ];

  // Values slideshow data with professional images
  const values = [
    {
      id: 1,
      title: "Quality First",
      description: "We partner only with restaurants that maintain the highest standards of food quality, freshness, and hygiene.",
      icon: <Shield className="h-12 w-12 text-white" />,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      bgGradient: "from-black/70 to-black/50"
    },
    {
      id: 2,
      title: "Community Love",
      description: "Building connections between food lovers and local businesses, creating a thriving community around great food.",
      icon: <Heart className="h-12 w-12 text-white" />,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      bgGradient: "from-black/70 to-black/50"
    },
    {
      id: 3,
      title: "Fast & Fresh",
      description: "Lightning-fast recommendations with real-time updates on menu availability and restaurant hours.",
      icon: <Zap className="h-12 w-12 text-white" />,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      bgGradient: "from-black/70 to-black/50"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % values.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [values.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % values.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + values.length) % values.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-primary-600" />,
      title: "Location-Based Recommendations",
      description: "Discover amazing restaurants and food spots near you with GPS-powered suggestions tailored to your area."
    },
    {
      icon: <Star className="h-8 w-8 text-primary-600" />,
      title: "Food Reviews & Ratings",
      description: "Read authentic reviews from fellow food lovers and see ratings for dishes, service, and ambiance."
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary-600" />,
      title: "Cuisine Matching",
      description: "Get personalized food recommendations based on your taste preferences and dietary requirements."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Real-time Menu & Hours",
      description: "Check live menu availability, current prices, and opening hours before you visit."
    }
  ];

  const categories = [
    { name: "Fine Dining", count: "2,500+", color: "bg-food-red", icon: "🍽️" },
    { name: "Fast Food", count: "3,200+", color: "bg-food-orange", icon: "🍔" },
    { name: "Cafes & Coffee", count: "1,800+", color: "bg-food-brown", icon: "☕" },
    { name: "Pizza & Italian", count: "1,200+", color: "bg-accent-500", icon: "🍕" },
    { name: "Asian Cuisine", count: "2,100+", color: "bg-food-yellow", icon: "🍜" },
    { name: "Desserts & Bakery", count: "950+", color: "bg-pink-500", icon: "🧁" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      photo: "https://i.pravatar.cc/150?img=1",
      location: "Mumbai, India",
      text: "Found the best butter chicken near my office! The gravy is so rich and creamy, just like my mom makes. BestAround really knows what's good!",
      rating: 5
    },
    {
      name: "Rahul Verma",
      photo: "https://i.pravatar.cc/150?img=2",
      location: "Delhi, India", 
      text: "Discovered an amazing chole bhature stall in Chandni Chowk! The bhature were so fluffy and the chole had perfect spice. My friends were impressed!",
      rating: 5
    },
    {
      name: "Anjali Patel",
      photo: "https://i.pravatar.cc/150?img=3",
      location: "Bangalore, India",
      text: "Just moved to Bangalore and BestAround found me the most authentic dosas! The coconut chutney is to die for. No more tourist traps!",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="hero">
        <FoodSuggestionHero foodItems={foodItems} />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="pt-0 pb-12 sm:pt-2 sm:pb-16 lg:pt-1 lg:pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={howItWorksRef.elementRef}
            className={`text-center mb-16 sm:mb-20 scroll-animate ${howItWorksRef.isVisible ? 'animate' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How Best Around Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover amazing dishes in just a few simple steps
            </p>
          </div>

          {/* Video Demo Section */}
          <div className="mb-16 sm:mb-20">
            <div className={`max-w-4xl mx-auto scroll-animate-scale ${howItWorksRef.isVisible ? 'animate' : ''}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                <video 
                  className="w-full h-auto"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/BestAround V2 - Primary Logo.png"
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
              <p className="text-center text-gray-600 mt-4 text-sm">
                Watch how easy it is to find your next favorite dish with Best Around
              </p>
            </div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 scroll-animate-stagger ${howItWorksRef.isVisible ? 'animate' : ''}`}>
            {/* Step 1: Download & Sign Up */}
            <div className="text-center group transform transition-transform duration-500 hover:scale-105">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary-100 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Download & Sign Up</h3>
              <p className="text-gray-600 leading-relaxed">
                Get the free Best Around app from your app store and create your foodie profile in seconds
              </p>
            </div>

            {/* Step 2: Set Your Preferences */}
            <div className="text-center group transform transition-transform duration-500 hover:scale-105">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary-100 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Set Your Preferences</h3>
              <p className="text-gray-600 leading-relaxed">
                Tell us about your taste buds - spicy, sweet, vegetarian, or anything in between
              </p>
            </div>

            {/* Step 3: Discover Dishes */}
            <div className="text-center group transform transition-transform duration-500 hover:scale-105">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary-100 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Discover Dishes</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse dish-level rankings, read authentic reviews, and find hidden gems near you
              </p>
            </div>

            {/* Step 4: Enjoy & Review */}
            <div className="text-center group transform transition-transform duration-500 hover:scale-105">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary-100 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-primary-600">4</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enjoy & Review</h3>
              <p className="text-gray-600 leading-relaxed">
                Visit restaurants, enjoy amazing food, and share your experience with the community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={featuresRef.elementRef}
            className={`text-center mb-8 sm:mb-12 md:mb-16 scroll-animate ${featuresRef.isVisible ? 'animate' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Best Around?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We make it easy to discover and enjoy the best food experiences in your area
            </p>
          </div>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 scroll-animate-stagger ${featuresRef.isVisible ? 'animate' : ''}`}>
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary-50 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 cursor-pointer">
                  <div className="[&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={testimonialsRef.elementRef}
            className={`text-center mb-8 sm:mb-12 md:mb-16 scroll-animate ${testimonialsRef.isVisible ? 'animate' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              What Food Lovers Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Join thousands of satisfied food lovers, who discovered their new dishes everytime
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 scroll-animate-stagger ${testimonialsRef.isVisible ? 'animate' : ''}`}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer">
                <div className="flex mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current group-hover:animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {testimonial.text}
                </p>
                
                {/* Customer Info */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-primary-100 group-hover:border-primary-300 transition-colors duration-300 overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img 
                        src={testimonial.photo} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xs font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm group-hover:text-primary-600 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <div className="text-gray-600 text-xs group-hover:text-primary-500 transition-colors duration-300 flex items-center">
                        <MapPin className="h-3 w-3 mr-1 opacity-60" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-50 rounded-xl transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-200 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
