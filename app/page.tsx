import CTASection from "@/components/cta/cta-section";
import HeroSection from "@/components/hero/hero";
import ServicesSection from "@/components/services/services-section";
import TeamSection from "@/components/team/TeamSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";


export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <ServicesSection/>
      <TeamSection/>
      <TestimonialsSection/>
      <CTASection/>
    </div>
  );
}
