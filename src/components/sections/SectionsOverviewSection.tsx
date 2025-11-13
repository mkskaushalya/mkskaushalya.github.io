import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  FolderOpen,
} from "lucide-react";
import Button from "../ui/Button";

const SectionsOverviewSection: React.FC = () => {
  const sections = [
    {
      title: "Professional Experience",
      description:
        "Explore my hands-on experience with real-world projects including AI-powered systems and full-stack applications.",
      icon: <Briefcase className="w-8 h-8" />,
      link: "/experience",
      color: "from-[#004162] to-[#003451]",
      highlights: [
        "Real-Time AI Systems",
        "Full-Stack Development",
        "Cloud Deployment",
      ],
    },
    {
      title: "Education",
      description:
        "My academic journey in Information & Communication Engineering with focus on modern technologies.",
      icon: <GraduationCap className="w-8 h-8" />,
      link: "/education",
      color: "from-[#004162] to-[#003451]",
      highlights: [
        "BSc ICE Engineering",
        "Computer Vision Thesis",
        "SLTC Research University",
      ],
    },
    {
      title: "Technical Skills",
      description:
        "Comprehensive overview of my expertise across various domains of software development.",
      icon: <Code className="w-8 h-8" />,
      link: "/skills",
      color: "from-[#004162] to-[#003451]",
      highlights: [
        "40+ Technical Skills",
        "Cloud & DevOps",
        "Programming Languages",
      ],
    },
    {
      title: "Certifications",
      description:
        "Professional certifications and training programs demonstrating my commitment to continuous learning.",
      icon: <Award className="w-8 h-8" />,
      link: "/certifications",
      color: "from-[#004162] to-[#003451]",
      highlights: [
        "AWS Academy Graduate",
        "Google AI Essentials",
        "Linux DevOps",
      ],
    },
    {
      title: "Portfolio",
      description:
        "Interactive showcase of my projects with detailed information and live demonstrations.",
      icon: <FolderOpen className="w-8 h-8" />,
      link: "/portfolio",
      color: "from-[#004162] to-[#003451]",
      highlights: ["Interactive Projects", "Live Demos", "Source Code"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold text-[#004162] dark:text-white mb-4">
            Explore My Journey
          </h2>
          <p className="text-[18px] text-[#7f8c8d] dark:text-gray-300 max-w-2xl mx-auto">
            Dive deeper into my professional experience, education, skills, and
            projects. Each section provides detailed insights into my expertise
            and accomplishments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group transform hover:scale-105"
            >
              <div
                className={`bg-gradient-to-r ${section.color} p-6 text-white`}
              >
                <div className="flex items-center mb-4">
                  {section.icon}
                  <h3 className="text-[20px] font-bold ml-3">
                    {section.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[15px] text-[#34495e] dark:text-gray-300 mb-4 leading-relaxed">
                  {section.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-[14px] font-bold text-[#004162] dark:text-white mb-2">
                    Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {section.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="flex items-center text-[13px] text-[#7f8c8d] dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-[#004162] dark:bg-blue-400 rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={section.link}>
                  <Button
                    variant="outline"
                    className="w-full justify-center group-hover:translate-x-1 transform duration-300"
                  >
                    Explore Section
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionsOverviewSection;
