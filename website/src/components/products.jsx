import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, Package, ShoppingCart, Refrigerator, Armchair, Sparkles, 
  ArrowRight, X, Check, Plus, Minus, MessageCircle, Mail, Share2,
  Info, Ruler, Palette, Star, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useLanguage } from './lunguageContext';

const Products = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      id: 1,
      name: 'Heavy Duty Shelving',
      category: 'shelving',
      description: 'Industrial-grade shelving systems for maximum storage',
      fullDescription: 'Our heavy-duty shelving systems are designed for commercial and industrial applications requiring maximum load capacity. Built with reinforced steel and high-quality powder-coating, these units provide long-lasting durability and reliability.',
      features: ['Load capacity: 500kg per shelf', 'Adjustable heights', 'Powder-coated finish', 'Easy assembly', 'Corrosion resistant'],
      icon: Package,
      price: 450,
      rating: 4.8,
      reviews: 124,
      images: [
        'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Standard', 
          price: 450,
          colors: [
            { name: 'Grey', hex: '#808080', available: true },
            { name: 'Black', hex: '#000000', available: true },
            { name: 'White', hex: '#FFFFFF', available: true },
          ],
          sizes: [
            { name: 'Small', dimensions: '120cm x 45cm x 180cm', available: true },
            { name: 'Medium', dimensions: '150cm x 45cm x 200cm', available: true },
            { name: 'Large', dimensions: '180cm x 60cm x 220cm', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Premium', 
          price: 650,
          colors: [
            { name: 'Silver', hex: '#C0C0C0', available: true },
            { name: 'Bronze', hex: '#CD7F32', available: true },
          ],
          sizes: [
            { name: 'Medium', dimensions: '150cm x 45cm x 200cm', available: true },
            { name: 'Large', dimensions: '180cm x 60cm x 220cm', available: true },
            { name: 'Extra Large', dimensions: '200cm x 60cm x 240cm', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Cold-rolled steel',
        weight: '45kg',
        loadCapacity: '500kg per shelf',
        warranty: '5 years',
      },
    },
    {
      id: 2,
      name: 'Glass Display Cases',
      category: 'displays',
      description: 'Premium glass showcases for high-value products',
      fullDescription: 'Elegant glass display cases perfect for showcasing jewelry, electronics, cosmetics, and other premium products. Features tempered glass construction, LED lighting, and secure locking mechanisms.',
      features: ['Tempered glass', 'LED lighting', 'Lockable doors', 'Adjustable shelves', 'Mirror backing'],
      icon: Sparkles,
      price: 850,
      rating: 4.9,
      reviews: 89,
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Counter Top', 
          price: 850,
          colors: [
            { name: 'Clear Glass', hex: '#F0F8FF', available: true },
            { name: 'Tinted Glass', hex: '#708090', available: true },
          ],
          sizes: [
            { name: 'Small', dimensions: '60cm x 40cm x 50cm', available: true },
            { name: 'Medium', dimensions: '80cm x 50cm x 60cm', available: true },
            { name: 'Large', dimensions: '100cm x 60cm x 70cm', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Floor Standing', 
          price: 1250,
          colors: [
            { name: 'Clear Glass', hex: '#F0F8FF', available: true },
            { name: 'Tinted Glass', hex: '#708090', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: '80cm x 50cm x 180cm', available: true },
            { name: 'Large', dimensions: '100cm x 60cm x 200cm', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Tempered glass with aluminum frame',
        weight: '65kg',
        lighting: 'LED strip included',
        warranty: '3 years',
      },
    },
    {
      id: 3,
      name: 'Checkout Counter',
      category: 'counters',
      description: 'Modern checkout solutions with integrated POS',
      fullDescription: 'Professional checkout counter designed for retail environments. Features built-in cable management, storage compartments, and durable laminate finish. Perfect for high-traffic retail locations.',
      features: ['Cable management', 'Storage compartments', 'Durable laminate', 'Custom branding option', 'Modular design'],
      icon: ShoppingCart,
      price: 1200,
      rating: 4.7,
      reviews: 156,
      images: [
        'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800',
        'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Basic', 
          price: 1200,
          colors: [
            { name: 'Oak', hex: '#C19A6B', available: true },
            { name: 'Walnut', hex: '#5C4033', available: true },
            { name: 'White', hex: '#FFFFFF', available: true },
          ],
          sizes: [
            { name: 'Compact', dimensions: '120cm x 60cm x 90cm', available: true },
            { name: 'Standard', dimensions: '150cm x 70cm x 90cm', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Professional', 
          price: 1650,
          colors: [
            { name: 'Oak', hex: '#C19A6B', available: true },
            { name: 'Walnut', hex: '#5C4033', available: true },
            { name: 'Maple', hex: '#F5DEB3', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: '150cm x 70cm x 90cm', available: true },
            { name: 'Large', dimensions: '180cm x 80cm x 90cm', available: true },
            { name: 'Extra Large', dimensions: '200cm x 80cm x 90cm', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Laminated MDF with steel frame',
        weight: '85kg',
        features: 'Built-in cable management',
        warranty: '2 years',
      },
    },
    {
      id: 4,
      name: 'Display Chiller',
      category: 'refrigeration',
      description: 'Multi-deck refrigerated display units',
      fullDescription: 'Energy-efficient multi-deck refrigerated display perfect for supermarkets, convenience stores, and food retailers. Features precise temperature control, LED lighting, and low energy consumption.',
      features: ['Energy efficient', 'Temperature control', 'LED lighting', 'Auto defrost', 'Digital display'],
      icon: Refrigerator,
      price: 3500,
      rating: 4.8,
      reviews: 67,
      images: [
        'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800',
        'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800',
        'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Single Deck', 
          price: 3500,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
            { name: 'Black', hex: '#000000', available: true },
          ],
          sizes: [
            { name: 'Compact', dimensions: '120cm x 80cm x 200cm', available: true },
            { name: 'Standard', dimensions: '150cm x 90cm x 210cm', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Multi Deck', 
          price: 4800,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
            { name: 'Stainless Steel', hex: '#C0C0C0', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: '180cm x 90cm x 210cm', available: true },
            { name: 'Large', dimensions: '200cm x 100cm x 220cm', available: true },
          ]
        },
      ],
      specifications: {
        temperature: '0°C to 8°C',
        powerConsumption: '1.5kW',
        refrigerant: 'R404A',
        warranty: '1 year parts, 5 years compressor',
      },
    },
    {
      id: 5,
      name: 'Store Seating',
      category: 'furniture',
      description: 'Comfortable seating for customer lounges',
      fullDescription: 'Stylish and comfortable seating solutions for retail customer lounges and waiting areas. Modern design with easy-to-clean upholstery and durable construction.',
      features: ['Modern design', 'Easy maintenance', 'Various colors', 'Stain resistant', 'Commercial grade'],
      icon: Armchair,
      price: 380,
      rating: 4.6,
      reviews: 203,
      images: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Single Seat', 
          price: 380,
          colors: [
            { name: 'Grey', hex: '#808080', available: true },
            { name: 'Navy', hex: '#000080', available: true },
            { name: 'Beige', hex: '#F5F5DC', available: true },
            { name: 'Black', hex: '#000000', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: '70cm x 75cm x 80cm', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Two Seater', 
          price: 680,
          colors: [
            { name: 'Grey', hex: '#808080', available: true },
            { name: 'Navy', hex: '#000080', available: true },
            { name: 'Beige', hex: '#F5F5DC', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: '140cm x 75cm x 80cm', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Commercial-grade fabric with foam padding',
        weight: '18kg',
        loadCapacity: '150kg per seat',
        warranty: '2 years',
      },
    },
    {
      id: 6,
      name: 'Gondola Shelving',
      category: 'shelving',
      description: 'Versatile double-sided store shelving',
      fullDescription: 'Flexible gondola shelving system perfect for creating store aisles. Modular design allows easy reconfiguration to meet changing merchandise needs.',
      features: ['Modular design', 'Easy assembly', 'Multiple configurations', 'Adjustable shelves', 'End cap compatible'],
      icon: Package,
      price: 550,
      rating: 4.7,
      reviews: 145,
      images: [
        'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Standard Gondola', 
          price: 550,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
            { name: 'Grey', hex: '#808080', available: true },
            { name: 'Black', hex: '#000000', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: '120cm x 60cm x 180cm', available: true },
            { name: 'Tall', dimensions: '120cm x 60cm x 200cm', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Heavy Duty Gondola', 
          price: 750,
          colors: [
            { name: 'Grey', hex: '#808080', available: true },
            { name: 'Charcoal', hex: '#36454F', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: '150cm x 75cm x 180cm', available: true },
            { name: 'Tall', dimensions: '150cm x 75cm x 200cm', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Steel with powder coating',
        weight: '55kg',
        shelfLoadCapacity: '80kg per shelf',
        warranty: '3 years',
      },
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  // Handle product selection
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedVariant(product.variants[0]);
    setSelectedColor(product.variants[0].colors[0]);
    setSelectedSize(product.variants[0].sizes[0]);
    setCurrentImageIndex(0);
    setQuantity(1);
  };

  // Handle WhatsApp inquiry
  const handleWhatsAppInquiry = () => {
    const product = selectedProduct;
    const variant = selectedVariant;
    const color = selectedColor;
    const size = selectedSize;
    
    const message = `Hello! I'm interested in the following product:\n\n` +
      `Product: ${product.name}\n` +
      `Variant: ${variant.name}\n` +
      `Color: ${color.name}\n` +
      `Size: ${size.name} (${size.dimensions})\n` +
      `Quantity: ${quantity}\n` +
      `Price: $${variant.price * quantity}\n\n` +
      `Could you please provide more information?`;
    
    const whatsappUrl = `https://wa.me/263XXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Handle Email inquiry
  const handleEmailInquiry = () => {
    const product = selectedProduct;
    const variant = selectedVariant;
    const color = selectedColor;
    const size = selectedSize;
    
    const subject = `Inquiry: ${product.name}`;
    const body = `Hello,\n\nI'm interested in the following product:\n\n` +
      `Product: ${product.name}\n` +
      `Variant: ${variant.name}\n` +
      `Color: ${color.name}\n` +
      `Size: ${size.name} (${size.dimensions})\n` +
      `Quantity: ${quantity}\n` +
      `Estimated Price: $${variant.price * quantity}\n\n` +
      `Please provide more information about:\n` +
      `- Availability\n` +
      `- Delivery timeline\n` +
      `- Installation services\n` +
      `- Warranty details\n\n` +
      `Thank you!`;
    
    const mailtoUrl = `mailto:sales@yourcompany.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  // Image navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedProduct.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProduct.images.length - 1 : prev - 1
    );
  };

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

  const modalOverlayStyle = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(8px)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    overflowY: 'auto',
  };

  const modalContentStyle = {
    background: colors.white,
    borderRadius: '24px',
    maxWidth: '1200px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
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
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Hero Section with Blended Background */}
      <section style={heroSectionStyle}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/33.jpg")',
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
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                display: 'inline-block',
                padding: '8px 20px',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50px',
                marginBottom: '24px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <span style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '1px' }}>
                PREMIUM SHOPFITTING PRODUCTS
              </span>
            </motion.div>
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
          <div 
            className="products-grid"
            style={{ 
              display: 'grid',
              gap: '32px',
            }}
          >
            <style>{`
              .products-grid {
                grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
              }

              @media (max-width: 768px) {
                .products-grid {
                  grid-template-columns: 1fr !important;
                }
              }

              @media (min-width: 769px) and (max-width: 1024px) {
                .products-grid {
                  grid-template-columns: repeat(2, 1fr) !important;
                }
              }
            `}</style>

            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => handleProductClick(product)}
                style={{
                  background: colors.white,
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 60px ${colors.chiliRed}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                {/* Product Image */}
                <div style={{ 
                  position: 'relative', 
                  height: '280px', 
                  background: `linear-gradient(135deg, ${colors.lightGray} 0%, #E5E7EB 100%)`,
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${product.images[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.6s ease',
                  }}></div>

                  {/* Rating Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '6px 12px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '13px',
                    fontWeight: '700',
                  }}>
                    <Star size={14} style={{ color: colors.amber, fill: colors.amber }} />
                    <span>{product.rating}</span>
                    <span style={{ color: colors.mediumGray }}>({product.reviews})</span>
                  </div>

                  {/* Price Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    padding: '8px 16px',
                    background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    color: colors.white,
                    fontSize: '16px',
                    fontWeight: '800',
                  }}>
                    ${product.price}
                  </div>

                  {/* Hover Overlay */}
                  <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: `linear-gradient(to top, ${colors.darkGray}dd 0%, transparent 80%)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '20px',
                  }} className="hover-overlay">
                    <div style={{
                      color: colors.white,
                      fontSize: '14px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}>
                      <Info size={16} />
                      <span>Click to view details</span>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '800', 
                    color: colors.darkGray, 
                    marginBottom: '8px',
                    lineHeight: '1.3',
                  }}>
                    {product.name}
                  </h3>
                  
                  <p style={{ 
                    color: colors.mediumGray, 
                    marginBottom: '16px', 
                    lineHeight: '1.6',
                    fontSize: '14px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {product.description}
                  </p>

                  {/* Quick Features */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '16px',
                  }}>
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: '4px 12px',
                          background: colors.lightGray,
                          borderRadius: '12px',
                          fontSize: '12px',
                          color: colors.mediumGray,
                          fontWeight: '600',
                        }}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Variants Indicator */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    paddingTop: '16px',
                    borderTop: `1px solid ${colors.lightGray}`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Palette size={14} style={{ color: colors.chiliRed }} />
                      <span style={{ fontSize: '12px', color: colors.mediumGray }}>
                        {product.variants.reduce((acc, v) => acc + v.colors.length, 0)} colors
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Ruler size={14} style={{ color: colors.chiliRed }} />
                      <span style={{ fontSize: '12px', color: colors.mediumGray }}>
                        {product.variants.reduce((acc, v) => acc + v.sizes.length, 0)} sizes
                      </span>
                    </div>
                  </div>
                </div>

                <style>{`
                  .products-grid > *:hover .hover-overlay {
                    opacity: 1 !important;
                  }
                  .products-grid > *:hover > div:first-child > div:nth-child(1) {
                    transform: scale(1.1);
                  }
                `}</style>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={modalOverlayStyle}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              style={modalContentStyle}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                style={{
                  position: 'sticky',
                  top: '20px',
                  left: '100%',
                  transform: 'translateX(-40px)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: colors.white,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  zIndex: 10,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.chiliRed;
                  e.currentTarget.querySelector('svg').style.color = colors.white;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.white;
                  e.currentTarget.querySelector('svg').style.color = colors.darkGray;
                }}
              >
                <X size={24} style={{ color: colors.darkGray, transition: 'color 0.3s ease' }} />
              </button>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                {/* Left Side - Images */}
                <div style={{ 
                  background: colors.lightGray,
                  padding: '40px',
                  position: 'relative',
                }}>
                  {/* Main Image */}
                  <div style={{
                    position: 'relative',
                    height: '500px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    marginBottom: '20px',
                    background: colors.white,
                  }}>
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${selectedProduct.images[currentImageIndex]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}></div>

                    {/* Image Navigation */}
                    {selectedProduct.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          style={{
                            position: 'absolute',
                            left: '16px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.9)',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                          }}
                        >
                          <ChevronLeft size={20} style={{ color: colors.darkGray }} />
                        </button>
                        <button
                          onClick={nextImage}
                          style={{
                            position: 'absolute',
                            right: '16px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.9)',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                          }}
                        >
                          <ChevronRight size={20} style={{ color: colors.darkGray }} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Images */}
                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                    {selectedProduct.images.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          border: currentImageIndex === idx 
                            ? `3px solid ${colors.chiliRed}` 
                            : `3px solid transparent`,
                          transition: 'all 0.3s ease',
                          backgroundImage: `url(${img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Details */}
                <div style={{ 
                  padding: '40px',
                  overflowY: 'auto',
                  maxHeight: '80vh',
                }}>
                  {/* Product Header */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      <Star size={18} style={{ color: colors.amber, fill: colors.amber }} />
                      <span style={{ fontSize: '16px', fontWeight: '700' }}>{selectedProduct.rating}</span>
                      <span style={{ color: colors.mediumGray }}>({selectedProduct.reviews} reviews)</span>
                    </div>
                    
                    <h2 style={{ 
                      fontSize: '2rem', 
                      fontWeight: '800', 
                      color: colors.darkGray, 
                      marginBottom: '12px',
                    }}>
                      {selectedProduct.name}
                    </h2>
                    
                    <p style={{ 
                      color: colors.mediumGray, 
                      lineHeight: '1.8',
                      marginBottom: '24px',
                    }}>
                      {selectedProduct.fullDescription}
                    </p>

                    {/* Price */}
                    <div style={{ 
                      fontSize: '2.5rem', 
                      fontWeight: '800', 
                      color: colors.chiliRed,
                      marginBottom: '24px',
                    }}>
                      ${selectedVariant?.price || selectedProduct.price}
                    </div>
                  </div>

                  {/* Variant Selection */}
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ 
                      fontSize: '1rem', 
                      fontWeight: '700', 
                      color: colors.darkGray, 
                      marginBottom: '12px',
                    }}>
                      Select Variant
                    </h3>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      {selectedProduct.variants.map((variant) => (
                        <button
                          key={variant.id}
                          onClick={() => {
                            setSelectedVariant(variant);
                            setSelectedColor(variant.colors[0]);
                            setSelectedSize(variant.sizes[0]);
                          }}
                          style={{
                            padding: '12px 20px',
                            borderRadius: '8px',
                            border: selectedVariant?.id === variant.id
                              ? `2px solid ${colors.chiliRed}`
                              : `2px solid ${colors.lightGray}`,
                            background: selectedVariant?.id === variant.id
                              ? `${colors.chiliRed}10`
                              : colors.white,
                            cursor: 'pointer',
                            fontWeight: '600',
                            color: selectedVariant?.id === variant.id
                              ? colors.chiliRed
                              : colors.darkGray,
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {variant.name} - ${variant.price}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Selection */}
                  {selectedVariant && (
                    <div style={{ marginBottom: '24px' }}>
                      <h3 style={{ 
                        fontSize: '1rem', 
                        fontWeight: '700', 
                        color: colors.darkGray, 
                        marginBottom: '12px',
                      }}>
                        Color: {selectedColor?.name}
                      </h3>
                      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        {selectedVariant.colors.map((color) => (
                          <button
                            key={color.name}
                            onClick={() => setSelectedColor(color)}
                            disabled={!color.available}
                            style={{
                              width: '48px',
                              height: '48px',
                              borderRadius: '8px',
                              background: color.hex,
                              border: selectedColor?.name === color.name
                                ? `3px solid ${colors.chiliRed}`
                                : `3px solid ${colors.lightGray}`,
                              cursor: color.available ? 'pointer' : 'not-allowed',
                              opacity: color.available ? 1 : 0.4,
                              transition: 'all 0.3s ease',
                              position: 'relative',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            {selectedColor?.name === color.name && (
                              <Check size={20} style={{ 
                                color: color.hex === '#FFFFFF' || color.hex === '#F0F8FF' 
                                  ? colors.darkGray 
                                  : colors.white 
                              }} />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Size Selection */}
                  {selectedVariant && (
                    <div style={{ marginBottom: '24px' }}>
                      <h3 style={{ 
                        fontSize: '1rem', 
                        fontWeight: '700', 
                        color: colors.darkGray, 
                        marginBottom: '12px',
                      }}>
                        Size: {selectedSize?.name}
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {selectedVariant.sizes.map((size) => (
                          <button
                            key={size.name}
                            onClick={() => setSelectedSize(size)}
                            disabled={!size.available}
                            style={{
                              padding: '12px 16px',
                              borderRadius: '8px',
                              border: selectedSize?.name === size.name
                                ? `2px solid ${colors.chiliRed}`
                                : `2px solid ${colors.lightGray}`,
                              background: selectedSize?.name === size.name
                                ? `${colors.chiliRed}10`
                                : colors.white,
                              cursor: size.available ? 'pointer' : 'not-allowed',
                              opacity: size.available ? 1 : 0.4,
                              textAlign: 'left',
                              transition: 'all 0.3s ease',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}
                          >
                            <div>
                              <div style={{ 
                                fontWeight: '700', 
                                color: selectedSize?.name === size.name
                                  ? colors.chiliRed
                                  : colors.darkGray,
                              }}>
                                {size.name}
                              </div>
                              <div style={{ fontSize: '12px', color: colors.mediumGray }}>
                                {size.dimensions}
                              </div>
                            </div>
                            {selectedSize?.name === size.name && (
                              <Check size={20} style={{ color: colors.chiliRed }} />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quantity Selection */}
                  <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ 
                      fontSize: '1rem', 
                      fontWeight: '700', 
                      color: colors.darkGray, 
                      marginBottom: '12px',
                    }}>
                      Quantity
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          border: `2px solid ${colors.lightGray}`,
                          background: colors.white,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <Minus size={18} />
                      </button>
                      <div style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: '700',
                        minWidth: '60px',
                        textAlign: 'center',
                      }}>
                        {quantity}
                      </div>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          border: `2px solid ${colors.lightGray}`,
                          background: colors.white,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Total Price */}
                  <div style={{ 
                    padding: '20px',
                    background: colors.lightGray,
                    borderRadius: '12px',
                    marginBottom: '24px',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '1rem', fontWeight: '600', color: colors.mediumGray }}>
                        Total Price
                      </span>
                      <span style={{ fontSize: '2rem', fontWeight: '800', color: colors.chiliRed }}>
                        ${(selectedVariant?.price || selectedProduct.price) * quantity}
                      </span>
                    </div>
                  </div>

                  {/* Inquiry Methods */}
                  <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ 
                      fontSize: '1.125rem', 
                      fontWeight: '700', 
                      color: colors.darkGray, 
                      marginBottom: '16px',
                      textAlign: 'center',
                    }}>
                      Choose Your Inquiry Method
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      {/* WhatsApp Button */}
                      <button
                        onClick={handleWhatsAppInquiry}
                        style={{
                          ...ctaButtonStyle,
                          background: '#25D366',
                          color: colors.white,
                          justifyContent: 'center',
                          padding: '16px 24px',
                        }}
                      >
                        <MessageCircle size={20} />
                        <span>WhatsApp</span>
                      </button>

                      {/* Email Button */}
                      <button
                        onClick={handleEmailInquiry}
                        style={{
                          ...ctaButtonStyle,
                          background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
                          color: colors.white,
                          justifyContent: 'center',
                          padding: '16px 24px',
                        }}
                      >
                        <Mail size={20} />
                        <span>Email</span>
                      </button>
                    </div>
                  </div>

                  {/* Specifications */}
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ 
                      fontSize: '1.125rem', 
                      fontWeight: '700', 
                      color: colors.darkGray, 
                      marginBottom: '16px',
                    }}>
                      Specifications
                    </h3>
                    <div style={{ 
                      background: colors.lightGray,
                      borderRadius: '12px',
                      overflow: 'hidden',
                    }}>
                      {Object.entries(selectedProduct.specifications).map(([key, value], idx) => (
                        <div
                          key={key}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '16px 20px',
                            borderBottom: idx < Object.entries(selectedProduct.specifications).length - 1
                              ? `1px solid ${colors.white}`
                              : 'none',
                          }}
                        >
                          <span style={{ 
                            fontWeight: '600', 
                            color: colors.mediumGray,
                            textTransform: 'capitalize',
                          }}>
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span style={{ fontWeight: '700', color: colors.darkGray }}>
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 style={{ 
                      fontSize: '1.125rem', 
                      fontWeight: '700', 
                      color: colors.darkGray, 
                      marginBottom: '16px',
                    }}>
                      Key Features
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {selectedProduct.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          style={{ 
                            display: 'flex', 
                            alignItems: 'flex-start', 
                            gap: '12px',
                            marginBottom: '12px',
                            padding: '12px',
                            background: colors.lightGray,
                            borderRadius: '8px',
                          }}
                        >
                          <Check size={20} style={{ color: colors.chiliRed, marginTop: '2px', flexShrink: 0 }} />
                          <span style={{ color: colors.darkGray, fontWeight: '600' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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