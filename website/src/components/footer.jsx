import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Facebook, Instagram, Twitter, 
  Linkedin, Youtube, Clock, ArrowRight 
} from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { useLanguage } from './lunguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

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

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/products', label: t('nav.products') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const services = [
    t("services.consulting.title"),
    t("services.engineering.title"),
    t("services.design.title"),
    t("services.testing.title"),
    t("services.production.title"),
    t("services.afterService.title"),
    t("services.projectManagement.title"),
    t("services.installation.title"),
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/globalshopfitters', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/globalshopfitters', label: 'Instagram' },
    { icon: FaXTwitter, href: 'https://twitter.com/globalshopfit', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/global-shopfitters', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/@globalshopfitters', label: 'YouTube' },
  ];

  // Styles
  const footerStyle = {
    background: `linear-gradient(135deg, #1a1a1a 0%, ${colors.darkGray} 50%, #2a2a2a 100%)`,
    color: colors.white,
    position: 'relative',
    overflow: 'hidden',
  };

  const backgroundOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(/f.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.15,
    mixBlendMode: 'overlay',
    zIndex: 0,
  };

  const contentWrapperStyle = {
    position: 'relative',
    zIndex: 1,
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '64px 20px',
  };

  const logoGradientStyle = {
    width: '48px',
    height: '48px',
    background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.safetyOrange})`,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 4px 15px ${colors.chiliRed}40`,
  };

  const socialButtonStyle = {
    width: '40px',
    height: '40px',
    background: '#1a1a1a',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    color: colors.white,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: 'rgba(255, 255, 255, 0.7)',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontSize: '14px',
  };

  const headingStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: colors.white,
    marginBottom: '24px',
  };

  const bottomBarStyle = {
    borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
    padding: '24px 20px',
  };

  const decorativeBarStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: `linear-gradient(90deg, ${colors.chiliRed} 0%, ${colors.brightOrange} 33%, ${colors.amber} 66%, ${colors.mustard} 100%)`,
    zIndex: 2,
  };

  return (
    <footer style={footerStyle}>
      {/* Background Image with Blend Effect */}
      <div style={backgroundOverlayStyle}></div>
      
      {/* Main Footer Content */}
      <div style={{...containerStyle, ...contentWrapperStyle}}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '48px',
        }}>
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={logoGradientStyle}>
                <span style={{ color: colors.white, fontWeight: 'bold', fontSize: '1.25rem' }}>GSZ</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ 
                  fontWeight: 'bold', 
                  fontSize: '1.25rem',
                  background: `linear-gradient(90deg, ${colors.mustardLight} 0%, ${colors.amber} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Global Shopfitters
                </span>
                <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>Zimbabwe</span>
              </div>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', lineHeight: '1.8' }}>
              {t('footer.aboutText')}
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  style={socialButtonStyle}
                  aria-label={social.label}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${colors.chiliRed}, ${colors.amber})`;
                    e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#1a1a1a';
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                  }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <h3 style={headingStyle}>{t('footer.quickLinks')}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={linkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.amber;
                      const arrow = e.currentTarget.querySelector('svg');
                      if (arrow) arrow.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                      const arrow = e.currentTarget.querySelector('svg');
                      if (arrow) arrow.style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowRight size={16} style={{ transition: 'transform 0.3s ease' }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <h3 style={headingStyle}>{t('footer.services')}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    style={linkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.amber;
                      const arrow = e.currentTarget.querySelector('svg');
                      if (arrow) arrow.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                      const arrow = e.currentTarget.querySelector('svg');
                      if (arrow) arrow.style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowRight size={16} style={{ transition: 'transform 0.3s ease' }} />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <h3 style={headingStyle}>{t('nav.contact')}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={20} style={{ color: colors.amber, marginTop: '4px', flexShrink: 0 }} />
                <div>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                    No. 3, 18 Whitesway,<br />
                     Harare Zimbabwe
                  </p>
                </div>
              </div>
              <a 
                href="tel:+263781934986" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  fontSize: '14px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.amber;
                  const icon = e.currentTarget.querySelector('svg');
                  if (icon) icon.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                  const icon = e.currentTarget.querySelector('svg');
                  if (icon) icon.style.transform = 'scale(1)';
                }}
              >
                <Phone size={20} style={{ color: colors.amber, transition: 'transform 0.3s ease' }} />
                <span>+263 78 193 4986</span>
              </a>
              <a 
                href="mailto:info@globalshopfitters.co.zw" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  fontSize: '14px',
                  wordBreak: 'break-all',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.amber;
                  const icon = e.currentTarget.querySelector('svg');
                  if (icon) icon.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                  const icon = e.currentTarget.querySelector('svg');
                  if (icon) icon.style.transform = 'scale(1)';
                }}
              >
                <Mail size={20} style={{ color: colors.amber, flexShrink: 0, transition: 'transform 0.3s ease' }} />
                <span>info@globalshopfitters.co.zw</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Clock size={20} style={{ color: colors.amber, marginTop: '4px', flexShrink: 0 }} />
                <div>
                  <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '14px', margin: '0 0 4px 0', fontWeight: '500' }}>
                    Business Hours
                  </p>
                  <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', margin: '2px 0' }}>
                    Mon - Fri: 8:00 AM - 5:00 PM
                  </p>
                  <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', margin: '2px 0' }}>
                    Sat: 8:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{...bottomBarStyle, ...contentWrapperStyle}}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
        }}>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center',
          }}>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.5)', 
              fontSize: '14px',
              margin: 0,
              textAlign: 'center',
            }}>
              © {currentYear} Global Shopfitters. {t('footer.rights')}
            </p>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.5)', 
              fontSize: '14px',
              margin: 0,
            }}>
              {t('footer.poweredBy')} {' '}
              <a 
                href="https://bitstudio.co.zw" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: colors.amber,
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.mustard;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.amber;
                }}
              >
                Bit Studio
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div style={decorativeBarStyle}></div>
    </footer>
  );
};

export default Footer;