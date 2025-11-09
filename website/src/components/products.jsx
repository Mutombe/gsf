import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, Package, ShoppingCart, DoorOpen, Grid, Sparkles, 
  ArrowRight, X, Check, Plus, Minus, MessageCircle, Mail,
  Info, Ruler, Palette, Star, ChevronLeft, ChevronRight, 
  Building2, Square, Maximize2
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
    { id: 'counters-workstations', name: 'Counters & Workstations', icon: ShoppingCart },
    { id: 'partitions-walls', name: 'Partitions & Walls', icon: Package },
    { id: 'ceilings', name: 'Ceilings', icon: Layers },
    { id: 'windows-doors', name: 'Windows & Doors', icon: DoorOpen },
    { id: 'glass-glazing', name: 'Glass & Glazing', icon: Sparkles },
    { id: 'display-shelving', name: 'Display & Shelving', icon: Grid },
  ];

  const products = [
    // COUNTERS & WORKSTATIONS
    {
      id: 1,
      name: 'Bank Teller Counters',
      category: 'counters-workstations',
      description: 'Professional bank teller counters with security features',
      fullDescription: 'Premium bank teller counters designed for financial institutions. Features bulletproof glass panels, transaction trays, integrated cable management, and secure cash drawers. Built to banking industry standards with elegant finishes.',
      features: ['Bulletproof glass options', 'Security transaction tray', 'Cable management system', 'Lockable drawers', 'Custom branding available'],
      icon: ShoppingCart,
      price: 2850,
      rating: 4.9,
      reviews: 78,
      images: [
        'https://images.unsplash.com/photo-1554224311-beee4ade4689?w=800',
        'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Standard Counter', 
          price: 2850,
          colors: [
            { name: 'Oak', hex: '#C19A6B', available: true },
            { name: 'Walnut', hex: '#5C4033', available: true },
            { name: 'White', hex: '#FFFFFF', available: true },
          ],
          sizes: [
            { name: 'Single Station', dimensions: '150cm x 80cm x 110cm', available: true },
            { name: 'Double Station', dimensions: '300cm x 80cm x 110cm', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Premium Security Counter', 
          price: 3850,
          colors: [
            { name: 'Oak', hex: '#C19A6B', available: true },
            { name: 'Mahogany', hex: '#C04000', available: true },
          ],
          sizes: [
            { name: 'Single Station', dimensions: '150cm x 80cm x 110cm', available: true },
            { name: 'Double Station', dimensions: '300cm x 80cm x 110cm', available: true },
            { name: 'Triple Station', dimensions: '450cm x 80cm x 110cm', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Laminated wood with steel reinforcement',
        glassType: 'Bulletproof glass (optional)',
        weight: '180kg',
        warranty: '5 years',
      },
    },
    {
      id: 2,
      name: 'Office Work Stations',
      category: 'counters-workstations',
      description: 'Modern modular office workstations',
      fullDescription: 'Contemporary office workstations designed for productivity and collaboration. Features include adjustable height options, integrated power outlets, cable management, privacy screens, and ergonomic design. Perfect for open-plan offices.',
      features: ['Modular configuration', 'Cable management', 'Power outlets integrated', 'Privacy screens', 'Ergonomic design'],
      icon: Building2,
      price: 950,
      rating: 4.7,
      reviews: 203,
      images: [
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Single Desk', 
          price: 950,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
            { name: 'Grey', hex: '#808080', available: true },
            { name: 'Oak', hex: '#C19A6B', available: true },
          ],
          sizes: [
            { name: 'Compact', dimensions: '120cm x 60cm x 75cm', available: true },
            { name: 'Standard', dimensions: '160cm x 80cm x 75cm', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Cluster Workstation', 
          price: 3400,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
            { name: 'Grey', hex: '#808080', available: true },
          ],
          sizes: [
            { name: '4-Person Cluster', dimensions: '280cm x 280cm x 75cm', available: true },
            { name: '6-Person Cluster', dimensions: '320cm x 320cm x 75cm', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Laminated particle board with steel frame',
        weight: '45kg per unit',
        powerOutlets: '2 x USB, 2 x AC outlets',
        warranty: '3 years',
      },
    },

    // PARTITIONS & WALLS
    {
      id: 3,
      name: 'Demountable Partitions',
      category: 'partitions-walls',
      description: 'Flexible relocatable partition systems',
      fullDescription: 'Premium demountable partition systems perfect for creating flexible office spaces. These partitions can be easily relocated or reconfigured without damage, featuring soundproofing, glass panels, and various finish options. Ideal for modern offices requiring adaptability.',
      features: ['Easy to relocate', 'Sound insulation', 'Glass panel options', 'Minimal floor damage', 'Quick installation'],
      icon: Package,
      price: 280,
      rating: 4.8,
      reviews: 156,
      images: [
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Solid Panel', 
          price: 280,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
            { name: 'Grey', hex: '#808080', available: true },
            { name: 'Beige', hex: '#F5F5DC', available: true },
          ],
          sizes: [
            { name: 'Standard Height', dimensions: '100cm width x 240cm height', available: true },
            { name: 'Full Height', dimensions: '100cm width x 280cm height', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Glass Panel', 
          price: 420,
          colors: [
            { name: 'Clear Glass', hex: '#F0F8FF', available: true },
            { name: 'Frosted Glass', hex: '#E0E0E0', available: true },
          ],
          sizes: [
            { name: 'Standard Height', dimensions: '100cm width x 240cm height', available: true },
            { name: 'Full Height', dimensions: '100cm width x 280cm height', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Aluminum frame with MDF or glass panels',
        thickness: '65mm - 100mm',
        soundRating: 'Up to 42dB',
        warranty: '5 years',
      },
    },
    {
      id: 4,
      name: 'Dry Wall Partitions',
      category: 'partitions-walls',
      description: 'Cost-effective fixed partition solutions',
      fullDescription: 'Traditional drywall partition systems offering excellent sound insulation and fire resistance. Perfect for permanent office layouts, meeting rooms, and private spaces. Can be painted or finished to match any interior design.',
      features: ['Fire resistant', 'Excellent sound insulation', 'Paintable surface', 'Cost effective', 'Various thickness options'],
      icon: Square,
      price: 180,
      rating: 4.6,
      reviews: 189,
      images: [
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Standard Wall', 
          price: 180,
          colors: [
            { name: 'Unpainted', hex: '#F5F5F5', available: true },
          ],
          sizes: [
            { name: 'Single Layer', dimensions: 'Per sqm - 75mm thick', available: true },
            { name: 'Double Layer', dimensions: 'Per sqm - 100mm thick', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Acoustic Wall', 
          price: 250,
          colors: [
            { name: 'Unpainted', hex: '#F5F5F5', available: true },
          ],
          sizes: [
            { name: 'Enhanced Acoustic', dimensions: 'Per sqm - 100mm thick', available: true },
            { name: 'Premium Acoustic', dimensions: 'Per sqm - 150mm thick', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Gypsum board on steel studs',
        fireRating: 'Up to 2 hours',
        soundRating: 'Up to 50dB',
        warranty: '2 years',
      },
    },
    {
      id: 5,
      name: 'Wall Paneling',
      category: 'partitions-walls',
      description: 'Decorative wall paneling systems',
      fullDescription: 'Premium decorative wall paneling adding elegance and character to any space. Available in various materials including wood veneer, fabric, leather, and acoustic panels. Perfect for boardrooms, reception areas, and executive offices.',
      features: ['Premium finishes', 'Acoustic options', 'Easy maintenance', 'Various materials', 'Custom designs'],
      icon: Layers,
      price: 320,
      rating: 4.9,
      reviews: 94,
      images: [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800',
        'https://images.unsplash.com/photo-1618221739511-f78d1fa5eaae?w=800',
        'https://images.unsplash.com/photo-1615875605825-5e4e6e4e3446?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Wood Veneer', 
          price: 320,
          colors: [
            { name: 'Oak', hex: '#C19A6B', available: true },
            { name: 'Walnut', hex: '#5C4033', available: true },
            { name: 'Maple', hex: '#F5DEB3', available: true },
          ],
          sizes: [
            { name: 'Standard Panel', dimensions: 'Per sqm', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Acoustic Fabric', 
          price: 280,
          colors: [
            { name: 'Grey', hex: '#808080', available: true },
            { name: 'Navy', hex: '#000080', available: true },
            { name: 'Beige', hex: '#F5F5DC', available: true },
          ],
          sizes: [
            { name: 'Standard Panel', dimensions: 'Per sqm', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Various (wood, fabric, acoustic)',
        thickness: '15mm - 50mm',
        installation: 'Adhesive or clip system',
        warranty: '3 years',
      },
    },

    // CEILINGS
    {
      id: 6,
      name: 'Feature Ceilings',
      category: 'ceilings',
      description: 'Decorative architectural ceiling designs',
      fullDescription: 'Custom feature ceilings that create visual impact and define spaces. Options include coffered ceilings, curved designs, integrated lighting, and various finish materials. Perfect for lobbies, boardrooms, and premium spaces.',
      features: ['Custom designs', 'Integrated lighting', 'Premium finishes', 'Architectural appeal', 'Sound absorption'],
      icon: Layers,
      price: 450,
      rating: 4.8,
      reviews: 67,
      images: [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Coffered Design', 
          price: 450,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
            { name: 'Natural Wood', hex: '#C19A6B', available: true },
          ],
          sizes: [
            { name: 'Standard Module', dimensions: 'Per sqm', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Curved Design', 
          price: 650,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
            { name: 'Custom Color', hex: '#F0F0F0', available: true },
          ],
          sizes: [
            { name: 'Custom', dimensions: 'Per sqm', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Gypsum, wood, or metal',
        weight: 'Varies by design',
        installation: 'Suspended grid system',
        warranty: '3 years',
      },
    },
    {
      id: 7,
      name: 'Suspended Ceilings',
      category: 'ceilings',
      description: 'Grid-based suspended ceiling systems',
      fullDescription: 'Professional suspended ceiling systems providing easy access to services above. Features include acoustic tiles, various grid finishes, and easy maintenance. Ideal for offices, retail spaces, and commercial buildings.',
      features: ['Easy access to services', 'Acoustic properties', 'Various tile options', 'Quick installation', 'Conceals wiring & ducts'],
      icon: Grid,
      price: 85,
      rating: 4.7,
      reviews: 234,
      images: [
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Standard Grid', 
          price: 85,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
            { name: 'Black', hex: '#000000', available: true },
          ],
          sizes: [
            { name: '600x600mm tiles', dimensions: 'Per sqm', available: true },
            { name: '1200x600mm tiles', dimensions: 'Per sqm', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Acoustic Grid', 
          price: 120,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
          ],
          sizes: [
            { name: '600x600mm tiles', dimensions: 'Per sqm', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Metal grid with mineral fiber tiles',
        thickness: '15mm - 20mm',
        soundAbsorption: 'Up to 0.9 NRC',
        warranty: '5 years',
      },
    },

    // WINDOWS & DOORS
    {
      id: 8,
      name: 'Aluminum Shopfronts',
      category: 'windows-doors',
      description: 'Modern aluminum storefront systems',
      fullDescription: 'Contemporary aluminum shopfront systems combining security with style. Features powder-coated frames, large glass panels, and integrated door systems. Perfect for retail stores, showrooms, and commercial premises.',
      features: ['Powder coated finish', 'Large glass areas', 'Integrated doors', 'Weather resistant', 'Low maintenance'],
      icon: Building2,
      price: 650,
      rating: 4.9,
      reviews: 143,
      images: [
        'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
        'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800',
        'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Standard Shopfront', 
          price: 650,
          colors: [
            { name: 'Black', hex: '#000000', available: true },
            { name: 'Silver', hex: '#C0C0C0', available: true },
            { name: 'Bronze', hex: '#CD7F32', available: true },
          ],
          sizes: [
            { name: 'Single Door', dimensions: 'Per sqm', available: true },
            { name: 'Double Door', dimensions: 'Per sqm', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Premium Shopfront', 
          price: 850,
          colors: [
            { name: 'Black', hex: '#000000', available: true },
            { name: 'Custom RAL Color', hex: '#404040', available: true },
          ],
          sizes: [
            { name: 'Custom Design', dimensions: 'Per sqm', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Aluminum with powder coating',
        glassType: '10mm toughened glass',
        windLoad: 'Up to 2.4 kPa',
        warranty: '10 years',
      },
    },
    {
      id: 9,
      name: 'Sliding Folding Doors',
      category: 'windows-doors',
      description: 'Space-saving bi-fold door systems',
      fullDescription: 'Premium sliding folding door systems that maximize space and provide seamless indoor-outdoor flow. Features smooth operation, weather sealing, and various configurations. Perfect for patios, terraces, and room dividers.',
      features: ['Space saving', 'Smooth operation', 'Weather sealed', 'Various panel configurations', 'Heavy duty hardware'],
      icon: DoorOpen,
      price: 1850,
      rating: 4.8,
      reviews: 98,
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: '2-Panel System', 
          price: 1850,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
            { name: 'Grey', hex: '#808080', available: true },
            { name: 'Black', hex: '#000000', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: '2.4m wide x 2.1m high', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: '4-Panel System', 
          price: 3200,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
            { name: 'Black', hex: '#000000', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: '4.8m wide x 2.1m high', available: true },
            { name: 'Large', dimensions: '4.8m wide x 2.4m high', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Aluminum with double glazing',
        glassType: '6mm + 12mm air gap + 6mm',
        hardware: 'Stainless steel rollers',
        warranty: '5 years',
      },
    },
    {
      id: 10,
      name: 'Galaxy Patio Doors',
      category: 'windows-doors',
      description: 'Premium sliding patio door systems',
      fullDescription: 'Elegant Galaxy patio doors offering smooth sliding operation and excellent thermal performance. Features wide glass panels, minimal frames, and superior weather sealing. Perfect for residential and commercial applications.',
      features: ['Smooth sliding', 'Minimal frames', 'Energy efficient', 'Security locks', 'Various sizes'],
      icon: Maximize2,
      price: 1650,
      rating: 4.9,
      reviews: 112,
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Standard Patio Door', 
          price: 1650,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
            { name: 'Grey', hex: '#808080', available: true },
          ],
          sizes: [
            { name: '2-Panel', dimensions: '2.4m wide x 2.1m high', available: true },
            { name: '3-Panel', dimensions: '3.6m wide x 2.1m high', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Lift & Slide System', 
          price: 2850,
          colors: [
            { name: 'Black', hex: '#000000', available: true },
            { name: 'Bronze', hex: '#CD7F32', available: true },
          ],
          sizes: [
            { name: '2-Panel', dimensions: '2.4m wide x 2.4m high', available: true },
            { name: '3-Panel', dimensions: '3.6m wide x 2.4m high', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Aluminum with double glazing',
        glassType: '6mm Low-E + 16mm argon + 6mm',
        uValue: '1.6 W/m²K',
        warranty: '10 years',
      },
    },
    {
      id: 11,
      name: 'Aluminum Windows',
      category: 'windows-doors',
      description: 'Versatile aluminum window systems',
      fullDescription: 'High-quality aluminum windows available in various styles including sliding, casement, and awning. Features powder-coated frames, double glazing, and excellent weather performance. Suitable for all building types.',
      features: ['Various opening styles', 'Double glazing', 'Powder coated', 'Durable hardware', 'Energy efficient'],
      icon: Square,
      price: 420,
      rating: 4.7,
      reviews: 267,
      images: [
        'https://images.unsplash.com/photo-1545259742-12f9d9caa3d6?w=800',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Sliding Window', 
          price: 420,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
            { name: 'Black', hex: '#000000', available: true },
            { name: 'Silver', hex: '#C0C0C0', available: true },
          ],
          sizes: [
            { name: 'Small', dimensions: '1.2m x 1.2m', available: true },
            { name: 'Medium', dimensions: '1.5m x 1.5m', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Casement Window', 
          price: 480,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
            { name: 'Black', hex: '#000000', available: true },
          ],
          sizes: [
            { name: 'Small', dimensions: '1.0m x 1.2m', available: true },
            { name: 'Medium', dimensions: '1.2m x 1.5m', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Aluminum with thermal break',
        glassType: '6mm + 12mm air + 6mm',
        uValue: '2.0 W/m²K',
        warranty: '10 years',
      },
    },
    {
      id: 12,
      name: 'Frameless Glass Doors',
      category: 'windows-doors',
      description: 'Minimalist frameless glass door systems',
      fullDescription: 'Stunning frameless glass doors creating a seamless, modern aesthetic. Features 12mm toughened glass, minimal hardware, and smooth operation. Perfect for offices, showrooms, and upscale retail environments.',
      features: ['Minimalist design', '12mm toughened glass', 'Soft close mechanism', 'Various hardware finishes', 'Safety certified'],
      icon: Sparkles,
      price: 1250,
      rating: 4.9,
      reviews: 87,
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Single Door', 
          price: 1250,
          colors: [
            { name: 'Clear Glass', hex: '#F0F8FF', available: true },
            { name: 'Frosted Glass', hex: '#E0E0E0', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: '900mm x 2100mm', available: true },
            { name: 'Wide', dimensions: '1200mm x 2100mm', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Double Door', 
          price: 2200,
          colors: [
            { name: 'Clear Glass', hex: '#F0F8FF', available: true },
            { name: 'Frosted Glass', hex: '#E0E0E0', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: '1800mm x 2100mm', available: true },
            { name: 'Wide', dimensions: '2400mm x 2100mm', available: true },
          ]
        },
      ],
      specifications: {
        material: '12mm toughened glass',
        hardware: 'Stainless steel or brass',
        closeType: 'Soft close hydraulic',
        warranty: '5 years',
      },
    },
    {
      id: 13,
      name: 'Access Mantraps',
      category: 'windows-doors',
      description: 'Security mantrap entrance systems',
      fullDescription: 'High-security mantrap systems providing controlled access with interlocking doors. Features include access control integration, emergency release, and various glass and panel options. Essential for banks, data centers, and secure facilities.',
      features: ['Interlocking control', 'Access control ready', 'Emergency release', 'Bulletproof options', 'Surveillance integration'],
      icon: ShoppingCart,
      price: 8500,
      rating: 4.8,
      reviews: 34,
      images: [
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
        'https://images.unsplash.com/photo-1554224311-beee4ade4689?w=800',
        'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Standard Mantrap', 
          price: 8500,
          colors: [
            { name: 'Black', hex: '#000000', available: true },
            { name: 'Silver', hex: '#C0C0C0', available: true },
          ],
          sizes: [
            { name: 'Compact', dimensions: '1.5m x 1.5m x 2.4m', available: true },
            { name: 'Standard', dimensions: '2.0m x 2.0m x 2.4m', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Bulletproof Mantrap', 
          price: 12500,
          colors: [
            { name: 'Black', hex: '#000000', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: '2.0m x 2.0m x 2.4m', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Steel frame with glass/panel inserts',
        accessControl: 'Card reader compatible',
        safetyRating: 'EN 1627-1630',
        warranty: '3 years',
      },
    },
    {
      id: 14,
      name: 'Entrance Canopies',
      category: 'windows-doors',
      description: 'Architectural entrance canopy systems',
      fullDescription: 'Modern entrance canopies providing weather protection and architectural elegance. Available in glass, polycarbonate, and metal designs with various support systems. Creates an impressive entrance for commercial buildings.',
      features: ['Weather protection', 'Various materials', 'Custom designs', 'Integrated lighting', 'Low maintenance'],
      icon: Building2,
      price: 3500,
      rating: 4.7,
      reviews: 56,
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Glass Canopy', 
          price: 3500,
          colors: [
            { name: 'Clear Glass', hex: '#F0F8FF', available: true },
            { name: 'Tinted Glass', hex: '#708090', available: true },
          ],
          sizes: [
            { name: 'Small', dimensions: '2m x 1.5m', available: true },
            { name: 'Medium', dimensions: '3m x 2m', available: true },
            { name: 'Large', dimensions: '4m x 2.5m', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Metal Canopy', 
          price: 2800,
          colors: [
            { name: 'Black', hex: '#000000', available: true },
            { name: 'Silver', hex: '#C0C0C0', available: true },
          ],
          sizes: [
            { name: 'Small', dimensions: '2m x 1.5m', available: true },
            { name: 'Medium', dimensions: '3m x 2m', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Laminated glass or powder coated metal',
        structure: 'Stainless steel supports',
        windLoad: 'Up to 3.0 kPa',
        warranty: '5 years',
      },
    },

    // GLASS & GLAZING
    {
      id: 15,
      name: 'Curtain Walling',
      category: 'glass-glazing',
      description: 'Full height glazed façade systems',
      fullDescription: 'Premium curtain wall systems creating stunning full-height glazed facades. Features high-performance glass, thermal efficiency, and various aesthetic finishes. Perfect for modern office buildings and commercial developments.',
      features: ['Full height glazing', 'Thermal performance', 'Various grid patterns', 'Weather sealed', 'Energy efficient'],
      icon: Sparkles,
      price: 850,
      rating: 4.9,
      reviews: 76,
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Stick System', 
          price: 850,
          colors: [
            { name: 'Silver', hex: '#C0C0C0', available: true },
            { name: 'Black', hex: '#000000', available: true },
            { name: 'Bronze', hex: '#CD7F32', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: 'Per sqm', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Unitized System', 
          price: 1200,
          colors: [
            { name: 'Silver', hex: '#C0C0C0', available: true },
            { name: 'Black', hex: '#000000', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: 'Per sqm', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Aluminum with thermal break',
        glassType: 'Double or triple glazed',
        uValue: '1.2 - 1.8 W/m²K',
        warranty: '10 years',
      },
    },
    {
      id: 16,
      name: 'Flash Glazing',
      category: 'glass-glazing',
      description: 'Minimal frame structural glazing',
      fullDescription: 'Contemporary structural glazing systems with minimal visible framing, creating a seamless glass appearance. Features silicone bonding, high-performance glass, and excellent weather resistance. Ideal for modern architecture.',
      features: ['Minimal frames', 'Silicone bonded', 'Clean aesthetics', 'Structural glazing', 'Weather sealed'],
      icon: Maximize2,
      price: 920,
      rating: 4.8,
      reviews: 64,
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Structural Glazing', 
          price: 920,
          colors: [
            { name: 'Clear Glass', hex: '#F0F8FF', available: true },
            { name: 'Low-E Glass', hex: '#E8F4F8', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: 'Per sqm', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Point Fixed Glazing', 
          price: 1100,
          colors: [
            { name: 'Clear Glass', hex: '#F0F8FF', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: 'Per sqm', available: true },
          ]
        },
      ],
      specifications: {
        material: '12mm toughened or laminated glass',
        fixing: 'Silicone bonded or point fixed',
        windLoad: 'Up to 3.5 kPa',
        warranty: '10 years',
      },
    },
    {
      id: 17,
      name: 'Skylights',
      category: 'glass-glazing',
      description: 'Natural lighting roof systems',
      fullDescription: 'Premium skylight systems bringing natural light into interior spaces. Features include thermal control glass, rain sensors, motorized opening options, and various sizes. Perfect for atriums, offices, and residential applications.',
      features: ['Natural lighting', 'Thermal control glass', 'Motorized options', 'Rain sensors', 'Self-cleaning glass available'],
      icon: Sparkles,
      price: 1850,
      rating: 4.8,
      reviews: 92,
      images: [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Fixed Skylight', 
          price: 1850,
          colors: [
            { name: 'Clear Glass', hex: '#F0F8FF', available: true },
            { name: 'Solar Control', hex: '#B0C4DE', available: true },
          ],
          sizes: [
            { name: 'Small', dimensions: '1.0m x 1.0m', available: true },
            { name: 'Medium', dimensions: '1.5m x 1.5m', available: true },
            { name: 'Large', dimensions: '2.0m x 2.0m', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Opening Skylight', 
          price: 2650,
          colors: [
            { name: 'Clear Glass', hex: '#F0F8FF', available: true },
          ],
          sizes: [
            { name: 'Small', dimensions: '1.0m x 1.0m', available: true },
            { name: 'Medium', dimensions: '1.5m x 1.5m', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Aluminum frame with double glazing',
        glassType: 'Low-E with solar control',
        uValue: '1.4 W/m²K',
        warranty: '10 years',
      },
    },
    {
      id: 18,
      name: 'Louvres',
      category: 'glass-glazing',
      description: 'Ventilation and privacy louvre systems',
      fullDescription: 'Architectural louvre systems providing ventilation, privacy, and solar shading. Available in aluminum or glass with fixed or operable blades. Perfect for facades, privacy screens, and mechanical areas.',
      features: ['Ventilation control', 'Privacy screening', 'Solar shading', 'Various blade angles', 'Powder coated finish'],
      icon: Grid,
      price: 380,
      rating: 4.7,
      reviews: 118,
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Fixed Louvre', 
          price: 380,
          colors: [
            { name: 'Silver', hex: '#C0C0C0', available: true },
            { name: 'Black', hex: '#000000', available: true },
            { name: 'Bronze', hex: '#CD7F32', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: 'Per sqm', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Operable Louvre', 
          price: 650,
          colors: [
            { name: 'Silver', hex: '#C0C0C0', available: true },
            { name: 'Black', hex: '#000000', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: 'Per sqm', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Aluminum with powder coating',
        bladeSize: '100mm - 200mm',
        operation: 'Fixed or motorized',
        warranty: '5 years',
      },
    },

    // DISPLAY & SHELVING
    {
      id: 19,
      name: 'Shop Product Display',
      category: 'display-shelving',
      description: 'Versatile retail display systems',
      fullDescription: 'Comprehensive retail display systems including wall units, freestanding displays, and specialty showcases. Features adjustable shelving, integrated lighting, and various finishes. Perfect for retail stores, showrooms, and exhibitions.',
      features: ['Modular design', 'Adjustable shelves', 'LED lighting options', 'Various finishes', 'Easy reconfiguration'],
      icon: Grid,
      price: 580,
      rating: 4.8,
      reviews: 156,
      images: [
        'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
        'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Wall Display', 
          price: 580,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
            { name: 'Black', hex: '#000000', available: true },
            { name: 'Natural Wood', hex: '#C19A6B', available: true },
          ],
          sizes: [
            { name: 'Single Bay', dimensions: '1.0m x 0.4m x 2.4m', available: true },
            { name: 'Double Bay', dimensions: '2.0m x 0.4m x 2.4m', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Freestanding Display', 
          price: 750,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
            { name: 'Black', hex: '#000000', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: '1.2m x 0.6m x 1.8m', available: true },
          ]
        },
      ],
      specifications: {
        material: 'MDF with laminate or powder coated metal',
        shelfLoad: '30kg per shelf',
        lighting: 'LED strip optional',
        warranty: '3 years',
      },
    },
    {
      id: 20,
      name: 'Interior Modelling',
      category: 'display-shelving',
      description: 'Custom interior design and modeling',
      fullDescription: 'Comprehensive interior modeling services creating bespoke retail and commercial spaces. Includes custom joinery, display fixtures, reception desks, and branded elements. Full design-to-installation service.',
      features: ['Custom design', 'CAD modeling', 'Branded elements', 'Full installation', 'Project management'],
      icon: Building2,
      price: 5500,
      rating: 4.9,
      reviews: 43,
      images: [
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Basic Package', 
          price: 5500,
          colors: [
            { name: 'Custom', hex: '#FFFFFF', available: true },
          ],
          sizes: [
            { name: 'Small Space', dimensions: 'Up to 50 sqm', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Premium Package', 
          price: 12000,
          colors: [
            { name: 'Custom', hex: '#FFFFFF', available: true },
          ],
          sizes: [
            { name: 'Medium Space', dimensions: '50-150 sqm', available: true },
            { name: 'Large Space', dimensions: '150+ sqm', available: true },
          ]
        },
      ],
      specifications: {
        service: 'Design, manufacture, and installation',
        timeline: '4-12 weeks depending on size',
        includes: '3D renders, material samples, project management',
        warranty: '2 years',
      },
    },
    {
      id: 21,
      name: 'Gondola Shelves',
      category: 'display-shelving',
      description: 'Versatile double-sided retail shelving',
      fullDescription: 'Professional gondola shelving systems perfect for creating retail aisles. Features adjustable shelves, end cap capability, and various height options. Durable construction with easy assembly and reconfiguration.',
      features: ['Double-sided display', 'Adjustable shelves', 'End cap compatible', 'Various heights', 'Easy assembly'],
      icon: Package,
      price: 650,
      rating: 4.7,
      reviews: 189,
      images: [
        'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
        'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800',
        'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
      ],
      variants: [
        { 
          id: 'v1', 
          name: 'Standard Gondola', 
          price: 650,
          colors: [
            { name: 'White', hex: '#FFFFFF', available: true },
            { name: 'Grey', hex: '#808080', available: true },
            { name: 'Black', hex: '#000000', available: true },
          ],
          sizes: [
            { name: 'Low', dimensions: '1.2m x 0.9m x 1.4m', available: true },
            { name: 'Standard', dimensions: '1.2m x 0.9m x 1.8m', available: true },
            { name: 'Tall', dimensions: '1.2m x 0.9m x 2.2m', available: true },
          ]
        },
        { 
          id: 'v2', 
          name: 'Heavy Duty Gondola', 
          price: 850,
          colors: [
            { name: 'Grey', hex: '#808080', available: true },
            { name: 'Charcoal', hex: '#36454F', available: true },
          ],
          sizes: [
            { name: 'Standard', dimensions: '1.2m x 0.9m x 1.8m', available: true },
            { name: 'Tall', dimensions: '1.2m x 0.9m x 2.2m', available: true },
          ]
        },
      ],
      specifications: {
        material: 'Steel with powder coating',
        shelfLoad: '80kg per shelf',
        shelves: '4-6 adjustable shelves',
        warranty: '5 years',
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
              Professional Shopfitting Solutions
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed">
              Complete range of commercial fixtures, fittings, and architectural solutions
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
              Need Custom Solutions?
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-8 opacity-95">
              We design and manufacture custom shopfitting solutions tailored to your exact requirements
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