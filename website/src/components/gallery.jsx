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
  Folder,
  FolderOpen,
  ArrowLeft,
  Home,
  ImageIcon,
  Wrench,
  Building2,
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
  purple: "#8B5CF6",
  pink: "#EC4899",
  blue: "#3B82F6",
  green: "#10B981",
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [layoutMode, setLayoutMode] = useState("masonry");
  const [currentView, setCurrentView] = useState("folders"); // 'folders' or 'images'
  const [selectedFolder, setSelectedFolder] = useState(null);

  // Define folders with beautiful styling
  const folders = [
    {
      id: "onsite",
      name: "On-Site Installation",
      description: "Live project installations and site work",
      icon: Building2,
      count: 48,
      color: colors.blue,
      gradient: "linear-gradient(135deg, #ea6666ff 0%, #a27c4bff 100%)",
      bgPattern: "radial-gradient(circle at 20% 50%, rgba(223, 199, 82, 0.1) 0%, transparent 50%)",
    },
    {
      id: "workshop",
      name: "Workshop Fabrication",
      description: "Professional aluminum fabrication and welding",
      icon: Wrench,
      count: 46,
      color: colors.chiliRed,
      gradient: "linear-gradient(135deg, #c7ce00ff 0%, #f5576c 100%)",
      bgPattern: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
    },
  ];

  // All images organized by folder
  const allImages = {
    onsite: [
      { id: "os1", folder: "onsite", category: "Site Installation", title: "Team Briefing", url: "/GSZOn-site/1.jpeg", size: "medium", color: colors.chiliRed },
      { id: "os2", folder: "onsite", category: "Site Installation", title: "Project Planning", url: "/GSZOn-site/2.jpeg", size: "medium", color: colors.brightOrange },
      { id: "os3", folder: "onsite", category: "Site Installation", title: "Safety Discussion", url: "/GSZOn-site/3.jpeg", size: "small", color: colors.amber },
      { id: "os4", folder: "onsite", category: "Frame Installation", title: "Aluminum Frame Setup", url: "/GSZOn-site/4.jpeg", size: "large", color: colors.scarlet },
      { id: "os5", folder: "onsite", category: "Frame Installation", title: "Structural Assembly", url: "/GSZOn-site/5.jpeg", size: "medium", color: colors.darkOrange },
      { id: "os6", folder: "onsite", category: "Glass Installation", title: "Panel Positioning", url: "/GSZOn-site/6.jpeg", size: "small", color: colors.safetyOrange },
      { id: "os7", folder: "onsite", category: "Glass Installation", title: "Glass Fitting", url: "/GSZOn-site/7.jpeg", size: "medium", color: colors.tangerine },
      { id: "os8", folder: "onsite", category: "Frame Installation", title: "Frame Alignment", url: "/GSZOn-site/8.jpeg", size: "large", color: colors.mustardYellow },
      { id: "os9", folder: "onsite", category: "Site Work", title: "Installation Progress", url: "/GSZOn-site/9.jpeg", size: "small", color: colors.persimmon },
      { id: "os10", folder: "onsite", category: "Glass Installation", title: "Panel Installation", url: "/GSZOn-site/10.jpeg", size: "medium", color: colors.flame },
      { id: "os11", folder: "onsite", category: "Glass Installation", title: "Glass Alignment", url: "/GSZOn-site/11.jpeg", size: "large", color: colors.bloodOrange },
      { id: "os12", folder: "onsite", category: "Site Work", title: "Team Collaboration", url: "/GSZOn-site/12.jpeg", size: "medium", color: colors.brightOrange },
      { id: "os13", folder: "onsite", category: "Frame Installation", title: "Frame Measurement", url: "/GSZOn-site/13.jpeg", size: "small", color: colors.chiliRed },
      { id: "os14", folder: "onsite", category: "Site Installation", title: "Building Exterior", url: "/GSZOn-site/14.jpeg", size: "medium", color: colors.darkOrange },
      { id: "os15", folder: "onsite", category: "Floor Work", title: "Ground Level Installation", url: "/GSZOn-site/15.jpeg", size: "large", color: colors.amber },
      { id: "os16", folder: "onsite", category: "Floor Work", title: "Foundation Work", url: "/GSZOn-site/16.jpeg", size: "small", color: colors.safetyOrange },
      { id: "os17", folder: "onsite", category: "Floor Work", title: "Base Installation", url: "/GSZOn-site/17.jpeg", size: "medium", color: colors.tangerine },
      { id: "os18", folder: "onsite", category: "Measurement", title: "Floor Leveling", url: "/GSZOn-site/18.jpeg", size: "large", color: colors.scarlet },
      { id: "os19", folder: "onsite", category: "Floor Work", title: "Surface Preparation", url: "/GSZOn-site/19.jpeg", size: "small", color: colors.mustardYellow },
      { id: "os20", folder: "onsite", category: "Measurement", title: "Precision Measuring", url: "/GSZOn-site/20.jpeg", size: "medium", color: colors.persimmon },
      { id: "os21", folder: "onsite", category: "Floor Work", title: "Installation Detail", url: "/GSZOn-site/21.jpeg", size: "large", color: colors.flame },
      { id: "os22", folder: "onsite", category: "Floor Work", title: "Detail Work", url: "/GSZOn-site/22.jpeg", size: "medium", color: colors.brightOrange },
      { id: "os23", folder: "onsite", category: "Team Work", title: "Collaborative Installation", url: "/GSZOn-site/23.jpeg", size: "small", color: colors.bloodOrange },
      { id: "os24", folder: "onsite", category: "Team Work", title: "Joint Effort", url: "/GSZOn-site/24.jpeg", size: "medium", color: colors.chiliRed },
      { id: "os25", folder: "onsite", category: "Glass Facade", title: "Evening Installation", url: "/GSZOn-site/25.jpeg", size: "large", color: colors.darkOrange },
      { id: "os26", folder: "onsite", category: "Glass Facade", title: "Night Work", url: "/GSZOn-site/26.jpeg", size: "small", color: colors.amber },
      { id: "os27", folder: "onsite", category: "Glass Facade", title: "Exterior Glazing", url: "/GSZOn-site/27.jpeg", size: "medium", color: colors.safetyOrange },
      { id: "os28", folder: "onsite", category: "Glass Facade", title: "Facade Installation", url: "/GSZOn-site/28.jpeg", size: "large", color: colors.tangerine },
      { id: "os29", folder: "onsite", category: "Interior Work", title: "Interior Frame", url: "/GSZOn-site/29.jpeg", size: "small", color: colors.scarlet },
      { id: "os30", folder: "onsite", category: "Glass Facade", title: "Panel Fixing", url: "/GSZOn-site/30.jpeg", size: "medium", color: colors.mustardYellow },
      { id: "os31", folder: "onsite", category: "Interior Work", title: "Indoor Installation", url: "/GSZOn-site/31.jpeg", size: "large", color: colors.persimmon },
      { id: "os32", folder: "onsite", category: "Interior Work", title: "Internal Frame", url: "/GSZOn-site/32.jpeg", size: "medium", color: colors.flame },
      { id: "os33", folder: "onsite", category: "Team Work", title: "Group Installation", url: "/GSZOn-site/33.jpeg", size: "small", color: colors.brightOrange },
      { id: "os34", folder: "onsite", category: "Team Work", title: "Team Assembly", url: "/GSZOn-site/34.jpeg", size: "medium", color: colors.bloodOrange },
      { id: "os35", folder: "onsite", category: "Team Work", title: "Coordinated Work", url: "/GSZOn-site/35.jpeg", size: "large", color: colors.chiliRed },
      { id: "os36", folder: "onsite", category: "Team Work", title: "Project Execution", url: "/GSZOn-site/36.jpeg", size: "small", color: colors.darkOrange },
      { id: "os37", folder: "onsite", category: "Team Work", title: "Installation Team", url: "/GSZOn-site/37.jpeg", size: "medium", color: colors.amber },
      { id: "os38", folder: "onsite", category: "Floor Work", title: "Ground Work", url: "/GSZOn-site/38.jpeg", size: "large", color: colors.safetyOrange },
      { id: "os39", folder: "onsite", category: "Interior Work", title: "Interior Detail", url: "/GSZOn-site/39.jpeg", size: "small", color: colors.tangerine },
      { id: "os40", folder: "onsite", category: "Floor Work", title: "Floor Installation", url: "/GSZOn-site/40.jpeg", size: "medium", color: colors.scarlet },
      { id: "os41", folder: "onsite", category: "Floor Work", title: "Base Work", url: "/GSZOn-site/41.jpeg", size: "large", color: colors.mustardYellow },
      { id: "os42", folder: "onsite", category: "Measurement", title: "Precision Check", url: "/GSZOn-site/42.jpeg", size: "medium", color: colors.persimmon },
      { id: "os43", folder: "onsite", category: "Floor Work", title: "Surface Work", url: "/GSZOn-site/43.jpeg", size: "small", color: colors.flame },
      { id: "os44", folder: "onsite", category: "Measurement", title: "Level Check", url: "/GSZOn-site/44.jpeg", size: "medium", color: colors.brightOrange },
      { id: "os45", folder: "onsite", category: "Team Work", title: "Team Discussion", url: "/GSZOn-site/45.jpeg", size: "large", color: colors.bloodOrange },
      { id: "os46", folder: "onsite", category: "Team Work", title: "Project Review", url: "/GSZOn-site/46.jpeg", size: "small", color: colors.chiliRed },
      { id: "os47", folder: "onsite", category: "Team Work", title: "Site Meeting", url: "/GSZOn-site/47.jpeg", size: "medium", color: colors.darkOrange },
      { id: "os48", folder: "onsite", category: "Team Work", title: "Planning Session", url: "/GSZOn-site/48.jpeg", size: "large", color: colors.amber },
    ],
    workshop: [
      { id: 1, folder: "workshop", category: "Aluminum Welding", title: "Precision TIG Welding", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0061.jpg", size: "large", color: colors.chiliRed },
      { id: 2, folder: "workshop", category: "Frame Fabrication", title: "Shopfront Frame Assembly", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0086.jpg", size: "medium", color: colors.brightOrange },
      { id: 3, folder: "workshop", category: "Metal Cutting", title: "Aluminum Profile Cutting", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0039.jpg", size: "small", color: colors.amber },
      { id: 4, folder: "workshop", category: "Workshop Fabrication", title: "Custom Aluminum Work", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0047.jpg", size: "medium", color: colors.scarlet },
      { id: 5, folder: "workshop", category: "Structural Welding", title: "Heavy Duty Frame Welding", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0063.jpg", size: "large", color: colors.darkOrange },
      { id: 6, folder: "workshop", category: "Profile Processing", title: "Aluminum Extrusion Work", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0049.jpg", size: "small", color: colors.safetyOrange },
      { id: 7, folder: "workshop", category: "Display Systems", title: "Retail Display Frames", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0088.jpg", size: "medium", color: colors.tangerine },
      { id: 8, folder: "workshop", category: "Aluminum Finishing", title: "Surface Preparation", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0041.jpg", size: "large", color: colors.mustardYellow },
      { id: 9, folder: "workshop", category: "Custom Profiles", title: "Bespoke Frame Design", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0055.jpg", size: "small", color: colors.persimmon },
      { id: 10, folder: "workshop", category: "Shopfront Installation", title: "Commercial Entrance Work", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0067.jpg", size: "medium", color: colors.flame },
      { id: 11, folder: "workshop", category: "Aluminum Welding", title: "MIG Welding Process", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0065.jpg", size: "large", color: colors.bloodOrange },
      { id: 12, folder: "workshop", category: "Frame Assembly", title: "Window Frame Construction", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0043.jpg", size: "medium", color: colors.brightOrange },
      { id: 13, folder: "workshop", category: "Metal Fabrication", title: "Precision Cutting Work", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0057.jpg", size: "small", color: colors.chiliRed },
      { id: 14, folder: "workshop", category: "Structural Work", title: "Load Bearing Frames", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0069.jpg", size: "medium", color: colors.darkOrange },
      { id: 15, folder: "workshop", category: "Workshop Assembly", title: "Component Preparation", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0071.jpg", size: "large", color: colors.amber },
      { id: 16, folder: "workshop", category: "Aluminum Cutting", title: "Profile Sectioning", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0045.jpg", size: "small", color: colors.safetyOrange },
      { id: 17, folder: "workshop", category: "Display Fabrication", title: "Retail System Build", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0073.jpg", size: "medium", color: colors.tangerine },
      { id: 18, folder: "workshop", category: "Welding Services", title: "Joint Fabrication", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0059.jpg", size: "large", color: colors.scarlet },
      { id: 19, folder: "workshop", category: "Custom Frames", title: "Bespoke Aluminum Work", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0077.jpg", size: "small", color: colors.mustardYellow },
      { id: 20, folder: "workshop", category: "Shopfitting Work", title: "Commercial Fitting", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0079.jpg", size: "medium", color: colors.persimmon },
      { id: 21, folder: "workshop", category: "Metal Processing", title: "Aluminum Shaping", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0081.jpg", size: "large", color: colors.flame },
      { id: 22, folder: "workshop", category: "Frame Construction", title: "Door Frame Assembly", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0090.jpg", size: "medium", color: colors.brightOrange },
      { id: 23, folder: "workshop", category: "Aluminum Welding", title: "Arc Welding Process", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0092.jpg", size: "small", color: colors.bloodOrange },
      { id: 24, folder: "workshop", category: "Workshop Production", title: "Manufacturing Process", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0094.jpg", size: "medium", color: colors.chiliRed },
      { id: 25, folder: "workshop", category: "Profile Fabrication", title: "Custom Extrusion", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0096.jpg", size: "large", color: colors.darkOrange },
      { id: 26, folder: "workshop", category: "Structural Frames", title: "Heavy Duty Construction", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0098.jpg", size: "small", color: colors.amber },
      { id: 27, folder: "workshop", category: "Display Systems", title: "Showcase Fabrication", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0100.jpg", size: "medium", color: colors.safetyOrange },
      { id: 28, folder: "workshop", category: "Metal Working", title: "Precision Fabrication", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0102.jpg", size: "large", color: colors.tangerine },
      { id: 29, folder: "workshop", category: "Aluminum Assembly", title: "Component Integration", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0104.jpg", size: "small", color: colors.scarlet },
      { id: 30, folder: "workshop", category: "Shopfront Work", title: "Entrance Frame Build", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0106.jpg", size: "medium", color: colors.mustardYellow },
      { id: 31, folder: "workshop", category: "Welding Operations", title: "Seam Welding", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0108.jpg", size: "large", color: colors.persimmon },
      { id: 32, folder: "workshop", category: "Custom Fabrication", title: "Specialty Aluminum Work", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0112.jpg", size: "medium", color: colors.flame },
      { id: 33, folder: "workshop", category: "Frame Manufacturing", title: "Window System Production", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0118.jpg", size: "small", color: colors.brightOrange },
      { id: 34, folder: "workshop", category: "Aluminum Processing", title: "Profile Modification", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0120.jpg", size: "medium", color: colors.bloodOrange },
      { id: 35, folder: "workshop", category: "Workshop Welding", title: "Fabrication Bay Work", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0124.jpg", size: "large", color: colors.chiliRed },
      { id: 36, folder: "workshop", category: "Metal Cutting", title: "Precision Sawing", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0126.jpg", size: "small", color: colors.darkOrange },
      { id: 37, folder: "workshop", category: "Display Construction", title: "Retail Frame Build", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0128.jpg", size: "medium", color: colors.amber },
      { id: 38, folder: "workshop", category: "Structural Assembly", title: "Support Frame Work", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0130.jpg", size: "large", color: colors.safetyOrange },
      { id: 39, folder: "workshop", category: "Aluminum Welding", title: "Corner Joint Welding", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0132.jpg", size: "small", color: colors.tangerine },
      { id: 40, folder: "workshop", category: "Custom Profiles", title: "Special Section Work", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0134.jpg", size: "medium", color: colors.scarlet },
      { id: 41, folder: "workshop", category: "Shopfitting Frames", title: "Commercial Frame Systems", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0136.jpg", size: "large", color: colors.mustardYellow },
      { id: 42, folder: "workshop", category: "Metal Fabrication", title: "Workshop Assembly", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0138.jpg", size: "medium", color: colors.persimmon },
      { id: 43, folder: "workshop", category: "Frame Welding", title: "Structural Joint Work", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0140.jpg", size: "small", color: colors.flame },
      { id: 44, folder: "workshop", category: "Aluminum Work", title: "Profile Assembly", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0142.jpg", size: "medium", color: colors.brightOrange },
      { id: 45, folder: "workshop", category: "Workshop Production", title: "Fabrication Operations", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0144.jpg", size: "large", color: colors.bloodOrange },
      { id: 46, folder: "workshop", category: "Custom Manufacturing", title: "Specialty Frame Build", url: "/8WhiteswayWorkshop-20251115T121447Z-1-001/IMG-20251111-WA0146.jpg", size: "small", color: colors.chiliRed },
    ],
  };

  const openFolder = (folderId) => {
    setSelectedFolder(folderId);
    setCurrentView("images");
  };

  const backToFolders = () => {
    setCurrentView("folders");
    setSelectedFolder(null);
  };

  const displayImages = selectedFolder ? allImages[selectedFolder] || [] : [];

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
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
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
    const currentIndex = displayImages.findIndex((img) => img.id === selectedImage.id);
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % displayImages.length;
    } else {
      newIndex = currentIndex === 0 ? displayImages.length - 1 : currentIndex - 1;
    }
    setSelectedImage(displayImages[newIndex]);
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
    <div style={{ overflow: "hidden", background: colors.white, minHeight: "100vh" }}>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          padding: "100px 20px 60px",
          background: `linear-gradient(135deg, ${colors.darkGray} 0%, #1a1a1a 100%)`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "300px",
            height: "300px",
            background: `radial-gradient(circle, ${colors.chiliRed}20, transparent)`,
            borderRadius: "5%",
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
          className="pt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                display: "inline-block",
                padding: "10px 24px",
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
                }}
              >
                Explore Our Gallery
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
              Aluminum{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${colors.chiliRed}, ${colors.amber})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Shopfitting
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: "1.6",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Professional aluminum fabrication and welding services for commercial shopfitting projects
            </p>
          </motion.div>

          {/* Breadcrumb Navigation - Only show when in image view */}
          <AnimatePresence>
            {currentView === "images" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={backToFolders}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "5px",
                    border: "none",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    color: colors.white,
                    fontWeight: "600",
                    fontSize: "14px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <ArrowLeft size={16} />
                  Back to Folders
                </motion.button>

                {/* Layout Toggle - Only show in image view */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLayoutMode("masonry")}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "5px",
                    border: layoutMode === "masonry" ? `2px solid ${colors.chiliRed}` : "2px solid transparent",
                    background: layoutMode === "masonry" ? colors.white : "rgba(255, 255, 255, 0.1)",
                    color: layoutMode === "masonry" ? colors.darkGray : colors.white,
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
                  <Layout size={16} /> Masonry
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLayoutMode("grid")}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "5px",
                    border: layoutMode === "grid" ? `2px solid ${colors.chiliRed}` : "2px solid transparent",
                    background: layoutMode === "grid" ? colors.white : "rgba(255, 255, 255, 0.1)",
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
                  <Grid3x3 size={16} /> Grid
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ padding: "80px 20px", background: colors.lightGray, minHeight: "60vh" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <AnimatePresence mode="wait">
            {currentView === "folders" ? (
              // FOLDER VIEW
              <motion.div
                key="folders"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "800",
                    color: colors.darkGray,
                    textAlign: "center",
                    marginBottom: "48px",
                  }}
                >
                  Browse Our{" "}
                  <span
                    style={{
                      background: `linear-gradient(90deg, ${colors.chiliRed}, ${colors.amber})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Project Folders
                  </span>
                </motion.h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                    gap: "32px",
                    maxWidth: "1200px",
                    margin: "0 auto",
                  }}
                >
                  {folders.map((folder, index) => {
                    const IconComponent = folder.icon;
                    return (
                      <motion.div
                        key={folder.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        whileHover={{ y: -12, scale: 1.02 }}
                        onClick={() => openFolder(folder.id)}
                        style={{
                          position: "relative",
                          padding: "0",
                          borderRadius: "5px",
                          background: folder.gradient,
                          cursor: "pointer",
                          overflow: "hidden",
                          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          minHeight: "320px",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 20px 60px ${folder.color}40`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.15)";
                        }}
                      >
                        {/* Background Pattern */}
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: folder.bgPattern,
                            opacity: 0.6,
                          }}
                        ></div>

                        {/* Decorative Elements */}
                        <div
                          style={{
                            position: "absolute",
                            top: "-50px",
                            right: "-50px",
                            width: "200px",
                            height: "200px",
                            background: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "5%",
                            filter: "blur(40px)",
                          }}
                        ></div>

                        <div style={{ position: "relative", zIndex: 10, padding: "40px" }}>
                          {/* Icon */}
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            style={{
                              width: "80px",
                              height: "80px",
                              borderRadius: "5px",
                              background: "rgba(255, 255, 255, 0.2)",
                              backdropFilter: "blur(10px)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginBottom: "24px",
                              border: "2px solid rgba(255, 255, 255, 0.3)",
                            }}
                          >
                            <IconComponent size={40} style={{ color: colors.white }} />
                          </motion.div>

                          {/* Content */}
                          <h3
                            style={{
                              fontSize: "2rem",
                              fontWeight: "800",
                              color: colors.white,
                              marginBottom: "12px",
                              letterSpacing: "-0.5px",
                            }}
                          >
                            {folder.name}
                          </h3>

                          <p
                            style={{
                              fontSize: "1rem",
                              color: "rgba(255, 255, 255, 0.9)",
                              marginBottom: "24px",
                              lineHeight: "1.6",
                            }}
                          >
                            {folder.description}
                          </p>

                          {/* Stats */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "16px",
                              marginTop: "auto",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "12px 20px",
                                background: "rgba(255, 255, 255, 0.2)",
                                backdropFilter: "blur(10px)",
                                borderRadius: "5px",
                                border: "1px solid rgba(255, 255, 255, 0.3)",
                              }}
                            >
                              <ImageIcon size={20} style={{ color: colors.white }} />
                              <span
                                style={{
                                  fontSize: "1.125rem",
                                  fontWeight: "700",
                                  color: colors.white,
                                }}
                              >
                                {folder.count}
                              </span>
                              <span
                                style={{
                                  fontSize: "0.875rem",
                                  color: "rgba(255, 255, 255, 0.8)",
                                }}
                              >
                                Photos
                              </span>
                            </div>

                            <motion.div
                              whileHover={{ x: 5 }}
                              style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "5%",
                                background: "rgba(255, 255, 255, 0.2)",
                                backdropFilter: "blur(10px)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid rgba(255, 255, 255, 0.3)",
                              }}
                            >
                              <ChevronRight size={24} style={{ color: colors.white }} />
                            </motion.div>
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)",
                            pointerEvents: "none",
                          }}
                        ></motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              // IMAGE GALLERY VIEW
              <motion.div
                key="images"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: layoutMode === "grid" ? "repeat(auto-fill, minmax(300px, 1fr))" : "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "24px",
                    gridAutoRows: layoutMode === "grid" ? "300px" : "auto",
                  }}
                >
                  {displayImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.02, duration: 0.4 }}
                      whileHover={{ y: -8 }}
                      onClick={() => openModal(image)}
                      style={{
                        gridColumn: getSizeClass(image.size),
                        gridRow: layoutMode === "masonry" && image.size === "large" ? "span 2" : "span 1",
                        borderRadius: "5px",
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
                        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: layoutMode === "grid" ? "100%" : image.size === "large" ? "500px" : "250px",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={image.url}
                          alt={image.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            transition: "transform 0.5s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = "scale(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = "scale(1)";
                          }}
                        />

                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%)",
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = "1";
                          }}
                        ></div>

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
                          <div
                            style={{
                              display: "inline-block",
                              padding: "6px 12px",
                              background: image.color,
                              borderRadius: "5px",
                              fontSize: "0.75rem",
                              fontWeight: "600",
                              color: colors.white,
                              marginBottom: "8px",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                            }}
                          >
                            {image.category}
                          </div>
                          <h3
                            style={{
                              fontSize: "1.25rem",
                              fontWeight: "700",
                              color: colors.white,
                              margin: 0,
                            }}
                          >
                            {image.title}
                          </h3>
                        </div>

                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%) scale(0)",
                            width: "64px",
                            height: "64px",
                            background: colors.white,
                            borderRadius: "5%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "transform 0.3s ease",
                            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)";
                          }}
                        >
                          <Maximize2 size={24} style={{ color: image.color }} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Image Modal - (keeping the same as before) */}
      <AnimatePresence>
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
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "1400px",
                maxHeight: "95vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px",
                  background: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "5px 5px 0 0",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: colors.white,
                      margin: "0 0 4px 0",
                    }}
                  >
                    {selectedImage.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255, 255, 255, 0.7)",
                      margin: 0,
                    }}
                  >
                    {selectedImage.category}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "5%",
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
                  <X size={20} />
                </motion.button>
              </div>

              <div
                style={{
                  flex: 1,
                  position: "relative",
                  background: "#000",
                  borderRadius: "0 0 5px 5px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "500px",
                }}
              >
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
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />

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
                    borderRadius: "5%",
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
                  <ChevronLeft size={24} />
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
                    borderRadius: "5%",
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
                  <ChevronRight size={24} />
                </motion.button>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  padding: "20px",
                  background: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "0 0 5px 5px",
                  flexWrap: "wrap",
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleZoomOut}
                  disabled={zoom <= 0.5}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "5%",
                    border: "none",
                    background: zoom <= 0.5 ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.9)",
                    color: colors.darkGray,
                    cursor: zoom <= 0.5 ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  <ZoomOut size={20} />
                </motion.button>

                <div
                  style={{
                    padding: "8px 16px",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "5px",
                    color: colors.white,
                    fontSize: "14px",
                    fontWeight: "600",
                    minWidth: "60px",
                    textAlign: "center",
                  }}
                >
                  {Math.round(zoom * 100)}%
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleZoomIn}
                  disabled={zoom >= 3}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "5%",
                    border: "none",
                    background: zoom >= 3 ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.9)",
                    color: colors.darkGray,
                    cursor: zoom >= 3 ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  <ZoomIn size={20} />
                </motion.button>

                <div
                  style={{
                    width: "1px",
                    height: "30px",
                    background: "rgba(255, 255, 255, 0.2)",
                    margin: "0 8px",
                  }}
                ></div>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleRotate}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "5%",
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
                  <RotateCw size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleDownload}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "5%",
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
                  <Download size={20} />
                </motion.button>

                <div style={{ position: "relative" }}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "5%",
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
                    <Share2 size={20} />
                  </motion.button>

                  <AnimatePresence>
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
                          borderRadius: "5px",
                          padding: "8px",
                          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                          minWidth: "160px",
                          zIndex: 10,
                        }}
                      >
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
                            borderRadius: "5px",
                            transition: "background 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = colors.lightGray;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          <Facebook size={18} style={{ color: "#1877F2" }} />
                          Facebook
                        </button>
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
                            borderRadius: "5px",
                            transition: "background 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = colors.lightGray;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          <FaXTwitter size={18} style={{ color: "#1DA1F2" }} />
                          Twitter
                        </button>
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
                            borderRadius: "5px",
                            transition: "background 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = colors.lightGray;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          {copied ? (
                            <>
                              <Check size={18} style={{ color: colors.chiliRed }} />
                              Copied!
                            </>
                          ) : (
                            <>
                              <LinkIcon size={18} />
                              Copy Link
                            </>
                          )}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;