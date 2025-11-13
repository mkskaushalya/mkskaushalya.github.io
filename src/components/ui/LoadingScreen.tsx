import React, { useState, useEffect } from "react";

const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center 
        bg-[#f8f8ff]/60 dark:bg-gray-900/80 backdrop-blur-sm transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Circle 1 */}
        <div
          className="absolute w-20 h-20 rounded-full 
            bg-gradient-to-r from-[#3423f8]/30 to-[#4426fd]/30 
            animate-[pulse-circle_2s_linear_infinite]"
          style={{
            animation: "pulse-circle 2s linear infinite",
          }}
        ></div>

        {/* Circle 2 */}
        <div
          className="absolute w-16 h-16 rounded-full 
            bg-gradient-to-r from-[#3423f8]/40 to-[#4426fd]/45 
            animate-[pulse-circle_2.5s_linear_infinite]"
          style={{
            animation: "pulse-circle 2.5s linear infinite",
          }}
        ></div>

        {/* Circle 3 */}
        <div
          className="absolute w-12 h-12 rounded-full 
            bg-gradient-to-r from-[#3423f8]/40 to-[#4426fd]/45 
            animate-[pulse-circle_3s_linear_infinite]"
          style={{
            animation: "pulse-circle 3s linear infinite",
          }}
        ></div>

        {/* Circle 4 */}
        <div
          className="absolute w-8 h-8 rounded-full 
            bg-gradient-to-r from-[#3423f8]/40 to-[#4426fd]/45 
            animate-[pulse-circle_3.5s_linear_infinite]"
          style={{
            animation: "pulse-circle 3.5s linear infinite",
          }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
