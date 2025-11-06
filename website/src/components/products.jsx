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
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Handle modal close
  const handleModalClose = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Blended Background */}
      <section className="relative min-h-[70vh] flex items-center text-white overflow-hidden px-5 py-20 md:py-32">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/33.jpg")' }}
        ></div>

        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background: 'linear-gradient(135deg, #E3180Dee 0%, #E35906dd 50%, #F3B900ee 100%)'
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-5 py-2 mb-6 rounded-full border border-white/30"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-xs md:text-sm font-semibold tracking-wider">
                PREMIUM SHOPFITTING PRODUCTS
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              {t('products.title')}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed">
              {t('products.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white shadow-md sticky top-[72px] z-30 py-8 px-5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    flex items-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold
                    transition-all duration-300 transform
                    ${isActive 
                      ? 'bg-gradient-to-r from-[#E3180D] to-[#FF2A00] text-white shadow-lg scale-105' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  <Icon size={18} />
                  <span className="text-sm sm:text-base">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-gray-50 py-12 md:py-20 px-5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product, index) => {
              const Icon = product.icon;
              
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => handleProductClick(product)}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  {/* Product Image */}
                  <div className="relative h-64 md:h-72 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${product.images[0]})` }}
                    ></div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full flex items-center gap-1 text-xs md:text-sm font-bold">
                      <Star size={14} className="text-[#F3B900] fill-[#F3B900]" />
                      <span>{product.rating}</span>
                      <span className="text-gray-500">({product.reviews})</span>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-[#E3180D] to-[#FF2A00] backdrop-blur-md rounded-full text-white text-sm md:text-base font-extrabold">
                      ${product.price}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <div className="text-white text-sm font-bold flex items-center gap-2">
                        <Info size={16} />
                        <span>Click to view details</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-extrabold text-gray-800 mb-2 leading-tight">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Quick Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1 bg-gray-100 rounded-xl text-xs text-gray-600 font-semibold"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Variants Indicator */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                        <Palette size={14} className="text-[#E3180D]" />
                        <span className="text-xs text-gray-500">
                          {product.variants.reduce((acc, v) => acc + v.colors.length, 0)} colors
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Ruler size={14} className="text-[#E3180D]" />
                        <span className="text-xs text-gray-500">
                          {product.variants.reduce((acc, v) => acc + v.sizes.length, 0)} sizes
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-80 flex items-start md:items-center justify-center p-4 md:p-5 overflow-y-auto "
            onClick={handleModalClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-2xl md:rounded-3xl w-full max-w-6xl my-8 md:my-0 overflow-hidden relative "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleModalClose}
                className="sticky top-4 left-full -translate-x-12 md:-translate-x-16 w-12 h-12 rounded-full bg-white hover:bg-[#E3180D] border-none cursor-pointer flex items-center justify-center shadow-xl z-10 transition-all duration-300 group"
              >
                <X size={24} className="text-gray-800 group-hover:text-white transition-colors" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Images */}
                <div className="bg-gray-50 p-6 md:p-10 order-2 lg:order-1">
                  {/* Main Image */}
                  <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-5 bg-white">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${selectedProduct.images[currentImageIndex]})` }}
                    ></div>

                    {/* Image Navigation */}
                    {selectedProduct.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white border-none cursor-pointer flex items-center justify-center shadow-lg transition-all"
                        >
                          <ChevronLeft size={20} className="text-gray-800" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white border-none cursor-pointer flex items-center justify-center shadow-lg transition-all"
                        >
                          <ChevronRight size={20} className="text-gray-800" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Images */}
                  <div className="flex gap-3 justify-center overflow-x-auto pb-2">
                    {selectedProduct.images.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`
                          min-w-[60px] w-16 md:min-w-[80px] md:w-20 h-16 md:h-20 rounded-lg overflow-hidden cursor-pointer
                          transition-all duration-300 bg-cover bg-center
                          ${currentImageIndex === idx 
                            ? 'border-4 border-[#E3180D] scale-105' 
                            : 'border-4 border-transparent hover:border-gray-300'
                          }
                        `}
                        style={{ backgroundImage: `url(${img})` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Details */}
                <div className="p-6 md:p-10 overflow-y-auto max-h-[70vh] lg:max-h-[80vh] order-1 lg:order-2">
                  {/* Product Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Star size={18} className="text-[#F3B900] fill-[#F3B900]" />
                      <span className="text-base font-bold">{selectedProduct.rating}</span>
                      <span className="text-gray-500">({selectedProduct.reviews} reviews)</span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-3">
                      {selectedProduct.name}
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                      {selectedProduct.fullDescription}
                    </p>

                    {/* Price */}
                    <div className="text-3xl md:text-4xl font-extrabold text-[#E3180D] mb-6">
                      ${selectedVariant?.price || selectedProduct.price}
                    </div>
                  </div>

                  {/* Variant Selection */}
                  <div className="mb-6">
                    <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">
                      Select Variant
                    </h3>
                    <div className="flex gap-3 flex-wrap">
                      {selectedProduct.variants.map((variant) => (
                        <button
                          key={variant.id}
                          onClick={() => {
                            setSelectedVariant(variant);
                            setSelectedColor(variant.colors[0]);
                            setSelectedSize(variant.sizes[0]);
                          }}
                          className={`
                            px-4 md:px-5 py-2.5 md:py-3 rounded-lg font-semibold transition-all text-sm md:text-base
                            ${selectedVariant?.id === variant.id
                              ? 'border-2 border-[#E3180D] bg-red-50 text-[#E3180D]'
                              : 'border-2 border-gray-200 bg-white text-gray-800 hover:border-gray-300'
                            }
                          `}
                        >
                          {variant.name} - ${variant.price}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Selection */}
                  {selectedVariant && (
                    <div className="mb-6">
                      <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">
                        Color: {selectedColor?.name}
                      </h3>
                      <div className="flex gap-3 flex-wrap">
                        {selectedVariant.colors.map((color) => (
                          <button
                            key={color.name}
                            onClick={() => setSelectedColor(color)}
                            disabled={!color.available}
                            className={`
                              w-12 h-12 rounded-lg transition-all flex items-center justify-center
                              ${selectedColor?.name === color.name
                                ? 'border-4 border-[#E3180D] scale-110'
                                : 'border-4 border-gray-200 hover:border-gray-300'
                              }
                              ${!color.available && 'opacity-40 cursor-not-allowed'}
                            `}
                            style={{ background: color.hex }}
                          >
                            {selectedColor?.name === color.name && (
                              <Check 
                                size={20} 
                                className={color.hex === '#FFFFFF' || color.hex === '#F0F8FF' ? 'text-gray-800' : 'text-white'}
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Size Selection */}
                  {selectedVariant && (
                    <div className="mb-6">
                      <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">
                        Size: {selectedSize?.name}
                      </h3>
                      <div className="flex flex-col gap-2">
                        {selectedVariant.sizes.map((size) => (
                          <button
                            key={size.name}
                            onClick={() => setSelectedSize(size)}
                            disabled={!size.available}
                            className={`
                              p-3 md:p-4 rounded-lg text-left transition-all flex justify-between items-center
                              ${selectedSize?.name === size.name
                                ? 'border-2 border-[#E3180D] bg-red-50'
                                : 'border-2 border-gray-200 bg-white hover:border-gray-300'
                              }
                              ${!size.available && 'opacity-40 cursor-not-allowed'}
                            `}
                          >
                            <div>
                              <div className={`font-bold text-sm md:text-base ${selectedSize?.name === size.name ? 'text-[#E3180D]' : 'text-gray-800'}`}>
                                {size.name}
                              </div>
                              <div className="text-xs md:text-sm text-gray-500">
                                {size.dimensions}
                              </div>
                            </div>
                            {selectedSize?.name === size.name && (
                              <Check size={20} className="text-[#E3180D]" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quantity Selection */}
                  <div className="mb-8">
                    <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">
                      Quantity
                    </h3>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-lg border-2 border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center transition-all"
                      >
                        <Minus size={18} />
                      </button>
                      <div className="text-2xl font-bold min-w-[60px] text-center">
                        {quantity}
                      </div>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-lg border-2 border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center transition-all"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Total Price */}
                  <div className="p-4 md:p-5 bg-gray-50 rounded-xl mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base font-semibold text-gray-600">
                        Total Price
                      </span>
                      <span className="text-2xl md:text-3xl font-extrabold text-[#E3180D]">
                        ${(selectedVariant?.price || selectedProduct.price) * quantity}
                      </span>
                    </div>
                  </div>

                  {/* Inquiry Methods */}
                  <div className="mb-8">
                    <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 text-center">
                      Choose Your Inquiry Method
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* WhatsApp Button */}
                      <button
                        onClick={handleWhatsAppInquiry}
                        className="flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        <MessageCircle size={20} />
                        <span>WhatsApp</span>
                      </button>

                      {/* Email Button */}
                      <button
                        onClick={handleEmailInquiry}
                        className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#E3180D] to-[#FF2A00] hover:from-[#FF2A00] hover:to-[#E3180D] text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        <Mail size={20} />
                        <span>Email</span>
                      </button>
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="mb-6">
                    <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4">
                      Specifications
                    </h3>
                    <div className="bg-gray-50 rounded-xl overflow-hidden">
                      {Object.entries(selectedProduct.specifications).map(([key, value], idx) => (
                        <div
                          key={key}
                          className={`flex flex-col sm:flex-row sm:justify-between p-4 ${idx < Object.entries(selectedProduct.specifications).length - 1 ? 'border-b border-white' : ''}`}
                        >
                          <span className="font-semibold text-gray-600 capitalize text-sm md:text-base mb-1 sm:mb-0">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="font-bold text-gray-800 text-sm md:text-base">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {selectedProduct.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <Check size={20} className="text-[#E3180D] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-800 font-semibold text-sm md:text-base">{feature}</span>
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
      <section className="relative py-16 md:py-20 px-5 bg-gradient-to-br from-[#E3180D] via-[#FA7301] to-[#F3B900] text-white">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 80%, white 0%, transparent 50%)'
          }}
        ></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
              Need Custom Products?
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-8 opacity-95">
              We can design and manufacture products tailored to your exact requirements
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-gray-800 rounded-lg font-semibold shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all transform hover:-translate-y-1"
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