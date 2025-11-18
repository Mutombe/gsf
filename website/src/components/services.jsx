import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Cpu, Lightbulb, FlaskConical, Factory, 
  HeadphonesIcon, FolderKanban, Settings, Wrench, PenTool,
  ArrowRight, CheckCircle2, Clock, Award, Shield
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
      icon: HeadphonesIcon,
      title: t('services.afterService.title'),
      description: t('services.afterService.desc'),
      features: [
        '24/7 customer support hotline',
        'Warranty coverage and claims',
        'Emergency repair services',
        'Scheduled maintainance programs',
        'Parts replacement and supply',
        'Technical troubleshooting assistance'
      ],
      colorFrom: colors.persimmon,
      colorTo: colors.tangerine,
      size: 'small',
    },
    {
      icon: MessageCircle,
      title: t('services.consulting.title'),
      description: t('services.consulting.desc'),
      features: [
        'Expert needs assessment and analysis',
        'Strategic planning and budgeting',
        'Site evaluation and feasibility studies',
        'Regulatory compliance consultation',
        'Value engineering recommendations',
        'Technical advisory services'
      ],
      colorFrom: colors.chiliRed,
      colorTo: colors.brightOrange,
      size: 'large',
    },
    {
      icon: Lightbulb,
      title: t('services.design.title'),
      description: t('services.design.desc'),
      features: [
        'Space planning and layout design',
        '3D modeling and visualization',
        'Custom fixture and furniture design',
        'Brand-aligned aesthetic development',
        'Material and finish selection',
        'Detailed technical drawings'
      ],
      colorFrom: colors.brightOrange,
      colorTo: colors.amber,
      size: 'large',
    },
    {
      icon: Cpu,
      title: t('services.engineering.title'),
      description: t('services.engineering.desc'),
      features: [
        'Structural engineering solutions',
        'MEP (Mechanical, Electrical, Plumbing) design',
        'Load calculations and specifications',
        'Systems integration planning',
        'Performance optimization',
        'Technical documentation'
      ],
      colorFrom: colors.scarlet,
      colorTo: colors.persimmon,
      size: 'medium',
    },
    {
      icon: Settings,
      title: t('services.installation.title'),
      description: t('services.installation.desc'),
      features: [
        'Professional on-site installation',
        'Certified installation teams',
        'Minimal business disruption',
        'Post-installation cleanup',
        'System testing and commissioning',
        'Ongoing maintainance contracts'
      ],
      colorFrom: colors.chiliRed,
      colorTo: colors.darkOrange,
      size: 'large',
    },
    {
      icon: Factory,
      title: t('services.production.title'),
      description: t('services.production.desc'),
      features: [
        'In-house manufacturing capabilities',
        'Custom fabrication services',
        'Quality materials and finishes',
        'Precision craftsmanship',
        'Efficient production workflows',
        'Timely delivery schedules'
      ],
      colorFrom: colors.darkOrange,
      colorTo: colors.mustardYellow,
      size: 'medium',
    },
    {
      icon: FolderKanban,
      title: t('services.projectManagement.title'),
      description: t('services.projectManagement.desc'),
      features: [
        'End-to-end project coordination',
        'Timeline and milestone tracking',
        'Budget management and control',
        'Risk assessment and mitigation',
        'Stakeholder communication',
        'Quality assurance oversight'
      ],
      colorFrom: colors.safetyOrange,
      colorTo: colors.amber,
      size: 'medium',
    },
    {
      icon: FlaskConical,
      title: t('services.testing.title'),
      description: t('services.testing.desc'),
      features: [
        'Quality control inspections',
        'Material testing and verification',
        'Load and stress testing',
        'Compliance and safety testing',
        'Performance validation',
        'Pre-installation testing protocols'
      ],
      colorFrom: colors.flame,
      colorTo: colors.safetyOrange,
      size: 'small',
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
      title: 'Production',
      description: 'We manufacture your fixtures with precision and quality materials',
      icon: Factory,
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
    { icon: CheckCircle2, title: 'Full Support', description: 'Ongoing support and maintainance' },
  ];

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
    borderRadius: '5px',
    fontWeight: '600',
    textDecoration: 'none',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
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

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Hero Section with Blended Background */}
      <section style={heroSectionStyle}>
        {/* Background Image Layer */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0043.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}></div>

        {/* Gradient Overlay Blend 
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, 
            ${colors.chiliRed}ee 0%, 
            ${colors.flame}dd 25%,
            ${colors.darkOrange}cc 50%, 
            ${colors.safetyOrange}dd 75%,
            ${colors.amber}ee 100%)`,
          mixBlendMode: 'multiply',
        }}></div>*/}

        {/* Dark Overlay for Better Text Contrast */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.3)',
        }}></div>

        {/* Pattern Overlay 
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>*/}

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

      {/* Services Grid - Dynamic Masonry Layout */}
      <section style={{ ...sectionStyle, background: colors.white }}>
        <div style={containerStyle}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '64px', textAlign: 'center' }}
          >
            <h2 style={sectionTitleStyle}>Our Services</h2>
            <p style={sectionSubtitleStyle}>
              Complete end-to-end solutions for your project
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div 
            className="services-grid"
            style={{ 
              display: 'grid', 
              gap: '24px',
            }}
          >
            <style>{`
              .services-grid {
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                grid-auto-rows: 200px;
              }

              @media (max-width: 768px) {
                .services-grid {
                  grid-template-columns: 1fr !important;
                  grid-auto-rows: auto !important;
                }
                .services-grid > * {
                  grid-column: span 1 !important;
                  grid-row: span 1 !important;
                  min-height: 380px;
                }
              }

              @media (min-width: 769px) and (max-width: 1024px) {
                .services-grid {
                  grid-template-columns: repeat(2, 1fr) !important;
                  grid-auto-rows: 220px;
                }
              }
            `}</style>
            {services.map((service, index) => {
              const gridArea = getGridArea(service.size);
              const cardStyle = {
                gridColumn: gridArea.gridColumn,
                gridRow: gridArea.gridRow,
                background: colors.white,
                borderRadius: '5px',
                padding: service.size === 'large' ? '32px' : '24px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              };

              return (
                <motion.div
                  key={index}
                  className="service-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 20px 60px ${service.colorFrom}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  {/* Background Gradient Effect */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '200px',
                    height: '200px',
                    background: `linear-gradient(135deg, ${service.colorFrom}15, ${service.colorTo}15)`,
                    borderRadius: '5%',
                    transform: 'translate(50%, -50%)',
                    transition: 'transform 0.4s ease',
                  }}></div>

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    {/* Icon */}
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        width: service.size === 'large' ? '80px' : '64px',
                        height: service.size === 'large' ? '80px' : '64px',
                        background: `linear-gradient(135deg, ${service.colorFrom}, ${service.colorTo})`,
                        borderRadius: '5px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        boxShadow: `0 8px 20px ${service.colorFrom}40`,
                      }}
                    >
                      <service.icon 
                        size={service.size === 'large' ? 36 : 28} 
                        style={{ color: colors.white }} 
                      />
                    </motion.div>

                    {/* Content */}
                    <h3 style={{ 
                      fontSize: service.size === 'large' ? '1.75rem' : '1.5rem', 
                      fontWeight: '700', 
                      color: colors.darkGray, 
                      marginBottom: '12px',
                      lineHeight: '1.2',
                    }}>
                      {service.title}
                    </h3>
                    <p style={{ 
                      color: colors.mediumGray, 
                      marginBottom: '20px', 
                      lineHeight: '1.6',
                      fontSize: service.size === 'small' ? '14px' : '15px',
                    }}>
                      {service.description}
                    </p>

                    {/* Features List - Show more for larger cards */}
                    {service.size !== 'small' && (
                      <ul style={{ 
                        listStyle: 'none', 
                        padding: 0, 
                        margin: '0 0 24px 0', 
                        flex: 1 
                      }}>
                        {service.features.slice(0, service.size === 'large' ? 6 : 4).map((feature, idx) => (
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
                            <CheckCircle2 
                              size={16} 
                              style={{ color: service.colorFrom, marginTop: '2px', flexShrink: 0 }} 
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA Link */}
                    <Link 
                      to="/contact" 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: service.colorFrom,
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'gap 0.3s ease',
                        marginTop: 'auto',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.gap = '12px';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.gap = '8px';
                      }}
                    >
                      <span>Get Quote</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
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
                    borderRadius: '5%',
                    transition: 'transform 0.3s ease',
                  }}></div>
                  <div style={{
                    position: 'relative',
                    width: '96px',
                    height: '96px',
                    background: colors.white,
                    borderRadius: '5%',
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
                    borderRadius: '5%',
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Blended Background */}
      <section style={{ 
        ...sectionStyle, 
        position: 'relative',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0061.jpg")',
          opacity: 0.7,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}></div>

        {/* White Overlay Blend */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${colors.white}f5 10%, )`,
          mixBlendMode: 'normal',
        }}></div>

        {/* Subtle Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: 'url("")',
        }}></div>

        <div style={{ ...containerStyle, position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '48px', textAlign: 'center' }}
          >
            <h2 style={sectionTitleStyle}>Why Choose Us</h2>
            <p style={sectionSubtitleStyle}>
              The benefits of working with professionals
            </p>
          </motion.div>

          <div 
            className="benefits-grid"
            style={{ 
              display: 'grid', 
              gap: '24px',
            }}
          >
            <style>{`
              .benefits-grid {
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              }

              @media (max-width: 640px) {
                .benefits-grid {
                  grid-template-columns: 1fr;
                }
              }

              @media (min-width: 641px) and (max-width: 1024px) {
                .benefits-grid {
                  grid-template-columns: repeat(2, 1fr);
                }
              }

              @media (min-width: 1025px) {
                .benefits-grid {
                  grid-template-columns: repeat(4, 1fr);
                  max-width: 1200px;
                  margin: 0 auto;
                }
              }
            `}</style>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                style={{
                  textAlign: 'center',
                  padding: '32px 24px',
                  borderRadius: '5px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                  e.currentTarget.style.boxShadow = `0 12px 40px ${colors.chiliRed}20`;
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    width: '72px',
                    height: '72px',
                    background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.amber})`,
                    borderRadius: '5%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    boxShadow: `0 8px 20px ${colors.chiliRed}30`,
                  }}
                >
                  <benefit.icon size={32} style={{ color: colors.white }} />
                </motion.div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: colors.darkGray, marginBottom: '8px' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '14px', color: colors.mediumGray, lineHeight: '1.6' }}>
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