import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Store, Building2, ShoppingBag, Coffee, MapPin, Calendar, ArrowRight,
  X, Download, Share2, Facebook, Twitter, Linkedin, Mail, ExternalLink,
  ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [curtainPosition, setCurtainPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

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
      id: 1,
      title: 'SuperMart Expansion',
      category: 'retail',
      location: 'Harare CBD',
      date: '2024',
      description: 'Complete store redesign with modern shelving and refrigeration systems',
      fullDescription: 'A comprehensive transformation of a 2000m² retail space featuring state-of-the-art shelving systems, commercial refrigeration units, and custom checkout counters. The project included complete electrical and lighting redesign to create an inviting shopping environment.',
      icon: ShoppingBag,
      stats: { area: '2000m²', duration: '3 months', fixtures: '150+', budget: '$250K' },
      beforeImage: '/13.jpg',
      afterImage: '/14.jpg',
      gallery: [
        '/13.jpg',
        '/14.jpg',
        '/15.jpg',
      ],
      features: [
        'Custom refrigeration systems',
        'Modern LED lighting',
        'Energy-efficient solutions',
        'Smart shelving units',
        'Digital signage integration',
      ],
      size: 'large',
    },
    {
      id: 2,
      title: 'OK Zimbabwe Outlet',
      category: 'retail',
      location: 'Bulawayo',
      date: '2024',
      description: 'Full shopfitting including custom checkout counters and display units',
      fullDescription: 'A complete retail fitout project delivering modern shopping experience with custom-built fixtures and contemporary design elements.',
      icon: Store,
      stats: { area: '1500m²', duration: '2 months', fixtures: '120+', budget: '$180K' },
      beforeImage: '/16.jpg',
      afterImage: '/17.jpg',
      gallery: [
        '/16.jpg',
        '/17.jpg',
      ],
      features: [
        'Custom checkout counters',
        'Premium display units',
        'Branded signage',
        'Modern flooring',
      ],
      size: 'medium',
    },
    {
      id: 3,
      title: 'Café Boulevard',
      category: 'hospitality',
      location: 'Avondale',
      date: '2023',
      description: 'Custom furniture and fixtures for upscale café',
      fullDescription: 'An elegant café transformation featuring bespoke furniture, ambient lighting, and premium finishes to create a sophisticated dining atmosphere.',
      icon: Coffee,
      stats: { area: '300m²', duration: '1 month', fixtures: '50+', budget: '$80K' },
      beforeImage: '/18.jpg',
      afterImage: '/19.jpg',
      gallery: [
        '/18.jpg',
        '/19.jpg',
      ],
      features: [
        'Custom furniture design',
        'Ambient lighting',
        'Premium finishes',
        'Outdoor seating area',
      ],
      size: 'small',
    },
    {
      id: 4,
      title: 'Corporate Office',
      category: 'commercial',
      location: 'Borrowdale',
      date: '2023',
      description: 'Office furniture and storage solutions',
      fullDescription: 'Professional office space featuring ergonomic furniture, efficient storage systems, and modern design aesthetic for enhanced productivity.',
      icon: Building2,
      stats: { area: '800m²', duration: '6 weeks', fixtures: '80+', budget: '$120K' },
      beforeImage: '/20.jpg',
      afterImage: '/21.jpg',
      gallery: [
        '/20.jpg',
        '/21.jpg',
      ],
      features: [
        'Ergonomic workstations',
        'Meeting room furniture',
        'Storage solutions',
        'Reception area design',
      ],
      size: 'medium',
    },
    {
      id: 5,
      title: 'TM Pick n Pay',
      category: 'retail',
      location: 'Mutare',
      date: '2023',
      description: 'Comprehensive store fitout with refrigeration',
      fullDescription: 'Large-scale retail project combining advanced refrigeration systems with modern shelving and attractive display solutions.',
      icon: ShoppingBag,
      stats: { area: '1800m²', duration: '10 weeks', fixtures: '140+', budget: '$220K' },
      beforeImage: '/22.jpg',
      afterImage: '/23.jpg',
      gallery: [
        '/22.jpg',
        '/23.jpg',
      ],
      features: [
        'Commercial refrigeration',
        'Wide aisle design',
        'Energy management',
        'Security systems',
      ],
      size: 'large',
    },
    {
      id: 6,
      title: 'Fashion Boutique',
      category: 'retail',
      location: 'Sam Levy\'s Village',
      date: '2023',
      description: 'High-end display fixtures and lighting',
      fullDescription: 'Luxury boutique fitout with premium display systems, sophisticated lighting design, and elegant finishes.',
      icon: Store,
      stats: { area: '200m²', duration: '3 weeks', fixtures: '40+', budget: '$60K' },
      beforeImage: '/24.jpg',
      afterImage: '/25.jpg',
      gallery: [
        '/24.jpg',
        '/25.jpg',
      ],
      features: [
        'Premium display fixtures',
        'Accent lighting',
        'Fitting rooms',
        'Point-of-sale area',
      ],
      size: 'small',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Handle curtain drag
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const modal = e.currentTarget.querySelector('.before-after-container');
    if (!modal) return;
    const rect = modal.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setCurtainPosition(Math.max(0, Math.min(100, percent)));
  };

  // Handle brochure download
  const handleDownloadBrochure = (project) => {
    // In a real app, this would generate/fetch a PDF
    const link = document.createElement('a');
    link.href = '#'; // Would be actual PDF URL
    link.download = `${project.title.replace(/\s+/g, '-')}-Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show notification
    alert(`Downloading brochure for ${project.title}`);
  };

  // Handle share
  const handleShare = (platform, project) => {
    const url = window.location.href;
    const text = `Check out ${project.title} - ${project.description}`;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(project.title)}&body=${encodeURIComponent(text + ' ' + url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
    setShowShareMenu(false);
  };

  // Grid area assignments for masonry layout
  const getGridArea = (size) => {
    switch(size) {
      case 'large':
        return { gridColumn: 'span 2', gridRow: 'span 2' };
      case 'medium':
        return { gridColumn: 'span 1', gridRow: 'span 2' };
      case 'small':
        return { gridColumn: 'span 1', gridRow: 'span 1' };
      default:
        return { gridColumn: 'span 1', gridRow: 'span 1' };
    }
  };

  // Styles
  const heroSectionStyle = {
    position: 'relative',
    padding: '120px 20px',
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
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
    color: 'rgba(255, 255, 255, 0.95)',
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

  const modalOverlayStyle = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(8px)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    overflowY: 'auto',
  };

  const modalContentStyle = {
    background: colors.white,
    borderRadius: '24px',
    maxWidth: '1200px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
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
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Hero Section with Blended Background */}
      <section style={heroSectionStyle}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>

        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${colors.chiliRed}ee 0%, ${colors.darkOrange}dd 50%, ${colors.amber}ee 100%)`,
          mixBlendMode: 'multiply',
        }}></div>

        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.3)',
        }}></div>

        <div style={{ ...containerStyle, position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '896px', margin: '0 auto' }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                display: 'inline-block',
                padding: '8px 20px',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50px',
                marginBottom: '24px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <span style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '1px' }}>
                OUR PORTFOLIO
              </span>
            </motion.div>
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

      {/* Projects Grid - Creative Masonry Layout */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div 
            className="projects-grid"
            style={{ 
              display: 'grid',
              gap: '24px',
            }}
          >
            <style>{`
              .projects-grid {
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                grid-auto-rows: 280px;
              }

              @media (max-width: 768px) {
                .projects-grid {
                  grid-template-columns: 1fr !important;
                  grid-auto-rows: auto !important;
                }
                .projects-grid > * {
                  grid-column: span 1 !important;
                  grid-row: span 1 !important;
                }
              }

              @media (min-width: 769px) and (max-width: 1024px) {
                .projects-grid {
                  grid-template-columns: repeat(2, 1fr) !important;
                  grid-auto-rows: 300px;
                }
              }
            `}</style>

            {filteredProjects.map((project, index) => {
              const gridArea = getGridArea(project.size);
              const cardStyle = {
                gridColumn: gridArea.gridColumn,
                gridRow: gridArea.gridRow,
                background: colors.white,
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
              };

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  style={cardStyle}
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 20px 60px ${colors.chiliRed}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  {/* Image Section */}
                  <div style={{ 
                    position: 'relative', 
                    height: '60%',
                    background: `linear-gradient(135deg, ${colors.peach} 0%, ${colors.sunset} 100%)`,
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${project.afterImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'transform 0.6s ease',
                    }}></div>
                    
                    {/* Overlay on hover */}
                    <div style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: `linear-gradient(to top, ${colors.darkGray}dd 0%, transparent 80%)`,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }} className="hover-overlay"></div>

                    {/* Date Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      padding: '6px 14px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '50px',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: colors.darkGray,
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    }}>
                      {project.date}
                    </div>

                    {/* Category Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      padding: '6px 14px',
                      background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
                      backdropFilter: 'blur(10px)',
                      borderRadius: '50px',
                      fontSize: '11px',
                      fontWeight: '700',
                      color: colors.white,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      {project.category}
                    </div>

                    {/* View Details on Hover */}
                    <div style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      padding: '10px 24px',
                      background: colors.white,
                      color: colors.chiliRed,
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '700',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }} className="view-details-btn">
                      <ZoomIn size={16} />
                      <span>View Details</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div style={{ 
                    padding: project.size === 'large' ? '24px' : '20px',
                    height: '40%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      fontSize: '13px', 
                      color: colors.mediumGray,
                      marginBottom: '8px',
                    }}>
                      <MapPin size={14} style={{ color: colors.chiliRed }} />
                      <span>{project.location}</span>
                    </div>
                    
                    <h3 style={{ 
                      fontSize: project.size === 'large' ? '1.5rem' : '1.25rem',
                      fontWeight: '800', 
                      color: colors.darkGray, 
                      marginBottom: '8px',
                      lineHeight: '1.2',
                    }}>
                      {project.title}
                    </h3>
                    
                    <p style={{ 
                      color: colors.mediumGray, 
                      lineHeight: '1.5',
                      flex: 1,
                      fontSize: '14px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {project.description}
                    </p>

                    {/* Quick Stats */}
                    {project.size === 'large' && (
                      <div style={{
                        display: 'flex',
                        gap: '16px',
                        marginTop: '12px',
                        paddingTop: '12px',
                        borderTop: `1px solid ${colors.lightGray}`,
                      }}>
                        <div>
                          <p style={{ fontSize: '11px', color: colors.mediumGray, marginBottom: '2px' }}>Area</p>
                          <p style={{ fontSize: '13px', fontWeight: '700', color: colors.darkGray }}>{project.stats.area}</p>
                        </div>
                        <div>
                          <p style={{ fontSize: '11px', color: colors.mediumGray, marginBottom: '2px' }}>Duration</p>
                          <p style={{ fontSize: '13px', fontWeight: '700', color: colors.darkGray }}>{project.stats.duration}</p>
                        </div>
                        <div>
                          <p style={{ fontSize: '11px', color: colors.mediumGray, marginBottom: '2px' }}>Fixtures</p>
                          <p style={{ fontSize: '13px', fontWeight: '700', color: colors.darkGray }}>{project.stats.fixtures}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <style>{`
                    .projects-grid > *:hover .hover-overlay {
                      opacity: 1 !important;
                    }
                    .projects-grid > *:hover .view-details-btn {
                      opacity: 1 !important;
                    }
                    .projects-grid > *:hover > div:first-child > div:nth-child(1) {
                      transform: scale(1.1);
                    }
                  `}</style>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={modalOverlayStyle}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              style={modalContentStyle}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'sticky',
                  top: '20px',
                  left: '100%',
                  transform: 'translateX(-40px)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: colors.white,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  zIndex: 10,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.chiliRed;
                  e.currentTarget.querySelector('svg').style.color = colors.white;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.white;
                  e.currentTarget.querySelector('svg').style.color = colors.darkGray;
                }}
              >
                <X size={24} style={{ color: colors.darkGray, transition: 'color 0.3s ease' }} />
              </button>

              {/* Before/After Slider */}
              <div 
                className="before-after-container"
                style={{
                  position: 'relative',
                  height: '500px',
                  overflow: 'hidden',
                  cursor: 'ew-resize',
                  userSelect: 'none',
                }}
                onMouseMove={handleMouseMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
              >
                {/* After Image (Full) */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${selectedProject.afterImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}></div>

                {/* Before Image (Clipped) */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${selectedProject.beforeImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  clipPath: `inset(0 ${100 - curtainPosition}% 0 0)`,
                  transition: isDragging ? 'none' : 'clip-path 0.1s ease',
                }}></div>

                {/* Slider Line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: `${curtainPosition}%`,
                  width: '4px',
                  background: colors.white,
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
                  transform: 'translateX(-50%)',
                  transition: isDragging ? 'none' : 'left 0.1s ease',
                }}>
                  {/* Slider Handle */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: colors.white,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                  }}>
                    <ChevronLeft size={20} style={{ color: colors.chiliRed }} />
                    <ChevronRight size={20} style={{ color: colors.chiliRed }} />
                  </div>
                </div>

                {/* Labels */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  padding: '8px 16px',
                  background: 'rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px',
                  color: colors.white,
                  fontWeight: '700',
                  fontSize: '14px',
                }}>
                  BEFORE
                </div>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  padding: '8px 16px',
                  background: 'rgba(227, 24, 13, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px',
                  color: colors.white,
                  fontWeight: '700',
                  fontSize: '14px',
                }}>
                  AFTER
                </div>
              </div>

              {/* Project Details */}
              <div style={{ padding: '40px' }}>
                {/* Header */}
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.amber})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <selectedProject.icon size={28} style={{ color: colors.white }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h2 style={{ fontSize: '2rem', fontWeight: '800', color: colors.darkGray, marginBottom: '4px' }}>
                        {selectedProject.title}
                      </h2>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: colors.mediumGray }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <MapPin size={16} />
                          <span>{selectedProject.location}</span>
                        </div>
                        <span>•</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Calendar size={16} />
                          <span>{selectedProject.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: '12px' }}>
                      {/* Share Button */}
                      <div style={{ position: 'relative' }}>
                        <button
                          onClick={() => setShowShareMenu(!showShareMenu)}
                          style={{
                            ...ctaButtonStyle,
                            background: colors.lightGray,
                            padding: '12px 20px',
                          }}
                        >
                          <Share2 size={18} />
                          <span>Share</span>
                        </button>

                        {/* Share Menu */}
                        {showShareMenu && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                              position: 'absolute',
                              top: '100%',
                              right: 0,
                              marginTop: '8px',
                              background: colors.white,
                              borderRadius: '12px',
                              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                              padding: '8px',
                              minWidth: '200px',
                              zIndex: 100,
                            }}
                          >
                            {[
                              { icon: Facebook, label: 'Facebook', platform: 'facebook', color: '#1877F2' },
                              { icon: Twitter, label: 'Twitter', platform: 'twitter', color: '#1DA1F2' },
                              { icon: Linkedin, label: 'LinkedIn', platform: 'linkedin', color: '#0A66C2' },
                              { icon: Mail, label: 'Email', platform: 'email', color: colors.mediumGray },
                            ].map((item) => (
                              <button
                                key={item.platform}
                                onClick={() => handleShare(item.platform, selectedProject)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '12px',
                                  width: '100%',
                                  padding: '12px',
                                  background: 'transparent',
                                  border: 'none',
                                  borderRadius: '8px',
                                  cursor: 'pointer',
                                  transition: 'background 0.2s ease',
                                  fontSize: '14px',
                                  fontWeight: '600',
                                  color: colors.darkGray,
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = colors.lightGray;
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = 'transparent';
                                }}
                              >
                                <item.icon size={18} style={{ color: item.color }} />
                                <span>{item.label}</span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </div>

                      {/* Download Brochure Button */}
                      <button
                        onClick={() => handleDownloadBrochure(selectedProject)}
                        style={{
                          ...ctaButtonStyle,
                          background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
                          color: colors.white,
                          padding: '12px 20px',
                        }}
                      >
                        <Download size={18} />
                        <span>Download Brochure</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '20px',
                  marginBottom: '32px',
                  padding: '24px',
                  background: colors.lightGray,
                  borderRadius: '16px',
                }}>
                  {Object.entries(selectedProject.stats).map(([key, value]) => (
                    <div key={key} style={{ textAlign: 'center' }}>
                      <p style={{ 
                        fontSize: '12px', 
                        color: colors.mediumGray, 
                        marginBottom: '4px',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        letterSpacing: '0.5px',
                      }}>
                        {key}
                      </p>
                      <p style={{ 
                        fontSize: '20px', 
                        fontWeight: '800', 
                        color: colors.darkGray,
                      }}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '700', 
                    color: colors.darkGray, 
                    marginBottom: '12px',
                  }}>
                    Project Overview
                  </h3>
                  <p style={{ 
                    color: colors.mediumGray, 
                    lineHeight: '1.8',
                    fontSize: '15px',
                  }}>
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '700', 
                    color: colors.darkGray, 
                    marginBottom: '16px',
                  }}>
                    Key Features
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '12px',
                  }}>
                    {selectedProject.features.map((feature, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '12px 16px',
                          background: colors.white,
                          border: `2px solid ${colors.lightGray}`,
                          borderRadius: '10px',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.amber})`,
                          flexShrink: 0,
                        }}></div>
                        <span style={{ 
                          color: colors.darkGray, 
                          fontWeight: '600',
                          fontSize: '14px',
                        }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: '700', 
                      color: colors.darkGray, 
                      marginBottom: '16px',
                    }}>
                      Project Gallery
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '16px',
                    }}>
                      {selectedProject.gallery.map((image, idx) => (
                        <div
                          key={idx}
                          style={{
                            position: 'relative',
                            height: '200px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        >
                          <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div style={{
                  marginTop: '40px',
                  padding: '32px',
                  background: `linear-gradient(135deg, ${colors.chiliRed}15, ${colors.amber}15)`,
                  borderRadius: '16px',
                  textAlign: 'center',
                }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    color: colors.darkGray, 
                    marginBottom: '12px',
                  }}>
                    Interested in a Similar Project?
                  </h3>
                  <p style={{ color: colors.mediumGray, marginBottom: '24px' }}>
                    Let's discuss how we can bring your vision to life
                  </p>
                  <Link 
                    to="/contact"
                    style={{
                      ...ctaButtonStyle,
                      background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
                      color: colors.white,
                    }}
                  >
                    <span>Contact Us</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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