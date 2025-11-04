import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Globe } from 'lucide-react';
import { useLanguage } from './lunguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowLangMenu(false);
  }, [location]);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'nd', name: 'Ndebele', flag: '🇿🇼' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/products', label: t('nav.products') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/testimonials', label: t('nav.testimonials') },
    { path: '/faq', label: t('nav.faq') },
    { path: '/contact', label: t('nav.contact') },
  ];

  // Color palette from images
  const colors = {
    chiliRed: '#E3180D',
    scarlet: '#FF2A00',
    safetyOrange: '#FA7301',
    amber: '#F3B900',
    mustard: '#FCD92A',
    mustardLight: '#FFDC5E',
    darkGray: '#2D2D2D',
    mediumGray: '#666666',
    white: '#FFFFFF',
  };

  const topBarStyle = {
    background: `linear-gradient(90deg, ${colors.darkGray} 0%, #1a1a1a 100%)`,
    color: colors.white,
    padding: '8px 0',
    fontSize: '14px',
  };

  const navbarStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    background: colors.white,
    transition: 'all 0.3s ease',
    boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
    padding: isScrolled ? '12px 0' : '16px 0',
  };

  const logoGradientStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease',
  };

  const activeLinkStyle = {
    background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
    color: colors.white,
    padding: '10px 16px',
    borderRadius: '8px',
    fontWeight: '600',
    boxShadow: `0 2px 10px rgba(227, 24, 13, 0.3)`,
    transition: 'all 0.3s ease',
  };

  const inactiveLinkStyle = {
    color: colors.darkGray,
    padding: '10px 16px',
    borderRadius: '8px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  };

  const hoverLinkStyle = {
    color: colors.chiliRed,
    background: 'linear-gradient(135deg, rgba(227, 24, 13, 0.05), rgba(255, 42, 0, 0.05))',
  };

  const langButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    borderRadius: '8px',
    border: `1px solid ${colors.mediumGray}`,
    background: colors.white,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  return (
    <>
      {/* Top Bar */}
      <div style={topBarStyle} className="hidden lg:block">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <a 
                href="mailto:info@globalshopfitters.co.zw" 
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: colors.white, textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.amber}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.white}
              >
                <Mail size={14} />
                <span>info@globalshopfitters.co.zw</span>
              </a>
              <a 
                href="tel:+263123456789" 
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: colors.white, textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.amber}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.white}
              >
                <Phone size={14} />
                <span>+263 123 456 789</span>
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={14} />
              <span>Harare, Zimbabwe</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={navbarStyle}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <div 
                style={logoGradientStyle}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img 
                  src="/gsf.png" 
                  alt="Global Shopfitters Logo" 
                  className='w-22 h-16'
                />
              </div>
            </Link>


            {/* Desktop Navigation */}
            <div style={{ gap: '4px' }} className="hidden lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={location.pathname === link.path ? activeLinkStyle : inactiveLinkStyle}
                  onMouseEnter={(e) => {
                    if (location.pathname !== link.path) {
                      e.currentTarget.style.color = hoverLinkStyle.color;
                      e.currentTarget.style.background = hoverLinkStyle.background;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== link.path) {
                      e.currentTarget.style.color = inactiveLinkStyle.color;
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Language Switcher & Mobile Menu Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Language Switcher */}
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  style={langButtonStyle}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = colors.chiliRed}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = colors.mediumGray}
                >
                  <Globe size={18} style={{ color: colors.chiliRed }} />
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>
                    {languages.find(l => l.code === language)?.flag}
                  </span>
                  <ChevronDown 
                    size={16} 
                    style={{ 
                      transform: showLangMenu ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }} 
                  />
                </button>

                <AnimatePresence>
                  {showLangMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      style={{
                        position: 'absolute',
                        right: 0,
                        marginTop: '8px',
                        width: '192px',
                        background: colors.white,
                        borderRadius: '8px',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                        border: `1px solid #E5E7EB`,
                        overflow: 'hidden',
                        zIndex: 50,
                      }}
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            changeLanguage(lang.code);
                            setShowLangMenu(false);
                          }}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            border: 'none',
                            background: language === lang.code ? 'linear-gradient(135deg, rgba(227, 24, 13, 0.1), rgba(255, 42, 0, 0.1))' : 'transparent',
                            color: language === lang.code ? colors.chiliRed : colors.darkGray,
                            fontWeight: language === lang.code ? '600' : '500',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            textAlign: 'left',
                          }}
                          onMouseEnter={(e) => {
                            if (language !== lang.code) {
                              e.currentTarget.style.background = 'rgba(227, 24, 13, 0.05)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (language !== lang.code) {
                              e.currentTarget.style.background = 'transparent';
                            }
                          }}
                        >
                          <span style={{ fontSize: '24px' }}>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                  display: 'flex',
                  padding: '8px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'transparent',
                  color: colors.darkGray,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(227, 24, 13, 0.05)';
                  e.currentTarget.style.color = colors.chiliRed;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = colors.darkGray;
                }}
                className="lg:hidden"
              >
                {isOpen ? <X size={24}  className='lg:hidden'/> : <Menu size={24} className='lg:hidden'/>}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden"
                style={{ overflow: 'hidden' }}
              >
                <div style={{ padding: '16px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        style={{
                          display: 'block',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          fontWeight: '500',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          ...(location.pathname === link.path ? activeLinkStyle : inactiveLinkStyle),
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile Contact Info */}
                  <div style={{ 
                    paddingTop: '16px', 
                    marginTop: '16px', 
                    borderTop: `1px solid #E5E7EB`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}>
                    <a 
                      href="mailto:info@globalshopfitters.co.zw" 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '12px', 
                        color: colors.darkGray,
                        textDecoration: 'none',
                        fontSize: '14px',
                        transition: 'color 0.3s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = colors.chiliRed}
                      onMouseLeave={(e) => e.currentTarget.style.color = colors.darkGray}
                    >
                      <Mail size={18} />
                      <span>info@globalshopfitters.co.zw</span>
                    </a>
                    <a 
                      href="tel:+263123456789" 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '12px', 
                        color: colors.darkGray,
                        textDecoration: 'none',
                        fontSize: '14px',
                        transition: 'color 0.3s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = colors.chiliRed}
                      onMouseLeave={(e) => e.currentTarget.style.color = colors.darkGray}
                    >
                      <Phone size={18} />
                      <span>+263 123 456 789</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;