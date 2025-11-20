import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Store, Building2, ShoppingBag, Coffee, MapPin, Calendar, ArrowRight,
  X, Download, Share2, Facebook, Twitter, Linkedin, Mail, ExternalLink,
  ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon, Menu
} from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [curtainPosition, setCurtainPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const filters = ['all', 'retail', 'hospitality', 'commercial'];

  const projects = [
    {
      id: 0,
      title: 'CBZ Learning Centre',
      category: 'commercial',
      location: 'Harare CBD',
      date: '2024',
      description: 'Complete aluminium partitioning and custom joinery for educational facility',
      fullDescription: 'Comprehensive shopfitting project featuring powder-coated aluminium partitioning systems, custom counters with laminate finishes, and modular shelving units. Installation included suspended grid ceilings with integrated LED lighting, vinyl flooring, and glass partition walls with aluminium framing. The project delivered a modern learning environment with durable, low-maintenance finishes.',
      icon: Building2,
      stats: { area: '2000m²', duration: '3 months', fixtures: '150+', budget: '$250K' },
      beforeImage: '/placeh.png',
      afterImage: '/b.png',
      gallery: ['/c.png', '/d.png', '/e.png'],
      features: [
        'Aluminium frame partitioning',
        'Custom service counters',
        'Modular shelving systems',
        'Suspended ceiling installation',
        'Commercial vinyl flooring',
      ],
      size: 'large',
    },
    {
      id: 1,
      title: 'CBZ Pomona Branch',
      category: 'commercial',
      location: 'Pomona, Harare',
      date: '2024',
      description: 'Banking hall fitout with teller counters and security screens',
      fullDescription: 'Full banking facility shopfitting including laminated teller counters, bullet-resistant glass screens, and aluminium-framed partitions. Work comprised suspended ceilings with recessed lighting, vinyl plank flooring, and custom-fabricated stainless steel queue management barriers. All aluminium work powder-coated in corporate colors.',
      icon: Building2,
      stats: { area: '800m²', duration: '8 weeks', fixtures: '45+', budget: '$180K' },
      beforeImage: '/placeh.png',
      afterImage: '/cbzpomona/1.jpg',
      gallery: ['/cbzpomona/1.jpg', '/cbzpomona/2.jpg', '/cbzpomona/3.jpg', '/cbzpomona/4.jpg'],
      features: [
        'Teller counter fabrication',
        'Security glass installation',
        'Queue management systems',
        'ATM booth construction',
        'Branded wall cladding',
      ],
      size: 'medium',
    },
    {
      id: 2,
      title: 'First Capital Borrowdale',
      category: 'commercial',
      location: 'Borrowdale, Harare',
      date: '2024',
      description: 'Premium banking hall with custom counters and aluminium facades',
      fullDescription: 'High-end banking fitout featuring imported laminate-clad service counters, aluminium composite panel (ACP) wall cladding, and frameless glass partitions. Installation included suspended acoustic ceilings, commercial carpet tiles, stainless steel handrails, and integrated HVAC systems. All metalwork in brushed stainless steel and anodized aluminium finishes.',
      icon: Building2,
      stats: { area: '1200m²', duration: '10 weeks', fixtures: '65+', budget: '$280K' },
      beforeImage: '/placeh.png',
      afterImage: '/FirstCapitalBorrowdale-20251118T121756Z-1-001/FirstCapitalBorrowdale_.png',
      gallery: ['/FirstCapitalBorrowdale-20251118T121756Z-1-001/FirstCapitalBorrowdale_(1).png', '/FirstCapitalBorrowdale-20251118T121756Z-1-001/FirstCapitalBorrowdale_(2).png', '/FirstCapitalBorrowdale-20251118T121756Z-1-001/FirstCapitalBorrowdale.png', '/FirstCapitalBorrowdale-20251118T121756Z-1-001/WhatsAppImage2025-11-18at11.58.55(2).jpeg', '/FirstCapitalBorrowdale-20251118T121756Z-1-001/WhatsAppImage2025-11-18at11.58.55(3).jpeg'],
      features: [
        'ACP wall cladding',
        'Frameless glass partitions',
        'Executive teller stations',
        'Client consultation booths',
        'Digital signage integration',
      ],
      size: 'large',
    },
    {
      id: 3,
      title: 'Ecobank Borrowdale',
      category: 'commercial',
      location: 'Borrowdale, Harare',
      date: '2024',
      description: 'Modern banking facility with full aluminium and glass frontage',
      fullDescription: 'Contemporary bank branch featuring curtain wall glazing system, powder-coated aluminium shopfront, and interior glass partitions with aluminium frames. Shopfitting included laminated service counters, suspended ceilings with LED downlights, porcelain floor tiles, and custom-fabricated aluminium signage.',
      icon: Building2,
      stats: { area: '900m²', duration: '9 weeks', fixtures: '50+', budget: '$220K' },
      beforeImage: '/placeh.png',
      afterImage: '/EcobankBorrowdale/1.jpeg',
      gallery: ['/EcobankBorrowdale/1.png', '/EcobankBorrowdale/2.jpeg', '/EcobankBorrowdale/3.jpeg', '/EcobankBorrowdale/4.jpeg', '/EcobankBorrowdale/5.jpeg'],
      features: [
        'Curtain wall glazing',
        'Aluminium shopfront system',
        'Banking counter fabrication',
        'Floor-to-ceiling partitions',
        'Automated entrance doors',
      ],
      size: 'large',
    },
    {
      id: 4,
      title: 'Ecobank Gweru',
      category: 'commercial',
      location: 'Gweru CBD',
      date: '2024',
      description: 'Full branch fitout with security features and custom joinery',
      fullDescription: 'Complete banking fitout with reinforced service counters, security glass screens, and aluminium partitioning. Work scope included suspended T-bar ceilings, vinyl flooring installation, stainless steel fixtures, and powder-coated aluminium window frames. Branch includes secure cash handling area with enhanced security features.',
      icon: Building2,
      stats: { area: '750m²', duration: '7 weeks', fixtures: '40+', budget: '$165K' },
      beforeImage: '/placeh.png',
      afterImage: '/EcobankGweru/1.jpg',
      gallery: ['/EcobankGweru/2.jpg', '/EcobankGweru/3.jpg', '/EcobankGweru/4.jpg', '/EcobankGweru/5.jpg', '/EcobankGweru/6.jpg', '/EcobankGweru/7.jpg'],
      features: [
        'Security counter systems',
        'Reinforced partitioning',
        'Safe room construction',
        'Access control integration',
        'Corporate branding elements',
      ],
      size: 'medium',
    },
    {
      id: 5,
      title: 'NMB Malborough',
      category: 'commercial',
      location: 'Malborough, Harare',
      date: '2024',
      description: 'Banking hall refurbishment with modern aluminium finishes',
      fullDescription: 'Bank branch renovation featuring new laminated counters, aluminium-framed glass partitions, and ACP external cladding. Installation comprised suspended ceiling grid system, commercial-grade vinyl flooring, LED lighting fixtures, and custom-fabricated stainless steel and aluminium fittings throughout.',
      icon: Building2,
      stats: { area: '850m²', duration: '8 weeks', fixtures: '48+', budget: '$195K' },
      beforeImage: '/placeh.png',
      afterImage: '/nmbmalbrough/1.jpeg',
      gallery: ['/nmbmalbrough/7.jpeg', '/nmbmalbrough/2.jpeg', '/nmbmalbrough/3.jpeg', '/nmbmalbrough/4.jpeg', '/nmbmalbrough/5.jpeg', '/nmbmalbrough/6.jpeg'],
      features: [
        'Counter refurbishment',
        'Glass partition installation',
        'External ACP cladding',
        'Interior signage',
        'Lighting system upgrade',
      ],
      size: 'medium',
    },
    {
      id: 6,
      title: 'Steward Bank Bulawayo',
      category: 'commercial',
      location: 'Bulawayo CBD',
      date: '2024',
      description: 'Complete banking facility with aluminium shopfront and interiors',
      fullDescription: 'Full-service bank fitout including aluminium shopfront glazing, teller counter fabrication with laminate cladding, and frameless glass office partitions. Project encompassed suspended ceilings, porcelain tiles, custom aluminium signage, and integrated security systems. All metalwork in corporate-specified powder coat finishes.',
      icon: Building2,
      stats: { area: '950m²', duration: '9 weeks', fixtures: '55+', budget: '$230K' },
      beforeImage: '/placeh.png',
      afterImage: '/stewardbank/1.jpg',
      gallery: ['/stewardbank/2.jpg', '/stewardbank/3.jpg', '/stewardbank/4.jpg', '/stewardbank/5.jpg', '/stewardbank/6.jpg', '/stewardbank/7.jpg', '/stewardbank/8.jpg'],
      features: [
        'Shopfront glazing system',
        'Banking counter fabrication',
        'Office partitioning',
        'ATM installation',
        'Corporate signage package',
      ],
      size: 'large',
    },
    {
      id: 7,
      title: 'KFC Greenfields',
      category: 'hospitality',
      location: 'Greenfields Shopping Centre',
      date: '2025',
      description: 'Fast food restaurant with stainless steel kitchen and service counters',
      fullDescription: 'Complete QSR fitout featuring stainless steel service counters, commercial kitchen installation, and branded wall cladding. Shopfitting included suspended ceilings with extract ventilation, non-slip floor tiles, aluminium-framed menu boards, and outdoor seating with powder-coated aluminium furniture.',
      icon: Coffee,
      stats: { area: '400m²', duration: '6 weeks', fixtures: '80+', budget: '$150K' },
      beforeImage: '/placeh.png',
      afterImage: '/kfcgreenfields/1.jpeg',
      gallery: ['/kfcgreenfields/2.jpeg', '/kfcgreenfields/3.jpeg', '/kfcgreenfields/4.jpeg'],
      features: [
        'Stainless steel counter fabrication',
        'Commercial kitchen fitout',
        'Extract ventilation system',
        'Digital menu board mounting',
        'Outdoor furniture installation',
      ],
      size: 'medium',
    },
    {
      id: 8,
      title: 'Hungry Lion Greenfields',
      category: 'hospitality',
      location: 'Greenfields Shopping Centre',
      date: '2025',
      description: 'QSR outlet with full kitchen and counter systems',
      fullDescription: 'Fast food restaurant shopfitting with laminated service counters, stainless steel kitchen equipment installation, and branded interior finishes. Work included suspended ceilings with integrated lighting, anti-slip flooring, aluminium signage fabrication, and custom-made outdoor seating structures.',
      icon: Coffee,
      stats: { area: '380m²', duration: '5 weeks', fixtures: '70+', budget: '$135K' },
      beforeImage: '/placeh.png',
      afterImage: '/hungryliongreenfields/1.jpg',
      gallery: ['/hungryliongreenfields/2.jpg', '/hungryliongreenfields/3.jpg', '/hungryliongreenfields/4.jpg','/hungryliongreenfields/5.jpg', '/hungryliongreenfields/6.jpg', '//hungryliongreenfields/7.jpg',],
      features: [
        'Food service counter systems',
        'Kitchen equipment installation',
        'Branded wall graphics',
        'Seating area fabrication',
        'Drive-through window',
      ],
      size: 'medium',
    },
    {
      id: 9,
      title: 'Greenfields Smoke House',
      category: 'hospitality',
      location: 'Greenfields Shopping Centre',
      date: '2024',
      description: 'Restaurant fitout with custom bar and kitchen installations',
      fullDescription: 'Full-service restaurant featuring custom-fabricated bar counter with granite top, stainless steel commercial kitchen, and timber-look laminate dining furniture. Installation included acoustic suspended ceilings, porcelain floor tiles, aluminium-framed glass doors, and bespoke lighting fixtures.',
      icon: Coffee,
      stats: { area: '500m²', duration: '8 weeks', fixtures: '95+', budget: '$185K' },
      beforeImage: '/placeh.png',
      afterImage: '/greenfieldssmokehouse/1.jpg',
      gallery: ['/greenfieldssmokehouse/2.jpg', '/greenfieldssmokehouse/3.jpg', '/greenfieldssmokehouse/4.jpg', '/greenfieldssmokehouse/5.jpeg', '/greenfieldssmokehouse/6.jpeg'],
      features: [
        'Custom bar fabrication',
        'Commercial kitchen setup',
        'Restaurant furniture',
        'Acoustic ceiling installation',
        'Outdoor patio construction',
      ],
      size: 'large',
    },
    {
      id: 10,
      title: 'Smoke House Sam Levy\'s',
      category: 'hospitality',
      location: 'Sam Levy\'s Village',
      date: '2024',
      description: 'Upscale restaurant with premium finishes and custom joinery',
      fullDescription: 'Premium restaurant fitout with bespoke timber and aluminium joinery, granite-topped service stations, and stainless steel kitchen installations. Project included feature suspended ceilings, imported floor tiles, frameless glass wine displays, and custom-designed aluminium and timber furniture pieces.',
      icon: Coffee,
      stats: { area: '650m²', duration: '10 weeks', fixtures: '120+', budget: '$245K' },
      beforeImage: '/placeh.png',
      afterImage: '/smokehousesamlevy/1.jpg',
      gallery: ['/smokehousesamlevy/2.jpg', '/smokehousesamlevy/3.jpg', '/smokehousesamlevy/4.jpg', '/smokehousesamlevy/5.jpg', '/smokehousesamlevy/6.jpg'],
      features: [
        'Bespoke joinery work',
        'Feature bar installation',
        'Wine cellar display',
        'Premium floor finishes',
        'Outdoor dining area',
      ],
      size: 'large',
    },
    {
      id: 11,
      title: 'Greenfields Cafe Nush',
      category: 'hospitality',
      location: 'Greenfields Shopping Centre',
      date: '2024',
      description: 'Contemporary café with display counters and seating',
      fullDescription: 'Modern café shopfitting featuring laminated display counters with glass sneeze guards, refrigerated cake display units, and custom seating furniture. Installation included suspended ceilings, vinyl flooring, aluminium-framed entrance doors, and feature lighting over service areas.',
      icon: Coffee,
      stats: { area: '280m²', duration: '5 weeks', fixtures: '55+', budget: '$95K' },
      beforeImage: '/placeh.png',
      afterImage: '/greenfieldscafenush/1.jpg',
      gallery: ['/greenfieldscafenush/2.jpg', '/greenfieldscafenush/3.jpg', '/greenfieldscafenush/4.jpg', '/greenfieldscafenush/5.jpg'],
      features: [
        'Display counter fabrication',
        'Refrigerated showcases',
        'Custom café furniture',
        'Coffee bar installation',
        'Outdoor seating area',
      ],
      size: 'small',
    },
    {
      id: 12,
      title: 'Avenues Clinic',
      category: 'commercial',
      location: 'Avenues, Harare',
      date: '2024',
      description: 'Medical facility with reception counters and consultation rooms',
      fullDescription: 'Healthcare facility fitout featuring laminated reception counters, aluminium-framed glass partitions for consultation rooms, and medical-grade vinyl flooring. Work included suspended ceilings with hygienic finishes, specialized lighting, stainless steel hand wash stations, and custom-fabricated waiting area furniture.',
      icon: Building2,
      stats: { area: '600m²', duration: '7 weeks', fixtures: '70+', budget: '$145K' },
      beforeImage: '/placeh.png',
      afterImage: '/avenues/1.jpg',
      gallery: ['/avenues/2.jpg', '/avenues/3.jpg', '/avenues/4.jpg'],
      features: [
        'Reception counter fabrication',
        'Medical room partitioning',
        'Hygienic ceiling systems',
        'Medical-grade flooring',
        'Custom waiting area furniture',
      ],
      size: 'medium',
    },
    {
      id: 13,
      title: '8 Whitesway Workshop',
      category: 'commercial',
      location: 'Industrial Sites, Harare',
      date: '2024',
      description: 'Workshop facility with aluminium framing and industrial finishes',
      fullDescription: 'Industrial workshop fitout with steel-framed aluminium-clad partitions, epoxy floor coatings, and overhead gantry installations. Project included office partition walls with aluminium frames, suspended industrial ceilings, mezzanine floor construction, and heavy-duty workbench fabrication.',
      icon: Building2,
      stats: { area: '1500m²', duration: '12 weeks', fixtures: '85+', budget: '$195K' },
      beforeImage: '/placeh.png',
      afterImage: '/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0039.jpg',
      gallery: ['/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0041.jpg', '/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0043.jpg', '/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0045.jpg', '/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0047.jpg', '/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0049.jpg', '/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0055.jpg'],
      features: [
        'Industrial partitioning',
        'Epoxy floor coating',
        'Mezzanine construction',
        'Workbench fabrication',
        'Overhead storage systems',
      ],
      size: 'large',
    },
    {
      id: 14,
      title: 'RADX Weaver',
      category: 'commercial',
      location: 'Weaver, Harare',
      date: '2025',
      description: 'Commercial office space with modern aluminium finishes',
      fullDescription: 'Corporate office fitout featuring aluminium-framed glass partitions, laminated workstations, and suspended ceiling systems. Installation comprised vinyl plank flooring, custom reception counter with company branding, meeting room furniture, and integrated electrical and data cabling systems.',
      icon: Building2,
      stats: { area: '700m²', duration: '8 weeks', fixtures: '90+', budget: '$175K' },
      beforeImage: '/placeh.png',
      afterImage: '/radxweaver/1.jpeg',
      gallery: ['/radxweaver/2.jpeg', '/radxweaver/3.jpeg'],
      features: [
        'Glass office partitions',
        'Workstation fabrication',
        'Reception counter design',
        'Meeting room furniture',
        'Cable management systems',
      ],
      size: 'medium',
    },
    {
      id: 15,
      title: 'ZB Rotten Row',
      category: 'commercial',
      location: 'Rotten Row, Harare',
      date: '2024',
      description: 'Banking branch with security features and custom counters',
      fullDescription: 'Bank branch shopfitting with reinforced teller counters, bullet-proof glass screens, and aluminium partitioning systems. Project scope included suspended ceilings, porcelain floor tiles, secure vault area construction, ATM booth installation, and corporate signage fabrication with LED illumination.',
      icon: Building2,
      stats: { area: '820m²', duration: '9 weeks', fixtures: '52+', budget: '$205K' },
      beforeImage: '/placeh.png',
      afterImage: '/placeh.png',
      gallery: ['/placeh.png', '/placeh.png'],
      features: [
        'Secure counter systems',
        'Bullet-resistant glazing',
        'Vault area construction',
        'ATM enclosure fabrication',
        'LED signage installation',
      ],
      size: 'medium',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Handle curtain drag for desktop
  const handleMouseMove = (e) => {
    if (!isDragging || isMobile) return;
    const modal = e.currentTarget;
    const rect = modal.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setCurtainPosition(Math.max(0, Math.min(100, percent)));
  };

  // Handle touch for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const modal = e.currentTarget;
    const rect = modal.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setCurtainPosition(Math.max(0, Math.min(100, percent)));
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  // Handle brochure download
  const handleDownloadBrochure = async (project) => {
    try {
      // Dynamic import of jsPDF
      const { jsPDF } = await import('jspdf');
      
      const doc = new jsPDF('p', 'mm', 'a4');
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 15;
      const contentWidth = pageWidth - (2 * margin);
      let yPosition = margin;

      // Helper function to add new page if needed
      const checkAndAddPage = (requiredHeight) => {
        if (yPosition + requiredHeight > pageHeight - margin) {
          doc.addPage();
          yPosition = margin;
          return true;
        }
        return false;
      };

      // Helper function to load image as base64
      const getImageData = (url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'Anonymous';
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL('image/jpeg', 0.8));
          };
          img.onerror = () => resolve(null);
          img.src = url;
        });
      };

      // Header with gradient background
      doc.setFillColor(227, 24, 13);
      doc.rect(0, 0, pageWidth, 50, 'F');
      
      // Company name/logo area
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(24);
      doc.setFont(undefined, 'bold');
      doc.text('PROJECT BROCHURE', pageWidth / 2, 20, { align: 'center' });
      
      // Project title
      doc.setFontSize(18);
      doc.text(project.title, pageWidth / 2, 35, { align: 'center' });
      
      yPosition = 60;

      // Project info section
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      
      const infoText = `${project.location} • ${project.date} • ${project.category.toUpperCase()}`;
      doc.text(infoText, pageWidth / 2, yPosition, { align: 'center' });
      
      yPosition += 15;

      // Stats section
      doc.setFillColor(245, 245, 245);
      doc.rect(margin, yPosition, contentWidth, 30, 'F');
      
      doc.setFontSize(9);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(102, 102, 102);
      
      const statsEntries = Object.entries(project.stats);
      const statWidth = contentWidth / statsEntries.length;
      
      statsEntries.forEach(([key, value], index) => {
        const xPos = margin + (index * statWidth) + (statWidth / 2);
        doc.text(key.toUpperCase(), xPos, yPosition + 10, { align: 'center' });
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(value, xPos, yPosition + 20, { align: 'center' });
        doc.setFontSize(9);
        doc.setTextColor(102, 102, 102);
      });
      
      yPosition += 40;

      // Before/After Images
      checkAndAddPage(85);
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(227, 24, 13);
      doc.text('BEFORE & AFTER', margin, yPosition);
      yPosition += 8;

      // Load and add before image
      const beforeImageData = await getImageData(project.beforeImage);
      if (beforeImageData) {
        doc.text('Before:', margin, yPosition, { fontSize: 10 });
        yPosition += 5;
        doc.addImage(beforeImageData, 'JPEG', margin, yPosition, contentWidth / 2 - 5, 60);
      }

      // Load and add after image
      const afterImageData = await getImageData(project.afterImage);
      if (afterImageData) {
        doc.text('After:', pageWidth / 2 + 5, yPosition - 5, { fontSize: 10 });
        doc.addImage(afterImageData, 'JPEG', pageWidth / 2 + 5, yPosition, contentWidth / 2 - 5, 60);
      }
      
      yPosition += 70;

      // Description section
      checkAndAddPage(40);
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(227, 24, 13);
      doc.text('PROJECT OVERVIEW', margin, yPosition);
      yPosition += 8;

      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      doc.setTextColor(0, 0, 0);
      const splitDescription = doc.splitTextToSize(project.fullDescription, contentWidth);
      doc.text(splitDescription, margin, yPosition);
      yPosition += splitDescription.length * 5 + 10;

      // Features section
      checkAndAddPage(40);
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(227, 24, 13);
      doc.text('KEY FEATURES', margin, yPosition);
      yPosition += 8;

      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      doc.setTextColor(0, 0, 0);
      
      project.features.forEach((feature) => {
        checkAndAddPage(10);
        doc.setFillColor(227, 24, 13);
        doc.circle(margin + 2, yPosition - 1.5, 1.5, 'F');
        doc.text(feature, margin + 6, yPosition);
        yPosition += 7;
      });

      yPosition += 10;

      // Gallery section
      if (project.gallery && project.gallery.length > 0) {
        checkAndAddPage(85);
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(227, 24, 13);
        doc.text('PROJECT GALLERY', margin, yPosition);
        yPosition += 8;

        const imagesPerRow = 2;
        const imageWidth = (contentWidth - 10) / imagesPerRow;
        const imageHeight = 50;
        
        for (let i = 0; i < Math.min(project.gallery.length, 6); i++) {
          const col = i % imagesPerRow;
          const row = Math.floor(i / imagesPerRow);
          
          if (col === 0 && i > 0) {
            yPosition += imageHeight + 5;
            checkAndAddPage(imageHeight + 10);
          }
          
          const xPos = margin + (col * (imageWidth + 5));
          const galleryImageData = await getImageData(project.gallery[i]);
          
          if (galleryImageData) {
            doc.addImage(galleryImageData, 'JPEG', xPos, yPosition, imageWidth, imageHeight);
          }
        }
        
        yPosition += imageHeight + 10;
      }

      // Footer
      const totalPages = doc.internal.pages.length - 1;
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text(
          `Global Shopfitters Zimbabwe • Page ${i} of ${totalPages}`,
          pageWidth / 2,
          pageHeight - 10,
          { align: 'center' }
        );
      }

      // Save the PDF
      const filename = `${project.title.replace(/\s+/g, '_')}_Brochure.pdf`;
      doc.save(filename);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating brochure. Please try again.');
    }
  };

  // Handle share
  const handleShare = (platform, project) => {
    const url = window.location.href;
    const text = `Check out ${project.title} - ${project.description}`;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(project.title)}&body=${encodeURIComponent(text + ' ' + url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
    setShowShareMenu(false);
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: isMobile ? '80px 16px 60px' : '120px 20px',
        minHeight: isMobile ? '50vh' : '70vh',
        display: 'flex',
        alignItems: 'center',
        color: colors.white,
        overflow: 'hidden',
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/GSZOn-site/14.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
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

        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto',
          width: '100%',
          position: 'relative', 
          zIndex: 10,
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '896px', margin: '0 auto' }}
          >
            <h1 style={{
              fontSize: isMobile ? '2.5rem' : 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: isMobile ? '16px' : '24px',
            }}>
              Our Projects
            </h1>
            <p style={{
              fontSize: isMobile ? '1.125rem' : 'clamp(1.25rem, 3vw, 1.75rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: '1.6',
              padding: isMobile ? '0 8px' : '0',
            }}>
              Showcasing our commitment to excellence in every project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section style={{
        padding: isMobile ? '20px 16px' : '32px 20px',
        background: colors.white,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: isMobile ? '60px' : '72px',
        zIndex: 30,
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: isMobile ? '8px' : '12px', 
            justifyContent: 'center',
          }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: isMobile ? '10px 18px' : '12px 24px',
                  borderRadius: '5px',
                  fontWeight: '600',
                  textTransform: 'capitalize',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: activeFilter === filter
                    ? `linear-gradient(90deg, ${colors.chiliRed}, ${colors.scarlet})`
                    : colors.lightGray,
                  color: activeFilter === filter ? colors.white : colors.darkGray,
                  boxShadow: activeFilter === filter ? `0 4px 15px ${colors.chiliRed}40` : 'none',
                  transform: activeFilter === filter ? 'scale(1.05)' : 'scale(1)',
                  fontSize: isMobile ? '13px' : '14px',
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{
        padding: isMobile ? '40px 16px' : '80px 20px',
        background: colors.lightGray,
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? '20px' : '24px',
          }}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                style={{
                  background: colors.white,
                  borderRadius: '5px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Section */}
                <div style={{ 
                  position: 'relative', 
                  height: isMobile ? '200px' : '250px',
                  background: `linear-gradient(135deg, ${colors.peach} 0%, ${colors.sunset} 100%)`,
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${project.afterImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}></div>
                  
                  {/* Date Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: isMobile ? '4px 12px' : '6px 14px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '5px',
                    fontSize: isMobile ? '11px' : '12px',
                    fontWeight: '700',
                    color: colors.darkGray,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  }}>
                    {project.date}
                  </div>

                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    padding: isMobile ? '4px 12px' : '6px 14px',
                    background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
                    borderRadius: '5px',
                    fontSize: isMobile ? '10px' : '11px',
                    fontWeight: '700',
                    color: colors.white,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    {project.category}
                  </div>
                </div>

                {/* Content Section */}
                <div style={{ padding: isMobile ? '16px' : '20px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    fontSize: isMobile ? '12px' : '13px',
                    color: colors.mediumGray,
                    marginBottom: '8px',
                  }}>
                    <MapPin size={isMobile ? 12 : 14} style={{ color: colors.chiliRed }} />
                    <span>{project.location}</span>
                  </div>
                  
                  <h3 style={{ 
                    fontSize: isMobile ? '1.125rem' : '1.25rem',
                    fontWeight: '800', 
                    color: colors.darkGray, 
                    marginBottom: '8px',
                    lineHeight: '1.2',
                  }}>
                    {project.title}
                  </h3>
                  
                  <p style={{ 
                    color: colors.mediumGray, 
                    lineHeight: '1.5',
                    fontSize: isMobile ? '13px' : '14px',
                  }}>
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(8px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: isMobile ? 'flex-start' : 'center',
              justifyContent: 'center',
              padding: isMobile ? '0' : '20px',
              overflowY: 'auto',
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              style={{
                background: colors.white,
                borderRadius: isMobile ? '0' : '5px',
                maxWidth: '1200px',
                width: '100%',
                maxHeight: isMobile ? '100vh' : '90vh',
                overflowY: 'auto',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'sticky',
                  top: isMobile ? '12px' : '20px',
                  left: '100%',
                  transform: isMobile ? 'translateX(-28px)' : 'translateX(-40px)',
                  width: isMobile ? '40px' : '48px',
                  height: isMobile ? '40px' : '48px',
                  borderRadius: '5px',
                  background: colors.white,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  zIndex: 10,
                }}
              >
                <X size={isMobile ? 20 : 24} style={{ color: colors.darkGray }} />
              </button>

              {/* Before/After Slider */}
              <div 
                style={{
                  position: 'relative',
                  height: isMobile ? '300px' : '500px',
                  overflow: 'hidden',
                  cursor: isMobile ? 'grab' : 'ew-resize',
                  userSelect: 'none',
                  touchAction: 'none',
                }}
                onMouseMove={handleMouseMove}
                onMouseDown={() => !isMobile && setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* After Image */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${selectedProject.afterImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}></div>

                {/* Before Image */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${selectedProject.beforeImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  clipPath: `inset(0 ${100 - curtainPosition}% 0 0)`,
                }}></div>

                {/* Slider Line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: `${curtainPosition}%`,
                  width: '4px',
                  background: colors.white,
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
                  transform: 'translateX(-50%)',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: isMobile ? '40px' : '48px',
                    height: isMobile ? '40px' : '48px',
                    borderRadius: '5px',
                    background: colors.white,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2px',
                  }}>
                    <ChevronLeft size={isMobile ? 16 : 20} style={{ color: colors.chiliRed }} />
                    <ChevronRight size={isMobile ? 16 : 20} style={{ color: colors.chiliRed }} />
                  </div>
                </div>

                {/* Labels */}
                <div style={{
                  position: 'absolute',
                  top: isMobile ? '12px' : '20px',
                  left: isMobile ? '12px' : '20px',
                  padding: isMobile ? '6px 12px' : '8px 16px',
                  background: 'rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '5px',
                  color: colors.white,
                  fontWeight: '700',
                  fontSize: isMobile ? '12px' : '14px',
                }}>
                  BEFORE
                </div>
                <div style={{
                  position: 'absolute',
                  top: isMobile ? '12px' : '20px',
                  right: isMobile ? '12px' : '20px',
                  padding: isMobile ? '6px 12px' : '8px 16px',
                  background: 'rgba(227, 24, 13, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '5px',
                  color: colors.white,
                  fontWeight: '700',
                  fontSize: isMobile ? '12px' : '14px',
                }}>
                  AFTER
                </div>
              </div>

              {/* Project Details */}
              <div style={{ padding: isMobile ? '24px 16px' : '40px' }}>
                {/* Header */}
                <div style={{ marginBottom: isMobile ? '24px' : '32px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    gap: '12px', 
                    marginBottom: '16px',
                    flexWrap: isMobile ? 'wrap' : 'nowrap',
                  }}>
                    <div style={{
                      width: isMobile ? '48px' : '56px',
                      height: isMobile ? '48px' : '56px',
                      borderRadius: '5px',
                      background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.amber})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <selectedProject.icon size={isMobile ? 24 : 28} style={{ color: colors.white }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h2 style={{ 
                        fontSize: isMobile ? '1.5rem' : '2rem',
                        fontWeight: '800', 
                        color: colors.darkGray, 
                        marginBottom: '4px',
                        wordBreak: 'break-word',
                      }}>
                        {selectedProject.title}
                      </h2>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: isMobile ? '8px' : '12px',
                        color: colors.mediumGray,
                        fontSize: isMobile ? '13px' : '14px',
                        flexWrap: 'wrap',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <MapPin size={14} />
                          <span>{selectedProject.location}</span>
                        </div>
                        <span>•</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Calendar size={14} />
                          <span>{selectedProject.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons - Full width on mobile */}
                    <div style={{ 
                      display: 'flex', 
                      gap: '8px',
                      width: isMobile ? '100%' : 'auto',
                      marginTop: isMobile ? '12px' : '0',
                    }}>
                      {/* Share Button */}
                      <div style={{ position: 'relative', flex: isMobile ? 1 : 'initial' }}>
                        <button
                          onClick={() => setShowShareMenu(!showShareMenu)}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            padding: isMobile ? '10px 16px' : '12px 20px',
                            background: colors.lightGray,
                            color: colors.darkGray,
                            borderRadius: '5px',
                            fontWeight: '600',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: isMobile ? '13px' : '14px',
                            width: isMobile ? '100%' : 'auto',
                          }}
                        >
                          <Share2 size={16} />
                          {!isMobile && <span>Share</span>}
                        </button>

                        {/* Share Menu */}
                        {showShareMenu && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                              position: 'absolute',
                              top: '100%',
                              right: 0,
                              marginTop: '8px',
                              background: colors.white,
                              borderRadius: '5px',
                              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                              padding: '8px',
                              minWidth: isMobile ? '180px' : '200px',
                              zIndex: 100,
                            }}
                          >
                            {[
                              { icon: Facebook, label: 'Facebook', platform: 'facebook', color: '#1877F2' },
                              { icon: FaXTwitter, label: 'Twitter', platform: 'twitter', color: '#1DA1F2' },
                              { icon: Linkedin, label: 'LinkedIn', platform: 'linkedin', color: '#0A66C2' },
                              { icon: Mail, label: 'Email', platform: 'email', color: colors.mediumGray },
                            ].map((item) => (
                              <button
                                key={item.platform}
                                onClick={() => handleShare(item.platform, selectedProject)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '12px',
                                  width: '100%',
                                  padding: isMobile ? '10px' : '12px',
                                  background: 'transparent',
                                  border: 'none',
                                  borderRadius: '5px',
                                  cursor: 'pointer',
                                  fontSize: isMobile ? '13px' : '14px',
                                  fontWeight: '600',
                                  color: colors.darkGray,
                                }}
                              >
                                <item.icon size={16} style={{ color: item.color }} />
                                <span>{item.label}</span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </div>

                      {/* Download Brochure Button */}
                      <button
                        onClick={() => handleDownloadBrochure(selectedProject)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: isMobile ? '10px 16px' : '12px 20px',
                          background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
                          color: colors.white,
                          borderRadius: '5px',
                          fontWeight: '600',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: isMobile ? '13px' : '14px',
                          flex: isMobile ? 1 : 'initial',
                        }}
                      >
                        <Download size={16} />
                        {!isMobile && <span>Brochure</span>}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: isMobile ? '12px' : '20px',
                  marginBottom: isMobile ? '24px' : '32px',
                  padding: isMobile ? '16px' : '24px',
                  background: colors.lightGray,
                  borderRadius: '5px',
                }}>
                  {Object.entries(selectedProject.stats).map(([key, value]) => (
                    <div key={key} style={{ textAlign: 'center' }}>
                      <p style={{ 
                        fontSize: isMobile ? '10px' : '12px',
                        color: colors.mediumGray, 
                        marginBottom: '4px',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        letterSpacing: '0.5px',
                      }}>
                        {key}
                      </p>
                      <p style={{ 
                        fontSize: isMobile ? '16px' : '20px',
                        fontWeight: '800', 
                        color: colors.darkGray,
                      }}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div style={{ marginBottom: isMobile ? '24px' : '32px' }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.125rem' : '1.25rem',
                    fontWeight: '700', 
                    color: colors.darkGray, 
                    marginBottom: '12px',
                  }}>
                    Project Overview
                  </h3>
                  <p style={{ 
                    color: colors.mediumGray, 
                    lineHeight: '1.8',
                    fontSize: isMobile ? '14px' : '15px',
                  }}>
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div style={{ marginBottom: isMobile ? '24px' : '32px' }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.125rem' : '1.25rem',
                    fontWeight: '700', 
                    color: colors.darkGray, 
                    marginBottom: '16px',
                  }}>
                    Key Features
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '12px',
                  }}>
                    {selectedProject.features.map((feature, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: isMobile ? '10px 14px' : '12px 16px',
                          background: colors.white,
                          border: `2px solid ${colors.lightGray}`,
                          borderRadius: '5px',
                        }}
                      >
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '5px',
                          background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.amber})`,
                          flexShrink: 0,
                        }}></div>
                        <span style={{ 
                          color: colors.darkGray, 
                          fontWeight: '600',
                          fontSize: isMobile ? '13px' : '14px',
                        }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div style={{ marginBottom: isMobile ? '24px' : '32px' }}>
                    <h3 style={{ 
                      fontSize: isMobile ? '1.125rem' : '1.25rem',
                      fontWeight: '700', 
                      color: colors.darkGray, 
                      marginBottom: '16px',
                    }}>
                      Project Gallery
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '16px',
                    }}>
                      {selectedProject.gallery.map((image, idx) => (
                        <div
                          key={idx}
                          style={{
                            position: 'relative',
                            height: isMobile ? '180px' : '200px',
                            borderRadius: '5px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                          }}
                        >
                          <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div style={{
                  padding: isMobile ? '24px 16px' : '32px',
                  background: `linear-gradient(135deg, ${colors.chiliRed}15, ${colors.amber}15)`,
                  borderRadius: '5px',
                  textAlign: 'center',
                }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.25rem' : '1.5rem',
                    fontWeight: '700', 
                    color: colors.darkGray, 
                    marginBottom: '12px',
                  }}>
                    Interested in a Similar Project?
                  </h3>
                  <p style={{ 
                    color: colors.mediumGray, 
                    marginBottom: '24px',
                    fontSize: isMobile ? '14px' : '15px',
                  }}>
                    Let's discuss how we can bring your vision to life
                  </p>
                  <button
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: isMobile ? '12px 24px' : '14px 32px',
                      background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
                      color: colors.white,
                      borderRadius: '5px',
                      fontWeight: '600',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: isMobile ? '14px' : '15px',
                    }}
                  >
                    <span>Contact Us</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section style={{
        padding: isMobile ? '60px 16px' : '80px 20px',
        background: `linear-gradient(135deg, ${colors.chiliRed} 0%, ${colors.safetyOrange} 50%, ${colors.amber} 100%)`,
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: `radial-gradient(circle at 20% 50%, ${colors.white} 0%, transparent 50%), radial-gradient(circle at 80% 80%, ${colors.white} 0%, transparent 50%)`,
        }}></div>

        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto',
          position: 'relative', 
          zIndex: 10,
        }}>
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
              fontSize: isMobile ? '1.75rem' : 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '800',
              marginBottom: isMobile ? '16px' : '24px',
              lineHeight: '1.2',
            }}>
              Ready to Start Your Project?
            </h2>
            <p style={{ 
              fontSize: isMobile ? '1rem' : 'clamp(1rem, 2vw, 1.25rem)',
              marginBottom: isMobile ? '24px' : '32px',
              opacity: 0.95,
            }}>
              Let's create something amazing together
            </p>
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: isMobile ? '12px 28px' : '14px 32px',
                background: colors.white,
                color: colors.darkGray,
                borderRadius: '5px',
                fontWeight: '600',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                border: 'none',
                cursor: 'pointer',
                fontSize: isMobile ? '14px' : '15px',
              }}
            >
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;