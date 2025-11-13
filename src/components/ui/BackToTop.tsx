import React, { useState, useEffect } from "react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-5 right-5 bg-[#004162] dark:bg-blue-600 text-white 
        w-10 h-10 rounded-[20px] cursor-pointer z-[1000] 
        transition-all duration-300 flex justify-center items-center
        hover:bg-[#333] dark:hover:bg-blue-700 hover:translate-y-[-5px] ${
          isVisible ? "block" : "hidden"
        }`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-[25px] h-[25px] fill-white"
      >
        <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
      </svg>
    </button>
  );
};

export default BackToTop;
