import React from "react";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import Button from "../ui/Button";

const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      subtitle: "mkskaushalya@gmail.com",
      action: "mailto:mkskaushalya@gmail.com",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      subtitle: "+94-787520742",
      action: "tel:+94787520742",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      subtitle: "Kosgama, Colombo, Sri Lanka",
      action: "#",
      color: "text-purple-600 dark:text-purple-400",
    },
  ];

  return (
    <section
      id="contact"
      className="pt-[100px] pb-[100px] relative w-full flex justify-center items-center bg-white dark:bg-gray-900"
    >
      <div className="container-custom">
        <div className="flex flex-col gap-[30px]">
          {/* Section Title */}
          <h2 
            className="relative text-[30px] font-semibold text-[#004162] dark:text-white max-w-[1200px] leading-none"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Contact Me
            <span className="absolute left-0 -top-5 w-20 h-1 bg-gradient-to-r from-[#d0d0ff] to-[#004162] dark:from-blue-400 dark:to-blue-600 rounded-sm transform -translate-y-1/2"></span>
          </h2>

          {/* Contact Content */}
          <div className="gap-5">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div 
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="text-center mb-8">
                  <MessageCircle className="w-16 h-16 mx-auto mb-4 text-[#004162] dark:text-blue-400" />
                  <h3 className="text-2xl font-bold text-[#004162] dark:text-white mb-4">
                    Get In Touch
                  </h3>
                  <p className="text-base text-[#333] dark:text-gray-300 leading-relaxed">
                    I'm always open to discussing new opportunities,
                    collaborations, or just having a chat about technology and
                    development.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                      data-aos="fade-up"
                      data-aos-delay={400 + index * 100}
                    >
                      <div className={`${method.color} mr-4`}>
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {method.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {method.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div 
                className="bg-gradient-to-br from-[#004162] to-blue-700 dark:from-blue-600 dark:to-purple-700 rounded-2xl p-8 shadow-lg text-white"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Let's Work Together
                  </h3>
                  <p className="text-lg opacity-90 mb-8 leading-relaxed">
                    Whether you have a project in mind, need technical
                    consultation, or want to collaborate on something amazing,
                    I'd love to hear from you.
                  </p>

                  <div className="space-y-4">
                    <a href="mailto:mkskaushalya@gmail.com?subject=Project Inquiry">
                      <Button
                        variant="secondary"
                        size="lg"
                        className="w-full rounded-[30px] text-lg bg-white text-[#004162] hover:bg-gray-100 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Send Email
                      </Button>
                    </a>

                    <a href="tel:+94787520742">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full rounded-[30px] text-lg border-white text-white hover:bg-white hover:text-[#004162] dark:border-gray-300 dark:hover:bg-gray-100 dark:hover:text-gray-900"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </Button>
                    </a>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-sm opacity-75">
                      Available for freelance work and full-time opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
