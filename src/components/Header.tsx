import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    } else {
      // If not on home page, navigate to home with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`py-2.5 w-full z-50 transition-all duration-300 flex justify-center items-center h-[100px] ${
        isScrolled
          ? "sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <nav className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex space-x-3 items-center text-2xl lg:text-4xl font-bold"
            >
              <span className="text-[#004162] dark:text-blue-400">Sahan </span>
              <span className="text-[#7a7f85] dark:text-gray-300">
                Kaushalya
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/experience"
              className={`relative px-2 py-2 text-lg font-medium transition-all duration-300 group ${
                isActivePage("/experience")
                  ? "text-blue-400 dark:text-blue-400"
                  : "text-[#212627] dark:text-gray-200 hover:text-[#004162] dark:hover:text-blue-400"
              }`}
            >
              Experience
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 dark:bg-blue-400 transition-all duration-300 ${
                  isActivePage("/experience")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              to="/education"
              className={`relative px-2 py-2 text-lg font-medium transition-all duration-300 group ${
                isActivePage("/education")
                  ? "text-blue-400 dark:text-blue-400"
                  : "text-[#212627] dark:text-gray-200 hover:text-[#004162] dark:hover:text-blue-400"
              }`}
            >
              Education
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 dark:bg-blue-400 transition-all duration-300 ${
                  isActivePage("/education")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              to="/skills"
              className={`relative px-2 py-2 text-lg font-medium transition-all duration-300 group ${
                isActivePage("/skills")
                  ? "text-blue-400 dark:text-blue-400"
                  : "text-[#212627] dark:text-gray-200 hover:text-[#004162] dark:hover:text-blue-400"
              }`}
            >
              Skills
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 dark:bg-blue-400 transition-all duration-300 ${
                  isActivePage("/skills") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              to="/certifications"
              className={`relative px-2 py-2 text-lg font-medium transition-all duration-300 group ${
                isActivePage("/certifications")
                  ? "text-blue-400 dark:text-blue-400"
                  : "text-[#212627] dark:text-gray-200 hover:text-[#004162] dark:hover:text-blue-400"
              }`}
            >
              Certifications
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 dark:bg-blue-400 transition-all duration-300 ${
                  isActivePage("/certifications")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              to="/portfolio"
              className={`relative px-2 py-2 text-lg font-medium transition-all duration-300 group ${
                isActivePage("/portfolio")
                  ? "text-blue-400 dark:text-blue-400"
                  : "text-[#212627] dark:text-gray-200 hover:text-[#004162] dark:hover:text-blue-400"
              }`}
            >
              Portfolio
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 dark:bg-blue-400 transition-all duration-300 ${
                  isActivePage("/portfolio")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="ml-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Contact
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center">
            {/* Mobile Hamburger */}
            <button
              className="z-50 p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#004162] dark:text-blue-400" />
              ) : (
                <Menu className="w-6 h-6 text-[#004162] dark:text-blue-400" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden fixed top-0 right-0 h-screen w-80 max-w-[90vw] 
            bg-gradient-to-b from-[#e8f3ff] to-[#eaeaff] dark:from-gray-900 dark:to-gray-800 backdrop-blur-md 
            transform transition-transform duration-300 z-40 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col justify-center items-center h-full space-y-6 px-6">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`w-full text-center py-4 text-xl font-medium transition-colors duration-300 border-b border-[#c6cbd2] dark:border-gray-600 ${
                  isActivePage("/")
                    ? "text-blue-400 dark:text-blue-400 bg-blue-400/10"
                    : "text-[#212627] dark:text-gray-200 hover:text-[#004162] dark:hover:text-blue-400"
                }`}
              >
                Home
              </Link>
              <Link
                to="/experience"
                onClick={() => setIsMenuOpen(false)}
                className={`w-full text-center py-4 text-xl font-medium transition-colors duration-300 border-b border-[#c6cbd2] dark:border-gray-600 ${
                  isActivePage("/experience")
                    ? "text-blue-400 dark:text-blue-400 bg-blue-400/10"
                    : "text-[#212627] dark:text-gray-200 hover:text-[#004162] dark:hover:text-blue-400"
                }`}
              >
                Experience
              </Link>
              <Link
                to="/education"
                onClick={() => setIsMenuOpen(false)}
                className={`w-full text-center py-4 text-xl font-medium transition-colors duration-300 border-b border-[#c6cbd2] dark:border-gray-600 ${
                  isActivePage("/education")
                    ? "text-blue-400 dark:text-blue-400 bg-blue-400/10"
                    : "text-[#212627] dark:text-gray-200 hover:text-[#004162] dark:hover:text-blue-400"
                }`}
              >
                Education
              </Link>
              <Link
                to="/skills"
                onClick={() => setIsMenuOpen(false)}
                className={`w-full text-center py-4 text-xl font-medium transition-colors duration-300 border-b border-[#c6cbd2] dark:border-gray-600 ${
                  isActivePage("/skills")
                    ? "text-blue-400 dark:text-blue-400 bg-blue-400/10"
                    : "text-[#212627] dark:text-gray-200 hover:text-[#004162] dark:hover:text-blue-400"
                }`}
              >
                Skills
              </Link>
              <Link
                to="/certifications"
                onClick={() => setIsMenuOpen(false)}
                className={`w-full text-center py-4 text-xl font-medium transition-colors duration-300 border-b border-[#c6cbd2] dark:border-gray-600 ${
                  isActivePage("/certifications")
                    ? "text-blue-400 dark:text-blue-400 bg-blue-400/10"
                    : "text-[#212627] dark:text-gray-200 hover:text-[#004162] dark:hover:text-blue-400"
                }`}
              >
                Certifications
              </Link>
              <Link
                to="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className={`w-full text-center py-4 text-xl font-medium transition-colors duration-300 border-b border-[#c6cbd2] dark:border-gray-600 ${
                  isActivePage("/portfolio")
                    ? "text-blue-400 dark:text-blue-400 bg-blue-400/10"
                    : "text-[#212627] dark:text-gray-200 hover:text-[#004162] dark:hover:text-blue-400"
                }`}
              >
                Portfolio
              </Link>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="w-full text-center py-4 text-xl font-medium text-[#212627] dark:text-gray-200 hover:text-[#004162] dark:hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
