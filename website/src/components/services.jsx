import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Store, Wrench, Snowflake, PenTool, MessageCircle, 
  Hammer, ArrowRight, CheckCircle2, Clock, Award, Shield
} from 'lucide-react';
import { useLanguage } from './lunguageContext';

const Services = () => {
  const { t } = useLanguage();

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

  const services = [
    {
      icon: Store,
      title: t('services.retail.title'),
      description: t('services.retail.desc'),
      features: [
        'Complete store design and planning',
        'Custom shelving and display units',
        'Checkout counters and cash wraps',
        'Wall panels and fixtures',
        'Lighting integration',
        'Space optimization'
      ],
      colorFrom: colors.chiliRed,
      colorTo: colors.brightOrange,
    },
    {
      icon: Wrench,
      title: t('services.custom.title'),
      description: t('services.custom.desc'),
      features: [
        'Bespoke furniture design',
        'Custom display cabinets',
        'Specialized storage solutions',
        'Made-to-measure fixtures',
        'Premium materials',
        'Precision craftsmanship'
      ],
      colorFrom: colors.brightOrange,
      colorTo: colors.amber,
    },
    {
      icon: Snowflake,
      title: t('services.refrigeration.title'),
      description: t('services.refrigeration.desc'),
      features: [
        'Commercial refrigeration units',
        'Walk-in cold rooms',
        'Display chillers',
        'Freezer installations',
        'Maintenance services',
        'Energy-efficient solutions'
      ],
      colorFrom: colors.scarlet,
      colorTo: colors.darkOrange,
    },
    {
      icon: PenTool,
      title: t('services.signage.title'),
      description: t('services.signage.desc'),
      features: [
        'Internal and external signage',
        'LED illuminated signs',
        'Brand identity displays',
        'Wayfinding systems',
        'Window graphics',
        'Digital signage solutions'
      ],
      colorFrom: colors.darkOrange,
      colorTo: colors.chiliRed,
    },
    {
      icon: MessageCircle,
      title: t('services.consultation.title'),
      description: t('services.consultation.desc'),
      features: [
        'Space planning and layout',
        'Retail strategy consultation',
        '3D visualization',
        'Budget planning',
        'Material selection',
        'Project management'
      ],
      colorFrom: colors.flame,
      colorTo: colors.safetyOrange,
    },
    {
      icon: Hammer,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.desc'),
      features: [
        'Regular maintenance checks',
        'Repair services',
        'Fixture refurbishment',
        'Emergency support',
        'Warranty coverage',
        'Long-term contracts'
      ],
      colorFrom: colors.safetyOrange,
      colorTo: colors.amber,
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We meet with you to understand your needs, vision, and budget',
      icon: MessageCircle,
    },
    {
      step: '02',
      title: 'Design',
      description: 'Our team creates detailed designs and 3D visualizations',
      icon: PenTool,
    },
    {
      step: '03',
      title: 'Manufacturing',
      description: 'We craft your fixtures with precision and quality materials',
      icon: Hammer,
    },
    {
      step: '04',
      title: 'Installation',
      description: 'Professional installation ensuring everything fits perfectly',
      icon: Wrench,
    },
  ];

  const benefits = [
    { icon: Clock, title: 'Fast Turnaround', description: 'Projects completed on time, every time' },
    { icon: Award, title: 'Premium Quality', description: 'High-quality materials and craftsmanship' },
    { icon: Shield, title: 'Warranty Included', description: 'Comprehensive warranty on all work' },
    { icon: CheckCircle2, title: 'Full Support', description: 'Ongoing support and maintenance' },
  ];

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

  const sectionStyle = {
    padding: '80px 20px',
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
  };

  const sectionTitleStyle = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: '800',
    color: colors.darkGray,
    marginBottom: '16px',
    textAlign: 'center',
  };

  const sectionSubtitleStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: colors.mediumGray,
    textAlign: 'center',
    marginBottom: '64px',
  };

  const cardStyle = {
    background: colors.white,
    borderRadius: '16px',
    padding: '24px',
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
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>

        <div style={{ ...containerStyle, position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '896px', margin: '0 auto' }}
          >
            <h1 style={heroTitleStyle}>
              {t('services.title')}
            </h1>
            <p style={heroSubtitleStyle}>
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ ...sectionStyle, background: colors.white }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 40px ${service.colorFrom}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div 
                  style={{
                    width: '64px',
                    height: '64px',
                    background: `linear-gradient(135deg, ${service.colorFrom}, ${service.colorTo})`,
                    borderRadius: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    boxShadow: `0 4px 15px ${service.colorFrom}30`,
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <service.icon size={28} style={{ color: colors.white }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.darkGray, marginBottom: '12px' }}>
                  {service.title}
                </h3>
                <p style={{ color: colors.mediumGray, marginBottom: '16px', lineHeight: '1.6' }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', flex: 1 }}>
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '8px', 
                        fontSize: '14px', 
                        color: colors.mediumGray,
                        marginBottom: '8px',
                      }}
                    >
                      <CheckCircle2 size={16} style={{ color: colors.chiliRed, marginTop: '2px', flexShrink: 0 }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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
                  <span>Get Quote</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ ...sectionStyle, background: colors.lightGray }}>
        <div style={containerStyle}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={sectionTitleStyle}>
              Our Process
            </h2>
            <p style={sectionSubtitleStyle}>
              From concept to completion
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                style={{ position: 'relative', textAlign: 'center' }}
              >
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: '24px' }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.amber})`,
                    borderRadius: '50%',
                    transition: 'transform 0.3s ease',
                  }}></div>
                  <div style={{
                    position: 'relative',
                    width: '96px',
                    height: '96px',
                    background: colors.white,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '8px',
                  }}>
                    <item.icon size={36} style={{ color: colors.chiliRed }} />
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    width: '32px',
                    height: '32px',
                    background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.white,
                    fontWeight: '700',
                    fontSize: '14px',
                    boxShadow: `0 4px 12px ${colors.chiliRed}40`,
                  }}>
                    {item.step}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: colors.darkGray, marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ color: colors.mediumGray, lineHeight: '1.6' }}>
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <ArrowRight 
                    size={24} 
                    style={{ 
                      display: 'none',
                      position: 'absolute',
                      top: '48px',
                      right: '-16px',
                      color: colors.amber,
                      opacity: 0.5,
                    }} 
                    className="lg:block"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ ...sectionStyle, background: colors.white }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={{
                  textAlign: 'center',
                  padding: '24px',
                  borderRadius: '12px',
                  background: colors.lightGray,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.white;
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.lightGray;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <benefit.icon size={40} style={{ color: colors.chiliRed, margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: colors.darkGray, marginBottom: '8px' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '14px', color: colors.mediumGray }}>
                  {benefit.description}
                </p>
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
              Ready to Get Started?
            </h2>
            <p style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
              marginBottom: '32px',
              opacity: 0.95,
            }}>
              Let's discuss your project and create something amazing together
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
              <span>Request a Quote</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;