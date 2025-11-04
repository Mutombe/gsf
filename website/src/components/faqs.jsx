import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

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

  const faqs = [
    {
      question: 'What services does Global Shopfitters provide?',
      answer: 'We provide comprehensive shopfitting solutions including retail store design, custom fixtures, shelving systems, refrigeration solutions, signage and branding, design consultation, and ongoing maintenance services.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on scope and complexity. A small retail space might take 2-4 weeks, while larger commercial projects can take 2-3 months. We provide detailed timelines during the consultation phase.',
    },
    {
      question: 'Do you offer custom design services?',
      answer: 'Yes! We specialize in custom designs tailored to your specific needs, brand identity, and space requirements. Our design team works closely with you to create unique solutions.',
    },
    {
      question: 'What is your service area?',
      answer: 'We primarily serve Zimbabwe with our headquarters in Harare. We have successfully completed projects across the country including Harare, Bulawayo, Mutare, Gweru, and other major cities.',
    },
    {
      question: 'Do you provide installation services?',
      answer: 'Yes, we handle everything from design and manufacturing to professional installation. Our experienced team ensures perfect fitment and quality finish.',
    },
    {
      question: 'What kind of warranty do you offer?',
      answer: 'We provide comprehensive warranties on all our work. Specific warranty terms vary by product and service, but typically range from 1-5 years. Details are provided in project agreements.',
    },
    {
      question: 'Can you work with existing store layouts?',
      answer: 'Absolutely! We can work with your existing space and provide solutions for renovations, upgrades, or complete redesigns while minimizing disruption to your operations.',
    },
    {
      question: 'Do you offer maintenance services?',
      answer: 'Yes, we provide ongoing maintenance and support services to keep your fixtures in excellent condition. We offer both scheduled maintenance contracts and on-demand repair services.',
    },
    {
      question: 'How do I get a quote?',
      answer: 'Contact us through our website, phone, or email to schedule a consultation. We\'ll assess your needs, visit your site if necessary, and provide a detailed quote.',
    },
    {
      question: 'What materials do you use?',
      answer: 'We use high-quality, durable materials including steel, wood, glass, and various laminates. Material selection depends on your specific requirements, budget, and intended use.',
    },
  ];

  // Styles
  const heroSectionStyle = {
    position: 'relative',
    padding: '80px 20px',
    background: `linear-gradient(135deg, #1a1a1a 0%, ${colors.darkGray} 50%, #2a2a2a 100%)`,
    color: colors.white,
  };

  const heroIconStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80px',
    height: '80px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '50%',
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
    background: colors.white,
  };

  const containerStyle = {
    maxWidth: '896px',
    margin: '0 auto',
  };

  const faqItemStyle = {
    border: `1px solid #E5E7EB`,
    borderRadius: '12px',
    overflow: 'hidden',
    background: colors.white,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    marginBottom: '16px',
  };

  const faqButtonStyle = {
    width: '100%',
    padding: '20px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'left',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
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
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', maxWidth: '896px', margin: '0 auto' }}
          >
            <div style={heroIconStyle}>
              <HelpCircle 
                size={40} 
                style={{ 
                  color: colors.amber,
                }} 
              />
            </div>
            <h1 style={heroTitleStyle}>
              Frequently Asked Questions
            </h1>
            <p style={heroSubtitleStyle}>
              Find answers to common questions about our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                style={faqItemStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  style={faqButtonStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors.lightGray;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <span style={{ 
                    fontWeight: '600', 
                    fontSize: '1.125rem', 
                    color: colors.darkGray,
                    paddingRight: '16px',
                    lineHeight: '1.6',
                  }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={24}
                    style={{ 
                      color: colors.chiliRed,
                      flexShrink: 0,
                      transition: 'transform 0.3s ease',
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ 
                        padding: '0 24px 20px',
                        color: colors.mediumGray,
                        lineHeight: '1.8',
                        fontSize: '1rem',
                      }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={ctaSectionStyle}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: `radial-gradient(circle at 20% 50%, ${colors.white} 0%, transparent 50%), radial-gradient(circle at 80% 80%, ${colors.white} 0%, transparent 50%)`,
        }}></div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
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
              Still Have Questions?
            </h2>
            <p style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
              marginBottom: '32px',
              opacity: 0.95,
            }}>
              Our team is ready to help. Contact us for personalized assistance.
            </p>
            <a 
              href="/contact" 
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
              <span>Contact Us</span>
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;