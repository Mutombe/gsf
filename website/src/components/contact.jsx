import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from './lunguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.address'),
      content: ['123 Industrial Road', 'Harare, Zimbabwe'],
      colorFrom: colors.chiliRed,
      colorTo: colors.brightOrange,
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      content: ['+263 123 456 789', '+263 987 654 321'],
      colorFrom: colors.brightOrange,
      colorTo: colors.amber,
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      content: ['info@globalshopfitters.co.zw', 'sales@globalshopfitters.co.zw'],
      colorFrom: colors.scarlet,
      colorTo: colors.darkOrange,
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      content: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Sat: 8:00 AM - 1:00 PM'],
      colorFrom: colors.darkOrange,
      colorTo: colors.chiliRed,
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/globalshopfitters', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/globalshopfitters', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/globalshopfit', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/global-shopfitters', label: 'LinkedIn' },
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
    background: colors.white,
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
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const inputFieldStyle = {
    width: '100%',
    padding: '12px 16px',
    border: `2px solid #E5E7EB`,
    borderRadius: '8px',
    fontSize: '16px',
    color: colors.darkGray,
    transition: 'all 0.3s ease',
    outline: 'none',
  };

  const inputFocusStyle = {
    borderColor: colors.chiliRed,
    boxShadow: `0 0 0 3px ${colors.chiliRed}15`,
  };

  const buttonStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '14px 32px',
    background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
    color: colors.white,
    borderRadius: '8px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(227, 24, 13, 0.4)',
    transition: 'all 0.3s ease',
    fontSize: '16px',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: colors.darkGray,
    marginBottom: '8px',
  };

  const socialButtonStyle = {
    width: '40px',
    height: '40px',
    background: colors.lightGray,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    color: colors.mediumGray,
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
              {t('contact.title')}
            </h1>
            <p style={heroSubtitleStyle}>
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '24px',
            marginBottom: '64px',
          }}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div 
                  style={{
                    width: '64px',
                    height: '64px',
                    background: `linear-gradient(135deg, ${info.colorFrom}, ${info.colorTo})`,
                    borderRadius: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    boxShadow: `0 4px 15px ${info.colorFrom}30`,
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <info.icon size={28} style={{ color: colors.white }} />
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: colors.darkGray, marginBottom: '8px' }}>
                  {info.title}
                </h3>
                {info.content.map((line, idx) => (
                  <p key={idx} style={{ color: colors.mediumGray, fontSize: '14px', marginTop: '4px' }}>
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: '1.875rem', fontWeight: '800', color: colors.darkGray, marginBottom: '24px' }}>
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={inputFieldStyle}
                    placeholder="John Doe"
                    onFocus={(e) => {
                      e.target.style.borderColor = inputFocusStyle.borderColor;
                      e.target.style.boxShadow = inputFocusStyle.boxShadow;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E5E7EB';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={inputFieldStyle}
                      placeholder="john@example.com"
                      onFocus={(e) => {
                        e.target.style.borderColor = inputFocusStyle.borderColor;
                        e.target.style.boxShadow = inputFocusStyle.boxShadow;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#E5E7EB';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={inputFieldStyle}
                      placeholder="+263 123 456 789"
                      onFocus={(e) => {
                        e.target.style.borderColor = inputFocusStyle.borderColor;
                        e.target.style.boxShadow = inputFocusStyle.boxShadow;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#E5E7EB';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      style={inputFieldStyle}
                      placeholder="Your Company"
                      onFocus={(e) => {
                        e.target.style.borderColor = inputFocusStyle.borderColor;
                        e.target.style.boxShadow = inputFocusStyle.boxShadow;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#E5E7EB';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>
                      {t('contact.form.service')}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={inputFieldStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = inputFocusStyle.borderColor;
                        e.target.style.boxShadow = inputFocusStyle.boxShadow;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#E5E7EB';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <option value="">Select a service</option>
                      <option value="retail">Retail Shopfitting</option>
                      <option value="custom">Custom Fixtures</option>
                      <option value="refrigeration">Refrigeration</option>
                      <option value="signage">Signage & Branding</option>
                      <option value="consultation">Consultation</option>
                      <option value="maintenance">Maintenance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{ ...inputFieldStyle, resize: 'vertical', minHeight: '120px' }}
                    placeholder="Tell us about your project..."
                    onFocus={(e) => {
                      e.target.style.borderColor = inputFocusStyle.borderColor;
                      e.target.style.boxShadow = inputFocusStyle.boxShadow;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E5E7EB';
                      e.target.style.boxShadow = 'none';
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    ...buttonStyle,
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(227, 24, 13, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(227, 24, 13, 0.4)';
                  }}
                >
                  <Send size={20} />
                  <span>{isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}</span>
                </button>
              </form>

              {/* Social Links */}
              <div style={{ marginTop: '32px' }}>
                <p style={{ fontSize: '14px', fontWeight: '500', color: colors.darkGray, marginBottom: '16px' }}>
                  Connect with us:
                </p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={socialButtonStyle}
                      aria-label={social.label}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `linear-gradient(135deg, ${colors.chiliRed}, ${colors.amber})`;
                        e.currentTarget.style.color = colors.white;
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = colors.lightGray;
                        e.currentTarget.style.color = colors.mediumGray;
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ height: '100%', minHeight: '500px' }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                background: `linear-gradient(135deg, ${colors.peach} 0%, ${colors.sunset} 100%)`,
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <MapPin size={80} style={{ color: colors.amber, marginBottom: '16px' }} />
                  <p style={{ color: colors.mediumGray, fontWeight: '600', fontSize: '1.125rem', marginBottom: '8px' }}>
                    Map Placeholder
                  </p>
                  <p style={{ fontSize: '14px', color: colors.mediumGray }}>
                    123 Industrial Road, Harare
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;