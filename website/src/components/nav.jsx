import React, { useState, useEffect } from "react";
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
} from "lucide-react";
import { useLanguage } from "./lunguageContext";
import SearchModal from "./search";
import { GiWorld } from "react-icons/gi";
import { CgMenuRight } from "react-icons/cg";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
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

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/services", label: t("nav.services") },
    { path: "/products", label: t("nav.products") },
    { path: "/projects", label: t("nav.projects") },
    { path: "/gallery", label: t("nav.gallery") },
    { path: "/testimonials", label: t("nav.testimonials") },
    { path: "/faq", label: t("nav.faq") },
    { path: "/contact", label: t("nav.contact") },
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
    zIndex: 60, // FIXED: Increased from 40 to 60 to stay above floating buttons
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
    background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
    color: colors.white,
    padding: "10px 16px",
    borderRadius: "8px",
    fontWeight: "600",
    boxShadow: `0 2px 10px rgba(227, 24, 13, 0.3)`,
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

  return (
    <>
      {/* Search Modal */}
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />

      {/* Top Bar */}
      <div style={topBarStyle} className="hidden lg:block">
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
                href="tel:+263123456789"
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
                <span>+263 123 456 789</span>
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <MapPin size={14} />
              <span>Harare, Zimbabwe</span>
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
                <img
                  src="/gsf.png"
                  alt="Global Shopfitters Logo"
                  className="w-26 h-16"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div style={{ gap: "4px" }} className="hidden lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={
                    location.pathname === link.path
                      ? activeLinkStyle
                      : inactiveLinkStyle
                  }
                  onMouseEnter={(e) => {
                    if (location.pathname !== link.path) {
                      e.currentTarget.style.color = hoverLinkStyle.color;
                      e.currentTarget.style.background =
                        hoverLinkStyle.background;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== link.path) {
                      e.currentTarget.style.color = inactiveLinkStyle.color;
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
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
            transition={{ type: "tween", duration: 0.3 }}
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
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-6 py-4 rounded-lg text-lg font-semibold transition-all"
                      style={{
                        ...(location.pathname === link.path
                          ? {
                              background: colors.white,
                              color: colors.chiliRed,
                              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                            }
                          : {
                              color: colors.white,
                            }),
                      }}
                      onMouseEnter={(e) => {
                        if (location.pathname !== link.path) {
                          e.currentTarget.style.background =
                            "rgba(255, 255, 255, 0.1)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (location.pathname !== link.path) {
                          e.currentTarget.style.background = "transparent";
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Contact Info & Language Switcher */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
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