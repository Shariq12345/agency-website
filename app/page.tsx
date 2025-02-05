import { HeroSection } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { TeamSection } from "@/components/team-section";
import { ProcessTimeline } from "@/components/process-timeline";
import { TechStackSection } from "@/components/tech-stack";
import { FAQSection } from "@/components/faq-section";
import FeaturedProject from "@/components/featured-project";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProject />
      <Testimonials />
      <ProcessTimeline />
      <TechStackSection />
      <TeamSection />
      <FAQSection />
    </div>
  );
}
