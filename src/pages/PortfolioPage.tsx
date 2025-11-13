import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Filter,
  Search,
} from "lucide-react";

const PortfolioPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      title: "Real-Time Landscape Contour Mapping System",
      category: "Computer Vision",
      tags: [
        "Python",
        "OpenCV",
        "Kinect",
        "AI",
        "Machine Learning",
        "NumPy",
        "Matplotlib",
      ],
      period: "May 2024 - May 2025",
      status: "In Progress",
      description:
        "Advanced real-time system that integrates Kinect depth sensor with computer vision algorithms to generate dynamic contour maps projected onto physical terrain. Features GPT-4o AI integration for predictive terrain analysis.",
      image: "/api/placeholder/400/250",
      features: [
        "Real-time depth sensing and processing",
        "Computer vision algorithms for terrain mapping",
        "AI-powered predictive analysis",
        "Dynamic contour map projection",
        "GPT-4o integration for land transformation prediction",
      ],
      technologies: "Python, NumPy, Matplotlib, OpenCV, GPT-4o AI, Kinect SDK",
      github: "#",
      demo: "#",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "SLTC Student ID Generation System",
      category: "Full-Stack Development",
      tags: [
        "Laravel",
        "React",
        "TypeScript",
        "MySQL",
        "AWS",
        "Docker",
        "CI/CD",
      ],
      period: "May 2024 - Nov 2024",
      status: "Completed",
      description:
        "Comprehensive student information management system with SMS OTP verification, automated ID card generation, and cloud deployment. Successfully generated 3000+ student ID cards with 95% deployment success rate.",
      image: "/api/placeholder/400/250",
      features: [
        "SMS OTP-based data collection and verification",
        "Automated bulk ID card generation using Puppeteer",
        "PDF processing with Python integration",
        "AWS EC2 cloud deployment",
        "GitHub Actions CI/CD pipeline with 95% success rate",
      ],
      technologies:
        "Laravel, React, TypeScript, MySQL, Node.js, Puppeteer, Python, AWS EC2, GitHub Actions",
      github: "#",
      demo: "#",
      color: "from-green-500 to-teal-600",
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      category: "Web Development",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Responsive Design",
      ],
      period: "Dec 2024 - Present",
      status: "Completed",
      description:
        "Modern, responsive portfolio website built with React and TypeScript. Features multi-page navigation, interactive components, and optimized performance with Vite build system.",
      image: "/api/placeholder/400/250",
      features: [
        "Multi-page React application with routing",
        "Responsive design with Tailwind CSS",
        "Interactive portfolio showcase",
        "Optimized performance and SEO",
        "Modern component architecture",
      ],
      technologies:
        "React 19, TypeScript, Tailwind CSS v4, Vite 6, React Router",
      github: "https://github.com/mkskaushalya/mkskaushalya.github.io",
      demo: "https://sahan.tute.lk",
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 4,
      title: "Cloud Infrastructure Automation",
      category: "DevOps",
      tags: [
        "AWS",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Infrastructure as Code",
      ],
      period: "2024",
      status: "Ongoing",
      description:
        "Automated cloud infrastructure deployment and management using AWS services, containerization with Docker, and CI/CD pipelines for seamless application deployment.",
      image: "/api/placeholder/400/250",
      features: [
        "AWS infrastructure automation",
        "Containerized application deployment",
        "Kubernetes orchestration",
        "Automated CI/CD pipelines",
        "Infrastructure monitoring and logging",
      ],
      technologies:
        "AWS (EC2, S3, IAM, VPC), Docker, Kubernetes, GitHub Actions, Terraform",
      github: "#",
      demo: "#",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 5,
      title: "AI-Powered Data Analysis Tool",
      category: "Data Science",
      tags: [
        "Python",
        "Machine Learning",
        "Data Analysis",
        "Visualization",
        "AI",
      ],
      period: "2024",
      status: "Planned",
      description:
        "Intelligent data analysis platform that leverages machine learning algorithms to provide insights and predictions from complex datasets with interactive visualizations.",
      image: "/api/placeholder/400/250",
      features: [
        "Machine learning model integration",
        "Interactive data visualizations",
        "Automated report generation",
        "Real-time data processing",
        "AI-powered insights and predictions",
      ],
      technologies:
        "Python, Scikit-learn, Pandas, Matplotlib, Streamlit, TensorFlow",
      github: "#",
      demo: "#",
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 6,
      title: "Mobile Task Management App",
      category: "Mobile Development",
      tags: ["Flutter", "Dart", "Firebase", "Mobile", "Cross-Platform"],
      period: "2024",
      status: "Planned",
      description:
        "Cross-platform mobile application for task management and productivity tracking built with Flutter and Firebase backend integration.",
      image: "/api/placeholder/400/250",
      features: [
        "Cross-platform mobile compatibility",
        "Real-time synchronization",
        "Offline functionality",
        "User authentication and profiles",
        "Task analytics and reporting",
      ],
      technologies:
        "Flutter, Dart, Firebase, SQLite, Provider State Management",
      github: "#",
      demo: "#",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const categories = [
    "All",
    "Computer Vision",
    "Full-Stack Development",
    "Web Development",
    "DevOps",
    "Data Science",
    "Mobile Development",
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedFilter === "All" || project.category === selectedFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="flex-1 bg-white dark:bg-gray-900">
      {/* Page Header */}
      <div className="bg-[#004162] dark:bg-gray-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-[48px] font-bold mb-4">Portfolio</h1>
          <p className="text-[18px] text-white/80 max-w-2xl">
            A showcase of my projects spanning computer vision, full-stack
            development, cloud infrastructure, and more.
          </p>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-[#7f8c8d]" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedFilter(category)}
                      className={`px-4 py-2 rounded-full text-[14px] font-medium transition-colors ${
                        selectedFilter === category
                          ? "bg-[#3498db] text-white"
                          : "bg-white text-[#7f8c8d] hover:bg-[#ecf0f1] dark:bg-gray-700"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#7f8c8d]" />
                <input
                  type="text"
                  placeholder="Search projects or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent w-full lg:w-80"
                />
              </div>
            </div>

            {/* Project Count */}
            <div className="text-[#7f8c8d] mb-8">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Project Header */}
                  <div
                    className={`bg-gradient-to-r ${project.color} p-6 text-white`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-[24px] font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-[14px] opacity-90">
                          {project.category}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-[12px] font-medium ${
                          project.status === "Completed"
                            ? "bg-white/20"
                            : "bg-black/20"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center text-[14px] opacity-90">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.period}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <p className="text-[15px] text-[#34495e] dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Tag className="w-4 h-4 text-[#7f8c8d] mr-2" />
                        <span className="text-[14px] font-medium text-[#2c3e50] dark:text-white">
                          Technologies
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-[12px] bg-[#ecf0f1] dark:bg-gray-700 text-[#2c3e50] dark:text-white px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-[16px] font-bold text-[#2c3e50] dark:text-white mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start text-[14px] text-[#34495e] dark:text-gray-300"
                            >
                              <div className="w-1.5 h-1.5 bg-[#3498db] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        {project.features.length > 3 && (
                          <li className="text-[14px] text-[#7f8c8d] font-medium">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-[#2c3e50] text-white rounded-lg hover:bg-[#34495e] transition-colors text-[14px]"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      )}
                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-[#3498db] text-white rounded-lg hover:bg-[#2980b9] transition-colors text-[14px]"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <div className="text-[#7f8c8d] text-[18px] mb-4">
                  No projects match your criteria
                </div>
                <button
                  onClick={() => {
                    setSelectedFilter("All");
                    setSearchTerm("");
                  }}
                  className="text-[#3498db] hover:text-[#2980b9] font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;
