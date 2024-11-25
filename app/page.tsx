import { HeroSection } from "@/components/hero";
import FeaturedProjects from "@/components/featured-project";
import { Testimonials } from "@/components/testimonials";
import { TeamSection } from "@/components/team-section";
import { ProcessTimeline } from "@/components/process-timeline";
import { TechStackSection } from "@/components/tech-stack";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-form";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProjects />
      <Testimonials />
      <ProcessTimeline />
      <TechStackSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
