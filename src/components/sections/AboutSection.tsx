import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { programmingSkills } from "../../data/skills";
import Button from "../ui/Button";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="pt-[100px] pb-[40px] relative w-full flex justify-center items-center bg-gray-800"
    >
      <div className="container-custom">
        <div className="flex flex-col gap-2.5">
          {/* Section Title */}
          <h2 
            className="relative text-[30px] font-semibold text-[#004162] dark:text-white max-w-[1200px] leading-none"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            About me
            <span className="absolute left-0 -top-5 w-20 h-1 bg-gradient-to-r from-[#d0d0ff] to-[#004162] dark:from-blue-400 dark:to-blue-600 rounded-sm transform -translate-y-1/2"></span>
          </h2>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center w-full">
            {/* Text Content */}
            <div className="flex flex-col gap-[15px] items-start justify-center text-left">
              <p 
                className="text-base text-[#333] dark:text-gray-300 leading-relaxed"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                I'm an undergraduate in BSc (Hons) Eng. in Information and
                Communication Engineering with experience in full-stack software
                development, quality assurance and testing, cloud computing
                (AWS), version control, database management, DevOps tools
                (CI/CD, Docker), and UI/UX design.
              </p>

              <p 
                className="text-base text-[#333] dark:text-gray-300 leading-relaxed"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                Currently seeking an Intern Software Engineer role to apply
                technical expertise and contribute to production-ready software
                projects while further developing practical skills in software
                development and operations.
              </p>

              <p 
                className="text-base text-[#333] dark:text-gray-300 leading-relaxed"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                My recent projects showcase my expertise in modern technologies:
              </p>

              <ul 
                className="list-disc list-inside space-y-2 text-base text-[#333] dark:text-gray-300 leading-relaxed ml-4"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <li>
                  <strong className="text-[#004162] dark:text-blue-400">
                    Real-Time Landscape Contour Mapping System:
                  </strong>{" "}
                  Advanced AI-powered terrain analysis system using computer
                  vision and GPT-4o integration.
                </li>
                <li>
                  <strong className="text-[#004162] dark:text-blue-400">
                    SLTC Student ID Generation System:
                  </strong>{" "}
                  Full-stack application with SMS OTP verification, serving
                  3000+ students with 95% deployment success rate.
                </li>
              </ul>

              <p className="text-base text-[#333] dark:text-gray-300 leading-relaxed">
                I hold certifications from AWS Academy in Cloud Architecting and
                Cloud Foundations, plus specialized training in Linux shell
                scripting and Google AI Essentials. I'm also actively involved
                in the IEEE Sri Lanka Section, serving in executive committee
                and webmaster roles.
              </p>

              {/* Action Buttons */}
              <div 
                className="flex flex-wrap gap-4 mt-6"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <Link to="/experience">
                  <Button variant="default">
                    View Experience
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/education">
                  <Button variant="outline">
                    View Education
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/skills">
                  <Button variant="gradient">
                    View Skills
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* About Image */}
            <div className="min-w-[40%] h-full flex items-center justify-center">
              <div 
                className="w-full h-full flex justify-center items-center"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                <img
                  src="/img/about.svg"
                  alt="About Sahan Kaushalya"
                  className="max-h-[300px] transition-transform duration-1000 hover:scale-105 filter dark:brightness-90"
                />
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="pt-[30px] flex flex-col gap-5 w-full">
            <h3 
              className="text-[25px] font-semibold text-[#004162] dark:text-blue-400 text-center leading-none m-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Technical Skills
            </h3>

            <div className="flex flex-row justify-center items-center w-full flex-wrap gap-5">
              {programmingSkills.slice(0, 8).map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center
                    bg-gradient-to-b from-[#e8f3ff] to-[#eaeaff] 
                    dark:from-gray-800 dark:to-gray-700
                    aspect-square w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32
                    rounded-[30px] shadow-[0px_0px_0px_0px_rgba(33,39,38,0.05),2px_2px_6px_0px_rgba(33,39,38,0.05),7px_7px_10px_0px_rgba(33,39,38,0.04),16px_16px_14px_0px_rgba(33,39,38,0.03),29px_29px_16px_0px_rgba(33,39,38,0.01),45px_45px_18px_0px_rgba(33,39,38,0)]
                    dark:shadow-[0px_0px_0px_0px_rgba(255,255,255,0.05),2px_2px_6px_0px_rgba(255,255,255,0.05),7px_7px_10px_0px_rgba(255,255,255,0.04),16px_16px_14px_0px_rgba(255,255,255,0.03),29px_29px_16px_0px_rgba(255,255,255,0.01),45px_45px_18px_0px_rgba(255,255,255,0)]
                    p-4 transition-transform duration-1000 hover:scale-105 border border-transparent dark:border-gray-600"
                  data-aos="zoom-in"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="h-3/5 flex justify-center items-center">
                    <img
                      src={skill.icon}
                      alt={`${skill.name} Logo`}
                      className="max-h-full max-w-full object-contain transition-transform duration-1000 hover:scale-105 filter dark:brightness-90"
                      loading="lazy"
                    />
                  </div>
                  <div className="h-2/5 flex justify-center items-center">
                    <p className="text-xs md:text-sm text-center text-[#212627] dark:text-gray-200 font-medium leading-tight">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Skills Button */}
            <div 
              className="flex justify-center mt-6"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <Link to="/skills">
                <Button
                  variant="gradient"
                  size="lg"
                  className="bg-gradient-to-r from-[#004162] to-[#0056b3] hover:from-[#003451] hover:to-[#004085]"
                >
                  View All Skills & Certifications
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
