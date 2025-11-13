import React from "react";
import { Code, Cloud, Database, Wrench, Palette, Server } from "lucide-react";

const SkillsPage: React.FC = () => {
  const skillCategories = [
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "AWS (EC2, S3, IAM, VPC)", level: 85 },
        { name: "Google Cloud Platform (GCP)", level: 75 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "GitHub Actions", level: 85 },
        { name: "Linux Administration", level: 80 },
        { name: "Bash Scripting", level: 75 },
      ],
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      skills: [
        { name: "TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "PHP", level: 80 },
        { name: "Java", level: 75 },
        { name: "SQL", level: 85 },
        { name: "R", level: 70 },
        { name: "C++", level: 75 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Server className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "Laravel", level: 85 },
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "NumPy", level: 75 },
        { name: "OpenCV", level: 70 },
      ],
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 80 },
        { name: "GitHub Copilot", level: 85 },
        { name: "JetBrains IDEs", level: 75 },
        { name: "Katalon", level: 70 },
      ],
    },
    {
      title: "Development Tools",
      icon: <Wrench className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Puppeteer", level: 75 },
        { name: "Matplotlib", level: 75 },
        { name: "CI/CD Pipeline", level: 80 },
        { name: "Testing & QA", level: 80 },
        { name: "Server Administration", level: 75 },
        { name: "Network Administration", level: 70 },
      ],
    },
    {
      title: "Design & Others",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-pink-600",
      skills: [
        { name: "UI/UX Design", level: 80 },
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 75 },
        { name: "Graphic Design", level: 75 },
        { name: "Automation", level: 80 },
        { name: "Basic Electronics", level: 70 },
        { name: "Project Management", level: 75 },
      ],
    },
  ];

  const certifications = [
    {
      title: "AWS Academy Graduate - Cloud Architecting",
      provider: "AWS Academy",
      description:
        "Advanced coursework in AWS solution architecture and best practices, hands-on labs, and project work",
      year: "2024",
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      provider: "AWS Academy",
      description:
        "Foundational training in AWS services, architecture, and pricing models",
      year: "2024",
    },
    {
      title: "Linux: Introduction to Shell Scripting for DevOps",
      provider: "Coursera",
      description:
        "Write and read Bash scripts, understand fundamental components involved in Bash scripting",
      year: "2024",
    },
    {
      title: "Google AI Essentials Specialization",
      provider: "Google",
      description:
        "Master generative AI to work faster and more strategically through effective and responsible use",
      year: "2024",
    },
  ];

  return (
    <main className="flex-1 bg-white dark:bg-gray-900">
      {/* Page Header */}
      <div className="bg-[#004162] dark:bg-gray-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-[48px] font-bold mb-4">Technical Skills</h1>
          <p className="text-[18px] text-white/80 max-w-2xl">
            A comprehensive overview of my technical expertise across various
            domains of software development.
          </p>
        </div>
      </div>

      {/* Skills Content */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Skills Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
                >
                  <div
                    className={`bg-gradient-to-r ${category.color} p-6 text-white`}
                  >
                    <div className="flex items-center">
                      {category.icon}
                      <h2 className="text-[24px] font-bold ml-3">
                        {category.title}
                      </h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[16px] font-medium text-[#2c3e50] dark:text-white">
                              {skill.name}
                            </span>
                            <span className="text-[14px] text-[#7f8c8d] dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-500`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Section */}
            <div className="mb-16">
              <h2 className="text-[32px] font-bold text-[#2c3e50] dark:text-white mb-8 text-center">
                Certifications & Training
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-[20px] font-bold text-[#2c3e50] dark:text-white flex-1 pr-4">
                        {cert.title}
                      </h3>
                      <span className="text-[14px] bg-[#3498db] text-white px-3 py-1 rounded-full">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-[16px] font-medium text-[#3498db] mb-3">
                      {cert.provider}
                    </p>
                    <p className="text-[15px] text-[#7f8c8d] leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Summary */}
            <div className="bg-gradient-to-r from-[#2c3e50] to-[#34495e] rounded-lg p-8 text-white text-center">
              <h2 className="text-[28px] font-bold mb-4">Skills Summary</h2>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-[36px] font-bold text-[#3498db] mb-2">
                    40+
                  </div>
                  <div className="text-[16px]">Technical Skills</div>
                </div>
                <div>
                  <div className="text-[36px] font-bold text-[#e74c3c] mb-2">
                    6
                  </div>
                  <div className="text-[16px]">Skill Categories</div>
                </div>
                <div>
                  <div className="text-[36px] font-bold text-[#27ae60] mb-2">
                    4
                  </div>
                  <div className="text-[16px]">Certifications</div>
                </div>
              </div>
              <p className="text-[16px] text-white/80 mt-6 max-w-2xl mx-auto">
                Continuously learning and adapting to new technologies to stay
                at the forefront of software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SkillsPage;
