import React from 'react';
import { motion } from 'framer-motion';
import { Image, Grid3x3 } from 'lucide-react';

const Gallery = () => {
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

  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    category: ['shelving', 'displays', 'refrigeration', 'signage'][i % 4],
    alt: `Project ${i + 1}`,
    gradient: [
      `linear-gradient(135deg, ${colors.peach} 0%, ${colors.sunset} 100%)`,
      `linear-gradient(135deg, ${colors.sunset} 0%, ${colors.amber} 100%)`,
      `linear-gradient(135deg, ${colors.mustardLight} 0%, ${colors.mustard} 100%)`,
      `linear-gradient(135deg, ${colors.brightOrange} 0%, ${colors.safetyOrange} 100%)`,
    ][i % 4],
  }));

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

  const galleryItemStyle = {
    aspectRatio: '1 / 1',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
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
              Gallery
            </h1>
            <p style={heroSubtitleStyle}>
              Explore our portfolio of completed projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
            gap: '16px',
          }}>
            {images.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  ...galleryItemStyle,
                  background: img.gradient,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 30px ${colors.chiliRed}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '100%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                }}>
                  <Image 
                    size={50} 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      transition: 'transform 0.3s ease',
                    }} 
                  />
                  <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 50%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    color: colors.white,
                    fontSize: '14px',
                    fontWeight: '600',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    textTransform: 'capitalize',
                  }}>
                    {img.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;