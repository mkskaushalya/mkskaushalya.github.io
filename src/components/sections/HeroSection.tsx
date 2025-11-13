import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import Button from "../ui/Button";

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-0 mb-16 relative w-full flex justify-center items-center"
    >
      <div className="container-custom">
        <div
          className="flex flex-col lg:flex-row justify-between items-center 
          bg-gradient-to-b from-[#e8f3ff] to-[#eaeaff] 
          dark:from-gray-800 dark:to-gray-900
          p-[30px] rounded-[30px] shadow-[0px_0px_0px_0px_rgba(33,39,38,0.05),2px_2px_6px_0px_rgba(33,39,38,0.05),7px_7px_10px_0px_rgba(33,39,38,0.04),16px_16px_14px_0px_rgba(33,39,38,0.03),29px_29px_16px_0px_rgba(33,39,38,0.01),45px_45px_18px_0px_rgba(33,39,38,0)] 
          dark:shadow-[0px_0px_0px_0px_rgba(255,255,255,0.05),2px_2px_6px_0px_rgba(255,255,255,0.05),7px_7px_10px_0px_rgba(255,255,255,0.04),16px_16px_14px_0px_rgba(255,255,255,0.03),29px_29px_16px_0px_rgba(255,255,255,0.01),45px_45px_18px_0px_rgba(255,255,255,0)]
          min-h-[500px]"
        >
          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-5">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-bold text-[#004162] dark:text-blue-400 leading-none text-center lg:text-left m-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Hi, I'm Sahan Kaushalya
            </h1>

            <h2 
              className="text-xl md:text-2xl lg:text-[25px] font-semibold text-[#212627] dark:text-gray-200 text-center lg:text-left m-0 p-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Intern Software Engineer | Full-Stack Developer
            </h2>

            <p 
              className="text-lg text-[#333] dark:text-gray-300 font-medium leading-relaxed text-center lg:text-left m-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Undergraduate in Information and Communication Engineering with
              expertise in full-stack software development, cloud computing
              (AWS), DevOps tools (CI/CD, Docker), and UI/UX design. Currently
              seeking opportunities to apply technical expertise and contribute
              to production-ready software projects.
            </p>

            <div 
              className="flex flex-col md:flex-row gap-4 items-center lg:items-start w-full md:w-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Button
                onClick={() => scrollToSection("about")}
                variant="default"
                size="lg"
                className="rounded-[30px] text-lg w-full md:w-auto min-w-[160px]"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Link to="/portfolio" className="w-full md:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-[30px] text-lg w-full md:w-auto min-w-[160px]"
                >
                  View Portfolio
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              <a
                href="/Sahan_Kaushalya_Resume.pdf"
                download="Sahan_Kaushalya_Resume.pdf"
                className="w-full md:w-auto"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-[30px] text-lg w-full md:w-auto min-w-[160px]"
                >
                  Download Resume
                  <Download className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div 
            className="w-full lg:w-1/2 flex justify-center items-center"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <img
              src="/img/heroimg.svg"
              alt="Sahan Kaushalya - Software Engineer"
              className="max-h-[300px] lg:max-h-[500px] w-auto animate-[updown_5s_ease-in-out_infinite] filter dark:brightness-90"
              style={{
                animation: "updown 5s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
