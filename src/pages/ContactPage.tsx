import React from "react";
import ContactHeader from "../components/Contact/ContactHeader";
import ContactForm from "../components/Contact/ContactForm";
import Navbar from "../components/NavBar";

const ContactPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white overflow-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <Navbar />
      <ContactHeader />
      <ContactForm />
    </main>
  );
};

export default ContactPage;
