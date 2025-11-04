import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layers, Package, ShoppingCart, Refrigerator, Armchair, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from './lunguageContext';

const Products = () => {
  const { t } = useLanguage();
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
    { id: 'all', name: 'All Products', icon: Layers },
    { id: 'shelving', name: t('products.categories.shelving'), icon: Package },
    { id: 'displays', name: t('products.categories.displays'), icon: Sparkles },
    { id: 'counters', name: t('products.categories.counters'), icon: ShoppingCart },
    { id: 'refrigeration', name: t('products.categories.refrigeration'), icon: Refrigerator },
    { id: 'furniture', name: t('products.categories.furniture'), icon: Armchair },
  ];

  const products = [
    {
      name: 'Heavy Duty Shelving',
      category: 'shelving',
      description: 'Industrial-grade shelving systems for maximum storage',
      features: ['Load capacity: 500kg per shelf', 'Adjustable heights', 'Powder-coated finish'],
      image: Package,
    },
    {
      name: 'Glass Display Cases',
      category: 'displays',
      description: 'Premium glass showcases for high-value products',
      features: ['Tempered glass', 'LED lighting', 'Lockable doors'],
      image: Sparkles,
    },
    {
      name: 'Checkout Counter',
      category: 'counters',
      description: 'Modern checkout solutions with integrated POS',
      features: ['Cable management', 'Storage compartments', 'Durable laminate'],
      image: ShoppingCart,
    },
    {
      name: 'Display Chiller',
      category: 'refrigeration',
      description: 'Multi-deck refrigerated display units',
      features: ['Energy efficient', 'Temperature control', 'LED lighting'],
      image: Refrigerator,
    },
    {
      name: 'Store Seating',
      category: 'furniture',
      description: 'Comfortable seating for customer lounges',
      features: ['Modern design', 'Easy maintenance', 'Various colors'],
      image: Armchair,
    },
    {
      name: 'Gondola Shelving',
      category: 'shelving',
      description: 'Versatile double-sided store shelving',
      features: ['Modular design', 'Easy assembly', 'Multiple configurations'],
      image: Package,
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

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

  const filterSectionStyle = {
    padding: '32px 20px',
    background: colors.white,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: '72px',
    zIndex: 30,
  };

  const categoryButtonStyle = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '600',
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

  const cardStyle = {
    background: colors.white,
    borderRadius: '16px',
    overflow: 'hidden',
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
        <div style={{ ...containerStyle, position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '896px', margin: '0 auto' }}
          >
            <h1 style={heroTitleStyle}>
              {t('products.title')}
            </h1>
            <p style={heroSubtitleStyle}>
              {t('products.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section style={filterSectionStyle}>
        <div style={containerStyle}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={categoryButtonStyle(activeCategory === category.id)}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.id) {
                    e.currentTarget.style.background = '#E5E7EB';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.id) {
                    e.currentTarget.style.background = colors.lightGray;
                  }
                }}
              >
                <category.icon size={18} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 40px ${colors.chiliRed}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={{ 
                  position: 'relative', 
                  height: '256px', 
                  background: `linear-gradient(135deg, ${colors.lightGray} 0%, #E5E7EB 100%)`,
                  overflow: 'hidden',
                }}>
                  <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                  }}>
                    <product.image 
                      size={100} 
                      style={{ 
                        color: colors.mediumGray,
                        transition: 'transform 0.3s ease',
                      }} 
                    />
                  </div>
                  <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}></div>
                </div>
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: colors.darkGray, marginBottom: '8px' }}>
                    {product.name}
                  </h3>
                  <p style={{ color: colors.mediumGray, marginBottom: '16px', lineHeight: '1.6' }}>
                    {product.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', flex: 1 }}>
                    {product.features.map((feature, idx) => (
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
                        <span style={{ color: colors.chiliRed, marginTop: '2px' }}>•</span>
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
                    <span>Inquire Now</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
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
              Need Custom Products?
            </h2>
            <p style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
              marginBottom: '32px',
              opacity: 0.95,
            }}>
              We can design and manufacture products tailored to your exact requirements
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
              <span>Get Custom Quote</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;