import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Package,
  ShoppingCart,
  DoorOpen,
  Grid,
  Sparkles,
  ArrowRight,
  X,
  Check,
  MessageCircle,
  Mail,
  Info,
  Star,
  ChevronLeft,
  ChevronRight,
  Building2,
  Square,
  Maximize2,
  FileText,
  MapPin,
  Calendar,
  Ruler,
  AlertCircle,
  Cog,
} from "lucide-react";
import { useLanguage } from "./lunguageContext";

const Products = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Project inquiry form state
  const [projectInfo, setProjectInfo] = useState({
    projectType: "",
    buildingType: "",
    spaceDimensions: "",
    estimatedArea: "",
    timeline: "",
    hasDrawings: "",
    installationRequired: "",
    additionalNotes: "",
  });

  const categories = [
    { id: "all", name: "All Products", icon: Layers },
    {
      id: "counters-workstations",
      name: "Counters & Workstations",
      icon: ShoppingCart,
    },
    { id: "partitions-walls", name: "Partitions & Walls", icon: Package },
    { id: "ceilings", name: "Ceilings", icon: Layers },
    { id: "windows-doors", name: "Windows & Doors", icon: DoorOpen },
    { id: "glass-glazing", name: "Glass & Glazing", icon: Sparkles },
    { id: "display-shelving", name: "Display & Shelving", icon: Grid },
  ];

  const products = [
    // Access Mantraps (id: 13)
    {
      id: 13,
      name: "Access Mantraps",
      category: "windows-doors",
      description: "Security mantrap entrance systems",
      fullDescription:
        "High-security mantrap systems providing controlled access with interlocking doors. Features include access control integration, emergency release, and various glass and panel options. Essential for banks, data centers, and secure facilities.",
      features: [
        "Interlocking control",
        "Access control ready",
        "Emergency release",
        "Bulletproof options",
        "Surveillance integration",
      ],
      icon: ShoppingCart,
      rating: 4.8,
      reviews: 34,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "Steel frame with glass/panel inserts",
        accessControl: "Card reader compatible",
        safetyRating: "EN 1627-1630",
        warranty: "3 years",
      },
    },

    // Aluminum Shopfronts (id: 8)
    {
      id: 8,
      name: "Aluminum Shopfronts",
      category: "windows-doors",
      description: "Modern aluminum storefront systems",
      fullDescription:
        "Contemporary aluminum shopfront systems combining security with style. Features powder-coated frames, large glass panels, and integrated door systems. Perfect for retail stores, showrooms, and commercial premises.",
      features: [
        "Powder coated finish",
        "Large glass areas",
        "Integrated doors",
        "Weather resistant",
        "Low maintainance",
      ],
      icon: Building2,
      rating: 4.9,
      reviews: 143,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "Aluminum with powder coating",
        glassType: "10mm toughened glass",
        windLoad: "Up to 2.4 kPa",
        warranty: "10 years",
      },
    },

    // Aluminum Windows (id: 11)
    {
      id: 11,
      name: "Aluminum Windows",
      category: "windows-doors",
      description: "Versatile aluminum window systems",
      fullDescription:
        "High-quality aluminum windows available in various styles including sliding, casement, and awning. Features powder-coated frames, double glazing, and excellent weather performance. Suitable for all building types.",
      features: [
        "Various opening styles",
        "Double glazing",
        "Powder coated",
        "Durable hardware",
        "Energy efficient",
      ],
      icon: Square,
      rating: 4.7,
      reviews: 267,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "Aluminum with thermal break",
        glassType: "6mm + 12mm air + 6mm",
        uValue: "2.0 W/m²K",
        warranty: "10 years",
      },
    },

    // Bank Teller Counters (id: 1)
    {
      id: 1,
      name: "Bank Teller Counters",
      category: "counters-workstations",
      description: "Professional bank teller counters with security features",
      fullDescription:
        "Premium bank teller counters designed for financial institutions. Features bulletproof glass panels, transaction trays, integrated cable management, and secure cash drawers. Built to banking industry standards with elegant finishes.",
      features: [
        "Bulletproof glass options",
        "Security transaction tray",
        "Cable management system",
        "Lockable drawers",
        "Custom branding available",
      ],
      icon: ShoppingCart,
      rating: 4.9,
      reviews: 78,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "Laminated wood with steel reinforcement",
        glassType: "Bulletproof glass (optional)",
        weight: "180kg",
        warranty: "5 years",
      },
    },

    // Curtain Walling (id: 15)
    {
      id: 15,
      name: "Curtain Walling",
      category: "glass-glazing",
      description: "Full height glazed façade systems",
      fullDescription:
        "Premium curtain wall systems creating stunning full-height glazed facades. Features high-performance glass, thermal efficiency, and various aesthetic finishes. Perfect for modern office buildings and commercial developments.",
      features: [
        "Full height glazing",
        "Thermal performance",
        "Various grid patterns",
        "Weather sealed",
        "Energy efficient",
      ],
      icon: Sparkles,
      rating: 4.9,
      reviews: 76,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "Aluminum with thermal break",
        glassType: "Double or triple glazed",
        uValue: "1.2 - 1.8 W/m²K",
        warranty: "10 years",
      },
    },

    // Demountable Partitions (id: 3)
    {
      id: 3,
      name: "Demountable Partitions",
      category: "partitions-walls",
      description: "Flexible relocatable partition systems",
      fullDescription:
        "Premium demountable partition systems perfect for creating flexible office spaces. These partitions can be easily relocated or reconfigured without damage, featuring soundproofing, glass panels, and various finish options. Ideal for modern offices requiring adaptability.",
      features: [
        "Easy to relocate",
        "Sound insulation",
        "Glass panel options",
        "Minimal floor damage",
        "Quick installation",
      ],
      icon: Package,
      rating: 4.8,
      reviews: 156,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "Aluminum frame with MDF or glass panels",
        thickness: "65mm - 100mm",
        soundRating: "Up to 42dB",
        warranty: "5 years",
      },
    },

    // Dry Wall Partitions (id: 4)
    {
      id: 4,
      name: "Dry Wall Partitions",
      category: "partitions-walls",
      description: "Cost-effective fixed partition solutions",
      fullDescription:
        "Traditional drywall partition systems offering excellent sound insulation and fire resistance. Perfect for permanent office layouts, meeting rooms, and private spaces. Can be painted or finished to match any interior design.",
      features: [
        "Fire resistant",
        "Excellent sound insulation",
        "Paintable surface",
        "Cost effective",
        "Various thickness options",
      ],
      icon: Square,
      rating: 4.6,
      reviews: 189,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "Gypsum board on steel studs",
        fireRating: "Up to 2 hours",
        soundRating: "Up to 50dB",
        warranty: "2 years",
      },
    },

    // Entrance Canopies (id: 14)
    {
      id: 14,
      name: "Entrance Canopies",
      category: "windows-doors",
      description: "Architectural entrance canopy systems",
      fullDescription:
        "Modern entrance canopies providing weather protection and architectural elegance. Available in glass, polycarbonate, and metal designs with various support systems. Creates an impressive entrance for commercial buildings.",
      features: [
        "Weather protection",
        "Various materials",
        "Custom designs",
        "Integrated lighting",
        "Low maintainance",
      ],
      icon: Building2,
      rating: 4.7,
      reviews: 56,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "Laminated glass or powder coated metal",
        structure: "Stainless steel supports",
        windLoad: "Up to 3.0 kPa",
        warranty: "5 years",
      },
    },

    // Feature Ceilings (id: 6)
    {
      id: 6,
      name: "Feature Ceilings",
      category: "ceilings",
      description: "Decorative architectural ceiling designs",
      fullDescription:
        "Custom feature ceilings that create visual impact and define spaces. Options include coffered ceilings, curved designs, integrated lighting, and various finish materials. Perfect for lobbies, boardrooms, and premium spaces.",
      features: [
        "Custom designs",
        "Integrated lighting",
        "Premium finishes",
        "Architectural appeal",
        "Sound absorption",
      ],
      icon: Layers,
      rating: 4.8,
      reviews: 67,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "Gypsum, wood, or metal",
        weight: "Varies by design",
        installation: "Suspended grid system",
        warranty: "3 years",
      },
    },

    // Flash Glazing (id: 16)
    {
      id: 16,
      name: "Flash Glazing",
      category: "glass-glazing",
      description: "Minimal frame structural glazing",
      fullDescription:
        "Contemporary structural glazing systems with minimal visible framing, creating a seamless glass appearance. Features silicone bonding, high-performance glass, and excellent weather resistance. Ideal for modern architecture.",
      features: [
        "Minimal frames",
        "Silicone bonded",
        "Clean aesthetics",
        "Structural glazing",
        "Weather sealed",
      ],
      icon: Maximize2,
      rating: 4.8,
      reviews: 64,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "12mm toughened or laminated glass",
        fixing: "Silicone bonded or point fixed",
        windLoad: "Up to 3.5 kPa",
        warranty: "10 years",
      },
    },

    // Frameless Glass Doors (id: 12)
    {
      id: 12,
      name: "Frameless Glass Doors",
      category: "windows-doors",
      description: "Minimalist frameless glass door systems",
      fullDescription:
        "Stunning frameless glass doors creating a seamless, modern aesthetic. Features 12mm toughened glass, minimal hardware, and smooth operation. Perfect for offices, showrooms, and upscale retail environments.",
      features: [
        "Minimalist design",
        "12mm toughened glass",
        "Soft close mechanism",
        "Various hardware finishes",
        "Safety certified",
      ],
      icon: Sparkles,
      rating: 4.9,
      reviews: 87,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "12mm toughened glass",
        hardware: "Stainless steel or brass",
        closeType: "Soft close hydraulic",
        warranty: "5 years",
      },
    },

    // Galaxy Patio Doors (id: 10)
    {
      id: 10,
      name: "Galaxy Patio Doors",
      category: "windows-doors",
      description: "Premium sliding patio door systems",
      fullDescription:
        "Elegant Galaxy patio doors offering smooth sliding operation and excellent thermal performance. Features wide glass panels, minimal frames, and superior weather sealing. Perfect for residential and commercial applications.",
      features: [
        "Smooth sliding",
        "Minimal frames",
        "Energy efficient",
        "Security locks",
        "Various sizes",
      ],
      icon: Maximize2,
      rating: 4.9,
      reviews: 112,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "Aluminum with double glazing",
        glassType: "6mm Low-E + 16mm argon + 6mm",
        uValue: "1.6 W/m²K",
        warranty: "10 years",
      },
    },

    // Gondola Shelves (id: 21)
    {
      id: 21,
      name: "Gondola Shelves",
      category: "display-shelving",
      description: "Versatile double-sided retail shelving",
      fullDescription:
        "Professional gondola shelving systems perfect for creating retail aisles. Features adjustable shelves, end cap capability, and various height options. Durable construction with easy assembly and reconfiguration.",
      features: [
        "Double-sided display",
        "Adjustable shelves",
        "End cap compatible",
        "Various heights",
        "Easy assembly",
      ],
      icon: Package,
      rating: 4.7,
      reviews: 189,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "Steel with powder coating",
        shelfLoad: "80kg per shelf",
        shelves: "4-6 adjustable shelves",
        warranty: "5 years",
      },
    },

    // Interior Modelling (id: 20)
    {
      id: 20,
      name: "Interior Modelling",
      category: "display-shelving",
      description: "Custom interior design and modeling",
      fullDescription:
        "Comprehensive interior modeling services creating bespoke retail and commercial spaces. Includes custom joinery, display fixtures, reception desks, and branded elements. Full design-to-installation service.",
      features: [
        "Custom design",
        "CAD modeling",
        "Branded elements",
        "Full installation",
        "Project management",
      ],
      icon: Building2,
      rating: 4.9,
      reviews: 43,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        service: "Design, manufacture, and installation",
        timeline: "4-12 weeks depending on size",
        includes: "3D renders, material samples, project management",
        warranty: "2 years",
      },
    },

    // Louvres (id: 18)
    {
      id: 18,
      name: "Louvres",
      category: "glass-glazing",
      description: "Ventilation and privacy louvre systems",
      fullDescription:
        "Architectural louvre systems providing ventilation, privacy, and solar shading. Available in aluminum or glass with fixed or operable blades. Perfect for facades, privacy screens, and mechanical areas.",
      features: [
        "Ventilation control",
        "Privacy screening",
        "Solar shading",
        "Various blade angles",
        "Powder coated finish",
      ],
      icon: Grid,
      rating: 4.7,
      reviews: 118,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "Aluminum with powder coating",
        bladeSize: "100mm - 200mm",
        operation: "Fixed or motorized",
        warranty: "5 years",
      },
    },

    // Office Work Stations (id: 2)
    {
      id: 2,
      name: "Office Work Stations",
      category: "counters-workstations",
      description: "Modern modular office workstations",
      fullDescription:
        "Contemporary office workstations designed for productivity and collaboration. Features include adjustable height options, integrated power outlets, cable management, privacy screens, and ergonomic design. Perfect for open-plan offices.",
      features: [
        "Modular configuration",
        "Cable management",
        "Power outlets integrated",
        "Privacy screens",
        "Ergonomic design",
      ],
      icon: Building2,
      rating: 4.7,
      reviews: 203,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "Laminated particle board with steel frame",
        weight: "45kg per unit",
        powerOutlets: "2 x USB, 2 x AC outlets",
        warranty: "3 years",
      },
    },

    // Shop Product Display (id: 19)
    {
      id: 19,
      name: "Shop Product Display",
      category: "display-shelving",
      description: "Versatile retail display systems",
      fullDescription:
        "Comprehensive retail display systems including wall units, freestanding displays, and specialty showcases. Features adjustable shelving, integrated lighting, and various finishes. Perfect for retail stores, showrooms, and exhibitions.",
      features: [
        "Modular design",
        "Adjustable shelves",
        "LED lighting options",
        "Various finishes",
        "Easy reconfiguration",
      ],
      icon: Grid,
      rating: 4.8,
      reviews: 156,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "MDF with laminate or powder coated metal",
        shelfLoad: "30kg per shelf",
        lighting: "LED strip optional",
        warranty: "3 years",
      },
    },

    // Skylights (id: 17)
    {
      id: 17,
      name: "Skylights",
      category: "glass-glazing",
      description: "Natural lighting roof systems",
      fullDescription:
        "Premium skylight systems bringing natural light into interior spaces. Features include thermal control glass, rain sensors, motorized opening options, and various sizes. Perfect for atriums, offices, and residential applications.",
      features: [
        "Natural lighting",
        "Thermal control glass",
        "Motorized options",
        "Rain sensors",
        "Self-cleaning glass available",
      ],
      icon: Sparkles,
      rating: 4.8,
      reviews: 92,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "Aluminum frame with double glazing",
        glassType: "Low-E with solar control",
        uValue: "1.4 W/m²K",
        warranty: "10 years",
      },
    },

    // Sliding Folding Doors (id: 9)
    {
      id: 9,
      name: "Sliding Folding Doors",
      category: "windows-doors",
      description: "Space-saving bi-fold door systems",
      fullDescription:
        "Premium sliding folding door systems that maximize space and provide seamless indoor-outdoor flow. Features smooth operation, weather sealing, and various configurations. Perfect for patios, terraces, and room dividers.",
      features: [
        "Space saving",
        "Smooth operation",
        "Weather sealed",
        "Various panel configurations",
        "Heavy duty hardware",
      ],
      icon: DoorOpen,
      rating: 4.8,
      reviews: 98,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "Aluminum with double glazing",
        glassType: "6mm + 12mm air gap + 6mm",
        hardware: "Stainless steel rollers",
        warranty: "5 years",
      },
    },

    // Suspended Ceilings (id: 7)
    {
      id: 7,
      name: "Suspended Ceilings",
      category: "ceilings",
      description: "Grid-based suspended ceiling systems",
      fullDescription:
        "Professional suspended ceiling systems providing easy access to services above. Features include acoustic tiles, various grid finishes, and easy maintainance. Ideal for offices, residential spaces, and commercial buildings.",
      features: [
        "Easy access to services",
        "Acoustic properties",
        "Various tile options",
        "Quick installation",
        "Conceals wiring & ducts",
      ],
      icon: Grid,
      rating: 4.7,
      reviews: 234,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "Metal grid with mineral fiber tiles",
        thickness: "15mm - 20mm",
        soundAbsorption: "Up to 0.9 NRC",
        warranty: "5 years",
      },
    },

    // Wall Paneling (id: 5)
    {
      id: 5,
      name: "Wall Paneling",
      category: "partitions-walls",
      description: "Decorative wall paneling systems",
      fullDescription:
        "Premium decorative wall paneling adding elegance and character to any space. Available in various materials including wood veneer, fabric, leather, and acoustic panels. Perfect for boardrooms, reception areas, and executive offices.",
      features: [
        "Premium finishes",
        "Acoustic options",
        "Easy maintainance",
        "Various materials",
        "Custom designs",
      ],
      icon: Layers,
      rating: 4.9,
      reviews: 94,
      images: ["/placeh.png", "/placeh.png", "/placeh.png"],
      specifications: {
        material: "Various (wood, fabric, acoustic)",
        thickness: "15mm - 50mm",
        installation: "Adhesive or clip system",
        warranty: "3 years",
      },
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // Handle product selection
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    setProjectInfo({
      projectType: "",
      buildingType: "",
      spaceDimensions: "",
      estimatedArea: "",
      timeline: "",
      hasDrawings: "",
      installationRequired: "",
      additionalNotes: "",
    });
    document.body.style.overflow = "hidden";
  };

  // Handle modal close
  const handleModalClose = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };

  // Handle WhatsApp inquiry
  const handleWhatsAppInquiry = () => {
    const product = selectedProduct;
    const info = projectInfo;

    const message =
      `🏗️ SHOPFITTING PROJECT INQUIRY\n\n` +
      `📦 Product: ${product.name}\n` +
      `━━━━━━━━━━━━━━━━━━\n\n` +
      `PROJECT DETAILS:\n` +
      (info.projectType ? `• Project Type: ${info.projectType}\n` : "") +
      (info.buildingType ? `• Building Type: ${info.buildingType}\n` : "") +
      (info.spaceDimensions
        ? `• Space Dimensions: ${info.spaceDimensions}\n`
        : "") +
      (info.estimatedArea ? `• Estimated Area: ${info.estimatedArea}\n` : "") +
      (info.timeline ? `• Timeline: ${info.timeline}\n` : "") +
      (info.hasDrawings ? `• Drawings Available: ${info.hasDrawings}\n` : "") +
      (info.installationRequired
        ? `• Installation Required: ${info.installationRequired}\n`
        : "") +
      (info.additionalNotes
        ? `\n📝 Additional Notes:\n${info.additionalNotes}\n`
        : "") +
      `\n━━━━━━━━━━━━━━━━━━\n` +
      `Please provide a detailed quotation including materials, installation, and timeline.`;

    const whatsappUrl = `https://wa.me/263781934986?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Handle Email inquiry
  const handleEmailInquiry = () => {
    const product = selectedProduct;
    const info = projectInfo;

    const subject = `Quotation Request: ${product.name}`;
    const body =
      `SHOPFITTING PROJECT INQUIRY\n\n` +
      `Product: ${product.name}\n` +
      `Category: ${product.category}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `PROJECT DETAILS:\n\n` +
      (info.projectType ? `Project Type: ${info.projectType}\n` : "") +
      (info.buildingType ? `Building Type: ${info.buildingType}\n` : "") +
      (info.spaceDimensions
        ? `Space Dimensions: ${info.spaceDimensions}\n`
        : "") +
      (info.estimatedArea ? `Estimated Area: ${info.estimatedArea}\n` : "") +
      (info.timeline ? `Timeline: ${info.timeline}\n` : "") +
      (info.hasDrawings ? `Drawings Available: ${info.hasDrawings}\n` : "") +
      (info.installationRequired
        ? `Installation Required: ${info.installationRequired}\n`
        : "") +
      (info.additionalNotes
        ? `\nAdditional Notes:\n${info.additionalNotes}\n`
        : "") +
      `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `QUOTATION REQUEST:\n\n` +
      `Please provide a comprehensive quotation including:\n` +
      `• Material specifications and costs\n` +
      `• Installation services and timeline\n` +
      `• Project management fees (if applicable)\n` +
      `• Warranty and after-sales support\n` +
      `• Payment terms and schedule\n` +
      `• Site visit requirements\n\n` +
      `We look forward to working with you on this project.\n\n` +
      `Best regards`;

    const mailtoUrl = `mailto:sales@yourcompany.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
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
          style={{ backgroundImage: 'url("/GSZOn-site/11.jpeg")' }}
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Our Products
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed">
              We offer a complete range of architectural solutions and
              commercial and residential fixtures/fittings.
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
                    flex items-center gap-2 px-4 sm:px-6 py-3 rounded-sm font-semibold
                    transition-all duration-300 transform
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#E3180D] to-[#FF2A00] text-white shadow-lg scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                  className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  {/* Product Image */}
                  <div className="relative h-64 md:h-72 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${product.images[0]})` }}
                    ></div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full flex items-center gap-1 text-xs md:text-sm font-bold">
                      <Star
                        size={14}
                        className="text-[#F3B900] fill-[#F3B900]"
                      />
                      <span>{product.rating}</span>
                      <span className="text-gray-500">({product.reviews})</span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <div className="text-white text-sm font-bold flex items-center gap-2">
                        <Info size={16} />
                        <span>Click for quotation details</span>
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
                          className="px-3 py-1 bg-gray-100 rounded-sm text-xs text-gray-600 font-semibold"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500 font-semibold">
                        Get Quote
                      </span>
                      <ArrowRight
                        size={18}
                        className="text-[#E3180D] group-hover:translate-x-1 transition-transform"
                      />
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100 flex items-start md:items-center justify-center p-4 md:p-5 overflow-y-auto"
            onClick={handleModalClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-sm md:rounded-sm w-full max-w-6xl my-8 md:my-0 overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleModalClose}
                className="sticky top-4 left-full -translate-x-12 md:-translate-x-16 w-12 h-12 rounded-sm bg-white hover:bg-[#E3180D] border-none cursor-pointer flex items-center justify-center shadow-xl z-10 transition-all duration-300 group"
              >
                <X
                  size={24}
                  className="text-gray-800 group-hover:text-white transition-colors"
                />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Images */}
                <div className="bg-gray-50 p-6 md:p-10 order-2 lg:order-1">
                  {/* Main Image */}
                  <div className="relative h-64 md:h-96 lg:h-[500px] rounded-sm overflow-hidden mb-5 bg-white">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${selectedProduct.images[currentImageIndex]})`,
                      }}
                    ></div>

                    {/* Image Navigation */}
                    {selectedProduct.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-sm bg-white/90 hover:bg-white border-none cursor-pointer flex items-center justify-center shadow-lg transition-all"
                        >
                          <ChevronLeft size={20} className="text-gray-800" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-sm bg-white/90 hover:bg-white border-none cursor-pointer flex items-center justify-center shadow-lg transition-all"
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
                          min-w-[60px] w-16 md:min-w-[80px] md:w-20 h-16 md:h-20 rounded-sm overflow-hidden cursor-pointer
                          transition-all duration-300 bg-cover bg-center
                          ${
                            currentImageIndex === idx
                              ? "border-4 border-[#E3180D] scale-105"
                              : "border-4 border-transparent hover:border-gray-300"
                          }
                        `}
                        style={{ backgroundImage: `url(${img})` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Project Information Form */}
                <div className="p-6 md:p-10 overflow-y-auto max-h-[70vh] lg:max-h-[80vh] order-1 lg:order-2">
                  {/* Product Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Star
                        size={18}
                        className="text-[#F3B900] fill-[#F3B900]"
                      />
                      <span className="text-base font-bold">
                        {selectedProduct.rating}
                      </span>
                      <span className="text-gray-500">
                        ({selectedProduct.reviews} reviews)
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-3">
                      {selectedProduct.name}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                      {selectedProduct.fullDescription}
                    </p>
                  </div>

                  {/* Project Information Form */}
                  <div className="mb-8">
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-sm p-4 mb-6">
                      <div className="flex items-center gap-2 text-[#E3180D] mb-2">
                        <AlertCircle size={20} />
                        <h3 className="text-lg font-bold">
                          Get Your Custom Quote
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Fill in your project details below for an accurate
                        quotation
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Project Type */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2">
                          <Building2 size={16} className="text-[#E3180D]" />
                          Project Type
                        </label>
                        <select
                          value={projectInfo.projectType}
                          onChange={(e) =>
                            setProjectInfo({
                              ...projectInfo,
                              projectType: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:border-[#E3180D] focus:outline-none transition-colors text-sm"
                        >
                          <option value="">Select project type</option>
                          <option value="New Construction">
                            New Construction
                          </option>
                          <option value="Renovation/Refit">
                            Renovation/Refit
                          </option>
                          <option value="Extension">Extension</option>
                          <option value="Repair/Replacement">
                            Repair/Replacement
                          </option>
                          <option value="Maintenance">Maintenance</option>
                        </select>
                      </div>

                      {/* Building Type */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2">
                          <MapPin size={16} className="text-[#E3180D]" />
                          Building Type
                        </label>
                        <select
                          value={projectInfo.buildingType}
                          onChange={(e) =>
                            setProjectInfo({
                              ...projectInfo,
                              buildingType: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:border-[#E3180D] focus:outline-none transition-colors text-sm"
                        >
                          <option value="">Select building type</option>
                          <option value="Office Building">Office Building</option>
                          <option value="Retail Store/Shop">
                            Retail Store/Shop
                          </option>
                          <option value="Bank/Financial Institution">
                            Bank/Financial Institution
                          </option>
                          <option value="Showroom">Showroom</option>
                          <option value="Restaurant/Cafe">
                            Restaurant/Cafe
                          </option>
                          <option value="Warehouse">Warehouse</option>
                          <option value="Residential">Residential</option>
                          <option value="Hotel/Hospitality">
                            Hotel/Hospitality
                          </option>
                          <option value="School/Educational">
                            School/Educational
                          </option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Space Dimensions */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2">
                          <Ruler size={16} className="text-[#E3180D]" />
                          Space Dimensions (e.g., 10m x 8m x 3m high)
                        </label>
                        <input
                          type="text"
                          value={projectInfo.spaceDimensions}
                          onChange={(e) =>
                            setProjectInfo({
                              ...projectInfo,
                              spaceDimensions: e.target.value,
                            })
                          }
                          placeholder="Length x Width x Height"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:border-[#E3180D] focus:outline-none transition-colors text-sm"
                        />
                      </div>

                      {/* Estimated Area */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2">
                          <Square size={16} className="text-[#E3180D]" />
                          Estimated Area (sqm or number of units)
                        </label>
                        <input
                          type="text"
                          value={projectInfo.estimatedArea}
                          onChange={(e) =>
                            setProjectInfo({
                              ...projectInfo,
                              estimatedArea: e.target.value,
                            })
                          }
                          placeholder="e.g., 50 sqm or 3 units"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:border-[#E3180D] focus:outline-none transition-colors text-sm"
                        />
                      </div>

                      {/* Timeline */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2">
                          <Calendar size={16} className="text-[#E3180D]" />
                          Project Timeline
                        </label>
                        <select
                          value={projectInfo.timeline}
                          onChange={(e) =>
                            setProjectInfo({
                              ...projectInfo,
                              timeline: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:border-[#E3180D] focus:outline-none transition-colors text-sm"
                        >
                          <option value="">When do you need this?</option>
                          <option value="Urgent (Within 2 weeks)">
                            Urgent (Within 2 weeks)
                          </option>
                          <option value="1 Month">1 Month</option>
                          <option value="2-3 Months">2-3 Months</option>
                          <option value="3-6 Months">3-6 Months</option>
                          <option value="6+ Months">6+ Months</option>
                          <option value="Flexible/Planning Stage">
                            Flexible/Planning Stage
                          </option>
                        </select>
                      </div>

                      {/* Has Drawings */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2">
                          <FileText size={16} className="text-[#E3180D]" />
                          Do you have architectural drawings?
                        </label>
                        <select
                          value={projectInfo.hasDrawings}
                          onChange={(e) =>
                            setProjectInfo({
                              ...projectInfo,
                              hasDrawings: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:border-[#E3180D] focus:outline-none transition-colors text-sm"
                        >
                          <option value="">Select an option</option>
                          <option value="Yes, I have detailed drawings">
                            Yes, I have detailed drawings
                          </option>
                          <option value="Yes, but only rough sketches">
                            Yes, but only rough sketches
                          </option>
                          <option value="No, I need design services">
                            No, I need design services
                          </option>
                        </select>
                      </div>

                      {/* Installation Required */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2">
                          <Cog size={16} className="text-[#E3180D]" />
                          Installation Services Needed?
                        </label>
                        <select
                          value={projectInfo.installationRequired}
                          onChange={(e) =>
                            setProjectInfo({
                              ...projectInfo,
                              installationRequired: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:border-[#E3180D] focus:outline-none transition-colors text-sm"
                        >
                          <option value="">Select an option</option>
                          <option value="Yes, full installation">
                            Yes, full installation & project management
                          </option>
                          <option value="Yes, installation only">
                            Yes, installation only
                          </option>
                          <option value="No, supply only">
                            No, supply only (I have my own contractors)
                          </option>
                        </select>
                      </div>

                      {/* Additional Notes */}
                      <div>
                        <label className="text-sm font-bold text-gray-800 mb-2 block">
                          Additional Requirements or Notes
                        </label>
                        <textarea
                          value={projectInfo.additionalNotes}
                          onChange={(e) =>
                            setProjectInfo({
                              ...projectInfo,
                              additionalNotes: e.target.value,
                            })
                          }
                          placeholder="Any specific requirements, fire ratings, acoustic needs, color preferences, or other details..."
                          rows="4"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:border-[#E3180D] focus:outline-none transition-colors text-sm resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Inquiry Buttons */}
                  <div className="mb-8">
                    <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 text-center">
                      Send Your Inquiry
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* WhatsApp Button */}
                      <button
                        onClick={handleWhatsAppInquiry}
                        className="flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        <MessageCircle size={20} />
                        <span>WhatsApp</span>
                      </button>

                      {/* Email Button */}
                      <button
                        onClick={handleEmailInquiry}
                        className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#E3180D] to-[#FF2A00] hover:from-[#FF2A00] hover:to-[#E3180D] text-white rounded-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        <Mail size={20} />
                        <span>Email</span>
                      </button>
                    </div>
                  </div>

                  {/* Product Specifications */}
                  <div className="mb-6">
                    <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4">
                      Product Specifications
                    </h3>
                    <div className="bg-gray-50 rounded-sm overflow-hidden">
                      {Object.entries(selectedProduct.specifications).map(
                        ([key, value], idx) => (
                          <div
                            key={key}
                            className={`flex flex-col sm:flex-row sm:justify-between p-4 ${
                              idx <
                              Object.entries(selectedProduct.specifications)
                                .length -
                                1
                                ? "border-b border-white"
                                : ""
                            }`}
                          >
                            <span className="font-semibold text-gray-600 capitalize text-sm md:text-base mb-1 sm:mb-0">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </span>
                            <span className="font-bold text-gray-800 text-sm md:text-base">
                              {value}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {selectedProduct.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 p-3 bg-gray-50 rounded-sm"
                        >
                          <Check
                            size={20}
                            className="text-[#E3180D] mt-0.5 flex-shrink-0"
                          />
                          <span className="text-gray-800 font-semibold text-sm md:text-base">
                            {feature}
                          </span>
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
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 80%, white 0%, transparent 50%)",
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
              We design and manufacture custom shopfitting solutions tailored to
              your exact requirements
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-gray-800 rounded-sm font-semibold shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all transform hover:-translate-y-1"
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