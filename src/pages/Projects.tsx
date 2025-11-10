import React from "react";
import Navbar from "../components/NavBar";
import PageHeader from "../components/Projects/PageHeader";
import ProjectCategories from "../components/Projects/ProjectCategories";
import TechExpertise from "../components/Projects/TechExpertise";
import CTASection from "../components/Projects/CTASection";
import Footer from "../components/Projects/Footer";
import ProjectModal from "../components/Projects/ProjectModal";
import ProjectsSection from "../components/Projects/ProjectGrid";

const Projects: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2d2d2d] text-white min-h-screen">
      <Navbar />
      <main>
        <PageHeader />
        <ProjectCategories />
        <ProjectsSection />
        <TechExpertise />
        <CTASection />
      </main>
      <Footer />
      <ProjectModal />
    </div>
  );
};

export default Projects;
