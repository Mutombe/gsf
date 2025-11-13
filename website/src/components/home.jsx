import React, { useEffect, useRef, useState } from "react";
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

  // Format the value (handle numbers with + or %)
  const formatValue = (num) => {
    const suffix = value.toString().match(/[+%]/)?.[0] || "";
    const numValue = Math.round(num);
    return `${numValue}${suffix}`;
  };

  return <span ref={ref}>{formatValue(displayValue)}</span>;
};

const Home = () => {
  const { t } = useLanguage();

  // Color palette from images
  const colors = {
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
  };

  const stats = [
    {
      icon: GrProjects,
      value: "500+",
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

  // Styles
  const heroSectionStyle = {
    minHeight: "100vh",
    paddingTop: "-150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `linear-gradient(135deg, #1a1a1a 0%, ${colors.darkGray} 50%, #2a2a2a 100%)`,
    position: "relative",
    overflow: "hidden",
  };

  const heroBadgeStyle = {
    display: "inline-block",
    padding: "8px 20px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "50px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    fontSize: "14px",
    fontWeight: "500",
    color: colors.white,
    marginBottom: "32px",
  };

  const heroTitleStyle = {
    fontSize: "clamp(2.5rem, 8vw, 5rem)",
    fontWeight: "800",
    lineHeight: "1.1",
    color: colors.white,
    marginBottom: "16px",
  };

  const handleAction = (action) => {
    if (action === "call") {
      window.location.href = "tel:+263785948128";
    } else if (action === "email") {
      window.location.href = "mailto:info@globalshopfitters.co.zw";
    } else if (action === "whatsapp") {
      window.location.href =
        "https://wa.me/263785948128?text=Hello%20Global%20Shopfitters,%20I%20am%20interested%20in%20your%20services.";
    }
  };

  const heroHighlightStyle = {
    display: "block",
    marginTop: "8px",
    background: `linear-gradient(90deg, ${colors.mustardLight} 0%, ${colors.amber} 50%, ${colors.safetyOrange} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const heroSubtitleStyle = {
    fontSize: "clamp(1rem, 3vw, 1.5rem)",
    color: "rgba(255, 255, 255, 0.85)",
    lineHeight: "1.6",
    maxWidth: "600px",
    marginBottom: "32px",
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
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s ease",
    height: "100%",
  };

  // Glassmorphism card style
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
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        {/* Image Mosaic Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-br z-0"
            style={{
              background: `linear-gradient(135deg, ${colors.chiliRed} 0%, ${colors.scarlet} 50%, ${colors.darkOrange} 100%)`,
            }}
          />

          {/* Image Mosaic Grid - Responsive columns: 4 mobile, 6 tablet, 10 desktop */}
          <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 p-4 transform -rotate-12 scale-125">
            {[
              // Modern architecture & skyscrapers
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=75",
              "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=75",
              "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&q=75",
              "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&q=75",
              "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300&q=75",
              "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=300&q=75",
              "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=300&q=75",
              "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&q=75",
              "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=300&q=75",
              "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=300&q=75",

              // Glass buildings & facades
              "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=300&q=75",
              "/31.jpg",
              "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=300&q=75",
              "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=300&q=75",
              "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=300&q=75",
              "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&q=75",
              "/30.jpg",
              "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=300&q=75",
              "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=300&q=75",
              "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?w=300&q=75",

              // Industrial & construction
              "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&q=75",
              "/29.jpg",
              "/28.jpg",
              "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&q=75",
              "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&q=75",
              "/27.jpg",
              "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&q=75",
              "/26.jpg",
              "/25.jpg",
              "/24.jpg",

              // Doors & entrances
              "/23.jpg",
              "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=75",
              "/21.jpg",
              "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=300&q=75",
              "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300&q=75",
              "/32.jpg",
              "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=300&q=75",
              "/22.jpg",
              "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?w=300&q=75",
              "/20.jpg",

              // Windows & window systems
              "/19.jpg",
              "/18.jpg",
              "/17.jpg",
              "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&q=75",
              "/16.jpg",
              "/15.jpg",
              "/33.jpg",
              "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=300&q=75",
              "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=300&q=75",
              "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?w=300&q=75",

              // Commercial buildings & offices
              "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=300&q=75",
              "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=300&q=75",
              "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=300&q=75",
              "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=300&q=75",
              "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=300&q=75",
              "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=300&q=75",
              "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=300&q=75",
              "/14.jpg",
              "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=300&q=75",
              "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=300&q=75",

              // Roofing & exterior materials
              "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=300&q=75",
              "/13.jpg",
              "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=300&q=75",
              "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=300&q=75",
              "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=300&q=75",
              "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=300&q=75",
              "/12.png",
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&q=75",
              "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=300&q=75",
              "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=300&q=75",

              // Metal & aluminum structures
              "/11.png",
              "/7.png",
              "https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=300&q=75",
              "/10.jpg",
              "/9.jpg",
              "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&q=75",
              "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&q=75",
              "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&q=75",
              "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=300&q=75",
              "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&q=75",

              // Retail & shopfitting
              "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=300&q=75",
              "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=300&q=75",
              "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=300&q=75",
              "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&q=75",
              "https://images.unsplash.com/photo-1555529902-5261145633bf?w=300&q=75",
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&q=75",
              "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=300&q=75",
              "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=300&q=75",
              "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=300&q=75",
              "/8.jpg",

              // Contemporary architecture
              "https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=300&q=75",
              "/2.jpg",
              "/6.png",
              "/5.jpg",
              "/4.jpg",
              "/3.jpg",
              "/1.jpg",
              "/2.jpg",
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: (index % 10) * 0.05,
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: Math.random() * 5 + 3,
                }}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={img}
                  alt="Shopfitting project"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover opacity-70"
                />
              </motion.div>
            ))}
          </div>

          {/* Overlays for text readability */}
          <div
            className="absolute inset-0 opacity-20 z-10"
            style={{
              background: `linear-gradient(135deg, ${colors.chiliRed}E0 0%, ${colors.scarlet}D0 50%, ${colors.darkOrange}E0 50%)`,
            }}
          />

          <div className="absolute inset-0 bg-black/20 opacity-50 z-20" />

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
                  borderRadius: "4px",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  maxWidth: "fit-content",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px",
                  }}
                >
                  <img
                    src="/cifz.png"
                    alt="CIFZ Logo"
                    loading="eager"
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    onError={(e) => {
                      // Fallback if logo doesn't load
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<div style="color: #E3180D; font-weight: 800; font-size: 14px;">CIFZ</div>';
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
                    Proud Member
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
              borderRadius: "20px",
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
                borderRadius: "2px",
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

      {/* Services Section with Blended Image Background and Glassmorphism Cards */}
      <section
        style={{
          ...sectionStyle,
          background: colors.lightGray,
          opacity: 1,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blended Background Image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          {/* Base gradient layer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(135deg, ${colors.chiliRed}15 0%, ${colors.safetyOrange}15 50%, ${colors.amber}15 50%)`,
            }}
          />

          {/* Single background image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.3,
            }}
          >
            <img
              src="/2.jpg"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Overlay for better text readability */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255, 255, 255, 0.85)",
              mixBlendMode: "overlay",
              opacity: 0.4,
              backdropFilter: "blur(1px)",
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
                    borderRadius: "7%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                    boxShadow: `0 4px 20px ${colors.chiliRed}30`,
                    transition: "all 0.3s ease",
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
