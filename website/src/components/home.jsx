import React, { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  Store,
  Phone,
  Mail,
  Wrench,
  Snowflake,
  PenTool,
  Award,
  Users,
  Clock,
  Target,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Zap,
  Heart,
  MessageCircle,
  Lightbulb,
  Cpu,
  FlaskConical,
  Factory,
  HeadphonesIcon,
  FolderKanban,
  Settings,
} from "lucide-react";
import { useLanguage } from "./lunguageContext";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { FaJenkins } from "react-icons/fa";
import { RxTimer } from "react-icons/rx";
import { TiArrowRepeatOutline } from "react-icons/ti";

// Lazy load component for images
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

// Counter component for count-up effect
const AnimatedCounter = ({ value, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(parseFloat(value));
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.onChange((latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [springValue]);

  const formatValue = (num) => {
    const suffix = value.toString().match(/[+%]/)?.[0] || "";
    const numValue = Math.round(num);
    return `${numValue}${suffix}`;
  };

  return <span ref={ref}>{formatValue(displayValue)}</span>;
};

const Home = () => {
  const { t } = useLanguage();
  const [heroImagesLoaded, setHeroImagesLoaded] = useState(false);

  // Color palette
  const colors = useMemo(() => ({
    chiliRed: "#E3180D",
    scarlet: "#FF2A00",
    flame: "#D92603",
    bloodOrange: "#B50001",
    persimmon: "#E45B11",
    safetyOrange: "#FA7301",
    tangerine: "#FF7805",
    darkOrange: "#E35906",
    brightOrange: "#F99E09",
    amber: "#F3B900",
    mustardYellow: "#FFC60A",
    mustard: "#FCD92A",
    mustardLight: "#FFDC5E",
    sunset: "#F2CC88",
    peach: "#FBCB98",
    darkGray: "#2D2D2D",
    mediumGray: "#666666",
    lightGray: "#F5F5F5",
    white: "#FFFFFF",
  }), []);

  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Optimized image list - only unique images, no repetition
  const heroImages = useMemo(() => [
    "/f.jpg", "/g.jpg", "/h.jpg", "/i.jpg", "/j.jpg",
    "/k.jpg", "/l.jpg", "/m.jpg", "/q.jpg", "/r.jpg"
  ], []);

  const stats = [
    {
      icon: GrProjects,
      value: "1000+",
      label: t("home.stats.projects"),
      colorFrom: colors.chiliRed,
      colorTo: colors.brightOrange,
    },
    {
      icon: FaJenkins,
      value: "350+",
      label: t("home.stats.clients"),
      colorFrom: colors.scarlet,
      colorTo: colors.darkOrange,
    },
    {
      icon: RxTimer,
      value: "25+",
      label: t("home.stats.experience"),
      colorFrom: colors.brightOrange,
      colorTo: colors.amber,
    },
    {
      icon: TiArrowRepeatOutline,
      value: "98%",
      label: t("home.stats.satisfaction"),
      colorFrom: colors.darkOrange,
      colorTo: colors.mustardYellow,
    },
  ];

  const services = [
    {
      icon: MessageCircle,
      title: t("services.consulting.title"),
      description: t("services.consulting.desc"),
      colorFrom: colors.chiliRed,
      colorTo: colors.brightOrange,
    },
    {
      icon: Cpu,
      title: t("services.engineering.title"),
      description: t("services.engineering.desc"),
      colorFrom: colors.scarlet,
      colorTo: colors.persimmon,
    },
    {
      icon: Lightbulb,
      title: t("services.design.title"),
      description: t("services.design.desc"),
      colorFrom: colors.brightOrange,
      colorTo: colors.amber,
    },
    {
      icon: FlaskConical,
      title: t("services.testing.title"),
      description: t("services.testing.desc"),
      colorFrom: colors.flame,
      colorTo: colors.safetyOrange,
    },
    {
      icon: Factory,
      title: t("services.production.title"),
      description: t("services.production.desc"),
      colorFrom: colors.darkOrange,
      colorTo: colors.mustardYellow,
    },
    {
      icon: HeadphonesIcon,
      title: t("services.afterService.title"),
      description: t("services.afterService.desc"),
      colorFrom: colors.persimmon,
      colorTo: colors.tangerine,
    },
    {
      icon: FolderKanban,
      title: t("services.projectManagement.title"),
      description: t("services.projectManagement.desc"),
      colorFrom: colors.safetyOrange,
      colorTo: colors.amber,
    },
    {
      icon: Settings,
      title: t("services.installation.title"),
      description: t("services.installation.desc"),
      colorFrom: colors.chiliRed,
      colorTo: colors.darkOrange,
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We never compromise on quality and craftsmanship in every project we undertake.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "Constantly evolving with industry trends and implementing cutting-edge solutions.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description:
        "Dependable service delivery, meeting deadlines and exceeding expectations.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description:
        "Your success is our priority. We work closely with you every step of the way.",
    },
  ];

  const handleAction = (action) => {
    if (action === "call") {
      window.location.href = "tel:+263781934986";
    } else if (action === "email") {
      window.location.href = "mailto:info@globalshopfitters.co.zw";
    } else if (action === "whatsapp") {
      window.location.href =
        "https://wa.me/263781934986?text=Hello%20Global%20Shopfitters,%20I%20am%20interested%20in%20your%20services.";
    }
  };

  // Preload critical images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = heroImages.slice(0, 3).map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });
      
      await Promise.all(imagePromises);
      setHeroImagesLoaded(true);
    };
    
    preloadImages();
  }, [heroImages]);

  const heroSectionStyle = {
    minHeight: "100vh",
    paddingTop: "140px", // Increased to account for top bar + navbar
    marginTop: "0", // Remove negative margin to prevent overlap
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `linear-gradient(135deg, #1a1a1a 0%, ${colors.darkGray} 50%, #2a2a2a 100%)`,
    position: "relative",
    overflow: "hidden",
  };

  const buttonPrimaryStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 32px",
    background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
    color: colors.white,
    borderRadius: "5px",
    fontWeight: "600",
    textDecoration: "none",
    boxShadow: "0 4px 15px rgba(227, 24, 13, 0.4)",
    transition: "all 0.3s ease",
    border: "none",
    cursor: "pointer",
  };

  const buttonSecondaryStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 32px",
    background: "rgba(255, 255, 255, 0.05)",
    color: colors.white,
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "5px",
    fontWeight: "600",
    textDecoration: "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const sectionStyle = {
    padding: "80px 20px",
  };

  const containerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
  };

  const sectionTitleStyle = {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: "800",
    color: colors.darkGray,
    marginBottom: "16px",
    textAlign: "center",
  };

  const sectionSubtitleStyle = {
    fontSize: "clamp(1rem, 2vw, 1.25rem)",
    color: colors.mediumGray,
    textAlign: "center",
    maxWidth: "768px",
    margin: "0 auto 64px",
  };

  const cardStyle = {
    background: colors.white,
    borderRadius: "5px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s ease",
    height: "100%",
  };

  const glassmorphismCardStyle = {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: "5px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
    transition: "all 0.3s ease",
    height: "100%",
  };

  return (
    <div style={{ overflow: "hidden" }}>
      {/* Hero Section - Optimized */}
      <section style={heroSectionStyle}>
        {/* Optimized Image Mosaic Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base gradient - keep this for immediate color */}
          <div
            className="absolute inset-0 bg-gradient-to-br z-0"
            style={{
              background: `linear-gradient(135deg, ${colors.chiliRed} 0%, ${colors.scarlet} 50%, ${colors.darkOrange} 100%)`,
            }}
          />

          {/* Optimized Image Mosaic Grid - Much fewer images with CSS pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 35px,
                  rgba(255, 255, 255, 0.05) 35px,
                  rgba(255, 255, 255, 0.05) 70px
                ),
                repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 35px,
                  rgba(0, 0, 0, 0.03) 35px,
                  rgba(0, 0, 0, 0.03) 70px
                )
              `,
            }}
          />

          {/* Reduced image grid - only 20 images instead of 100 */}
          <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-5 gap-0.5 p-4 transform -rotate-12 scale-125">
            {heroImages.concat(heroImages).map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroImagesLoaded ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: (index % 5) * 0.1,
                  duration: 0.5,
                }}
                className="relative aspect-square rounded-sm overflow-hidden"
                style={{
                  willChange: 'auto',
                }}
              >
                <LazyImage
                  src={img}
                  alt=""
                  priority={index < 3}
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.7, objectPosition: 'top center' }}
                />
              </motion.div>
            ))}
          </div>

          {/* Overlays for text readability */}
          <div
            className="absolute inset-0 opacity-10 z-10"
            style={{
              background: `linear-gradient(135deg, ${colors.chiliRed}E0 0%, ${colors.scarlet}D0 50%, ${colors.darkOrange}E0 50%)`,
            }}
          />

          <div className="absolute inset-0 bg-black/20 opacity-50 z-20" />

          {/* Enhanced top gradient for navbar area */}
          <div
            className="absolute top-0 left-0 right-0 h-40 z-30"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
            }}
          />

          {/* Radial gradient for center focus */}
          <div
            className="absolute inset-0 z-30"
            style={{
              background:
                "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)",
            }}
          />
        </div>

        <div
          style={{
            ...containerStyle,
            position: "relative",
            zIndex: 40,
            padding: "10px 20px 80px",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ color: colors.white }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ marginBottom: "32px" }}
            >
              {/* CIFZ Membership Badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  padding: "12px 20px",
                  borderRadius: "5px",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  maxWidth: "fit-content",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px",
                  }}
                >
                  <LazyImage
                    src="/cifz.png"
                    alt="CIFZ Logo"
                    priority={true}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div style={{ textAlign: "left" }}>
                  <div
                    style={{
                      color: colors.white,
                      fontWeight: "700",
                      fontSize: "0.875rem",
                      lineHeight: "1.2",
                    }}
                  >
                    Proud Class A Member
                  </div>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.85)",
                      fontSize: "0.75rem",
                      lineHeight: "1.2",
                    }}
                  >
                    Construction Industry Federation of Zimbabwe
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                fontSize: "clamp(3rem, 8vw, 5rem)",
                fontWeight: "900",
                lineHeight: "1.1",
                color: colors.white,
                marginBottom: "24px",
                textShadow: "0 2px 20px rgba(0, 0, 0, 0.3)",
              }}
            >
              {t("home.hero.title")}{" "}
              <span
                style={{
                  display: "",
                  marginTop: "12px",
                  background: `linear-gradient(90deg, ${colors.mustardLight} 0%, ${colors.amber} 50%, ${colors.brightOrange} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: "900",
                }}
              >
                {t("home.hero.titleHighlight")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                fontSize: "clamp(1.125rem, 3vw, 1.5rem)",
                color: "rgba(255, 255, 255, 0.95)",
                lineHeight: "1.7",
                maxWidth: "768px",
                margin: "0 auto 48px",
                fontWeight: "500",
                textShadow: "0 1px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              {t("home.hero.subtitle")}{" "}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "center",
              }}
            >
              <Link
                to="/services"
                style={buttonPrimaryStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-2px) scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(227, 24, 13, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(227, 24, 13, 0.4)";
                }}
              >
                <span>{t("home.hero.cta1")}</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/projects"
                style={{
                  ...buttonSecondaryStyle,
                  background: "transparent",
                  border: "2px solid white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.white;
                  e.currentTarget.style.color = colors.darkGray;
                  e.currentTarget.style.transform =
                    "translateY(-2px) scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = colors.white;
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                }}
              >
                <span>{t("home.hero.cta2")}</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 50,
          }}
        >
          <div
            style={{
              width: "24px",
              height: "40px",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              paddingTop: "8px",
            }}
          >
            <div
              style={{
                width: "4px",
                height: "12px",
                background: "rgba(255, 255, 255, 0.5)",
                borderRadius: "5px",
              }}
            ></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section with Count-Up Effect */}
      <section style={{ ...sectionStyle, background: colors.white }}>
        <div style={containerStyle}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: `linear-gradient(135deg, ${stat.colorFrom}, ${stat.colorTo})`,
                    borderRadius: "5px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    boxShadow: `0 4px 20px ${stat.colorFrom}30`,
                    transition: "transform 0.3s ease",
                    willChange: 'transform',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <stat.icon size={36} style={{ color: colors.white }} />
                </div>
                <h3
                  style={{
                    fontSize: "3rem",
                    fontWeight: "800",
                    color: colors.darkGray,
                    marginBottom: "8px",
                  }}
                >
                  <AnimatedCounter value={stat.value} duration={2.5} />
                </h3>
                <p style={{ color: colors.mediumGray, fontSize: "1rem" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Optimized with lazy loading */}
      <section
        style={{
          ...sectionStyle,
          background: colors.lightGray,
          opacity: 1,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Optimized Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(135deg, ${colors.chiliRed}15 0%, ${colors.safetyOrange}15 50%, ${colors.amber}15 50%)`,
            }}
          />

          {/* Use CSS pattern instead of image for performance */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.1,
              backgroundImage: `
                radial-gradient(circle at 20% 80%, ${colors.chiliRed}40 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, ${colors.amber}40 0%, transparent 50%),
                radial-gradient(circle at 40% 50%, ${colors.safetyOrange}20 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div style={{ ...containerStyle, position: "relative", zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={sectionTitleStyle}>{t("home.services.title")}</h2>
            <p style={sectionSubtitleStyle}>{t("home.services.subtitle")}</p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px",
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{
                  ...glassmorphismCardStyle,
                  padding: "32px",
                  cursor: "pointer",
                  willChange: 'auto',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.25)";
                  e.currentTarget.style.boxShadow = `0 12px 40px ${service.colorFrom}35`;
                  e.currentTarget.style.border = `1px solid ${service.colorFrom}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px 0 rgba(31, 38, 135, 0.15)";
                  e.currentTarget.style.border =
                    "1px solid rgba(255, 255, 255, 0.3)";
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: `linear-gradient(135deg, ${service.colorFrom}, ${service.colorTo})`,
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    boxShadow: `0 4px 15px ${service.colorFrom}40`,
                    transition: "transform 0.3s ease",
                  }}
                >
                  <service.icon size={28} style={{ color: colors.white }} />
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: colors.darkGray,
                    marginBottom: "12px",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: colors.mediumGray,
                    marginBottom: "20px",
                    lineHeight: "1.6",
                  }}
                >
                  {service.description}
                </p>
                <Link
                  to="/services"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: colors.chiliRed,
                    fontWeight: "600",
                    textDecoration: "none",
                    transition: "gap 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = "12px")}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
                >
                  <span>{t("common.learnMore")}</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{ textAlign: "center", marginTop: "48px" }}
          >
            <Link
              to="/services"
              style={buttonPrimaryStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(227, 24, 13, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(227, 24, 13, 0.4)";
              }}
            >
              <span>View All Services</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Floating Action Elements */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          className="group bg-gradient-to-br from-[#1a1a1a] via-[#2d0000] to-[#1a1a1a] hover:bg-green-300 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("whatsapp")}
        >
          <IoLogoWhatsapp className="w-6 h-6 group-hover:rotate-12 transition-transform text-white" />
        </button>
        <button
          className="group bg-gradient-to-br from-[#1a1a1a] via-[#2d0000] to-[#1a1a1a] hover:bg-green-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("call")}
        >
          <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
        <button
          className="group bg-gradient-to-br from-[#1a1a1a] via-[#2d0000] to-[#1a1a1a] hover:bg-blue-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("email")}
        >
          <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* Why Choose Us Section */}
      <section style={{ ...sectionStyle, background: colors.white }}>
        <div style={containerStyle}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={sectionTitleStyle}>{t("home.whyUs.title")}</h2>
            <p style={sectionSubtitleStyle}>{t("home.whyUs.subtitle")}</p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "32px",
            }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.amber})`,
                    borderRadius: "5%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                    boxShadow: `0 4px 20px ${colors.chiliRed}30`,
                    transition: "all 0.3s ease",
                    willChange: 'transform',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                  }}
                >
                  <item.icon size={32} style={{ color: colors.white }} />
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: colors.darkGray,
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: colors.mediumGray, lineHeight: "1.6" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          ...sectionStyle,
          background: `linear-gradient(135deg, ${colors.chiliRed} 0%, ${colors.safetyOrange} 50%, ${colors.amber} 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.1,
            backgroundImage: `radial-gradient(circle at 20% 50%, ${colors.white} 0%, transparent 50%), radial-gradient(circle at 80% 80%, ${colors.white} 0%, transparent 50%)`,
          }}
        ></div>

        <div style={{ ...containerStyle, position: "relative", zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              color: colors.white,
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "800",
                marginBottom: "24px",
              }}
            >
              {t("home.cta.title")}
            </h2>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                marginBottom: "32px",
                opacity: 0.95,
              }}
            >
              {t("home.cta.subtitle")}
            </p>
            <Link
              to="/contact"
              style={{
                ...buttonPrimaryStyle,
                background: colors.white,
                color: colors.darkGray,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 30px rgba(0, 0, 0, 0.3)";
                e.currentTarget.style.background = colors.lightGray;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0, 0, 0, 0.2)";
                e.currentTarget.style.background = colors.white;
              }}
            >
              <span>{t("home.cta.button")}</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;