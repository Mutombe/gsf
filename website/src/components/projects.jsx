import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Store, Building2, ShoppingBag, Coffee, MapPin, Calendar, ArrowRight,
  X, Download, Share2, Facebook, Twitter, Linkedin, Mail, ExternalLink,
  ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon, Menu
} from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [curtainPosition, setCurtainPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      id: 0,
      title: 'CBZ Learning Center',
      category: 'commercial',
      location: 'Harare CBD',
      date: '2024',
      description: 'Complete center redesign with modern shelving and learning spaces',
      fullDescription: 'A comprehensive transformation of a 2000m² commercial space featuring state-of-the-art shelving systems, learning pods, and custom furniture. The project included complete electrical and lighting redesign to create an inviting educational environment. The final result was a vibrant, functional, and visually stunning space that caters to the needs of learners and professionals alike.',
      icon: ShoppingBag,
      stats: { area: '2000m²', duration: '3 months', fixtures: '150+', budget: '$250K' },
      beforeImage: '/placeh.png',
      afterImage: '/b.png',
      gallery: [
        '/c.png',
        '/d.png',
        '/e.png',
      ],
      features: [
        'Custom shelving systems',
        'Modern LED lighting',
        'Energy-efficient solutions',
        'Smart shelving units',
        'Study pods and collaboration areas',
      ],
      size: 'large',
    },
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
      beforeImage: '/placeh.png',
      afterImage: '/placeh.png',
      gallery: [
        '/placeh.png',
        '/placeh.png',
        '/placeh.png',
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
      beforeImage: '/placeh.png',
      afterImage: '/placeh.png',
      gallery: [
        '/placeh.png',
        '/placeh.png',
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
      beforeImage: '/placeh.png',
      afterImage: '/placeh.png',
      gallery: [
        '/placeh.png',
        '/placeh.png',
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
      beforeImage: '/placeh.png',
      afterImage: '/placeh.png',
      gallery: [
        '/placeh.png',
        '/placeh.png',
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
      beforeImage: '/placeh.png',
      afterImage: '/placeh.png',
      gallery: [
        '/placeh.png',
        '/placeh.png',
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
      beforeImage: '/placeh.png',
      afterImage: '/placeh.png',
      gallery: [
        '/placeh.png',
        '/placeh.png',
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

  // Handle curtain drag for desktop
  const handleMouseMove = (e) => {
    if (!isDragging || isMobile) return;
    const modal = e.currentTarget;
    const rect = modal.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setCurtainPosition(Math.max(0, Math.min(100, percent)));
  };

  // Handle touch for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const modal = e.currentTarget;
    const rect = modal.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setCurtainPosition(Math.max(0, Math.min(100, percent)));
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  // Handle brochure download
  const handleDownloadBrochure = (project) => {
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

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: isMobile ? '80px 16px 60px' : '120px 20px',
        minHeight: isMobile ? '50vh' : '70vh',
        display: 'flex',
        alignItems: 'center',
        color: colors.white,
        overflow: 'hidden',
      }}>
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

        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto',
          width: '100%',
          position: 'relative', 
          zIndex: 10,
        }}>
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
                padding: isMobile ? '6px 16px' : '8px 20px',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                borderRadius: '5px',
                marginBottom: isMobile ? '16px' : '24px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
            </motion.div>
            <h1 style={{
              fontSize: isMobile ? '2.5rem' : 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: isMobile ? '16px' : '24px',
            }}>
              Our Projects
            </h1>
            <p style={{
              fontSize: isMobile ? '1.125rem' : 'clamp(1.25rem, 3vw, 1.75rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: '1.6',
              padding: isMobile ? '0 8px' : '0',
            }}>
              Showcasing our commitment to excellence in every project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section style={{
        padding: isMobile ? '20px 16px' : '32px 20px',
        background: colors.white,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: isMobile ? '60px' : '72px',
        zIndex: 30,
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: isMobile ? '8px' : '12px', 
            justifyContent: 'center',
          }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: isMobile ? '10px 18px' : '12px 24px',
                  borderRadius: '5px',
                  fontWeight: '600',
                  textTransform: 'capitalize',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: activeFilter === filter
                    ? `linear-gradient(90deg, ${colors.chiliRed}, ${colors.scarlet})`
                    : colors.lightGray,
                  color: activeFilter === filter ? colors.white : colors.darkGray,
                  boxShadow: activeFilter === filter ? `0 4px 15px ${colors.chiliRed}40` : 'none',
                  transform: activeFilter === filter ? 'scale(1.05)' : 'scale(1)',
                  fontSize: isMobile ? '13px' : '14px',
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{
        padding: isMobile ? '40px 16px' : '80px 20px',
        background: colors.lightGray,
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? '20px' : '24px',
          }}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                style={{
                  background: colors.white,
                  borderRadius: '5px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Section */}
                <div style={{ 
                  position: 'relative', 
                  height: isMobile ? '200px' : '250px',
                  background: `linear-gradient(135deg, ${colors.peach} 0%, ${colors.sunset} 100%)`,
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${project.afterImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}></div>
                  
                  {/* Date Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: isMobile ? '4px 12px' : '6px 14px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '5px',
                    fontSize: isMobile ? '11px' : '12px',
                    fontWeight: '700',
                    color: colors.darkGray,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  }}>
                    {project.date}
                  </div>

                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    padding: isMobile ? '4px 12px' : '6px 14px',
                    background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
                    borderRadius: '5px',
                    fontSize: isMobile ? '10px' : '11px',
                    fontWeight: '700',
                    color: colors.white,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    {project.category}
                  </div>
                </div>

                {/* Content Section */}
                <div style={{ padding: isMobile ? '16px' : '20px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    fontSize: isMobile ? '12px' : '13px',
                    color: colors.mediumGray,
                    marginBottom: '8px',
                  }}>
                    <MapPin size={isMobile ? 12 : 14} style={{ color: colors.chiliRed }} />
                    <span>{project.location}</span>
                  </div>
                  
                  <h3 style={{ 
                    fontSize: isMobile ? '1.125rem' : '1.25rem',
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
                    fontSize: isMobile ? '13px' : '14px',
                  }}>
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(8px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: isMobile ? 'flex-start' : 'center',
              justifyContent: 'center',
              padding: isMobile ? '0' : '20px',
              overflowY: 'auto',
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              style={{
                background: colors.white,
                borderRadius: isMobile ? '0' : '5px',
                maxWidth: '1200px',
                width: '100%',
                maxHeight: isMobile ? '100vh' : '90vh',
                overflowY: 'auto',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'sticky',
                  top: isMobile ? '12px' : '20px',
                  left: '100%',
                  transform: isMobile ? 'translateX(-28px)' : 'translateX(-40px)',
                  width: isMobile ? '40px' : '48px',
                  height: isMobile ? '40px' : '48px',
                  borderRadius: '5px',
                  background: colors.white,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  zIndex: 10,
                }}
              >
                <X size={isMobile ? 20 : 24} style={{ color: colors.darkGray }} />
              </button>

              {/* Before/After Slider */}
              <div 
                style={{
                  position: 'relative',
                  height: isMobile ? '300px' : '500px',
                  overflow: 'hidden',
                  cursor: isMobile ? 'grab' : 'ew-resize',
                  userSelect: 'none',
                  touchAction: 'none',
                }}
                onMouseMove={handleMouseMove}
                onMouseDown={() => !isMobile && setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* After Image */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${selectedProject.afterImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}></div>

                {/* Before Image */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${selectedProject.beforeImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  clipPath: `inset(0 ${100 - curtainPosition}% 0 0)`,
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
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: isMobile ? '40px' : '48px',
                    height: isMobile ? '40px' : '48px',
                    borderRadius: '5px',
                    background: colors.white,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2px',
                  }}>
                    <ChevronLeft size={isMobile ? 16 : 20} style={{ color: colors.chiliRed }} />
                    <ChevronRight size={isMobile ? 16 : 20} style={{ color: colors.chiliRed }} />
                  </div>
                </div>

                {/* Labels */}
                <div style={{
                  position: 'absolute',
                  top: isMobile ? '12px' : '20px',
                  left: isMobile ? '12px' : '20px',
                  padding: isMobile ? '6px 12px' : '8px 16px',
                  background: 'rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '5px',
                  color: colors.white,
                  fontWeight: '700',
                  fontSize: isMobile ? '12px' : '14px',
                }}>
                  BEFORE
                </div>
                <div style={{
                  position: 'absolute',
                  top: isMobile ? '12px' : '20px',
                  right: isMobile ? '12px' : '20px',
                  padding: isMobile ? '6px 12px' : '8px 16px',
                  background: 'rgba(227, 24, 13, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '5px',
                  color: colors.white,
                  fontWeight: '700',
                  fontSize: isMobile ? '12px' : '14px',
                }}>
                  AFTER
                </div>
              </div>

              {/* Project Details */}
              <div style={{ padding: isMobile ? '24px 16px' : '40px' }}>
                {/* Header */}
                <div style={{ marginBottom: isMobile ? '24px' : '32px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    gap: '12px', 
                    marginBottom: '16px',
                    flexWrap: isMobile ? 'wrap' : 'nowrap',
                  }}>
                    <div style={{
                      width: isMobile ? '48px' : '56px',
                      height: isMobile ? '48px' : '56px',
                      borderRadius: '5px',
                      background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.amber})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <selectedProject.icon size={isMobile ? 24 : 28} style={{ color: colors.white }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h2 style={{ 
                        fontSize: isMobile ? '1.5rem' : '2rem',
                        fontWeight: '800', 
                        color: colors.darkGray, 
                        marginBottom: '4px',
                        wordBreak: 'break-word',
                      }}>
                        {selectedProject.title}
                      </h2>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: isMobile ? '8px' : '12px',
                        color: colors.mediumGray,
                        fontSize: isMobile ? '13px' : '14px',
                        flexWrap: 'wrap',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <MapPin size={14} />
                          <span>{selectedProject.location}</span>
                        </div>
                        <span>•</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Calendar size={14} />
                          <span>{selectedProject.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons - Full width on mobile */}
                    <div style={{ 
                      display: 'flex', 
                      gap: '8px',
                      width: isMobile ? '100%' : 'auto',
                      marginTop: isMobile ? '12px' : '0',
                    }}>
                      {/* Share Button */}
                      <div style={{ position: 'relative', flex: isMobile ? 1 : 'initial' }}>
                        <button
                          onClick={() => setShowShareMenu(!showShareMenu)}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            padding: isMobile ? '10px 16px' : '12px 20px',
                            background: colors.lightGray,
                            color: colors.darkGray,
                            borderRadius: '5px',
                            fontWeight: '600',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: isMobile ? '13px' : '14px',
                            width: isMobile ? '100%' : 'auto',
                          }}
                        >
                          <Share2 size={16} />
                          {!isMobile && <span>Share</span>}
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
                              borderRadius: '5px',
                              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                              padding: '8px',
                              minWidth: isMobile ? '180px' : '200px',
                              zIndex: 100,
                            }}
                          >
                            {[
                              { icon: Facebook, label: 'Facebook', platform: 'facebook', color: '#1877F2' },
                              { icon: FaXTwitter, label: 'Twitter', platform: 'twitter', color: '#1DA1F2' },
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
                                  padding: isMobile ? '10px' : '12px',
                                  background: 'transparent',
                                  border: 'none',
                                  borderRadius: '5px',
                                  cursor: 'pointer',
                                  fontSize: isMobile ? '13px' : '14px',
                                  fontWeight: '600',
                                  color: colors.darkGray,
                                }}
                              >
                                <item.icon size={16} style={{ color: item.color }} />
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
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: isMobile ? '10px 16px' : '12px 20px',
                          background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
                          color: colors.white,
                          borderRadius: '5px',
                          fontWeight: '600',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: isMobile ? '13px' : '14px',
                          flex: isMobile ? 1 : 'initial',
                        }}
                      >
                        <Download size={16} />
                        {!isMobile && <span>Brochure</span>}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: isMobile ? '12px' : '20px',
                  marginBottom: isMobile ? '24px' : '32px',
                  padding: isMobile ? '16px' : '24px',
                  background: colors.lightGray,
                  borderRadius: '5px',
                }}>
                  {Object.entries(selectedProject.stats).map(([key, value]) => (
                    <div key={key} style={{ textAlign: 'center' }}>
                      <p style={{ 
                        fontSize: isMobile ? '10px' : '12px',
                        color: colors.mediumGray, 
                        marginBottom: '4px',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        letterSpacing: '0.5px',
                      }}>
                        {key}
                      </p>
                      <p style={{ 
                        fontSize: isMobile ? '16px' : '20px',
                        fontWeight: '800', 
                        color: colors.darkGray,
                      }}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div style={{ marginBottom: isMobile ? '24px' : '32px' }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.125rem' : '1.25rem',
                    fontWeight: '700', 
                    color: colors.darkGray, 
                    marginBottom: '12px',
                  }}>
                    Project Overview
                  </h3>
                  <p style={{ 
                    color: colors.mediumGray, 
                    lineHeight: '1.8',
                    fontSize: isMobile ? '14px' : '15px',
                  }}>
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div style={{ marginBottom: isMobile ? '24px' : '32px' }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.125rem' : '1.25rem',
                    fontWeight: '700', 
                    color: colors.darkGray, 
                    marginBottom: '16px',
                  }}>
                    Key Features
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '12px',
                  }}>
                    {selectedProject.features.map((feature, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: isMobile ? '10px 14px' : '12px 16px',
                          background: colors.white,
                          border: `2px solid ${colors.lightGray}`,
                          borderRadius: '5px',
                        }}
                      >
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '5px',
                          background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.amber})`,
                          flexShrink: 0,
                        }}></div>
                        <span style={{ 
                          color: colors.darkGray, 
                          fontWeight: '600',
                          fontSize: isMobile ? '13px' : '14px',
                        }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div style={{ marginBottom: isMobile ? '24px' : '32px' }}>
                    <h3 style={{ 
                      fontSize: isMobile ? '1.125rem' : '1.25rem',
                      fontWeight: '700', 
                      color: colors.darkGray, 
                      marginBottom: '16px',
                    }}>
                      Project Gallery
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '16px',
                    }}>
                      {selectedProject.gallery.map((image, idx) => (
                        <div
                          key={idx}
                          style={{
                            position: 'relative',
                            height: isMobile ? '180px' : '200px',
                            borderRadius: '5px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
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
                  padding: isMobile ? '24px 16px' : '32px',
                  background: `linear-gradient(135deg, ${colors.chiliRed}15, ${colors.amber}15)`,
                  borderRadius: '5px',
                  textAlign: 'center',
                }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.25rem' : '1.5rem',
                    fontWeight: '700', 
                    color: colors.darkGray, 
                    marginBottom: '12px',
                  }}>
                    Interested in a Similar Project?
                  </h3>
                  <p style={{ 
                    color: colors.mediumGray, 
                    marginBottom: '24px',
                    fontSize: isMobile ? '14px' : '15px',
                  }}>
                    Let's discuss how we can bring your vision to life
                  </p>
                  <button
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: isMobile ? '12px 24px' : '14px 32px',
                      background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
                      color: colors.white,
                      borderRadius: '5px',
                      fontWeight: '600',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: isMobile ? '14px' : '15px',
                    }}
                  >
                    <span>Contact Us</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section style={{
        padding: isMobile ? '60px 16px' : '80px 20px',
        background: `linear-gradient(135deg, ${colors.chiliRed} 0%, ${colors.safetyOrange} 50%, ${colors.amber} 100%)`,
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: `radial-gradient(circle at 20% 50%, ${colors.white} 0%, transparent 50%), radial-gradient(circle at 80% 80%, ${colors.white} 0%, transparent 50%)`,
        }}></div>

        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto',
          position: 'relative', 
          zIndex: 10,
        }}>
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
              fontSize: isMobile ? '1.75rem' : 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '800',
              marginBottom: isMobile ? '16px' : '24px',
              lineHeight: '1.2',
            }}>
              Ready to Start Your Project?
            </h2>
            <p style={{ 
              fontSize: isMobile ? '1rem' : 'clamp(1rem, 2vw, 1.25rem)',
              marginBottom: isMobile ? '24px' : '32px',
              opacity: 0.95,
            }}>
              Let's create something amazing together
            </p>
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: isMobile ? '12px 28px' : '14px 32px',
                background: colors.white,
                color: colors.darkGray,
                borderRadius: '5px',
                fontWeight: '600',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                border: 'none',
                cursor: 'pointer',
                fontSize: isMobile ? '14px' : '15px',
              }}
            >
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;