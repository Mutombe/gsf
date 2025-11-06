import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageProvider } from "./components/lunguageContext";
import { ArrowBigDown, ArrowUp } from "lucide-react";

// Layout Components
import Navbar from "./components/nav";
import Footer from "./components/footer";

// Pages
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Products from "./components/products";
import Projects from "./components/projects";
import Gallery from "./components/gallery";
import Testimonials from "./components/review";
import FAQ from "./components/faqs";
import Contact from "./components/contact";
import NotFound from "./components/notfound";
import Resources from "./components/resources";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group no-print"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <ArrowUp
            size={20}
            className="transform group-hover:-translate-y-1 transition-transform"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

// Scroll to top on route change
function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-neutral-50 gellix-font">
          <style jsx>{`
            /* Century Gothic Font Face */
            @font-face {
              font-family: "Century Gothic Custom";
              src: url("./fonts/weezerfont.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Gellix";
              src: url("./fonts/Gellix-Light.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: "Gellix";
              src: url("./fonts/Gellix-Regular.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }

            /* Font utility classes */
            .gravesend-sans {
              font-family: "Gravesend Sans", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            .roboto-font {
              font-family: "Roboto", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            .gellix-font {
              font-family: "Gellix", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            body {
              overflow-x: hidden;
            }

            /* Smooth scrolling */
            html {
              scroll-behavior: smooth;
            }
          `}</style>
          <Navbar />
          <ScrollToTopOnMount />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
          <ScrollToTop />
          <Toaster
            position="top-right"
            richColors
            closeButton
            toastOptions={{
              style: {
                background: "#FEF3C7",
                border: "1px solid #F59E0B",
              },
            }}
          />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
