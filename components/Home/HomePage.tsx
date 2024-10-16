"use client";

import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import IntegrationsSection from "./IntegrationsSection";
import AboutSection from "./AboutSection";
import Footer from "../Footer";
import NavbarComponent from "../Navbar";
import MetricsOverview from "./MetricsOverview";


export default function HomePage() {

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
