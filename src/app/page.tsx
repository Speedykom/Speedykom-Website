import GlobalReachSection from "@/components/GlobalReachSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import WhatWeDoSection from "@/components/WhyWeDoItSection";

export default function Home() {
  return (
  <div className="bg-white text-gray-800">
      <Header />
      <HeroSection />
      <PartnersSection />
      <WhatWeDoSection />
      <GlobalReachSection />
    </div>
  );
}
