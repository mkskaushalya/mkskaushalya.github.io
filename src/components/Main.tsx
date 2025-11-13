import React from "react";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SectionsOverviewSection from "./sections/SectionsOverviewSection";
import ContactSection from "./sections/ContactSection";

const Main: React.FC = () => {
  return (
    <main className="flex-1">
      <HeroSection />
      <AboutSection />
      <SectionsOverviewSection />
      <ContactSection />
    </main>
  );
};

export default Main;
