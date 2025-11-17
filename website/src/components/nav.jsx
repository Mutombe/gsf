import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Globe,
  Search,
  Home,
  Info,
  Briefcase,
  Package,
  FolderKanban,
  Image as ImageIcon,
  MessageSquare,
  HelpCircle,
  PhoneCall,
  ChevronRight,
  Boxes,
  Wrench,
  Newspaper,
  Clock,
} from "lucide-react";
import { useLanguage } from "./lunguageContext";
import SearchModal from "./search";
import { GiWorld } from "react-icons/gi";
import { CgMenuRight } from "react-icons/cg";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GrServices } from "react-icons/gr";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { GoPeople } from "react-icons/go";
import { LiaHomeSolid } from "react-icons/lia";
import { PiPersonLight } from "react-icons/pi";
import { PiSmileyWinkThin } from "react-icons/pi";
import { PiSmiley } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const LazyImage = ({ src, alt, className, style, priority = false }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef();
  const isInView = useInView(imgRef, { once: true, margin: "50px" });

  useEffect(() => {
    if (priority || isInView) {
      // Create a small blur placeholder
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setImageLoaded(true);
      };
    }
  }, [src, isInView, priority]);

  return (
    <div ref={imgRef} className={className} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
      {/* Placeholder with blur effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #e3180d20, #ff7805020)',
          filter: imageLoaded ? 'blur(0px)' : 'blur(10px)',
          transition: 'filter 0.3s ease',
        }}
      />
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
          onLoad={() => setImageLoaded(true)}
        />
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const { language, changeLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowLangMenu(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "nd", name: "Ndebele", flag: "🇿🇼" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

  // Social media links
  const socialLinks = [
    { icon: FaFacebookF, url: "https://facebook.com/globalshopfitters", label: "Facebook" },
    { icon: FaXTwitter, url: "https://twitter.com/globalshopfitters", label: "Twitter" },
    { icon: FaInstagram, url: "https://instagram.com/globalshopfitters", label: "Instagram" },
    { icon: FaLinkedinIn, url: "https://linkedin.com/company/globalshopfitters", label: "LinkedIn" },
    { icon: FaWhatsapp, url: "https://wa.me/263781934986", label: "WhatsApp" },
  ];

  // Navigation structure with icons and dropdowns
  const navLinks = [
    {
      path: "/",
      label: t("nav.home"),
      icon: LiaHomeSolid,
      type: "link",
    },
    {
      label: "Our Company",
      icon: HiOutlineBuildingOffice2,
      type: "dropdown",
      items: [
        { path: "/about", label: t("nav.about"), icon: Info },
        { path: "/contact", label: t("nav.contact"), icon: PhoneCall },
      ],
    },
    {
      label: "What We Offer",
      icon: GrServices,
      type: "dropdown",
      items: [
        { path: "/services", label: t("nav.services"), icon: Wrench },
        { path: "/products", label: t("nav.products"), icon: Boxes },
      ],
    },
    {
      path: "/projects",
      label: t("nav.projects"),
      icon: LiaProjectDiagramSolid,
      type: "link",
    },
    {
      path: "/testimonials",
      label: t("nav.testimonials"),
      icon: PiSmiley,
      type: "link",
    },
    {
      label: "Resources",
      icon: Package,
      type: "dropdown",
      items: [
        { path: "/gallery", label: t("nav.gallery"), icon: ImageIcon },
        { path: "/faq", label: t("nav.faq"), icon: HelpCircle },
        { path: "/resources", label: "Resources", icon: Newspaper },
      ],
    },
  ];

  // Color palette from images
  const colors = {
    chiliRed: "#E3180D",
    scarlet: "#FF2A00",
    safetyOrange: "#FA7301",
    amber: "#F3B900",
    mustard: "#FCD92A",
    mustardLight: "#FFDC5E",
    darkGray: "#2D2D2D",
    mediumGray: "#666666",
    white: "#FFFFFF",
  };

  const topBarStyle = {
    background: `linear-gradient(90deg, ${colors.darkGray} 0%, #1a1a1a 100%)`,
    color: colors.white,
    padding: "8px 0",
    fontSize: "14px",
  };

  const navbarStyle = {
    position: "sticky",
    top: 0,
    zIndex: 60,
    background: colors.white,
    transition: "all 0.3s ease",
    boxShadow: isScrolled
      ? "0 4px 20px rgba(0, 0, 0, 0.1)"
      : "0 2px 10px rgba(0, 0, 0, 0.05)",
    padding: isScrolled ? "12px 0" : "16px 0",
  };

  const logoGradientStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s ease",
  };

  const activeLinkStyle = {
    color: colors.chiliRed,
    padding: "10px 16px",
    borderRadius: "8px",
    fontWeight: "600",
    transition: "all 0.3s ease",
  };

  const inactiveLinkStyle = {
    color: colors.darkGray,
    padding: "10px 16px",
    borderRadius: "8px",
    fontWeight: "500",
    transition: "all 0.3s ease",
  };

  const hoverLinkStyle = {
    color: colors.chiliRed,
    background:
      "linear-gradient(135deg, rgba(227, 24, 13, 0.05), rgba(255, 42, 0, 0.05))",
  };

  const langButtonStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 12px",
    borderRadius: "8px",
    border: `1px solid ${colors.mediumGray}`,
    background: colors.white,
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const searchButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px",
    borderRadius: "8px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    transition: "all 0.3s ease",
    color: colors.darkGray,
  };

  const isPathActive = (path) => {
    return location.pathname === path;
  };

  const isDropdownActive = (items) => {
    return items.some((item) => location.pathname === item.path);
  };

  return (
    <>
      {/* Search Modal */}
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />

      {/* Top Bar - Now visible on all devices */}
      <div style={topBarStyle}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}
        >
          {/* Desktop Top Bar */}
          <div className="hidden lg:flex justify-between items-center">
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <a
                href="mailto:info@globalshopfitters.co.zw"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: colors.white,
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.amber)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = colors.white)
                }
              >
                <Mail size={14} />
                <span>info@globalshopfitters.co.zw</span>
              </a>
              <a
                href="tel:+263781934986"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: colors.white,
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.amber)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = colors.white)
                }
              >
                <Phone size={14} />
                <span>+263 78 193 4986</span>
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Clock size={14} />
                <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MapPin size={14} />
                <span>No. 3, 18 Whitesway, Harare</span>
              </div>
              <div
                style={{
                  width: "1px",
                  height: "16px",
                  background: "rgba(255, 255, 255, 0.3)",
                }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {socialLinks.map((social) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.1)",
                        color: colors.white,
                        transition: "all 0.3s ease",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = colors.chiliRed;
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <SocialIcon size={12} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Top Bar */}
          <div className="lg:hidden">
            <div className="flex flex-col gap-2 py-1">
              {/* First Row: Contact Info */}
              <div className="flex items-center justify-between text-xs">
                <a
                  href="tel:+263781934986"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: colors.white,
                    textDecoration: "none",
                  }}
                >
                  <Phone size={12} />
                  <span>+263 78 193 4986</span>
                </a>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Clock size={12} />
                  <span>Mon-Fri: 8AM-5PM</span>
                </div>
              </div>
              
              {/* Second Row: Social Media */}
              <div className="flex items-center justify-center gap-3 pt-1 border-t border-white/20">
                {socialLinks.map((social) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.1)",
                        color: colors.white,
                        transition: "all 0.3s ease",
                        textDecoration: "none",
                      }}
                    >
                      <SocialIcon size={14} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={navbarStyle}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
              }}
            >
              <div
                style={logoGradientStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <LazyImage
                  src="/gsf.png"
                  alt="Logo"
                  className="w-30 h-12"
                  style={{
                    
                  }}
                  priority={true}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => {
                if (link.type === "link") {
                  const IconComponent = link.icon;
                  const isActive = isPathActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all"
                      style={isActive ? activeLinkStyle : inactiveLinkStyle}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = hoverLinkStyle.color;
                          e.currentTarget.style.background =
                            hoverLinkStyle.background;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = inactiveLinkStyle.color;
                          e.currentTarget.style.background = "transparent";
                        }
                      }}
                    >
                      <IconComponent size={18} />
                      <span>{link.label}</span>
                    </Link>
                  );
                } else if (link.type === "dropdown") {
                  const IconComponent = link.icon;
                  const isActive = isDropdownActive(link.items);
                  return (
                    <div
                      key={index}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(index)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all"
                        style={isActive ? activeLinkStyle : inactiveLinkStyle}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.color = hoverLinkStyle.color;
                            e.currentTarget.style.background =
                              hoverLinkStyle.background;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.color =
                              inactiveLinkStyle.color;
                            e.currentTarget.style.background = "transparent";
                          }
                        }}
                      >
                        <IconComponent size={18} />
                        <span>{link.label}</span>
                        <ChevronDown
                          size={16}
                          className="transition-transform"
                          style={{
                            transform:
                              openDropdown === index
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                          }}
                        />
                      </button>

                      <AnimatePresence>
                        {openDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
                          >
                            {link.items.map((item) => {
                              const ItemIcon = item.icon;
                              const isItemActive = isPathActive(item.path);
                              return (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className="flex items-center gap-3 px-4 py-3 transition-all"
                                  style={{
                                    color: isItemActive
                                      ? colors.chiliRed
                                      : colors.darkGray,
                                    fontWeight: isItemActive ? "600" : "500",
                                    background: isItemActive
                                      ? "linear-gradient(135deg, rgba(227, 24, 13, 0.1), rgba(255, 42, 0, 0.1))"
                                      : "transparent",
                                  }}
                                  onMouseEnter={(e) => {
                                    if (!isItemActive) {
                                      e.currentTarget.style.background =
                                        "rgba(227, 24, 13, 0.05)";
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    if (!isItemActive) {
                                      e.currentTarget.style.background =
                                        "transparent";
                                    }
                                  }}
                                >
                                  <ItemIcon size={18} />
                                  <span>{item.label}</span>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* Search, Language Switcher & Mobile Menu Button */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {/* Search Button - Desktop */}
              <div className="hidden lg:block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSearch(true)}
                  style={searchButtonStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(227, 24, 13, 0.05)";
                    e.currentTarget.style.color = colors.chiliRed;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = colors.darkGray;
                  }}
                  aria-label="Search"
                >
                  <Search size={20} />
                </motion.button>
              </div>

              {/* Language Switcher */}
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  style={langButtonStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = colors.chiliRed)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = colors.mediumGray)
                  }
                >
                  <GiWorld size={18} style={{ color: colors.chiliRed }} />
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    {languages.find((l) => l.code === language)?.flag}
                  </span>
                  <ChevronDown
                    size={16}
                    style={{
                      transform: showLangMenu
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>

                <AnimatePresence>
                  {showLangMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      style={{
                        position: "absolute",
                        right: 0,
                        marginTop: "8px",
                        width: "192px",
                        background: colors.white,
                        borderRadius: "8px",
                        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                        border: `1px solid #E5E7EB`,
                        overflow: "hidden",
                        zIndex: 50,
                      }}
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            changeLanguage(lang.code);
                            setShowLangMenu(false);
                          }}
                          style={{
                            width: "100%",
                            padding: "12px 16px",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            border: "none",
                            background:
                              language === lang.code
                                ? "linear-gradient(135deg, rgba(227, 24, 13, 0.1), rgba(255, 42, 0, 0.1))"
                                : "transparent",
                            color:
                              language === lang.code
                                ? colors.chiliRed
                                : colors.darkGray,
                            fontWeight: language === lang.code ? "600" : "500",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            textAlign: "left",
                          }}
                          onMouseEnter={(e) => {
                            if (language !== lang.code) {
                              e.currentTarget.style.background =
                                "rgba(227, 24, 13, 0.05)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (language !== lang.code) {
                              e.currentTarget.style.background = "transparent";
                            }
                          }}
                        >
                          <span style={{ fontSize: "24px" }}>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Search & Menu Button */}
              <div className="lg:hidden flex items-center gap-2">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSearch(true)}
                  style={searchButtonStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(227, 24, 13, 0.05)";
                    e.currentTarget.style.color = colors.chiliRed;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = colors.darkGray;
                  }}
                  aria-label="Search"
                >
                  <Search size={20} />
                </motion.button>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  style={{
                    display: "flex",
                    padding: "8px",
                    borderRadius: "8px",
                    border: "none",
                    background: "transparent",
                    color: colors.darkGray,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(227, 24, 13, 0.05)";
                    e.currentTarget.style.color = colors.chiliRed;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = colors.darkGray;
                  }}
                >
                  {isOpen ? <X size={24} /> : <CgMenuRight size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.15 }}
            className="lg:hidden fixed inset-0 z-[100] overflow-y-auto"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Background"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${colors.darkGray}f0, ${colors.chiliRed}e6, ${colors.darkGray}f0)`,
                }}
              />
              <div className="absolute inset-0 backdrop-blur-sm" />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col">
              {/* Header with Logo and Close Button */}
              <div
                className="flex justify-between items-center p-6 border-b"
                style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center"
                >
                  <img
                    src="/gsf.png"
                    alt="Global Shopfitters Logo"
                    className="h-12"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  style={{ color: colors.white }}
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-8 py-12 space-y-2">
                {navLinks.map((link, index) => {
                  if (link.type === "link") {
                    const IconComponent = link.icon;
                    const isActive = isPathActive(link.path);
                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between px-6 py-4 rounded-lg text-lg font-semibold transition-all"
                          style={{
                            color: isActive ? colors.chiliRed : colors.white,
                            background: isActive
                              ? colors.white
                              : "transparent",
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive) {
                              e.currentTarget.style.background =
                                "rgba(255, 255, 255, 0.1)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) {
                              e.currentTarget.style.background = "transparent";
                            }
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <IconComponent size={22} />
                            <span>{link.label}</span>
                          </div>
                          <ChevronRight size={20} />
                        </Link>
                      </motion.div>
                    );
                  } else if (link.type === "dropdown") {
                    const IconComponent = link.icon;
                    const isDropdownOpen = openMobileDropdown === index;
                    const isActive = isDropdownActive(link.items);

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {/* Dropdown Trigger */}
                        <button
                          onClick={() =>
                            setOpenMobileDropdown(
                              isDropdownOpen ? null : index
                            )
                          }
                          className="w-full flex items-center justify-between px-6 py-4 rounded-lg text-lg font-semibold transition-all"
                          style={{
                            color: isActive ? colors.chiliRed : colors.white,
                            background: isActive
                              ? colors.white
                              : "rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <IconComponent size={22} />
                            <span>{link.label}</span>
                          </div>
                          <ChevronDown
                            size={20}
                            className="transition-transform"
                            style={{
                              transform: isDropdownOpen
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            }}
                          />
                        </button>

                        {/* Dropdown Items */}
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-1 ml-6 space-y-1"
                            >
                              {link.items.map((item) => {
                                const ItemIcon = item.icon;
                                const isItemActive = isPathActive(item.path);
                                return (
                                  <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between px-6 py-3 rounded-lg text-base font-medium transition-all"
                                    style={{
                                      color: isItemActive
                                        ? colors.chiliRed
                                        : colors.white,
                                      background: isItemActive
                                        ? colors.white
                                        : "transparent",
                                    }}
                                    onMouseEnter={(e) => {
                                      if (!isItemActive) {
                                        e.currentTarget.style.background =
                                          "rgba(255, 255, 255, 0.1)";
                                      }
                                    }}
                                    onMouseLeave={(e) => {
                                      if (!isItemActive) {
                                        e.currentTarget.style.background =
                                          "transparent";
                                      }
                                    }}
                                  >
                                    <div className="flex items-center gap-3">
                                      <ItemIcon size={18} />
                                      <span>{item.label}</span>
                                    </div>
                                    <ChevronRight size={18} />
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }
                  return null;
                })}

                {/* Contact Info & Language Switcher */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-8 space-y-4"
                >
                  {/* Language Switcher in Mobile Menu */}
                  <div className="px-6 py-4">
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-3"
                      style={{ color: colors.amber }}
                    >
                      Language
                    </p>
                    <div className="flex gap-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            changeLanguage(lang.code);
                          }}
                          className="px-4 py-2 rounded-lg font-medium transition-all"
                          style={{
                            background:
                              language === lang.code
                                ? colors.white
                                : "rgba(255, 255, 255, 0.1)",
                            color:
                              language === lang.code
                                ? colors.chiliRed
                                : colors.white,
                            border:
                              language === lang.code
                                ? "none"
                                : "1px solid rgba(255, 255, 255, 0.2)",
                          }}
                        >
                          <span className="mr-2">{lang.flag}</span>
                          {lang.code.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;