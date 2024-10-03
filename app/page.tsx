"use client";

import HeroSection from "./components/Hero/HeroSection";
import ServicesSection from "./components/Services/ServicesSection";
import IntegrationsSection from "./components/Integrations/IntegrationsSection";
import AboutSection from "./components/About/AboutSection";
import Footer from "./components/Footer";
import NavbarComponent from "./components/Navbar";

export default function Home() {

  return (
    <div className="w-full bg-[var(--dark-grey)]">
      <NavbarComponent isActive={"Home"} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IntegrationsSection />
      <Footer />
    </div>
  );
}
