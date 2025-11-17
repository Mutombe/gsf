import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Mail, Globe, MessageCircle } from 'lucide-react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Color palette
  const colors = {
    chiliRed: '#E3180D',
    scarlet: '#FF2A00',
    flame: '#D92603',
    bloodOrange: '#B50001',
    persimmon: '#E45B11',
    safetyOrange: '#FA7301',
    tangerine: '#FF7805',
    darkOrange: '#E35906',
    brightOrange: '#F99E09',
    amber: '#F3B900',
    mustardYellow: '#FFC60A',
    mustard: '#FCD92A',
    mustardLight: '#FFDC5E',
    sunset: '#F2CC88',
    peach: '#FBCB98',
    darkGray: '#2D2D2D',
    mediumGray: '#666666',
    lightGray: '#F5F5F5',
    white: '#FFFFFF',
  };

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Moyo',
      role: 'Store Manager',
      company: 'SuperMart Harare',
      rating: 5,
      text: 'Global Shopfitters exceeded our expectations! From the initial consultation to the final installation, everything was handled professionally. Our store looks amazing and customers love the new layout.',
      source: 'google',
      date: '2 weeks ago',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      verified: true,
      size: 'large',
    },
    {
      id: 2,
      name: 'John Mutasa',
      role: 'Business Owner',
      company: 'Fashion Boutique',
      rating: 5,
      text: 'Transformed our space completely. The custom fixtures and displays are exactly what we needed. Professional service from start to finish.',
      source: 'website',
      date: '1 month ago',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      verified: true,
      size: 'medium',
    },
    {
      id: 3,
      name: 'Patricia Khumalo',
      role: 'Operations Director',
      company: 'OK Zimbabwe',
      rating: 5,
      text: 'Excellent quality and attention to detail. They completed our project on time and within budget. Highly recommend their services.',
      source: 'facebook',
      date: '3 weeks ago',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      verified: true,
      size: 'medium',
    },
    {
      id: 4,
      name: 'Michael Tembo',
      role: 'Store Manager',
      company: 'TM Supermarkets',
      rating: 5,
      text: 'The refrigeration solutions provided have been outstanding. Energy-efficient and reliable. Great investment for our stores.',
      source: 'google',
      date: '1 week ago',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      verified: true,
      size: 'medium',
    },
    {
      id: 5,
      name: 'Lisa Ncube',
      role: 'Store Owner',
      company: 'Café Boulevard',
      rating: 5,
      text: 'Beautiful custom furniture that perfectly matches our brand aesthetic. The team was creative and professional throughout the project. Couldn\'t be happier with the results!',
      source: 'email',
      date: '2 months ago',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
      verified: true,
      size: 'large',
    },
    {
      id: 6,
      name: 'David Rusike',
      role: 'Facilities Manager',
      company: 'Corporate Plaza',
      rating: 5,
      text: 'Reliable, professional, and high-quality work. They\'ve handled multiple projects for us with excellent results every time.',
      source: 'website',
      date: '3 days ago',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      verified: true,
      size: 'medium',
    },
    {
      id: 7,
      name: 'Grace Mpofu',
      role: 'Marketing Director',
      company: 'Edgars Stores',
      rating: 5,
      text: 'Innovative design solutions that really elevated our space. The team listened to our needs and delivered beyond expectations.',
      source: 'facebook',
      date: '1 month ago',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
      verified: true,
      size: 'medium',
    },
    {
      id: 8,
      name: 'Tendai Chikwanha',
      role: 'CEO',
      company: 'Fresh Foods Market',
      rating: 5,
      text: 'Outstanding craftsmanship and attention to every detail. Our customers have noticed the difference immediately.',
      source: 'google',
      date: '5 days ago',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
      verified: true,
      size: 'medium',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Reviews', icon: null },
    { id: 'google', label: 'Google', icon: FaGoogle, color: '#4285F4' },
    { id: 'facebook', label: 'Facebook', icon: FaFacebook, color: '#1877F2' },
    { id: 'website', label: 'Website', icon: Globe, color: colors.chiliRed },
    { id: 'email', label: 'Email', icon: Mail, color: colors.brightOrange },
  ];

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.source === activeFilter);

  const getSourceIcon = (source) => {
    switch(source) {
      case 'google':
        return <FaGoogle size={20} style={{ color: '#4285F4' }} />;
      case 'facebook':
        return <FaFacebook size={20} style={{ color: '#1877F2' }} />;
      case 'website':
        return <Globe size={20} style={{ color: colors.chiliRed }} />;
      case 'email':
        return <Mail size={20} style={{ color: colors.brightOrange }} />;
      default:
        return null;
    }
  };

  const getSourceBadgeColor = (source) => {
    switch(source) {
      case 'google':
        return '#4285F4';
      case 'facebook':
        return '#1877F2';
      case 'website':
        return colors.chiliRed;
      case 'email':
        return colors.brightOrange;
      default:
        return colors.mediumGray;
    }
  };

  return (
    <div style={{ overflow: 'hidden', background: colors.white }}>
      {/* Creative Hero Section */}
      <section style={{ 
        position: 'relative',
        padding: '100px 20px 80px',
        background: `linear-gradient(135deg, ${colors.darkGray} 0%, #1a1a1a 100%)`,
        overflow: 'hidden',
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${colors.chiliRed}20, transparent)`,
          borderRadius: '5px',
          filter: 'blur(60px)',
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, ${colors.amber}20, transparent)`,
          borderRadius: '5px',
          filter: 'blur(80px)',
        }}></div>

        {/* Floating Quote Icons */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0.05, 0.1, 0.05],
              y: [100, -100],
              x: Math.random() * 100 - 50,
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 2,
            }}
            style={{
              position: 'absolute',
              left: `${10 + i * 20}%`,
              top: '50%',
            }}
          >
            <Quote size={40} style={{ color: colors.white }} />
          </motion.div>
        ))}

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '5px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                marginBottom: '24px',
              }}
            >
              <div style={{ display: 'flex', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} style={{ fill: colors.amber, color: colors.amber }} />
                ))}
              </div>
              <span style={{ 
                color: colors.white, 
                fontSize: '14px',
                fontWeight: '600',
              }}>
                4.9/5 from 200+ Reviews
              </span>
            </motion.div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: '900',
              lineHeight: '1.1',
              marginBottom: '24px',
              color: colors.white,
            }}>
              Client{' '}
              <span style={{
                background: `linear-gradient(90deg, ${colors.chiliRed}, ${colors.amber})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Success Stories
              </span>
            </h1>
            
            <p style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto 40px',
            }}>
              See what our clients have to say about their experience working with Global Shopfitters
            </p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '48px',
                flexWrap: 'wrap',
                marginTop: '40px',
              }}
            >
              {[
                { number: '200+', label: 'Happy Clients' },
                { number: '500+', label: 'Projects Completed' },
                { number: '4.9', label: 'Average Rating' },
              ].map((stat, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '900',
                    color: colors.white,
                    marginBottom: '8px',
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{ 
        padding: '40px 20px',
        background: colors.lightGray,
        borderBottom: `1px solid #e5e5e5`,
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '5px',
                  border: activeFilter === filter.id 
                    ? `2px solid ${filter.color || colors.chiliRed}` 
                    : '2px solid transparent',
                  background: activeFilter === filter.id 
                    ? colors.white 
                    : 'transparent',
                  color: activeFilter === filter.id ? colors.darkGray : colors.mediumGray,
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease',
                  boxShadow: activeFilter === filter.id 
                    ? `0 4px 20px ${filter.color || colors.chiliRed}20` 
                    : 'none',
                }}
              >
                {filter.icon && (
                  filter.id === 'google' || filter.id === 'facebook' 
                    ? <filter.icon size={16} style={{ color: filter.color }} />
                    : <filter.icon size={16} />
                )}
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid - Bento/Masonry Style */}
      <section style={{ 
        padding: '80px 20px',
        background: colors.white,
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
                gridAutoRows: 'auto',
              }}
            >
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  style={{
                    gridColumn: testimonial.size === 'large' && window.innerWidth > 768 ? 'span 2' : 'span 1',
                    background: colors.white,
                    borderRadius: '5px',
                    padding: '32px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 16px 48px ${getSourceBadgeColor(testimonial.source)}20`;
                    e.currentTarget.style.borderColor = getSourceBadgeColor(testimonial.source);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                  }}
                >
                  {/* Background Quote */}
                  <Quote 
                    size={100} 
                    style={{ 
                      position: 'absolute',
                      top: '-20px',
                      right: '-20px',
                      opacity: 0.03,
                      color: colors.darkGray,
                      transform: 'rotate(180deg)',
                    }} 
                  />

                  {/* Header with Profile Picture */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    gap: '16px',
                    marginBottom: '24px',
                    position: 'relative',
                  }}>
                    {/* Profile Picture */}
                    <div style={{
                      position: 'relative',
                      flexShrink: 0,
                    }}>
                      <div style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '5px',
                        overflow: 'hidden',
                        border: `3px solid ${getSourceBadgeColor(testimonial.source)}`,
                        boxShadow: `0 4px 12px ${getSourceBadgeColor(testimonial.source)}30`,
                      }}>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                      {/* Verified Badge */}
                      {testimonial.verified && (
                        <div style={{
                          position: 'absolute',
                          bottom: '-4px',
                          right: '-4px',
                          width: '24px',
                          height: '24px',
                          background: getSourceBadgeColor(testimonial.source),
                          borderRadius: '5px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: `2px solid ${colors.white}`,
                        }}>
                          {getSourceIcon(testimonial.source)}
                        </div>
                      )}
                    </div>

                    {/* Name and Company */}
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: colors.darkGray,
                        marginBottom: '4px',
                        lineHeight: '1.3',
                      }}>
                        {testimonial.name}
                      </h3>
                      <p style={{
                        fontSize: '0.875rem',
                        color: colors.mediumGray,
                        marginBottom: '2px',
                      }}>
                        {testimonial.role}
                      </p>
                      <p style={{
                        fontSize: '0.875rem',
                        color: getSourceBadgeColor(testimonial.source),
                        fontWeight: '600',
                      }}>
                        {testimonial.company}
                      </p>
                    </div>

                    {/* Source Badge */}
                    <div style={{
                      padding: '8px 12px',
                      background: `${getSourceBadgeColor(testimonial.source)}10`,
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}>
                      {getSourceIcon(testimonial.source)}
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: getSourceBadgeColor(testimonial.source),
                        textTransform: 'capitalize',
                      }}>
                        {testimonial.source}
                      </span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '4px', 
                    marginBottom: '16px' 
                  }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        style={{ 
                          fill: colors.amber,
                          color: colors.amber,
                        }} 
                      />
                    ))}
                    <span style={{
                      marginLeft: '8px',
                      fontSize: '0.875rem',
                      color: colors.mediumGray,
                      fontWeight: '500',
                    }}>
                      {testimonial.date}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p style={{ 
                    color: colors.darkGray,
                    lineHeight: '1.8',
                    fontSize: '1rem',
                    marginBottom: '20px',
                    position: 'relative',
                  }}>
                    "{testimonial.text}"
                  </p>

                  {/* Verified Tag */}
                  {testimonial.verified && (
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 12px',
                      background: `${getSourceBadgeColor(testimonial.source)}08`,
                      borderRadius: '5px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: getSourceBadgeColor(testimonial.source),
                    }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Verified Review
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{
        padding: '80px 20px',
        background: `linear-gradient(135deg, ${colors.chiliRed} 0%, ${colors.darkOrange} 50%, ${colors.amber} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '900',
              color: colors.white,
              marginBottom: '24px',
              lineHeight: '1.2',
            }}>
              Ready to Transform Your Space?
            </h2>
            <p style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '40px',
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto 40px',
            }}>
              Join hundreds of satisfied clients and let us bring your vision to life
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '18px 48px',
                fontSize: '1.125rem',
                fontWeight: '700',
                color: colors.chiliRed,
                background: colors.white,
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
              }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;