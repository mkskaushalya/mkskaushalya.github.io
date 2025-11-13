import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Skills", path: "/skills" },
    { name: "Certifications", path: "/certifications" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/mkskaushalya",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/sahankaushalya",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:mkskaushalya@gmail.com",
    },
  ];

  return (
    <footer className="mt-auto bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center text-2xl font-bold">
                <span className="text-[#004162] dark:text-blue-400">
                  Sahan{" "}
                </span>
                <span className="text-[#7a7f85] dark:text-gray-300">
                  Kaushalya
                </span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Intern Software Engineer passionate about full-stack
                development, cloud computing, and creating innovative solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-[#004162] dark:hover:bg-blue-600 text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-600 dark:text-gray-400 hover:text-[#004162] dark:hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Contact Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#004162] dark:text-blue-400" />
                  <a
                    href="mailto:mkskaushalya@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#004162] dark:hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    mkskaushalya@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#004162] dark:text-blue-400" />
                  <a
                    href="tel:+94787520742"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#004162] dark:hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    +94-787520742
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-[#004162] dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    Kosgama, Colombo, Sri Lanka
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter/CTA */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Interested in working together or discussing opportunities?
              </p>
              <a
                href="mailto:mkskaushalya@gmail.com?subject=Project Inquiry"
                className="inline-flex items-center px-4 py-2 bg-[#004162] dark:bg-blue-600 text-white rounded-lg hover:bg-[#003451] dark:hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-sm font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Sahan Kaushalya. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-right">
              Designed & Developed with ❤️ by Sahan Kaushalya
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
