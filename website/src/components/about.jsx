import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Eye, Heart, Shield, TrendingUp, Users, Zap } from 'lucide-react';
import { useLanguage } from './lunguageContext';

const About = () => {
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

  const values = [
    {
      icon: Award,
      title: t('about.values.quality'),
      description: t('about.values.qualityDesc'),
      colorFrom: colors.chiliRed,
      colorTo: colors.brightOrange,
    },
    {
      icon: Zap,
      title: t('about.values.innovation'),
      description: t('about.values.innovationDesc'),
      colorFrom: colors.brightOrange,
      colorTo: colors.amber,
    },
    {
      icon: Shield,
      title: t('about.values.integrity'),
      description: t('about.values.integrityDesc'),
      colorFrom: colors.scarlet,
      colorTo: colors.darkOrange,
    },
    {
      icon: Users,
      title: t('about.values.customer'),
      description: t('about.values.customerDesc'),
      colorFrom: colors.darkOrange,
      colorTo: colors.chiliRed,
    },
  ];

  const timeline = [
    { year: '2008', event: 'Company Founded', description: 'Global Shopfitters established in Harare' },
    { year: '2012', event: 'Major Expansion', description: 'Expanded operations across Zimbabwe' },
    { year: '2016', event: 'Industry Recognition', description: 'Awarded Best Shopfitting Company' },
    { year: '2020', event: 'Technology Integration', description: 'Introduced cutting-edge design technology' },
    { year: '2024', event: 'Regional Leader', description: 'Became Zimbabwe\'s premier shopfitting company' },
  ];

  const team = [
    { name: 'Leadership Team', role: 'Experienced Professionals', count: '15+' },
    { name: 'Craftsmen', role: 'Skilled Artisans', count: '50+' },
    { name: 'Designers', role: 'Creative Minds', count: '20+' },
    { name: 'Support Staff', role: 'Dedicated Team', count: '30+' },
  ];

  // Styles
  const heroSectionStyle = {
    position: 'relative',
    padding: '80px 20px',
    background: `linear-gradient(135deg, #1a1a1a 0%, ${colors.darkGray} 50%, #2a2a2a 100%)`,
    color: colors.white,
    overflow: 'hidden',
  };

  const heroBadgeStyle = {
    display: 'inline-block',
    padding: '12px 24px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '50px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '24px',
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
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
  };

  const iconBoxStyle = {
    width: '64px',
    height: '64px',
    borderRadius: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    boxShadow: '0 4px 15px rgba(227, 24, 13, 0.3)',
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
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
        }}></div>

        <div style={{ ...containerStyle, position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '896px', margin: '0 auto' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={heroBadgeStyle}
            >
              <span style={{
                background: `linear-gradient(90deg, ${colors.mustardLight} 0%, ${colors.amber} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Established 2008 • Zimbabwe's Trusted Partner
              </span>
            </motion.div>

            <h1 style={heroTitleStyle}>
              {t('about.title')}
            </h1>
            <p style={heroSubtitleStyle}>
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section style={{ ...sectionStyle, background: colors.white }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', color: colors.darkGray, marginBottom: '24px' }}>
                {t('about.story.title')}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '18px', color: colors.mediumGray, lineHeight: '1.8' }}>
                <p>{t('about.story.text')}</p>
                <p>
                  Since our establishment, we have been committed to delivering excellence in every project. Our team of skilled craftsmen and designers work tirelessly to create retail spaces that not only look impressive but also function efficiently to drive business success.
                </p>
                <p>
                  From small boutique stores to large commercial retail spaces, we have successfully completed hundreds of projects across Zimbabwe, earning us a reputation for reliability, quality, and innovation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <div style={{ 
                position: 'relative', 
                width: '100%', 
                height: '500px', 
                background: `linear-gradient(135deg, ${colors.peach} 0%, ${colors.sunset} 100%)`,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={150} style={{ color: colors.amber, opacity: 0.4 }} />
                </div>
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 50%)',
                }}></div>
                <div style={{ position: 'absolute', bottom: '32px', left: '32px', color: colors.white }}>
                  <h3 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '8px' }}>15+ Years</h3>
                  <p style={{ fontSize: '1.25rem' }}>Of Excellence in Shopfitting</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={{ ...sectionStyle, background: colors.lightGray }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ 
                ...cardStyle, 
                padding: '32px',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                style={{
                  ...iconBoxStyle,
                  background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.brightOrange})`,
                }}
              >
                <Target size={32} style={{ color: colors.white }} />
              </div>
              <h2 style={{ fontSize: '1.875rem', fontWeight: '800', color: colors.darkGray, marginBottom: '16px' }}>
                {t('about.mission.title')}
              </h2>
              <p style={{ fontSize: '1.125rem', color: colors.mediumGray, lineHeight: '1.8' }}>
                {t('about.mission.text')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ 
                ...cardStyle, 
                padding: '32px',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                style={{
                  ...iconBoxStyle,
                  background: `linear-gradient(135deg, ${colors.scarlet}, ${colors.darkOrange})`,
                }}
              >
                <Eye size={32} style={{ color: colors.white }} />
              </div>
              <h2 style={{ fontSize: '1.875rem', fontWeight: '800', color: colors.darkGray, marginBottom: '16px' }}>
                {t('about.vision.title')}
              </h2>
              <p style={{ fontSize: '1.125rem', color: colors.mediumGray, lineHeight: '1.8' }}>
                {t('about.vision.text')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ ...sectionStyle, background: colors.white }}>
        <div style={containerStyle}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={sectionTitleStyle}>
              {t('about.values.title')}
            </h2>
            <p style={sectionSubtitleStyle}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                style={{ 
                  ...cardStyle, 
                  padding: '24px',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 40px ${value.colorFrom}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div 
                  style={{
                    width: '80px',
                    height: '80px',
                    background: `linear-gradient(135deg, ${value.colorFrom}, ${value.colorTo})`,
                    borderRadius: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow: `0 4px 20px ${value.colorFrom}30`,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <value.icon size={36} style={{ color: colors.white }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: colors.darkGray, marginBottom: '12px' }}>
                  {value.title}
                </h3>
                <p style={{ color: colors.mediumGray, lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ 
        ...sectionStyle, 
        background: `linear-gradient(135deg, ${colors.lightGray} 0%, ${colors.white} 100%)`,
      }}>
        <div style={containerStyle}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={sectionTitleStyle}>
              Our Journey
            </h2>
            <p style={sectionSubtitleStyle}>
              Milestones that shaped our success
            </p>
          </motion.div>

          <div style={{ maxWidth: '896px', margin: '0 auto' }}>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                style={{
                  position: 'relative',
                  paddingLeft: '32px',
                  paddingBottom: '48px',
                  borderLeft: `4px solid ${colors.chiliRed}`,
                }}
              >
                <div style={{
                  position: 'absolute',
                  left: '-16px',
                  top: 0,
                  width: '32px',
                  height: '32px',
                  background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
                  borderRadius: '50%',
                  boxShadow: `0 4px 15px ${colors.chiliRed}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{ width: '12px', height: '12px', background: colors.white, borderRadius: '50%' }}></div>
                </div>
                <div 
                  style={{
                    background: colors.white,
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'box-shadow 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 16px',
                    background: `linear-gradient(90deg, ${colors.chiliRed}, ${colors.brightOrange})`,
                    color: colors.white,
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: '700',
                    marginBottom: '12px',
                  }}>
                    {item.year}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: colors.darkGray, marginBottom: '8px' }}>
                    {item.event}
                  </h3>
                  <p style={{ color: colors.mediumGray, lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ ...sectionStyle, background: colors.white }}>
        <div style={containerStyle}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={sectionTitleStyle}>
              Our Team
            </h2>
            <p style={sectionSubtitleStyle}>
              The people behind our success
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ position: 'relative', width: '128px', height: '128px', margin: '0 auto 16px' }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.amber})`,
                    borderRadius: '50%',
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    inset: '8px',
                    background: colors.white,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <span style={{
                      fontSize: '2.5rem',
                      fontWeight: '800',
                      background: `linear-gradient(90deg, ${colors.chiliRed} 0%, ${colors.safetyOrange} 50%, ${colors.amber} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      {member.count}
                    </span>
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: colors.darkGray, marginBottom: '8px' }}>
                  {member.name}
                </h3>
                <p style={{ color: colors.mediumGray }}>
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;