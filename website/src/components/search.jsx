import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText, Phone, Wrench, Package, Building2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);

  // Color palette from Global Shopfitters
  const colors = {
    chiliRed: '#E3180D',
    scarlet: '#FF2A00',
    safetyOrange: '#FA7301',
    amber: '#F3B900',
    mustard: '#FCD92A',
    darkGray: '#2D2D2D',
    mediumGray: '#666666',
    white: '#FFFFFF',
  };

  // Searchable content for Global Shopfitters
  const searchableContent = [
    {
      title: 'Home',
      path: '/',
      description: 'Global Shopfitters Zimbabwe - Excellence in shopfitting solutions',
      keywords: ['home', 'main', 'landing', 'start', 'global shopfitters'],
      category: 'Page'
    },
    {
      title: 'About Us',
      path: '/about',
      description: 'Learn about our expertise in shopfitting and retail solutions',
      keywords: ['about', 'who we are', 'company', 'team', 'history'],
      category: 'Page'
    },
    {
      title: 'Services',
      path: '/services',
      description: 'Comprehensive shopfitting and retail solution services',
      keywords: ['services', 'solutions', 'offerings', 'what we do'],
      category: 'Page'
    },
    {
      title: 'Products',
      path: '/products',
      description: 'Quality shopfitting products and retail fixtures',
      keywords: ['products', 'fixtures', 'equipment', 'retail', 'shop'],
      category: 'Page'
    },
    {
      title: 'Projects',
      path: '/projects',
      description: 'Our completed shopfitting projects and portfolio',
      keywords: ['projects', 'portfolio', 'work', 'completed', 'showcase'],
      category: 'Page'
    },
    {
      title: 'Gallery',
      path: '/gallery',
      description: 'View our shopfitting project gallery',
      keywords: ['gallery', 'photos', 'images', 'portfolio', 'showcase'],
      category: 'Page'
    },
    {
      title: 'Testimonials',
      path: '/testimonials',
      description: 'What our clients say about our services',
      keywords: ['testimonials', 'reviews', 'feedback', 'clients', 'customers'],
      category: 'Page'
    },
    {
      title: 'FAQ',
      path: '/faq',
      description: 'Frequently asked questions about shopfitting',
      keywords: ['faq', 'questions', 'answers', 'help', 'support'],
      category: 'Page'
    },
    {
      title: 'Contact',
      path: '/contact',
      description: 'Get in touch with Global Shopfitters',
      keywords: ['contact', 'reach', 'location', 'address', 'get in touch'],
      category: 'Page'
    },
    // Services
    {
      title: 'Shop Design & Planning',
      path: '/services',
      description: 'Professional retail space design and planning services',
      keywords: ['design', 'planning', 'layout', 'space', 'retail design'],
      category: 'Service'
    },
    {
      title: 'Custom Fixtures',
      path: '/products',
      description: 'Bespoke shopfitting fixtures and displays',
      keywords: ['fixtures', 'custom', 'bespoke', 'displays', 'shelving'],
      category: 'Product'
    },
    {
      title: 'Retail Shelving',
      path: '/products',
      description: 'Quality retail shelving systems and solutions',
      keywords: ['shelving', 'shelves', 'storage', 'display', 'retail'],
      category: 'Product'
    },
    {
      title: 'Shop Installation',
      path: '/services',
      description: 'Professional shopfitting installation services',
      keywords: ['installation', 'fitting', 'setup', 'mounting', 'assembly'],
      category: 'Service'
    },
    {
      title: 'Refurbishment',
      path: '/services',
      description: 'Shop refurbishment and renovation services',
      keywords: ['refurbishment', 'renovation', 'upgrade', 'remodel', 'refresh'],
      category: 'Service'
    },
    {
      title: 'Display Solutions',
      path: '/products',
      description: 'Eye-catching retail display solutions',
      keywords: ['display', 'showcase', 'presentation', 'merchandising'],
      category: 'Product'
    },
    // Contact Information
    {
      title: 'Email: info@globalshopfitters.co.zw',
      path: 'mailto:info@globalshopfitters.co.zw',
      description: 'Send us an email for inquiries',
      keywords: ['email', 'mail', 'contact', 'reach', 'info'],
      category: 'Contact',
      isExternal: true
    },
    {
      title: 'Phone: +263 123 456 789',
      path: 'tel:+263123456789',
      description: 'Call us for inquiries and quotes',
      keywords: ['phone', 'call', 'telephone', 'contact', 'number'],
      category: 'Contact',
      isExternal: true
    },
    {
      title: 'Location: Harare, Zimbabwe',
      path: '/contact',
      description: 'Visit our office in Harare',
      keywords: ['location', 'address', 'harare', 'zimbabwe', 'office'],
      category: 'Location'
    }
  ];

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = searchableContent.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const descriptionMatch = item.description.toLowerCase().includes(query);
        const keywordsMatch = item.keywords.some(keyword => 
          keyword.toLowerCase().includes(query)
        );
        return titleMatch || descriptionMatch || keywordsMatch;
      });
      setSearchResults(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleClose = () => {
    setSearchQuery('');
    setSearchResults([]);
    onClose();
  };

  const handleResultClick = () => {
    handleClose();
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Service':
        return <Wrench className="w-4 h-4" />;
      case 'Product':
        return <Package className="w-4 h-4" />;
      case 'Contact':
        return <Phone className="w-4 h-4" />;
      case 'Location':
        return <Building2 className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Service':
        return 'bg-red-50 text-red-700 group-hover:bg-red-100';
      case 'Product':
        return 'bg-orange-50 text-orange-700 group-hover:bg-orange-100';
      case 'Contact':
        return 'bg-yellow-50 text-yellow-700 group-hover:bg-yellow-100';
      case 'Location':
        return 'bg-amber-50 text-amber-700 group-hover:bg-amber-100';
      default:
        return 'bg-gray-50 text-gray-700 group-hover:bg-gray-100';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4 pt-20"
          >
            <div 
              className="bg-white rounded-lg shadow-2xl overflow-hidden"
              style={{ border: `2px solid ${colors.chiliRed}` }}
            >
              {/* Search Input */}
              <div 
                className="flex items-center gap-3 p-4 border-b-2"
                style={{
                  background: `linear-gradient(to right, ${colors.chiliRed}15, ${colors.amber}15)`,
                  borderColor: colors.safetyOrange + '30',
                }}
              >
                <Search className="w-5 h-5 flex-shrink-0" style={{ color: colors.chiliRed }} />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, products, or information..."
                  className="flex-1 outline-none text-gray-900 placeholder-gray-500 text-lg bg-transparent"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 hover:bg-red-100 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                )}
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" style={{ color: colors.chiliRed }} />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {searchQuery.trim() === '' ? (
                  <div className="p-8 text-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${colors.chiliRed}20, ${colors.amber}20)`,
                      }}
                    >
                      <Wrench className="w-8 h-8" style={{ color: colors.chiliRed }} />
                    </div>
                    <p className="text-gray-700 font-semibold mb-2">
                      Start searching...
                    </p>
                    <p className="text-gray-500 text-sm">
                      Try "shopfitting", "fixtures", "design", or "services"
                    </p>
                  </div>
                ) : isSearching ? (
                  <div className="p-8 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      {[0, 0.2, 0.4].map((delay, index) => (
                        <motion.div
                          key={index}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.3, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: delay,
                            ease: "easeInOut",
                          }}
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: `linear-gradient(to right, ${colors.chiliRed}, ${colors.amber})`,
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mt-3">Searching...</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="py-2">
                    {searchResults.map((result, index) => (
                      result.isExternal ? (
                        <a
                          key={index}
                          href={result.path}
                          onClick={handleResultClick}
                          className="flex items-center gap-4 p-4 transition-colors duration-200 group border-b border-gray-100 last:border-0"
                          style={{
                            background: 'white',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `linear-gradient(to right, ${colors.chiliRed}10, ${colors.amber}10)`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'white';
                          }}
                        >
                          <div className={`p-2.5 rounded-lg transition-colors ${getCategoryColor(result.category)}`}>
                            {getCategoryIcon(result.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 
                                className="text-sm font-bold truncate"
                                style={{ color: colors.chiliRed }}
                              >
                                {result.title}
                              </h3>
                              <span 
                                className="px-2 py-0.5 text-xs font-semibold rounded-full flex-shrink-0"
                                style={{
                                  background: colors.amber + '30',
                                  color: colors.darkGray,
                                }}
                              >
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 line-clamp-1">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 flex-shrink-0 transition-colors" />
                        </a>
                      ) : (
                        <Link
                          key={index}
                          to={result.path}
                          onClick={handleResultClick}
                          className="flex items-center gap-4 p-4 transition-colors duration-200 group border-b border-gray-100 last:border-0"
                          style={{
                            background: 'white',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `linear-gradient(to right, ${colors.chiliRed}10, ${colors.amber}10)`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'white';
                          }}
                        >
                          <div className={`p-2.5 rounded-lg transition-colors ${getCategoryColor(result.category)}`}>
                            {getCategoryIcon(result.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 
                                className="text-sm font-bold truncate"
                                style={{ color: colors.chiliRed }}
                              >
                                {result.title}
                              </h3>
                              <span 
                                className="px-2 py-0.5 text-xs font-semibold rounded-full flex-shrink-0"
                                style={{
                                  background: colors.amber + '30',
                                  color: colors.darkGray,
                                }}
                              >
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 line-clamp-1">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 flex-shrink-0 transition-colors" />
                        </Link>
                      )
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-700 font-semibold mb-1">No results found</p>
                    <p className="text-gray-500 text-sm">
                      Try searching with different keywords
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {searchQuery.trim() === '' && (
                <div 
                  className="border-t-2 px-4 py-3"
                  style={{
                    borderColor: colors.safetyOrange + '30',
                    background: `linear-gradient(to right, ${colors.chiliRed}08, ${colors.amber}08)`,
                  }}
                >
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <kbd 
                          className="px-2 py-1 rounded text-xs font-semibold"
                          style={{
                            background: 'white',
                            border: `2px solid ${colors.chiliRed}`,
                            color: colors.chiliRed,
                          }}
                        >
                          ↵
                        </kbd>
                        to select
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd 
                          className="px-2 py-1 rounded text-xs font-semibold"
                          style={{
                            background: 'white',
                            border: `2px solid ${colors.chiliRed}`,
                            color: colors.chiliRed,
                          }}
                        >
                          ESC
                        </kbd>
                        to close
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;