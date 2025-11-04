import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, Building2, ShoppingBag, Coffee, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
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

  const filters = ['all', 'retail', 'hospitality', 'commercial'];

  const projects = [
    {
      title: 'SuperMart Expansion',
      category: 'retail',
      location: 'Harare CBD',
      date: '2024',
      description: 'Complete store redesign with modern shelving and refrigeration systems',
      icon: ShoppingBag,
      stats: { area: '2000m²', duration: '3 months', fixtures: '150+' },
    },
    {
      title: 'OK Zimbabwe Outlet',
      category: 'retail',
      location: 'Bulawayo',
      date: '2024',
      description: 'Full shopfitting including custom checkout counters and display units',
      icon: Store,
      stats: { area: '1500m²', duration: '2 months', fixtures: '120+' },
    },
    {
      title: 'Café Boulevard',
      category: 'hospitality',
      location: 'Avondale',
      date: '2023',
      description: 'Custom furniture and fixtures for upscale café',
      icon: Coffee,
      stats: { area: '300m²', duration: '1 month', fixtures: '50+' },
    },
    {
      title: 'Corporate Office',
      category: 'commercial',
      location: 'Borrowdale',
      date: '2023',
      description: 'Office furniture and storage solutions',
      icon: Building2,
      stats: { area: '800m²', duration: '6 weeks', fixtures: '80+' },
    },
    {
      title: 'TM Pick n Pay',
      category: 'retail',
      location: 'Mutare',
      date: '2023',
      description: 'Comprehensive store fitout with refrigeration',
      icon: ShoppingBag,
      stats: { area: '1800m²', duration: '10 weeks', fixtures: '140+' },
    },
    {
      title: 'Fashion Boutique',
      category: 'retail',
      location: 'Sam Levy\'s Village',
      date: '2023',
      description: 'High-end display fixtures and lighting',
      icon: Store,
      stats: { area: '200m²', duration: '3 weeks', fixtures: '40+' },
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Styles
  const heroSectionStyle = {
    position: 'relative',
    padding: '80px 20px',
    background: `linear-gradient(135deg, #1a1a1a 0%, ${colors.darkGray} 50%, #2a2a2a 100%)`,
    color: colors.white,
    overflow: 'hidden',
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

  const filterSectionStyle = {
    padding: '32px 20px',
    background: colors.white,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: '72px',
    zIndex: 30,
  };

  const filterButtonStyle = (isActive) => ({
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    textTransform: 'capitalize',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    background: isActive 
      ? `linear-gradient(90deg, ${colors.chiliRed}, ${colors.scarlet})`
      : colors.lightGray,
    color: isActive ? colors.white : colors.darkGray,
    boxShadow: isActive ? `0 4px 15px ${colors.chiliRed}40` : 'none',
    transform: isActive ? 'scale(1.05)' : 'scale(1)',
  });

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
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const ctaSectionStyle = {
    padding: '80px 20px',
    background: `linear-gradient(135deg, ${colors.chiliRed} 0%, ${colors.safetyOrange} 50%, ${colors.amber} 100%)`,
    position: 'relative',
  };

  const ctaButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 32px',
    background: colors.white,
    color: colors.darkGray,
    borderRadius: '8px',
    fontWeight: '600',
    textDecoration: 'none',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={{ ...containerStyle, position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '896px', margin: '0 auto' }}
          >
            <h1 style={heroTitleStyle}>
              Our Projects
            </h1>
            <p style={heroSubtitleStyle}>
              Showcasing our commitment to excellence in every project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section style={filterSectionStyle}>
        <div style={containerStyle}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={filterButtonStyle(activeFilter === filter)}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter) {
                    e.currentTarget.style.background = '#E5E7EB';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter) {
                    e.currentTarget.style.background = colors.lightGray;
                  }
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 40px ${colors.chiliRed}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={{ 
                  position: 'relative', 
                  height: '256px', 
                  background: `linear-gradient(135deg, ${colors.peach} 0%, ${colors.sunset} 100%)`,
                  overflow: 'hidden',
                }}>
                  <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                  }}>
                    <project.icon 
                      size={100} 
                      style={{ 
                        color: colors.amber,
                        opacity: 0.6,
                        transition: 'transform 0.3s ease',
                      }} 
                    />
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    padding: '4px 12px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '50px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: colors.darkGray,
                  }}>
                    {project.date}
                  </div>
                  <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}></div>
                </div>
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    fontSize: '14px', 
                    color: colors.mediumGray,
                    marginBottom: '8px',
                  }}>
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: colors.darkGray, marginBottom: '12px' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: colors.mediumGray, marginBottom: '16px', lineHeight: '1.6', flex: 1 }}>
                    {project.description}
                  </p>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(3, 1fr)', 
                    gap: '12px',
                    marginBottom: '16px',
                    paddingTop: '16px',
                    borderTop: `1px solid #E5E7EB`,
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: '12px', color: colors.mediumGray, marginBottom: '4px' }}>Area</p>
                      <p style={{ fontSize: '14px', fontWeight: '700', color: colors.darkGray }}>{project.stats.area}</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: '12px', color: colors.mediumGray, marginBottom: '4px' }}>Duration</p>
                      <p style={{ fontSize: '14px', fontWeight: '700', color: colors.darkGray }}>{project.stats.duration}</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: '12px', color: colors.mediumGray, marginBottom: '4px' }}>Fixtures</p>
                      <p style={{ fontSize: '14px', fontWeight: '700', color: colors.darkGray }}>{project.stats.fixtures}</p>
                    </div>
                  </div>

                  <Link 
                    to="/contact" 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: colors.chiliRed,
                      fontWeight: '600',
                      textDecoration: 'none',
                      transition: 'gap 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.gap = '12px';
                      e.currentTarget.style.color = colors.flame;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.gap = '8px';
                      e.currentTarget.style.color = colors.chiliRed;
                    }}
                  >
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={ctaSectionStyle}>
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: `radial-gradient(circle at 20% 50%, ${colors.white} 0%, transparent 50%), radial-gradient(circle at 80% 80%, ${colors.white} 0%, transparent 50%)`,
        }}></div>

        <div style={{ ...containerStyle, position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              textAlign: 'center', 
              color: colors.white,
              maxWidth: '768px',
              margin: '0 auto',
            }}
          >
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              fontWeight: '800',
              marginBottom: '24px',
            }}>
              Ready to Start Your Project?
            </h2>
            <p style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
              marginBottom: '32px',
              opacity: 0.95,
            }}>
              Let's create something amazing together
            </p>
            <Link 
              to="/contact" 
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 30px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.background = colors.lightGray;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.background = colors.white;
              }}
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;