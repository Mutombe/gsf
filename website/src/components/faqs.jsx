import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, HelpCircle, ArrowRight, Search, 
  MessageCircle, Mail, Phone, Clock, CheckCircle,
  Package, Wrench, CreditCard, MapPin, Shield, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

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

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle, color: colors.chiliRed },
    { id: 'services', name: 'Services', icon: Wrench, color: colors.safetyOrange },
    { id: 'pricing', name: 'Pricing & Payment', icon: CreditCard, color: colors.amber },
    { id: 'process', name: 'Process & Timeline', icon: Clock, color: colors.brightOrange },
    { id: 'warranty', name: 'Warranty & Support', icon: Shield, color: colors.persimmon },
  ];

  const faqs = [
    {
      category: 'services',
      question: 'What services does Global Shopfitters Zimbabwe provide?',
      answer: 'We provide comprehensive shopfitting solutions including commercial and residential design, custom fixtures, shelving systems, refrigeration solutions, signage and branding, design consultation, and ongoing maintainance services. Our team handles everything from initial concept to final installation.',
      popular: true,
      icon: Package,
    },
    {
      category: 'process',
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on scope and complexity. A small space might take 2-4 weeks, while larger commercial projects can take 2-3 months. We provide detailed timelines during the consultation phase and keep you updated throughout the process.',
      popular: true,
      icon: Clock,
    },
    {
      category: 'services',
      question: 'Do you offer custom design services?',
      answer: 'Yes! We specialize in custom designs tailored to your specific needs, brand identity, and space requirements. Our experienced design team works closely with you to create unique solutions that reflect your brand and maximize functionality.',
      popular: true,
      icon: Wrench,
    },
    {
      category: 'services',
      question: 'What is your service area?',
      answer: 'We primarily serve Zimbabwe with our headquarters in Harare. We have successfully completed projects across the country including Harare, Bulawayo, Mutare, Gweru, Marondera and other major cities. Contact us to discuss projects in other locations.',
      popular: false,
      icon: MapPin,
    },
    {
      category: 'services',
      question: 'Do you provide installation services?',
      answer: 'Yes, we handle everything from design and manufacturing to professional installation. Our experienced team ensures perfect fitment and quality finish. Installation is included in most project quotes.',
      popular: true,
      icon: CheckCircle,
    },
    {
      category: 'warranty',
      question: 'What kind of warranty do you offer?',
      answer: 'We provide comprehensive warranties on all our work. Specific warranty terms vary by product and service, but typically range from 6months onwards. Warranty details are clearly cover materials, workmanship, and structural integrity.',
      popular: true,
      icon: Shield,
    },
    {
      category: 'services',
      question: 'Can you work with existing store layouts?',
      answer: 'Absolutely! We can work with your existing space and provide solutions for renovations, upgrades, or complete redesigns. We specialize in minimizing disruption to your operations during the renovation process.',
      popular: false,
      icon: Package,
    },
    {
      category: 'warranty',
      question: 'Do you offer maintainance services?',
      answer: 'Yes, we provide ongoing maintainance and support services to keep your fixtures in excellent condition. We offer both scheduled maintainance contracts and on-demand repair services. Our maintainance team is available for emergency repairs.',
      popular: false,
      icon: Wrench,
    },
    {
      category: 'pricing',
      question: 'How do I get a quote?',
      answer: 'Contact us through our website, phone, WhatsApp, or email to schedule a free consultation. We\'ll assess your needs, visit your site if necessary, and provide a detailed quote within 2-3 business days. The quote includes itemized costs and project timeline.',
      popular: true,
      icon: CreditCard,
    },
    {
      category: 'services',
      question: 'What materials do you use?',
      answer: 'We use high-quality, durable materials including commercial grade steel, aluminium, solid wood, soft woods, wide range of glass types, different laminate and tile finishes, to mention a few. Material selection depends on your specific requirements, budget, and intended use. We source materials from trusted suppliers.',
      popular: false,
      icon: Package,
    },
    {
      category: 'pricing',
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including bank transfers, mobile money, cash, and credit cards. Payment terms are typically structured as: 50% deposit to begin work, 40% upon completion, and 10% after installation and approval.',
      popular: false,
      icon: CreditCard,
    },
    {
      category: 'process',
      question: 'What is the consultation process?',
      answer: 'Our consultation process starts with an initial meeting to understand your needs and vision. We then conduct a site survey, develop design concepts, provide 3D and 2D visualisations, and prepare a detailed proposal. The entire consultation is free with no obligation.',
      popular: false,
      icon: Users,
    },
    {
      category: 'pricing',
      question: 'Do you offer financing options?',
      answer: 'Yes, we offer flexible payment plans for larger projects. We can discuss installment options and work with you to create a payment schedule that fits your budget. Contact us to discuss financing arrangements for your specific project.',
      popular: false,
      icon: CreditCard,
    },
    {
      category: 'process',
      question: 'Can I make changes after the project starts?',
      answer: 'Minor changes can typically be accommodated during the project. However, significant changes may affect timeline and cost. We recommend finalizing all decisions before manufacturing begins. We\'ll always discuss any implications before proceeding with changes.',
      popular: false,
      icon: Clock,
    },
    {
      category: 'warranty',
      question: 'What if something breaks after installation?',
      answer: 'All our work is covered by warranty. If something breaks or malfunctions within the warranty period due to manufacturing defects or faulty installation, we\'ll repair or replace it at no cost. Contact our support team and we\'ll respond within 24 hours. However certain material or defects After Installation is complete do not carry a warranty, for example, breaking of glass or client or natural harzads altering initial status/look of finished product.',
      popular: false,
      icon: Shield,
    },
  ];

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    let filtered = faqs;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, activeCategory, faqs]);

  // Get popular FAQs
  const popularFAQs = faqs.filter(faq => faq.popular).slice(0, 6);

  // Contact methods
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat with us instantly',
      action: 'Start Chat',
      color: '#25D366',
      link: 'https://wa.me/263781934986',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: '+263 78 193 4986',
      action: 'Call Now',
      color: colors.chiliRed,
      link: 'tel:+263781934986',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'info@globalshopfitters.co.zw',
      action: 'Send Email',
      color: colors.amber,
      link: 'mailto:info@globalshopfitters.co.zw',
    },
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
    marginBottom: '40px',
  };

  const sectionStyle = {
    padding: '80px 20px',
    background: colors.white,
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
  };

  const searchBoxStyle = {
    position: 'relative',
    maxWidth: '640px',
    margin: '0 auto 48px',
  };

  const searchInputStyle = {
    width: '100%',
    padding: '18px 24px 18px 56px',
    fontSize: '16px',
    border: `2px solid ${colors.lightGray}`,
    borderRadius: '5px',
    outline: 'none',
    transition: 'all 0.3s ease',
    background: colors.white,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  };

  const categoryButtonStyle = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    background: isActive ? colors.chiliRed : colors.white,
    color: isActive ? colors.white : colors.darkGray,
    boxShadow: isActive 
      ? `0 4px 12px ${colors.chiliRed}40` 
      : '0 2px 8px rgba(0, 0, 0, 0.05)',
    transform: isActive ? 'scale(1.05)' : 'scale(1)',
  });

  const faqItemStyle = {
    border: `2px solid ${colors.lightGray}`,
    borderRadius: '5px',
    overflow: 'hidden',
    background: colors.white,
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    marginBottom: '16px',
  };

  const ctaSectionStyle = {
    padding: '80px 20px',
    background: colors.lightGray,
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Hero Section with Blended Background */}
      <section style={heroSectionStyle}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000")',
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
            className="pt-16"
          >
            {/* Icon Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '96px',
                height: '96px',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: '5%',
                marginBottom: '32px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <HelpCircle size={48} style={{ color: colors.white }} />
            </motion.div>

            <h1 style={heroTitleStyle}>
              How Can We Help?
            </h1>
            <p style={heroSubtitleStyle}>
              Find answers to your questions about our services, process, and more
            </p>

            {/* Hero Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{
                maxWidth: '640px',
                margin: '0 auto',
                position: 'relative',
              }}
            >
              <Search 
                size={20} 
                style={{ 
                  position: 'absolute', 
                  left: '20px', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: colors.mediumGray,
                  zIndex: 1,
                }} 
              />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '20px 24px 20px 56px',
                  fontSize: '16px',
                  border: 'none',
                  borderRadius: '5px',
                  outline: 'none',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.background = colors.white;
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.2)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Popular Questions Section */}
      {!searchQuery && activeCategory === 'all' && (
        <section style={{ ...sectionStyle, background: colors.lightGray }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ marginBottom: '48px', textAlign: 'center' }}
            >
              <h2 style={{ 
                fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
                fontWeight: '800', 
                color: colors.darkGray,
                marginBottom: '12px',
              }}>
                Popular Questions
              </h2>
              <p style={{ color: colors.mediumGray, fontSize: '1.125rem' }}>
                Quick answers to our most frequently asked questions
              </p>
            </motion.div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '24px',
            }}>
              {popularFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  style={{
                    background: colors.white,
                    borderRadius: '5px',
                    padding: '24px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: `2px solid transparent`,
                  }}
                  onClick={() => {
                    const faqIndex = faqs.findIndex(f => f.question === faq.question);
                    setOpenIndex(faqIndex);
                    // Scroll to FAQ section
                    document.getElementById('faq-section').scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 12px 32px ${colors.chiliRed}20`;
                    e.currentTarget.style.borderColor = colors.chiliRed;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '5px',
                    background: `linear-gradient(135deg, ${colors.chiliRed}15, ${colors.amber}15)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}>
                    <faq.icon size={24} style={{ color: colors.chiliRed }} />
                  </div>
                  <h3 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: '700', 
                    color: colors.darkGray,
                    marginBottom: '12px',
                    lineHeight: '1.4',
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{ 
                    color: colors.mediumGray, 
                    fontSize: '14px',
                    lineHeight: '1.6',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {faq.answer}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: '16px',
                    color: colors.chiliRed,
                    fontWeight: '600',
                    fontSize: '14px',
                  }}>
                    <span>Read more</span>
                    <ArrowRight size={16} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section id="faq-section" style={sectionStyle}>
        <div style={containerStyle}>
          {/* Category Filters */}
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
              fontWeight: '800', 
              color: colors.darkGray,
              marginBottom: '24px',
              textAlign: 'center',
            }}>
              Browse by Category
            </h2>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '12px', 
              justifyContent: 'center',
            }}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  style={categoryButtonStyle(activeCategory === category.id)}
                  onMouseEnter={(e) => {
                    if (activeCategory !== category.id) {
                      e.currentTarget.style.background = colors.lightGray;
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== category.id) {
                      e.currentTarget.style.background = colors.white;
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                >
                  <category.icon size={18} />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div style={{ maxWidth: '896px', margin: '0 auto' }}>
            {filteredFAQs.length > 0 ? (
              <AnimatePresence>
                {filteredFAQs.map((faq, index) => {
                  const actualIndex = faqs.findIndex(f => f.question === faq.question);
                  return (
                    <motion.div
                      key={actualIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      style={faqItemStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 8px 24px ${colors.chiliRed}15`;
                        e.currentTarget.style.borderColor = colors.chiliRed;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.05)';
                        e.currentTarget.style.borderColor = colors.lightGray;
                      }}
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
                        style={{
                          width: '100%',
                          padding: '24px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '16px',
                          textAlign: 'left',
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'background 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `${colors.lightGray}50`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        {/* Icon */}
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '5px',
                          background: `linear-gradient(135deg, ${colors.chiliRed}15, ${colors.amber}15)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <faq.icon size={20} style={{ color: colors.chiliRed }} />
                        </div>

                        {/* Question */}
                        <div style={{ flex: 1 }}>
                          <span style={{ 
                            fontWeight: '700', 
                            fontSize: '1.125rem', 
                            color: colors.darkGray,
                            lineHeight: '1.5',
                            display: 'block',
                          }}>
                            {faq.question}
                          </span>
                          {faq.popular && (
                            <span style={{
                              display: 'inline-block',
                              marginTop: '8px',
                              padding: '4px 12px',
                              background: `${colors.amber}20`,
                              color: colors.darkOrange,
                              borderRadius: '5px',
                              fontSize: '12px',
                              fontWeight: '600',
                            }}>
                              Popular
                            </span>
                          )}
                        </div>

                        {/* Chevron */}
                        <ChevronDown
                          size={24}
                          style={{ 
                            color: colors.chiliRed,
                            flexShrink: 0,
                            transition: 'transform 0.3s ease',
                            transform: openIndex === actualIndex ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        />
                      </button>

                      <AnimatePresence>
                        {openIndex === actualIndex && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div style={{ 
                              padding: '0 24px 24px 80px',
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
                  );
                })}
              </AnimatePresence>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  textAlign: 'center',
                  padding: '64px 20px',
                  background: colors.lightGray,
                  borderRadius: '5px',
                }}
              >
                <HelpCircle size={64} style={{ color: colors.mediumGray, marginBottom: '16px' }} />
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: colors.darkGray,
                  marginBottom: '8px',
                }}>
                  No results found
                </h3>
                <p style={{ color: colors.mediumGray, marginBottom: '24px' }}>
                  Try adjusting your search or browse different categories
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  style={{
                    padding: '12px 24px',
                    background: colors.chiliRed,
                    color: colors.white,
                    border: 'none',
                    borderRadius: '5px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section style={ctaSectionStyle}>
        <div style={containerStyle}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '48px', textAlign: 'center' }}
          >
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
              fontWeight: '800', 
              color: colors.darkGray,
              marginBottom: '12px',
            }}>
              Still Need Help?
            </h2>
            <p style={{ color: colors.mediumGray, fontSize: '1.125rem' }}>
              Our team is ready to assist you with personalized support
            </p>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px',
            marginBottom: '48px',
          }}>
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target={method.title === 'WhatsApp' ? '_blank' : '_self'}
                rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{
                  background: colors.white,
                  borderRadius: '5px',
                  padding: '32px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  border: `2px solid transparent`,
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 32px ${method.color}30`;
                  e.currentTarget.style.borderColor = method.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '5%',
                  background: `${method.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <method.icon size={28} style={{ color: method.color }} />
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '700', 
                  color: colors.darkGray,
                  marginBottom: '8px',
                }}>
                  {method.title}
                </h3>
                <p style={{ 
                  color: colors.mediumGray, 
                  marginBottom: '16px',
                  fontSize: '14px',
                }}>
                  {method.description}
                </p>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: method.color,
                  fontWeight: '600',
                  fontSize: '14px',
                }}>
                  {method.action}
                  <ArrowRight size={16} />
                </span>
              </motion.a>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.safetyOrange})`,
              borderRadius: '5px',
              padding: '48px 32px',
              textAlign: 'center',
              color: colors.white,
            }}
          >
            <h3 style={{ 
              fontSize: '1.75rem', 
              fontWeight: '800',
              marginBottom: '16px',
            }}>
              Ready to Start Your Project?
            </h3>
            <p style={{ 
              fontSize: '1.125rem', 
              marginBottom: '32px',
              opacity: 0.95,
            }}>
              Schedule a free consultation and let's discuss your vision
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                background: colors.white,
                color: colors.chiliRed,
                borderRadius: '5px',
                fontWeight: '700',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
              }}
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;