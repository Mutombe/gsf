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
      icon: Shield,
      title: "Integrity & Professionalism",
      description:
        "We pride in integrity, professionalism and meeting time targets in all our projects.",
      colorFrom: colors.chiliRed,
      colorTo: colors.brightOrange,
      size: "large",
    },
    {
      icon: Users,
      title: "Client Care & Quality",
      description:
        "We value client care, competitive pricing and uncompromising quality in everything we do.",
      colorFrom: colors.brightOrange,
      colorTo: colors.amber,
      size: "medium",
    },
    {
      icon: Zap,
      title: "Innovation & Teamwork",
      description:
        "We believe in innovation, teamwork and respect as the foundation of our success.",
      colorFrom: colors.scarlet,
      colorTo: colors.darkOrange,
      size: "medium",
    },
    {
      icon: Award,
      title: "Excellence & Commitment",
      description:
        "We are committed to delivering excellence and maintaining the highest standards in the industry.",
      colorFrom: colors.darkOrange,
      colorTo: colors.chiliRed,
      size: "large",
    },
  ];

  const timeline = [
    {
      year: "2000",
      event: "Company Founded",
      description: "Global Shopfitters established by ex Fredic Sage team",
      icon: Award,
      image: "/m.jpg",
      color: "#FDDB3A",
    },
    {
      year: "2005",
      event: "Industry Recognition",
      description: "Became a Class A member of CIFZ",
      icon: Award,
      image: "/27.jpg",
      color: "#10B981",
    },
    {
      year: "2010",
      event: "Major Partnerships",
      description: "Partnered with leading banks and retail chains",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      color: "#6B7280",
    },
    {
      year: "2015",
      event: "New Management",
      description: "Acquired by NM Holdings, strengthening capabilities",
      icon: TrendingUp,
      image: "/k.jpg",
      color: "#06B6D4",
    },
    {
      year: "2025",
      event: "Industry Leader",
      description: "Zimbabwe's undisputed shopfitting leader",
      icon: Award,
      image: "/f.jpg",
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
    background: `linear-gradient(135deg, rgba(60, 60, 60, 0.98) 0%, rgba(255, 35, 35, 0.95) 50%, rgba(0, 0, 0, 0.98) 100%)`,
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
            backgroundImage: 'url("/about.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.38,
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

            <h1 style={heroTitleStyle}>About Global Shopfitters</h1>
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
                WHO WE ARE
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
                Who Are We?
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
                    fontWeight: "600",
                    fontSize: "22px",
                    color: colors.darkGray,
                  }}
                >
                  We are the image creators of today!!
                </p>
                <p>
                  We are Global Shopfitters (Proprietary Limited), formerly
                  formed in early 2000 by ex Fredic Sage and now under new
                  management. We are a wholly owned by indigenous Zimbabweans
                  with our major shareholder being NM Holdings.
                </p>
                <p>
                  We are an established, comprehensive leading and not just
                  shopfitting services company in the Construction Industry in
                  Zimbabwe. We are a Class A member organisation of CIFZ
                  (Construction Industry Federation of Zimbabwe).
                </p>
                <p>
                  We are registered with ZIMRA, NSSA, NEC and Zimdef, and we
                  practice environmentally compliant manufacturing.
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
                  { number: "1000+", label: "Projects Completed" },
                  { number: "200+", label: "Happy Clients" },
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
                    background: `url(/h.jpg)`,
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
                  {/* CIFZ Logo */}
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
                  backgroundImage: 'url("/r.jpg")',
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
                Our Mission
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
                To be the most sought after shopfitter in Zimbabwe, providing
                top quality and a responsive service.
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
                  backgroundImage: 'url("/f.jpg")',
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
                Our Vision
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
                To become an undisputed leader in shopfitting in Zimbabwe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Values Section - MOBILE RESPONSIVE */}
      <section style={{ ...sectionStyle, background: colors.white }}>
        <div style={containerStyle}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={sectionTitleStyle}>Beliefs, Values, Ethics</h2>
            <p style={sectionSubtitleStyle}>
              The principles that guide everything we do
            </p>
          </motion.div>

          {/* Responsive Bento Grid Layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "clamp(16px, 3vw, 24px)",
            }}
          >
            {values.map((value, index) => {
              const valueImages = ["/g.jpg", "/h.jpg", "/i.jpg", "/j.jpg"];

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
                    padding: "clamp(20px, 4vw, 32px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    minHeight: "200px",
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
                      width: "clamp(120px, 30vw, 200px)",
                      height: "clamp(120px, 30vw, 200px)",
                      background: `radial-gradient(circle, ${value.colorFrom}20, transparent)`,
                      borderRadius: "50%",
                      filter: "blur(40px)",
                    }}
                  ></div>

                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div
                      style={{
                        width: "clamp(56px, 10vw, 64px)",
                        height: "clamp(56px, 10vw, 64px)",
                        background: `linear-gradient(135deg, ${value.colorFrom}, ${value.colorTo})`,
                        borderRadius: "14px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "clamp(16px, 3vw, 20px)",
                        boxShadow: `0 8px 24px ${value.colorFrom}40`,
                      }}
                    >
                      <value.icon
                        size={window.innerWidth < 768 ? 28 : 32}
                        style={{ color: colors.white }}
                      />
                    </div>

                    <h3
                      style={{
                        fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                        fontWeight: "700",
                        color: colors.darkGray,
                        marginBottom: "clamp(8px, 2vw, 12px)",
                        lineHeight: "1.3",
                      }}
                    >
                      {value.title}
                    </h3>
                    <p
                      style={{
                        color: colors.mediumGray,
                        lineHeight: "1.7",
                        fontSize: "clamp(0.875rem, 2vw, 0.95rem)",
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

      {/* Visible Trading History Section */}
      <section style={{ ...sectionStyle, background: colors.lightGray }}>
        <div style={containerStyle}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              marginBottom: "clamp(32px, 6vw, 48px)",
            }}
          >
            <h2 style={sectionTitleStyle}>Visible Trading History</h2>
            <p style={sectionSubtitleStyle}>
              Trusted by Zimbabwe's leading brands and businesses
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: colors.white,
              padding: "clamp(40px, 6vw, 60px)",
              borderRadius: "24px",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
                color: colors.mediumGray,
                lineHeight: "1.8",
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              Together we can make it happen!! We have partnered with some of
              Zimbabwe's most respected brands and organizations, delivering
              excellence in every project.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "32px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {[
                {
                  name: "Edgars",
                  category: "Retail",
                  logo: "/logos/ed.png",
                },
                {
                  name: "OK Zimbabwe",
                  category: "Supermarkets",
                  logo: "/logos/ok.png",
                },
                {
                  name: "Pick n Pay",
                  category: "Retail",
                  logo: "/logos/pp.png",
                },
                {
                  name: "Nedbank",
                  category: "Banking",
                  logo: "/logos/nb.png",
                },
                {
                  name: "Stanbic Bank",
                  category: "Banking",
                  logo: "/logos/sb.png",
                },
                {
                  name: "NMB Bank",
                  category: "Banking",
                  logo: "/logos/nmb.png",
                },
                {
                  name: "ZB Bank",
                  category: "Banking",
                  logo: "/logos/zb-logo.svg",
                },
                {
                  name: "CBZ Holdings",
                  category: "Banking",
                  logo: "/logos/cbz1.png",
                },
                {
                  name: "Holiday Inn",
                  category: "Hospitality",
                  logo: "/logos/hi.png",
                },
                {
                  name: "National Bank",
                  category: "Banking",
                  logo: "/logos/nb.png",
                },
                { name: "Bata", category: "Retail", logo: "/logos/bt.png" },
              ].map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  style={{
                    textAlign: "center",
                    padding: "24px",
                    background: colors.lightGray,
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "140px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors.white;
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = colors.lightGray;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    style={{
                      width: "100%",
                      maxWidth: "120px",
                      height: "60px",
                      objectFit: "contain",
                      marginBottom: "12px",
                      filter: "grayscale(100%)",
                      opacity: "0.7",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = "grayscale(0%)";
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = "grayscale(100%)";
                      e.currentTarget.style.opacity = "0.7";
                    }}
                  />
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: colors.mediumGray,
                      fontWeight: "500",
                    }}
                  >
                    {client.category}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Timeline Section - MOBILE RESPONSIVE */}
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
            style={{
              textAlign: "center",
              marginBottom: "clamp(32px, 6vw, 48px)",
            }}
          >
            <h2 style={sectionTitleStyle}>Our Journey Through Time</h2>
            <p style={sectionSubtitleStyle}>
              Building trust, one milestone at a time
            </p>
          </motion.div>

          {/* Responsive Timeline Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(16px, 3vw, 20px)",
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
                    flexDirection: window.innerWidth < 768 ? "column" : "row",
                    alignItems: window.innerWidth < 768 ? "stretch" : "center",
                    gap: "16px",
                  }}
                >
                  {/* Year Label */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: window.innerWidth < 768 ? "100%" : "80px",
                      textAlign: window.innerWidth < 768 ? "left" : "center",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: window.innerWidth < 768 ? "1.75rem" : "2rem",
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
                        display: window.innerWidth < 768 ? "inline" : "block",
                      }}
                    >
                      {window.innerWidth < 768 ? "" : "Year"}
                    </div>
                  </div>

                  {/* Content Card - Mobile Responsive */}
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
                        minHeight: window.innerWidth < 768 ? "auto" : "120px",
                        display: "flex",
                        flexDirection:
                          window.innerWidth < 768 ? "column" : "row",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      whileHover={{ boxShadow: `0 12px 40px ${item.color}30` }}
                    >
                      {/* Colored Section with Image - Responsive */}
                      <div
                        style={{
                          position:
                            window.innerWidth < 768 ? "relative" : "absolute",
                          [window.innerWidth < 768
                            ? "top"
                            : isEven
                            ? "left"
                            : "right"]: 0,
                          [window.innerWidth < 768 ? "left" : "top"]: 0,
                          [window.innerWidth < 768 ? "right" : "bottom"]: 0,
                          width: window.innerWidth < 768 ? "100%" : "160px",
                          height: window.innerWidth < 768 ? "120px" : "auto",
                          borderRadius:
                            window.innerWidth < 768
                              ? "12px 12px 0 0"
                              : isEven
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
                            size={window.innerWidth < 768 ? 28 : 32}
                            style={{ color: colors.white }}
                          />
                        </div>
                      </div>

                      {/* Text Content - Responsive Padding */}
                      <div
                        style={{
                          position: "relative",
                          zIndex: 10,
                          padding:
                            window.innerWidth < 768
                              ? "20px"
                              : "clamp(20px, 3vw, 32px)",
                          paddingLeft:
                            window.innerWidth < 768
                              ? "20px"
                              : isEven
                              ? "clamp(170px, 20vw, 180px)"
                              : "clamp(20px, 3vw, 32px)",
                          paddingRight:
                            window.innerWidth < 768
                              ? "20px"
                              : isEven
                              ? "clamp(20px, 3vw, 32px)"
                              : "clamp(170px, 20vw, 180px)",
                          flex: 1,
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
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
                            fontSize: "clamp(0.875rem, 2vw, 1rem)",
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
              marginTop: "clamp(32px, 6vw, 48px)",
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
