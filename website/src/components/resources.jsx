import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Video, FileText, Newspaper, ExternalLink, 
  Search, Filter, Calendar, User, Tag, Download,
  Play, TrendingUp, Award, Lightbulb, ArrowRight,
  Youtube, Clock, Star, BookMarked, Layers, ChevronRight,
  Quote, Bookmark, Share2, Eye, Heart
} from 'lucide-react';
import { useLanguage } from './lunguageContext';

const Resources = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', icon: Layers },
    { id: 'books', name: 'Books & Blogs', icon: BookOpen },
    { id: 'videos', name: 'Video Tutorials', icon: Video },
    { id: 'papers', name: 'Research Papers', icon: FileText },
    { id: 'news', name: 'Industry News', icon: Newspaper },
  ];

  const resources = [
    // Books & Blogs
    {
      id: 1,
      category: 'books',
      type: 'Book',
      title: 'The Retail Design Manual',
      author: 'Martin M. Pegler',
      description: 'Comprehensive guide to retail space design, covering everything from layout planning to visual merchandising and customer flow optimization.',
      excerpt: 'The foundation of successful retail design lies in understanding the customer journey and creating spaces that naturally guide shoppers through your store.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
      date: '2023',
      tags: ['Retail Design', 'Store Planning', 'Visual Merchandising'],
      link: '#',
      featured: true,
      hero: true,
      rating: 4.8,
      reads: '12.5K',
    },
    {
      id: 2,
      category: 'books',
      type: 'Blog',
      title: 'Modern Shopfitting Trends 2024',
      author: 'Design Retail Magazine',
      description: 'Explore the latest trends in shopfitting including sustainable materials, flexible fixtures, and technology integration in retail spaces.',
      excerpt: 'Sustainability is no longer optional - it\'s the future of retail design.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      date: 'February 2024',
      tags: ['Trends', 'Sustainability', 'Technology'],
      link: '#',
      featured: true,
      rating: 4.5,
      reads: '8.3K',
    },
    {
      id: 3,
      category: 'books',
      type: 'eBook',
      title: 'Aluminum in Architecture: A Complete Guide',
      author: 'International Aluminum Institute',
      description: 'Technical guide covering aluminum applications in commercial architecture, including structural systems, facades, and interior fixtures.',
      excerpt: 'Aluminum\'s versatility and sustainability make it the material of choice for modern commercial spaces.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
      date: '2023',
      tags: ['Aluminum', 'Architecture', 'Technical'],
      link: '#',
      featured: true,
      rating: 4.9,
      reads: '15.7K',
    },
    {
      id: 4,
      category: 'books',
      type: 'Blog',
      title: 'Space Planning for Small Retail Stores',
      author: 'RetailSpaces.com',
      description: 'Practical tips and strategies for maximizing space efficiency in small retail environments through smart fixture selection and layout design.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
      date: 'January 2024',
      tags: ['Space Planning', 'Small Retail', 'Layout'],
      link: '#',
      featured: false,
      rating: 4.6,
      reads: '6.2K',
    },

    // Videos
    {
      id: 5,
      category: 'videos',
      type: 'Tutorial',
      title: 'Complete Store Fixture Installation Guide',
      author: 'Shopfitting Academy',
      description: 'Step-by-step video tutorial covering the complete process of installing retail fixtures, from wall standards to shelving systems.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800',
      duration: '45:30',
      date: 'March 2024',
      tags: ['Installation', 'Tutorial', 'Fixtures'],
      link: '#',
      featured: true,
      hero: true,
      views: '125K',
      likes: '8.5K',
    },
    {
      id: 6,
      category: 'videos',
      type: 'Webinar',
      title: 'Sustainable Materials in Retail Design',
      author: 'Green Retail Summit',
      description: 'Expert panel discussion on incorporating sustainable and eco-friendly materials in modern retail environments.',
      image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800',
      duration: '1:15:00',
      date: 'February 2024',
      tags: ['Sustainability', 'Materials', 'Expert Panel'],
      link: '#',
      featured: true,
      views: '89K',
      likes: '5.2K',
    },
    {
      id: 7,
      category: 'videos',
      type: 'Case Study',
      title: 'Modern Supermarket Design Transformation',
      author: 'Retail Design TV',
      description: 'Behind-the-scenes look at a complete supermarket renovation, showcasing modern refrigeration units and contemporary display systems.',
      image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800',
      duration: '28:45',
      date: 'January 2024',
      tags: ['Case Study', 'Supermarket', 'Renovation'],
      link: '#',
      featured: false,
      views: '67K',
      likes: '4.1K',
    },
    {
      id: 8,
      category: 'videos',
      type: 'Tutorial',
      title: 'LED Lighting Design for Retail Spaces',
      author: 'Lighting Design Lab',
      description: 'Comprehensive guide to planning and implementing LED lighting systems in retail environments for optimal product presentation.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      duration: '32:15',
      date: 'March 2024',
      tags: ['Lighting', 'LED', 'Design'],
      link: '#',
      featured: false,
      views: '54K',
      likes: '3.8K',
    },

    // Research Papers
    {
      id: 9,
      category: 'papers',
      type: 'Research',
      title: 'Impact of Store Layout on Consumer Behavior',
      author: 'Journal of Retail Studies',
      description: 'Academic research examining how different store layouts and fixture arrangements influence shopping patterns and purchase decisions.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      date: '2023',
      tags: ['Consumer Behavior', 'Research', 'Store Layout'],
      link: '#',
      featured: true,
      citations: 342,
      pages: 48,
    },
    {
      id: 10,
      category: 'papers',
      type: 'White Paper',
      title: 'Aluminum Alloys in Commercial Fixtures',
      author: 'Materials Engineering Institute',
      description: 'Technical analysis of aluminum alloy properties and their applications in commercial shopfitting and fixture manufacturing.',
      image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800',
      date: '2024',
      tags: ['Materials', 'Aluminum', 'Engineering'],
      link: '#',
      featured: true,
      hero: true,
      citations: 178,
      pages: 62,
    },
    {
      id: 11,
      category: 'papers',
      type: 'Study',
      title: 'Energy Efficiency in Retail Refrigeration',
      author: 'Sustainable Retail Research Group',
      description: 'Comprehensive study on energy-efficient refrigeration systems and their impact on operational costs in retail environments.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      date: '2023',
      tags: ['Energy', 'Refrigeration', 'Sustainability'],
      link: '#',
      featured: false,
      citations: 256,
      pages: 36,
    },
    {
      id: 12,
      category: 'papers',
      type: 'Research',
      title: 'Visual Merchandising Psychology',
      author: 'International Retail Journal',
      description: 'Psychological research on how visual merchandising techniques affect customer perception and buying behavior in retail spaces.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      date: '2024',
      tags: ['Psychology', 'Merchandising', 'Visual'],
      link: '#',
      featured: false,
      citations: 421,
      pages: 54,
    },

    // News & Industry Updates
    {
      id: 13,
      category: 'news',
      type: 'Industry News',
      title: 'Smart Shelving Technology Revolutionizes Retail',
      author: 'Retail Tech Today',
      description: 'Latest developments in IoT-enabled shelving systems that track inventory in real-time and optimize product placement using AI.',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
      date: 'March 15, 2024',
      tags: ['Technology', 'IoT', 'Innovation'],
      link: '#',
      featured: true,
      hero: true,
      trending: true,
      readTime: '5 min',
    },
    {
      id: 14,
      category: 'news',
      type: 'Market Report',
      title: 'Global Shopfitting Market Growth Forecast 2024-2028',
      author: 'Market Research Pro',
      description: 'Comprehensive market analysis showing projected growth in the shopfitting industry with regional insights and emerging opportunities.',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800',
      date: 'March 10, 2024',
      tags: ['Market', 'Forecast', 'Industry'],
      link: '#',
      featured: true,
      trending: false,
      readTime: '8 min',
    },
    {
      id: 15,
      category: 'news',
      type: 'Trend Alert',
      title: 'Minimalist Design Takes Over Luxury Retail',
      author: 'Design Weekly',
      description: 'Analysis of the growing minimalist trend in luxury retail spaces, emphasizing clean lines, neutral colors, and premium materials.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      date: 'March 8, 2024',
      tags: ['Trends', 'Luxury', 'Minimalism'],
      link: '#',
      featured: false,
      trending: true,
      readTime: '6 min',
    },
    {
      id: 16,
      category: 'news',
      type: 'Press Release',
      title: 'New Sustainable Fixture Line Launched',
      author: 'EcoFit Solutions',
      description: 'Announcement of a new line of retail fixtures made from 100% recycled aluminum, setting new standards for sustainable shopfitting.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      date: 'March 5, 2024',
      tags: ['Sustainability', 'Products', 'Innovation'],
      link: '#',
      featured: false,
      trending: false,
      readTime: '4 min',
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const heroResources = filteredResources.filter(r => r.hero);
  const regularResources = filteredResources.filter(r => !r.hero);

  // Newsletter submission handler
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our resources newsletter!');
  };

  return (
    <div className="overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center text-white overflow-hidden px-5 py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600")' }}
        ></div>
        <div 
          className="absolute inset-0 mix-blend-multiply"
          style={{ background: 'linear-gradient(135deg, #E3180Dee 0%, #E35906dd 50%, #F3B900ee 100%)' }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-sm border border-white/30 bg-white/20 backdrop-blur-md"
            >
              <Lightbulb size={18} />
              <span className="text-sm font-semibold tracking-wider">KNOWLEDGE HUB</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Resources & Insights
            </h1>
            
            <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8">
              Curated collection of industry knowledge, research, and inspiration for retail design excellence
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by topic, author, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-sm bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30 py-4 px-5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              const count = resources.filter(r => category.id === 'all' || r.category === category.id).length;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    flex items-center gap-2 px-5 py-2.5 rounded-sm font-semibold whitespace-nowrap
                    transition-all duration-300 transform
                    ${isActive 
                      ? 'bg-gray-900 text-white shadow-lg scale-105' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  <Icon size={16} />
                  <span className="text-sm">{category.name}</span>
                  <span className={`px-2 py-0.5 rounded-sm text-xs font-bold ${isActive ? 'bg-white/20' : 'bg-gray-200'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hero Resources - Large Featured Cards */}
      {heroResources.length > 0 && (
        <section className="py-8 md:py-12 px-5">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {heroResources.map((resource, index) => {
                const CategoryIcon = categories.find(c => c.id === resource.category)?.icon || BookOpen;
                
                return (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`
                      bg-white rounded-sm overflow-hidden shadow-xl hover:shadow-2xl 
                      transition-all duration-300 group cursor-pointer
                      ${index === 0 && heroResources.length === 1 ? 'lg:col-span-2' : ''}
                    `}
                  >
                    {/* Hero Image */}
                    <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${resource.image})` }}
                      ></div>
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                      {/* Badges */}
                      <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                        <div className="px-4 py-2 bg-white/95 backdrop-blur-md rounded-sm flex items-center gap-2">
                          <CategoryIcon size={16} className="text-[#E3180D]" />
                          <span className="text-sm font-bold text-gray-800">{resource.type}</span>
                        </div>
                        
                        <div className="px-4 py-2 bg-[#F3B900] rounded-sm flex items-center gap-1">
                          <Award size={16} className="text-white" />
                          <span className="text-sm font-bold text-white">Featured</span>
                        </div>

                        {resource.trending && (
                          <div className="px-4 py-2 bg-[#E3180D] rounded-sm flex items-center gap-1">
                            <TrendingUp size={16} className="text-white" />
                            <span className="text-sm font-bold text-white">Trending</span>
                          </div>
                        )}
                      </div>

                      {/* Bottom Stats */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex flex-wrap gap-4 text-white/90 text-sm mb-4">
                          <div className="flex items-center gap-2">
                            <User size={16} />
                            <span className="font-semibold">{resource.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{resource.date}</span>
                          </div>
                          {resource.duration && (
                            <div className="flex items-center gap-2">
                              <Clock size={16} />
                              <span>{resource.duration}</span>
                            </div>
                          )}
                          {resource.readTime && (
                            <div className="flex items-center gap-2">
                              <Clock size={16} />
                              <span>{resource.readTime} read</span>
                            </div>
                          )}
                        </div>

                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
                          {resource.title}
                        </h3>

                        {resource.excerpt && (
                          <p className="text-white/90 text-base md:text-lg leading-relaxed line-clamp-2">
                            {resource.excerpt}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 rounded-sm text-xs font-semibold text-gray-700"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          {resource.views && (
                            <div className="flex items-center gap-1">
                              <Eye size={16} />
                              <span className="font-semibold">{resource.views}</span>
                            </div>
                          )}
                          {resource.likes && (
                            <div className="flex items-center gap-1">
                              <Heart size={16} />
                              <span className="font-semibold">{resource.likes}</span>
                            </div>
                          )}
                          {resource.reads && (
                            <div className="flex items-center gap-1">
                              <BookOpen size={16} />
                              <span className="font-semibold">{resource.reads} reads</span>
                            </div>
                          )}
                          {resource.citations && (
                            <div className="flex items-center gap-1">
                              <Quote size={16} />
                              <span className="font-semibold">{resource.citations} citations</span>
                            </div>
                          )}
                        </div>

                        <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-sm font-semibold hover:bg-gray-800 transition-all group/btn">
                          <span>View</span>
                          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Regular Resources - Masonry Grid */}
      {regularResources.length > 0 && (
        <section className="py-8 md:py-12 px-5">
          <div className="container mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
                {activeCategory === 'all' ? 'More Resources' : `All ${categories.find(c => c.id === activeCategory)?.name}`}
              </h2>
              
              <div className="flex items-center gap-2 text-gray-600">
                <Filter size={18} />
                <span className="font-semibold text-sm">{regularResources.length} Resources</span>
              </div>
            </div>

            {/* Asymmetric Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {regularResources.map((resource, index) => {
                const CategoryIcon = categories.find(c => c.id === resource.category)?.icon || BookOpen;
                
                // Create variable card heights for visual interest
                const isLarge = index % 7 === 0; // Every 7th card is larger
                const isMedium = index % 5 === 0 && !isLarge; // Every 5th card is medium
                
                return (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % 6) * 0.05, duration: 0.6 }}
                    className={`
                      bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl 
                      transition-all duration-300 group cursor-pointer
                      ${isLarge ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''}
                      ${isMedium ? 'md:row-span-2' : ''}
                    `}
                  >
                    {/* Image Section */}
                    <div className={`relative overflow-hidden ${isLarge ? 'h-80' : isMedium ? 'h-64' : 'h-48'}`}>
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${resource.image})` }}
                      ></div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <div className="px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-sm flex items-center gap-2">
                          <CategoryIcon size={14} className="text-[#E3180D]" />
                          <span className="text-xs font-bold text-gray-800">{resource.type}</span>
                        </div>

                        {resource.trending && (
                          <div className="px-3 py-1.5 bg-[#E3180D] rounded-sm">
                            <TrendingUp size={14} className="text-white" />
                          </div>
                        )}
                      </div>

                      {/* Bottom Overlay Info */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-3 text-white text-sm">
                          {resource.duration && (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-sm">
                              <Play size={14} />
                              <span className="font-semibold">{resource.duration}</span>
                            </div>
                          )}
                          {resource.views && (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-sm">
                              <Eye size={14} />
                              <span className="font-semibold">{resource.views}</span>
                            </div>
                          )}
                          {resource.pages && (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-sm">
                              <FileText size={14} />
                              <span className="font-semibold">{resource.pages} pages</span>
                            </div>
                          )}
                          {resource.readTime && (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-sm">
                              <Clock size={14} />
                              <span className="font-semibold">{resource.readTime}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`p-5 ${isLarge ? 'lg:p-6' : ''}`}>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <User size={14} />
                        <span className="font-semibold line-clamp-1">{resource.author}</span>
                        <span className="text-gray-400">•</span>
                        <Calendar size={14} />
                        <span>{resource.date}</span>
                      </div>

                      <h3 className={`font-extrabold text-gray-800 mb-2 leading-tight group-hover:text-[#E3180D] transition-colors ${isLarge ? 'text-xl md:text-2xl line-clamp-3' : 'text-base md:text-lg line-clamp-2'}`}>
                        {resource.title}
                      </h3>
                      
                      <p className={`text-gray-600 mb-4 text-sm leading-relaxed ${isLarge ? 'line-clamp-4' : 'line-clamp-2'}`}>
                        {resource.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.slice(0, isLarge ? 4 : 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 rounded-sm text-xs font-semibold text-gray-700 flex items-center gap-1"
                          >
                            <Tag size={10} />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Stats and Action */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3 text-xs text-gray-600">
                          {resource.rating && (
                            <div className="flex items-center gap-1">
                              <Star size={14} className="text-[#F3B900] fill-[#F3B900]" />
                              <span className="font-semibold">{resource.rating}</span>
                            </div>
                          )}
                          {resource.citations && (
                            <div className="flex items-center gap-1">
                              <Quote size={14} />
                              <span className="font-semibold">{resource.citations}</span>
                            </div>
                          )}
                          {resource.reads && (
                            <div className="flex items-center gap-1">
                              <BookOpen size={14} />
                              <span className="font-semibold">{resource.reads}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-sm transition-colors">
                            <Bookmark size={16} className="text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-sm transition-colors">
                            <Share2 size={16} className="text-gray-600" />
                          </button>
                          <button className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-sm text-sm font-semibold transition-all flex items-center gap-1">
                            <span>View</span>
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* No Results */}
            {regularResources.length === 0 && heroResources.length === 0 && (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-sm bg-gray-200 mb-6">
                  <Search size={40} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">No Resources Found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="px-6 py-3 bg-gray-900 text-white rounded-sm font-semibold hover:bg-gray-800 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Quote Section - Breaking Layout */}
      <section className="py-16 md:py-24 px-5 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-8 -left-4 md:-left-8 text-[#E3180D] opacity-20">
              <Quote size={120} />
            </div>
            
            <div className="relative z-10 text-center px-8 md:px-16">
              <p className="text-2xl md:text-4xl font-bold text-gray-800 leading-relaxed mb-8">
                "Great design is not just what looks good. It's what works well, serves its purpose, and creates memorable experiences."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-[#E3180D] to-[#F3B900]"></div>
                <div className="text-left">
                  <div className="font-bold text-gray-800">Martin M. Pegler</div>
                  <div className="text-sm text-gray-600">Retail Design Expert</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section - Full Width */}
      <section className="py-16 md:py-24 px-5 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 80%, white 0%, transparent 50%)'
        }}></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-sm bg-white/10 backdrop-blur-md mb-6">
              <BookMarked size={40} />
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Never Miss an Update
            </h2>
            
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Get curated industry insights, research papers, and expert knowledge delivered weekly
            </p>

            <form onSubmit={handleNewsletterSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-[#E3180D] to-[#FF2A00] rounded-sm font-bold hover:shadow-xl transition-all transform hover:-translate-y-1 whitespace-nowrap"
                >
                  Subscribe Free
                </button>
              </div>
              <p className="text-sm opacity-70 mt-4">
                Join 10,000+ professionals • Unsubscribe anytime
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-5 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CTA Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-[#E3180D] to-[#FA7301] rounded-sm p-8 md:p-10 text-white overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-sm -translate-y-32 translate-x-32 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <Lightbulb size={48} className="mb-6" />
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Apply what you've learned. Let our experts bring your vision to life.
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#E3180D] rounded-sm font-bold hover:bg-gray-100 transition-all">
                  <span>Start Your Project</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            {/* CTA Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-sm p-8 md:p-10 text-white overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-sm -translate-y-32 translate-x-32 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <BookOpen size={48} className="mb-6" />
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                  Contribute Your Knowledge
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Share your expertise with our community. Submit your research or article.
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-sm font-bold hover:bg-white/20 transition-all">
                  <span>Submit Resource</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Resources;