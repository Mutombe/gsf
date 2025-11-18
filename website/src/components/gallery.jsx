import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ZoomIn,
  ZoomOut,
  Download,
  Share2,
  RotateCw,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Grid3x3,
  Layout,
  Facebook,
  Twitter,
  Link as LinkIcon,
  Check,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

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

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [layoutMode, setLayoutMode] = useState("masonry"); // 'masonry' or 'grid'
  // Color palette const colors = { chiliRed: '#E3180D', scarlet: '#FF2A00', flame: '#D92603', bloodOrange: '#B50001', persimmon: '#E45B11', safetyOrange: '#FA7301', tangerine: '#FF7805', darkOrange: '#E35906', brightOrange: '#F99E09', amber: '#F3B900', mustardYellow: '#FFC60A', mustard: '#FCD92A', mustardLight: '#FFDC5E', sunset: '#F2CC88', peach: '#FBCB98', darkGray: '#2D2D2D', mediumGray: '#666666', lightGray: '#F5F5F5', white: '#FFFFFF', };
  const images = [
    {
      id: 1,
      category: "Aluminum Welding",
      title: "Precision TIG Welding",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0061.jpg",
      size: "large",
      color: colors.chiliRed,
    },
    {
      id: 2,
      category: "Frame Fabrication",
      title: "Shopfront Frame Assembly",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0086.jpg",
      size: "medium",
      color: colors.brightOrange,
    },
    {
      id: 3,
      category: "Metal Cutting",
      title: "Aluminum Profile Cutting",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0039.jpg",
      size: "small",
      color: colors.amber,
    },
    {
      id: 4,
      category: "Workshop Fabrication",
      title: "Custom Aluminum Work",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0047.jpg",
      size: "medium",
      color: colors.scarlet,
    },
    {
      id: 5,
      category: "Structural Welding",
      title: "Heavy Duty Frame Welding",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0063.jpg",
      size: "large",
      color: colors.darkOrange,
    },
    {
      id: 6,
      category: "Profile Processing",
      title: "Aluminum Extrusion Work",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0049.jpg",
      size: "small",
      color: colors.safetyOrange,
    },
    {
      id: 7,
      category: "Display Systems",
      title: "Retail Display Frames",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0088.jpg",
      size: "medium",
      color: colors.tangerine,
    },
    {
      id: 8,
      category: "Aluminum Finishing",
      title: "Surface Preparation",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0041.jpg",
      size: "large",
      color: colors.mustardYellow,
    },
    {
      id: 9,
      category: "Custom Profiles",
      title: "Bespoke Frame Design",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0055.jpg",
      size: "small",
      color: colors.persimmon,
    },
    {
      id: 10,
      category: "Shopfront Installation",
      title: "Commercial Entrance Work",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0067.jpg",
      size: "medium",
      color: colors.flame,
    },
    {
      id: 11,
      category: "Aluminum Welding",
      title: "MIG Welding Process",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0065.jpg",
      size: "large",
      color: colors.bloodOrange,
    },
    {
      id: 12,
      category: "Frame Assembly",
      title: "Window Frame Construction",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0043.jpg",
      size: "medium",
      color: colors.brightOrange,
    },
    {
      id: 13,
      category: "Metal Fabrication",
      title: "Precision Cutting Work",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0057.jpg",
      size: "small",
      color: colors.chiliRed,
    },
    {
      id: 14,
      category: "Structural Work",
      title: "Load Bearing Frames",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0069.jpg",
      size: "medium",
      color: colors.darkOrange,
    },
    {
      id: 15,
      category: "Workshop Assembly",
      title: "Component Preparation",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0071.jpg",
      size: "large",
      color: colors.amber,
    },
    {
      id: 16,
      category: "Aluminum Cutting",
      title: "Profile Sectioning",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0045.jpg",
      size: "small",
      color: colors.safetyOrange,
    },
    {
      id: 17,
      category: "Display Fabrication",
      title: "Retail System Build",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0073.jpg",
      size: "medium",
      color: colors.tangerine,
    },
    {
      id: 18,
      category: "Welding Services",
      title: "Joint Fabrication",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0059.jpg",
      size: "large",
      color: colors.scarlet,
    },
    {
      id: 19,
      category: "Custom Frames",
      title: "Bespoke Aluminum Work",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0077.jpg",
      size: "small",
      color: colors.mustardYellow,
    },
    {
      id: 20,
      category: "Shopfitting Work",
      title: "Commercial Fitting",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0079.jpg",
      size: "medium",
      color: colors.persimmon,
    },
    {
      id: 21,
      category: "Metal Processing",
      title: "Aluminum Shaping",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0081.jpg",
      size: "large",
      color: colors.flame,
    },
    {
      id: 22,
      category: "Frame Construction",
      title: "Door Frame Assembly",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0090.jpg",
      size: "medium",
      color: colors.brightOrange,
    },
    {
      id: 23,
      category: "Aluminum Welding",
      title: "Arc Welding Process",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0092.jpg",
      size: "small",
      color: colors.bloodOrange,
    },
    {
      id: 24,
      category: "Workshop Production",
      title: "Manufacturing Process",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0094.jpg",
      size: "medium",
      color: colors.chiliRed,
    },
    {
      id: 25,
      category: "Profile Fabrication",
      title: "Custom Extrusion",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0096.jpg",
      size: "large",
      color: colors.darkOrange,
    },
    {
      id: 26,
      category: "Structural Frames",
      title: "Heavy Duty Construction",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0098.jpg",
      size: "small",
      color: colors.amber,
    },
    {
      id: 27,
      category: "Display Systems",
      title: "Showcase Fabrication",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0100.jpg",
      size: "medium",
      color: colors.safetyOrange,
    },
    {
      id: 28,
      category: "Metal Working",
      title: "Precision Fabrication",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0102.jpg",
      size: "large",
      color: colors.tangerine,
    },
    {
      id: 29,
      category: "Aluminum Assembly",
      title: "Component Integration",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0104.jpg",
      size: "small",
      color: colors.scarlet,
    },
    {
      id: 30,
      category: "Shopfront Work",
      title: "Entrance Frame Build",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0106.jpg",
      size: "medium",
      color: colors.mustardYellow,
    },
    {
      id: 31,
      category: "Welding Operations",
      title: "Seam Welding",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0108.jpg",
      size: "large",
      color: colors.persimmon,
    },
    {
      id: 32,
      category: "Custom Fabrication",
      title: "Specialty Aluminum Work",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0112.jpg",
      size: "medium",
      color: colors.flame,
    },
    {
      id: 33,
      category: "Frame Manufacturing",
      title: "Window System Production",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0118.jpg",
      size: "small",
      color: colors.brightOrange,
    },
    {
      id: 34,
      category: "Aluminum Processing",
      title: "Profile Modification",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0120.jpg",
      size: "medium",
      color: colors.bloodOrange,
    },
    {
      id: 35,
      category: "Workshop Welding",
      title: "Fabrication Bay Work",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0124.jpg",
      size: "large",
      color: colors.chiliRed,
    },
    {
      id: 36,
      category: "Metal Cutting",
      title: "Precision Sawing",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0126.jpg",
      size: "small",
      color: colors.darkOrange,
    },
    {
      id: 37,
      category: "Display Construction",
      title: "Retail Frame Build",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0128.jpg",
      size: "medium",
      color: colors.amber,
    },
    {
      id: 38,
      category: "Structural Assembly",
      title: "Support Frame Work",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0130.jpg",
      size: "large",
      color: colors.safetyOrange,
    },
    {
      id: 39,
      category: "Aluminum Welding",
      title: "Corner Joint Welding",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0132.jpg",
      size: "small",
      color: colors.tangerine,
    },
    {
      id: 40,
      category: "Custom Profiles",
      title: "Special Section Work",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0134.jpg",
      size: "medium",
      color: colors.scarlet,
    },
    {
      id: 41,
      category: "Shopfitting Frames",
      title: "Commercial Frame Systems",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0136.jpg",
      size: "large",
      color: colors.mustardYellow,
    },
    {
      id: 42,
      category: "Metal Fabrication",
      title: "Workshop Assembly",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0138.jpg",
      size: "medium",
      color: colors.persimmon,
    },
    {
      id: 43,
      category: "Frame Welding",
      title: "Structural Joint Work",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0140.jpg",
      size: "small",
      color: colors.flame,
    },
    {
      id: 44,
      category: "Aluminum Work",
      title: "Profile Assembly",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0142.jpg",
      size: "medium",
      color: colors.brightOrange,
    },
    {
      id: 45,
      category: "Workshop Production",
      title: "Fabrication Operations",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0144.jpg",
      size: "large",
      color: colors.bloodOrange,
    },
    {
      id: 46,
      category: "Custom Manufacturing",
      title: "Specialty Frame Build",
      url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0146.jpg",
      size: "small",
      color: colors.chiliRed,
    },
  ];
  const openModal = (image) => {
    setSelectedImage(image);
    setZoom(1);
    setRotation(0);
    setShowShareMenu(false);
  };
  const closeModal = () => {
    setSelectedImage(null);
    setZoom(1);
    setRotation(0);
    setShowShareMenu(false);
  };
  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };
  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  };
  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };
  const handleDownload = () => {
    if (selectedImage) {
      const link = document.createElement("a");
      link.href = selectedImage.url;
      link.download = `${selectedImage.title}.jpg`;
      link.click();
    }
  };
  const handleShare = (platform) => {
    if (!selectedImage) return;
    const url = window.location.href;
    const text = `Check out ${selectedImage.title} - ${selectedImage.category}`;
    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(text)}`,
          "_blank"
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
      default:
        break;
    }
  };
  const navigateImage = (direction) => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    }
    setSelectedImage(images[newIndex]);
    setZoom(1);
    setRotation(0);
  };
  const getSizeClass = (size) => {
    if (layoutMode === "grid") return "span 1";
    switch (size) {
      case "large":
        return window.innerWidth > 768 ? "span 2" : "span 1";
      case "medium":
        return "span 1";
      case "small":
        return "span 1";
      default:
        return "span 1";
    }
  };
  return (
    <div style={{ overflow: "hidden", background: colors.white }}>
      {" "}
      {/* Hero Section */}{" "}
      <section
        style={{
          position: "relative",
          padding: "100px 20px 60px",
          background: `linear-gradient(135deg, ${colors.darkGray} 0%, #1a1a1a 100%)`,
          overflow: "hidden",
        }}
      >
        {" "}
        {/* Decorative Elements */}{" "}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "300px",
            height: "300px",
            background: `radial-gradient(circle, ${colors.chiliRed}20, transparent)`,
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        ></div>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
          }}
        >
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            {" "}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                display: "inline-block",
                padding: "10px 24px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "50px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                marginBottom: "24px",
              }}
            >
              {" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${colors.mustardLight}, ${colors.amber})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                {" "}
                Explore Our Workshop{" "}
              </span>{" "}
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
              {" "}
              Aluminum{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${colors.chiliRed}, ${colors.amber})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                Shopfitting{" "}
              </span>{" "}
            </h1>{" "}
            <p
              style={{
                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: "1.6",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              {" "}
              Professional aluminum fabrication and welding services for
              commercial shopfitting projects{" "}
            </p>{" "}
          </motion.div>
          {/* Layout Toggle */}{" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: "flex", justifyContent: "center", gap: "12px" }}
          >
            {" "}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLayoutMode("masonry")}
              style={{
                padding: "12px 24px",
                borderRadius: "50px",
                border:
                  layoutMode === "masonry"
                    ? `2px solid ${colors.chiliRed}`
                    : "2px solid transparent",
                background:
                  layoutMode === "masonry"
                    ? colors.white
                    : "rgba(255, 255, 255, 0.1)",
                color:
                  layoutMode === "masonry" ? colors.darkGray : colors.white,
                fontWeight: "600",
                fontSize: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
            >
              {" "}
              <Layout size={16} /> Masonry View{" "}
            </motion.button>{" "}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLayoutMode("grid")}
              style={{
                padding: "12px 24px",
                borderRadius: "50px",
                border:
                  layoutMode === "grid"
                    ? `2px solid ${colors.chiliRed}`
                    : "2px solid transparent",
                background:
                  layoutMode === "grid"
                    ? colors.white
                    : "rgba(255, 255, 255, 0.1)",
                color: layoutMode === "grid" ? colors.darkGray : colors.white,
                fontWeight: "600",
                fontSize: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
            >
              {" "}
              <Grid3x3 size={16} /> Grid View{" "}
            </motion.button>{" "}
          </motion.div>{" "}
        </div>{" "}
      </section>
      {/* Gallery Section */}{" "}
      <section style={{ padding: "80px 20px", background: colors.lightGray }}>
        {" "}
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          {" "}
          <motion.div
            key={layoutMode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "grid",
              gridTemplateColumns:
                layoutMode === "grid"
                  ? "repeat(auto-fill, minmax(300px, 1fr))"
                  : "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              gridAutoRows: layoutMode === "grid" ? "300px" : "auto",
            }}
          >
            {" "}
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -8 }}
                onClick={() => openModal(image)}
                style={{
                  gridColumn: getSizeClass(image.size),
                  gridRow:
                    layoutMode === "masonry" && image.size === "large"
                      ? "span 2"
                      : "span 1",
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  height: layoutMode === "grid" ? "100%" : "auto",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 40px ${image.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0, 0, 0, 0.1)";
                }}
              >
                {" "}
                {/* Image */}{" "}
                <div
                  style={{
                    width: "100%",
                    height:
                      layoutMode === "grid"
                        ? "100%"
                        : image.size === "large"
                        ? "500px"
                        : "250px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {" "}
                  <img
                    src={image.url}
                    alt={image.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                  {/* Overlay */}{" "}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                  ></div>
                  {/* Info */}{" "}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      padding: "24px",
                      opacity: 0,
                      transform: "translateY(20px)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "1";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {" "}
                    <div
                      style={{
                        display: "inline-block",
                        padding: "6px 12px",
                        background: image.color,
                        borderRadius: "20px",
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        color: colors.white,
                        marginBottom: "8px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {" "}
                      {image.category}{" "}
                    </div>{" "}
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: colors.white,
                        margin: 0,
                      }}
                    >
                      {" "}
                      {image.title}{" "}
                    </h3>{" "}
                  </div>
                  {/* Hover Icon */}{" "}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%) scale(0)",
                      width: "64px",
                      height: "64px",
                      background: colors.white,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.3s ease",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translate(-50%, -50%) scale(1)";
                    }}
                  >
                    {" "}
                    <Maximize2 size={24} style={{ color: image.color }} />{" "}
                  </div>{" "}
                </div>{" "}
              </motion.div>
            ))}{" "}
          </motion.div>{" "}
        </div>{" "}
      </section>
      {/* Image Modal */}{" "}
      <AnimatePresence>
        {" "}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.95)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
            onClick={closeModal}
          >
            {" "}
            {/* Modal Content */}{" "}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "1200px",
                maxHeight: "90vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {" "}
              {/* Header */}{" "}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px",
                  background: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "16px 16px 0 0",
                }}
              >
                {" "}
                <div>
                  {" "}
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: colors.white,
                      margin: "0 0 4px 0",
                    }}
                  >
                    {" "}
                    {selectedImage.title}{" "}
                  </h2>{" "}
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255, 255, 255, 0.7)",
                      margin: 0,
                    }}
                  >
                    {" "}
                    {selectedImage.category}{" "}
                  </p>{" "}
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: colors.white,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  {" "}
                  <X size={20} />{" "}
                </motion.button>{" "}
              </div>
              {/* Image Container */}{" "}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  background: "#000",
                  borderRadius: "0 0 16px 16px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <motion.img
                  key={selectedImage.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: zoom, opacity: 1, rotate: rotation }}
                  transition={{ type: "spring", stiffness: 100 }}
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
                {/* Navigation Arrows */}{" "}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigateImage("prev")}
                  style={{
                    position: "absolute",
                    left: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(255, 255, 255, 0.9)",
                    color: colors.darkGray,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {" "}
                  <ChevronLeft size={24} />{" "}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigateImage("next")}
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(255, 255, 255, 0.9)",
                    color: colors.darkGray,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {" "}
                  <ChevronRight size={24} />{" "}
                </motion.button>{" "}
              </div>
              {/* Control Bar */}{" "}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  padding: "20px",
                  background: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "0 0 16px 16px",
                }}
              >
                {" "}
                {/* Zoom Out */}{" "}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleZoomOut}
                  disabled={zoom <= 0.5}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "none",
                    background:
                      zoom <= 0.5
                        ? "rgba(255, 255, 255, 0.2)"
                        : "rgba(255, 255, 255, 0.9)",
                    color: colors.darkGray,
                    cursor: zoom <= 0.5 ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  {" "}
                  <ZoomOut size={20} />{" "}
                </motion.button>
                {/* Zoom Level */}{" "}
                <div
                  style={{
                    padding: "8px 16px",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "20px",
                    color: colors.white,
                    fontSize: "14px",
                    fontWeight: "600",
                    minWidth: "60px",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  {Math.round(zoom * 100)}%{" "}
                </div>
                {/* Zoom In */}{" "}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleZoomIn}
                  disabled={zoom >= 3}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "none",
                    background:
                      zoom >= 3
                        ? "rgba(255, 255, 255, 0.2)"
                        : "rgba(255, 255, 255, 0.9)",
                    color: colors.darkGray,
                    cursor: zoom >= 3 ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  {" "}
                  <ZoomIn size={20} />{" "}
                </motion.button>
                {/* Divider */}{" "}
                <div
                  style={{
                    width: "1px",
                    height: "30px",
                    background: "rgba(255, 255, 255, 0.2)",
                    margin: "0 8px",
                  }}
                ></div>
                {/* Rotate */}{" "}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleRotate}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(255, 255, 255, 0.9)",
                    color: colors.darkGray,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  {" "}
                  <RotateCw size={20} />{" "}
                </motion.button>
                {/* Download */}{" "}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleDownload}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(255, 255, 255, 0.9)",
                    color: colors.darkGray,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  {" "}
                  <Download size={20} />{" "}
                </motion.button>
                {/* Share */}{" "}
                <div style={{ position: "relative" }}>
                  {" "}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      border: "none",
                      background: "rgba(255, 255, 255, 0.9)",
                      color: colors.darkGray,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {" "}
                    <Share2 size={20} />{" "}
                  </motion.button>
                  {/* Share Menu */}{" "}
                  <AnimatePresence>
                    {" "}
                    {showShareMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        style={{
                          position: "absolute",
                          bottom: "60px",
                          right: 0,
                          background: colors.white,
                          borderRadius: "12px",
                          padding: "8px",
                          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                          minWidth: "160px",
                          zIndex: 10,
                        }}
                      >
                        {" "}
                        <button
                          onClick={() => handleShare("facebook")}
                          style={{
                            width: "100%",
                            padding: "12px 16px",
                            border: "none",
                            background: "transparent",
                            color: colors.darkGray,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            fontSize: "14px",
                            fontWeight: "500",
                            borderRadius: "8px",
                            transition: "background 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = colors.lightGray;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          {" "}
                          <Facebook
                            size={18}
                            style={{ color: "#1877F2" }}
                          />{" "}
                          Facebook{" "}
                        </button>{" "}
                        <button
                          onClick={() => handleShare("twitter")}
                          style={{
                            width: "100%",
                            padding: "12px 16px",
                            border: "none",
                            background: "transparent",
                            color: colors.darkGray,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            fontSize: "14px",
                            fontWeight: "500",
                            borderRadius: "8px",
                            transition: "background 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = colors.lightGray;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          {" "}
                          <FaXTwitter
                            size={18}
                            style={{ color: "#1DA1F2" }}
                          />{" "}
                          Twitter{" "}
                        </button>{" "}
                        <button
                          onClick={() => handleShare("copy")}
                          style={{
                            width: "100%",
                            padding: "12px 16px",
                            border: "none",
                            background: "transparent",
                            color: colors.darkGray,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            fontSize: "14px",
                            fontWeight: "500",
                            borderRadius: "8px",
                            transition: "background 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = colors.lightGray;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          {" "}
                          {copied ? (
                            <>
                              {" "}
                              <Check
                                size={18}
                                style={{ color: colors.chiliRed }}
                              />{" "}
                              Copied!{" "}
                            </>
                          ) : (
                            <>
                              {" "}
                              <LinkIcon size={18} /> Copy Link{" "}
                            </>
                          )}{" "}
                        </button>{" "}
                      </motion.div>
                    )}{" "}
                  </AnimatePresence>{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>{" "}
          </motion.div>
        )}{" "}
      </AnimatePresence>{" "}
    </div>
  );
};

export default Gallery;
