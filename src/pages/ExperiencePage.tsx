import React from "react";
import { ExternalLink, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      title:
        "Real-Time Landscape Contour Mapping System with Predictive AI (FYP)",
      period: "May 2024 - May 2025",
      type: "Final Year Project",
      technologies: "Python, NumPy, Matplotlib, OpenCV, GPT-4o AI",
      description:
        "Developed a real-time system integrating a Kinect depth sensor and computer vision to generate and project dynamic contour maps onto physical terrain. Incorporated a GPT-4o AI model to analyze terrain changes and predict future transformations, such as land submersion.",
      highlights: [
        "Real-time depth sensing using Kinect sensor",
        "Computer vision algorithms for terrain mapping",
        "AI-powered predictive analysis for land transformation",
        "Dynamic contour map projection system",
      ],
    },
    {
      title: "SLTC Student Information ID Generating Application",
      period: "May 2024 - Nov 2024",
      type: "Full-stack Development Project",
      role: "Full-stack Developer, Testing, CI/CD, Deployment",
      technologies:
        "Laravel, React, TypeScript, MySQL, Node.js, Puppeteer, Python, AWS EC2, GitHub Actions",
      description:
        "Created an SMS OTP-based data collection system for all students and produced 3000+ cards",
      highlights: [
        "Developed SMS OTP-based data collection system",
        "Produced 3000+ student ID cards",
        "Ensured data accuracy via OTP verification",
        "Utilized Puppeteer for bulk ID generation",
        "Used Python for PDF processing",
        "Implemented GitHub Actions for automated EC2 deployments with 95% success rate",
      ],
    },
  ];

  return (
    <main className="flex-1 bg-white dark:bg-gray-900">
      {/* Page Header */}
      <div className="bg-[#004162] dark:bg-gray-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-[48px] font-bold mb-4">
            Professional Experience
          </h1>
          <p className="text-[18px] text-white/80 max-w-2xl">
            My journey in software development, from academic projects to
            professional applications.
          </p>
        </div>
      </div>

      {/* Experience Content */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-16 last:mb-0">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h2 className="text-[28px] font-bold text-[#2c3e50] dark:text-white mb-2">
                          {exp.title}
                        </h2>
                        <div className="flex items-center text-[#7f8c8d] dark:text-gray-400 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-[16px]">{exp.period}</span>
                        </div>
                        {exp.role && (
                          <div className="text-[16px] font-medium text-[#004162] dark:text-blue-400 mb-2">
                            Role: {exp.role}
                          </div>
                        )}
                        <div className="text-[14px] font-medium text-[#004162] dark:text-blue-400 mb-4">
                          {exp.type}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-[18px] font-bold text-[#2c3e50] dark:text-white mb-3">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.split(", ").map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-[#ecf0f1] dark:bg-gray-700 text-[#2c3e50] dark:text-gray-200 text-[14px] rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-[18px] font-bold text-[#2c3e50] dark:text-white mb-3">
                        Project Overview
                      </h3>
                      <p className="text-[16px] text-[#34495e] dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[18px] font-bold text-[#2c3e50] dark:text-white mb-3">
                        Key Achievements
                      </h3>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-[#004162] dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-[16px] text-[#34495e] dark:text-gray-300">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-[#ecf0f1] dark:bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto border dark:border-gray-700">
              <h3 className="text-[24px] font-bold text-[#2c3e50] dark:text-white mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-[16px] text-[#7f8c8d] dark:text-gray-300 mb-6">
                I'm always open to discussing new opportunities and exciting
                projects.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center bg-[#004162] dark:bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-[#003451] dark:hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get In Touch
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExperiencePage;
