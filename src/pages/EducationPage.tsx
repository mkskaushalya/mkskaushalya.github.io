import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const EducationPage: React.FC = () => {
  const education = {
    degree: "BSc (Hons) Eng. in Information & Communication Engineering",
    university: "SLTC Research University",
    location: "Meepe, Padukka, Sri Lanka",
    period: "Mar 2021 – Present",
    status: "Ongoing",
    thesis: "Real-Time Landscape Contour Mapping System Using Computer Vision",
    majors: [
      "Computer Science",
      "Engineering",
      "Telecommunications",
      "Cloud Computing",
    ],
  };

  const coursework = [
    {
      category: "Programming & Software Development",
      courses: [
        "Object-Oriented Programming (Java, C++)",
        "Web Development (HTML, CSS, JavaScript, PHP)",
        "Database Systems (MySQL, SQL)",
        "Software Engineering Principles",
        "Data Structures and Algorithms",
      ],
    },
    {
      category: "Cloud Computing & DevOps",
      courses: [
        "AWS Cloud Architecture",
        "Cloud Foundations",
        "DevOps Tools and Practices",
        "Container Technologies (Docker)",
        "CI/CD Pipeline Implementation",
      ],
    },
    {
      category: "Engineering & Telecommunications",
      courses: [
        "Digital Signal Processing",
        "Network Engineering",
        "Communication Systems",
        "Electronics and Circuit Design",
        "System Analysis and Design",
      ],
    },
    {
      category: "Computer Vision & AI",
      courses: [
        "Computer Vision Algorithms",
        "Image Processing",
        "Machine Learning Fundamentals",
        "Artificial Intelligence Applications",
        "Pattern Recognition",
      ],
    },
  ];

  const achievements = [
    "Pursuing thesis on Real-Time Landscape Contour Mapping System",
    "Major focus on Computer Science, Engineering, Telecommunications, and Cloud Computing",
    "Hands-on experience with AWS cloud services through academic projects",
    "Active participation in IEEE Sri Lanka Section activities",
    "Executive committee member and webmaster roles in IEEE societies",
  ];

  return (
    <main className="flex-1 bg-white dark:bg-gray-900">
      {/* Page Header */}
      <div className="bg-[#004162] dark:bg-gray-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-[48px] font-bold mb-4">Education</h1>
          <p className="text-[18px] text-white/80 max-w-2xl">
            My academic journey in Information and Communication Engineering
            with focus on modern technologies.
          </p>
        </div>
      </div>

      {/* Education Content */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Main Degree */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden mb-12">
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div className="bg-[#004162] dark:bg-blue-600 p-3 rounded-lg mr-4">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-[28px] font-bold text-[#2c3e50] dark:text-white mb-2">
                      {education.degree}
                    </h2>
                    <div className="flex items-center text-[#7f8c8d] dark:text-gray-400 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-[16px]">
                        {education.university} | {education.location}
                      </span>
                    </div>
                    <div className="flex items-center text-[#7f8c8d] dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-[16px]">
                        {education.period} ({education.status})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-[20px] font-bold text-[#2c3e50] dark:text-white mb-4">
                      Major Areas of Study
                    </h3>
                    <div className="space-y-2">
                      {education.majors.map((major, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-[#004162] dark:bg-blue-400 rounded-full mr-3"></div>
                          <span className="text-[16px] text-[#34495e] dark:text-gray-300">
                            {major}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[20px] font-bold text-[#2c3e50] dark:text-white mb-4">
                      Thesis Project
                    </h3>
                    <div className="bg-[#ecf0f1] dark:bg-gray-700 rounded-lg p-4">
                      <p className="text-[16px] text-[#34495e] dark:text-gray-300 font-medium">
                        "{education.thesis}"
                      </p>
                      <p className="text-[14px] text-[#7f8c8d] dark:text-gray-400 mt-2">
                        Focus: Computer Vision, Real-time Processing, AI
                        Integration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coursework */}
            <div className="mb-12">
              <h2 className="text-[32px] font-bold text-[#2c3e50] dark:text-white mb-8 text-center">
                Relevant Coursework
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {coursework.map((category, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 p-6"
                  >
                    <h3 className="text-[20px] font-bold text-[#2c3e50] dark:text-white mb-4">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.courses.map((course, courseIndex) => (
                        <li key={courseIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-[#3498db] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-[15px] text-[#34495e] dark:text-gray-300">
                            {course}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Achievements */}
            <div className="bg-gradient-to-r from-[#3498db] to-[#2980b9] rounded-lg p-8 text-white">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 mr-3" />
                <h2 className="text-[28px] font-bold">
                  Academic Achievements & Activities
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[16px]">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[48px] font-bold mb-2">2025</div>
                    <div className="text-[18px] opacity-90">
                      Expected Graduation
                    </div>
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

export default EducationPage;
