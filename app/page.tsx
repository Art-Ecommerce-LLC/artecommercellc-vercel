"use client";

import HeroSection from "@/app/components/Hero/HeroSection";
import ServicesSection from "@/app/components/Services/ServicesSection";
import IntegrationsSection from "@/app/components/Integrations/IntegrationsSection";
import AboutSection from "@/app/components/About/AboutSection";

export default function Home() {

  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IntegrationsSection />
    </div>
  );
}
