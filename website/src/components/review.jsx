import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
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
      name: 'Sarah L.',
      role: 'Store Manager',
      company: 'SuperMart Harare',
      rating: 5,
      text: 'Global Shopfitters exceeded our expectations! From the initial consultation to the final installation, everything was handled professionally. Our store looks amazing and customers love the new layout.',
      colorFrom: colors.chiliRed,
      colorTo: colors.brightOrange,
    },
    {
      name: 'John M.',
      role: 'Business Owner',
      company: 'Fashion Boutique',
      rating: 5,
      text: 'Global Shopfitters transformed our retail space completely. The custom fixtures and displays are exactly what we needed. Professional service from start to finish.',
      colorFrom: colors.brightOrange,
      colorTo: colors.amber,
    },
    {
      name: 'Patricia K.',
      role: 'Operations Director',
      company: 'OK Zimbabwe',
      rating: 5,
      text: 'Excellent quality and attention to detail. They completed our project on time and within budget. Highly recommend their services.',
      colorFrom: colors.scarlet,
      colorTo: colors.darkOrange,
    },
    {
      name: 'Michael T.',
      role: 'Retail Manager',
      company: 'TM Supermarkets',
      rating: 5,
      text: 'The refrigeration solutions provided have been outstanding. Energy-efficient and reliable. Great investment for our stores.',
      colorFrom: colors.darkOrange,
      colorTo: colors.chiliRed,
    },
    {
      name: 'Lisa N.',
      role: 'Store Owner',
      company: 'Café Boulevard',
      rating: 5,
      text: 'Beautiful custom furniture that perfectly matches our brand aesthetic. The team was creative and professional throughout the project.',
      colorFrom: colors.flame,
      colorTo: colors.safetyOrange,
    },
    {
      name: 'David R.',
      role: 'Facilities Manager',
      company: 'Corporate Plaza',
      rating: 5,
      text: 'Reliable, professional, and high-quality work. They\'ve handled multiple projects for us with excellent results every time.',
      colorFrom: colors.safetyOrange,
      colorTo: colors.amber,
    },
  ];

  // Styles
  const heroSectionStyle = {
    position: 'relative',
    padding: '80px 20px',
    background: `linear-gradient(135deg, #1a1a1a 0%, ${colors.darkGray} 50%, #2a2a2a 100%)`,
    color: colors.white,
  };

  const heroTitleStyle = {
    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
    fontWeight: '800',
    lineHeight: '1.1',
    marginBottom: '24px',
  };

  const heroSubtitleStyle = {
    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: '1.6',
  };

  const sectionStyle = {
    padding: '80px 20px',
    background: colors.lightGray,
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
  };

  const cardStyle = {
    background: colors.white,
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    position: 'relative',
    transition: 'all 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={{ ...containerStyle, position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', maxWidth: '896px', margin: '0 auto' }}
          >
            <h1 style={heroTitleStyle}>
              Testimonials
            </h1>
            <p style={heroSubtitleStyle}>
              What our clients say about us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 40px ${testimonial.colorFrom}20`;
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Quote 
                  size={40} 
                  style={{ 
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    opacity: 0.1,
                    color: testimonial.colorFrom,
                  }} 
                />
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '16px' }}>
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
                </div>

                <p style={{ 
                  color: colors.darkGray,
                  marginBottom: '24px',
                  fontStyle: 'italic',
                  lineHeight: '1.8',
                  flex: 1,
                }}>
                  "{testimonial.text}"
                </p>

                <div style={{ borderTop: `2px solid ${colors.lightGray}`, paddingTop: '16px' }}>
                  <p style={{ fontWeight: '700', color: colors.darkGray, fontSize: '1.125rem' }}>
                    {testimonial.name}
                  </p>
                  <p style={{ fontSize: '14px', color: colors.mediumGray, marginTop: '4px' }}>
                    {testimonial.role}
                  </p>
                  <p style={{ 
                    fontSize: '14px', 
                    color: testimonial.colorFrom,
                    fontWeight: '600',
                    marginTop: '4px',
                  }}>
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;