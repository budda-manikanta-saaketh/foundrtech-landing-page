import React from "react";
import Footer from "../components/Home/Footer";
import Navbar from "../components/NavBar";
import CTASection from "../components/Services/CTASection";
import CoreServices from "../components/Services/CoreService";
import DevelopmentProcess from "../components/Services/DevelopmentProcess";
import ServicesHeader from "../components/Services/ServiceHeader";
import TechStack from "../components/Services/TechStack";

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2d2d2d] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <ServicesHeader />
        <CoreServices />
        <DevelopmentProcess />
        <TechStack />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
