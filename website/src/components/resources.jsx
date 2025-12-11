import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Video,
  FileText,
  Newspaper,
  ExternalLink,
  Search,
  Filter,
  Calendar,
  User,
  Tag,
  Download,
  Play,
  TrendingUp,
  Award,
  Lightbulb,
  ArrowRight,
  Youtube,
  Clock,
  Star,
  BookMarked,
  Layers,
  ChevronRight,
  Quote,
  Bookmark,
  Share2,
  Eye,
  Heart,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate()

  const categories = [
    { id: "all", name: "All Resources", icon: Layers },
    { id: "books", name: "Books & Blogs", icon: BookOpen },
    { id: "videos", name: "Video Tutorials", icon: Video },
    { id: "papers", name: "Research Papers", icon: FileText },
    { id: "news", name: "Industry News", icon: Newspaper },
  ];

  const resources = [
    // Industry News from web search
    {
      id: 1,
      category: "news",
      type: "Industry Report",
      title: "Global Shopfitting Industry Report 2024: Detailed Analysis of 600+ Leading Companies",
      author: "Research and Markets",
      description: "Comprehensive analysis of 610 leading shopfitting companies worldwide including market trends, financial performance, and industry forecasts. Covers shop furniture, fixtures, and displays.",
      excerpt: "The Shopfitting Analysis provides a detailed overview of the global shopfitting market and delivers a comprehensive individual analysis on the top 610 companies.",
      image: "https://ml.globenewswire.com/media/MDVlNTk4NzUtZmFhMy00ZjZjLThiNWYtMDJjNjk3YmI5N2E4LTEwMjY3Mzc=/tiny/Research-and-Markets.png",
      date: "January 25, 2024",
      tags: ["Market Analysis", "Global Industry", "Financial Trends"],
      link: "https://www.globenewswire.com/news-release/2024/01/25/2816639/0/en/Global-Shopfitting-Industry-Report-2024-Detailed-Analysis-of-600-Leading-Companies.html",
      featured: true,
      hero: true,
      trending: true,
      readTime: "15 min",
      source: "GlobeNewswire",
      sourceLogo: "https://ml.globenewswire.com/media/MDVlNTk4NzUtZmFhMy00ZjZjLThiNWYtMDJjNjk3YmI5N2E4LTEwMjY3Mzc=/tiny/Research-and-Markets.png",
    },
    {
      id: 5,
      category: "papers",
      type: "Market Research",
      title: "Customized Shopfitting Materials Market - Industry Share Report 2025",
      author: "Global Market Insights",
      description: "Aluminum market anticipated to surpass $165 billion by 2022. Metals including aluminum preferred for shelves due to cost-efficiency and durability. Asia Pacific expected to dominate.",
      excerpt: "Aluminum-based shopfitting materials are gaining preference due to their lightweight properties, durability, and design flexibility.",
      image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800",
      date: "2025",
      tags: ["Aluminum", "Customization", "Market Share"],
      link: "https://www.gminsights.com/industry-analysis/customized-shopfitting-materials-market",
      featured: true,
      citations: 245,
      pages: 78,
      source: "Global Market Insights",
      sourceLogo: "https://via.placeholder.com/100x30/1976D2/FFFFFF?text=GMI",
    },
    {
      id: 6,
      category: "papers",
      type: "Research Report",
      title: "Shop Fitting Material Market: Global Analysis and Forecast (2025-2032)",
      author: "Maximize Market Research",
      description: "Analysis of aluminum-based shopfitting materials driven by demand for lightweight, durable solutions. Covers steel, glass, plastic, and specialized materials across retail sectors.",
      excerpt: "The shift towards sustainable and modular shopfitting solutions is reshaping material preferences in the global market.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
      date: "2025",
      tags: ["Materials Analysis", "Aluminum", "Forecast"],
      link: "https://www.maximizemarketresearch.com/market-report/shop-fitting-material-market/190693/",
      featured: false,
      citations: 156,
      pages: 92,
      source: "Maximize Market Research",
      sourceLogo: "https://via.placeholder.com/100x30/F57C00/FFFFFF?text=MMR",
    },
    {
      id: 7,
      category: "books",
      type: "Technical Guide",
      title: "Shop Fitting Dilemma: Aluminium vs. Steel",
      author: "WeiLin Retail",
      description: "Comparative analysis of aluminum and steel in shopfitting, covering strength, durability, corrosion resistance, and aesthetic appeal. Aluminum preferred for outdoor applications.",
      excerpt: "Understanding material properties is crucial for selecting the right shopfitting solution that balances performance, aesthetics, and budget.",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800",
      date: "2024",
      tags: ["Materials Comparison", "Aluminum vs Steel", "Technical"],
      link: "https://weilinretail.com/shop-fitting-dilemma-aluminium-vs-steel/",
      featured: true,
      rating: 4.7,
      reads: "9.8K",
      source: "WeiLin Retail",
      sourceLogo: "https://via.placeholder.com/100x30/00796B/FFFFFF?text=WeiLin",
    },
    {
      id: 8,
      category: "books",
      type: "Product Guide",
      title: "Aluminium Profiles - Shop Fitting and Point of Sale",
      author: "Custom Profiles UK",
      description: "UK supplier specializing in standard and bespoke aluminum profiles for shopfitting since 2005. Highlights flexibility of design and low maintenance properties.",
      excerpt: "Custom aluminum extrusions offer unlimited design possibilities for creating unique shopfitting solutions tailored to brand identity.",
      image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800",
      date: "2024",
      tags: ["Aluminum Profiles", "UK Market", "Bespoke"],
      link: "https://www.custom-profiles.com/aluminium-extrusions/market-sectors/aluminium-profiles-shop-fitting-point-sale/",
      featured: false,
      rating: 4.5,
      reads: "7.4K",
      source: "Custom Profiles UK",
      sourceLogo: "https://via.placeholder.com/100x30/5E35B1/FFFFFF?text=Custom+Profiles",
    },
    {
      id: 9,
      category: "news",
      type: "Market Forecast",
      title: "Future Scope of Shopfitting Service Market Set to Witness Significant Growth by 2025-2032",
      author: "Worldwide Market Reports",
      description: "Market forecast covering key players including IKEA, Shopfitting UK, and A1 Retail. Analysis of regional growth trends and market dynamics.",
      excerpt: "The shopfitting services market is poised for accelerated growth driven by e-commerce integration and omnichannel retail strategies.",
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800",
      date: "2024",
      tags: ["Market Forecast", "Key Players", "Growth Trends"],
      link: "https://www.openpr.com/news/4240543/future-scope-of-shopfitting-service-market-set-to-witness",
      featured: false,
      trending: true,
      readTime: "9 min",
      source: "OpenPR / Worldwide Market Reports",
      sourceLogo: "https://via.placeholder.com/100x30/D32F2F/FFFFFF?text=WMR",
    },
    {
      id: 10,
      category: "books",
      type: "Product Catalog",
      title: "Aluminium Extrusions - Custom Shopfitting Solutions",
      author: "Advanced Display Systems",
      description: "Australian supplier offering aluminum and PVC extrusions for shopfitting, including slatwall T-extrusions, corner extrusions, and U-channel solutions for retail displays.",
      excerpt: "Versatile aluminum extrusion systems provide the foundation for flexible, modular retail display solutions.",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800",
      date: "2024",
      tags: ["Extrusions", "Australia", "Display Systems"],
      link: "https://www.advdis.com.au/product-category/aluminium-extrusion/",
      featured: false,
      rating: 4.4,
      reads: "5.9K",
      source: "Advanced Display Systems",
      sourceLogo: "https://via.placeholder.com/100x30/0288D1/FFFFFF?text=ADS",
    },
    {
      id: 12,
      category: "news",
      type: "Award News",
      title: "Historic beauty in new splendour - The Georgian Harrods",
      author: "umdasch The Store Makers",
      description: "umdasch The Store Makers wins RLI Award for Interior Excellence with Harrods project The Georgian, showcasing premium shopfitting craftsmanship.",
      excerpt: "Award-winning retail design demonstrates the perfect balance between heritage preservation and contemporary luxury.",
      image: "https://www.umdasch.com/upload/assets/02_Company/News-Press/2025_The-Georgian/The_Georgian_Harrods_umdasch_David-Collins-Studio-The-Georgian-Harrods-1-V1.jpg",
      date: "September 18, 2025",
      tags: ["Awards", "Luxury Retail", "Heritage"],
      link: "https://www.umdasch.com/en/news/umdasch-the-store-makers-wins-rli-award-for-interior-excellence-with-harrods-project-the-georgian",
      featured: false,
      trending: false,
      readTime: "7 min",
      source: "umdasch Group",
      sourceLogo: "https://www.umdasch.com/images/umdasch_logo.svg",
    },
  
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      activeCategory === "all" || resource.category === activeCategory;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const heroResources = filteredResources.filter((r) => r.hero);
  const regularResources = filteredResources.filter((r) => !r.hero);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our resources newsletter!");
  };

  return (
    <div className="overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center text-white overflow-hidden px-5 py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600")',
          }}
        ></div>
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background:
              "linear-gradient(135deg, #E3180Dee 0%, #E35906dd 50%, #F3B900ee 100%)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl pt-28"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-sm border border-white/30 bg-white/20 backdrop-blur-md "
            >
              <Lightbulb size={18} />
              <span className="text-sm font-semibold tracking-wider">
                KNOWLEDGE HUB
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Resources & Insights
            </h1>

            <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8">
              Curated collection of industry knowledge, research, and
              inspiration for shopfitting excellence
            </p>

            <div className="relative max-w-xl">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by topic, author, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-sm bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30 py-4 px-5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              const count = resources.filter(
                (r) => category.id === "all" || r.category === category.id
              ).length;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    flex items-center gap-2 px-5 py-2.5 rounded-sm font-semibold whitespace-nowrap
                    transition-all duration-300 transform
                    ${
                      isActive
                        ? "bg-gray-900 text-white shadow-lg scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }
                  `}
                >
                  <Icon size={16} />
                  <span className="text-sm">{category.name}</span>
                  <span
                    className={`px-2 py-0.5 rounded-sm text-xs font-bold ${
                      isActive ? "bg-white/20" : "bg-gray-200"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hero Resources */}
      {heroResources.length > 0 && (
        <section className="py-8 md:py-12 px-5">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {heroResources.map((resource, index) => {
                const CategoryIcon =
                  categories.find((c) => c.id === resource.category)?.icon ||
                  BookOpen;

                return (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`
                      bg-white rounded-sm overflow-hidden shadow-xl hover:shadow-2xl 
                      transition-all duration-300 group cursor-pointer
                      ${
                        index === 0 && heroResources.length === 1
                          ? "lg:col-span-2"
                          : ""
                      }
                    `}
                  >
                    <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${resource.image})` }}
                      ></div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                      <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                        <div className="px-4 py-2 bg-white/95 backdrop-blur-md rounded-sm flex items-center gap-2">
                          <CategoryIcon size={16} className="text-[#E3180D]" />
                          <span className="text-sm font-bold text-gray-800">
                            {resource.type}
                          </span>
                        </div>

                        <div className="px-4 py-2 bg-[#F3B900] rounded-sm flex items-center gap-1">
                          <Award size={16} className="text-white" />
                          <span className="text-sm font-bold text-white">
                            Featured
                          </span>
                        </div>

                        {resource.trending && (
                          <div className="px-4 py-2 bg-[#E3180D] rounded-sm flex items-center gap-1">
                            <TrendingUp size={16} className="text-white" />
                            <span className="text-sm font-bold text-white">
                              Trending
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex flex-wrap gap-4 text-white/90 text-sm mb-4">
                          <div className="flex items-center gap-2">
                            <User size={16} />
                            <span className="font-semibold">
                              {resource.author}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{resource.date}</span>
                          </div>
                          {resource.duration && (
                            <div className="flex items-center gap-2">
                              <Clock size={16} />
                              <span>{resource.duration}</span>
                            </div>
                          )}
                          {resource.readTime && (
                            <div className="flex items-center gap-2">
                              <Clock size={16} />
                              <span>{resource.readTime} read</span>
                            </div>
                          )}
                        </div>

                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
                          {resource.title}
                        </h3>

                        {resource.excerpt && (
                          <p className="text-white/90 text-base md:text-lg leading-relaxed line-clamp-2">
                            {resource.excerpt}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        {resource.sourceLogo && (
                          <img
                            src={resource.sourceLogo}
                            alt={resource.source}
                            className="h-6 object-contain"
                          />
                        )}
                        <span className="text-sm text-gray-600 font-semibold">
                          {resource.source}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 rounded-sm text-xs font-semibold text-gray-700"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          {resource.views && (
                            <div className="flex items-center gap-1">
                              <Eye size={16} />
                              <span className="font-semibold">
                                {resource.views}
                              </span>
                            </div>
                          )}


                          {resource.reads && (
                            <div className="flex items-center gap-1">
                              <BookOpen size={16} />
                              <span className="font-semibold">
                                {resource.reads} reads
                              </span>
                            </div>
                          )}
                          {resource.citations && (
                            <div className="flex items-center gap-1">
                              <Quote size={16} />
                              <span className="font-semibold">
                                {resource.citations} citations
                              </span>
                            </div>
                          )}
                        </div>

                        <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-sm font-semibold hover:bg-gray-800 transition-all group/btn">
                          <span>View</span>
                          <ArrowRight
                            size={16}
                            className="group-hover/btn:translate-x-1 transition-transform"
                          />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Regular Resources - Masonry Grid */}
      {regularResources.length > 0 && (
        <section className="py-8 md:py-12 px-5">
          <div className="container mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
                {activeCategory === "all"
                  ? "More Resources"
                  : `All ${
                      categories.find((c) => c.id === activeCategory)?.name
                    }`}
              </h2>

              <div className="flex items-center gap-2 text-gray-600">
                <Filter size={18} />
                <span className="font-semibold text-sm">
                  {regularResources.length} Resources
                </span>
              </div>
            </div>

            {/* Asymmetric Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {regularResources.map((resource, index) => {
                const CategoryIcon =
                  categories.find((c) => c.id === resource.category)?.icon ||
                  BookOpen;

                // Create variable card heights for visual interest
                const isLarge = index % 7 === 0; // Every 7th card is larger
                const isMedium = index % 5 === 0 && !isLarge; // Every 5th card is medium

                return (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % 6) * 0.05, duration: 0.6 }}
                    className={`
                      bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl 
                      transition-all duration-300 group cursor-pointer
                      ${
                        isLarge
                          ? "md:col-span-2 lg:col-span-2 lg:row-span-2"
                          : ""
                      }
                      ${isMedium ? "md:row-span-2" : ""}
                    `}
                  >
                    {/* Image Section */}
                    <div
                      className={`relative overflow-hidden ${
                        isLarge ? "h-80" : isMedium ? "h-64" : "h-48"
                      }`}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${resource.image})` }}
                      ></div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <div className="px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-sm flex items-center gap-2">
                          <CategoryIcon size={14} className="text-[#E3180D]" />
                          <span className="text-xs font-bold text-gray-800">
                            {resource.type}
                          </span>
                        </div>

                        {resource.trending && (
                          <div className="px-3 py-1.5 bg-[#E3180D] rounded-sm">
                            <TrendingUp size={14} className="text-white" />
                          </div>
                        )}
                      </div>

                      {/* Bottom Overlay Info */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-3 text-white text-sm">
                          {resource.duration && (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-sm">
                              <Play size={14} />
                              <span className="font-semibold">
                                {resource.duration}
                              </span>
                            </div>
                          )}
                          {resource.views && (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-sm">
                              <Eye size={14} />
                              <span className="font-semibold">
                                {resource.views}
                              </span>
                            </div>
                          )}
                          {resource.pages && (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-sm">
                              <FileText size={14} />
                              <span className="font-semibold">
                                {resource.pages} pages
                              </span>
                            </div>
                          )}
                          {resource.readTime && (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-sm">
                              <Clock size={14} />
                              <span className="font-semibold">
                                {resource.readTime}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`p-5 ${isLarge ? "lg:p-6" : ""}`}>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <User size={14} />
                        <span className="font-semibold line-clamp-1">
                          {resource.author}
                        </span>
                        <span className="text-gray-400">•</span>
                        <Calendar size={14} />
                        <span>{resource.date}</span>
                      </div>

                      <h3
                        className={`font-extrabold text-gray-800 mb-2 leading-tight group-hover:text-[#E3180D] transition-colors ${
                          isLarge
                            ? "text-xl md:text-2xl line-clamp-3"
                            : "text-base md:text-lg line-clamp-2"
                        }`}
                      >
                        {resource.title}
                      </h3>

                      <p
                        className={`text-gray-600 mb-4 text-sm leading-relaxed ${
                          isLarge ? "line-clamp-4" : "line-clamp-2"
                        }`}
                      >
                        {resource.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags
                          .slice(0, isLarge ? 4 : 3)
                          .map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 rounded-sm text-xs font-semibold text-gray-700 flex items-center gap-1"
                            >
                              <Tag size={10} />
                              {tag}
                            </span>
                          ))}
                      </div>

                      {/* Bottom Stats and Action */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3 text-xs text-gray-600">
                          {resource.rating && (
                            <div className="flex items-center gap-1">
                              <Star
                                size={14}
                                className="text-[#F3B900] fill-[#F3B900]"
                              />
                              <span className="font-semibold">
                                {resource.rating}
                              </span>
                            </div>
                          )}
                          {resource.citations && (
                            <div className="flex items-center gap-1">
                              <Quote size={14} />
                              <span className="font-semibold">
                                {resource.citations}
                              </span>
                            </div>
                          )}
                          {resource.reads && (
                            <div className="flex items-center gap-1">
                              <BookOpen size={14} />
                              <span className="font-semibold">
                                {resource.reads}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-sm transition-colors">
                            <Bookmark size={16} className="text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-sm transition-colors">
                            <Share2 size={16} className="text-gray-600" />
                          </button>
                          <button className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-sm text-sm font-semibold transition-all flex items-center gap-1"
                          onClick={() => window.open(resource.link, "_blank")}>
                            <span>View</span>
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* No Results */}
            {regularResources.length === 0 && heroResources.length === 0 && (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-sm bg-gray-200 mb-6">
                  <Search size={40} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  No Resources Found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="px-6 py-3 bg-gray-900 text-white rounded-sm font-semibold hover:bg-gray-800 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Quote Section - Breaking Layout */}
      <section className="py-16 md:py-24 px-5 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-8 -left-4 md:-left-8 text-[#E3180D] opacity-20">
              <Quote size={120} />
            </div>

            <div className="relative z-10 text-center px-8 md:px-16">
              <p className="text-2xl md:text-4xl font-bold text-gray-800 leading-relaxed mb-8">
                "Excellence in shopfitting is not just about precision
                manufacturing. It's about understanding how spaces work, how
                people interact with them, and creating solutions that last."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-[#E3180D] to-[#F3B900]"></div>
                <div className="text-left">
                  <div className="font-bold text-gray-800">Industry Expert</div>
                  <div className="text-sm text-gray-600">
                    Aluminum Shopfitting Federation
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section - Full Width */}
      <section className="py-16 md:py-24 px-5 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-sm bg-white/10 backdrop-blur-md mb-6">
              <BookMarked size={40} />
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Never Miss an Update
            </h2>

            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Get curated industry insights, technical guides, and expert
              knowledge delivered weekly
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="max-w-lg mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-[#E3180D] to-[#FF2A00] rounded-sm font-bold hover:shadow-xl transition-all transform hover:-translate-y-1 whitespace-nowrap"
                >
                  Subscribe Free
                </button>
              </div>
              <p className="text-sm opacity-70 mt-4">
                Join 10,000+ professionals • Unsubscribe anytime
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-5 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CTA Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-[#E3180D] to-[#FA7301] rounded-sm p-8 md:p-10 text-white overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-sm -translate-y-32 translate-x-32 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <Lightbulb size={48} className="mb-6" />
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                  Ready for Your Project?
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Apply industry knowledge to your next shopfitting project. Get
                  expert consultation.
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#E3180D] rounded-sm font-bold hover:bg-gray-100 transition-all"
                onClick={()=>navigate("/contact")}>
                  <span>Start Your Project</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            {/* CTA Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-sm p-8 md:p-10 text-white overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-sm -translate-y-32 translate-x-32 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <BookOpen size={48} className="mb-6" />
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                  Contribute Your Knowledge
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Share your expertise with our community. Submit your technical
                  guide or case study.
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-sm font-bold hover:bg-white/20 transition-all"
                onClick={()=>navigate("/contact")}>
                  <span>Submit Resource</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Resources;
