import CTASection from "@/components/CTASection";
import ServicesShowcase from "@/components/GlobalReachSection";
import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";
import PartnersSection from "@/components/Partners";

export default function Home() {
  return (
  <div className="bg-white text-gray-800">
      <HeroSection />
      <PartnersSection />
      <MainSection />
      <ServicesShowcase />
      <CTASection />
    </div>
  );
}
