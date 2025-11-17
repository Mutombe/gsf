import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  CheckCircle,
  Building2,
  MessageSquare,
  MessageCircle,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { toast } from "sonner";
import { useLanguage } from "./lunguageContext";

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

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

  // Harare, Zimbabwe coordinates
  const position = [-17.8490877, 31.1234503,17]; // Latitude, Longitude for Harare

  // WhatsApp number (replace with actual number)
  const whatsappNumber = "263781934986"; // Format: country code + number (no + or spaces)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatMessageForWhatsApp = () => {
    const message = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
${formData.phone ? `*Phone:* ${formData.phone}` : ""}
${formData.company ? `*Company:* ${formData.company}` : ""}
${formData.service ? `*Service Interested:* ${formData.service}` : ""}

*Message:*
${formData.message}
    `.trim();

    return encodeURIComponent(message);
  };

  const formatMessageForEmail = () => {
    const subject = encodeURIComponent(
      `Contact Form: ${formData.service || "General Inquiry"} - ${
        formData.name
      }`
    );
    const body = encodeURIComponent(
      `
Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ""}
${formData.company ? `Company: ${formData.company}` : ""}
${formData.service ? `Service Interested: ${formData.service}` : ""}

Message:
${formData.message}
    `.trim()
    );

    return { subject, body };
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    const message = formatMessageForWhatsApp();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");

    toast.success("Opening WhatsApp...");
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 2000);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    const { subject, body } = formatMessageForEmail();
    const mailtoUrl = `mailto:info@globalshopfitters.co.zw?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    toast.success("Opening email client...");
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.info.address"),
      content: ["No. 3, 18 Whitesway", "Harare, Zimbabwe"],
      colorFrom: colors.chiliRed,
      colorTo: colors.brightOrange,
      link: "https://maps.google.com/?q=Harare,Zimbabwe",
    },
    {
      icon: Phone,
      title: t("contact.info.phone"),
      content: ["+263 78 193 4986"],
      colorFrom: colors.brightOrange,
      colorTo: colors.amber,
      link: "tel:+263781934986",
    },
    {
      icon: Mail,
      title: t("contact.info.email"),
      content: [
        "info@globalshopfitters.co.zw",
        "sales@globalshopfitters.co.zw",
      ],
      colorFrom: colors.scarlet,
      colorTo: colors.darkOrange,
      link: "mailto:info@globalshopfitters.co.zw",
    },
    {
      icon: Clock,
      title: t("contact.info.hours"),
      content: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 8:00 AM - 1:00 PM"],
      colorFrom: colors.darkOrange,
      colorTo: colors.chiliRed,
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/globalshopfitters",
      label: "Facebook",
      color: "#1877F2",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/globalshopfitters",
      label: "Instagram",
      color: "#E4405F",
    },
    {
      icon: FaXTwitter,
      href: "https://twitter.com/globalshopfit",
      label: "Twitter",
      color: "#1DA1F2",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/global-shopfitters",
      label: "LinkedIn",
      color: "#0A66C2",
    },
  ];

  const reasons = [
    {
      icon: Building2,
      title: "Visit Our Showroom",
      description: "See our latest designs and completed projects",
    },
    {
      icon: MessageSquare,
      title: "24/7 Support",
      description: "Get quick responses to your inquiries",
    },
    {
      icon: CheckCircle,
      title: "Free Consultation",
      description: "Schedule a free consultation with our experts",
    },
  ];

  return (
    <div style={{ overflow: "hidden", background: colors.white }}>
      {/* Enhanced Hero Section */}
      <section
        style={{
          position: "relative",
          padding: "100px 20px 80px",
          background: `linear-gradient(135deg, ${colors.darkGray} 0%, #1a1a1a 100%)`,
          overflow: "hidden",
        }}
      >
        {/* Animated Background Elements */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "300px",
            height: "300px",
            background: `radial-gradient(circle, ${colors.chiliRed}30, transparent)`,
            borderRadius: "5%",
            filter: "blur(60px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: "400px",
            height: "400px",
            background: `radial-gradient(circle, ${colors.amber}25, transparent)`,
            borderRadius: "5%",
            filter: "blur(80px)",
          }}
        ></div>

        {/* Floating Icons */}
        {[Mail, Phone, MapPin].map((Icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0.08, 0.15, 0.08],
              y: [100, -100],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            style={{
              position: "absolute",
              left: `${20 + i * 30}%`,
              top: "30%",
            }}
          >
            <Icon size={60} style={{ color: colors.white }} />
          </motion.div>
        ))}

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              style={{
                display: "inline-block",
                padding: "12px 24px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "5px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  background: `linear-gradient(90deg, ${colors.mustardLight}, ${colors.amber})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontSize: "14px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                }}
              >
                LET'S CONNECT
              </span>
            </motion.div>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                fontWeight: "900",
                lineHeight: "1.1",
                marginBottom: "24px",
                color: colors.white,
              }}
            >
              Get in{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${colors.chiliRed}, ${colors.amber})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Touch
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                color: "rgba(255, 255, 255, 0.85)",
                lineHeight: "1.6",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Ready to transform your space? Let's discuss your project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reasons to Contact Section */}
      <section
        style={{
          padding: "60px 20px",
          background: colors.lightGray,
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                style={{
                  background: colors.white,
                  borderRadius: "5px",
                  padding: "32px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 40px ${colors.chiliRed}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0, 0, 0, 0.06)";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.brightOrange})`,
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: `0 4px 12px ${colors.chiliRed}30`,
                  }}
                >
                  <reason.icon size={24} style={{ color: colors.white }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "700",
                      color: colors.darkGray,
                      marginBottom: "8px",
                    }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: colors.mediumGray,
                      lineHeight: "1.6",
                    }}
                  >
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section
        style={{
          padding: "80px 20px",
          background: colors.white,
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "48px" }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "800",
                color: colors.darkGray,
                marginBottom: "16px",
              }}
            >
              Contact Information
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: colors.mediumGray,
              }}
            >
              Multiple ways to reach us
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
              marginBottom: "80px",
            }}
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link || "#"}
                target={info.link ? "_blank" : undefined}
                rel={info.link ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                style={{
                  background: colors.white,
                  borderRadius: "5px",
                  padding: "32px 24px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: info.link ? "pointer" : "default",
                  textDecoration: "none",
                  display: "block",
                  border: "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 40px ${info.colorFrom}30`;
                  e.currentTarget.style.borderColor = info.colorFrom;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0, 0, 0, 0.08)";
                  e.currentTarget.style.borderColor = "transparent";
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    background: `linear-gradient(135deg, ${info.colorFrom}, ${info.colorTo})`,
                    borderRadius: "5px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    boxShadow: `0 8px 24px ${info.colorFrom}40`,
                  }}
                >
                  <info.icon size={32} style={{ color: colors.white }} />
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: colors.darkGray,
                    marginBottom: "12px",
                  }}
                >
                  {info.title}
                </h3>
                {info.content.map((line, idx) => (
                  <p
                    key={idx}
                    style={{
                      color: colors.mediumGray,
                      fontSize: "0.95rem",
                      marginTop: "6px",
                      lineHeight: "1.5",
                    }}
                  >
                    {line}
                  </p>
                ))}
              </motion.a>
            ))}
          </div>

          {/* Form and Map Section */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "48px",
              alignItems: "start",
            }}
          >
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                background: colors.white,
                borderRadius: "5px",
                padding: "40px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "800",
                  color: colors.darkGray,
                  marginBottom: "8px",
                }}
              >
                Send Us a Message
              </h2>
              <p
                style={{
                  color: colors.mediumGray,
                  marginBottom: "32px",
                  fontSize: "1rem",
                }}
              >
                Fill out the form and choose how you'd like to contact us
              </p>

              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: colors.darkGray,
                      marginBottom: "8px",
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: `2px solid ${colors.lightGray}`,
                      borderRadius: "5px",
                      fontSize: "1rem",
                      color: colors.darkGray,
                      transition: "all 0.3s ease",
                      outline: "none",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = colors.chiliRed;
                      e.target.style.boxShadow = `0 0 0 4px ${colors.chiliRed}15`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = colors.lightGray;
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: colors.darkGray,
                        marginBottom: "8px",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        border: `2px solid ${colors.lightGray}`,
                        borderRadius: "5px",
                        fontSize: "1rem",
                        color: colors.darkGray,
                        transition: "all 0.3s ease",
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = colors.chiliRed;
                        e.target.style.boxShadow = `0 0 0 4px ${colors.chiliRed}15`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = colors.lightGray;
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: colors.darkGray,
                        marginBottom: "8px",
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+263 123 456 789"
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        border: `2px solid ${colors.lightGray}`,
                        borderRadius: "5px",
                        fontSize: "1rem",
                        color: colors.darkGray,
                        transition: "all 0.3s ease",
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = colors.chiliRed;
                        e.target.style.boxShadow = `0 0 0 4px ${colors.chiliRed}15`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = colors.lightGray;
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: colors.darkGray,
                        marginBottom: "8px",
                      }}
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        border: `2px solid ${colors.lightGray}`,
                        borderRadius: "5px",
                        fontSize: "1rem",
                        color: colors.darkGray,
                        transition: "all 0.3s ease",
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = colors.chiliRed;
                        e.target.style.boxShadow = `0 0 0 4px ${colors.chiliRed}15`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = colors.lightGray;
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: colors.darkGray,
                        marginBottom: "8px",
                      }}
                    >
                      Service Interested
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        border: `2px solid ${colors.lightGray}`,
                        borderRadius: "5px",
                        fontSize: "1rem",
                        color: colors.darkGray,
                        transition: "all 0.3s ease",
                        outline: "none",
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23666666' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                        paddingRight: "40px",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = colors.chiliRed;
                        e.target.style.boxShadow = `0 0 0 4px ${colors.chiliRed}15`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = colors.lightGray;
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      <option value="">Select a service</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Testing">Design</option>
                      <option value="Testing">Testing</option>
                      <option value="Production">Production</option>
                      <option value="After Service">
                        After service support
                      </option>
                      <option value="Maintainance">Project management</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: colors.darkGray,
                      marginBottom: "8px",
                    }}
                  >
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your project..."
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: `2px solid ${colors.lightGray}`,
                      borderRadius: "5px",
                      fontSize: "1rem",
                      color: colors.darkGray,
                      transition: "all 0.3s ease",
                      outline: "none",
                      resize: "vertical",
                      minHeight: "140px",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = colors.chiliRed;
                      e.target.style.boxShadow = `0 0 0 4px ${colors.chiliRed}15`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = colors.lightGray;
                      e.target.style.boxShadow = "none";
                    }}
                  ></textarea>
                </div>

                {/* Submit Options */}
                <div
                  style={{
                    marginTop: "12px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: colors.darkGray,
                      marginBottom: "12px",
                      textAlign: "center",
                    }}
                  >
                    Choose how to send your message:
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "12px",
                    }}
                  >
                    {/* WhatsApp Button */}
                    <motion.button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        padding: "14px 20px",
                        background: "linear-gradient(135deg, #25D366, #128C7E)",
                        color: colors.white,
                        borderRadius: "5px",
                        fontWeight: "700",
                        fontSize: "0.95rem",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 4px 16px rgba(37, 211, 102, 0.4)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </motion.button>

                    {/* Email Button */}
                    <motion.button
                      type="button"
                      onClick={handleEmailSubmit}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        padding: "14px 20px",
                        background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.scarlet})`,
                        color: colors.white,
                        borderRadius: "5px",
                        fontWeight: "700",
                        fontSize: "0.95rem",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: `0 4px 16px ${colors.chiliRed}40`,
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Mail size={18} />
                      Email
                    </motion.button>
                  </div>
                </div>
              </form>

              {/* Social Links */}
              <div
                style={{
                  marginTop: "32px",
                  paddingTop: "32px",
                  borderTop: `1px solid ${colors.lightGray}`,
                }}
              >
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: colors.darkGray,
                    marginBottom: "16px",
                    textAlign: "center",
                  }}
                >
                  Or connect with us on social media
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    justifyContent: "center",
                  }}
                >
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: "48px",
                        height: "48px",
                        background: `${social.color}15`,
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                        textDecoration: "none",
                        color: social.color,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = social.color;
                        e.currentTarget.style.color = colors.white;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${social.color}15`;
                        e.currentTarget.style.color = social.color;
                      }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                position: "sticky",
                top: "20px",
              }}
            >
              <div
                style={{
                  borderRadius: "5px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                  height: "600px",
                  border: `4px solid ${colors.white}`,
                }}
              >
                <MapContainer
                  center={position}
                  zoom={13}
                  style={{ height: "100%", width: "100%" }}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>
                      <div style={{ textAlign: "center", padding: "8px" }}>
                        <strong
                          style={{
                            fontSize: "1rem",
                            color: colors.darkGray,
                            display: "block",
                            marginBottom: "4px",
                          }}
                        >
                          Global Shopfitters
                        </strong>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: colors.mediumGray,
                            margin: 0,
                          }}
                        >
                          No. 3, 18 Whitesway
                          <br />
                          Harare, Zimbabwe
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>

              {/* Map Info Card */}
              <div
                style={{
                  marginTop: "20px",
                  background: colors.white,
                  borderRadius: "5px",
                  padding: "24px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: colors.darkGray,
                    marginBottom: "12px",
                  }}
                >
                  Visit Our Location
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: colors.mediumGray,
                    lineHeight: "1.6",
                    marginBottom: "16px",
                  }}
                >
                  No. 3, 18 Whitesway, Harare Zimbabwe
                </p>
                <motion.a
                  href="https://maps.google.com/?q=Harare,Zimbabwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 20px",
                    background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.brightOrange})`,
                    color: colors.white,
                    borderRadius: "5px",
                    fontWeight: "600",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: `0 4px 12px ${colors.chiliRed}30`,
                  }}
                >
                  <MapPin size={16} />
                  Get Directions
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                background: colors.white,
                borderRadius: "5px",
                padding: "48px",
                textAlign: "center",
                maxWidth: "400px",
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                style={{
                  width: "80px",
                  height: "80px",
                  background: `linear-gradient(135deg, ${colors.chiliRed}, ${colors.brightOrange})`,
                  borderRadius: "5%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <CheckCircle size={40} style={{ color: colors.white }} />
              </motion.div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: colors.darkGray,
                  marginBottom: "12px",
                }}
              >
                Redirecting...
              </h3>
              <p
                style={{
                  color: colors.mediumGray,
                  lineHeight: "1.6",
                }}
              >
                Opening your preferred contact method with the pre-filled
                message.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
