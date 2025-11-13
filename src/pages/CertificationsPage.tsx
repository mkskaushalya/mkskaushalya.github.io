import React from "react";
import { Award, Calendar, CheckCircle } from "lucide-react";

const CertificationsPage: React.FC = () => {
  const certifications = [
    {
      title: "AWS Academy Graduate - Cloud Architecting",
      provider: "AWS Academy",
      issueDate: "2024",
      credentialId: "AWS-ARCH-2024",
      description:
        "Recognized for completing advanced coursework in AWS solution architecture and best practices, hands-on labs, and project work",
      skills: [
        "AWS Solution Architecture",
        "Cloud Best Practices",
        "Hands-on Labs",
        "Project Implementation",
      ],
      badge: "🏆",
      level: "Advanced",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      provider: "AWS Academy",
      issueDate: "2024",
      credentialId: "AWS-FOUND-2024",
      description:
        "Completed foundational training in AWS services, architecture, and pricing models",
      skills: [
        "AWS Services Overview",
        "Cloud Architecture",
        "Pricing Models",
        "Security Fundamentals",
      ],
      badge: "☁️",
      level: "Foundation",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Linux: Introduction to Shell Scripting for DevOps",
      provider: "Coursera",
      issueDate: "2024",
      credentialId: "COURSERA-LINUX-2024",
      description:
        "Write and be able to read Bash scripts, and understand the fundamental components involved in Bash scripting",
      skills: [
        "Bash Scripting",
        "Shell Commands",
        "DevOps Automation",
        "Linux Administration",
      ],
      badge: "🐧",
      level: "Intermediate",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Google AI Essentials Specialization",
      provider: "Google",
      issueDate: "2024",
      credentialId: "GOOGLE-AI-2024",
      description:
        "Master generative AI to work faster and more strategically through effective and responsible use",
      skills: [
        "Generative AI",
        "AI Strategy",
        "Responsible AI Use",
        "AI Applications",
      ],
      badge: "🤖",
      level: "Specialization",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const upcomingCertifications = [
    {
      title: "AWS Certified Solutions Architect - Associate",
      provider: "Amazon Web Services",
      expectedDate: "Q2 2025",
      status: "In Progress",
    },
    {
      title: "Docker Certified Associate",
      provider: "Docker Inc.",
      expectedDate: "Q3 2025",
      status: "Planned",
    },
    {
      title: "Kubernetes Administrator (CKA)",
      provider: "Cloud Native Computing Foundation",
      expectedDate: "Q4 2025",
      status: "Planned",
    },
  ];

  const stats = [
    { label: "Completed Certifications", value: "4", color: "text-green-600" },
    { label: "Hours of Training", value: "200+", color: "text-blue-600" },
    { label: "Skill Areas Covered", value: "6", color: "text-purple-600" },
    { label: "Upcoming Certifications", value: "3", color: "text-orange-600" },
  ];

  return (
    <main className="flex-1 bg-white dark:bg-gray-900">
      {/* Page Header */}
      <div className="bg-[#004162] dark:bg-gray-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-[48px] font-bold mb-4">Certifications</h1>
          <p className="text-[18px] text-white/80 max-w-2xl">
            Professional certifications and training programs that demonstrate
            my commitment to continuous learning and skill development.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-[36px] font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-[14px] text-[#7f8c8d] dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Content */}
      <div className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Completed Certifications */}
            <div className="mb-16">
              <h2 className="text-[32px] font-bold text-[#2c3e50] dark:text-white dark:text-white mb-8 text-center">
                Completed Certifications
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div
                      className={`bg-gradient-to-r ${cert.color} p-6 text-white`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="text-2xl mr-3">{cert.badge}</span>
                            <span className="text-[14px] bg-white/20 px-3 py-1 rounded-full">
                              {cert.level}
                            </span>
                          </div>
                          <h3 className="text-[22px] font-bold mb-2">
                            {cert.title}
                          </h3>
                          <p className="text-[16px] opacity-90">
                            {cert.provider}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between text-[14px] text-[#7f8c8d] dark:text-gray-400 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>Issued: {cert.issueDate}</span>
                        </div>
                        <span className="font-mono">{cert.credentialId}</span>
                      </div>

                      <p className="text-[15px] text-[#34495e] dark:text-gray-300 mb-4 leading-relaxed">
                        {cert.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-[16px] font-bold text-[#2c3e50] dark:text-white mb-2">
                          Skills Validated
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="text-[12px] bg-[#ecf0f1] dark:bg-gray-700 text-[#2c3e50] dark:text-white px-2 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Certifications */}
            <div className="mb-16">
              <h2 className="text-[32px] font-bold text-[#2c3e50] dark:text-white mb-8 text-center">
                Upcoming Certifications
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {upcomingCertifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Award className="w-8 h-8 text-[#f39c12]" />
                      <span
                        className={`text-[12px] px-3 py-1 rounded-full ${
                          cert.status === "In Progress"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {cert.status}
                      </span>
                    </div>
                    <h3 className="text-[18px] font-bold text-[#2c3e50] dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-[14px] text-[#7f8c8d] dark:text-gray-400 mb-3">
                      {cert.provider}
                    </p>
                    <div className="flex items-center text-[14px] text-[#34495e] dark:text-gray-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Expected: {cert.expectedDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification Benefits */}
            <div className="bg-gradient-to-r from-[#3498db] to-[#2980b9] rounded-lg p-8 text-white">
              <div className="text-center mb-8">
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <h2 className="text-[28px] font-bold mb-4">
                  Why Certifications Matter
                </h2>
                <p className="text-[16px] opacity-90 max-w-2xl mx-auto">
                  These certifications represent my commitment to staying
                  current with industry best practices and emerging
                  technologies.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-6 mb-4">
                    <div className="text-[24px] mb-2">🎯</div>
                    <h3 className="text-[18px] font-bold mb-2">
                      Validated Skills
                    </h3>
                    <p className="text-[14px] opacity-90">
                      Third-party validation of technical competencies and
                      industry knowledge
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-6 mb-4">
                    <div className="text-[24px] mb-2">📈</div>
                    <h3 className="text-[18px] font-bold mb-2">
                      Continuous Learning
                    </h3>
                    <p className="text-[14px] opacity-90">
                      Commitment to staying updated with the latest technologies
                      and best practices
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-6 mb-4">
                    <div className="text-[24px] mb-2">🚀</div>
                    <h3 className="text-[18px] font-bold mb-2">
                      Career Growth
                    </h3>
                    <p className="text-[14px] opacity-90">
                      Enhanced credibility and expanded opportunities in the
                      tech industry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CertificationsPage;
