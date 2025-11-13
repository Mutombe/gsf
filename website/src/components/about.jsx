import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Target,
  Eye,
  Shield,
  Users,
  Zap,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "./lunguageContext";

const About = () => {
  const { t } = useLanguage();

  // Color palette
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

  const values = [
    {
      icon: Award,
      title: t("about.values.quality"),
      description: t("about.values.qualityDesc"),
      colorFrom: colors.chiliRed,
      colorTo: colors.brightOrange,
      size: "large", // Bento grid size
    },
    {
      icon: Zap,
      title: t("about.values.innovation"),
      description: t("about.values.innovationDesc"),
      colorFrom: colors.brightOrange,
      colorTo: colors.amber,
      size: "medium",
    },
    {
      icon: Shield,
      title: t("about.values.integrity"),
      description: t("about.values.integrityDesc"),
      colorFrom: colors.scarlet,
      colorTo: colors.darkOrange,
      size: "medium",
    },
    {
      icon: Users,
      title: t("about.values.customer"),
      description: t("about.values.customerDesc"),
      colorFrom: colors.darkOrange,
      colorTo: colors.chiliRed,
      size: "large",
    },
  ];

  const timeline = [
    {
      year: "2000",
      event: "Company Founded",
      description: "Global Shopfitters established in Harare",
      icon: Award,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      color: "#FDDB3A",
    },
    {
      year: "2012",
      event: "Major Expansion",
      description: "Expanded operations across Zimbabwe",
      icon: TrendingUp,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      color: "#6B7280",
    },
    {
      year: "2016",
      event: "Industry Recognition",
      description: "Awarded Best Shopfitting Company",
      icon: Award,
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80",
      color: "#10B981",
    },
    {
      year: "2020",
      event: "Technology Integration",
      description: "Introduced cutting-edge design technology",
      icon: Zap,
      image:
        "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80",
      color: "#06B6D4",
    },
    {
      year: "2024",
      event: "Regional Leader",
      description: "Became Zimbabwe's premium shopfitting company",
      icon: TrendingUp,
      image:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
      color: "#3B82F6",
    },
  ];

  const team = [
    {
      name: "Leadership Team",
      role: "Experienced Professionals",
      count: "25+",
    },
    { name: "Craftsmen", role: "Skilled Artisans", count: "50+" },
    { name: "Designers", role: "Creative Minds", count: "20+" },
    { name: "Support Staff", role: "Dedicated Team", count: "30+" },
  ];

  // Styles
  const heroSectionStyle = {
    position: "relative",
    padding: "120px 20px 80px",
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    background: `linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(245, 245, 245, 0.95) 50%, rgba(250, 250, 250, 0.98) 100%)`,
    color: colors.darkGray,
    overflow: "hidden",
  };

  const heroBadgeStyle = {
    display: "inline-block",
    padding: "12px 24px",
    background: "rgba(227, 24, 13, 0.08)",
    backdropFilter: "blur(10px)",
    borderRadius: "50px",
    border: "1px solid rgba(227, 24, 13, 0.2)",
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "24px",
  };

  const heroTitleStyle = {
    fontSize: "clamp(2.5rem, 8vw, 5rem)",
    fontWeight: "800",
    lineHeight: "1.1",
    marginBottom: "24px",
  };

  const heroSubtitleStyle = {
    fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
    color: colors.mediumGray,
    lineHeight: "1.6",
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
    marginBottom: "64px",
  };

  const cardStyle = {
    background: colors.white,
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s ease",
  };

  return (
    <div style={{ overflow: "hidden" }}>
      {/* Enhanced Hero Section with Light Background */}
      <section style={heroSectionStyle}>
        {/* Background Image Layer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
          }}
        ></div>

        {/* Overlay Pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23E3180D' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          }}
        ></div>

        <div style={{ ...containerStyle, position: "relative", zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center", maxWidth: "896px", margin: "0 auto" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={heroBadgeStyle}
            >
              <span
                style={{
                  background: `linear-gradient(90deg, ${colors.chiliRed} 0%, ${colors.amber} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Established 2000 • Zimbabwe's Trusted Partner
              </span>
            </motion.div>

            <h1 style={heroTitleStyle}>{t("about.title")}</h1>
            <p style={heroSubtitleStyle}>{t("about.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Creative Company Story Section */}
      <section
        style={{
          ...sectionStyle,
          background: colors.white,
          position: "relative",
        }}
      >
        {/* Decorative Elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "200px",
            height: "200px",
            background: `radial-gradient(circle, ${colors.mustardLight}20, transparent)`,
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "5%",
            width: "300px",
            height: "300px",
            background: `radial-gradient(circle, ${colors.scarlet}15, transparent)`,
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        ></div>

        <div style={containerStyle}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "64px",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{
                  display: "inline-block",
                  padding: "8px 20px",
                  background: `linear-gradient(90deg, ${colors.chiliRed}, ${colors.brightOrange})`,
                  color: colors.white,
                  borderRadius: "50px",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "24px",
                  letterSpacing: "1px",
                }}
              >
                OUR STORY
              </motion.div>

              <h2
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                  fontWeight: "900",
                  color: colors.darkGray,
                  marginBottom: "32px",
                  lineHeight: "1.2",
                }}
              >
                {t("about.story.title")}
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  fontSize: "18px",
                  color: colors.mediumGray,
                  lineHeight: "1.8",
                }}
              >
                <p
                  style={{
                    paddingLeft: "24px",
                    borderLeft: `4px solid ${colors.chiliRed}`,
                    fontWeight: "500",
                    fontSize: "20px",
                    color: colors.darkGray,
                  }}
                >
                  {t("about.story.text")}
                </p>
                <p>
                  Since our establishment, we have been committed to delivering
                  excellence in every project. Our team of skilled craftsmen and
                  designers work tirelessly to create  commercial and residential spaces. spaces that not
                  only look impressive but also function efficiently to drive
                  business success.
                </p>
                <p>
                  From small boutique stores to large commercial spaces,
                  we have successfully completed hundreds of projects across
                  Zimbabwe, earning us a reputation for reliability, quality,
                  and innovation.
                </p>
              </div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "24px",
                  marginTop: "40px",
                }}
              >
                {[
                  { number: "500+", label: "Projects Completed" },
                  { number: "100+", label: "Happy Clients" },
                  { number: "25+", label: "Years Experience" },
                ].map((stat, index) => (
                  <div key={index} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "2.5rem",
                        fontWeight: "800",
                        background: `linear-gradient(90deg, ${colors.chiliRed}, ${colors.amber})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        marginBottom: "8px",
                      }}
                    >
                      {stat.number}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: colors.mediumGray,
                        fontWeight: "500",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: "relative" }}
            >
              {/* Main Image Card */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "600px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 30px 80px rgba(0, 0, 0, 0.2)",
                }}
              >
                {/* Gradient Background */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `url(/23.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                {/* Decorative Circles */}
                <div
                  style={{
                    position: "absolute",
                    top: "10%",
                    right: "10%",
                    width: "150px",
                    height: "150px",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "50%",
                    backdropFilter: "blur(10px)",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "15%",
                    left: "15%",
                    width: "200px",
                    height: "200px",
                    background: "rgba(255, 255, 255, 0.08)",
                    borderRadius: "50%",
                    backdropFilter: "blur(10px)",
                  }}
                ></div>

                {/* Icon */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Award
                    size={200}
                    style={{ color: "rgba(255, 255, 255, 0.2)" }}
                  />
                </div>

                {/* Content Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%)",
                  }}
                ></div>

                <div
                  style={{
                    position: "absolute",
                    bottom: "40px",
                    left: "40px",
                    right: "40px",
                    color: colors.white,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "4rem",
                      fontWeight: "900",
                      marginBottom: "12px",
                      textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    25+ Years
                  </h3>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "500",
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    Of Excellence in Shopfitting
                  </p>
                </div>
              </div>

              {/* CIFZ Membership Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                style={{
                  position: "absolute",
                  top: "30px",
                  left: "-30px",
                  background: colors.white,
                  padding: "24px",
                  borderRadius: "16px",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
                  maxWidth: "240px",
                  border: `2px solid ${colors.lightGray}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  {/* CIFZ Logo - Replace with actual logo path */}
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      background: colors.lightGray,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src="/cifz.png"
                      alt="CIFZ Logo"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        padding: "4px",
                      }}
                      onError={(e) => {
                        // Fallback if logo doesn't exist
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML =
                          '<span style="font-size: 20px; font-weight: 800; color: ' +
                          colors.chiliRed +
                          '">CIFZ</span>';
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: colors.mediumGray,
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        marginBottom: "2px",
                      }}
                    >
                      Proud Member
                    </div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "700",
                        color: colors.darkGray,
                        lineHeight: "1.2",
                      }}
                    >
                      CIFZ
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: colors.mediumGray,
                    lineHeight: "1.4",
                    borderTop: `1px solid ${colors.lightGray}`,
                    paddingTop: "12px",
                  }}
                >
                  Construction Industry Federation of Zimbabwe
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={{ ...sectionStyle, background: colors.lightGray }}>
        <div style={containerStyle}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                ...cardStyle,
                padding: "48px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(0, 0, 0, 0.15)";
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Blended Background Image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.08,
                  mixBlendMode: "multiply",
                }}
              ></div>

              {/* Background Decoration */}
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "150px",
                  height: "150px",
                  background: `linear-gradient(135deg, ${colors.chiliRed}15, ${colors.brightOrange}15)`,
                  borderRadius: "50%",
                  filter: "blur(40px)",
                }}
              ></div>

              <div
                style={{
                  width: "72px",
                  height: "72px",
                  background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.brightOrange})`,
                  borderRadius: "16px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "32px",
                  boxShadow: `0 8px 24px ${colors.chiliRed}40`,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Target size={36} style={{ color: colors.white }} />
              </div>

              <h2
                style={{
                  fontSize: "2.25rem",
                  fontWeight: "800",
                  color: colors.darkGray,
                  marginBottom: "20px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {t("about.mission.title")}
              </h2>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: colors.mediumGray,
                  lineHeight: "1.8",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {t("about.mission.text")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                ...cardStyle,
                padding: "48px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(0, 0, 0, 0.15)";
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Blended Background Image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.08,
                  mixBlendMode: "multiply",
                }}
              ></div>

              {/* Background Decoration */}
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "150px",
                  height: "150px",
                  background: `linear-gradient(135deg, ${colors.scarlet}15, ${colors.darkOrange}15)`,
                  borderRadius: "50%",
                  filter: "blur(40px)",
                }}
              ></div>

              <div
                style={{
                  width: "72px",
                  height: "72px",
                  background: `linear-gradient(135deg, ${colors.scarlet}, ${colors.darkOrange})`,
                  borderRadius: "16px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "32px",
                  boxShadow: `0 8px 24px ${colors.scarlet}40`,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Eye size={36} style={{ color: colors.white }} />
              </div>

              <h2
                style={{
                  fontSize: "2.25rem",
                  fontWeight: "800",
                  color: colors.darkGray,
                  marginBottom: "20px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {t("about.vision.title")}
              </h2>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: colors.mediumGray,
                  lineHeight: "1.8",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {t("about.vision.text")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Values Section */}
      <section style={{ ...sectionStyle, background: colors.white }}>
        <div style={containerStyle}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={sectionTitleStyle}>{t("about.values.title")}</h2>
            <p style={sectionSubtitleStyle}>
              The principles that guide everything we do
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gridAutoRows: "240px",
              gap: "24px",
            }}
          >
            {values.map((value, index) => {
              // Different images for each value
              const valueImages = [
                "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80", // Quality
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80", // Innovation
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80", // Integrity
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80", // Customer
              ];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  style={{
                    ...cardStyle,
                    gridColumn:
                      value.size === "large" && window.innerWidth > 768
                        ? "span 2"
                        : "span 1",
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 16px 48px ${value.colorFrom}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0, 0, 0, 0.08)";
                  }}
                >
                  {/* Blended Background Image */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url("${valueImages[index]}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 0.12,
                      mixBlendMode: "multiply",
                    }}
                  ></div>

                  {/* Background Gradient Decoration */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-30%",
                      right: "-20%",
                      width: "200px",
                      height: "200px",
                      background: `radial-gradient(circle, ${value.colorFrom}20, transparent)`,
                      borderRadius: "50%",
                      filter: "blur(40px)",
                    }}
                  ></div>

                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        background: `linear-gradient(135deg, ${value.colorFrom}, ${value.colorTo})`,
                        borderRadius: "14px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px",
                        boxShadow: `0 8px 24px ${value.colorFrom}40`,
                      }}
                    >
                      <value.icon size={32} style={{ color: colors.white }} />
                    </div>

                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        color: colors.darkGray,
                        marginBottom: "12px",
                        lineHeight: "1.3",
                      }}
                    >
                      {value.title}
                    </h3>
                    <p
                      style={{
                        color: colors.mediumGray,
                        lineHeight: "1.7",
                        fontSize: "0.95rem",
                      }}
                    >
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section - Horizontal Card Design */}
      <section
        style={{
          ...sectionStyle,
          background: colors.lightGray,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={containerStyle}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "48px" }}
          >
            <h2 style={sectionTitleStyle}>Our Journey Through Time</h2>
            <p style={sectionSubtitleStyle}>
              Building trust, one milestone at a time
            </p>
          </motion.div>

          {/* Horizontal Timeline Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  {/* Year Label */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: "80px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: "800",
                        color: colors.darkGray,
                        lineHeight: "1",
                      }}
                    >
                      {item.year.substring(2)}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: colors.mediumGray,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        marginTop: "4px",
                      }}
                    >
                      Year
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    style={{
                      flex: 1,
                      position: "relative",
                    }}
                  >
                    <motion.div
                      style={{
                        background: colors.white,
                        borderRadius: "12px",
                        position: "relative",
                        overflow: "hidden",
                        minHeight: "120px",
                        display: "flex",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      whileHover={{ boxShadow: `0 12px 40px ${item.color}30` }}
                    >
                      {/* Colored End with Blended Image */}
                      <div
                        style={{
                          position: isEven ? "absolute" : "absolute",
                          [isEven ? "left" : "right"]: 0,
                          top: 0,
                          bottom: 0,
                          width: "160px",
                          borderRadius: isEven
                            ? "12px 0 0 12px"
                            : "0 12px 12px 0",
                          overflow: "hidden",
                        }}
                      >
                        {/* Background Color */}
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            backgroundColor: item.color,
                          }}
                        ></div>

                        {/* Blended Image */}
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            mixBlendMode: "multiply",
                            opacity: 0.5,
                          }}
                        ></div>

                        {/* Icon */}
                        <div
                          style={{
                            position: "relative",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1,
                          }}
                        >
                          <item.icon
                            size={32}
                            style={{ color: colors.white }}
                          />
                        </div>
                      </div>

                      {/* Opposite End - Subtle Gradient */}
                      <div
                        style={{
                          position: "absolute",
                          [isEven ? "right" : "left"]: 0,
                          top: 0,
                          bottom: 0,
                          width: "80px",
                          background: isEven
                            ? `linear-gradient(to right, ${colors.white}, ${colors.lightGray})`
                            : `linear-gradient(to right, ${colors.lightGray}, ${colors.white})`,
                          borderRadius: isEven
                            ? "0 12px 12px 0"
                            : "12px 0 0 12px",
                        }}
                      ></div>

                      {/* Text Content */}
                      <div
                        style={{
                          position: "relative",
                          zIndex: 10,
                          padding: "32px",
                          [isEven ? "paddingLeft" : "paddingRight"]: "180px",
                          [isEven ? "paddingRight" : "paddingLeft"]: "96px",
                          flex: 1,
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "1.5rem",
                            fontWeight: "700",
                            color: colors.darkGray,
                            marginBottom: "8px",
                            lineHeight: "1.3",
                          }}
                        >
                          {item.event}
                        </h3>
                        <p
                          style={{
                            fontSize: "1rem",
                            color: colors.mediumGray,
                            lineHeight: "1.6",
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              marginTop: "48px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "2px",
                background: `linear-gradient(to right, transparent, ${colors.mustardYellow})`,
              }}
            ></div>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: colors.mustardYellow,
              }}
            ></div>
            <div
              style={{
                width: "32px",
                height: "2px",
                background: `linear-gradient(to left, transparent, ${colors.mustardYellow})`,
              }}
            ></div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ ...sectionStyle, background: colors.white }}>
        <div style={containerStyle}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={sectionTitleStyle}>Our Team</h2>
            <p style={sectionSubtitleStyle}>The people behind our success</p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "32px",
            }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                style={{
                  textAlign: "center",
                  padding: "24px",
                  background: colors.white,
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(0, 0, 0, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0, 0, 0, 0.06)";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "128px",
                    height: "128px",
                    margin: "0 auto 20px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.amber})`,
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      inset: "6px",
                      background: colors.white,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "2.5rem",
                        fontWeight: "900",
                        background: `linear-gradient(90deg, ${colors.chiliRed} 0%, ${colors.safetyOrange} 50%, ${colors.amber} 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {member.count}
                    </span>
                  </div>
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: colors.darkGray,
                    marginBottom: "8px",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    color: colors.mediumGray,
                    fontSize: "0.95rem",
                  }}
                >
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
