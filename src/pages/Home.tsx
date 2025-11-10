import React from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Stats from "../components/Home/Stats";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Footer from "../components/Home/Footer";
import Modal from "../components/Home/Modal";

const Home: React.FC = () => {
  return (
    <div className="font-inter overflow-x-hidden bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2d2d2d] text-gray-100">
      <Navbar />
      <Hero />
      <Projects />
      <Stats />
      <WhyChooseUs />
      <Footer />
      <Modal />
    </div>
  );
};

export default Home;
