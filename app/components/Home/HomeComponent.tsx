"use client";

import HeroSection from "../Hero/HeroSection";
import ServicesSection from "../Services/ServicesSection";
import IntegrationsSection from "../Integrations/IntegrationsSection";
import AboutSection from "../About/AboutSection";
import Footer from "../Footer";
import NavbarComponent from "../Navbar";
import MetricsOverview from "../MetricsOverview";


export default function Home() {

  return (
    <div className="w-full bg-[var(--dark-grey)]">

      <NavbarComponent isActive={"Home"} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MetricsOverview />
      <IntegrationsSection />
      <Footer />
    </div>
  );
}
